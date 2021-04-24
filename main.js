class VersionTag extends HTMLElement {
    constructor() {
        super();

        let shadowDOM = this.attachShadow({ mode: "open" });
        let label = document.createElement("template");
        label.innerHTML = '<span class="uk-label uk-label-success" title="supported" uk-tooltip>as</span>';
        shadowDOM.appendChild(label.content.firstChild);
    }

}

class VersionTagSupported extends VersionTag {
    constructor() {
        super();
    }
}


window.customElements.define("v-supported", VersionTagSupported);

