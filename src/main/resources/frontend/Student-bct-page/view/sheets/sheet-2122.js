import { LitElement, html, css } from "lit";

class Sheet2122 extends LitElement {
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
            border: 2px solid black;
        } input:hover {
            border-radius: 3px;
            transition-duration: 0.1s;
        }
        
        button {
            padding-left: 12px;
            padding-right: 12px;
            padding-top: 2px;
            padding-bottom: 2px;
            border: 2px solid black;
        } button:hover {
            cursor: pointer;
            border-radius: 3px;
            background-color: #dddddd;
            transition-duration: 0.1s;
        } button:active {
            border-radius: 3px;
            background-color: #a1a1a1;
            transition-duration: 0s;
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
                <label for="cursuscode" tabindex="1">Cursuscode:</label>
                <input id="cursuscode" tabindex="2" type="text" maxlength="20" placeholder="Vul hier uw cursuscode in.">
                <button id="zoekKnop" @click="${this.zoekFunctie}" tabindex="3">Zoeken</button>
            </div>

            <table id="sheet">
                <tr>
                    <th scope="col" tabindex="4">Oude Code</th>
                    <th scope="col" tabindex="5">Naam</th>
                    <th scope="col" tabindex="6">EC-Cursus</th>
                    <th scope="col" tabindex="7" width="12%">Toets & Toetsvorm</th>
                    <th scope="col" tabindex="8" width="4%">Weging</th>
                    <th scope="col" tabindex="9" width="4%">EC-Toets</th>
                    <th scope="col" tabindex="10">Bezem/ Conversie</th>
                    <th scope="col" tabindex="11">Nieuwe Code</th>
                    <th scope="col" tabindex="12">Naam</th>
                    <th scope="col" tabindex="13">EC-cursus</th>
                    <th scope="col" tabindex="14" width="12%">Toets & Toetsvorm</th>
                    <th scope="col" tabindex="15" width="4%">Weging</th>
                    <th scope="col" tabindex="16" width="4%">EC-Toets</th>
                    <th scope="col" tabindex="17">Periode</th>
                    <th scope="col" tabindex="18">Programmaleider</th>
                    <th scope="col" tabindex="19">Opmerkingen</th>
                </tr>
                <tr class="rij">
                    <td tabindex="20"><code>MBBU-H-PROOA-19</code></td>
                    <td tabindex="21">Project organisatieadvisering</td>
                    <td tabindex="22">15</td>
                    <td colspan="3"><table class="inside-table-high">
                        <td class="first-column" tabindex="23">Adviesrapport - VERSLAG</td><td class="second-column" tabindex="24">20</td><td tabindex="25">3</td>
                        <tr><td tabindex="26">Verantwoordingsdossier (Individueel) - OPDRACHT</td><td tabindex="27">25</td><td tabindex="28">3,75</td></tr>
                        <tr><td tabindex="29">Verantwoordingsdossier (Individueel) - OPDRACHT</td><td tabindex="30">25</td><td tabindex="31">3,75</td></tr>
                        <tr><td tabindex="32">Assessment groep- ASSESSMENT</td><td tabindex="33">30</td><td tabindex="34">4,5</td></tr>
                    </table></td>
                    <td tabindex="35">Bezem</td>
                    <td tabindex="36">MBBU-H-PROOA-19</td>
                    <td tabindex="37">Project organisatieadvisering</td>
                    <td tabindex="38">15</td>
                    <td colspan="3"><table class="inside-table-high">
                        <td class="first-column" tabindex="39">Diagnose en onderzoeksplan - VERSLAG</td><td class="second-column" tabindex="40">20</td><td tabindex="42">3</td>
                        <tr><td tabindex="43">Adviesrapport - VERSLAG</td><td tabindex="44">25</td><td tabindex="45">3,75</td></tr>
                        <tr><td tabindex="46">Verantwoordingsdossier (Individueel) - OP</td><td tabindex="47">25</td><td tabindex="48">3,75</td></tr>
                        <tr><td tabindex="49">Assessment groep- ASSESSMENT</td><td tabindex="50">30</td><td tabindex="51">4,5</td></tr>
                    </table></td>
                    <td tabindex="52">C & D</td>
                    <td tabindex="53">hans.vanderkolk@hu.nl</td>
                    <td tabindex="54"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="55"><code>MBBU-H-PRAK2-19</code></td>
                    <td tabindex="56">Praktijk 2</td>
                    <td tabindex="57">30</td>
                    <td colspan="3"><table class="inside-table-low">
                        <td class="first-column" tabindex="58">Portfolio - PRAKTIJK</td><td class="second-column" tabindex="59">50</td><td tabindex="60">15</td>
                        <tr><td tabindex="61">Assessment- ASSESSMENT</td><td tabindex="62">50</td><td tabindex="63">15</td></tr>
                    </table></td>
                    <td tabindex="64">Conversie</td>
                    <td tabindex="65">MBBU-H-PRAK2-20</td>
                    <td tabindex="66">Praktijk 2</td>
                    <td tabindex="67">30</td>
                    <td tabindex="68">Gehele cursus</td>
                    <td tabindex="69"></td>
                    <td tabindex="70"></td>
                    <td tabindex="71">Jaar</td>
                    <td tabindex="72">pieter.schilder@hu.nl</td>
                    <td tabindex="73"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="74"><code>MBBU-H-ISTRAM-19</code></td>
                    <td tabindex="75">Inleiding strategisch management</td>
                    <td tabindex="76">10</td>
                    <td colspan="3"><table class="inside-table-low">
                        <td class="first-column" tabindex="77">Tentamen ISTRAM-TENTAMEN</td><td class="second-column" tabindex="78">50</td><td tabindex="79">5</td>
                        <tr><td tabindex="80">Essay ISTRAM-VERSLAG</td><td tabindex="81">30</td><td tabindex="82">3</td></tr>
                        <tr><td tabindex="83">Presentatie Advies ISTRAM-PRESENTATIE</td><td tabindex="84">20</td><td tabindex="85">2</td></tr>
                    </table></td>
                    <td tabindex="86">Bezem</td>
                    <td tabindex="87">MBBU-H-ISTRAM-19</td>
                    <td tabindex="88">Inleiding strategisch management</td>
                    <td tabindex="89">10</td>
                    <td colspan="3"><table class="inside-table-low">
                        <td class="first-column" tabindex="90">Tentamen ISTRAM-COMPUTER</td><td class="second-column" tabindex="91">50</td><td tabindex="92">5</td>
                        <tr><td tabindex="93">Essay ISTRAM-VERSLAG</td><td tabindex="94">30</td><td tabindex="95">3</td></tr>
                        <tr><td tabindex="96">Presentatie advies ISTRAM-PRESENTATI</td><td tabindex="97">20</td><td tabindex="98">2</td></tr>
                    </table></td>
                    <td tabindex="99">B & C</td>
                    <td tabindex="100">meindert.scholma@hu.nl</td>
                    <td tabindex="101"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="102"><code>MBBU-H-LEIVA-18</code></td>
                    <td tabindex="103">Leiderschapsvaardigheden</td>
                    <td tabindex="104">10</td>
                    <td tabindex="105">Opdracht leiderschapsvaardigheden</td>
                    <td tabindex="106">100</td>
                    <td tabindex="107">10</td>
                    <td tabindex="108">Bezem</td>
                    <td tabindex="109">MBBU-H-LEIVA-18</td>
                    <td tabindex="110">Leiderschapsvaardigheden</td>
                    <td tabindex="111">10</td>
                    <td colspan="3"><table class="inside-table-low">
                        <td class="first-column" tabindex="112">Gehele cursus</td><td class="second-column" tabindex="113">100</td><td tabindex="114">10</td>
                    </table></td>
                    <td tabindex="115">C & D</td>
                    <td tabindex="116">pieter.schilder@hu.nl</td>
                    <td tabindex="117"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="118"><code>MBBU-H-PRAKBD-18</code></td>
                    <td tabindex="119">Praktijk Business Developer</td>
                    <td tabindex="120">5</td>
                    <td tabindex="121">Verslag Praktijk Stage</td>
                    <td tabindex="122">100</td>
                    <td tabindex="123">5</td>
                    <td tabindex="124">Bezem</td>
                    <td tabindex="125">MBBU-H-PRAKBD-18</td>
                    <td tabindex="126">Praktijk Business Developer</td>
                    <td tabindex="127">5</td>
                    <td tabindex="128">Gehele cursus</td>
                    <td tabindex="129">100</td>
                    <td tabindex="130">5</td>
                    <td tabindex="131">A & B</td>
                    <td tabindex="132">rob.vanbemmelen@hu.nl</td>
                    <td tabindex="133"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="134"><code>MBBU-H-RESM2-18</code></td>
                    <td tabindex="135">Resource Management 2</td>
                    <td tabindex="136">5</td>
                    <td tabindex="137">Opdracht Resource Management 2</td>
                    <td tabindex="138">100</td>
                    <td tabindex="139">5</td>
                    <td tabindex="140">Bezem</td>
                    <td tabindex="141">MBBU-H-RESM2-18</td>
                    <td tabindex="142">Resource Management 2</td>
                    <td tabindex="143">5</td>
                    <td tabindex="144">Gehele cursus</td>
                    <td tabindex="145">100</td>
                    <td tabindex="146">5</td>
                    <td tabindex="147">D & E</td>
                    <td tabindex="148">suzanne.boel@hu.nl</td>
                    <td tabindex="149"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="150"><code>MBBU-H-RMVV-18</code></td>
                    <td tabindex="151">Relatiemanagement & verkoopvaardigheden</td>
                    <td tabindex="152">5</td>
                    <td tabindex="153">VERSLAG-Reflectieverslag</td>
                    <td tabindex="154">100</td>
                    <td tabindex="155">5</td>
                    <td tabindex="156">Bezem</td>
                    <td tabindex="157">MBBU-H-RMVV-18</td>
                    <td tabindex="158">Relatiemanagement & verkoopvaardigheid</td>
                    <td tabindex="159">5</td>
                    <td tabindex="160">Gehele cursus</td>
                    <td tabindex="161">100</td>
                    <td tabindex="162">5</td>
                    <td tabindex="163">A & B</td>
                    <td tabindex="164">deniz.seyhan@hu.nl</td>
                    <td tabindex="165"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="166"><code>MBBU-H-INNOP-18</code></td>
                    <td tabindex="167">Innovatieproject</td>
                    <td tabindex="168">5</td>
                    <td tabindex="169">toets - VERSLAG</td>
                    <td tabindex="170">100</td>
                    <td tabindex="171">5</td>
                    <td tabindex="172">Bezem</td>
                    <td tabindex="173">MBBU-H-INNOP-18</td>
                    <td tabindex="174">Innovatieproject</td>
                    <td tabindex="175">5</td>
                    <td tabindex="176">Gehele cursus</td>
                    <td tabindex="177">100</td>
                    <td tabindex="178">5</td>
                    <td tabindex="179">C & D</td>
                    <td tabindex="180">michael.makowski@hu.nl</td>
                    <td tabindex="181"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="182"><code>MBBU-H-ANVA-18</code></td>
                    <td tabindex="183">Analyse vaardigheden</td>
                    <td tabindex="184">5</td>
                    <td tabindex="185">Individueel Dossier - VERSLAG</td>
                    <td tabindex="186">100</td>
                    <td tabindex="187">5</td>
                    <td tabindex="188">Bezem</td>
                    <td tabindex="189">MBBU-H-ANVA-18</td>
                    <td tabindex="190">Analyse vaardigheden</td>
                    <td tabindex="191">5</td>
                    <td tabindex="192">Gehele cursus</td>
                    <td tabindex="193">100</td>
                    <td tabindex="194">5</td>
                    <td tabindex="195">B & C</td>
                    <td tabindex="196">paul.venderaa@hu.nl</td>
                    <td tabindex="197"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="198"><code>MBBU-H-CGPM-18</code></td>
                    <td tabindex="199">Gedrag en cultuur in projecten</td>
                    <td tabindex="200">5</td>
                    <td tabindex="201">toets - VERSLAG</td>
                    <td tabindex="202">100</td>
                    <td tabindex="203">5</td>
                    <td tabindex="204">Bezem</td>
                    <td tabindex="205">MBBU-H-CGPM-18</td>
                    <td tabindex="206">Gedrag en cultuur in projecten</td>
                    <td tabindex="207">5</td>
                    <td tabindex="208">Gehele cursus</td>
                    <td tabindex="209">100</td>
                    <td tabindex="210">5</td>
                    <td tabindex="211">C & D</td>
                    <td tabindex="212">michael.makowski@hu.nl</td>
                    <td tabindex="213"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="214"><code>MBBU-H-PRVA-18</code></td>
                    <td tabindex="215">Projectmanagementvaardigheden</td>
                    <td tabindex="216">5</td>
                    <td tabindex="217">assessment - ASSESSMENT</td>
                    <td tabindex="218">100</td>
                    <td tabindex="219">5</td>
                    <td tabindex="220">Bezem</td>
                    <td tabindex="221">MBBU-H-PRVA-18</td>
                    <td tabindex="222">Projectmanagementvaardigheden</td>
                    <td tabindex="223">5</td>
                    <td tabindex="224">Gehele cursus</td>
                    <td tabindex="225">100</td>
                    <td tabindex="226">5</td>
                    <td tabindex="227">C & D</td>
                    <td tabindex="228">jasper.vandenbrink@hu.nl</td>
                    <td tabindex="229"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="230"><code>MBBU-H-MKGM1-18</code></td>
                    <td tabindex="231">Marketing Management 1</td>
                    <td tabindex="232">5</td>
                    <td tabindex="233">Toets MM1</td>
                    <td tabindex="234">100</td>
                    <td tabindex="235">5</td>
                    <td tabindex="236">Conversie</td>
                    <td tabindex="237">MBBU-C-H-MKM1-21</td>
                    <td tabindex="238">Marketing Management 1</td>
                    <td tabindex="239">5</td>
                    <td tabindex="240">Gehele cursus</td>
                    <td tabindex="241">100</td>
                    <td tabindex="242">5</td>
                    <td tabindex="243">A & B</td>
                    <td tabindex="244">daan.regenbogen@hu.nl</td>
                    <td tabindex="245"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="246"><code>MBBU-H-CRMEV-18</code></td>
                    <td tabindex="247">CRM en E-Commerce analysevaardigheden</td>
                    <td tabindex="248">5</td>
                    <td tabindex="249">VERSLAG MET DEELOPDRACHTEN</td>
                    <td tabindex="250">100</td>
                    <td tabindex="251">5</td>
                    <td tabindex="252">Conversie</td>
                    <td tabindex="253">MBBU-H-BEDRED-19</td>
                    <td tabindex="254">Bedrijfskundig redeneren</td>
                    <td tabindex="255">5</td>
                    <td tabindex="256">Gehele cursus</td>
                    <td tabindex="257">100</td>
                    <td tabindex="258">5</td>
                    <td tabindex="259">C & D</td>
                    <td tabindex="260">jurgen.huige@hu.nl</td>
                    <td tabindex="261"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="262"><code>MBBU-H-MKGM2-18</code></td>
                    <td tabindex="263">Marketing Management 2</td>
                    <td tabindex="264">5</td>
                    <td tabindex="265">TOETS MM2</td>
                    <td tabindex="266">100</td>
                    <td tabindex="267">5</td>
                    <td tabindex="268">Conversie</td>
                    <td tabindex="269">MBBU-C-H-BIEM-20</td>
                    <td tabindex="270">Business in Emerging Markets</td>
                    <td tabindex="271">5</td>
                    <td tabindex="272">Gehele cursus</td>
                    <td tabindex="273">100</td>
                    <td tabindex="274">5</td>
                    <td tabindex="275">A & B</td>
                    <td tabindex="276">deniz.seyhan@hu.nl</td>
                    <td tabindex="277"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="278"><code>MBBU-H-PRAKBL-18</code></td>
                    <td tabindex="279">Praktijk Business Leader</td>
                    <td tabindex="280">10</td>
                    <td tabindex="281">Assessment Praktijk Business Leader</td>
                    <td tabindex="282">100</td>
                    <td tabindex="283">10</td>
                    <td tabindex="284">Conversie</td>
                    <td tabindex="285">MBBU-H-PRAK1-19</td>
                    <td tabindex="286">Praktijk 1</td>
                    <td tabindex="287">10</td>
                    <td colspan="3"><table class="inside-table">
                        <td class="first-column" tabindex="288">Praktijk-PRAKTIJK</td><td class="second-column" tabindex="289">50</td><td tabindex="290">5</td>
                        <tr><td tabindex="291">Portfolio-VERSLAG</td><td tabindex="292">50</td><td tabindex="293">5</td></tr>
                        <tr><td tabindex="294">Verslag-VERSLAG</td><td tabindex="295">0</td><td tabindex="296">0</td></tr>
                    </table></td>
                    <td tabindex="297">A, B, C, D & E</td>
                    <td tabindex="298">leonie.stolk@hu.nl</td>
                    <td tabindex="299"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="300"><code>MBBU-H-RESM1-18</code></td>
                    <td tabindex="301">Resource Management 1</td>
                    <td tabindex="302">5</td>
                    <td tabindex="303">toets Resource Management 1</td>
                    <td tabindex="304">100</td>
                    <td tabindex="305">5</td>
                    <td tabindex="306">Conversie</td>
                    <td tabindex="307">MBBU-H-MENO-19</td>
                    <td tabindex="308">Mens en organisatie</td>
                    <td tabindex="309">5</td>
                    <td tabindex="310">Gehele cursus</td>
                    <td tabindex="311">100</td>
                    <td tabindex="312">5</td>
                    <td tabindex="313">C & D</td>
                    <td tabindex="314">grietje.vanzijl@hu.nl</td>
                    <td tabindex="315"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="316"><code>MBBU-H-VBVA-18</code></td>
                    <td tabindex="317">Verbeter vaardigheden</td>
                    <td tabindex="318">5</td>
                    <td tabindex="319">Individueel Dossier - VERSLAG</td>
                    <td tabindex="320">100</td>
                    <td tabindex="321">5</td>
                    <td tabindex="322">Conversie</td>
                    <td tabindex="323">MBBU-H-BEDRED-19</td>
                    <td tabindex="324">Bedrijfskundig redeneren</td>
                    <td tabindex="325">5</td>
                    <td tabindex="326">Gehele cursus</td>
                    <td tabindex="327">100</td>
                    <td tabindex="328">5</td>
                    <td tabindex="329">A, B, C & D</td>
                    <td tabindex="330">andré.ras@hu.nl</td>
                    <td tabindex="331"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="332"><code>MBBU-H-PROJM-1</code></td>
                    <td tabindex="333">Projectmanagement</td>
                    <td tabindex="334">5</td>
                    <td colspan="3"><table class="inside-table-medium">
                        <td class="first-column" tabindex="335">projectcontract - verslag</td><td class="second-column" tabindex="336">70</td><td tabindex="337">3,5</td>
                        <tr><td tabindex="338">tentamen - tentamen</td><td tabindex="339">30</td><td tabindex="340">1,5</td></tr>
                    </table></td>
                    <td tabindex="341">Conversie</td>
                    <td tabindex="342">MBLM-H-PROMAN-20</td>
                    <td tabindex="343">Projectmanagement</td>
                    <td tabindex="344">5</td>
                    <td colspan="3"><table class="inside-table-medium">
                        <td class="first-column" tabindex="345">Opdracht - OPDRACHT</td><td class="second-column" tabindex="346">70</td><td tabindex="347">3,5</td>
                        <tr><td tabindex="348">Openboek toets- COMPUTER</td><td tabindex="349">30</td><td tabindex="350">1,5</td></tr>
                    </table></td>
                    <td tabindex="351">B & C</td>
                    <td tabindex="352">jeroen.haak@hu.nl</td>
                    <td tabindex="353"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="354"><code>MBBU-H-BEDRAN-18</code></td>
                    <td tabindex="355">Bedrijfsanalyse</td>
                    <td tabindex="356">5</td>
                    <td tabindex="357">open vragen en MC-vragen - TENTAMEN</td>
                    <td tabindex="358">100</td>
                    <td tabindex="359">5</td>
                    <td tabindex="360">Conversie</td>
                    <td tabindex="361">MBBU-H-FM-19</td>
                    <td tabindex="362">Financieel management</td>
                    <td tabindex="363">5</td>
                    <td tabindex="364">Gehele cursus</td>
                    <td tabindex="365">100</td>
                    <td tabindex="366">5</td>
                    <td tabindex="367">A & B</td>
                    <td tabindex="368">daan.regenbogen@hu.nl</td>
                    <td tabindex="369"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="370"><code>MBBU-H-BEDRID-18</code></td>
                    <td tabindex="371">Bedrijfsidentificatie</td>
                    <td tabindex="372">5</td>
                    <td tabindex="373">open vragen en MC-vragen - TENTAMEN</td>
                    <td tabindex="374">100</td>
                    <td tabindex="375">5</td>
                    <td tabindex="376">Conversie</td>
                    <td tabindex="377">MBLM-H-MIS-19</td>
                    <td tabindex="378">Management Informatiesystemen</td>
                    <td tabindex="379">5</td>
                    <td tabindex="380">Gehele cursus</td>
                    <td tabindex="381">100</td>
                    <td tabindex="382">5</td>
                    <td tabindex="383">C & D</td>
                    <td tabindex="384">jeroen.haak@hu.nl</td>
                    <td tabindex="385"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="386"><code>MBBU-H-PRAKBA-18</code></td>
                    <td tabindex="387">Praktijk Business Analyst</td>
                    <td tabindex="388">10</td>
                    <td colspan="3"><table class="inside-table-medium">
                        <td class="first-column" tabindex="389">Offerte - VERSLAG</td><td class="second-column" tabindex="390">50</td><td tabindex="391">5</td>
                        <tr><td tabindex="392">Individueel Portfolio - VERSLAG</td><td tabindex="393">50</td><td tabindex="394">5</td></tr>
                    </table></td>
                    <td tabindex="395">Conversie</td>
                    <td tabindex="396">MBBU-H-PRAK1-19</td>
                    <td tabindex="397">Praktijk 1</td>
                    <td tabindex="398">10</td>
                    <td tabindex="399">Gehele cursus</td>
                    <td tabindex="400">100</td>
                    <td tabindex="401">10</td>
                    <td tabindex="402">Jaar</td>
                    <td tabindex="403">leonie.stolk@hu.nl</td>
                    <td tabindex="404"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="405"><code>MBBU-H-PRAKPM-18</code></td>
                    <td tabindex="406">Praktijk Projectmanagement</td>
                    <td tabindex="407">10</td>
                    <td tabindex="408">audit - ASSESSMENT</td>
                    <td tabindex="409">100</td>
                    <td tabindex="410">5</td>
                    <td tabindex="411">Conversie</td>
                    <td tabindex="412">MB-PROJ-16</td>
                    <td tabindex="413">Project</td>
                    <td tabindex="414">10</td>
                    <td tabindex="415">assessment - ASSESSMENT</td>
                    <td tabindex="416">100</td>
                    <td tabindex="417">10</td>
                    <td tabindex="418">B & C</td>
                    <td tabindex="419">jasper.vandenbrink@hu.nl</td>
                    <td tabindex="420">Gewerkte uren blijven staan mits aantoonbaar voldoende beoordeeld d.m.v. opdrachtgever en/of bewijs van gewerkte uren</td>
                </tr>
                <tr class="rij">
                    <td tabindex="421"><code>MBBU-H-PRAKPM-18</code></td>
                    <td tabindex="422">Praktijk Projectmanagement</td>
                    <td tabindex="423">10</td>
                    <td tabindex="424">audit - ASSESSMENT</td>
                    <td tabindex="425">100</td>
                    <td tabindex="426">5</td>
                    <td tabindex="427">Conversie</td>
                    <td tabindex="428">MBBU-H-PROPRA-20</td>
                    <td tabindex="429">Project in Praktijk</td>
                    <td tabindex="430">10</td>
                    <td tabindex="431">Gehele cursus</td>
                    <td tabindex="432">100</td>
                    <td tabindex="433">10</td>
                    <td tabindex="434">A & B</td>
                    <td tabindex="435">bas.degraaff@hu.nl</td>
                    <td tabindex="436">Van toepassing indien nog helemaal niet gestart is met MBBU-H-PRAKPM-18</td>
                </tr>
                <tr class="rij">
                    <td tabindex="437"><code>MBBU-H-OENG-19</code></td>
                    <td tabindex="438">Organisatie en gedrag</td>
                    <td tabindex="439">5</td>
                    <td tabindex="440">toets-OPDRACHT</td>
                    <td tabindex="441">100</td>
                    <td tabindex="442">5</td>
                    <td tabindex="443">Conversie</td>
                    <td tabindex="444">MBBU-H-OENG-20</td>
                    <td tabindex="445">Organisatie en gedrag</td>
                    <td tabindex="446">5</td>
                    <td tabindex="447">Gehele cursus</td>
                    <td tabindex="448">100</td>
                    <td tabindex="449">5</td>
                    <td tabindex="450">B, C & D</td>
                    <td tabindex="451">deniz.seyhan@hu.nl</td>
                    <td tabindex="452"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="453"><code>MBBU-H-PROSM-19</code></td>
                    <td tabindex="454">Procesmanagement</td>
                    <td tabindex="455">5</td>
                    <td colspan="3"><table class="inside-table-medium">
                        <td class="first-column" tabindex="456">Tentamen - TENTAMEN</td><td class="second-column" tabindex="457">60</td><td tabindex="458">3</td>
                        <tr><td tabindex="459">Verslag-VERSLAG</td><td tabindex="460">40</td><td tabindex="461">2</td></tr>
                    </table></td>
                    <td tabindex="462">Conversie</td>
                    <td tabindex="463">MBBU-H-PROSM-20</td>
                    <td tabindex="464">Procesmanagement</td>
                    <td tabindex="465">5</td>
                    <td colspan="3"><table class="inside-table-medium">
                        <td class="first-column" tabindex="466">Take Home tentamen-OPDRACHT</td><td class="second-column" tabindex="467">60</td><td tabindex="468">3</td>
                        <tr><td tabindex="469">Verslag-VERSLAG</td><td tabindex="470">40</td><td tabindex="471">2</td></tr>
                    </table></td>
                    <td tabindex="472">A & B</td>
                    <td tabindex="473">jurgen.huigge@hu.nl</td>
                    <td tabindex="474"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="475"><code>MBBU-H-PROPRA-19</code></td>
                    <td tabindex="476">Project in praktijk </td>
                    <td tabindex="477">10</td>
                    <td colspan="3"><table class="inside-table">
                        <td class="first-column" tabindex="478">audit-ASSESSMENT</td><td class="second-column" tabindex="479">50</td><td tabindex="480">5</td>
                        <tr><td tabindex="481">Tentamen-tentamen</td><td tabindex="482">20</td><td tabindex="483">2</td></tr>
                        <tr><td tabindex="484">Opdracht-OPDRACHT</td><td tabindex="485">30</td><td tabindex="486">3</td></tr>
                    </table></td>
                    <td tabindex="487">Conversie</td>
                    <td tabindex="488">MBBU-H-PROPRA-20</td>
                    <td tabindex="489">Project in praktijk</td>
                    <td tabindex="490">10</td>
                    <td colspan="3"><table class="inside-table">
                        <td class="first-column" tabindex="491">audit-ASSESSMENT</td><td class="second-column" tabindex="492">50</td><td tabindex="493">5</td>
                        <tr><td tabindex="494">Openboek Tentamen-COMPUTER</td><td tabindex="495">20</td><td tabindex="496">2</td></tr>
                        <tr><td tabindex="497">Opdracht-OPDRACHT</td><td tabindex="498">30</td><td tabindex="499">3</td></tr>
                    </table></td>
                    <td tabindex="500">A & B</td>
                    <td tabindex="501">bas.degraaff@hu.nl</td>
                    <td tabindex="502"></td>
                </tr>
            </table>
        `;
    }
}

customElements.define('sheet-2122', Sheet2122);