<template>
  <div class="">
    <div v-if="show">
      <div class="product-container">
        <div class="header-image-box">
          <div class="col-md-12 header-image-bg"></div>
        </div>
      </div>

      <!-- Page Content -->
      <div class="container-fluid mt-4">
        <div class="row">
          <div
            class="col-lg-2 col-sm-4 col-xs-2 mb-5 small-screen-size bg-info"
          >
            <div
              class="list-group list-group-flush overflow-auto tabs-animated"
              style=""
              id="content-1"
            >
              <sequential-entrance delay="1000" fromTop>
                <ul class="nav nav-tabs" id="myTab">
                  <li class="nav-item shadow-sm bg-white rounded">
                    <a
                      class="nav-link active border-warning border-2"
                      href="#rectangle-1"
                      data-toggle="tab"
                    >
                      <img src="images/Rectangle-3.png" alt="" srcset="" />
                    </a>
                  </li>
                  <li class="nav-item shadow-sm bg-white rounded">
                    <a
                      class="nav-link border-warning border-2"
                      href="#rectangle-2"
                      data-toggle="tab"
                    >
                      <img src="images/Rectangle.png" alt="" srcset="" />
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
                      <img src="/images/Rectangle-2.png" alt="" srcset="" />
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

          <div
            class="col-lg-7 top-content-bar col-sm-8 bg-danger"
            style="margin-left: -70px"
          >
            <sequential-entrance fromBottom>
              <div class="row">
                <div class="col-md-8 heading-products">
                  <h3>All Time Favourite</h3>
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
                          class="btn border-2 border-danger pl-5 pr-5"
                          style="border-radius: 10px"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                    <div
                      class="row d-flex justify-content-center mt-5 card-focus-effect"
                    >
                      <div
                        class="col-lg-4 col-md-6 col-6 mb-4 check-box"
                        @click="clickChange"
                      >
                        <div class="card h-100 main-box-content">
                          <router-link to="/cart">
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

                      <div
                        class="col-lg-4 col-md-6 col-6 mb-4"
                        @click="clickChange"
                      >
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
                  </div>
                </div>
              </div>
            </div>
            <!-- end of modal -->
            <div class="tab-content no-MarginLR small-media-screen">
              <div class="tab-pane fade show active" id="rectangle-1">
                <sequential-entrance>
                  <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4" @click="clickChange">
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

                    <div class="col-lg-4 col-md-6 mb-4" @click="clickChange">
                      <div class="card h-100 main-box-content">
                        <router-link to="/customize-food">
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

                    <div class="col-lg-4 col-md-6 mb-4" @click="clickChange">
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

          <!-- cart system -->
          <div class="bg-primary" style="width: 420px !important">
            <div class="col-lg-12 col-md-12 mb-4" @click="clickChange">
              <div
                class="card h-100 main-box-content"
                style="margin-right: -15px"
              >
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
          </div>
          <!-- /.col-lg-9 -->
        </div>
        <!-- /.row -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover {
  border-radius: 10px !important;
  border: 3px solid #e8a901 !important;
}
</style>

<script>
export default {
  data() {
    return {
      show: false,
      //   animated: false
    };
  },

  methods: {
    clickChange() {
      $(".main-box-content").click(function () {
        $(".main-box-content").removeClass("hover");
        $(this).addClass("hover");
      });
    },

    animate_tabs() {
      $(".page__style").addClass("animate_content");
      $(".animate_content").fadeOut(1000).delay(2800).fadeIn();

      setTimeout(function () {
        $(".page__style").removeClass("animate_content");
      }, 3200);
    },
  },
  mounted() {
    // setTimeout(() => this.show = true, 2000);
    this.show = true;
  },
};
</script>
