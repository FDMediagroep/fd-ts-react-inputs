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
export default function Checkbox(props: Props): JSX.Element;
declare const styles: import("styled-components").FlattenSimpleInterpolation;
export { styles as CheckboxStyle };
