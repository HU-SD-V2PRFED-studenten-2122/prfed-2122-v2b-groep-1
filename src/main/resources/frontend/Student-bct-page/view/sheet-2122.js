import { LitElement, html, css } from "lit";

export class Sheet2122 extends LitElement {
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
            border-collapse: collapse;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
        
        #sheet {
            background-color: white;
        }
        
        table tr.rij:nth-child(even) {
            background-color: #dddddd;
        }
        
        th,td {
            border: 1px solid black;
            padding: 0;
            text-align: center;
            font-size: x-small;
        }

        th {
            background-color: #a1a1a1;
            color: black;
            font-size: small;
            padding: 2px;
        }
        
        .inside-table-high {
            height: 104px;
        }
        
        .inside-table-medium {
            height: 70px;
        }
        
        .inside-table-low {
            height: 25px;
        }
        
        .inside-table tr:first-child td, .inside-table-high tr:first-child td, .inside-table-medium tr:first-child td, .inside-table-low tr:first-child td {
            border-top: none;
        }
        
        .inside-table tr:last-child td, .inside-table-high tr:last-child td, .inside-table-medium tr:last-child td, .inside-table-low tr:last-child td {
            border-bottom: none;
        }
        
        .inside-table tr td:first-child, .inside-table-high tr td:first-child, .inside-table-medium tr td:first-child, .inside-table-low tr td:first-child {
            border-left: none;
        }
        
        .inside-table tr td:last-child, .inside-table-high tr td:last-child, .inside-table-medium tr td:last-child, .inside-table-low tr td:last-child {
            border-right: none;
        }

        .first-column {
            width: 60%;
        }

        .second-column {
            width: 20.05%;
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
                    <td>Project organisatieadvisering</td>
                    <td>15</td>
                    <td colspan="3"><table class="inside-table-high">
                        <td class="first-column">Adviesrapport - VERSLAG</td><td class="second-column"">20</td><td>3</td>
                        <tr><td>Verantwoordingsdossier (Individueel) - OPDRACHT</td><td>25</td><td>3,75</td></tr>
                        <tr><td>Verantwoordingsdossier (Individueel) - OPDRACHT</td><td>25</td><td>3,75</td></tr>
                        <tr><td>Assessment groep- ASSESSMENT</td><td>30</td><td>4,5</td></tr>
                    </table></td>
                    <td>Bezem</td>
                    <td>MBBU-H-PROOA-19</td>
                    <td>Project organisatieadvisering</td>
                    <td>15</td>
                    <td colspan="3"><table class="inside-table-high">
                        <td class="first-column">Diagnose en onderzoeksplan - VERSLAG</td><td class="second-column">20</td><td>3</td>
                        <tr><td>Adviesrapport - VERSLAG</td><td>25</td><td>3,75</td></tr>
                        <tr><td>Verantwoordingsdossier (Individueel) - OP</td><td>25</td><td>3,75</td></tr>
                        <tr><td>Assessment groep- ASSESSMENT</td><td>30</td><td>4,5</td></tr>
                    </table></td>
                    <td>C & D</td>
                    <td>hans.vanderkolk@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PRAK2-19</code></td>
                    <td>Praktijk 2</td>
                    <td>30</td>
                    <td colspan="3"><table class="inside-table-low">
                        <td class="first-column">Portfolio - PRAKTIJK</td><td class="second-column">50</td><td>15</td>
                        <tr><td>Assessment- ASSESSMENT</td><td>50</td><td>15</td></tr>
                    </table></td>
                    <td>Conversie</td>
                    <td>MBBU-H-PRAK2-20</td>
                    <td>Praktijk 2</td>
                    <td>30</td>
                    <td>Gehele cursus</td>
                    <td></td>
                    <td></td>
                    <td>Jaar</td>
                    <td>pieter.schilder@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-ISTRAM-19</code></td>
                    <td>Inleiding strategisch management</td>
                    <td>10</td>
                    <td colspan="3"><table class="inside-table-low">
                        <td class="first-column">Tentamen ISTRAM-TENTAMEN</td><td class="second-column">50</td><td>5</td>
                        <tr><td>Essay ISTRAM-VERSLAG</td><td>30</td><td>3</td></tr>
                        <tr><td>Presentatie Advies ISTRAM-PRESENTATIE</td><td>20</td><td>2</td></tr>
                    </table></td>
                    <td>Bezem</td>
                    <td>MBBU-H-ISTRAM-19</td>
                    <td>Inleiding strategisch management</td>
                    <td>10</td>
                    <td colspan="3"><table class="inside-table-low">
                        <td class="first-column">Tentamen ISTRAM-COMPUTER</td><td class="second-column">50</td><td>5</td>
                        <tr><td>Essay ISTRAM-VERSLAG</td><td>30</td><td>3</td></tr>
                        <tr><td>Presentatie advies ISTRAM-PRESENTATI</td><td>20</td><td>2</td></tr>
                    </table></td>
                    <td>B & C</td>
                    <td>meindert.scholma@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-LEIVA-18</code></td>
                    <td>Leiderschapsvaardigheden</td>
                    <td>10</td>
                    <td>Opdracht leiderschapsvaardigheden</td>
                    <td>100</td>
                    <td>10</td>
                    <td>Bezem</td>
                    <td>MBBU-H-LEIVA-18</td>
                    <td>Leiderschapsvaardigheden</td>
                    <td>10</td>
                    <td colspan="3"><table class="inside-table-low">
                        <td class="first-column">Gehele cursus</td><td class="second-column">100</td><td>10</td>
                    </table></td>
                    <td>C & D</td>
                    <td>pieter.schilder@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PRAKBD-18</code></td>
                    <td>Praktijk Business Developer</td>
                    <td>5</td>
                    <td>Verslag Praktijk Stage</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-PRAKBD-18</td>
                    <td>Praktijk Business Developer</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>rob.vanbemmelen@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-RESM2-18</code></td>
                    <td>Resource Management 2</td>
                    <td>5</td>
                    <td>Opdracht Resource Management 2</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-RESM2-18</td>
                    <td>Resource Management 2</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>D & E</td>
                    <td>suzanne.boel@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-RMVV-18</code></td>
                    <td>Relatiemanagement & verkoopvaardigheden</td>
                    <td>5</td>
                    <td>VERSLAG-Reflectieverslag</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-RMVV-18</td>
                    <td>Relatiemanagement & verkoopvaardigheid</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>deniz.seyhan@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-INNOP-18</code></td>
                    <td>Innovatieproject</td>
                    <td>5</td>
                    <td>toets - VERSLAG</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-INNOP-18</td>
                    <td>Innovatieproject</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>C & D</td>
                    <td>michael.makowski@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-ANVA-18</code></td>
                    <td>Analyse vaardigheden</td>
                    <td>5</td>
                    <td>Individueel Dossier - VERSLAG</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-ANVA-18</td>
                    <td>Analyse vaardigheden</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>B & C</td>
                    <td>paul.venderaa@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-CGPM-18</code></td>
                    <td>Gedrag en cultuur in projecten</td>
                    <td>5</td>
                    <td>toets - VERSLAG</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-CGPM-18</td>
                    <td>Gedrag en cultuur in projecten</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>C & D</td>
                    <td>michael.makowski@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PRVA-18</code></td>
                    <td>Projectmanagementvaardigheden</td>
                    <td>5</td>
                    <td>assessment - ASSESSMENT</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Bezem</td>
                    <td>MBBU-H-PRVA-18</td>
                    <td>Projectmanagementvaardigheden</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>C & D</td>
                    <td>jasper.vandenbrink@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-MKGM1-18</code></td>
                    <td>Marketing Management 1</td>
                    <td>5</td>
                    <td>Toets MM1</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-C-H-MKM1-21</td>
                    <td>Marketing Management 1</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>daan.regenbogen@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-CRMEV-18</code></td>
                    <td>CRM en E-Commerce analysevaardigheden</td>
                    <td>5</td>
                    <td>VERSLAG MET DEELOPDRACHTEN</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-H-BEDRED-19</td>
                    <td>Bedrijfskundig redeneren</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>C & D</td>
                    <td>jurgen.huige@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-MKGM2-18</code></td>
                    <td>Marketing Management 2</td>
                    <td>5</td>
                    <td>TOETS MM2</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-C-H-BIEM-20</td>
                    <td>Business in Emerging Markets</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>deniz.seyhan@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PRAKBL-18</code></td>
                    <td>Praktijk Business Leader</td>
                    <td>10</td>
                    <td>Assessment Praktijk Business Leader</td>
                    <td>100</td>
                    <td>10</td>
                    <td>Conversie</td>
                    <td>MBBU-H-PRAK1-19</td>
                    <td>Praktijk 1</td>
                    <td>10</td>
                    <td colspan="3"><table class="inside-table">
                        <td class="first-column">Praktijk-PRAKTIJK</td><td class="second-column">50</td><td>5</td>
                        <tr><td>Portfolio-VERSLAG</td><td>50</td><td>5</td></tr>
                        <tr><td>Verslag-VERSLAG</td><td>0</td><td>0</td></tr>
                    </table></td>
                    <td>A, B, C, D & E</td>
                    <td>leonie.stolk@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-RESM1-18</code></td>
                    <td>Resource Management 1</td>
                    <td>5</td>
                    <td>toets Resource Management 1</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-H-MENO-19</td>
                    <td>Mens en organisatie</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>C & D</td>
                    <td>grietje.vanzijl@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-VBVA-18</code></td>
                    <td>Verbeter vaardigheden</td>
                    <td>5</td>
                    <td>Individueel Dossier - VERSLAG</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-H-BEDRED-19</td>
                    <td>Bedrijfskundig redeneren</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A, B, C & D</td>
                    <td>andré.ras@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PROJM-1</code></td>
                    <td>Projectmanagement</td>
                    <td>5</td>
                    <td colspan="3"><table class="inside-table-medium">
                        <td class="first-column">projectcontract - verslag</td><td class="second-column">70</td><td>3,5</td>
                        <tr><td>tentamen - tentamen</td><td>30</td><td>1,5</td></tr>
                    </table></td>
                    <td>Conversie</td>
                    <td>MBLM-H-PROMAN-20</td>
                    <td>Projectmanagement</td>
                    <td>5</td>
                    <td colspan="3"><table class="inside-table-medium">
                        <td class="first-column">Opdracht - OPDRACHT</td><td class="second-column">70</td><td>3,5</td>
                        <tr><td>Openboek toets- COMPUTER</td><td>30</td><td>1,5</td></tr>
                    </table></td>
                    <td>B & C</td>
                    <td>jeroen.haak@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-BEDRAN-18</code></td>
                    <td>Bedrijfsanalyse</td>
                    <td>5</td>
                    <td>open vragen en MC-vragen - TENTAMEN</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-H-FM-19</td>
                    <td>Financieel management</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>A & B</td>
                    <td>daan.regenbogen@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-BEDRID-18</code></td>
                    <td>Bedrijfsidentificatie</td>
                    <td>5</td>
                    <td>open vragen en MC-vragen - TENTAMEN</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBLM-H-MIS-19</td>
                    <td>Management Informatiesystemen</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>C & D</td>
                    <td>jeroen.haak@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PRAKBA-18</code></td>
                    <td>Praktijk Business Analyst</td>
                    <td>10</td>
                    <td colspan="3"><table class="inside-table-medium">
                        <td class="first-column">Offerte - VERSLAG</td><td class="second-column">50</td><td>5</td>
                        <tr><td>Individueel Portfolio - VERSLAG</td><td>50</td><td>5</td></tr>
                    </table></td>
                    <td>Conversie</td>
                    <td>MBBU-H-PRAK1-19</td>
                    <td>Praktijk 1</td>
                    <td>10</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>10</td>
                    <td>Jaar</td>
                    <td>leonie.stolk@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PRAKPM-18</code></td>
                    <td>Praktijk Projectmanagement</td>
                    <td>10</td>
                    <td>audit - ASSESSMENT</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MB-PROJ-16</td>
                    <td>Project</td>
                    <td>10</td>
                    <td>assessment - ASSESSMENT</td>
                    <td>100</td>
                    <td>10</td>
                    <td>B & C</td>
                    <td>jasper.vandenbrink@hu.nl</td>
                    <td>Gewerkte uren blijven staan mits aantoonbaar voldoende beoordeeld d.m.v. opdrachtgever en/of bewijs van gewerkte uren</td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PRAKPM-18</code></td>
                    <td>Praktijk Projectmanagement</td>
                    <td>10</td>
                    <td>audit - ASSESSMENT</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-H-PROPRA-20</td>
                    <td>Project in Praktijk</td>
                    <td>10</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>10</td>
                    <td>A & B</td>
                    <td>bas.degraaff@hu.nl</td>
                    <td>Van toepassing indien nog helemaal niet gestart is met MBBU-H-PRAKPM-18</td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-OENG-19</code></td>
                    <td>Organisatie en gedrag</td>
                    <td>5</td>
                    <td>toets-OPDRACHT</td>
                    <td>100</td>
                    <td>5</td>
                    <td>Conversie</td>
                    <td>MBBU-H-OENG-20</td>
                    <td>Organisatie en gedrag</td>
                    <td>5</td>
                    <td>Gehele cursus</td>
                    <td>100</td>
                    <td>5</td>
                    <td>B, C & D</td>
                    <td>deniz.seyhan@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PROSM-19</code></td>
                    <td>Procesmanagement</td>
                    <td>5</td>
                    <td colspan="3"><table class="inside-table-medium">
                        <td class="first-column">Tentamen - TENTAMEN</td><td class="second-column">60</td><td>3</td>
                        <tr><td>Verslag-VERSLAG</td><td>40</td><td>2</td></tr>
                    </table></td>
                    <td>Conversie</td>
                    <td>MBBU-H-PROSM-20</td>
                    <td>Procesmanagement</td>
                    <td>5</td>
                    <td colspan="3"><table class="inside-table-medium">
                        <td class="first-column">Take Home tentamen-OPDRACHT</td><td class="second-column">60</td><td>3</td>
                        <tr><td>Verslag-VERSLAG</td><td>40</td><td>2</td></tr>
                    </table></td>
                    <td>A & B</td>
                    <td>jurgen.huigge@hu.nl</td>
                    <td></td>
                </tr>
                <tr class="rij">
                    <td><code>MBBU-H-PROPRA-19</code></td>
                    <td>Project in praktijk </td>
                    <td>10</td>
                    <td colspan="3"><table class="inside-table">
                        <td class="first-column">audit-ASSESSMENT</td><td class="second-column">50</td><td>5</td>
                        <tr><td>Tentamen-tentamen</td><td>20</td><td>2</td></tr>
                        <tr><td>Opdracht-OPDRACHT</td><td>30</td><td>3</td></tr>
                    </table></td>
                    <td>Conversie</td>
                    <td>MBBU-H-PROPRA-20</td>
                    <td>Project in praktijk</td>
                    <td>10</td>
                    <td colspan="3"><table class="inside-table">
                        <td class="first-column">audit-ASSESSMENT</td><td class="second-column">50</td><td>5</td>
                        <tr><td>Openboek Tentamen-COMPUTER</td><td>20</td><td>2</td></tr>
                        <tr><td>Opdracht-OPDRACHT</td><td>30</td><td>3</td></tr>
                    </table></td>
                    <td>A & B</td>
                    <td>bas.degraaff@hu.nl</td>
                    <td></td>
                </tr>
            </table>
        `;
    }
}

customElements.define('sheet-2122', Sheet2122);