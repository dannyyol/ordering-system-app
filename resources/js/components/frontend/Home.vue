<template>
    <div id ="wrapper-container">
        <div class="container">
            <div class="wrapper-content">
                <div class="image-top-box">
                    <div class="image-top d-flex justify-content-center">
                        <!-- <img src="" alt="" srcset="" class="image-path"> -->
                    </div>
                </div>

                <div class="select-box-right">
                    <div class="row mt-5 d-flex justify-content-center">
                        <div class="col-sm-5 col-md-4 mr-4 "> </div>
                        <div class="col-sm-5 col-md-4 select-language-box">
                        <div class="language-box" style="margin-right:-14.5px">
                                <label for="" class="float-left">Choose Language</label>
                                <select id="my-select" class="form-control " name="" style="">
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>   
                        </div>
                        </div>
                    </div>
                </div>

                <div class="box-content">
                    <div class="row mt-5 d-flex justify-content-center">
                        <div class="col-sm-5 col-md-4 mr-4 bg-white m-bottom m-right border-radius border border-10">
                            <router-link class="" to="/menu">
                            <div class="inner-box-1" id="btn">
                                <img src="images/meal.png" alt="" srcset="" style="margin-top:48px">
                            </div>
                            <div class="heading">
                                <h3>Eat In</h3>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-sm-5 col-md-4 bg-white m-bottom m-right border-radius">
                            <router-link class="" to="/products">
                            <div class="inner-box-2"  id="btn">
                                <img src="images/take away.png" alt="" srcset="" style="margin-top:48px">
                            </div>
                            <div class="heading">
                                <h3>Take Away</h3>
                            </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <br><br><br>
            </div>
        
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
