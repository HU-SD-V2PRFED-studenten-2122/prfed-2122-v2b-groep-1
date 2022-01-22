import {LitElement, html, css} from "lit";
import './nieweVakken/vak1.js';

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
          #myInput {
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
          .newVakData {        
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;          
        }  
        .newVakData td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }      
        .newVakData tr:nth-child(even) {
          background-color: #dddddd;
        }
        `;
    }



    showSearchResult() {
        this.shadowRoot.getElementById("myInput").addEventListener('click', function (){
            var input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        })
    }


    showDiv1() {this.shadowRoot.getElementById("divVak1").removeAttribute("hidden");}
    closeDiv1(qualifiedName, value) {this.shadowRoot.getElementById("divVak1").setAttribute("hidden", value);}

    showDiv2() {this.shadowRoot.getElementById("divVak2").removeAttribute("hidden");}
    closeDiv2(qualifiedName, value) {this.shadowRoot.getElementById("divVak2").setAttribute("hidden", value);}

    showDiv3() {this.shadowRoot.getElementById("divVak3").removeAttribute("hidden");}
    closeDiv3(qualifiedName, value) {this.shadowRoot.getElementById("divVak3").setAttribute("hidden", value);}

    showDiv4() {this.shadowRoot.getElementById("divVak4").removeAttribute("hidden");}
    closeDiv4(qualifiedName, value) {this.shadowRoot.getElementById("divVak4").setAttribute("hidden", value);}



    render() {
        return html `

            <div class="hero" id="home">
                <div class="hero__container">

                    <label> Zoek vak op naam:</label>
                    <input type="text" id="myInput" onkeyup="${this.myfunction}" value="${this.value}">

                    <ul id="myUL">
                        <li><a href="#" <button @click="${this.showDiv1}"></button>Inleiding strategisch management </a></li>
                        <li><a href="#" <button @click="${this.showDiv2}"></button>Leiderschapsvaardigheden</a></li>
                        <li><a href="#"  <button @click="${this.showDiv3}"></button>Praktijk Business Developer</a></li>
                        <li><a href="#"  <button @click="${this.showDiv4}"></button>Resource Management 2</a></li>
                        <li><a href="#"  <button @click="${this.showDiv1}"></button>Analyse vaardigheden</a></li>
                        <li><a href="#"  <button @click="${this.showDiv1}"></button>Gedrag en cultuur in projecten</a></li>
                    </ul><br><br>
<!--vak 1 inleidingß-->
                    <div  id="divVak1" hidden >
                        <h1>Nieuwe Cursus Data</h1>

                        <table class="newVakData">
                            <tr>
                                <th>Toets en Toetsvorm</th>
                                <th>Weging</th>
                            </tr>
                            <tr>
                                <td>TOETS1-Tentamen ISTRAM-COMPUTER <br>
                                    TOETS2-Essay ISTRAM-VERSLAG <br>
                                    TOETS3-Presentatie advies ISTRAM-PRESENTATIE
                                </td>
                                <td>50 <br>30 <br>20 <br>
                            </tr>
                        </table>
                        <button @click="${this.closeDiv1}">Close</button>
                    </div>

<!--vak 2 Leiderschap..-->

                    <div  id="divVak2" hidden >
                        <h1>Nieuwe Cursus Data</h1>

                        <table class="newVakData">
                            <tr>
                                <th>Toets en Toetsvorm</th>
                                <th>Weging</th>
                            </tr>
                            <tr>
                                <td>Gehele cursus</td>
                                <td>100</tr>
                        </table>
                        <button @click="${this.closeDiv2}">Close</button>
                    </div>
                    
<!--vak 3 praktijk-->
                    <div  id="divVak3" hidden >
                        <h1>Nieuwe Cursus Data</h1>

                        <table class="newVakData">
                            <tr>
                                <th>Toets en Toetsvorm</th>
                                <th>Weging</th>
                            </tr>
                            <tr>
                                <td>Gehele cursus</td>
                                <td>100</tr>
                        </table>
                        <button @click="${this.closeDiv3}">Close</button>
                    </div>
<!--vak 4 Resource                    -->

                    <div  id="divVak4" hidden >
                        <h1>Nieuwe Cursus Data</h1>

                        <table class="newVakData">
                            <tr>
                                <th>Toets en Toetsvorm</th>
                                <th>Weging</th>
                            </tr>
                            <tr>
                                <td>Gehele cursus</td>
                                <td>100</tr>
                        </table>
                        <button @click="${this.closeDiv4}">Close</button>
                    </div>
                   

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
