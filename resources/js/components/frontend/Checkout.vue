<template>
    <div class="container">
        <div class="payment-option-heading">
            <h3>Please select a payment type</h3>
        </div>
        <div class="row">
            <div class="payment-option-button">
                <div class="col-md-12 col-xs-12 mb-3">
                    <router-link to="/qr-code" class="btn btn-warning"> 
                        <img src="images/qr-code.png" alt="" class="qr-code" srcset=""> QR Pay
                    </router-link>
                </div>
                <div class="col-md-12 col-xs-12 mb-3">
                    <router-link to="/credit-card-payment" class="btn btn-warning">
                        <img src="images/Shape.png" alt="" class="qr-code" srcset="">
                        Credit/Debit Card
                    </router-link>
                </div>
                <div class="col-md-12 col-xs-12">
                    <router-link to="/cash-payment" class="btn btn-warning">
                        <img src="images/Shape-2.png" alt="" class="qr-code" srcset="">
                        Cash (Pay at counter)
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>