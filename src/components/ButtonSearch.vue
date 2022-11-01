<template>
  <div>
    <div class="navbar-wrapper">
      <div class="navbar-big navbar-content">
        <div class="navbar-big-wrapper modules-quotes-bg">
          <a class="modules-private-logo">
            <div class="modules-private-name">Abu Dhabi Plaza</div>
          </a>
          <div class="modules-links-wrapper modules-big-links">
            <div
              class="modules-link-wrapper"
              id="#"
              style="position: absolute; margin-right: 90em"
            >
              <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                <div class="modules-link-content">
                  <img
                    src="images/Category/search.png"
                    width="160"
                    height="80"
                    alt="lorem"
                  />
                </div>
                <div class="modules-link-text"></div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/info.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ИНФОРМАЦИЯ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/foodcourt.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ФУДКОРТ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/atm.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">БАНКОМАТЫ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/toilet.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ТУАЛЕТЫ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/administrator.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">РЕСЕПШН</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/wardrobe.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ГАРДЕРОБ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/elevator.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ЛИФТ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/stairs.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ЛЕСТНИЦА</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/escalator.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ЭСКАЛАТОР</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/parking_car.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ПАРКИНГ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/parking_bycicle.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ВЕЛОПАРКОВКА</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/parkomat.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">ПАРКОМАТ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/babyroom.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">КОМНАТА МАТЕРИ</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/medcenter.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">МЕД. ЦЕНТР</div>
                </div>
              </a>
            </div>
            <div class="modules-link-wrapper" id="#">
              <a href="#">
                <div class="modules-link-content">
                  <img
                    src="images/Category/emergency.png"
                    width="65"
                    height="65"
                    alt="lorem"
                  />
                  <div class="modules-link-text">АВАРИЙНЫЙ ВЫХОД</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal bottom fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-mdb-backdrop="static"
      data-mdb-keyboard="true"
    >
      <div
        class="
          modal-dialog modal-xl modal-frame modal-bottom modal-dialog-centered
        "
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <b>Выберите категрию</b>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="tab1"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab12"
                  type="button"
                  role="tab"
                  aria-controls="tab13"
                  aria-selected="true"
                >
                  {{ category_name1 }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab21"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab22"
                  type="button"
                  role="tab"
                  aria-controls="tab21"
                  aria-selected="false"
                >
                  {{ category_name2 }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab31"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab32"
                  type="button"
                  role="tab"
                  aria-controls="tab33"
                  aria-selected="false"
                >
                  {{ category_name3 }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab41"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab42"
                  type="button"
                  role="tab"
                  aria-controls="tab43"
                  aria-selected="false"
                >
                  {{ category_name4 }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab51"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab52"
                  type="button"
                  role="tab"
                  aria-controls="tab53"
                  aria-selected="false"
                >
                  {{ category_name5 }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab61"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab62"
                  type="button"
                  role="tab"
                  aria-controls="tab63"
                  aria-selected="false"
                >
                  {{ category_name6 }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab71"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab72"
                  type="button"
                  role="tab"
                  aria-controls="tab73"
                  aria-selected="false"
                >
                  {{ category_name7 }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab81"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab82"
                  type="button"
                  role="tab"
                  aria-controls="tab83"
                  aria-selected="false"
                >
                  {{ category_name8 }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab91"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab92"
                  type="button"
                  role="tab"
                  aria-controls="tab93"
                  aria-selected="false"
                >
                  {{ category_name9 }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab101"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab102"
                  type="button"
                  role="tab"
                  aria-controls="tab103"
                  aria-selected="false"
                >
                  {{ category_name10 }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab111"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab112"
                  type="button"
                  role="tab"
                  aria-controls="tab113"
                  aria-selected="false"
                >
                  {{ category_name11 }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab121"
                  data-mdb-toggle="tab"
                  data-mdb-target="#tab122"
                  type="button"
                  role="tab"
                  aria-controls="tab123"
                  aria-selected="false"
                >
                  {{ category_name12 }}
                </button>
              </li>
            </ul>

            <div class="tab-content" id="myTabContent0">
              <div
                class="tab-pane fade show active"
                id="tab12"
                role="tabpanel"
                aria-labelledby="tab11"
              >
                <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store1[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store1[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store1[2].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store1[3].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store1[4].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store1[5].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store1[6].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab22"
                role="tabpanel"
                aria-labelledby="tab21"
              >
              <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store2[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store2[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store2[2].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store2[3].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab32"
                role="tabpanel"
                aria-labelledby="tab31"
              >
              <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store3[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store3[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store3[2].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store3[3].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store3[4].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store3[5].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store3[6].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab42"
                role="tabpanel"
                aria-labelledby="tab41"
              >
              <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store4[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store4[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store4[2].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store4[3].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store4[4].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store4[5].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store4[6].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store4[7].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab52"
                role="tabpanel"
                aria-labelledby="tab41"
              >
              <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store5[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store5[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store5[2].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab62"
                role="tabpanel"
                aria-labelledby="tab61"
              >
              <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store6[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store6[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store6[2].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store6[3].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store6[4].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store6[5].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store6[6].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab72"
                role="tabpanel"
                aria-labelledby="tab71"
              >
              <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[2].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[3].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[4].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[5].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[6].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[7].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[8].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[9].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[10].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[11].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[12].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[13].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store7[14].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab82"
                role="tabpanel"
                aria-labelledby="tab81"
              >
              <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store8[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store8[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store8[2].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store8[3].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store8[4].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab92"
                role="tabpanel"
                aria-labelledby="tab91"
              >
              <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store9[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store9[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab102"
                role="tabpanel"
                aria-labelledby="tab101"
              >
              <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store10[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store10[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab112"
                role="tabpanel"
                aria-labelledby="tab111"
              >
              <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store11[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store11[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab122"
                role="tabpanel"
                aria-labelledby="tab121"
              >
              <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store12[0].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-3">
                    <a data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 45px; height: 45px"
                              class="rounded-circle"
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-1">{{store12[1].title}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-mdb-dismiss="modal"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="category1modal1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="open-modal1" class="modal-window">
      <div>
        <a href="#" title="Close" class="modal-close"><b>X</b></a>
        <h1 class="header_text_modal"><b>Please select the type of shop</b></h1>

        <div class="modal-area">




          <input id="opentab1" type="radio" name="modaltabs" checked="checked" />
          <label for="opentab1">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu1.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name1 }}</div>
            </div>
          </label>



          <input id="opentab2" type="radio" name="modaltabs" />
          <label for="opentab2">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu2.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name2 }}</div>
            </div>
          </label>



          <input id="opentab3" type="radio" name="modaltabs" />
          <label for="opentab3">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu3.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name3 }}</div>
            </div>
          </label>



          <input id="opentab4" type="radio" name="modaltabs" />
          <label for="opentab4">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu4.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name4 }}</div>
            </div>
          </label>

          
          
          <input id="opentab5" type="radio" name="modaltabs" />
          <label for="opentab5">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu5.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name5 }}</div>
            </div>
          </label>



          <input id="opentab6" type="radio" name="modaltabs" />
          <label for="opentab6">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu6.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name6 }}</div>
            </div>
          </label>
          
          
          
          <input id="opentab7" type="radio" name="modaltabs" />
          <label for="opentab7">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu7.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name7 }}</div>
            </div>
          </label>
          
          
          
          <input id="opentab8" type="radio" name="modaltabs" />
          <label for="opentab8">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu8.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name8 }}</div>
            </div>
          </label>
          
          
          
          <input id="opentab9" type="radio" name="modaltabs" />
          <label for="opentab9">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu9.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name9 }}</div>
            </div>
          </label>
          
          
          
          <input id="opentab10" type="radio" name="modaltabs" />
          <label for="opentab10">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu10.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name10 }}</div>
            </div>
          </label>
          
          
          
          <input id="opentab11" type="radio" name="modaltabs" />
          <label for="opentab11">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu11.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name11 }}</div>
            </div>
          </label>
          
          
          
          <input id="opentab12" type="radio" name="modaltabs" />
          <label for="opentab12">
            <div class="modal-modules-link-content">
              <img
                src="images/Category/menu12.png"
                width="110"
                height="80"
                alt="lorem"
              />
              <div class="modal-modules-link-text">{{ category_name12 }}</div>
            </div>
          </label>


          <ul class="tab-list">
            <li class="modal-tab tab1">
              <button>cscdcmsdckmd</button>
              <button>cscdcmsdckmd</button>
              <button>cscdcmsdckmd</button>
              <button>cscdcmsdckmd</button>
              <button>cscdcmsdckmd</button>
            </li>
            <li class="modal-tab tab2"><p>Tab 2 Content</p></li>
            <li class="modal-tab tab3"><p>Tab 3 Content</p></li>
            <li class="modal-tab tab4"><p>Tab 4 Content</p></li>
            <li class="modal-tab tab5"><p>Tab 5 Content</p></li>
            <li class="modal-tab tab6"><p>Tab 6 Content</p></li>
            <li class="modal-tab tab7"><p>Tab 7 Content</p></li>
            <li class="modal-tab tab8"><p>Tab 8 Content</p></li>
            <li class="modal-tab tab9"><p>Tab 9 Content</p></li>
            <li class="modal-tab tab10"><p>Tab 10 Content</p></li>
            <li class="modal-tab tab11"><p>Tab 11 Content</p></li>
            <li class="modal-tab tab12"><p>Tab 12 Content</p></li>
          </ul>
        </div>

        

        









      </div>
    </div> -->
  </div>
</template>


<script>
import axios from "axios";
export default {
  data: () => ({
    category_name1: null,
    category_name2: null,
    category_name3: null,
    category_name4: null,
    category_name5: null,
    category_name6: null,
    category_name7: null,
    category_name8: null,
    category_name9: null,
    category_name10: null,
    category_name11: null,
    category_name12: null,
    category1: null,
    category2: null,
    category3: null,
    category4: null,
    category5: null,
    category6: null,
    category7: null,
    category8: null,
    category9: null,
    category10: null,
    category11: null,
    category12: null,
    store1: [],
    store2: [],
    store3: [],
    store4: [],
    store5: [],
    store6: [],
    store7: [],
    store8: [],
    store9: [],
    store10: [],
    store11: [],
    store12: [],
    errors: [],
  }),

  mounted() {
    this.getStores();
  },
  methods: {
    getStores() {
      axios
        .get("http://Localhost:8100/api/categories")
        .then((response) => {
          this.category_name1 = response.data[0].title;
          this.category_name2 = response.data[1].title;
          this.category_name3 = response.data[2].title;
          this.category_name4 = response.data[3].title;
          this.category_name5 = response.data[4].title;
          this.category_name6 = response.data[5].title;
          this.category_name7 = response.data[6].title;
          this.category_name8 = response.data[7].title;
          this.category_name9 = response.data[8].title;
          this.category_name10 = response.data[9].title;
          this.category_name11 = response.data[10].title;
          this.category_name12 = response.data[11].title;

          this.category1 = response.data[0].stores;
          for (let i in this.category1) {
            this.store1.push(this.category1[i]);
            // console.log(this.store)
          }
          console.log("Category 1", this.category1);

          this.category2 = response.data[1].stores;
          for (let i in this.category2) {
            this.store2.push(this.category2[i]);
            // console.log(this.store)
          }
          console.log("Category 2", this.category2);

          this.category3 = response.data[2].stores;
          for (let i in this.category3) {
            this.store3.push(this.category3[i]);
            // console.log(this.store)
          }
          console.log("Category 3", this.category3);

          this.category4 = response.data[3].stores;
          for (let i in this.category4) {
            this.store4.push(this.category4[i]);
            // console.log(this.store)
          }
          console.log("Category 4", this.category4);

          this.category5 = response.data[4].stores;
          for (let i in this.category5) {
            this.store5.push(this.category5[i]);
            // console.log(this.store)
          }
          console.log("Category 5", this.category5);

          this.category6 = response.data[5].stores;
          for (let i in this.category6) {
            this.store6.push(this.category6[i]);
            // console.log(this.store)
          }
          console.log("Category 6", this.category6);

          this.category7 = response.data[6].stores;
          for (let i in this.category7) {
            this.store7.push(this.category7[i]);
            // console.log(this.store)
          }
          console.log("Category 7", this.category7);

          this.category8 = response.data[7].stores;
          for (let i in this.category8) {
            this.store8.push(this.category8[i]);
            // console.log(this.store)
          }
          console.log("Category 8", this.category8);

          this.category9 = response.data[8].stores;
          for (let i in this.category9) {
            this.store9.push(this.category9[i]);
            // console.log(this.store)
          }
          console.log("Category 9", this.category9);

          this.category10 = response.data[9].stores;
          for (let i in this.category10) {
            this.store10.push(this.category10[i]);
            // console.log(this.store)
          }
          console.log("Category 10", this.category10);

          this.category11 = response.data[10].stores;
          for (let i in this.category11) {
            this.store11.push(this.category11[i]);
            // console.log(this.store)
          }
          console.log("Category 11", this.category11);

          this.category12 = response.data[11].stores;
          for (let i in this.category12) {
            this.store12.push(this.category12[i]);
            // console.log(this.store)
          }
          console.log("Category 12", this.category12);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>


<style scoped>

.modal-content {
  /* background: #1d1d1d;
  border-style: ridge;
  border-width: 5px; */
  min-height: 48em;
}
/* _________________________________ NAVBAR _________________________________ */
.navbar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
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
  background: #f1f1f1;
  filter: drop-shadow(0 0 16px #787878);
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
  color: #b91e67;
}

.modules-big-links {
  width: 100%;
  /* margin-right: 50em; */
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
    width: 85px;
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
  padding: 1em;
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
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 700;
    font-size: 28px;
    padding: 0 1em;
  }
}

@media (min-width: 900px) {
  .modules-link-text {
    color: #000000;
    font-size: 10px;
    padding: 1em 0 0;
  }
}

@media (min-width: 600px) {
  .modal-modules-link-text {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 700;
    font-size: 28px;
    padding: 0 1em;
  }
}

@media (min-width: 900px) {
  .modal-modules-link-text {
    color: #ffffff;
    font-size: 10px;
    padding: 1em 0 0;
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
  color: #b91e67;
}

.modules-nav-big-button .modules-link-icon {
  font-size: 48px;
}

.spacer {
  height: 800px;
}
/* _________________________________ END OF THE NAVBAR _________________________________ */

/* _________________________________ CUSTOM STYLE _________________________________ */

.header_text_modal {
  color: #ffffff;
}

.modal-close {
  position: absolute;
  right: 0;
  top: 0;
  width: 70px;
  line-height: 50px;
  float: right;
  text-decoration: none;
  padding: 22px 22px;
  color: #fff;
  font-size: 80%;
  font-weight: 800;
  transition: all 0.5s ease-in-out;
  z-index: +1;
  background: rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 0 4px 0 0;
}
.modal-close:hover {
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}

#opentab1:checked ~ .tab-list .tab1,
#opentab2:checked ~ .tab-list .tab2,
#opentab3:checked ~ .tab-list .tab3,
#opentab4:checked ~ .tab-list .tab4,
#opentab5:checked ~ .tab-list .tab5,
#opentab6:checked ~ .tab-list .tab6,
#opentab7:checked ~ .tab-list .tab7,
#opentab8:checked ~ .tab-list .tab8,
#opentab9:checked ~ .tab-list .tab9,
#opentab10:checked ~ .tab-list .tab10,
#opentab11:checked ~ .tab-list .tab11,
#opentab12:checked ~ .tab-list .tab12 {
  transform: translateX(0%);
  opacity: 1;
}
/* _________________________________ END OF THE CUSTOM STYLE _________________________________ */

/* ------------------------MODAL-------------------------- */

/* .modal-window {
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
  max-height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background: #1d1d1d;
}
.modal-window header {
  font-weight: bold;
}
.modal-window h1 {
  font-size: 150%;
  margin: 0 0 15px;
}

.modal-window > div {
  border-style: ridge;
  border-width: 5px;
}
.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
} */

/* ------------------------END OF THE MODAL-------------------------- */

/* 
a.modal-open {
  display: block;
  padding: 20px;
  color: #424242;
  font-weight: bold;
  margin: 50px auto;
  width: 200px;
  background: #e0e0e0;
  border-radius: 2px;
  text-align: center;
  text-decoration: none;
}
.modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  bottom: 0px;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  z-index: 9999;
}
.modal:target {
  opacity: 1;
  transition: all 0.5s ease-in-out;
  z-index: +1;
}
.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  background: #fff;
  border-radius: 4px;
  transform: translate(-50%, -200%);
  transition: all 0.5s ease-in-out;
  perspective: 1000;
  outline: 1px solid transparent;
  opacity: 0;
}
.modal:target .modal-content {
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
  transition-delay: 0.5s;
  z-index: 9999;
  opacity: 1;
}
.modal-content h3 {
  padding: 20px;
  display: block;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  text-transform: uppercase;
  background: rgba(2, 162, 239, 1);
  color: #fff;
  border-radius: 4px 4px 0 0;
} */

/* 
.modal-area {
  padding: 0px;
}
.modal-area input[type="radio"] {
  display: none;
} 
.modal-area label {
  float: left;
  display: block;
  padding: 10px 10px;
  font-weight: 700;
  cursor: pointer;
  z-index: +2;
  background:transparent;
  color: #fff;
  transition: all 0.5s ease-in-out;
}
.modal-area input[type="radio"]:checked + label {
  background: rgb(217, 8, 81);
  color: #424242;
}
.modal-tab {
  color: #b91e67;
  display: inline-block;
  width: 100%;
  transform: translateX(-150%);
  transition: all 300ms cubic-bezier(0, 0, 0.4, 1);
} */
</style>