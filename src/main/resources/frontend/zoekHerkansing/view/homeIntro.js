import {LitElement, html, css} from 'lit';

class HomePage extends LitElement {

    render() {
        return html`
            <div class="hero" id="home">

                <div class="hero__container">
                    <h1 class="hero__heading">Kop van uitleg </h1> <br>
                    <p class="hero__description"><h3>Dit is een bezemConversietool waarin de vervangende vakken opgezocht kunen worden op basis van de geschrapte vakken</h3></p>

                </div>
            </div>
        
        `;
    }

    constructor() {
        super();
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
            padding: 10px 0;
        }
       
        .hero__container {
            display: flex;
            flex-direction: column;
            max-width: 1000px;
            margin: 0 auto;
            height: 90%;
            padding: 30px;
        }
        .main__btn {
            margin-top: 2rem;
            font-size: 1.5rem;
            padding: 10px 20px;
            border: 1.5px solid rgb(21, 4, 248);
            border-radius: 10px;
            color: black;
            cursor: pointer;
            position: relative;
            transition: all 0.4s;
            outline: none;
            position: absolute;
            right: 50px;
            top: 90px;
        }       
        .main__btn:hover {
          background: linear-gradient(to right, #c5e1f3, #f5d7d7);
        }        
        .hero__heading{
            text-align: center;           
        }
        `;
    }

}

customElements.define('home-page', HomePage);
