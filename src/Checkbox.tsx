import React, { PureComponent } from "react";
import { createGlobalStyle, css } from "styled-components";

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

export default function Checkbox(props: Props) {
    return (
        <>
            <GlobalStyle/>

            <label className="fd-checkbox">
                <input id={props.id} type="checkbox" name={props.name ? props.name : props.id} value={props.value} defaultChecked={props.defaultChecked}/>
                <span className="checkbox">{props.label}</span>
            </label>
        </>
    );
}

const styles = css`
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

const GlobalStyle = createGlobalStyle`${styles}`;

export {styles as CheckboxStyle};
