<template>
    <div>

        <a-drawer :width="320" title="" :placement="'right'" :visible="visible" @close="$emit('onClose')">

            <LanguageSwitcher style="position: absolute; top: 8px; right: 10px"/>
            <NuxtLink to="/check" @close="emit('onClose')">
          
                <p class="line-hover">HOME</p>
               
            </NuxtLink>
            <br>

            <NuxtLink to="/check" @close="emit('onClose')">
             
                <p class="line-hover ">CASINO</p>
              
            </NuxtLink>

<br>

            <p class="line-hover">HOTELS</p>
            <div style="border-left: 1px solid white; padding: 10px; margin: 10px 0 10px;">
                <NuxtLink to="/check" @close="emit('onClose')">

                    <p class="line-hover small-text">DANSAVANH RESORT & CASINO</p>
            
                </NuxtLink>
                <NuxtLink to="/check" @close="emit('onClose')">
                    <p class="line-hover  small-text">DANSAVANH GOLF & COUNTRY CLUB</p>
                </NuxtLink>
                <NuxtLink to="/check" @close="emit('onClose')">
                    <p class="line-hover  small-text">DANSAVANH RESORT & CASINO</p>
                </NuxtLink>
            </div>


            <NuxtLink to="/check" @close="emit('onClose')">
                <p class="line-hover">EXPERIENCE</p>
            </NuxtLink>

            <br>

            <NuxtLink to="/check" @close="emit('onClose')">
                <p class="line-hover">EVENTS</p>
            </NuxtLink>

            <br>

            <NuxtLink to="/check" @close="emit('onClose')">
                <p class="line-hover">OFFER</p>
            </NuxtLink>

            <br>

            

            <p class="line-hover">MORE</p>
            <div style="border-left: 1px solid white; padding: 10px; margin: 10px 0 10px;">
                <NuxtLink to="/more/career" @close="emit('onClose')">
                    <p class="line-hover  small-text">CAREER</p>
                </NuxtLink>
                <br>
                <NuxtLink to="/gallery" @close="emit('onClose')">
                    <p class="line-hover  small-text">GALLERY</p>
                </NuxtLink>
                <br>
                <NuxtLink to="/more/news" @close="emit('onClose')">
                    <p class="line-hover  small-text">NEWS</p>
                </NuxtLink>
                
                </div>

                <NuxtLink to="/check" @close="emit('onClose')">
                <p class="line-hover">CONTACT</p>
            </NuxtLink>


       
            <h3 class="text-white" style="margin-top: 40px">ABOUT DANSAVANH</h3>
            <p class="text-white">Either you look for a luxurious experience or a remarkable on the go experience, Dansavanh Resort is the place to visit and spend the time at. We offer quality services.</p>



            <p class="text-white">VIP hotline : +856-20-58276666</p>
            <p class="text-white">Tour hotline: +856-20-52241111</p>
            <p class="text-white">Thai hotline: +66-92193-7777</p>


            <p class="text-white">info@dansavanh.com</p>


        </a-drawer>
    </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from '@/components/layout/LanguageSwitcher.vue'


const language = ref('')

const emit = defineEmits(['onClose'])

const { visible } = defineProps(['visible'])




const onLanguageChanged = () => {

}

</script>

<style scoped lang="scss">
.small-text {
    font-size: 12px;
}
</style>