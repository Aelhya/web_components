const template = document.createElement("template"); // création de la balise <template>
template.innerHTML = `
<style>
nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}
nav li {
    float: left;
}
nav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
nav li a:hover {
    background-color: #111;
}
</style>
<nav>
    <div id="navbarText">
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="web_component.html">Introduction aux composants Web</a></li>
            <li><a href="tutorials.html">Tutoriels</a></li>
            <li><a href="sources.html">Sources</a></li>
        </ul>
    </div>
</nav>
`; // contenu de la balise template

class MyNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });  // autorisation de modifier le shadow DOM
        this.shadowRoot.appendChild(template.content); // Mettre le contenu du template dans le shadow DOM
    }

}
customElements.define('my-nav', MyNav); // définir le nom du composant


const templateFooter = document.createElement("template"); // création de la balise <template>
templateFooter.innerHTML = `
<style>
footer {
    background-color : #333;
    color : white;
    display : flex;
    justify-content: center;
    align-self : center;
    font-size : 9px;
    width : 100%;
}
footer div {
    margin : 1em;
}
</style>
<footer>
    <div>Veille technologique</div>
    <div>LOUIS Adélaïde</div>
    <div>LP DAWIN A</div>
</footer>`; // contenu de la balise template
class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // autorisation de modifier le shadow DOM
        this.shadowRoot.appendChild(templateFooter.content); // Mettre le contenu du template dans le shadow DOM
    }
}
customElements.define('my-footer', MyFooter); // définir le nom du composant
