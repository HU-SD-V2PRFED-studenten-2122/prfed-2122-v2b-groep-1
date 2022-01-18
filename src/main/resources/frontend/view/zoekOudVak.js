import {LitElement, html, css} from "lit";

class ZoekVak extends LitElement{
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
        
        
          #myInput {
            background-image: url('images/searchIcon.png');
            background-position: 10px 12px;
            background-repeat: no-repeat;
            width: 100%;
            font-size: 16px;
            padding: 12px 20px 12px 40px;
            border: 1px solid #ddd;
            margin-bottom: 12px;
          }
          
          #myUL {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }
          
          #myUL li a {
            border: 1px solid #ddd;
            margin-top: -1px;
            background-color: #f6f6f6;
            padding: 12px;
            text-decoration: none;
            font-size: 18px;
            color: black;
            display: block
          }
        
          #myUL li input {
            border: 1px solid #ddd;
            margin-top: -1px;
            background-color: #f6f6f6;
            padding: 12px;
            text-decoration: none;
            font-size: 18px;
            color: black;
            display: block
        
          }
          
          #myUL li a:hover:not(.header) {
            background-color: #eee;
          }
        `;
    }

    toonOudEnNiewVakData(){

    }


    render() {
        return html `

            <div class="hero" id="home">
                <div class="hero__container">
                    <input type="text" id="myInput" onclick="myFunction()" placeholder="Zoek Vak..." value="${this.value}">

                    <ul id="myUL">
                        <li><a href="#">Inleiding strategisch management</a></li>
                        <li><a href="#">Leiderschapsvaardigheden</a></li>

                        <li><a href="#">Praktijk Business Developer</a></li>
                        <li><a href="#">Resource Management 2</a></li>

                        <li><a href="#">Analyse vaardigheden</a></li>
                        <li><a href="#">Gedrag en cultuur in projecten</a></li>
                    </ul>
                </div>
            </div>
        `
    }

    // static myFunction() {
    //     var input, filter, ul, li, a, i, txtValue;
    //     input = document.getElementById("myInput");
    //     filter = input.value.toUpperCase();
    //     ul = document.getElementById("myUL");
    //     li = ul.getElementsByTagName("li");
    //     for (i = 0; i < li.length; i++) {
    //         a = li[i].getElementsByTagName("a")[0];
    //         txtValue = a.textContent || a.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //             li[i].style.display = "";
    //         } else {
    //             li[i].style.display = "none";
    //         }
    //     }
    // }


}

customElements.define('zoek-vak', ZoekVak);