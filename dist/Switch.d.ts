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
export default function Switch(props: Props): JSX.Element;
declare const styles: import("styled-components").FlattenSimpleInterpolation;
export { styles as SwitchStyle };
