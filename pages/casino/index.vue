<template>
  <HeaderTitle
    img="https://storage.googleapis.com/dsv-bucket/imgs/imgs/246eab63-3b9f-4118-a876-94bc2a075f59.jpg"
    :title="$t('ourResortsCasino')"
    :caption="$t('aMagicPlace')"
  />
  <a-layout-content style="padding: 20px 50px; margin-bottom: 20px">
    <div class="header">
      <span>CASINO</span>
      <img
        src="/assets/image/decoration-1.png"
        alt=""
        :style="{ height: '50px', display: 'block' }"
      />
    </div>
  </a-layout-content>
  <a-layout-content>
    <div class="blog">
      <a-row class="bg-left">
        <a-col :md="12" :lg="16" class="bg blackjack"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>{{ $t("casinoTitle1") }}</h2>
            <p>
              {{ $t("casinoCaption1") }}
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-right">
        <a-col :md="12" :lg="16" class="bg roulette"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>{{ $t("casinoTitle2") }}</h2>
            <p>
              {{ $t("casinoCaption2") }}
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-left">
        <a-col :md="12" :lg="16" class="bg baccarat"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>{{ $t("casinoTitle3") }}</h2>
            <p>
              {{ $t("casinoCaption3") }}
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-right">
        <a-col :md="12" :lg="16" class="bg dragonTiger"> </a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>{{ $t("casinoTitle4") }}</h2>
            <p>
              {{ $t("casinoCaption4") }}
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-left">
        <a-col :md="12" :lg="14" class="bg slots"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>{{ $t("casinoTitle5") }}</h2>
            <p>
              {{ $t("casinoCaption5") }}
            </p>
          </div>
        </a-col>
      </a-row>
    </div>
    <br /><br />
  </a-layout-content>
</template>

<script setup lang="ts">
import HeaderTitle from "@/components/HeaderTitle.vue";

useHead({
  title: "Casino",
  meta: [{ name: "description", content: "Casino" }],
});
</script>

<style lang="scss" scoped>
.cover {
  background-image: url("/assets/image/casino/casino-blackjack.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  // object-fit: contain;

  background-size: cover;
  position: relative;
  width: 100%;
  // min-height: 320px;
  height: 100%;

  background-position: center bottom !important;
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

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 30px;

  span {
    /* display: block; */
    // font-family: var(--font-family);
    font-size: 5rem;
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
    font-family: "Playfair Display", serif;
  }
}

.blog {
  background-color: #f4f4f4 !important;
  /* margin-top: 20px; */
  padding: 0 !important;

  .bg-left,
  .bg-right {
    border-radius: 6px;
    .bg {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      aspect-ratio: 16/9;
      width: 100%;
      max-width: 100%;
      height: 100%;
    }

    .text-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      z-index: 999;
    }
  }

  .bg-right {
    display: flex;
    flex-direction: row-reverse;
  }

  @media (min-width: 576px) {
    .bg-right .text-container {
      left: 5%;
    }

    .bg-left .text-container {
      right: 5%;
    }
  }
}

/* textbox  */
.text-box {
  justify-self: center;
  background-color: #fff;
  padding: 48px;
  color: #000;
  // border-radius: 3px;

  span {
    font-size: 13px;
    letter-spacing: 5px;
    opacity: 0.7;
    display: block;
  }

  h2 {
    font-weight: 700;
    margin: 20px 0;
    margin-top: 0 !important;
    // font-family: var(--font-family);
    text-transform: uppercase;
  }

  p {
    font-weight: 200;
    font-size: 16px;
    margin-bottom: 24px;
  }
}

/* box set up  */
.blackjack {
  background-image: url("/assets/image/casino/casino-blackjack.jpg");
}

.roulette {
  background-image: url("/assets/image/casino/casino-roulette.jpg");
}

.baccarat {
  background-image: url("/assets/image/casino/casino-baccarat.jpg");
}

.dragonTiger {
  background-image: url("/assets/image/casino/casino-dragontiger.jpg");
}

.slots {
  background-image: url("/assets/image/casino/casino-slots.jpg");
}
</style>
