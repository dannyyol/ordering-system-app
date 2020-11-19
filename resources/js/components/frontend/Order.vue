<template>
  <div class="">
    <div class="product-container">
      <div class="header-image-box">
        <div class="col-md-12 header-image-bg"></div>
      </div>
    </div>
    <!-- Page Content -->
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-3 col-sm-4 col-xs-2 mb-5 small-screen-size">
          <div
            class="list-group list-group-flush overflow-auto tabs-animated"
            style=""
            id="content-1"
          >
            <sequential-entrance fromTop>
              <ul class="nav nav-tabs nav-justified" id="myTab">
                <li class="nav-item shadow-sm bg-white rounded">
                  <a
                    class="nav-link active border-warning border-2"
                    href="#rectangle-1"
                    data-toggle="tab"
                  >
                    <img src="images/Rectangle.png" alt="" srcset="" />
                  </a>
                </li>
                <li class="nav-item shadow-sm bg-white rounded">
                  <a
                    class="nav-link border-warning border-2"
                    href="#rectangle-2"
                    data-toggle="tab"
                  >
                    <img src="images/Rectangle-2.png" alt="" srcset="" />
                  </a>
                </li>
                <li class="nav-item shadow-sm bg-white rounded">
                  <!-- use the title attribute to show a tooltip with the full long name
                                    in case the tab is trucated-->
                  <a
                    class="nav-link border-warning border-2"
                    href="#rectangle-3"
                    title="Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch"
                    data-toggle="tab"
                  >
                    <img src="/images/Rectangle-3.png" alt="" srcset="" />
                  </a>
                </li>

                <li class="nav-item shadow-sm bg-white rounded">
                  <a
                    class="nav-link border-warning border-2"
                    href="#rectangle-4"
                    data-toggle="tab"
                  >
                    <img src="images/Rectangle-4.png" alt="" srcset="" />
                  </a>
                </li>

                <li class="nav-item shadow-sm bg-white rounded">
                  <a
                    class="nav-link border-warning border-2"
                    href="#rectangle-5"
                    data-toggle="tab"
                  >
                    <img src="images/Rectangle-5.png" alt="" srcset="" />
                  </a>
                </li>

                <li class="nav-item shadow-sm bg-white rounded">
                  <a
                    class="nav-link border-warning border-2"
                    href="#rectangle-6"
                    data-toggle="tab"
                  >
                    <img src="images/Rectangle-6.png" alt="" srcset="" />
                  </a>
                </li>

                <li class="nav-item shadow-sm bg-white rounded">
                  <a
                    class="nav-link border-warning border-2"
                    href="#rectangle-7"
                    data-toggle="tab"
                  >
                    <img src="images/Rectangle-3.png" alt="" srcset="" />
                  </a>
                </li>

                <li class="nav-item shadow-sm bg-white rounded">
                  <a
                    class="nav-link border-warning border-2"
                    href="#rectangle-8"
                    data-toggle="tab"
                  >
                    <img src="images/Rectangle-5.png" alt="" srcset="" />
                  </a>
                </li>

                <li class="nav-item shadow-sm bg-white rounded">
                  <a
                    class="nav-link border-warning border-2"
                    href="#rectangle-9"
                    data-toggle="tab"
                  >
                    <img src="images/Rectangle-2.png" alt="" srcset="" />
                  </a>
                </li>

                <li class="nav-item shadow-sm bg-white rounded">
                  <a
                    class="nav-link border-warning border-2"
                    href="#rectangle-10"
                    data-toggle="tab"
                  >
                    <img src="images/Rectangle-4.png" alt="" srcset="" />
                  </a>
                </li>
              </ul>
            </sequential-entrance>
          </div>
        </div>
        <!-- /.col-lg-3 -->

        <div class="col-lg-9 top-content-bar col-sm-8">
          <sequential-entrance fromBottom>
            <div class="row">
              <div class="col-md-8 heading-products">
                <h3>Desserts & Sides</h3>
              </div>
              <div class="col-md-4">
                <div class="form-group has-search search-margin">
                  <span
                    class="float-right fa fa-search form-control-feedback"
                  ></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    style="border-radius: 20px"
                  />
                </div>
              </div>
            </div>
          </sequential-entrance>

          <!-- Modal: modalQuickView -->

          <div
            class="modal fade"
            id="modalQuickView"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-6">
                      <h3>Food Name</h3>
                    </div>
                    <div class="col-md-6 d-flex justify-content-end">
                      <button
                        class="btn border-2 border-danger pl-5 pr-5" id="btn"
                        style="border-radius: 10px"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div class="row d-flex justify-content-center mt-5">
                    <div class="col-lg-4 col-md-6 mb-4">
                      <div
                        class="card h-100 main-box-content"
                        @click="addToOrder = !addToOrder"
                      >
                        <router-link to="#">
                          <img
                            class="card-img-top"
                            src="images/big-mac-main-2.png"
                            alt=""
                          />
                        </router-link>
                        <div class="card-footer border-0 bg-white">
                          <h4>Food Name</h4>
                          <h4 class="float-right text-warning">$2.00</h4>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                      <div
                        class="card h-100 main-box-content"
                        @click="addToOrder = !addToOrder"
                      >
                        <a href="#">
                          <img
                            class="card-img-top"
                            src="images/big-mac-main-3.png"
                            alt=""
                          />
                        </a>
                        <div class="card-footer border-0 bg-white">
                          <h4>Food Name</h4>
                          <h4 class="float-right text-warning">$5.00</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- modal ends here -->
          <div class="tab-content no-MarginLR small-media-screen">
            <div class="tab-pane fade show active" id="rectangle-1">
              <sequential-entrance>
                <div class="row">
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 main-box-content">
                      <a data-toggle="modal" data-target="#modalQuickView">
                        <!-- <a href="#"> -->
                        <img
                          class="card-img-top"
                          src="images/big-mac-main-1.png"
                          alt=""
                        />
                      </a>
                      <div class="card-footer border-0 bg-white">
                        <h4>Food Name</h4>
                        <h4 class="float-right text-warning">$3.00</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 main-box-content">
                      <a href="#">
                        <img
                          class="card-img-top"
                          src="images/big-mac-main-2.png"
                          alt=""
                        />
                      </a>
                      <div class="card-footer border-0 bg-white">
                        <h4>Food Name</h4>
                        <h4 class="float-right text-warning">$2.00</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 main-box-content">
                      <a href="#">
                        <img
                          class="card-img-top"
                          src="images/big-mac-main-3.png"
                          alt=""
                        />
                      </a>
                      <div class="card-footer border-0 bg-white">
                        <h4>Food Name</h4>
                        <h4 class="float-right text-warning">$5.00</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </sequential-entrance>
            </div>
            <article class="tab-pane fade show" id="rectangle-2">
              <sequential-entrance fromTop>
                <div class="row">
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 main-box-content">
                      <a data-toggle="modal" data-target="#modalQuickView">
                        <!-- <a href="#"> -->
                        <img
                          class="card-img-top"
                          src="images/big-mac-main-4.png"
                          alt=""
                        />
                      </a>
                      <div class="card-footer border-0 bg-white">
                        <h4>Food Name</h4>
                        <h4 class="float-right text-warning">$3.00</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 main-box-content">
                      <a href="#">
                        <img
                          class="card-img-top"
                          src="images/big-mac-1.png"
                          alt=""
                        />
                      </a>
                      <div class="card-footer border-0 bg-white">
                        <h4>Food Name</h4>
                        <h4 class="float-right text-warning">$2.00</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 main-box-content">
                      <a href="#">
                        <img
                          class="card-img-top"
                          src="images/big-mac-main-6.png"
                          alt=""
                        />
                      </a>
                      <div class="card-footer border-0 bg-white">
                        <h4>Food Name</h4>
                        <h4 class="float-right text-warning">$5.00</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </sequential-entrance>
            </article>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.col-lg-9 -->
      </div>
      <!-- /.row -->
    </div>

    <footer>
      <sequential-entrance delay="1000" fromBottom>
        <div class="fixed-footer">
          <div class="col-md-12 col-lg-12">
            <div class="footer-1">
              <div class="row bg-warning">
                <div class="col-md-6 col-sm-6 col-6 ordering-item-1">
                  1 items in list {{ addToOrder }}
                </div>
                <div class="col-md-6 col-sm-6 col-6 ordering-item-2">
                  <router-link to="/order-list">View order list</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-12 bg-white">
            <div class="">
              <div class="fixed-footer-button">
                <a href="" class="btn btn-lg border-3 border-danger back-hover-animation" id="btn"
                  >Cancel Order</a
                >
                <router-link
                  to="/order-list"
                  v-if="(prevRoute.path == '/order-list') && addToOrder"
                  class="btn btn-lg btn-success confirm-button" id="btn"
                  >Add to Order</router-link
                >
              </div>
            </div>
          </div>

          <!-- </div> -->
        </div>
        <!-- <div class="bg-warning fixed-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    2 items in list
                </div>
                <div class="col-md-6" style="margin:auto;text-align: right;">
                    2 items in list
                </div>
            </div>
        </div>

    <div class = "footer-2">
        <div class="bg-white">
        <div class="container" style="">
            <div class="row order-fixed-footer-button">
                <div class="col-md-12">
                    <a href="" class="btn btn-lg btn-warning">Add more</a>
                    <a href="checkout.html" class="btn  btn-lg  btn-success">Checkout</a>
                </div>
            </div>   
        </div>
    </div>
    </div>
</div> -->
      </sequential-entrance>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addToOrder: false,
      prevRoute: null,
    };
  },
  methods: {
    // changeToAddOrder() {
    //   this.addToOrder = true;
    //   console.log(this.addToOrder);
    // },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  mounted() {
    console.log(this.prevRoute.path);
    console.log(this.addToOrder);
  },
};
</script>