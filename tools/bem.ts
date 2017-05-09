import { Constructor } from 'react-bem-helper';
import * as BEMHelper from 'react-bem-helper';

export const bem: Constructor<string> = BEMHelper.withDefaults({
    prefix: '',
    modifierDelimiter: '_',
    outputIsString: true
});