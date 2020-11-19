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
            class="col-xl-2 col-lg-3 col-sm-4 col-4 bg"
            style="height: 600px"
          >
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

          <div class="col-xl-10 col-lg-9 col-sm-8 col-8 mb-5">
            <div class="row">
              <div class="col-sm-12 col-md-7 col-lg-7 heading-products">
                <h3>All Time Favourite</h3>
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
                <sequential-entrance fromRight>
                  <div class="row ">
                      <div
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mb-2 col-margin"
                        v-for="item in foods"
                        :key="item.id"
                      >
                        <div
                        @click="addCart(item, $event)"
                          class="card h-100 main-box-content"
                        >
                          <a data-toggle="modal-00-" data-target="#modalQuickView">
                            <!-- <a href="#"> -->
                            <img
                              class="card-img-top"
                              :src="'images/'+item.image"
                              alt=""
                            />
                          </a>
                          <div class="card-footer border-0 bg-white items-name-price">
                            <h4>{{ item.name }}</h4>
                            <h4 class="float-right text-warning">${{ item.price}}</h4>
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

          <!-- cart here -->
        </div>
        <br /><br /><br /><br />

        <div class="d-lg-block" @wheel.prevent="wheel($event)">
          <sequential-entrance fromBottom>
            <!-- fixed cart button -->
            <button class="chatbox-open" @click="cartPopup">
              <!-- <i class="fa fa-comment fa-2x" aria-hidden="true" @click="cartPopup"></i> -->
              <i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
              <span class="btn btn-danger rounded-circle align-center" style="font-size:12px;position:absolute;width:30px;height:30px;top:30px;left:-10px;content:'2'">2</span>
            </button>
          </sequential-entrance>

          <!-- <button class="add" @click="addCart(movie,$event)">+ Add To My Cart</button> -->

          <button class="chatbox-close btn-danger">
            <i class="fa fa-close fa-2x" aria-hidden="true"></i>
          </button>
            <section
              class="chatbox-popup"
              style="position: fixed; bottom: 100px;"
            >
            <div class="card" style="">
                <div class="card-header cart-header bg-warning">
              Items in Cart
                </div>
                <table class="table table-inverse table-responsive">
                    <tbody>
                      <tr>
                        <td scope="row">
                           <div class="card">
                              <img
                                  src="images/Rectangle-6.png"
                                  alt=""
                                  srcset=""
                                  width=""
                                  class=""
                              />
                            </div>
                        </td>

                        <td class="align-middle">Quarter Pounder with Cheese</td>
                        <td class="align-middle">
                          <div class="row">
                              <button class="btn btn-warning">-</button>
                              <input
                              type="text"
                              class="form-control ml-1 mr-1"
                              name=""
                              id=""
                              aria-describedby="helpId"
                              placeholder=""
                              style="max-width: 50px"
                              />
                              <button class="btn btn-warning">+</button>
                          </div>
                        </td>
                      <!-- </tr> -->
                      <!-- <tr> -->
                        <td class=" align-middle">

                          <div class="btn-group">
                            <button title="Delete" class="btn btn-sm btn-danger">
                            <i class="fa fa-trash-o" aria-hidden="true"></i> Remove
                            </button>
                            <router-link to="/customize-food"
                            title="Customize"
                            class="btn btn-sm btn-success pr-2"
                            >
                            <i class="fa fa-edit" aria-hidden="true"></i> Customize
                            </router-link>
                          </div>
                        </td>
                        
                      </tr>

                      <tr>
                        <td scope="row">
                           <div class="card">
                              <img
                                  src="images/Rectangle-6.png"
                                  alt=""
                                  srcset=""
                                  width=""
                                  class=""
                              />
                            </div>
                        </td>

                        <td class="align-middle">Quarter Pounder with Cheese</td>
                        <td class="align-middle">
                          <div class="row">
                              <button class="btn btn-warning">-</button>
                              <input
                              type="text"
                              class="form-control ml-1 mr-1"
                              name=""
                              id=""
                              aria-describedby="helpId"
                              placeholder=""
                              style="max-width: 50px"
                              />
                              <button class="btn btn-warning">+</button>
                          </div>
                        </td>
                      <!-- </tr> -->
                      <!-- <tr> -->
                        <td class=" align-middle">

                          <div class="btn-group">
                            <button title="Delete" class="btn btn-sm btn-danger">
                            <i class="fa fa-trash-o" aria-hidden="true"></i> Remove
                            </button>
                            <router-link to="/customize-food"
                            title="Customize"
                            class="btn btn-sm btn-success pr-2"
                            >
                            <i class="fa fa-edit" aria-hidden="true"></i> Customize
                            </router-link>
                          </div>
                        </td>
                        
                      </tr>
                    </tbody>
                </table>

              <div class="card-footer bg-white">
                
                
                <div class="fixed-footer-button">
                <a
                  href="#"
                  class="btn btn-lg border-3 border-danger back-hover-animation"
                  id="btn"
                  >Clear Cart</a
                >
                <router-link
                to="/checkout"
                  @click="done"
                  class="btn btn-lg btn-success confirm-button order-button-cart-size"
                  id="btn"
                  >Checkout</router-link
                >
                </div>

              </div>
            </div>
            </section>

          <!-- end of cart button -->
        </div>
        <!-- /.row -->
      </div>
    </div>
  </div>
</template>

<style scoped>

.cart-header{
  background-color:rgba(248, 199, 64, 0.966);
}
/* flying  image box*/
.buybox {
  width: 120px;
  height: 150px;
  border: solid 2px #e8a901;
  border-radius: 10px;
  background-color: #fff;
  position: fixed;
  right: 0px;
  top: 100%;
  opacity: 0;
}
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
      showCart: false,
      animated: false,
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
          name: "Quarter Pounder with Cheese",
          price: 14299,
          image: "big-mac-3.png",
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
    noCart() {
      var element = document.getElementById("cart-content-box");
      element.classList.remove("cart-content-box");
    },
    cartPopup() {
      const chatbox = jQuery.noConflict();

      chatbox(() => {
        chatbox(".chatbox-popup, .chatbox-close").fadeIn();

        chatbox(".chatbox-close").click(() =>
          chatbox(".chatbox-popup, .chatbox-close").fadeOut()
        );
      });
    },

    // animate_tabs() {
    //   $(".page__style").addClass("animate_content");
    //   $(".animate_content").fadeOut(1000).delay(2800).fadeIn();

    //   setTimeout(function () {
    //     $(".page__style").removeClass("animate_content");
    //   }, 3200);
    // },

    // cart flying
    wheel(evt) {
      console.log(evt.deltaY);
      TweenMax.to(".buybox", 0.8, {
        left: "+=" + evt.deltaY * 2 + "px",
      });
    },
    addCart(food, evt) {
      this.clickChange()
      setTimeout(() => {
        this.cartPopup();
      }, 800);
      this.currentFood = food;
      this.$nextTick(() => {
        TweenMax.from(".buybox", 1, {
          left: $(evt.target).offset().left,
          top: $(evt.target).offset().top,
          opacity: 1,
          ease: Power1.easeIn,
        });
        setTimeout(() => {
          this.cart.push(food);
        }, 800);
      });
    },

    bgcss(url) {
      return {
        "background-image": "url(images/" + url + ")",
        "background-size": "cover",
        "background-position": "center center",
      };
    },
  },
  mounted() {
    // document.querySelector("#cart-content-box").style.display="none"
    this.show = true;
    // this.cartPopup;
  },
};
</script>
