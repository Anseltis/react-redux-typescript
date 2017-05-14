import { Store} from 'redux';

export function hotReplace<S>(store: Store<S>, moduleName: string): void {
  if ((<any>module).hot) {
    // Enable Webpack hot module replacement for reducers
    (<any>module).hot.accept(moduleName, () => {
      const nextReducer: any = require(moduleName).default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
}