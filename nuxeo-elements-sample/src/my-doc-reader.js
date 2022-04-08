import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@nuxeo/nuxeo-elements/nuxeo-connection.js';
import '@nuxeo/nuxeo-elements/nuxeo-document.js';
import './shared-styles.js';

/**
* `my-doc-reader`
*
*
* @customElement
* @polymer
* @demo demo/index.html
*/
class MyDocReader extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      <nuxeo-connection id="nxcon" url="http://localhost:8080/nuxeo" 
      username="Administrator" password="Administrator"></nuxeo-connection>
      <nuxeo-document id="doc" auto doc-path="/default-domain/" response="{{document}}"></nuxeo-document>


      <div class="card">
        <h1>Doc Reader</h1>
      </div>

      <h2>Title: [[document.title]]</h2>
<p>ID: [[document.uid]]</p>
<p>Repository: [[document.repository]]</p>
<p>State: [[document.state]]</p>
<h3>Contributors:</h3>
<ul>
  <template is="dom-repeat" items="[[document.properties.dc:contributors]]" as="contributor">
    <li>[[contributor]]</li>
  </template>
</ul>
    `;
  }
}

window.customElements.define('my-doc-reader', MyDocReader);
