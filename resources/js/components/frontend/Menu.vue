<template>
  <div class="">
    <div v-if="show">
      <div class="product-container">
        <div class="header-image-box">
          <div class="col-md-12 header-image-bg"></div>
        </div>
      </div>

      <!-- Page Content -->
      <div class="container" style="">
        <div class="row">
          <div
            class="col-xl-2 col-lg-3 col-sm-4 col-5 bg"
            style="height: 600px"
          >
            <div
              class="list-group list-group-flush overflow-auto tabs-animated"
              style=""
              id="content-1"
            >
              <sequential-entrance fromTop>
                <ul class="nav nav-tabs nav-justified" id="myTab">
                  <li class="nav-item shadow-sm bg-white rounded" style="" @click="changeBurgerName">
                    <a
                      class="nav-link active border-warning border-2"
                      href="#rectangle-1"
                      data-toggle="tab"
                    >
                      <img src="images/Rectangle-10.png" alt="" srcset="" />
                      <p class="text-dark">Burger </p>
                    </a>
                  </li>
                  <li class="nav-item shadow-sm bg-white rounded" @click="changeDessertName">
                    <a
                      class="nav-link border-warning border-2"
                      href="#rectangle-2"
                      data-toggle="tab"
                    >
                      <img src="images/Rectangle-4.png" alt="" srcset="" />
                      <p class="text-dark">Desserts & Sides</p>
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
                      <p class="text-dark">Name</p>
                    </a>
                  </li>

                  <li class="nav-item shadow-sm bg-white rounded">
                    <a
                      class="nav-link border-warning border-2"
                      href="#rectangle-4"
                      data-toggle="tab"
                    >
                      <img src="images/Rectangle-3.png" alt="" srcset="" />
                      <p class="text-dark">Name</p>
                    </a>
                  </li>

                  <li class="nav-item shadow-sm bg-white rounded">
                    <a
                      class="nav-link border-warning border-2"
                      href="#rectangle-5"
                      data-toggle="tab"
                    >
                      <img src="images/Rectangle-5.png" alt="" srcset="" />
                      <p class="text-dark">Name</p>
                    </a>
                  </li>

                  <li class="nav-item shadow-sm bg-white rounded">
                    <a
                      class="nav-link border-warning border-2"
                      href="#rectangle-6"
                      data-toggle="tab"
                    >
                      <img src="images/Rectangle-6.png" alt="" srcset="" />
                      <p class="text-dark">Name</p>
                    </a>
                  </li>

                  <li class="nav-item shadow-sm bg-white rounded">
                    <a
                      class="nav-link border-warning border-2"
                      href="#rectangle-7"
                      data-toggle="tab"
                    >
                      <img src="images/Rectangle-3.png" alt="" srcset="" />
                      <p class="text-dark">Name</p>
                    </a>
                  </li>

                  <li class="nav-item shadow-sm bg-white rounded">
                    <a
                      class="nav-link border-warning border-2"
                      href="#rectangle-8"
                      data-toggle="tab"
                    >
                      <img src="images/Rectangle-5.png" alt="" srcset="" />
                      <p class="text-dark">Name</p>
                    </a>
                  </li>

                  <li class="nav-item shadow-sm bg-white rounded">
                    <a
                      class="nav-link border-warning border-2"
                      href="#rectangle-9"
                      data-toggle="tab"
                    >
                      <img src="images/Rectangle-2.png" alt="" srcset="" />
                      <p class="text-dark">Name</p>
                    </a>
                  </li>

                  <li class="nav-item shadow-sm bg-white rounded">
                    <a
                      class="nav-link border-warning border-2"
                      href="#rectangle-10"
                      data-toggle="tab"
                    >
                      <img src="images/Rectangle-4.png" alt="" srcset="" />
                      <p class="text-dark">Name</p>
                    </a>
                  </li>
                </ul>
              </sequential-entrance>
            </div>
          </div>

          <!-- /.col-lg-3 -->

          <div class="col-xl-10 col-lg-9 col-sm-8 col-7 mb-5">
            <div class="row">
              <div class="col-sm-12 col-md-7 col-lg-7 heading-products">
                <h3 v-if="show_burger">{{ title_1  }}</h3>
                <h3 v-if="show_dessert">{{ title_2  }}</h3>
              </div>
              <div class="col-sm-12 col-md-5 col-lg-5">
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
                        @click="clickChange()"
                      >
                        <div class="card h-100 main-box-content">
                          <router-link to="/products">
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
                <sequential-entrance fromRight>
                  
                  <div class="row ">
                      <div
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-2"
                        v-for="item in foods"
                        :key="item.id"
                      >
                        <div
                        @click="clickChange()"
                          class="card h-100 main-box-content"
                        >
                        <router-link to="/products">
                          <a data-toggle="modal--0" data-target="#modalQuickView">
                            <!-- <a href="#"> -->
                            <img
                              class="card-img-top"
                              :src="'images/'+item.image"
                              alt=""
                            />
                          </a>
                            </router-link>

                          <div class="card-footer border-0 bg-white items-name-price">
                            <h4>{{ item.name }}</h4>
                          </div>
                        </div>
                        <div
                          class="buybox"
                          v-if="currentFood"
                          :style="bgcss(currentFood.image)"
                        ></div>
                      </div>
                  </div>
                </sequential-entrance>
              </div>
              <article class="tab-pane fade show" id="rectangle-2">
                <sequential-entrance fromRight>
                  <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-2 col-margin">
                      <div class="card h-100 main-box-content">
                        <router-link to="/products">
                          <a data-toggle="modal--0" data-target="#modalQuickView">
                            <!-- <a href="#"> -->
                            <img
                              class="card-img-top"
                              src="images/big-mac_1.png"
                              alt=""
                            />
                          </a>
                        </router-link>
                        <div class="card-footer border-0 bg-white">
                          <h4>Food Name</h4>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-2 col-margin">
                      <div class="card h-100 main-box-content">
                        <router-link to="/products">
                            <a href="#">
                              <img
                                class="card-img-top"
                                src="images/big-mac_2.png"
                                alt=""
                              />
                            </a>
                        </router-link>
                        <div class="card-footer border-0 bg-white">
                          <h4>Food Name</h4>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-2 col-margin">
                      <div class="card h-100 main-box-content">
                        <router-link to="/products">
                          <a href="#">
                          <img
                              class="card-img-top"
                              src="images/big-mac_3.png"
                              alt=""
                            />
                          </a>
                        </router-link>
                        <div class="card-footer border-0 bg-white">
                          <h4>Food Name</h4>
                        </div>
                      </div>
                    </div>


                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-2 col-margin">
                      <div class="card h-100 main-box-content">
                        <router-link to="/products">
                          <a href="#">
                          <img
                              class="card-img-top"
                              src="images/big-mac_4.png"
                              alt=""
                            />
                          </a>
                        </router-link>
                        <div class="card-footer border-0 bg-white">
                          <h4>Food Name</h4>
                        </div>
                      </div>
                    </div>


                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-2 col-margin">
                      <div class="card h-100 main-box-content">
                        <router-link to="/products">
                          <a href="#">
                          <img
                              class="card-img-top"
                              src="images/big-mac_5.png"
                              alt=""
                            />
                          </a>
                        </router-link>
                        <div class="card-footer border-0 bg-white">
                          <h4>Food Name</h4>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-2 col-margin">
                      <div class="card h-100 main-box-content">
                        <router-link to="/products">
                          <a href="#">
                          <img
                              class="card-img-top"
                              src="images/big-mac_6.png"
                              alt=""
                            />
                          </a>
                        </router-link>
                        <div class="card-footer border-0 bg-white">
                          <h4>Food Name</h4>
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
          <!-- cart here -->
        </div>
        <br /><br /><br /><br />

        
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
import { TweenMax, Power1 } from "gsap";
// import $ from "jquery";

export default {
  data() {
    return {
      show: false,
      show_burger: true,
      show_dessert: false,
      title_1:'Burger',
      title_2:'Desserts and Sides',

      foods: [
        {
          id: 1,
          name: "McChicken®",
          price: 1990,
          image: "big-mac-1.png",
        },

        {
          id: 2,
          name: "Cheeseburger",
          price: 1199,
          image: "big-mac.png",
        },

        {
          id: 3,

          name: "Bubur Ayam McD™",
          price: 625,
          image: "big-mac-2.png",
        },

        {
          id: 4,
          name: "Quarter Pounder",
          price: 14299,
          image: "big-mac-main-1.png",
        },

        {
          id: 5,
          name: "Filet-O-Fish™",
          price: 1499,
          image: "big-mac-main-4.png",
        },
      ],

      currentFood: null,
      cart: [],
      //   animated: false
    };
  },

  methods: {
    clickChange(){
      $(".main-box-content").click(function () {
        $(".main-box-content").removeClass("hover");
        $(this).addClass("hover");
      });
    },

  changeBurgerName(){
    this.show_burger = true
    this.show_dessert = false
    console.log('Burger');
   return this.title_1
  },
  changeDessertName(){
    this.show_burger = false
        this.show_dessert = true
  console.log('Deserts and Sides');
   return this.title_2 
  }

  


    // animate_tabs() {
    //   $(".page__style").addClass("animate_content");
    //   $(".animate_content").fadeOut(1000).delay(2800).fadeIn();

    //   setTimeout(function () {
    //     $(".page__style").removeClass("animate_content");
    //   }, 3200);
    // },

    // cart flying

    
  },
  mounted() {
    // document.querySelector("#cart-content-box").style.display="none"
    this.show = true;
    // this.cartPopup;
  },
};
</script>
