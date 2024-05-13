<template>
    <div style="margin-bottom: 50px">
        <a-layout>
            <div class="cover" :style="`background-image: url('${img}')`">
                <div class="bg-cover"></div>
                <a-row justify="center" style="
          padding-top: 180px;
          padding-bottom: 62px;
          text-align: center;
          background-color: transparent;
        ">
                    <a-col :span="14">
                        <h5 class="headerT2">
                            {{ caption }}
                        </h5>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="24" :lg="12">

                        <h1 class="headerT1">
                            {{ title }}
                        </h1>

                    </a-col>
                </a-row>
            </div>
        </a-layout>
    </div>
</template>

<script setup lang="ts">

const { title, caption, img } = defineProps(['title', 'caption', 'img'])

</script>

<style scoped lang="scss">
.cover {

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;

    background-size: cover;
    position: relative;
    width: 100%;
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
        font-size: 140px;
        position: absolute;
        top: 24px;
        line-height: 0 !important;
        pointer-events: none;
        -webkit-pointer-events: none;
        -moz-pointer-events: none;
        -ms-pointer-events: none;
        -o-pointer-events: none;
        opacity: 0.03;
    }
}
</style>