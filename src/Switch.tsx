import React from "react";
import { createGlobalStyle, css } from "styled-components";

export interface Props {
    /**
     * Optional class name(s). Space delimited.
     */
    className?: string;

    /**
     * Optional defaultChecked property is to set the initial state of the switch. Default is false.
     */
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
     * Optional name is used as name of the input field. When omitted the id is used instead.
     */
    name?: string;

    /**
     * Optional value of the input field. Default is 1.
     */
    value?: string;
}

export default function Switch(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <div className={`fd-input-switch${props.className ? ` ${props.className}` : ''}`}>
                <label className="switch-container">
                    <input type="checkbox" className="switch-input" name={props.name ? props.name : props.id} value={props.value ? props.value : '1'} defaultChecked={props.defaultChecked}/>
                    <span className="switch"/>
                    <span className="switch-label">{props.label}</span>
                </label>
            </div>
        </>
    );
}

const styles = css`
.fd-input-switch {
    input {
        opacity: 0;
        position: absolute;
    }
    .switch {
        position: relative;
        width: 100%;
        height: 100%;
        width: 2.5rem;
        height: 1.5rem;
        display: inline-block;
        margin-right: .5rem;
        margin-bottom: .5rem;
        cursor: pointer;
        &:before {
            content: '';
            position: absolute;
            box-sizing: border-box;
            transition: border-color .3s;
            background-color: #fff;
            transition: all .3s ease-out;
            width: 100%;
            height: 1rem;
            top: .25rem;
            border-radius: .5rem;
            background-color: #f3f3f3;
        }
        &:after {
            content: '';
            position: absolute;
            transition: all .3s ease-out;
            transform: rotate(-45deg);
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
            background-color: #999;
            left: 0;
            top: 0;
        }
    }

    input:checked ~ .switch {
        &:before {
            background-color: rgba(225, 132, 43, 0.5);
            border-radius: .5rem;
        }
        &:after {
            left: calc(100% - 1.5rem);
            background-color: #E1842B;
        }
    }

    .switch-label {
        user-select: none;
        cursor: pointer;
        font-size: 1rem;
        color: #191919;
        position: relative;
        top: -1rem;
        font-family: 'ProximaNovaRegular', sans-serif;
    }
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export {styles as SwitchStyle};
