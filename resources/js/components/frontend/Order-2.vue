<template>
  <div>
    <!-- Page Content -->
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-3 col-sm-4 col-xs-2 mb-5 small-screen-size">
          <div
            class="tabs-animated list-group list-group-flush"
            style="height: 600px"
            id="content-1"
          >
            <ul class="nav nav-tabs nav-justified btn_nav projects_link">
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
                  <img src="images/Rectangle-3.png" alt="" srcset="" />
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
          </div>
        </div>
        <!-- /.col-lg-3 -->

        <div class="col-lg-9 top-content-bar col-sm-8">
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
                  <div class="row d-flex justify-content-center mt-5">
                    <div class="col-lg-4 col-md-6 mb-4">
                      <div class="card h-100 main-box-content">
                        <a href="cart.html">
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
                </div>
              </div>
            </div>
          </div>
          <!-- modal ends here -->

          <div class="tab-content no-MarginLR small-media-screen page__style">
            <div class="tab-pane active" id="rectangle-1">
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
            </div>

            <article class="tab-pane fade show" id="rectangle-2">
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
            </article>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.col-lg-9 -->
      </div>
      <!-- /.row -->
    </div>
    <footer>
      <div class="fixed-footer">
        <div class="row">
          <div class="col-md-6 col-6 footer-top-1">Sundae Cone x 1</div>
          <div class="col-md-6 col-6">
            <!-- <div class="col-md-3 col-lg-3 col-5 col-sm-4"> -->
            <!-- <div class="row display-increment-in-block"> -->
            <div class="col-12 footer-top-2">
              <button class="btn btn-warning pl-3 pr-3">-</button>
              <input
                type="text"
                class="form-control btn btn-white border border-warning mr-2 ml-2"
                value="2"
                style="width: 70px"
              />
              <button id="addtocart" @click="cartClick" class="btn btn-warning pl-3 pr-3">
                +
                <span class="cart-item"></span>
              </button>
            </div>
            <!-- </div> -->
            <!-- </div> -->
          </div>
        </div>
        <div class="col-md-12 col-lg-12">
          <div class="footer-1">
            <div class="row bg-warning">
              <div class="col-md-6 col-sm-6 col-6 ordering-item-1">
                <div class="cart" id="cart" data-totalitems="0">
                  Items in list
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-6 ordering-item-2">
                <a href="order-lists.html">View order list</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-12 bg-white">
          <div class="fixed-footer-button">
            <a href="" class="btn btn-lg">Cancel Order</a>
            <a href="cart.html" class="btn btn-lg btn-success confirm-button"
              >Done</a
            >
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
    </footer>
  </div>
</template>

<style>
    .no-MarginLR {
        margin: 0px -20px 0px -20px;
    }
    </style>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
      cartClick(){
        $(document).ready(function(){
            $('#addtocart').on('click',function(){
                
                var button = $(this);
                var cart = $('#cart');
                var cartTotal = cart.attr('data-totalitems');
                var newCartTotal = parseInt(cartTotal) + 1;
                
                button.addClass('sendtocart');
                setTimeout(function(){
                button.removeClass('sendtocart');
                cart.addClass('shake').attr('data-totalitems', newCartTotal);
                setTimeout(function(){
                    cart.removeClass('shake');
                },500)
                }, 1000)
                console.log(newCartTotal)
            })
        })
      }
  },

  ready: function () {},
  mounted() {
    // setTimeout(() => this.show = true, 2000);
    this.show = true;
    this.animate_tabs();
  },
};
</script>
