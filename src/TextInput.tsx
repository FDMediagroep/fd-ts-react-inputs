import React from 'react';
import { createGlobalStyle, css } from 'styled-components';
import 'date-input-polyfill';

declare var localStorage: any;

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

export enum Patterns {
    MOBILE = "06[0-9]{8}",
    EMAIL = ".+@.+\\.[a-z]{2,3}"
}

export default class TextInput extends React.PureComponent<Props, any> {
    state: any = {
        errorMessage: this.props.errorMessage || 'Voer een geldige waarde in',
        maxLength: this.props.maxLength || null,
        minLength: this.props.minLength || null,
        required: this.props.required || false,
        type: this.props.type || 'text',
        value: ''
    };

    componentDidMount() {
        const value = this.props.localStorage ? localStorage.getItem(`fd-input-${this.props.id}`) : this.props.value || '';
        if (value) {
            this.setState({
                value
            });
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.value !== this.props.value && this.state.value !== this.props.value) {
            this.setState({value: this.props.value});
        }
    }

    checkValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value) {
            (event.currentTarget as HTMLInputElement).setCustomValidity("");
            this.setState({value});
        } else {
            this.setState({value: ''});
        }
        if (this.props.onChange) {
            this.props.onChange(event);
        }
        if (this.props.localStorage) {
            this.store(value);
        }
    }

    store = (value: string) => {
        if (value) {
            localStorage.setItem(`fd-input-${this.props.id}`, value);
        } else {
            localStorage.removeItem(`fd-input-${this.props.id}`);
        }
    }

    handleInvalid = (event: React.FormEvent) => {
        (event.currentTarget as HTMLInputElement).setCustomValidity(this.state.errorMessage);
    }

    render() {
        return (
            <>
                <GlobalStyle/>

                <div className={`fd-input${this.props.className ? ` ${this.props.className}` : ''}`}>
                    <div className="input">
                        <input
                            id={this.props.id}
                            name={this.props.name ? this.props.name : this.props.id}
                            type={this.state.type}
                            minLength={this.state.minLength}
                            maxLength={this.state.maxLength}
                            onChange={this.checkValue}
                            value={this.state.value}
                            required={this.state.required}
                            pattern={this.props.pattern}
                            onInvalid={this.handleInvalid}
                            title={this.props.title ? this.props.title : this.props.label || "Value"}
                            onFocus={this.props.onFocus}
                            onBlur={this.props.onBlur}
                            placeholder={this.props.placeholder ? this.props.placeholder : ' '}
                        />
                        <label htmlFor={this.props.id}>{this.props.label || "Value"} <i className="icon-check"/></label>
                        {this.state.type !== 'date' && this.state.type !== 'datetime' ? <div className="input-message error-message">{this.props.errorMessage}</div> : null}
                        <div className="input-message">{this.props.description}</div>
                    </div>
                </div>
            </>
        );
    }
}

const styles = css`
.fd-input {
    display: inline-block;

    i {
        transition: .4s opacity ease-out;
        opacity: 0;
        position: relative;
        color: #3CAB87;
    }

    p {
        font-size: 12px;
        color: #677381;
    }

    .input {
        position: relative;
        float: left;
        font-family: 'ProximaNovaRegular',sans-serif;
        width: 100%;
        input {
            font-family: 'ProximaNovaRegular',sans-serif;
            padding: 1.4rem 1rem .6rem 1rem;
            font-size: 1rem;
            vertical-align: bottom;
            border: none;
            border-bottom: 0.125rem solid #ccbeb3;
            &:hover {
                border-color: #99908a;
            }
            &:valid {
                border-color: #49a3a1;
            }
            &:focus {
                border: none;
                border-bottom: 0.125rem solid #49a3a1;
            }
            border-radius: 0.1875rem;
            box-sizing: border-box;
            width: 100%;
            height: unset;
            outline: none;
            margin: unset;
            color: #191919;
        }

        label {
            font-family: 'ProximaNovaRegular',sans-serif;
            position: absolute;
            top: 1.2rem;
            left: 1rem;
            line-height: 1;
            padding: 0;
            transition: all .1s ease-out;
            color: #677381;
            font-size: 1rem;
            user-select: none;
            white-space: nowrap;
            cursor: text;
        }

        @supports (-ms-ime-align:auto) {
            input ~ label {
                font-size: .75rem;
                top: .5rem;
            }
        }

        input:not([type="date"]):not([type="datetime"]):not([placeholder=' ']) ~ label {
            font-size: .75rem;
            top: .5rem;
        }
        input:not(:placeholder-shown) ~ label {
            font-size: .75rem;
            top: .5rem;
        }
        input:not(:-ms-input-placeholder) ~ label,
        input:-ms-input-placeholder:not([placeholder=' ']) ~ label {
            font-size: .75rem;
            top: .5rem;
        }

        input[type="date"] ~ label,
        input[type="datetime"] ~ label,
        input:focus ~ label {
            font-size: .75rem;
            top: .5rem;
        }

        .input-message {
            transition: all .3s ease-out;
            font-size: .75rem;
            color: #677382;
            line-height: 1;
            font-family: 'ProximaNovaRegular', sans-serif;
            font-weight: normal;
            margin-left: 1rem;
            &:not(.error-message):not(:empty) {
                max-height: 5rem;
                margin: .5rem 1rem;
            }
        }
        .error-message {
            opacity: 0;
            color: #F57268;
            max-height: 0;
            font-family: 'ProximaNovaBold', sans-serif;
        }
    }

    /**
     * input validation styles
     */
    input:not(:required):focus ~ label > i,
    input:required:valid ~ label > i,
    input:not(:required):valid:not([placeholder=' ']) ~ label > i {
        opacity: 1;
    }
    input:not(:required):not(:placeholder-shown):valid ~ label > i {
        opacity: 1;
    }
    input:not(:required):not(:-ms-input-placeholder):valid ~ label > i {
        opacity: 1;
    }

    input:not([type='date']):not([type='datetime']):required:not(:valid):not(:placeholder-shown):not(:focus) {
        border-color: #F57268;
    }

    input:required:not(:valid):not(:placeholder-shown):not(:focus) ~ .error-message:not(:empty) {
        max-height: 5rem;
        opacity: 1;
        margin: .5rem 1rem;
    }
    input:required:not(:valid):not(:-ms-input-placeholder):not(:focus) ~ .error-message:not(:empty) {
        max-height: 5rem;
        opacity: 1;
        margin: .5rem 1rem;
    }
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export { styles as TextInputStyle};
