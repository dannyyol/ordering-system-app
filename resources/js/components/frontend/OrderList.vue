<template>
    <div id="wrapper-container">
        <div class="container">
            <div class="col-md-12 d-flex justify-content-center order-list-heading">
                <h2> Order List</h2>
            </div>

            <div class="order-cart">
                <div class="row">
                    <div class="col-md-6 col-6 col-sm-6">
                        Filet-O-Fish Large McValue Meal
                    </div>
                    <div class="col-md-3 col-3 col-sm-3 d-flex  justify-content-center">
                        X2
                    </div>
                    <div class="col-md-3 col-3 col-sm-3 d-flex justify-content-end">
                        RM 20.00
                    </div>
                </div>
                <hr>

                <div class="row">
                    <div class="col-md-6 col-6  col-sm-6">
                        Large French Fries
                    </div>
                    <div class="col-md-3 col-3 col-sm-3 d-flex justify-content-center">
                        X2
                    </div>
                    <div class="col-md-3 col-3 col-sm-3 d-flex justify-content-end">
                        
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-md-6 col-6 col-sm-6">
                        Large Iced Milo®
                    </div>
                    <div class="col-md-3 col-3  col-sm-3 d-flex justify-content-center">
                        X2
                    </div>
                    <div class="col-md-3 col-3  col-sm-3 d-flex justify-content-end">
                        
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-md-6 col-lg-6 col-sm-3 col-3 border-size-remove">
                        <button class="btn text-danger border-danger">Remove</button>
                    </div>
                    <div class="col-md-3 col-lg-3 col-5 col-sm-4">
                        <div class="row display-increment-in-block">
                            <div class="col-12" style="text-align: center; margin: auto;">
                                <button class="btn btn-warning pl-3 pr-3"> - </button>
                                <input type="text" class="form-control btn btn-white border border-warning mr-2 ml-2" value=2 style="width:70px;">
                                <button class="btn btn-warning pl-3 pr-3"> + </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 col-3 edit-cart-button" style="margin:auto;text-align:right;">
                        <button class="btn btn-warning">Edit</button>
                    </div>
                </div>
            </div>

            <div class="order-cart mt-4 mb-5">
                <div class="row">
                    <div class="col-md-6 col-6 col-sm-6">
                        Sundae Cone
                    </div>
                    <div class="col-md-3 col-3 col-sm-3 d-flex  justify-content-center">
                        X2
                    </div>
                    <div class="col-md-3 col-3 col-sm-3 d-flex justify-content-end">
                        RM 20.00
                    </div>
                </div>
                <hr>

                <div class="row mt-5">
                    <div class="col-md-6 col-lg-6 col-sm-3 col-3 border-size-remove">
                        <button class="btn text-danger border-danger">Remove</button>
                    </div>
                    <div class="col-md-3 col-lg-3 col-5 col-sm-4">
                        <div class="row display-increment-in-block">
                            <div class="col-12" style="text-align: center; margin: auto;">
                                <button class="btn btn-warning pl-3 pr-3"> - </button>
                                <input type="text" class="form-control btn btn-white border border-warning mr-2 ml-2" value=2 style="width:70px;">
                                <button class="btn btn-warning pl-3 pr-3"> + </button>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>   
     <!-- <br><br><br> -->
    </div>
    <div>
        <div class="container-fluid border border-dark" style="margin-top:-20px;">
            <div class="row" style="font-size: 28px;">
                <div class="col-md-6 col-0">
                </div>
                <div class="col-md-3 col-3 d-flex justify-content-center">
                    Tax
                </div>
                <div class="col-md-3 col-9">
                    RM 3.48
                </div>
            </div>
            <div class="row" style="font-size: 28px;">
                <div class="col-md-6 col-0">
                </div>
                <div class="col-md-3 col-3 d-flex justify-content-center">
                    Tax
                </div>

                <div class="col-md-3 col-9">
                    RM 3.48
                </div>
            </div>
        </div> 

        <div class="bg-white">
            <div class="container" style="">
                <div class="row order-footer-button">
                    <div class="col-md-12">
                        <router-link to="/add-to-order" class="btn btn-warning btn-lg add-more-button-animate" id="btn">Add more</router-link>
                        <router-link to="/checkout" class="btn  btn-lg  btn-success checkout-button-animate" id="btn">Checkout</router-link>
                    </div>
                </div>   
            </div>
        </div>
    </div>
    
    </div>
</template>

<script>
export default {
    
}
</script>