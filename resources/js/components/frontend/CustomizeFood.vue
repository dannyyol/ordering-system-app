<template>
  <div class="">
    <div class="product-container">
      <div class="header-image-box">
        <div class="col-md-12 header-image-bg"></div>
      </div>
    </div>
    <div class="container-wrapper">
      <div class="container">
        <sequential-entrance fromLeft>
          <div class="row">
            <div class="col-md-2 col-3">
              <img src="images/big-mac.png" alt="" srcset="" width="120" />
            </div>
            <div class="col-md-3 col-4 mt-3">
              <p style="font-size: 21px; font-weight: 600">
                Customize your food
              </p>
              <h2>Cheeseburger</h2>
            </div>

            <div class="col-md-7 col-5 input-box-customization">
              <button class="btn btn-lg btn-danger float-right">Reset</button>
            </div>
          </div>
        </sequential-entrance>

        <hr />

        <sequential-entrance fromRight>
          <div class="row">
            <div
              class="col-md-2 col-3 col-3 input-box-customization"
              style="margin-right: -0px"
            >
              <img
                src="images/big-mac-main-3.png"
                alt=""
                srcset=""
                width=""
                class="customized-image"
              />
            </div>

            <div
              class="col-md-4 my-auto col-sm-4 col-4 input-box-customization customize-food-name"
            >
              Mac Sauce
            </div>

            <div
              class="col-2 col-md-4 my-auto input-box-customization plus-minus-button"
            >
              <button
                class="btn btn-lg btn-default bg-warning"
                @click="chooseIng"
              >
                -
              </button>
              <button class="btn btn-lg btn-default bg-warning">+</button>
            </div>
            <div
              class="col-sm-3 col-3 my-auto col-md-3 input-box-customization"
            >
              <!-- <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  value="Regular"
                  disabled
                />
              </div> -->
              <div class="form-group">
                <select class="form-control" name="" id="">
                  <option>Regular</option>
                  <option>Dummy One</option>
                  <option>Dummy Two</option>
                </select>
              </div>
            </div>
          </div>
        </sequential-entrance>

        <hr />

        <sequential-entrance fromLeft>
          <div class="row">
            <div
              class="col-md-2 col-3 col-3 input-box-customization"
              style="margin-right: -0px"
            >
              <img
                src="images/big-mac_5.png"
                alt=""
                srcset=""
                class="customized-image"
              />
            </div>

            <div
              class="col-md-4 my-auto col-sm-4 col-4 input-box-customization customize-food-name"
            >
              French Fries
            </div>

            <div
              class="col-2 col-md-4 my-auto input-box-customization plus-minus-button"
            >
              <button
                class="btn btn-lg btn-default bg-warning"
                @click="chooseIng"
              >
                -
              </button>
              <button class="btn btn-lg btn-default bg-warning">+</button>
            </div>
            <div
              class="col-sm-3 col-3 my-auto col-md-3 input-box-customization"
            >
              <!-- <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  value="Regular"
                  disabled
                />
              </div> -->
              <div class="form-group">
                <select class="form-control" name="" id="">
                  <option>Regular</option>
                  <option>Dummy One</option>
                  <option>Dummy Two</option>
                </select>
              </div>
            </div>
          </div>
        </sequential-entrance>
        <hr />

        <sequential-entrance fromRight>
          <div class="row">
            <div
              class="col-md-2 col-3 col-3 input-box-customization"
              style="margin-right: -0px"
            >
              <img
                src="images/Rectangle-10.png"
                alt=""
                srcset=""
                width=""
                class="customized-image"
              />
            </div>

            <div
              class="col-md-4 my-auto col-sm-4 col-4 input-box-customization customize-food-name"
            >
              Mac Sauce
            </div>

            <div
              class="col-2 col-md-4 my-auto input-box-customization plus-minus-button"
            >
              <button
                class="btn btn-lg btn-default bg-warning"
                @click="chooseIng"
              >
                -
              </button>
              <button class="btn btn-lg btn-default bg-warning">+</button>
            </div>
            <div
              class="col-sm-3 col-3 my-auto col-md-3 input-box-customization"
            >
              <div class="form-group my-auto d-flex justify-content-end">
                <select class="form-control" name="" id="">
                  <option>Regular</option>
                  <option>Dummy One</option>
                  <option>Dummy Two</option>
                </select>
              </div>
            </div>
          </div>
        </sequential-entrance>

        <hr />
        <div class="customize-content" style="">
          <div class="row top-margin"></div>
          <sequential-entrance fromBottom>
            <div class="back-button-size">
              <router-link
                to="/products"
                class="btn btn btn-lg text-dark border-3 border-dark back-hover-animation"
                id="btn"
                >Back</router-link
              >
              <router-link
                to="/products"
                id="btn"
                class="btn btn-success confirm-button ml-4 confirm-button order-button-cart-size"
                >Confirm Changes</router-link
              >
            </div>
          </sequential-entrance>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.input-box-customization,
.form-group {
  /* display: block;
  margin: auto;*/
  font-size: 18px;
}
.plus-minus-button {
  /* margin-right: -35px; */
}
.customize-food-name {
  /* margin-right: -40px;
  margin-left: -20px; */
  /* min-width:250px; */
}
</style>
<script>
export default {
  data() {
    return {
      ingredients: ["Regular", "Dummy One", "Dummy Two"],
    };
  },
  methods: {
    chooseIng() {
      $.each(response.data.message, function (key, value) {
        ingredient = this.ingredients.push(key);
      });
      console.log(ingredient);
    },
  },
};
</script>