<template>
  <div>
    <div id="navbar" class="navbar-wrapper">
      <div class="navbar-big navbar-content">
        <div class="navbar-big-wrapper modules-quotes-bg">
          <a class="modules-private-logo" href="/">
            <div class="modules-private-name">Abi Dhabi Plaza</div>
          </a>
          <div class="modules-links-wrapper modules-big-links">
            <div class="modules-link-wrapper" id="navbar-home">
              <a href="#open-modal">
                <div class="modules-link-content">
                  <img
                    src="images/Category/1.png"
                    width="100"
                    height="100"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ПОДАРКИ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="navbar-athlete">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/2.png"
                    width="100"
                    height="100"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ШОППИНГ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="navbar-event">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/3.png"
                    width="100"
                    height="100"
                    alt="lorem"
                  />
                  <div class="modules-link-text">БАНКОМАТЫ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="navbar-tour">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/4.png"
                    width="100"
                    height="100"
                    alt="lorem"
                  />
                  <div class="modules-link-text">РАЗВЛЕЧЕНИЯ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="navbar-tour">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/5.png"
                    width="100"
                    height="100"
                    alt="lorem"
                  />
                  <div class="modules-link-text">СУПЕРМАРКЕТ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="navbar-tour">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/6.png"
                    width="100"
                    height="100"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ЭЛЕКТРОНИКА</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="navbar-tour">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/7.png"
                    width="100"
                    height="100"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ТОВАРЫ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="navbar-tour">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/8.png"
                    width="100"
                    height="100"
                    alt="lorem"
                  />
                  <div class="modules-link-text">РЕСТОРАНЫ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="navbar-tour">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/9.png"
                    width="100"
                    height="100"
                    alt="lorem"
                  />
                  <div class="modules-link-text">СУПЕРМАРКЕТ</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    <div id="open-modal" class="modal-window">
      <div>
        <a href="#" title="Close" class="modal-close"><bold>X </bold></a>
        <ul class="categories-list">
     
     <li>
      <div>xsxsx</div>
      <!-- <div>{{info.description}}</div> -->
     </li>
    </ul>
      </div>
    </div>



  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null
    };
  },

  mounted() {
    axios
      .get('http://Localhost:8081/api/stores')
      .then(response => (this.info = response.data));
  }
}
</script>


<style scoped>
.navbar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

.navbar-content {
  width: 100%;
}

@media (min-width: 600px) {
  .navbar-big {
    display: none;
  }
}

@media (min-width: 900px) {
  .navbar-big {
    display: block;
  }
}

.navbar-big-wrapper {
  -webkit-transition: background 0.5s linear;
  transition: background 0.5s linear;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  color: #fff;
  padding: 0px;
}

.modules-quotes-bg {
  background: #222222;
  filter: drop-shadow(0 0 24px #222222);
}

.modules-private-logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  margin-right: auto;
  line-height: 1;
}

a {
  text-decoration: none;
}

a {
  color: inherit;
  font-weight: 700;
  font-family: inherit;
}

.modules-private-name {
  font-family: Impact, Charcoal, sans-serif;
  font-weight: 100;
  font-size: 32px;
  color: white;
}

.modules-big-links {
  width: 100%;
}

.modules-big-contact,
.modules-big-links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.modules-links-wrapper {
  position: relative;
  /* border-right: 1px solid hsla(0, 0%, 100%, 0.4); */
}

.modules-link-wrapper {
  cursor: pointer;
}

@media (min-width: 600px) {
  .modules-link-wrapper {
    width: auto;
  }
}

@media (min-width: 900px) {
  .modules-link-wrapper {
    width: 100%;
  }
}

.modules-link-content {
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 2em;
}

@media (min-width: 600px) {
  .modules-link-content {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    /* border-bottom: 1px solid hsla(0, 0%, 100%, 0.4); */
  }
}

@media (min-width: 900px) {
  .modules-link-content {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    /* border-left: 1px solid hsla(0, 0%, 100%, 0.4); */
    border-bottom: none;
  }
}

@media (min-width: 600px) {
  .modules-link-icon {
    font-size: 28px;
    max-height: 3em;
  }
}

@media (min-width: 900px) {
  .modules-link-icon {
    font-size: 28px;
    max-width: 6em;
  }
}

@media (min-width: 600px) {
  .modules-link-text {
    font-family: Impact, Charcoal, sans-serif;
    font-weight: 100;
    font-size: 28px;
    padding: 0 1em;
  }
}

@media (min-width: 900px) {
  .modules-link-text {
    font-size: 20px;
    padding: 0.75em 0 0;
  }
}

.modules-links-tracker {
  height: 0.3em;
  background: #fff;
  position: absolute;
  top: 105%;
  -webkit-transition: left 0.25s linear;
  transition: left 0.25s linear;
  /* border-radius: 0.5em; */
}

@media (min-width: 600px) {
  .modules-links-tracker {
    display: none;
  }
}

@media (min-width: 900px) {
  .modules-links-tracker {
    display: block;
  }
}

.modules-big-contact,
.modules-big-links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.modules-buttons-blank {
  border: none;
  cursor: pointer;
}

.modules-buttons-base {
  padding: 0.5em 2em;
  /* border-radius: 5em; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1em;
}

.modules-buttons-white {
  background: #fff;
  /* border-radius: 5px; */
}

.modules-nav-big-button {
  padding: 0.5em 0.5em;
  /* border: 1px solid #fff; */
  color: #1eb6ff;
}

.modules-nav-big-button .modules-link-icon {
  font-size: 48px;
}

.spacer {
  height: 800px;
}

/* ------------------------MODAL-------------------------- */

.modal-window {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
}
.modal-window:target {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.modal-window > div {
  width: 1200px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background: white;
}
.modal-window header {
  font-weight: bold;
}
.modal-window h1 {
  font-size: 150%;
  margin: 0 0 15px;
}

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
}
.modal-close:hover {
  color: black;
}

.modal-window > div {
  border-radius: 1rem;
}

.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}

/* ------------------------MODAL-------------------------- */



.categories-list {
  display: flex;
  flex-wrap: wrap;
  max-height: 700px;
  overflow-y: auto;
  justify-content: space-between;
}
.categories-list li {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border: 10px solid gray;
  margin-right: 1rem;
  border-radius: 5px;
  min-width:150px;
  min-height:100px;
  margin:10px;
}

.categories-list li img {
  width: 30px;
  height: 30px;
}


/* -------------------------------- */



.main{
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card{
  width: 400px;
  margin: 0 auto;
  position: relative;
  box-shadow:0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
  border-radius: 10px;
}
.card img{
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.card-title{
  width: calc(100% - 40px);
  background: #fff;
  padding: 10px;
  position: absolute;
  left: 50%;
  top: 170px;
  transform: translateX(-50%);
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  box-shadow:0 10px 15px -5px rgba(0,0,0,.1), 0 5px 5px -5px rgba(0,0,0,.01);
}
.card-title h4{
  font-family: 'Roboto', sans-serif;
}
.card-title h3{
  font-weight: normal;
  font-family: 'Source Sans Pro', sans-serif;
}
.card-content{
  width: 100%;
  background: #fff;
  padding-top: 40px;
  border-radius: 0 0 10px 10px;
}
.card-content-row{
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #e2e8f0;
}
.card-content-col{
  width: 50%;
  padding: 20px;
  font-family: 'Source Sans Pro', sans-serif;
}
.card-content-col .fa{
  font-size: 25px;
  vertical-align: middle;
  margin-right: 10px;
  color: #718096;
}
.card-content-user-info{
  width: 100%;
  padding: 10px;
  display: flex;
  background: #f7fafc;
  border-radius: 0 0 10px 10px;
}
.card-content-user-info img{
  width: 60px;
  height: 60px;
  margin: 10px;
  border-radius: 50%;
  vertical-align: middle;
}
.card-content-user-info h4{
  font-family: 'Roboto', sans-serif;
}
.card-content-user-info p{
  font-family: 'Roboto', sans-serif;
}
.card-content-user-info .card-content-user-contact{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
}
</style>