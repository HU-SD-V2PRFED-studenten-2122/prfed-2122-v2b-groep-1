import { LitElement, html, css } from "lit";

export class Sheet1920 extends LitElement {
    constructor() {
        super();
    }

    zoekFunctie() {
        let input, filter, sheet, tr, code, i, textValue;

        input = this.shadowRoot.getElementById('cursuscode');
        filter = input.value.toUpperCase();
        sheet = this.shadowRoot.getElementById('sheet');
        tr = sheet.getElementsByClassName('rij');

        for (i = 0; i < tr.length; i++) {
            code = tr[i].getElementsByTagName('code')[0];
            textValue = code.textContent || code.innerText;

            if (textValue.toUpperCase().indexOf(filter) > -1 && input.value !== '' && input.value !== '-') {
                if (i % 2 === 0) {
                    tr[i].style.backgroundColor = '#f5d7d7';
                } else {
                    tr[i].style.backgroundColor = '#c5e1f3';
                }
            }
            else if (input.value === '' || input.value === ' ' || input.value === '-') {
                if (i % 2 === 0) {
                    tr[i].style.backgroundColor = '#dddddd';
                } else {
                    tr[i].style.backgroundColor = 'white';
                }
            }
            else {
                tr[i].style.backgroundColor = 'white';
            }
        }
    }

    static styles = css`
        #cursus-zoeker {
            margin-bottom: 4px;
        }
    
        label {
            font-weight: bold;
            padding-right: 2px;
            margin-left: 5.2%;
        } label:hover {
            cursor: text;
        }
        
        input {
            height: 18px;
            width: 175px;
            margin-right: 1px;
            font-style: italic;
        } input:hover {
            border-radius: 3px;
            border-color: #a1a1a1;
        }
        
        button {
            padding-left: 12px;
            padding-right: 12px;
            padding-top: 2px;
            padding-bottom: 2px;
        } button:hover {
            cursor: pointer;
            border-radius: 1px;
            background-color: #dddddd;
            transition-duration: 0.1s;
        }
    
        table {
            background-color: white;
            border-collapse: collapse;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            padding: 5px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }

        th,td {
            border: 1px solid black;
            padding: 5px;
            text-align: center;
            font-size: x-small;
        }

        th {
            background-color: #a1a1a1;
            color: black;
            font-size: small;
        }
    `;

    render() {
        return html`
            <div id="cursus-zoeker">
                <label for="cursuscode">Cursuscode:</label>
                <input id="cursuscode" type="text" maxlength="20" placeholder="Vul hier uw cursuscode in.">
                <button id="zoekKnop" @click="${this.zoekFunctie}">Zoeken</button>
            </div>

            <table id="sheet">
                <tr>
                    <th>Oude Code</th>
                    <th>Naam</th>
                    <th>EC-Cursus</th>
                    <th width="12%">Toets & Toetsvorm</th>
                    <th width="4%">Weging</th>
                    <th width="4%">EC-Toets</th>
                    <th>Bezem/ Conversie</th>
                    <th>Nieuwe Code</th>
                    <th>Naam</th>
                    <th>EC-cursus</th>
                    <th width="12%">Toets & Toetsvorm</th>
                    <th width="4%">Weging</th>
                    <th width="4%">EC-Toets</th>
                    <th>Periode</th>
                    <th>Programmaleider</th>
                    <th>Opmerkingen</th>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PROOA-19</code></td>
                    <td>Lorem ipsum</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-PROOA-19</td>
                    <td>Lorem ipsum</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PRAK2-19</code></td>
                    <td>dolor sit amet</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-PRAK2-19</td>
                    <td>dolor sit amet</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-ISTRAM-19</code></td>
                    <td>consectetuer</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-H-ISTRAM-19</td>
                    <td>consectetuer</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PRAKBD-18</code></td>
                    <td>minim veniam</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-PRAKBD-18</td>
                    <td>minim veniam</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-RESM2-18</code></td>
                    <td>adipiscing</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-H-RESM2-18</td>
                    <td>adipiscing</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-INNOP-18</code></td>
                    <td>elit sed</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-H-INNOP-18</td>
                    <td>elit sed</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-ANVA-18</code></td>
                    <td>diam nibh</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-H-ANVA-18</td>
                    <td>diam nibh</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-CGPM-18</code></td>
                    <td>nonummy</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-CGPM-18</td>
                    <td>nonummy</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PRVA-18</code></td>
                    <td>euismod</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-PRVA-18</td>
                    <td>euismod</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-MKGM1-18</code></td>
                    <td>tincidunt</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-H-MKGM1-18</td>
                    <td>tincidunt</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-CRMEV-18</code></td>
                    <td>ut laoreet</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-CRMEV-18</td>
                    <td>ut laoreet</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-MKGM2-18</code></td>
                    <td>dolore magna</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-MKGM2-18</td>
                    <td>dolore magna</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PRAKBL-18</code></td>
                    <td>aliquam</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-PRAKBL-18</td>
                    <td>aliquam</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-RESM1-18</code></td>
                    <td>erat volutpat</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-RESM1-18</td>
                    <td>erat volutpat</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-VBVA-18</code></td>
                    <td>ut wisi enim</td>
                    <td>5</td>
                    <td>Dit is dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-VBVA-18</td>
                    <td>ut wisi enim</td>
                    <td>5</td>
                    <td>Dit is ook dummydata</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>docent@hu.nl</td>
                    <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</td>
                </tr>
        `;
    }
}

customElements.define('sheet-1920', Sheet1920);