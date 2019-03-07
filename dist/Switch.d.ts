import { PureComponent } from "react";
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
export default class Switch extends PureComponent<Props, any> {
    render(): JSX.Element;
}
declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export { GlobalStyle as SwitchStyle };
