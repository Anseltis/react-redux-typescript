import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

import { BemProps } from '../../tools/react/bem';

export interface TodoAddTextProps extends WrappedFieldProps<any>, React.Props<any>, BemProps  {
}