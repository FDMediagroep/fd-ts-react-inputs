import { PureComponent } from "react";
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
    render(): JSX.Element;
}
declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export { GlobalStyle as CheckboxStyle };
