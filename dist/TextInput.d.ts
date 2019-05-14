import React from 'react';
import 'date-input-polyfill';
export interface Props {
    /**
     * Mandatory id of the input element.
     */
    id: string;
    /**
     * Optional name of the input element. Id is used when name is unset.
     */
    name?: string;
    /**
     * Optional className is set as the className of the outmost container element.
     */
    className?: string;
    /**
     * Optional description is set as description text for the input field.
     * Use this to describe the purpose of the field to the user.
     */
    description?: string;
    /**
     * Optional value of the input element.
     */
    value?: string;
    /**
     * Optional. When true the default input validation kicks in. Tip: use in combination with pattern.
     */
    required?: boolean;
    /**
     * Optional. The pattern to which the input value is validated. Only works when required is set to true.
     * Tip: the exported Patterns enum already contains some validation rules for common use-cases.
     */
    pattern?: Patterns | string;
    /**
     * Optional. The label shown in the input field.
     */
    label?: string;
    /**
     * Optional. The native browser tooltip text shown on hover. When omitted then the label is used.
     */
    title?: string;
    /**
     * Optional. Custom error message shown when the value does fit the pattern.
     */
    errorMessage?: string;
    /**
     * Optional. Type of the input field. Default is `text`.
     */
    type?: string;
    /**
     * Optional minimum length of the input field.
     */
    minLength?: number;
    /**
     * Optional maximum length of the input field.
     */
    maxLength?: number;
    /**
     * Optional callback hook triggered when a change event occured in the input field.
     */
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (value: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Optional placeholder text which is alway shown when the input value is empty. Default value is an empty space ' ' needed for specific styling hacks.
     */
    placeholder?: string;
    /**
     * Optional. Store the value to localStorage which will be used as default value upon subsequent visits of the page.
     * Tip: `id` is used as suffix for the property name.
     */
    localStorage?: boolean;
}
export declare enum Patterns {
    MOBILE = "06[0-9]{8}",
    EMAIL = ".+@.+\\.[a-z]{2,3}"
}
export default class TextInput extends React.PureComponent<Props, any> {
    state: any;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    checkValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    store: (value: string) => void;
    handleInvalid: (event: React.FormEvent<Element>) => void;
    render(): JSX.Element;
}
declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export { GlobalStyle as TextInputStyle };
