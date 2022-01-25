import {LitElement, html, css} from "lit";
import './nieweVakken/vak1.js';

class ZoekVak extends LitElement{

    constructor() {
        super();
    }

    showSearchResults() {

        this.shadowRoot.querySelector("#myUL").removeAttribute("hidden")

        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = this.shadowRoot.getElementById('myInput');
        
        if (input.value === '') {
            this.shadowRoot.querySelector("#myUL").setAttribute("hidden", true)
        }

        filter = input.value.toUpperCase();
        ul = this.shadowRoot.getElementById("myUL");
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }


    showDiv1() {this.shadowRoot.getElementById("divVak1").removeAttribute("hidden");}
    closeDiv1(qualifiedName, value) {this.shadowRoot.getElementById("divVak1").setAttribute("hidden", value);}

    showDiv2() {this.shadowRoot.getElementById("divVak2").removeAttribute("hidden");}
    closeDiv2(qualifiedName, value) {this.shadowRoot.getElementById("divVak2").setAttribute("hidden", value);}

    showDiv3() {this.shadowRoot.getElementById("divVak3").removeAttribute("hidden");}
    closeDiv3(qualifiedName, value) {this.shadowRoot.getElementById("divVak3").setAttribute("hidden", value);}

    showDiv4() {this.shadowRoot.getElementById("divVak4").removeAttribute("hidden");}
    closeDiv4(qualifiedName, value) {this.shadowRoot.getElementById("divVak4").setAttribute("hidden", value);}

    showDiv5() {this.shadowRoot.getElementById("divVak5").removeAttribute("hidden");}
    closeDiv5(qualifiedName, value) {this.shadowRoot.getElementById("divVak5").setAttribute("hidden", value);}

    showDiv6() {this.shadowRoot.getElementById("divVak6").removeAttribute("hidden");}
    closeDiv6(qualifiedName, value) {this.shadowRoot.getElementById("divVak6").setAttribute("hidden", value);}


    render() {
        return html `

            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
            <div class="hero" id="home">
               

                <div class="hero__container">

                    <label>Zoek vak op naam:</label>
                    <input type="text" id="myInput" @keyup="${this.showSearchResults}">
<!--                    <img src="/src/main/resources/fotos/searchIcon.png" alt="homeIcone" height="35" width="35">-->
                    
                    <ul id="myUL" hidden>
                        <li><a href="#" <button @click="${this.showDiv1}"></button>Inleiding strategisch management </a></li>
                        <li><a href="#" <button @click="${this.showDiv2}"></button>Leiderschapsvaardigheden</a></li>
                        <li><a href="#"  <button @click="${this.showDiv3}"></button>Praktijk Business Developer</a></li>
                        <li><a href="#"  <button @click="${this.showDiv4}"></button>Resource Management 2</a></li>
                        <li><a href="#"  <button @click="${this.showDiv5}"></button>Praktijk 1</a></li>
                        <li><a href="#"  <button @click="${this.showDiv6}"></button>Project</a></li>
                    </ul><br><br>

                    <div  id="divVak1" hidden >
                        <table class="newVakData">
                            <h1 tabindex="0">Nieuwe Cursus Data</h1>
                            <tr>
                                <th tabindex="1">Bezem/Conversie</th>
                                <th tabindex="3">Niewe Code</th>
                                <th tabindex="5">Naam</th>
                                <th tabindex="7">EC-cursus</th>
                                <th tabindex="9">Toets en Toetsvorm</th>
                                <th tabindex="11">Weging</th>
                                <th tabindex="13">EC-toets</th>
                                <th tabindex="15">Periode</th>
                                <th tabindex="17">Programmaleider</th>
                            </tr>
                            <tr>
                                <td tabindex="2">Bezem</td>
                                <td tabindex="4">MBBU-H-ISTRAM-19</td>
                                <td tabindex="6">Inleiding strategisch management</td>
                                <td tabindex="8">10</td>
                                <td tabindex="10">TOETS1-Tentamen ISTRAM-COMPUTER <br>
                                    TOETS2-Essay ISTRAM-VERSLAG <br>
                                    TOETS3-Presentatie advies ISTRAM-PRESENTATIE</td>
                                <td tabindex="12">50 <br> 30 <br> 20</td>
                                <td tabindex="14">5 <br> 3 <br> 2</td>
                                <td tabindex="16">B.C</td>
                                <td tabindex="18">meindert.scholma@hu.nl</td>
                                
                            </tr>
                        </table>
                        <button tabindex="19" class="main__btn" @click="${this.closeDiv1}">Close</button>
                    </div>

<!--vak 2 Leiderschap..-->

                    <div  id="divVak2" hidden >
                        <table class="newVakData">
                            <h1 tabindex="0">Nieuwe Cursus Data</h1>
                            <tr>
                                <th tabindex="1">Bezem/Conversie</th>
                                <th tabindex="3">Niewe Code</th>
                                <th tabindex="5">Naam</th>
                                <th tabindex="7">EC-cursus</th>
                                <th tabindex="9">Toets en Toetsvorm</th>
                                <th tabindex="11">Weging</th>
                                <th tabindex="13">EC-toets</th>
                                <th tabindex="15">Periode</th>
                                <th tabindex="17">Programmaleider</th>
                            </tr>
                            <td>
                                <td tabindex="2">Bezem</td>
                                <td tabindex="4">MBBU_H-LEIVA-18</td>
                                <td tabindex="6">Leiderschapvaardigheden</td>
                                <td tabindex="8">10</td>
                                <td tabindex="10">Gehele cursus</td>
                                <td tabindex="12">100</td>
                                <td tabindex="14">10</td>
                                <td tabindex="16">C.D</td>
                                <td tabindex="18">pieter.schilder@hu.nl</td>

                        </table>
                        <button tabindex="19" class="main__btn"  @click="${this.closeDiv2}">Close</button>
                    </div>
                    
<!--vak 3 praktijk-->
                    <div  id="divVak3" hidden >
                        <table class="newVakData">
                            <h1 tabindex="0">Nieuwe Cursus Data</h1>
                            <tr>
                                <th tabindex="1">Bezem/Conversie</th>
                                <th tabindex="3">Niewe Code</th>
                                <th tabindex="5">Naam</th>
                                <th tabindex="7">EC-cursus</th>
                                <th tabindex="9">Toets en Toetsvorm</th>
                                <th tabindex="11">Weging</th>
                                <th tabindex="13">EC-toets</th>
                                <th tabindex="15">Periode</th>
                                <th tabindex="17">Programmaleider</th>
                            </tr>
                            <tr>
                                <td tabindex="2">Bezem</td>
                                <td tabindex="4">MBBU-H-PRAKBD-18</td>
                                <td tabindex="6">Praktijk Buisness Developer</td>
                                <td tabindex="8">5</td>
                                <td tabindex="10">Gehele cursus</td>
                                <td tabindex="12">100</td>
                                <td tabindex="14">5</td>
                                <td tabindex="16">A.B</td>
                                <td tabindex="18">robvanbemmelen@hu.nl</td>
                        </table>
                        <button tabindex="19" class="main__btn"  @click="${this.closeDiv3}">Close</button>
                    </div>
<!--vak 4 Resource                    -->

                    <div  id="divVak4" hidden >
                        <table class="newVakData">
                            <h1 tabindex="0">Nieuwe Cursus Data</h1>
                            <tr>
                                <th tabindex="1">Bezem/Conversie</th>
                                <th tabindex="3">Niewe Code</th>
                                <th tabindex="5">Naam</th>
                                <th tabindex="7">EC-cursus</th>
                                <th tabindex="9">Toets en Toetsvorm</th>
                                <th tabindex="11">Weging</th>
                                <th tabindex="13">EC-toets</th>
                                <th tabindex="15">Periode</th>
                                <th tabindex="17">Programmaleider</th>
                            </tr>
                            <tr>
                                <td tabindex="2">Bezem</td>
                                <td tabindex="4">MBBU-H-RESM2-18</td>
                                <td tabindex="6">Resource Mangement 2</td>
                                <td tabindex="8">5</td>
                                <td tabindex="10">Gehele cursus</td>
                                <td tabindex="12">100</td>
                                <td tabindex="14">5</td>
                                <td tabindex="16">D.F</td>
                                <td tabindex="18">suzanne.boel@hu.nl</td>
                        </table>
                        <button tabindex="19" class="main__btn"  @click="${this.closeDiv4}">Close</button>
                    </div>
                    
<!-- vak 5 Praktijk 1                   -->


                    <div  id="divVak5" hidden >

                        <table class="newVakData">
                            <h1 tabindex="0">Nieuwe Cursus Data</h1>

                            <tr>
                                <th tabindex="1">Bezem/Conversie</th>
                                <th tabindex="3">Niewe Code</th>
                                <th tabindex="5">Naam</th>
                                <th tabindex="7">EC-cursus</th>
                                <th tabindex="9">Toets en Toetsvorm</th>
                                <th tabindex="11">Weging</th>
                                <th tabindex="13">EC-toets</th>
                                <th tabindex="15">Periode</th>
                                <th tabindex="17">Programmaleider</th>
                            </tr>
                            <tr>
                                <td tabindex="2">Conversie</td>
                                <td tabindex="4">MBBU-H-PRAK1-19</td>
                                <td tabindex="6">Praktijk 1</td>
                                <td tabindex="8">10</td>
                                <td tabindex="10">TOETS1-Praktij-PRAKTIJK <br> 
                                TOETS2-Portfolio-VERSLAG <br>
                                    TOETS3-Verslag-VERSLAG</td>
                                <td tabindex="12">50 <br> 50 <br> 0</td>
                                <td tabindex="14">5 <br> 5 <br> 0</td>
                                <td tabindex="16">A.B.C.D.E <br> A.B.C.D.E <br>A.B.C.D.E</td>
                                <td tabindex="18">leonie.stolk@hu.nl</td>
                        </table>
                        <button tabindex="19" class="main__btn"  @click="${this.closeDiv5}">Close</button>
                    </div>
                    
                    
<!--vak 6 Project                    -->

                    <div  id="divVak6" hidden >

                        <table class="newVakData">
                            <h1 tabindex="0">Nieuwe Cursus Data</h1>

                            <tr>
                                <th tabindex="1">Bezem/Conversie</th>
                                <th tabindex="3">Niewe Code</th>
                                <th tabindex="5">Naam</th>
                                <th tabindex="7">EC-cursus</th>
                                <th tabindex="9">Toets en Toetsvorm</th>
                                <th tabindex="11">Weging</th>
                                <th tabindex="13">EC-toets</th>
                                <th tabindex="15">Periode</th>
                                <th tabindex="17">Programmaleider</th>
                            </tr>
                            <tr>
                                <td tabindex="2">Conversie</td>
                                <td tabindex="4">MB-PROJ-16</td>
                                <td tabindex="6">Project</td>
                                <td tabindex="8">10</td>
                                <td tabindex="10">TOETS1 - assessment - ASSESSMENT</td>
                                <td tabindex="12">100</td>
                                <td tabindex="14">10</td>
                                <td tabindex="16">B.C</td>
                                <td tabindex="18">jasper.vandenbrink@hu.nl</td>
                        </table>
                        <button tabindex="19" class="main__btn"  @click="${this.closeDiv6}">Close</button>
                    </div>
                   

                </div>
            </div>
        `
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
        .hero__container img{
            position: absolute;
            left: 317px;
            top: 410px;
            color: gray;
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
        .main__btn:hover {
          background: linear-gradient(to right, #c5e1f3, #f5d7d7);
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
        }
        `;
    }
}

customElements.define('zoek-vak', ZoekVak);
