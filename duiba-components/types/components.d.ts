import './stencil.core';
/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import './stencil.core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface DuibaCalendar {
      'calendarType': CalendarType;
      'count': number;
      'currentTime': Date;
      'endTime': Date;
      'monthResignedMap': object;
      'monthSignedMap': object;
      'showHeader': Boolean;
      'signin': Function;
      'startTime': Date;
      'todayIndex': number;
    }
  }

  interface HTMLDuibaCalendarElement extends StencilComponents.DuibaCalendar, HTMLStencilElement {}

  var HTMLDuibaCalendarElement: {
    prototype: HTMLDuibaCalendarElement;
    new (): HTMLDuibaCalendarElement;
  };
  interface HTMLElementTagNameMap {
    'duiba-calendar': HTMLDuibaCalendarElement;
  }
  interface ElementTagNameMap {
    'duiba-calendar': HTMLDuibaCalendarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'duiba-calendar': JSXElements.DuibaCalendarAttributes;
    }
  }
  namespace JSXElements {
    export interface DuibaCalendarAttributes extends HTMLAttributes {
      'calendarType'?: CalendarType;
      'count'?: number;
      'currentTime'?: Date;
      'endTime'?: Date;
      'monthResignedMap'?: object;
      'monthSignedMap'?: object;
      'showHeader'?: Boolean;
      'signin'?: Function;
      'startTime'?: Date;
      'todayIndex'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DuibaCollapse {
      'collapsed': Boolean;
      'defaultCollapsed': Boolean;
      'onClick': (collapsed) => void;
    }
  }

  interface HTMLDuibaCollapseElement extends StencilComponents.DuibaCollapse, HTMLStencilElement {}

  var HTMLDuibaCollapseElement: {
    prototype: HTMLDuibaCollapseElement;
    new (): HTMLDuibaCollapseElement;
  };
  interface HTMLElementTagNameMap {
    'duiba-collapse': HTMLDuibaCollapseElement;
  }
  interface ElementTagNameMap {
    'duiba-collapse': HTMLDuibaCollapseElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'duiba-collapse': JSXElements.DuibaCollapseAttributes;
    }
  }
  namespace JSXElements {
    export interface DuibaCollapseAttributes extends HTMLAttributes {
      'collapsed'?: Boolean;
      'defaultCollapsed'?: Boolean;
      'onClick'?: (collapsed) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyButton {
      'onClick': any;
    }
  }

  interface HTMLMyButtonElement extends StencilComponents.MyButton, HTMLStencilElement {}

  var HTMLMyButtonElement: {
    prototype: HTMLMyButtonElement;
    new (): HTMLMyButtonElement;
  };
  interface HTMLElementTagNameMap {
    'my-button': HTMLMyButtonElement;
  }
  interface ElementTagNameMap {
    'my-button': HTMLMyButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-button': JSXElements.MyButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface MyButtonAttributes extends HTMLAttributes {
      'onClick'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface OperationList {
      'list': Array<OperationItem>;
    }
  }

  interface HTMLOperationListElement extends StencilComponents.OperationList, HTMLStencilElement {}

  var HTMLOperationListElement: {
    prototype: HTMLOperationListElement;
    new (): HTMLOperationListElement;
  };
  interface HTMLElementTagNameMap {
    'operation-list': HTMLOperationListElement;
  }
  interface ElementTagNameMap {
    'operation-list': HTMLOperationListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'operation-list': JSXElements.OperationListAttributes;
    }
  }
  namespace JSXElements {
    export interface OperationListAttributes extends HTMLAttributes {
      'list'?: Array<OperationItem>;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
