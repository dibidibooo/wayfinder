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
                <h5 class="card-title">Название магазина [2.1]</h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="add_row_by_name('38'), closeModal1()"
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
                <h5 class="card-title">Название магазина [2.2]</h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="add_row_by_name('39'), closeModal2()"
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
                <h5 class="card-title">Название магазина [2.3]</h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="add_row_by_name('76'), closeModal3()"
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
                <h5 class="card-title">Название магазина [2.4]</h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="add_row_by_name('72'), closeModal4()"
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
import $ from "jquery";
export default {
  methods: {
    closeModal1() {
      //  $("#exampleModal .close").click()
      $("#exampleModal21 .btn-close").click();
    },
    closeModal2() {
      //  $("#exampleModal .close").click()
      $("#exampleModal22 .btn-close").click();
    },
    closeModal3() {
      //  $("#exampleModal .close").click()
      $("#exampleModal23 .btn-close").click();
    },
    closeModal4() {
      //  $("#exampleModal .close").click()
      $("#exampleModal24 .btn-close").click();
    }
  }
}
</script>