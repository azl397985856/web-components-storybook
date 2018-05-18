import '../../stencil.core';
export declare class Calendar {
    title?: string;
    subTitle?: string;
    onClose?: (evt: Event) => void;
    visible?: boolean;
    width?: string;
    height?: string;
    render(): JSX.Element;
}
