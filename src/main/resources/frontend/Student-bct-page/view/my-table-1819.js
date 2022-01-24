import { LitElement, html, css } from "lit";

export class MyTable1819 extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
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
            <table>
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
                <tr>
                    <td>MBBU-H-PROOA-19</td>
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
                <tr>
                    <td>MBBU-H-PRAK2-19</td>
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
                <tr>
                    <td>MBBU-H-ISTRAM-19</td>
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
                <tr>
                    <td>MBBU-H-PRAKBD-18</td>
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
                <tr>
                    <td>MBBU-H-RESM2-18</td>
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
                <tr>
                    <td>MBBU-H-INNOP-18</td>
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
                <tr>
                    <td>MBBU-H-ANVA-18</td>
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
                <tr>
                    <td>MBBU-H-CGPM-18</td>
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
                <tr>
                    <td>MBBU-H-PRVA-18</td>
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
                <tr>
                    <td>MBBU-H-MKGM1-18</td>
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
                <tr>
                    <td>MBBU-H-CRMEV-18</td>
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
                <tr>
                    <td>MBBU-H-MKGM2-18</td>
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
                <tr>
                    <td>MBBU-H-PRAKBL-18</td>
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
                <tr>
                    <td>MBBU-H-RESM1-18</td>
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
                <tr>
                    <td>MBBU-H-VBVA-18</td>
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

customElements.define('my-table-1819', MyTable1819);