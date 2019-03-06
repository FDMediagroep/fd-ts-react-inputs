import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export interface Props {
    defaultChecked?: boolean;

    /**
     * Mandatory id.
     */
    id: string;

    /**
     * Optional label.
     */
    label?: string;

    /**
     * Optional name used as name for the input field. When omitted the id is used.
     */
    name?: string;

    /**
     * Optional value for the input field. Default is 1.
     */
    value?: string;
}

export default class Checkbox extends PureComponent<Props, any> {
    render() {
        return (
            <>
                <GlobalStyle/>

                <label className="fd-checkbox">
                    <input id={this.props.id} type="checkbox" name={this.props.name ? this.props.name : this.props.id} value={this.props.value} defaultChecked={this.props.defaultChecked}/>
                    <span className="checkbox">{this.props.label}</span>
                </label>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-checkbox {
    input {
        opacity: 0;
        position: absolute;
    }
    .checkbox {
        user-select: none;
        position: relative;
        display: inline-block;
        padding-left: 1.5rem;
        margin-right: 1rem;
        margin-bottom: .5rem;
        cursor: pointer;
        color: #191919;
        font-size: 1rem;
        font-family: 'ProximaNovaRegular', sans-serif;
        &:before {
            content: '';
            position: absolute;
            box-sizing: border-box;
            left: 0;
            top: .25rem;
            width: 1rem;
            height: 1rem;
            border: .0625rem solid #ccbeb3;
            border-radius: .125rem;
            transition: border-color .3s;
            background-color: #fff;
        }
        &:after {
            content: '';
            position: absolute;
            left: .1875rem;
            top: .5rem;
            width: .5rem;
            height: .2rem;
            border-left: .125rem solid #fff;
            border-bottom: .125rem solid #fff;
            opacity: 0;
            transition: all .3s;
            transform: rotate(-45deg);
        }
    }

    input:checked ~ .checkbox {
        &:before {
            background-color: #E1842B;
        }
        &:after {
            opacity: 1;
        }
    }
}
`;

export {GlobalStyle as CheckboxStyle};
