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
     * When multiple same-named radio inputs exists they will act as a switch.
     */
    name?: string;

    /**
     * Optional value for the input field. Default is 1.
     */
    value?: string;
}

export default class Radio extends PureComponent<Props, any> {
    render() {
        return (
            <>
                <GlobalStyle/>

                <label className="fd-input-radio">
                    <input id={this.props.id} type="radio" name={this.props.name ? this.props.name : this.props.id} value={this.props.value} defaultChecked={this.props.defaultChecked}/>
                    <span className="radio">{this.props.label}</span>
                </label>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-input-radio {
    line-height: 1.5;
    color: #191919;
    input {
        opacity: 0;
        position: absolute;
    }
    .radio {
        user-select: none;
        position: relative;
        z-index: 1;
        display: inline-block;
        padding-left: 1.5rem;
        margin-right: 1rem;
        margin-bottom: .5rem;
        cursor: pointer;
        color: #191919;
        font-size: 1rem;
        line-height: 1.5;
        font-family: 'ProximaNovaRegular', sans-serif;
        border-radius: 50%;
        &:before {
            content: '';
            position: absolute;
            box-sizing: border-box;
            left: 0;
            top: .25rem;
            width: 1rem;
            height: 1rem;
            border: .0625rem solid #ccbeb3;
            transition: border-color .3s;
            background-color: #fff;
            border-radius: 50%;
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
            border-radius: 50%;
        }
    }

    input:focus ~ .radio {
        &:before {
            border-color: #49a3a1;
        }
    }

    input:checked ~ .radio {
        &:after {
            opacity: 1;
            background-color: #E1842B;
            border: none;
            width: .75rem;
            height: .75rem;
            left: .125rem;
            top: .375rem;
        }
    }
}
`;

export {GlobalStyle as RadioStyle};
