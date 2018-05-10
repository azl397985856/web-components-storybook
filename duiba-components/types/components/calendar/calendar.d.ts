import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
export declare class Calendar {
    config: CalendarConfig;
    signin: Function;
    handleCellClick({monthResignedMap, monthSignedMap, date, signin}: {
        monthResignedMap: any;
        monthSignedMap: any;
        date: any;
        signin: any;
    }): void;
    render(): JSX.Element;
}
