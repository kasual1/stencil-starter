/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
    }
    interface MyComponent {
        /**
          * Age
         */
        "age": number;
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
    }
    interface MyList {
        "items": string[];
    }
    interface MyTitle {
    }
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyListElement extends Components.MyList, HTMLStencilElement {
    }
    var HTMLMyListElement: {
        prototype: HTMLMyListElement;
        new (): HTMLMyListElement;
    };
    interface HTMLMyTitleElement extends Components.MyTitle, HTMLStencilElement {
    }
    var HTMLMyTitleElement: {
        prototype: HTMLMyTitleElement;
        new (): HTMLMyTitleElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
        "my-list": HTMLMyListElement;
        "my-title": HTMLMyTitleElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
    }
    interface MyComponent {
        /**
          * Age
         */
        "age"?: number;
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
    }
    interface MyList {
        "items"?: string[];
    }
    interface MyTitle {
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-component": MyComponent;
        "my-list": MyList;
        "my-title": MyTitle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-list": LocalJSX.MyList & JSXBase.HTMLAttributes<HTMLMyListElement>;
            "my-title": LocalJSX.MyTitle & JSXBase.HTMLAttributes<HTMLMyTitleElement>;
        }
    }
}
