import {LitElement, html, css} from "lit";

class NamePass extends LitElement {
    render() {
        return html`
            <div class="hero" id="home">
                <img src="/src/main/resources/fotos/homeIcon.png" alt="homeIcone" height="70" width="70"><br>
                <button class="main__btn"> Home</button>
                <div class="hero__container">
                    <label> Naam:</label>
                    <input type="text" name="firstname" />
                    <br>
                    <label >Wachtwoord: </label>
                    <input type="text" id="explicit-label-name" name="lastname" />
                    <button class="main__btn"> Inloggen </button>
                </div>
            </div>
        `;
    }

    constructor() {
        super();
    }

    static get styles() {
        return css
        `
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
            padding: 100px 50px 1000px;
        }
        .hero__container {
            display: flex;
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            height: 90%;
            padding: 30px;
            padding-top: 150px;
        }
        
        .hero__container input{
            font-size: 1.2rem;
        }
        
        .main__btn {
            margin-top: 1rem;
            font-size: 1rem;
            padding: 6px 12px;
            border: 1.5px solid rgb(21, 4, 248);
            border-radius: 10px;
            color: black;
            cursor: pointer;
            position: relative;
            transition: all 0.4s;
            outline: none;
           
        }
        
        .main__btn:hover {
          background: linear-gradient(to right, #c5e1f3, #f5d7d7);
        }
                
        `;
    }
}

customElements.define('name-pass', NamePass);