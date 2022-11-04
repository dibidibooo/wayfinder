<template>
  <div>
    <!-- Modal -->
    <div
      class="modal top fade"
      id="exampleModal21"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-mdb-backdrop="true"
      data-mdb-keyboard="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card left">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="../../../public/images/dior.webp" class="img-fluid" />
                <div
                  class="mask"
                  style="background-color: rgba(251, 251, 251, 0.15)"
                ></div>
              </div>
              <div class="card-body">
                <h5 class="card-title"><b>MOHITO</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent1(), closeModal1()"
                  id="closeButton"
                  type="button"
                  class="btn text-white"
                  style="background-color: #b91e67"
                >
                  Указать маршрут <i class="fas fa-angle-double-right"></i>
                </button>
              </div>
              <div class="card-footer">График работы: с 10:00 - 22:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal top fade"
      id="exampleModal22"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-mdb-backdrop="true"
      data-mdb-keyboard="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card left">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="../../../public/images/dior.webp" class="img-fluid" />
                <div
                  class="mask"
                  style="background-color: rgba(251, 251, 251, 0.15)"
                ></div>
              </div>
              <div class="card-body">
                <h5 class="card-title"><b>OWN STORY</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent2(), closeModal2()"
                  id="closeButton"
                  type="button"
                  class="btn text-white"
                  style="background-color: #b91e67"
                >
                  Указать маршрут <i class="fas fa-angle-double-right"></i>
                </button>
              </div>
              <div class="card-footer">График работы: с 10:00 - 22:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal top fade"
      id="exampleModal23"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-mdb-backdrop="true"
      data-mdb-keyboard="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card left">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="../../../public/images/dior.webp" class="img-fluid" />
                <div
                  class="mask"
                  style="background-color: rgba(251, 251, 251, 0.15)"
                ></div>
              </div>
              <div class="card-body">
                <h5 class="card-title"><b>DETSKIY MIR</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent3(), closeModal3()"
                  id="closeButton"
                  type="button"
                  class="btn text-white"
                  style="background-color: #b91e67"
                >
                  Указать маршрут <i class="fas fa-angle-double-right"></i>
                </button>
              </div>
              <div class="card-footer">График работы: с 10:00 - 22:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal top fade"
      id="exampleModal24"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-mdb-backdrop="true"
      data-mdb-keyboard="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card left">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="../../../public/images/dior.webp" class="img-fluid" />
                <div
                  class="mask"
                  style="background-color: rgba(251, 251, 251, 0.15)"
                ></div>
              </div>
              <div class="card-body">
                <h5 class="card-title"><b>GLOBAL NOMADS</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent4(), closeModal4()"
                  id="closeButton"
                  type="button"
                  class="btn text-white"
                  style="background-color: #b91e67"
                >
                  Указать маршрут <i class="fas fa-angle-double-right"></i>
                </button>
              </div>
              <div class="card-footer">График работы: с 10:00 - 22:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../../store/event-bus.js";
import $ from "jquery";
import store from "@/store";
export default {
  methods: {

    // Вызывает функцию с родительского компонента HomeView и вызывает функцию маршрута
    callMethodInParentComponent1() {
      EventBus.$emit("callMethodInChild", (store.state.name = "38"));
    },
    callMethodInParentComponent2() {
      EventBus.$emit("callMethodInChild", (store.state.name = "39"));
    },
    callMethodInParentComponent3() {
      EventBus.$emit("callMethodInChild", (store.state.name = "76"));
    },
    callMethodInParentComponent4() {
      EventBus.$emit("callMethodInChild", (store.state.name = "72"));
    },

    closeModal1() {
      $("#exampleModal21 .btn-close").click();
    },
    closeModal2() {
      $("#exampleModal22 .btn-close").click();
    },
    closeModal3() {
      $("#exampleModal23 .btn-close").click();
    },
    closeModal4() {
      $("#exampleModal24 .btn-close").click();
    },
  },
};
</script>