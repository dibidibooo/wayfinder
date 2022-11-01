<template>
  <div class="footer"></div>
</template>


<style>
.footer {
  background: #f1f1f1df;
  filter: drop-shadow(0 0 16px #787878);
  margin-top: 62em;
  margin-left: 52.9em;
  width: 350px;
  height: 170px;
  border-radius: 50px 50px 0 0;
  position: fixed;
  z-index: 99;
}

.bubbly-button {
  position: absolute;
  width: 130px;
  height: 100px;
  background: #b91e67;
  border-radius: 10px;
  border-color: #ffffff;
  color: rgba(255, 255, 255, 0.8);
  font-family: Arial;
  font-size: 24px;
  font-weight: 700;
  margin-top: 43em;
  z-index: 100;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

/* 11 */
.button-active {
  border: none;
  background: rgb(251, 33, 117);
  background: linear-gradient(
    0deg,
    rgba(251, 33, 117, 1) 0%,
    rgba(234, 76, 137, 1) 100%
  );
  color: #fff;
  overflow: hidden;
}
.button-active:hover {
  text-decoration: none;
  color: #fff;
}
.button-active:before {
  position: absolute;
  content: "";
  display: inline-block;
  top: -180px;
  left: 0;
  width: 30px;
  height: 100%;
  background-color: #fff;
  animation: shiny-btn1 3s ease-in-out infinite;
}
.button-active:hover {
  opacity: 0.7;
}
.button-active:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}

@-webkit-keyframes shiny-btn1 {
  0% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  80% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }
  81% {
    -webkit-transform: scale(4) rotate(45deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}

/* .bubbly-button {
  position: absolute;
  width: 110px;
  height: 100px;
  background: transparent;
  border: 1px solid #434343;
  border-radius: 18px;
  border-color: #B91E67;
  box-shadow: 0 0 10px #B91E67;
  color: rgba(255, 255, 255, 0.8);
  font-family: Arial;
  font-size: 24px;
  font-weight: 700;
  margin-top: 43em;
  z-index: 100;
}

.bubbly-button a {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: hover;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(16px);
  z-index: 1;
  overflow: hidden;
  border-radius: 18px;
  color: #B91E67 !important;
}

.bubbly-button a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1));
  transform: skewX(30deg);
  transition: transform ease 0.3s;
}

.bubbly-button a:active::before {
  transform: skewX(30deg) translateX(-150%);
}

.bubbly-button::after {
  content: "";
  position: absolute;
  bottom: -12px;
  right: 50%;
  border-radius: 8px;
  height: 24px;
  width: 48px;
  background: #B91E67;
  filter: drop-shadow(0 0 12px #B91E67);
  transform: translateX(50%);
  transition: 0.3s ease;
}

.bubbly-button:active::after {
  bottom: 50%;
  transform: translateY(50%) translateX(50%);
  height: 32%;
  width: 32%;
} */
</style>

