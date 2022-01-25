import { LitElement, html, css } from "lit";

class Sheet1920 extends LitElement {
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
                    <td tabindex="21">Lorem ipsum</td>
                    <td tabindex="22">5</td>
                    <td tabindex="23">Dit is dummydata</td>
                    <td tabindex="24">100</td>
                    <td tabindex="25">5</td>
                    <td tabindex="26">Bezem</td>
                    <td tabindex="27">MBBU-H-PROOA-19</td>
                    <td tabindex="28">Lorem ipsum</td>
                    <td tabindex="29">5</td>
                    <td tabindex="30">Dit is dummydata</td>
                    <td tabindex="31">100</td>
                    <td tabindex="32">5</td>
                    <td tabindex="33">A & B</td>
                    <td tabindex="34">docent@hu.nl</td>
                    <td tabindex="35"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="36"><code>MBBU-H-PRAK2-19</code></td>
                    <td tabindex="37">dolor sit amet</td>
                    <td tabindex="38">5</td>
                    <td tabindex="39">Dit is dummydata</td>
                    <td tabindex="40">100</td>
                    <td tabindex="41">5</td>
                    <td tabindex="42">Bezem</td>
                    <td tabindex="43">MBBU-H-PRAK2-19</td>
                    <td tabindex="44">dolor sit amet</td>
                    <td tabindex="45">5</td>
                    <td tabindex="46">Dit is dummydata</td>
                    <td tabindex="47">100</td>
                    <td tabindex="48">5</td>
                    <td tabindex="49">A & B</td>
                    <td tabindex="50">docent@hu.nl</td>
                    <td tabindex="51"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="52"><code>MBBU-H-ISTRAM-19</code></td>
                    <td tabindex="53">consectetuer</td>
                    <td tabindex="54">5</td>
                    <td tabindex="55">Dit is dummydata</td>
                    <td tabindex="56">100</td>
                    <td tabindex="57">5</td>
                    <td tabindex="58">Conversie</td>
                    <td tabindex="59">MBBU-H-ISTRAM-19</td>
                    <td tabindex="60">consectetuer</td>
                    <td tabindex="61">5</td>
                    <td tabindex="62">Dit is dummydata</td>
                    <td tabindex="63">100</td>
                    <td tabindex="64">5</td>
                    <td tabindex="65">A & B</td>
                    <td tabindex="66">docent@hu.nl</td>
                    <td tabindex="67"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="68"><code>MBBU-H-PRAKBD-18</code></td>
                    <td tabindex="69">minim veniam</td>
                    <td tabindex="70">5</td>
                    <td tabindex="71">Dit is dummydata</td>
                    <td tabindex="72">100</td>
                    <td tabindex="73">5</td>
                    <td tabindex="74">Bezem</td>
                    <td tabindex="75">MBBU-H-PRAKBD-18</td>
                    <td tabindex="76">minim veniam</td>
                    <td tabindex="77">5</td>
                    <td tabindex="78">Dit is dummydata</td>
                    <td tabindex="79">100</td>
                    <td tabindex="80">5</td>
                    <td tabindex="81">A & B</td>
                    <td tabindex="82">docent@hu.nl</td>
                    <td tabindex="83"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="84"><code>MBBU-H-RESM2-18</code></td>
                    <td tabindex="85">adipiscing</td>
                    <td tabindex="86">5</td>
                    <td tabindex="87">Dit is dummydata</td>
                    <td tabindex="88">100</td>
                    <td tabindex="89">5</td>
                    <td tabindex="90">Conversie</td>
                    <td tabindex="91">MBBU-H-RESM2-18</td>
                    <td tabindex="92">adipiscing</td>
                    <td tabindex="93">5</td>
                    <td tabindex="94">Dit is dummydata</td>
                    <td tabindex="95">100</td>
                    <td tabindex="96">5</td>
                    <td tabindex="97">A & B</td>
                    <td tabindex="98">docent@hu.nl</td>
                    <td tabindex="99"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="100"><code>MBBU-H-INNOP-18</code></td>
                    <td tabindex="101">elit sed</td>
                    <td tabindex="102">5</td>
                    <td tabindex="103">Dit is dummydata</td>
                    <td tabindex="104">100</td>
                    <td tabindex="105">5</td>
                    <td tabindex="106">Conversie</td>
                    <td tabindex="107">MBBU-H-INNOP-18</td>
                    <td tabindex="108">elit sed</td>
                    <td tabindex="109">5</td>
                    <td tabindex="110">Dit is dummydata</td>
                    <td tabindex="111">100</td>
                    <td tabindex="112">5</td>
                    <td tabindex="113">A & B</td>
                    <td tabindex="114">docent@hu.nl</td>
                    <td tabindex="115"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="116"><code>MBBU-H-ANVA-18</code></td>
                    <td tabindex="117">diam nibh</td>
                    <td tabindex="118">5</td>
                    <td tabindex="119">Dit is dummydata</td>
                    <td tabindex="120">100</td>
                    <td tabindex="121">5</td>
                    <td tabindex="122">Conversie</td>
                    <td tabindex="123">MBBU-H-ANVA-18</td>
                    <td tabindex="124">diam nibh</td>
                    <td tabindex="125">5</td>
                    <td tabindex="126">Dit is dummydata</td>
                    <td tabindex="127">100</td>
                    <td tabindex="128">5</td>
                    <td tabindex="129">A & B</td>
                    <td tabindex="130">docent@hu.nl</td>
                    <td tabindex="131">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</td>
                </tr>
                <tr class="rij">
                    <td tabindex="132"><code>MBBU-H-CGPM-18</code></td>
                    <td tabindex="133">nonummy</td>
                    <td tabindex="134">5</td>
                    <td tabindex="135">Dit is dummydata</td>
                    <td tabindex="136">100</td>
                    <td tabindex="137">5</td>
                    <td tabindex="138">Bezem</td>
                    <td tabindex="139">MBBU-H-CGPM-18</td>
                    <td tabindex="140">nonummy</td>
                    <td tabindex="141">5</td>
                    <td tabindex="142">Dit is dummydata</td>
                    <td tabindex="143">100</td>
                    <td tabindex="144">5</td>
                    <td tabindex="145">A & B</td>
                    <td tabindex="146">docent@hu.nl</td>
                    <td tabindex="147"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="148"><code>MBBU-H-PRVA-18</code></td>
                    <td tabindex="149">euismod</td>
                    <td tabindex="150">5</td>
                    <td tabindex="151">Dit is dummydata</td>
                    <td tabindex="152">100</td>
                    <td tabindex="153">5</td>
                    <td tabindex="154">Bezem</td>
                    <td tabindex="155">MBBU-H-PRVA-18</td>
                    <td tabindex="156">euismod</td>
                    <td tabindex="157">5</td>
                    <td tabindex="158">Dit is dummydata</td>
                    <td tabindex="159">100</td>
                    <td tabindex="160">5</td>
                    <td tabindex="161">A & B</td>
                    <td tabindex="162">docent@hu.nl</td>
                    <td tabindex="163">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</td>
                </tr>
                <tr class="rij">
                    <td tabindex="164"><code>MBBU-H-MKGM1-18</code></td>
                    <td tabindex="165">tincidunt</td>
                    <td tabindex="166">5</td>
                    <td tabindex="167">Dit is dummydata</td>
                    <td tabindex="168">100</td>
                    <td tabindex="169">5</td>
                    <td tabindex="170">Conversie</td>
                    <td tabindex="171">MBBU-H-MKGM1-18</td>
                    <td tabindex="172">tincidunt</td>
                    <td tabindex="173">5</td>
                    <td tabindex="174">Dit is dummydata</td>
                    <td tabindex="175">100</td>
                    <td tabindex="176">5</td>
                    <td tabindex="177">A & B</td>
                    <td tabindex="178">docent@hu.nl</td>
                    <td tabindex="179"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="180"><code>MBBU-H-CRMEV-18</code></td>
                    <td tabindex="181">ut laoreet</td>
                    <td tabindex="182">5</td>
                    <td tabindex="183">Dit is dummydata</td>
                    <td tabindex="184">100</td>
                    <td tabindex="185">5</td>
                    <td tabindex="186">Bezem</td>
                    <td tabindex="187">MBBU-H-CRMEV-18</td>
                    <td tabindex="188">ut laoreet</td>
                    <td tabindex="189">5</td>
                    <td tabindex="190">Dit is dummydata</td>
                    <td tabindex="191">100</td>
                    <td tabindex="192">5</td>
                    <td tabindex="193">A & B</td>
                    <td tabindex="194">docent@hu.nl</td>
                    <td tabindex="195"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="196"><code>MBBU-H-MKGM2-18</code></td>
                    <td tabindex="197">dolore magna</td>
                    <td tabindex="198">5</td>
                    <td tabindex="199">Dit is dummydata</td>
                    <td tabindex="200">100</td>
                    <td tabindex="201">5</td>
                    <td tabindex="202">Bezem</td>
                    <td tabindex="203">MBBU-H-MKGM2-18</td>
                    <td tabindex="204">dolore magna</td>
                    <td tabindex="205">5</td>
                    <td tabindex="206">Dit is dummydata</td>
                    <td tabindex="207">100</td>
                    <td tabindex="208">5</td>
                    <td tabindex="209">A & B</td>
                    <td tabindex="210">docent@hu.nl</td>
                    <td tabindex="211"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="212"><code>MBBU-H-PRAKBL-18</code></td>
                    <td tabindex="213">aliquam</td>
                    <td tabindex="214">5</td>
                    <td tabindex="215">Dit is dummydata</td>
                    <td tabindex="216">100</td>
                    <td tabindex="217">5</td>
                    <td tabindex="218">Bezem</td>
                    <td tabindex="219">MBBU-H-PRAKBL-18</td>
                    <td tabindex="220">aliquam</td>
                    <td tabindex="221">5</td>
                    <td tabindex="222">Dit is dummydata</td>
                    <td tabindex="223">100</td>
                    <td tabindex="224">5</td>
                    <td tabindex="225">A & B</td>
                    <td tabindex="226">docent@hu.nl</td>
                    <td tabindex="227"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="228"><code>MBBU-H-RESM1-18</code></td>
                    <td tabindex="229">erat volutpat</td>
                    <td tabindex="230">5</td>
                    <td tabindex="231">Dit is dummydata</td>
                    <td tabindex="232">100</td>
                    <td tabindex="233">5</td>
                    <td tabindex="234">Bezem</td>
                    <td tabindex="235">MBBU-H-RESM1-18</td>
                    <td tabindex="236">erat volutpat</td>
                    <td tabindex="237">5</td>
                    <td tabindex="238">Dit is dummydata</td>
                    <td tabindex="239">100</td>
                    <td tabindex="240">5</td>
                    <td tabindex="241">A & B</td>
                    <td tabindex="242">docent@hu.nl</td>
                    <td tabindex="243"></td>
                </tr>
                <tr class="rij">
                    <td tabindex="244"><code>MBBU-H-VBVA-18</code></td>
                    <td tabindex="245">ut wisi enim</td>
                    <td tabindex="246">5</td>
                    <td tabindex="247">Dit is dummydata</td>
                    <td tabindex="248">100</td>
                    <td tabindex="249">5</td>
                    <td tabindex="250">Bezem</td>
                    <td tabindex="251">MBBU-H-VBVA-18</td>
                    <td tabindex="252">ut wisi enim</td>
                    <td tabindex="253">5</td>
                    <td tabindex="254">Dit is ook dummydata</td>
                    <td tabindex="255">100</td>
                    <td tabindex="256">5</td>
                    <td tabindex="257">A & B</td>
                    <td tabindex="258">docent@hu.nl</td>
                    <td tabindex="259">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</td>
                </tr>
        `;
    }
}

customElements.define('sheet-1920', Sheet1920);