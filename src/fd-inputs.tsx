import React from 'react';
import styled from 'styled-components';

declare var localStorage: any;

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

export enum Patterns {
    MOBILE = "06[0-9]{8}",
    EMAIL = ".+@.+\\.[a-z]{2,3}"
}

export default class Input extends React.PureComponent<Props, any> {
    state: any = {
        errorMessage: this.props.errorMessage || 'Voer een geldige waarde in',
        hasValue: false,
        label: this.props.label || "Value",
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
                hasValue: true,
                value
            });
        }
    }

    checkValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value) {
            (event.currentTarget as HTMLInputElement).setCustomValidity("");
            this.setState({hasValue: true, value});
        } else {
            this.setState({hasValue: false, value: ''});
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
            localStorage.setItem(`fd-input-${this.props.id}`, this.state.value);
        } else {
            localStorage.removeItem(`fd-input-${this.props.id}`);
        }
    }

    handleInvalid = (event: React.FormEvent) => {
        (event.currentTarget as HTMLInputElement).setCustomValidity(this.state.errorMessage);
    }

    render() {
        return (
            <StyledInput className={this.props.className}>
                <div className="input">
                    <input
                        className={this.state.hasValue ? 'has-value' : ''}
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
                    />
                    <label htmlFor={this.props.id}>{this.state.label}</label>
                    <i className="ico ico-check"/>
                </div>
            </StyledInput>
        );
    }
}

const StyledInput = styled('div')`
display: inline-block;
i {
    transition: .4s opacity ease-out;
    opacity: 0;
    position: absolute;
    right: .5rem;
    top: 13px;
}
input:valid ~ i {
    opacity: 1;
}
p {
    font-size: 12px;
    color: #677381;
}

.input {
    position: relative;
    float: left;
    font-family: ProximaNovaRegular,sans-serif;
    width: 100%;
    input {
        font-family: ProximaNovaRegular,sans-serif;
        padding: 1.25rem .5rem .5rem .5rem;
        font-size: 14px;
        vertical-align: bottom;
        border: none;
        border-radius: 2px;
        box-sizing: border-box;
        width: 100%;
        height: unset;
        outline: none;
        margin: unset;
        &:focus {
            border: none;
            /* box-shadow: 0 0 5px rgba(0,0,0,0.1); */
            border-bottom: 1px solid rgba(0,0,0,0.4);
        }
    }
    label {
        position: absolute;
        top: 0.7rem;
        left: .5rem;
        padding: 0;
        transition: all 200ms;
        color: #677381;
        font-size: 14px;
        user-select: none;
        cursor: text;
    }
    input:focus ~ label,
    input.has-value ~ label {
        font-size: 50%;
        transform: translate3d(0, -10px, 0);
    }
}
`;
