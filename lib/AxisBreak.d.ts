/// <reference types="react" />
export declare type AxisBreakProps = {
    height: number;
    width: number;
    data: Record<any, any>;
    boldText: boolean;
    headerFontSize: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    headerText: string;
};
/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */
export default function AxisBreak(props: AxisBreakProps): JSX.Element;
//# sourceMappingURL=AxisBreak.d.ts.map