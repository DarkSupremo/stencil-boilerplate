/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyApp {
    'first': string;
    'last': string;
  }
  interface SimpleButton {
    'color': 'plain' | 'primary' | 'secondary' | 'danger';
    'type': 'basic' | 'raised' | 'outline' | 'flat';
  }
}

declare global {


  interface HTMLMyAppElement extends Components.MyApp, HTMLStencilElement {}
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };

  interface HTMLSimpleButtonElement extends Components.SimpleButton, HTMLStencilElement {}
  var HTMLSimpleButtonElement: {
    prototype: HTMLSimpleButtonElement;
    new (): HTMLSimpleButtonElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
    'simple-button': HTMLSimpleButtonElement;
  }
}

declare namespace LocalJSX {
  interface MyApp extends JSXBase.HTMLAttributes<HTMLMyAppElement> {
    'first'?: string;
    'last'?: string;
  }
  interface SimpleButton extends JSXBase.HTMLAttributes<HTMLSimpleButtonElement> {
    'color'?: 'plain' | 'primary' | 'secondary' | 'danger';
    'type'?: 'basic' | 'raised' | 'outline' | 'flat';
  }

  interface IntrinsicElements {
    'my-app': MyApp;
    'simple-button': SimpleButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


