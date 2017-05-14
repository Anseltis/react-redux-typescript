import { Action, Reducer } from 'redux';
import 'reflect-metadata';

const reducerMetadataKey: symbol = Symbol('reducer');

export function reducer(type: string): Function {
  return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => {
    let reducerKeys: object = Reflect.getOwnMetadata(reducerMetadataKey, target) || {};
    reducerKeys[propertyKey] = type;
    Reflect.defineMetadata(reducerMetadataKey, reducerKeys, target);
  };
}

export function createReducer<S>(reducerClass: Function, initialStore: S = undefined): Reducer<S> {
  let reducerKeys: object = Reflect.getOwnMetadata(reducerMetadataKey, reducerClass.prototype) || {};
  let reducerMap: object = {};
  for (var reducerKey in reducerKeys) {
    let reducerName: any = reducerKeys[reducerKey];
    let reducerFunction: Function = reducerClass.prototype[reducerKey];
    if (reducerName && reducerFunction) {
      reducerMap[reducerName] = reducerFunction;
    }
  }
  return (state: S, action: Action): S => {
    if (!reducerMap[action.type]) {
      return state || initialStore;
    }
    return reducerMap[action.type](state, action);
  };
}
