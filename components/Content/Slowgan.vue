<template>
  <div class="py-4 d-flex flex-column justify-content-center w-100 m-auto ">
    <div class="row ">
      <div class="col-12 text-center fs-1">
        <div class="position-relative py-5">
          <section id="home">
            <div id="textSlider" class="row">
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4 iamCol pt-1">
                <p class="fw-bold sriracha">เช่ารถ</p>
                <p class="fw-light">เรื่องง่าย</p>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 slideCol">
                <div class="scroller">
                  <div class="inner">
                    <p>เช่าหลายวัน <span class="sriracha">ยิ่งถูก</span></p>
                    <p>ไม่พอใจรถ <span class="sriracha">ยินดีคืนเงิน</span></p>
                    <p>รถโครต <span class="sriracha">ใหม่สะอาด</span></p>
                    <p>เช่าง่ายใน 4 ขั้นตอน</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.set-max-width {
  max-width: 1180px;
}

/* Slider */
#textSlider.row {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100% !important;
}

#textSlider div {
  color: #333;
  text-transform: uppercase;
}

.iamCol {
  text-align: right;
  float: left;
  font-weight: 300;
  font-size: 30pt;
}

.iamCol p:nth-child(2) {
  margin-top: -20pt !important;
}

.slideCol {
  text-align: left;
  overflow: hidden;
  font-weight: 700;
  font-size: 60pt;
  display: block;
  white-space: nowrap;
}

.slideCol p {
  margin: 0px !important;
}

.scroller {
  height: 70pt;
  line-height: 70pt;
  overflow: hidden;
}

.scroller .inner {
  animation: 10s normal infinite running scroll;
}

@keyframes scroll {
  0% {
    margin-top: 0px;
  }

  15% {
    margin-top: 0px;
  }

  25% {
    margin-top: -70pt;
  }

  40% {
    margin-top: -70pt;
  }

  50% {
    margin-top: -140pt;
  }

  65% {
    margin-top: -140pt;
  }

  75% {
    margin-top: -210pt;
  }

  90% {
    margin-top: -210pt;
  }

  100% {
    margin-top: 0px;
  }
}


/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) and (max-width : 479px) {
  #textSlider.row {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  .iamCol {
    text-align: center;
    font-size: 20pt;
  }

  .iamCol p {
    display: inline !important;
  }

  .slideCol {
    font-size: 25pt;
    text-align: center;
    margin-top: -20px;
  }
}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) and (max-width : 765px) {
  #textSlider.row {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  .iamCol {
    text-align: center;
    font-size: 25pt;
  }

  .iamCol p {
    display: inline !important;
  }

  .slideCol {
    font-size: 38pt;
    text-align: center;
    margin-top: -20px;
  }
}

/* Small Devices, Tablets */
@media only screen and (min-width : 768px) and (max-width : 992px) {
  #textSlider.row {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  .iamCol {
    text-align: center;
    font-size: 30pt;
  }

  .iamCol p {
    display: inline !important;
  }

  .slideCol {
    font-size: 50pt;
    text-align: center;
    margin-top: 5px;
  }
}

/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) and (max-width : 1200px) {
  #textSlider.row {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  .iamCol {
    text-align: right;
    font-size: 30pt;
  }

  .slideCol {
    font-size: 55pt;
    text-align: left;
  }
}
</style>
