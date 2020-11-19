<template>
  <div class="">
    <div id="overlay" onclick="off()"></div>
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
            <sequential-entrance fromLeft>
              <div class="row">
                <div class="col-sm-12 col-md-5 heading-products">
                  <h3>Burger - All Time Favourite</h3>
                </div>
                <div class="col-sm-8 col-md-5 col-8">
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


                  <!-- <label :data-state="state" for="search">
                    <input type="text" placeholder="Search" @click="state = 'opan'" @blur="state='close'"/>
                    <i class="fa fa-search" @click="" aria-hidden="true"></i>
                  </label> -->
                  
                </div>
                <div class="col-md-2">
                  <sequential-entrance fromTop>
                    <!-- fixed cart button -->
                    <button class="chatbox-open" @click="cartPopup">
                      <i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
                      <span class="btn btn-danger rounded-circle align-center" style="font-size:12px;position:absolute;width:30px;height:30px;top:30px;left:-10px;content:'2'">2</span>
                    </button>
                  </sequential-entrance>
                  <!-- <button class="add" @click="addCart(movie,$event)">+ Add To My Cart</button> -->
                  <!-- <button class="chatbox-close btn-danger">
                    <i class="fa fa-close fa-2x" aria-hidden="true"></i>
                  </button> -->
                </div>
              </div>
            </sequential-entrance>

            <!-- <sequential-entrance fromRight> -->

            <!-- Modal -->         
            <div style="border:none;" class="animate__animated animate__fadeInBottomRight modal fade customize_modal" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" data-keyboard="false" data-backdrop="static">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header bg-warning">
                    <h6 class="modal-headings pt-2 ml-n2" id="exampleModalLongTitle">Customize Your Food</h6>
                    <!-- <button type="button" class="btn btn-danger text-white" data-dismiss="modal">Close</button> -->
                    <button class="btn btn-danger text-white float-right mr-n2"  data-dismiss="modal" style="padding-left: 40px;padding-right: 40px">Close</button>


                  </div>
                  <div class="modal-body">

                    <div class="row">
                      <div class="col-md-2 col-3">
                        <img src="images/big-mac.png" alt="" srcset="" width="100" />
                      </div>
                      <div class="col-md-4  my-auto">
                        <p class=" my-auto">Customize your food</p>
                        <p class=" my-auto" style="font-size: 18px; font-weight: 600">
                          Cheeseburger
                        </p>
                      </div>

                      <div class="col-md-7 my-auto col-5 input-box-customization">
                        <!-- <button class="btn btn-danger float-right ">Reset</button> -->
                      </div>
                    </div>

                    <hr>

                    <div class="row">
                      <div
                        class="col-md-2 col-3 col-3 input-box-customization"
                      >
                        <img src="images/burger_ingredients.png" alt="" srcset="" width="" class="cart_image" />
                      </div>

                      <div
                        class="col-md-4 my-auto col-sm-4 ml-1 col-4 input-box-customization customize-food-name"
                      >
                        Carrots & Onions
                      </div>

                      <div
                        class="col-2 col-md-4 my-auto input-box-customization plus-minus-button"
                      >
                        <button
                          class="btn btn-default bg-warning cart-sm-button"
                        >
                          -
                        </button>
                        <button class="btn btn-default bg-warning cart-sm-button">+</button>
                      </div>
                      <div class="col-sm-3 col-3 my-auto col-md-3 mr-n3">
                        <div class="form-group my-auto d-flex justify-content-end">
                          <select class="form-control" name="" id="">
                            <option>Regular</option>
                            <option>Dummy One</option>
                            <option>Dummy Two</option>
                          </select>
                        </div>
                      </div>
                      
                    </div>

                    <hr>

                    <div class="row">
                      <div
                        class="col-md-2 col-3 col-3 input-box-customization"
                      >
                        <img src="images/Rectangle-10.png" alt="" srcset="" width="" class="cart_image" />
                      </div>

                      <div
                        class="col-md-4 my-auto col-sm-4 ml-1 col-4 input-box-customization customize-food-name"
                      >
                        Mac Sauce
                      </div>

                      <div
                        class="col-2 col-md-4 my-auto input-box-customization plus-minus-button"
                      >
                        <button
                          class="btn btn-default bg-warning cart-sm-button"
                        >
                          -
                        </button>
                        <button class="btn btn-default bg-warning cart-sm-button">+</button>
                      </div>
                      <div class="col-sm-3 col-3 my-auto col-md-3 mr-n3 my-auto">
                        <div class="form-group my-auto d-flex justify-content-end">
                          <select class="form-control" name="" id="">
                            <option>Regular</option>
                            <option>Dummy One</option>
                            <option>Dummy Two</option>
                          </select>
                        </div>
                      </div>
                      
                    </div>

                    <hr>

                    <div class="back-button-size">
                      <router-link to="" class="btn btn btn-lg text-dark border-3 border-dark back-hover-animation" id="btn">Reset</router-link>
                      <router-link to="/products" id="btn" class="btn btn-success confirm-button ml-4 confirm-button order-button-cart-size" data-dismiss="modal"
                        >Confirm Changes</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- </sequential-entrance> -->


            <!-- cart items -->
            <div class="cart_wrapper" @wheel.prevent="wheel($event)">
             <section
              class="chatbox-popup animate__animated animate__fadeInBottomRight"
            >
            <div class="card" style="">
                <div class="card-header cart-header bg-warning">
                  <h6 class="float-left modal-headings ml-n2" style="padding-top:10px;">Items in Cart</h6>
                  <button class="btn btn-danger text-white float-right cartbox-close mr-n2" style="padding-left: 40px;padding-right: 40px">Close</button>
                </div>
                <table class="table table-inverse table-responsive">
                    <tbody>
                      <tr>
                        <td scope="row">
                           <div class="card cart_image">
                              <img
                                  src="images/big-mac-cart.png"
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
                              <button class="btn btn-warning cart-sm-button">-</button>
                              <input
                              type="text"
                              class="form-control ml-1 mr-1"
                              name=""
                              id=""
                              aria-describedby="helpId"
                              placeholder=""
                              style="max-width: 50px"
                              />
                              <button class="btn btn-warning cart-sm-button">+</button>
                          </div>
                        </td>
                      <!-- </tr> -->
                      <!-- <tr> -->
                        <td class="align-middle">

                            <button title="Delete" class="btn btn-danger">
                            <i class="fa fa-trash-o" aria-hidden="true"></i> Remove
                            </button>
                        </td>
                        <td class="align-middle" style="margin:auto;text-align:left; margin:auto;text-align:left;">
                            <!-- <router-link to="/customize-food"
                            title="Customize"
                            class="btn btn-warning ml-n3"
                            id="btn"
                            >
                            <i class="fa fa-edit" aria-hidden="true"></i> Customize
                            </router-link> -->

                            <a data-toggle="modal" href="#myModal2" class="btn btn-warning ml-n3"
                            id="btn">
                            <i class="fa fa-edit" aria-hidden="true"></i> Customize
                            </a>
                        </td>
                        
                      </tr>
                      <!-- Second Cart -->
                      <tr>
                        <td scope="row">
                           <div class="card cart_image">
                              <img
                                  src="images/big-mac_5.png"
                                  alt=""
                                  srcset=""
                                  width=""
                                  class=""
                              />
                            </div>
                        </td>

                        <td class="align-middle">French Fries</td>
                        <td class="align-middle">
                          <div class="row">
                              <button class="btn btn-warning cart-sm-button">-</button>
                              <input
                              type="text"
                              class="form-control ml-1 mr-1"
                              name=""
                              id=""
                              aria-describedby="helpId"
                              placeholder=""
                              style="max-width: 50px"
                              />
                              <button class="btn btn-warning cart-sm-button">+</button>
                          </div>
                        </td>
                      <!-- </tr> -->
                      <!-- <tr> -->
                        <td class="align-middle">

                            <button title="Delete" class="btn btn-danger">
                            <i class="fa fa-trash-o" aria-hidden="true"></i> Remove
                            </button>
                        </td>
                        <td class="align-middle" style="margin:auto;text-align:left; margin:auto;text-align:left;">
                            <router-link to="/customize-food"
                            title="Customize"
                            class="btn btn-warning ml-n3"
                            id="btn"
                            >
                            <i class="fa fa-edit" aria-hidden="true"></i> Customize
                            </router-link>
                        </td>
                      </tr>

                      <tr>
                        <td scope="row">
                           <div class="card cart_image">
                              <img
                                  src="images/Rectangle-6.png"
                                  alt=""
                                  srcset=""
                                  width=""
                                  class=""
                              />
                            </div>
                        </td>

                        <td class="align-middle">Coca-Cola®</td>
                        <td class="align-middle">
                          <div class="row">
                              <button class="btn btn-warning cart-sm-button">-</button>
                              <input
                              type="text"
                              class="form-control ml-1 mr-1"
                              name=""
                              id=""
                              aria-describedby="helpId"
                              placeholder=""
                              style="max-width: 50px"
                              />
                              <button class="btn btn-warning cart-sm-button">+</button>
                          </div>
                        </td>
                      <!-- </tr> -->
                      <!-- <tr> -->
                        <td class="align-middle">

                            <button title="Delete" class="btn btn-danger">
                            <i class="fa fa-trash-o" aria-hidden="true"></i> Remove
                            </button>
                        </td>
                        <td class="align-middle" style="margin:auto;text-align:left; margin:auto;text-align:left;">
                            <router-link to="/customize"
                            title="Customize"
                            class="btn btn-warning ml-n3"
                            id="btn"
                            >
                            <i class="fa fa-edit" aria-hidden="true"></i> Customize
                            </router-link>
                        </td>
                      </tr>
                      
                    </tbody>
                </table>

                <div class="card-footer bg-white">
                  
                  
                  <div class="fixed-footer-button">
                  <a
                    href="#"
                    class="btn btn-lg border-3 border-danger back-hover-animation mr-4"
                    id="btn"
                    >Clear Cart</a
                  >
                  <router-link
                  to="/checkout"
                    class="btn btn-lg btn-success confirm-button order-button-cart-size"
                    id="btn"
                    >Checkout</router-link
                  >
                  </div>

                </div>
              </div>
             </section>  
            </div>

          

            <div class="tab-content no-MarginLR small-media-screen">
              <div class="tab-pane fade show active" id="rectangle-1">
                <sequential-entrance fromRight>
                  <div class="row ">
                      <div
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-2 col-margin"
                        v-for="item in foods1"
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
                <sequential-entrance fromRight>
                  <div class="row">
                    <div
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-2 col-margin"
                        v-for="item in foods2"
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
                                                  <!-- <p>{{currentFood}}</p> -->

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
              </article>
            </div>
            <!-- /.row -->
          </div>
          <!-- /.col-lg-9 -->
        </div>
        <br /><br /><br /><br />
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<style scoped>


 label {
	 position: relative;
	 display: inline-block;
	 background-color: #fff;
	 padding: 5px 12px;
	 transition: all 1s ease;
	 border-radius: 0;
	 box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}
 label::after {
	 content: '';
	 display: block;
	 height: 2px;
	 width: 80%;
	 background-color: #f0ad4e;
	 transition: all 1s ease 0.5s;
}
 label input {
	 transition: width 1s ease, opacity 0.5s ease 0.5s;
	 opacity: 1;
	 width: 180px;
	 height: 25px;
	 border: 0;
	 outline: none;
	 color: #b06d0f;
}
 label i {
	 position: absolute;
	 top: 11px;
	 right: 11px;
	 color: #333;
	 cursor: pointer;
}
 label[data-state="close"] {
	 border-radius: 30px;
	 padding: 5px 5px;
	 transition: all 1s ease;
}
 label[data-state="close"]::after {
	 width: 0%;
	 transition: all 0.3s ease;
}
 label[data-state="close"] i {
	 pointer-events: none;
}
 label[data-state="close"] input {
	 width: 28px;
	 height: 25px;
	 opacity: 0;
	 cursor: pointer;
	 transition: opacity 0.5s ease, width 1s ease;
	 -webkit-appearance: none;
}
 




.back-button-size{
  margin-top:-27px; 
  margin-bottom:  -30px;
}
.modal{
    z-index: 1051 !important;
}
/* .modal-backdrop.show:nth-of-type(even) {
    z-index: 1051 !important;
} */
</style>

<script>
import { TweenMax, Power1 } from "gsap";
// import $ from "jquery";
import Modal from "../frontend/Modal"
export default {
  data() {
    return {
          state: "close",
      show_burger: true,
      show_dessert: false,
      title_1:'Burger',
      title_2:'Desserts and Sides',
      show: false,
      showCart: false,
      animated: false,
      foods1: [
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
          image: "big-mac-3.png",
        },

        {
          id: 5,
          name: "Filet-O-Fish™",
          price: 1499,
          image: "big-mac-main-4.png",
        },
      ],

      foods2: [
        {
          id: 1,
          name: "McChicken®",
          price: 1990,
          image: "big-mac_4.png",
        },

        {
          id: 2,
          name: "Cheeseburger",
          price: 1199,
          image: "big-mac_3.png",
        },

        {
          id: 3,

          name: "Bubur Ayam McD™",
          price: 625,
          image: "big-mac_2.png",
        },

        {
          id: 4,
          name: "Quarter Pounder",
          price: 14299,
          image: "big-mac_1.png",
        },

      ],

      currentFood: null,
      cart: [],
      //   animated: false
    };
  },

  methods: {
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
    },
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
    document.getElementById("overlay").style.display = "block";
      const chatbox = jQuery.noConflict();

      chatbox(() => {
        chatbox(".chatbox-popup, .chatbox-close").fadeIn();
        chatbox(".cartbox-close").click(() =>
          chatbox(".chatbox-popup").fadeOut(),
            // document.getElementById("overlay").style.display = "none"
        );
        chatbox(".cartbox-close").click(() =>
            document.getElementById("overlay").style.display = "none"
        );
      });
    },


    

    // cart flying
    wheel(evt) {
      console.log(evt.deltaY);
      TweenMax.to(".buybox", 0.8, {
        left: "+=" + evt.deltaY * 2 + "px",
      });
    },
//     function on() {
//   document.getElementById("overlay").style.display = "block";
// }

// function off() {
//   document.getElementById("overlay").style.display = "none";
// }
    addCart(food, evt) {
      document.getElementById("overlay").style.display = "block";
      this.clickChange()
      setTimeout(() => {
        this.cartPopup();
      }, 900);
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
    // if (!window.location.hash) {
    //   window.location = window.location + "#reload";
    //   window.location.reload();
    // }
  },
};
</script>
