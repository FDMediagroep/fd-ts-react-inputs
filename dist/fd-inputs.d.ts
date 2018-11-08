import React from 'react';
export interface Props {
    id: string;
    name?: string;
    className?: string;
    value?: string;
    required?: boolean;
    pattern?: Patterns | string;
    label?: string;
    errorMessage?: string;
    type?: string;
    minLength?: number;
    maxLength?: number;
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    localStorage?: boolean;
}
export declare enum Patterns {
    MOBILE = "06[0-9]{8}",
    EMAIL = ".+@.+\\.[a-z]{2,3}"
}
export default class Input extends React.PureComponent<Props, any> {
    state: any;
    componentDidMount(): void;
    checkValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    store: (value: string) => void;
    handleInvalid: (event: React.FormEvent<Element>) => void;
    render(): JSX.Element;
}
