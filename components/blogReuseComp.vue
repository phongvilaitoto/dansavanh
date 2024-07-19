<template>
  <div class="max-width" style="padding: 0 30px 0 30px; min-height: 80vh">
    <div style="display: flex; justify-content: center">
      <div class="page-navigator" style="margin-top: 150px; width: 100%">
        <!-- navigator page  -->
        <a-row style="margin: 2rem 0 2rem" justify="space-between">
          <a-col :sm="24" :lg="12"
            ><span style="cursor: pointer" @click="$router.go(-1)">
              <i class="fa-regular fa-arrow-left"></i>&nbsp; Back</span
            >
            <span style="margin: 0 10px 0 10px; color: #a9a9a9">/</span>
            <span style="color: #a9a9a9">{{
              blog.titles[selectedIdx]
            }}</span></a-col
          >
          <a-col
            :sm="24"
            :lg="12"
            style="display: flex; justify-content: flex-end"
          >
            <SocialShare
              v-for="network in ['facebook', 'whatsapp', 'email']"
              :key="network"
              :network="network"
              :styled="true"
              :label="true"
              class="social-share"
            />
          </a-col>
        </a-row>
        <!-- navigator page  -->
        <div v-if="blog.img">
          <img style="width: 100%" :src="blog.img" alt="" />
          <br /><br />
        </div>
        <h1>{{ blog.titles[selectedIdx] }}</h1>
        <p>{{ blog.captions[selectedIdx] }}</p>

        <!-- <br><br>
        <img style="width: 100%; height:300px; object-fit: cover" src="https://lab-108-bucket.s3-ap-southeast-1.amazonaws.com/image-banner/4f779f44-4724-4d79-a696-1592f0552b66.jpeg" alt="">

        <br><br> -->
        <div v-html="blog.descriptions[selectedIdx]"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
const route = useRoute();
const router = useRouter();

import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

const { isComp } = defineProps(["isComp"]);

const config = useRuntimeConfig();

const store = useMainStore();

const { selectedIdx } = storeToRefs(store);

const blog = ref<any>({});

const { data }: any = await useFetch(
  config.public.apiBase + "/getDBlog/" + route.params.id
);
blog.value = data.value.dBlog;
</script>

<style lang="scss" scoped></style>
