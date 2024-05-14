<template>
  <q-page class="flex flex-center">
    <div class="container-class">
      <h1>Can Ryan Vu should intern at Datafi?</h1>
      <h1>Promising Candidate!</h1>

      <div class="align-center">
        <q-btn label="Yes Def!" color="primary" class="custom-btn btn-7" @click="yessss" />
        <q-btn label="No" @mouseover="changeButton" color="primary" class="custom-btn btn-7" ref="toggleButton" />
      </div>
    </div>

    <div v-if="showYesImage" class="yes-image-container">
      <p class="plea-text">Sounds great!</p>
      <img src="../assets/ryan.jpeg" alt="Image of Me" class="yes-image" />
      <div>
        <q-icon name="fab fa-instagram" />
        <a href="https://www.linkedin.com/in/ryanqvu/" target="_blank">LinkedIn</a>
      </div>
    </div>
  </q-page>
</template>

<!-- <script src="./IndexPage.js"></script> -->
<script>
import { changeButton } from "./IndexPage.js";

export function yessss(event) {
    this.showYesImage = true;
}
export default {
  data() {
    return {
      showYesImage: false,
    };
  },
  methods: {
    changeButton,
    yessss,
  },
};
</script>
<style scoped>
.container-class {
  margin-top: 7rem;
}

h1 {
  font-size: 3r em;
  text-align: center;
  color: var(--text-color);
  font-family: 'Montserrat', sans-serif;
}

.align-center {
  display: flex;
  justify-content: center;
}

.custom-btn {
  width: 160px;
  height: 60px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 50;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  justify-content: center;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

.btn-7 {
  background: linear-gradient(0deg, var(--button-color), 0%, var(--button-color) 100%);
  color: var(--button-text);
  line-height: 62px;
  font-size: 20px;
  padding: 0;
  border: none;
}

.btn-7 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-7:before,
.btn-7:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: var(--button-color);
  box-shadow:
    -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2),
    4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.btn-7:before {
  height: 0%;
  width: 2px;
}

.btn-7:after {
  width: 0%;
  height: 2px;
}
.btn-7:hover {
  color: var(--button-color);
  background: transparent;
}

.btn-7:hover:before {
  height: 100%;
}

.btn-7:hover:after {
  width: 100%;
}

.btn-7 span:before,
.btn-7 span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: var(--button-color);
  box-shadow:
    -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2),
    4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.btn-7 span:before {
  width: 2px;
  height: 0%;
}

.btn-7 span:after {
  height: 2px;
  width: 0%;
}

.btn-7 span:hover:before {
  height: 100%;
}

.btn-7 span:hover:after {
  width: 100%;
}

.move-left {
  margin-right: 220px;
  transition: all 0.5s ease;
}
</style>