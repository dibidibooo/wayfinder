<template>
  <div>
    <!-- Modal -->
    <div
      class="modal top fade"
      id="exampleModal11"
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
                <h5 class="card-title"><b>LPP STORAGE</b></h5>
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
      id="exampleModal12"
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
                <h5 class="card-title"><b>KANZLER</b></h5>
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
      id="exampleModal13"
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
                <h5 class="card-title"><b>LPP STORAGE-2</b></h5>
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
      id="exampleModal14"
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
                <h5 class="card-title"><b>IZBUSHKA</b></h5>
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
        <!-- Modal -->
        <div
      class="modal top fade"
      id="exampleModal15"
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
                <h5 class="card-title"><b>SOLIDO</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent5(), closeModal5()"
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
      id="exampleModal16"
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
                <h5 class="card-title"><b>MANGO</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent6(), closeModal6()"
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
      id="exampleModal17"
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
                <h5 class="card-title"><b>MANGO MAN</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent7(), closeModal7()"
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
      id="exampleModal18"
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
                <h5 class="card-title"><b>RESERVED (MAN & WOMAN)(L01)</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent8(), closeModal8()"
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
      id="exampleModal19"
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
                <h5 class="card-title"><b>CHALEUR</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent9(), closeModal9()"
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
      id="exampleModal110"
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
                <h5 class="card-title"><b>RESERVED (MAN & WOMAN)(L02)</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent10(), closeModal10()"
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
      id="exampleModal111"
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
                <h5 class="card-title"><b>LC WAIKIKI (L02)</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent11(), closeModal11()"
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
      id="exampleModal112"
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
                <h5 class="card-title"><b>IDEXE</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent12(), closeModal12()"
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
      id="exampleModal113"
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
                <h5 class="card-title"><b>RESERVED KIDS</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent13(), closeModal13()"
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
      id="exampleModal114"
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
                <h5 class="card-title"><b>LPP STORAGE-1</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent14(), closeModal14()"
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
      id="exampleModal115"
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
                <h5 class="card-title"><b>LC WAIKIKI (L01)</b></h5>
                <p class="card-text">Подробное описание магазина</p>
                <button
                  @click="callMethodInParentComponent15(), closeModal15()"
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
import EventBus from '../../store/event-bus.js'
import $ from "jquery";
import store from '@/store';
export default {
  methods: {

    // Вызывает функцию с родительского компонента HomeView и вызывает функцию маршрута
    callMethodInParentComponent1() {
      EventBus.$emit("callMethodInChild", store.state.name='36');
    },
    callMethodInParentComponent2() {
      EventBus.$emit("callMethodInChild", store.state.name='37');
    },
    callMethodInParentComponent3() {
      EventBus.$emit("callMethodInChild", store.state.name='83');
    },
    callMethodInParentComponent4() {
      EventBus.$emit("callMethodInChild", store.state.name='53');
    },
    callMethodInParentComponent5() {
      EventBus.$emit("callMethodInChild", store.state.name='35');
    },
    callMethodInParentComponent6() {
      EventBus.$emit("callMethodInChild", store.state.name='35.1');
    },
    callMethodInParentComponent7() {
      EventBus.$emit("callMethodInChild", store.state.name='35.1');
    },
    callMethodInParentComponent8() {
      EventBus.$emit("callMethodInChild", store.state.name='11');
    },
    callMethodInParentComponent9() {
      EventBus.$emit("callMethodInChild", store.state.name='61');
    },
    callMethodInParentComponent10() {
      EventBus.$emit("callMethodInChild", store.state.name='66');
    },
    callMethodInParentComponent11() {
      EventBus.$emit("callMethodInChild", store.state.name='70');
    },
    callMethodInParentComponent12() {
      EventBus.$emit("callMethodInChild", store.state.name='73');
    },
    callMethodInParentComponent13() {
      EventBus.$emit("callMethodInChild", store.state.name='87');
    },
    callMethodInParentComponent14() {
      EventBus.$emit("callMethodInChild", store.state.name='75');
    },
    callMethodInParentComponent15() {
      EventBus.$emit("callMethodInChild", store.state.name='27');
    },
    
    // Закрыть модальное окно, когда нажимает на кнопку "Показать маршрут" 
    closeModal1() {
      $("#exampleModal11 .btn-close").click();
    },
    closeModal2() {
      $("#exampleModal12 .btn-close").click();
    },
    closeModal3() {
      $("#exampleModal13 .btn-close").click();
    },
    closeModal4() {
      $("#exampleModal14 .btn-close").click();
    },
    closeModal5() {
      $("#exampleModal15 .btn-close").click();
    },
    closeModal6() {
      $("#exampleModal16 .btn-close").click();
    },
    closeModal7() {
      $("#exampleModal17 .btn-close").click();
    },
    closeModal8() {
      $("#exampleModal18 .btn-close").click();
    },
    closeModal9() {
      $("#exampleModal19 .btn-close").click();
    },
    closeModal10() {
      $("#exampleModal110 .btn-close").click();
    },
    closeModal11() {
      $("#exampleModal111 .btn-close").click();
    },
    closeModal12() {
      $("#exampleModal112 .btn-close").click();
    },
    closeModal13() {
      $("#exampleModal113 .btn-close").click();
    },
    closeModal14() {
      $("#exampleModal114 .btn-close").click();
    },
    closeModal15() {
      $("#exampleModal115 .btn-close").click();
    },
  }
}
</script>