<template>
  <div class="container-wrapper">
      <div class="product-container">
      <div class="header-image-box">
        <div class="col-md-12 header-image-bg"></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-md-12 col-sm-12 mt-5"
          style="font-size: 48px !important"
        >
          <h1>Customize your drink</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-5 col-sm-6 col-12">
          <div class="form-group customize-labeling">
            <label class="">Choose Size</label>
            <select id="my-select" class="form-control bg-warning" v-model="size" @change="checkChange($event)">
                <option value="" selected>Select</option>
                <option v-for="size in sizes" :key="size">{{ size }}</option>
            </select>
          </div>
        </div>
        <div class="col-lg-4 col-md-5 col-sm-6 col-12">
          <div class="form-group">
            <label for="" class="customize-labeling">Choose Tempeture</label>
            <select id="my-select" class="form-control bg-warning" v-model="temp" @change="checkChange($event)">
                <option value="" selected>Select</option>
                <option v-for="temp in temps" :key="temp">{{ temp }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="customize-content" style="">
        <div class="row top-margin">
          <div class="col-lg-3 col-6 col-md-4 col-sm-6 mb-2 product-box-1">
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

          <div class="col-lg-3 col-6 col-md-4 col-sm-6 mb-2">
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

          <div class="col-lg-3 col-6 col-md-4 col-sm-6 mb-2 product-box-1">
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

          <div class="col-lg-3 col-6 col-md-4 col-sm-6 mb-2">
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
        <sequential-entrance fromBottom>
            <div class="back-button-size" style="margin-left">
            <a href="" class="btn btn btn-lg text-dark border-3 border-dark back-hover-animation" id="btn"
                >Back</a>
            <router-link to="/products" class="btn btn-success confirm-button  order-button-cart-size ml-4" id="btn" v-if="size || temp"
                >Confirm Changes</router-link>
            </div>                       
        </sequential-entrance>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        sizes:[
            'Small',
            'Medium',
            'Large'
        ],
        temps:[
            'Cold',
            'Warm'
        ],
        size:'',
        temp:''
    };
  },
  methods: {
    checkChange(event) {
      console.log(event.target.value);
    },
  },
};
</script>