import {LitElement, html, css} from 'lit';

class HomePage extends LitElement {

    render() {
        return html`

        <div class="hero" id="home">
        <button class="main__btn"> Login </button>
        <button class="main__jaarOpgave__btn"> JaarOpgave </button>
        <div class="hero__container">
            <h1 class="hero__heading">Kop van uitleg </h1><br>
            <p class="hero__description">Uitleg over hee het werkt Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum repellendus inventore reiciendis a voluptates maiores repudiandae autem sit nihil tenetur deleniti consectetur enim natus, sed ullam non iure illo!</p><br><br>


            <input type="text" id="myInput" onclick="myFunction()" placeholder="Zoek Vak..." value="${this.value}">
            <ul id="myUL">
                <li><a href="#">Project Front-End Development</a></li>
                <li><a href="#">Front-End Programming 2</a></li>

                <li><a href="#">Agile Requirement Engineering</a></li>
                <li><a href="#">Project Back-End Development</a></li>

                <li><a href="#">Back-End Programming 2</a></li>
                <li><a href="#">Data - Persistency</a></li>
            </ul>
            
      </div> 
  </div>
        
        `;
    }





    static myFunction() {
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
            outline: none;
            position: absolute;
            right: 50px;
            top: 5px;
        }
        
        .main__btn:hover {
          background: linear-gradient(to right, #c5e1f3, #f5d7d7);
        }
        
        .main__jaarOpgave__btn{
          margin-top: 2rem;
            font-size: 1.5rem;
            padding: 10px 20px;
            border: 1.5px solid rgb(21, 4, 248);
            border-radius: 10px;
            color: black;
            cursor: pointer;
            position: relative;
            transition: all 0.4s;
            outline: none;
            position: absolute;
            left: 50px;
            top: 5px;
        }
        
        .main__jaarOpgave__btn:hover{
          background: linear-gradient(to right, #c5e1f3, #f5d7d7);
        
        }
        
        .hero__container {
            display: flex;
            flex-direction: column;
            max-width: 1200px;
            margin: 0 auto;
            height: 90%;
            padding: 30px;
        }
        
        
          #myInput {
            background-image: url('/css/searchicon.png');
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

}

customElements.define('home-page', HomePage);