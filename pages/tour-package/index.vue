<template>
  <a-layout>
    <div class="cover">
      <div class="bg-cover"></div>
      <a-row
        justify="center"
        style="
          padding-top: 180px;
          padding-bottom: 62px;
          text-align: center;
          background-color: transparent;
        "
      >
        <a-col :span="14">
          <h5 class="headerT2">
            {{ $t("tourPackageSubTitle") }}
          </h5>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12">
          <h1 class="headerT1">
            {{ $t("tourPackageTitle") }}
          </h1>
        </a-col>
      </a-row>
    </div>
  </a-layout>
  <a-layout-content class="content-container max-width">
    <a-row justify="center">
      <a-col :span="24">
        <hr style="border: 0; margin-top: 24px; border-top: 1px solid #eee" />
      </a-col>
      <a-col :span="24" style="text-align: center; justify-content: center">
        <h1 class="headerTitle text-uppercase" style="margin-top: 30px">
          {{ $t("tourPackage") }}
        </h1>
      </a-col>
      <a-col
        :span="24"
        style="
          align-content: center;
          justify-content: center;
          display: flex;
          margin-top: 20px;
        "
      >
        <img
          src="/assets/image/decoration-1.png"
          alt=""
          :style="{ width: '160px', margin: '20xp 0 0 ' }"
        />
      </a-col>
    </a-row>
    <div :style="{ padding: '24px', minHeight: '280px' }">
      <div class="career_box">
        <div
          class="text-box cursor"
          style="margin: 10px 10px 10px 10px; display: flex"
          @click="router.push(localePath('/more/career') + '/' + i._id)"
          v-for="i in blogs"
          :key="i"
        >
          <img
            style="width: 100%; height: 300px"
            src="https://storage.googleapis.com/dsv-bucket/imgs/imgs/9b5773e0-906b-4566-988b-2d6242182066.jpg"
            alt=""
          />
          <div style="margin-left: 20px; margin-top: 80px">
            <h3 class="text-uppercase">{{ i.titles[selectedIdx] }}</h3>
            <p>{{ i.captions[selectedIdx] }}</p>
          </div>
        </div>
      </div>
    </div>
  </a-layout-content>
</template>

<script setup lang="ts">
const router = useRouter();

import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

const localePath = useLocalePath();

const config = useRuntimeConfig();

const store = useMainStore();
const { isOddFunc } = store;
const { selectedIdx } = storeToRefs(store);

const blogs = ref<any>([]);

const { data }: any = await useFetch(
  config.public.apiBase + "/getDBlogs?type=Jobs"
);
blogs.value = data.value.dBlogs;
useHead({
  title: "Tour package",
  meta: [{ name: "description", content: "Tour package" }],
});
</script>

<style scoped lang="scss">
.cover {
  background-image: url("https://storage.googleapis.com/dsv-bucket/imgs/imgs/f475dd95-133e-409e-bf3b-81ab7584da43.jpg");
  /* background-attachment: fixed;   */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 300px;
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

/* career_box */
.career_box {
  border: 2px solid #000;
  padding: 10px;
  margin-bottom: 20px;

  .text-box {
    margin-bottom: 20px;
    border: 10px;
    border-bottom: 1px solid #dad8d1;
    h3 {
      font-weight: 900;
      font-size: 25px;
    }
  }
}
</style>
