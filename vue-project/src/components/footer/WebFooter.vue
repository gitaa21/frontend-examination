<template>
    <div class="row footer d-flex justify-content-between">
        <div class="col-sm-6 col-md-6 col-lg-3">
            <img src="../../assets/images/logo-alt.svg" width="150px" alt="">
            <h5 class="text-orange mt-5">Find Us: </h5>
            <div class="logo-footer d-flex">
                <div class="sosial-media me-2"><img src="../../assets/images/facebook.svg" alt=""></div>
                <div class="sosial-media me-2"><img src="../../assets/images/instagram.svg" alt=""></div>
                <div class="sosial-media"><img src="../../assets/images/youtube.svg" alt=""></div>
            </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
            <h5 class="text-orange">Navigation</h5>
            <div class="d-flex mt-3">
                <div class="footer-nav">
                    <p><a href="#">Home</a></p>
                    <p><a href="#">Order</a></p>
                    <p><a href="#">About</a></p>
                    <p><a href="#">Blog</a></p>
                </div>
                <div class="footer-nav ms-5">
                    <p><a href="#">Contact</a></p>
                    <p><a href="#">Login</a></p>
                    <p><a href="#">Register</a></p>
                </div>
            </div>

        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
            <h5 class="text-orange">Contact</h5>
            <div class="mt-3">
                <img src="../../assets/images/mail.svg" alt="Email">
                <span class="mt-3 ms-1">Food.now@mail.com</span>
            </div>
            <div class="mt-2">
                <img src="../../assets/images/phone.svg" alt="Telp">
                <span class="mt-3 ms-1">+62848477102943</span>
            </div>
            <div class="mt-2">
                <img src="../../assets/images/whatsapp.svg" alt="Whatsapp">
                <span class="mt-3 ms-1">+628184938494</span>
            </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
            <h5 class="text-orange">Location</h5>
            <img src="../../assets/images/location.svg" alt="">
            <span><b>Kerobokan</b></span>
            <p class="ms-4 text-wrap">Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod Kelod, Kec, Kuta Utara,
                Kabupaten Badung, Bali 80361</p>
        </div>
    </div>
    <div class="text-center">
        <p class="mb-0" style="font-size: 14px;">Copyright &copy; 2022 Foodnow. All Right Reserved. Powered by PT.
            Timedoor Indonesia. | Privacy Policy</p>
        <p class="mt-0" style="font-size: 12px;">This Site is protected by reCAPTCHA and the Google Privacy and Terms of
            Service apply.</p>
    </div>
</template>

<style scoped>
.footer-nav a {
    color: #888888;
    text-decoration: none;
}

.footer-nav a:hover {
    color: #F57C00;
    transition: 0.3s;
}

.footer {
    margin: 100px 70px 20px 70px;
    border-top: 1px solid lightgrey;
    padding: 40px 0;
    border-bottom: 1px solid lightgrey;
}

.text-orange {
    color: #F57C00;
}

.sosial-media {
    border: 1px solid #F57C00;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 5px;
    text-align: center;
}

.sosial-media:hover {
    background-color: #f57b004e;
    transition: 0.5s;
}
</style>