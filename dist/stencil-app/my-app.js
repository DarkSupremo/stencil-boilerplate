/*! Built with http://stenciljs.com */
const { h } = window.StencilApp;

class MyApp {
    render() {
        if (this.first && this.last) {
            return (h("div", null,
                h("span", { class: "welcome" }, "Hello"),
                ", my name is ",
                this.first,
                ' ',
                this.last));
        }
    }
    static get is() { return "my-app"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "first": { "type": String, "attr": "first" }, "last": { "type": String, "attr": "last" } }; }
    static get style() { return ":host{display:-webkit-box;display:-ms-flexbox;display:flex;--welcome:#000;--welcome-large:#ff41b4;--main:gold;color:var(--main,#000)}:host .welcome{color:var(--welcome)}\@media screen and (min-width:60em){:host .welcome{color:var(--welcome-large)}}"; }
}

export { MyApp };
