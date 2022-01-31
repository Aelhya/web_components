const templateBtnTuto = document.createElement("template");
templateBtnTuto.innerHTML = `
<style>
.button {
    display: inline-block;
    border-radius: 5%;
    background-color: #f4511e;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 12px;
    padding: 1%;
    width: 15%;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    vertical-align: middle;
    align-self : center;
  }
  
  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  
  .button span:after {
    content: '⇾';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -30px;
    transition: 0.5s;
  }
  
  .button:hover span {
    padding-right: 25px;
  }
  
  .button:hover span:after {
    opacity: 1;
    right: 0;
  }
</style>
<a class="button" href="web_component.html">
    <span>Page Tutoriel</span>
</a>`;

class MyButtonTuto extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(templateBtnTuto.content);
    }
}
customElements.define('my-button-tuto', MyButtonTuto);
