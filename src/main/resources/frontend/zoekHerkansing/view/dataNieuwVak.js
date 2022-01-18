import {LitElement, html, css} from "lit";


class DataNieuwVak extends LitElement{
    constructor() {
        super();
    }

    render() {
        return html `
            <div class="hero" id="home">
                <div class="hero__container">
                    <h2>new web component</h2>
                    
                </div>
            </div>
        `;
    }




    static get styles(){
        return css`
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Kumb Sans', sans-serif;
            scroll-behavior: smooth;
        
        }
        
        .hero {
            background: #e9e2e2;
            background: linear-gradient(to right, #f5d7d7, #c5e1f3);
            padding: 60px 0;
        }
        .hero__container {
            display: flex;
            flex-direction: column;
            max-width: 1000px;
            margin: 0 auto;
            height: 90%;
            padding: 30px;
        }
        `;
    }
}

customElements.define('data-new-vak', DataNieuwVak);
