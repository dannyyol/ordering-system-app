<template>
  <div class="container-wrapper">
    <div class="product-container">
      <div class="header-image-box">
        <div class="col-md-12 header-image-bg"></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-2 cart-image-1">
          <img src="images/big-mac-main-1.png" alt="" srcset="" />
        </div>
        <div
          class="col-md-10 cart-image-content"
          style="display: flex; align-items: center"
        >
          <h3 class="d-flex float-right">Filet-O-Fish</h3>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-2 col-sm-4 cart-image-1">
            <img src="images/big-mac-main-2.png" alt="" srcset="" />
            </div>
            <div class="col-md-10 col-sm-8 cart-image-content">
            <router-link to="/customize-food" class="btn btn-warning text-dark d-flex float-right">
                Customize
            </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 col-sm-4 cart-image-1">
            <img src="images/big-mac-main-2.png" alt="" srcset="" />
            </div>
            <div class="col-md-10 col-sm-8 cart-image-content">
            <button class="btn btn-warning text-dark d-flex float-right">
                Customize
            </button>
            </div>
        </div>

      <div class="row" style="margin-top: 70px">
        <div style="text-align: center; margin: auto">
          <button class="btn btn-warning btn-sm pl-3 pr-3">-</button>
          <input
            type="text"
            class="form-control btn btn-white border border-warning mr-2 ml-2"
            value="2"
            style="width: 70px"
          />
          <button class="btn btn-warning btn-sm pl-3 pr-3">+</button>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-12 buttons-width">
          <div class="order-link mt-5" style="margin: auto; text-align: center">
            <button type="button" class="btn btn-lg back-button-cart-size back-hover-animation" id="btn">
              Back to menu
            </button>
            <router-link
              to="/add-to-order"
              class="base-btn btn btn-lg btn-success order-button-cart-size ml-4"
              id="btn"
              >Add to Order</router-link
            >

<!-- <button class="base-btn" @click="clickHandler" :class="{'shake' : animated}" :text="text">
      {{text ? text : altText }}
    </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

   
</style>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    
  },
  created() {
    if (!window.location.hash) {
      window.location = window.location + "#reload";
      window.location.reload();
    }
  },
};
</script>