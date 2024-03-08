<template>
  <a-layout>
    <div class="cover">
      <div class="bg-cover"></div>
      <a-row
        style="
          padding-top: 35px;
          padding-bottom: 62px;
          text-align: left;
          justify-content: center;
          background-color: transparent;
        "
      >
        <a-col :span="20">
          <a-typography-title class="t1">CONTACT</a-typography-title>
        </a-col>
        <a-col :span="20">
          <span style="color: #fff"
            >Get in touch for a booking or a greeting</span
          >
        </a-col>
      </a-row>
    </div>
  </a-layout>
  <a-layout-content class="content-container">
    <a-row>
      <a-col
        :span="24"
        style="
          display: flex;
          justify-content: space-between;
          align-content: center;
        "
      >
        <a-breadcrumb style="margin: 16px 10px">
          <a-breadcrumb-item
            ><nuxt-link to="/">Home</nuxt-link></a-breadcrumb-item
          >
          <a-breadcrumb-item>CONTACT</a-breadcrumb-item>
        </a-breadcrumb>
        <a style="margin: 16px 10px" href="#" target="_blank"> Facebook Link</a>
      </a-col>
    </a-row>

    <div :style="{ padding: '24px', minHeight: '280px' }">
      <a-row>
        <a-col :span="24" class="map-container">
          <div class="map"></div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :lg="24" class="contact-container">
          <div class="text-box">
            <h3>DANSAVANH LOCATION</h3>
            <h4>GETTING HERE</h4>
            <p style="text-align: center">
              Wattay Airport – Look out for Dansavanh Meet & Greet counter at
              the arrival hall.
              <br />
            </p>
            <p style="text-align: center">
              Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am,
              13:30 pm and 19:00 pm<br />
            </p>
            <p style="text-align: center">
              Dansavanh Vientiane Hotel – Daily departure starting from 6:30 am
              till 12:30 am at 2 hours interval<br />
            </p>
            <p style="text-align: center">
              A private limousine can be arranged via VIP hotline<br />
            </p>
            <p style="text-align: center">
              <a href="https://wa.me/8562052241111" target="_blank"
                ><b>click here</b></a
              >Please to contact us on WhatsApp:&nbsp;<span
                style="font-family: Calibri, sans-serif; font-size: 11pt"
                ><a href="https://wa.me/8562052241111" target="_blank"
                  ><b>+8562052241111</b></a
                ></span
              ><br />
            </p>
            <p style="text-align: center">
              <span lang="EN"
                >&nbsp;You may also contact us on&nbsp;<b
                  ><a href="weixin://dl/chat?+85602058276666" target="_blank"
                    >+8560205827</a
                  >5555</b
                ></span
              >
            </p>
            <p style="text-align: center">
              <b>Email: Marketing@dansavanh.com</b>
            </p>
            <p style="text-align: center">
              <a
                href="https://www.instagram.com/dansavanhnamngumresort/"
                target="_blank"
                ><b>Follow us here on Instagram!</b></a
              ><span lang="EN"><b></b><o:p></o:p></span>
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row justify="center" :gutter="20">
        <a-col :sm="24" :md="12" :lg="6" class="icon_block">
            <CarOutlined class="icon" />
          <h4 style="font-weight: 700;">SHUTTLE BUS</h4>
          <img class="img" src="/assets/image/contact/bus2.png" />
        </a-col>
        <a-col :sm="24" :md="12" :lg="6" class="icon_block">
            <PhoneOutlined class="icon" />
          <h4 style="font-weight: 700;">TELEPHONE</h4>
          <p style="font-weight: 600 !important;">
            For instant info<br /><br />
            <span class="nmr">Dansavanh Vientiane Hotel:</span>
            <span class="nmr2">+856 21 217 595</span><br />
            <span class="nmr">Dansavanh Resort &amp; Casino:</span>
            <span class="nmr2">+856 20 5827 5555</span><br />
            <span class="nmr">Dansavanh Thai Office:</span>
            <span class="nmr2">+6684-604-0827</span>
          </p>
        </a-col>
        <a-col :sm="24" :lg="6" class="icon_block">
            <RedEnvelopeOutlined class="icon" />
          <h4 style="font-weight: 700;">E-MAIL</h4>
          <p style="font-weight: 600 !important;">
            If you are on the go and wish to enquire.<br /><br />
            info@dansavanh.net
          </p>
        </a-col>
      </a-row>
      <div class="line-header">
        <span>CONTACT FORM </span>
        <img
          src="/assets/image/decoration-1.png"
          alt=""
          :style="{ height: '50px', display: 'block' }"
        />
      </div>
    </div>
  </a-layout-content>
</template>

<script setup lang="ts"></script>

<style scoped>
.line-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  min-height: 60px;
  /* border: 10px solid red; */
  span {
    /* display: block; */
    font-family: var(--font-family);
    font-size: 70px;
    position: absolute;
    top: 24px;
    /* left: 0;
    right: 0; */
    line-height: 0 !important;
    pointer-events: none;
    -webkit-pointer-events: none;
    -moz-pointer-events: none;
    -ms-pointer-events: none;
    -o-pointer-events: none;
    opacity: 0.03;
  }
}

a {
  color: #000;
}

.t1 {
  margin-top: 50px;
  font-size: 41px;
  font-family: var(--font-family);
  font-weight: 700;
  margin-bottom: 0;
}
.cover {
  background-image: url("/assets/image/hotels/casino34.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* min-height: 300px; */
  position: relative;
  .bg-cover {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.map-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  .map {
    display: grid;
    place-content: center;
    background-color: #6e6e6e;
    color: #fff;
    /* display: block; */
    width: 100%;
    height: 100%;
    aspect-ratio: 16/10;
  }
}
h4 {
  margin-top: 0 !important;
}
h3,
h4 {
  margin-top: 24px;
  font-weight: 400;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 12px;
  font-family: var(--font-family) !important;
}
/* card  */
.contact-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;

  .text-box {
    /* border: 1px solid red; */
    justify-self: center;
    text-align: center;
    /* background-color: #fff; */
    padding: 10px;
    color: #000;
    border-radius: 3px;

    p {
      font-weight: 200;
      font-size: 16px;
      color: #313131;
    }
  }
}

.icon_block {
  margin:20px 10px;
  width: 100%;
  text-align: center;
    
  .icon{
    font-size: 40px;
    margin-bottom: 20px;
  }
  .img {
    /* width: 100%; */
    display: block;
    max-width: 100%;
  }
  .nmr{
    float: left;
  }
  .nmr2{
    float: right;
  font-weight: 500;
  }

}
</style>
