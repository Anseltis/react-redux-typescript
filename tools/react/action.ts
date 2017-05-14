import { Action } from 'redux';

export function action(type: string): Function {
  return (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => {
    let method: Function = descriptor.value;
    descriptor.value = function(): Action {
        let action: Action = method.apply(this, arguments);
        return {type, ...action};
    };
  };
}

export function type<T>(action: T): T & Action {
    return <T & Action>action;
}

export function use<T>(action: (...args: any[]) => T): (...args: any[]) => T & Action {
    return args => <T & Action>action(args);
}

