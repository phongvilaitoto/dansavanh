<template>
  <a-layout>
    <div class="cover">
      <div class="bg-cover"></div>
      <a-row
      
        style="
        padding-top: 160px;
            padding-bottom: 50px;
            text-align:left;
            justify-content: center;
            background-color: transparent;
        "
      >
        <a-col :span="22">

          <h1 class="headerT1" style="font-size: 65px">
            {{$t('contactTitle')}}
            </h1>
          <!-- <a-typography-title class="t1">CONTACT</a-typography-title> -->
        </a-col>
        <a-col :span="22">
          <h5 class="headerT2" style="margin-top: -20px">
       {{$t('contactSubTitle')}}
      </h5>
          <!-- <span style="color: #fff"
            >Get in touch for a booking or a greeting</span
          > -->
        </a-col>
      </a-row>
    </div>
  </a-layout>
  <a-layout-content class="
  max-width
  content-container">
  

    <a-row justify="end" style="margin-top: 50px">

      <a-col
        :span="24"
      
      >

      <div style="margin: 2rem 0 2rem">
          <span style="cursor: pointer" @click="$router.push(localePath('/'))">HOME</span> 
          <span style="margin: 0 10px 0 10px;color: #A9A9A9;">/</span> 
          <span style="color: #A9A9A9;">CONTACT</span>
        </div>

      </a-col>
      <a-col>
        <a
         
         href="https://www.facebook.com/casino.dansavanh"
         target="_blank"
       >
         <img src="assets/image/contact/fb2.png" alt=""></a>
      </a-col>
    </a-row>

    <div :style="{  minHeight: '280px' }">
      <!-- map  -->
      <a-row>
        <a-col :span="24" class="map-container">
        <h3>{{$t('clickOnMarker')}}</h3>
          <GmapVue />
        </a-col>
      </a-row>
      <a-row>
        <a-col :lg="24" class="contact-container">
          <div class="text-box">
            <h3 style="margin-bottom: 15px">{{$t('dLocation')}}</h3>
            <h4 style="margin-bottom: 15px">{{$t('gettingHere')}}</h4>
            <p  style="text-align: center">
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
              Please <a href="https://wa.me/8562052241111" target="_blank"
                ><b>click here</b></a
              > to contact us on WhatsApp:&nbsp;<span
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
              >
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row justify="center" :gutter="20" >
        <a-col :sm="24" :md="12" :lg="8" >
          <div class="icon_block">
          <CarOutlined class="icon" />
          <h4 style="font-weight: 700">{{$t('shuttleBus')}}</h4>
          <img class="img" src="/assets/image/contact/bus2.png" />
          </div>
        </a-col>
        <a-col :sm="24" :md="12" :lg="8" >
          <div class="icon_block">
          <PhoneOutlined class="icon" />
          <h4 style="font-weight: 700">{{$t('tel')}}</h4>
          <p style="font-weight: 600 !important; font-size: 16px;">
            {{ $t('telInfo') }}<br /><br />
            <span class="nmr">{{ $t('tel1') }}:</span>
            <span class="nmr2">+856 21 217 595</span><br />
            <span class="nmr">{{ $t('tel2') }}:</span>
            <span class="nmr2">+856 20 5827 5555</span><br />
            <span class="nmr">{{ $t('tel3') }}:</span>
            <span class="nmr2">+6684-604-0827</span>
          </p>
          </div>
        </a-col>
        <a-col :sm="24" :md="12" :lg="8">
        <div class="icon_block">
          <RedEnvelopeOutlined class="icon" />
          <h4 style="font-weight: 700">{{ $t('email') }}</h4>
          <p style="font-weight: 600 !important">
            {{ $t('emailInfo') }}<br /><br />
            info@dansavanh.net
          </p>
        </div>
          
        </a-col>
      </a-row>
      <!-- <div class="line-header">
        <h2>CONTACT FORM </h2>
        <img
          src="/assets/image/decoration-1.png"
          alt=""
          :style="{ height: '50px', display: 'block' }"
        />
      </div> -->
    </div>
  </a-layout-content>
  <a-row justify="center"  style="background: white; padding: 100px 20px 100px 20px">
    
  <a-col>
    <div class="text-center" style="max-width: 750px; margin: auto">
      <h1 class="text-bold" style="font-size: 40px">{{$t('contactForm')}}</h1>
    <p style="font-size: 20px; " class="text-thin">{{$t('contactFormCaption')}}</p>

     <img style="width: 200px; margin: 30px 0 30px" src="/assets/image/decoration-1.png" alt="" />
    </div>
    
    <div>
      <input v-model="formState.user.name" type="text" class="input" :placeholder="$t('formName')"/>
      <input v-model="formState.user.phone" type="text" class="input" :placeholder="$t('formPhone')"/>
      <input v-model="formState.user.email" type="text" class="input" :placeholder="$t('formEmail')"/>
      <textarea v-model="formState.user.message" type="text" class="input" rows="6" :placeholder="$t('formMessage')"/>
      <div class="text-center">
        <button class="btn btn-2 hover-slide-up"
            @click="submit"
            >
        <span>{{$t('formSubmit')}}</span>
      </button>
      </div>
    </div>
  </a-col>
    
  </a-row>
  <!-- <a-layout-content style="background-color: #fff; padding: 1rem">
    <a-row>
      <a-col :span="24" style="text-align: center">
        <a-typography-title
          style="
            font-family: var(--font-family) !important;
            text-transform: uppercase;
          "
          >Contact form</a-typography-title
        >
        <p>
          You can still contact us, right here - right now. Use this contact
          form to send an e-mail. Usually we respond in 1 business day.
        </p>
        <img style="width: 200px" src="/assets/image/decoration-1.png" alt="" />
      </a-col>
    </a-row>
    <a-row class="content-container" justify="center">
      <a-col
        :span="18"
        :lg="{ offset: 6 }"
        :md="{ offset: 6 }"
        :sm="{ offset: 3, span: 24 }"
        :xs="{ offset: 0, span: 24 }"
      >
        <div>
          <a-form
            :model="formState"
            v-bind="layout"
            name="nest-messages"
            :validate-messages="validateMessages"
            @finish="onFinish"
          >
            <a-form-item :name="['user', 'name']" :rules="[{ required: true }]">
              <a-input v-model:value="formState.user.name" placeholder="Name" />
            </a-form-item>
            <a-form-item
              :name="['user', 'phone']"
              :rules="[
                {
                  required: true,
                  min: 8,
                  message: 'Please enter a valid phone number!',
                },
              ]"
            >
              <a-input
                v-model:value="formState.user.phone"
                placeholder="phone number"
              />
            </a-form-item>
            <a-form-item :name="['user', 'email']" :rules="[{ type: 'email' }]">
              <a-input
                v-model:value="formState.user.email"
                placeholder="Email"
              />
            </a-form-item>

            <a-form-item :name="['user', 'message']">
              <a-textarea
                v-model:value="formState.user.message"
                placeholder="Message"
              />
            </a-form-item>
            <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
              <a-button type="primary" html-type="submit">Submit</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </a-layout-content> -->
  <a-layout-content>
    <a-row class="content-container subscription "
    justify="center"
    
     style="height: 450px;">
      <a-col :span="24">
       <div class="text-center">
        <h1 class="text-white" style="font-size: 40px">{{$t('newsLetter')}}</h1>
        <p class=" text-white " style="font-size: 20px">
          {{$t('newsLetterCaption')}}
        </p>
       </div>
      </a-col>
      <a-col :span="24">
        <!-- subscription form -->
        <div
          class="subscrip-form "
          style=" width: 100%"
        
        >
          <div class="input-container" style="max-width: 600px; margin: auto;">
          <input v-model="formState.subscriber.email" type="text" class="input" :placeholder="$t('newsLetterEmail')">
          <button class="btn btn-2 hover-slide-up"
            style="background: #6fb586; height: 55px;"
            @click="submit"
            >
        <span>{{$t('newsLetterSubmit')}}</span>
      </button>

            <!-- <a-form-item
              :name="['subscribe', 'email']"
              :rules="[{ required: true }]"
            >
              <a-input
                placeholder="Email address"
                v-model:value="formState.subscribe.email"
              />
            </a-form-item>
            <a-button type="primary" html-type="submit">Subscribe</a-button> -->
          </div>
        </div>
      </a-col>
      
    </a-row>
    
  </a-layout-content>
</template>
<script setup lang="ts">
import GmapVue from "~/components/contact/Gmap.vue";
import type { UnwrapRef } from "vue";
import type { Rule } from "ant-design-vue/es/form";
import { reactive } from "vue";
import { notification }  from 'ant-design-vue';

const localePath = useLocalePath()

const openNotificationWithIcon = (type: string) => {
  const noti: any = notification
  noti[type] ({
        message: 'Thank you! Your email is sent.',
        description:
          'Thank you! Your email is sent.',
      });
    };


    const submit = () => {
      formState.user = {
          name: "",
          email: "",
          phone: "",
          message: "",
      }
      formState.subscriber = {
        email: ''
      }
      openNotificationWithIcon('success')
    }

const layout = {
  wrapperCol: { span: 16 },
};
const layoutForm = {
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "${name} is not a valid email!",
  },
  number: {
    range: "${name} must be between ${min} and ${max}",
  },
};

const formState = reactive({
  user: {
    name: "",
    email: "",
    phone: "",
    message: "",
  },
  subscriber: {
    email: "",
  },
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const onSubscribeFinish = (values: any) => {
  console.log("Success:", values);
};
</script>

<style scoped lang="scss">
p {
  font-weight: 400 !important;
}
.subscription {
  background-image: url("assets/image/contact/newsletter-banner-1.jpg");
  background-size: cover;
  padding-top: 92px;
  padding-bottom: 92px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.3);

  .subscrip-header {
    color: #fff;
    text-align: center;
    h1 {
   
      font-weight: 700;
      margin: 0;
    }
  }

  .subscrip-form {
    .input-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
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
  font-weight: 700;
  margin-bottom: 0;
  color: #fff;
}
.cover {
  background-image: url("/assets/image/contact/page-head-3.jpg");
  // background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 320px;
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

}

h4 {
  font-size: 18px;
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
  margin: 20px 10px;
  width: 100%;
  text-align: center;

  .icon {
    font-size: 40px;
    margin-bottom: 20px;
  }
  .img {
    /* width: 100%; */
    display: block;
    max-width: 100%;

  }
  .nmr {
    font-size: 16px;
    float: left;
  }
  .nmr2 {
    font-size: 16px;
    float: right;
    font-weight: 500;
  }
}

.form-container {
  /* border: 10px solid red; */
  padding: 0 5rem;
}
</style>