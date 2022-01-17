import {LitElement, html, css} from "lit";

class ZoekVak extends LitElement{
    // constructor() {
    //     super();
    // }


    render() {
        return html `
            <input type="text" id="myInput" onclick="ZoekVak.myFunction()" placeholder="Zoek Vak..." value="${this.value}">
            <ul id="myUL">
                <li><a href="#">Project Front-End Development</a></li>
                <li><a href="#">Front-End Programming 2</a></li>

                <li><a href="#">Agile Requirement Engineering</a></li>
                <li><a href="#">Project Back-End Development</a></li>

                <li><a href="#">Back-End Programming 2</a></li>
                <li><a href="#">Data - Persistency</a></li>
            </ul>
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