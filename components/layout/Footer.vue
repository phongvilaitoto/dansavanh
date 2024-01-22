<template>
     <a-layout-footer style="text-align: center;padding: 0 50px;background-color:#13131b; color: #fdfdfd; ">
        <a-row style="padding: 40px 0;"  :sm="10" :md="8" :lg="6" :xl="2" :offset="6">
            <a-col :xs="24" :sm="24" :md="14" :lg="14" >
                <a-typography-paragraph>
                    <MobileOutlined />
                    VIP hotline: +856-20-58276666 - Tour hotline: +856-20-52241111 - Thai hotline: +66-92193-7777
                </a-typography-paragraph>
            </a-col>
            <a-col :xs="24" :sm="24" :md="6" :xl="6">
                <a-typography-paragraph>
                    <MailOutlined />
                    info@dansavanh.com
                </a-typography-paragraph>
            </a-col>
        </a-row>
        <a-row style="padding: 10px 20px;">
            <a-col :xs="24" :sm="24" :md="6" :lg="8">
            <a-typography-paragraph type="secondary" style="font-size: 12px; padding: 0 10px;">
                COPYRIGHT &copy; 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS
            </a-typography-paragraph>
            </a-col>
            <a-col :xs="24" :sm="24" :md="6" :lg="8" >
                <img src="/assets/image/logo-dansavanh2.png" alt="Image" style="max-width:120px;">
            </a-col>
            <a-col :xs="3" :sm="3" :md="3" :lg="3" style="min-height: 100px;"> 
                <a-menu mode="horizontal">
                    <a-menu-item>
                        <nuxt-link to="/">HOME</nuxt-link>
                    </a-menu-item>
                    <a-menu-item>
                        <nuxt-link to="/contact">CONTACT</nuxt-link>
                    </a-menu-item>
                </a-menu>
            </a-col>
        </a-row>
    </a-layout-footer>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

</script>

<style scoped>


</style>