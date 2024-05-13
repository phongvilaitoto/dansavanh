<template>
     <a-layout-footer style="background-color:#13131b; color: #fdfdfd; ">
        <a-row justify="center"

        style="padding: 100px 80px 100px 80px"
        
          :sm="10" :md="8" :lg="6" :xl="2" :offset="6">
            <a-col :xs="24" :sm="24" :md="14" :lg="14" >
                <a-typography-paragraph>
                    <MobileOutlined />
                    VIP hotline: +856-20-58276666 
                    <br>
                     Tour hotline: +856-20-52241111 
                     <br>
                      Thai hotline: +66-92193-7777
                </a-typography-paragraph>
            </a-col>
            <a-col :xs="24" :sm="24" :md="6" :xl="6">
                <a-typography-paragraph>
                    <MailOutlined />
                    info@dansavanh.com
                </a-typography-paragraph>
            </a-col>
        </a-row>
        <a-row justify="space-between" style="padding: 0 20px 0 20px;">
            <a-col :xs="24" :sm="24" :md="6" :lg="8">
            <a-typography-paragraph type="secondary" style="font-size: 12px; padding: 0 10px;">
                COPYRIGHT &copy; 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS
            </a-typography-paragraph>
            </a-col>
            <a-col :xs="24" :sm="24" :md="6" :lg="8" style="text-align: center;">
                <img src="/assets/image/logo-dansavanh2.png" alt="Image" style="max-width:120px;">
            </a-col>
            <a-col :xs="3" :sm="3" :md="3" :lg="8"> 
               <ul class="footer-nav">
                <li>
                    <nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link>
                    <nuxt-link  :to="localePath('/contact')">{{$t('contact')}}</nuxt-link>
                </li>
               </ul>
            </a-col>
        </a-row>
    </a-layout-footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped lang="scss">
a{
    text-decoration: none;
}
li{
    list-style: none;
}

.footer-nav{
   
    /* text-align: right; */
    li{
        /* border: 1px solid red; */
        display: flex;
        gap: 10px;
        justify-content: flex-end;
       a{
        color: #fdfdfd !important;
        font-size: 0.7rem;
       }
    }
}
</style>