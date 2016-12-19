import * as React from 'react';
import { Component } from './';

export function withProps(definedProps: any) {
    return (Component: Component): React.StatelessComponent<any> => 
        (props: any) => <Component {...definedProps} {...props} />;
}
