import {LitElement, html, css} from "lit";
import {UserService} from "../service/UserService.js";
import {User} from "../model/user";

class NamePass extends LitElement {

    static get properties(){
        return {

            userId: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.userService = new UserService();
    }

    render() {
        return html`
            <div class="hero" id="home">
                <img src="/src/main/resources/fotos/homeIcon.png" alt="homeIcone" height="70" width="70"><br>
                <button class="main__btn" @click="${this.clickHandlerToHome}"> Home </button>

                <div class="hero__container">
                    <label tabindex="2"> Naam:</label>
                    <input tabindex="3" id="userName" type="text" name="firstname" />
                    <br>
                    <label tabindex="4" >Wachtwoord: </label>
                    <input tabindex="5" id="userPass" type="password"  name="lastname" />
                    <button tabindex="6" class="main__btn" @click="${this.clickHandlerToDraft}"> Inloggen </button>

                </div>
            </div>
        `;
    }

    clickHandlerToDraft() {
        var naam = this.shadowRoot.querySelector("#userName").value;
        var wachtwoord = this.shadowRoot.querySelector("#userPass").value;

        this.addLoginUser(naam, wachtwoord);
    }

    clickHandlerToHome() {
        console.log("goToHomeHandler");
        location.href= "/src/main/resources/frontend/index.html";
    }

    addLoginUser(naam, wachtwoord) {
        console.log("addLoginUser " + naam);
        const newUser = new User(naam, wachtwoord);
        this.userService.addUser(newUser);
        console.log(newUser)
        location.href = "/src/main/resources/frontend/draft.html";
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
            padding: 100px 50px 100px;
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
        }        
        .main__btn:hover {
          background: linear-gradient(to right, #c5e1f3, #f5d7d7);
        }
                
        `;
    }
}

customElements.define('name-pass', NamePass);