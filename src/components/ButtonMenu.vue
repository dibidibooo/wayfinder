<template>
<div>
</div>
</template>


<style>
.bubbly-button {
  position: absolute;
  width: 130px;
  height: 120px;
  background: transparent;
  border: 1px solid #434343;
  border-radius: 18px;
  border-color: #B91E67;
  box-shadow: 0 0 10px #B91E67;
  color: rgba(255, 255, 255, 0.8);
  font-family: Arial;
  font-size: 24px;
  font-weight: 700;
  margin-top: 42em;
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
}

</style>

