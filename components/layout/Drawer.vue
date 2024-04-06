<template>
    <div>

        <a-drawer :width="320" title="" :placement="'right'" :visible="visible" @close="$emit('onClose')">

            <LanguageSwitcher style="position: absolute; top: 8px; right: 10px"/>
            <NuxtLink
            :to="localePath('/')"
             @close="emit('onClose')">
          
                <p class="line-hover">{{ $t('home') }}</p>
               
            </NuxtLink>
            <br>

            <NuxtLink  :to="localePath('/casino')" @close="emit('onClose')">
             
                <p class="line-hover ">{{ $t('casino') }}</p>
              
            </NuxtLink>

<br>

<NuxtLink
:to="localePath('/hotels')"
 @close="emit('onClose')">
            <p class="line-hover">{{ $t('hotels') }}</p>
            </NuxtLink>
            <div style="border-left: 1px solid white; padding: 10px; margin: 10px 0 10px;">
                <NuxtLink
                :to="localePath('/hotels/numngum')"
                 @close="emit('onClose')">

                    <p class="line-hover small-text">{{$t('hotelTab1')}}</p>
            
                </NuxtLink>
                <br>
                <NuxtLink
                :to="localePath('/hotels/golf')"
                 @close="emit('onClose')">
                    <p class="line-hover  small-text">{{$t('hotelTab2')}}</p>
                </NuxtLink>
                <br>
                <NuxtLink 
                :to="localePath('/hotels/vientaine-hotel')"
               @close="emit('onClose')">
                    <p class="line-hover  small-text">{{$t('hotelTab3')}}</p>
                </NuxtLink>
            </div>


            <NuxtLink 
            :to="localePath('/experience')"
           @close="emit('onClose')">
                <p class="line-hover">{{ $t('experience') }}</p>
            </NuxtLink>

            <br>

            <NuxtLink 
            
            :to="localePath('/events')"
            @close="emit('onClose')">
                <p class="line-hover">{{ $t('events') }}</p>
            </NuxtLink>

            <br>

            <NuxtLink 
            :to="localePath('/offer')"
             @close="emit('onClose')">
                <p class="line-hover">{{ $t('offer') }}</p>
            </NuxtLink>

            <br>

            

            <p class="line-hover">{{ $t('more') }}</p>
            <div style="border-left: 1px solid white; padding: 10px; margin: 10px 0 10px;">
                <NuxtLink
                :to="localePath('/more/career')"
               @close="emit('onClose')">
                    <p class="line-hover  small-text">{{$t('careerTitle')}}</p>
                </NuxtLink>
                <br>
                <NuxtLink
                :to="localePath('/gallery')"
                @close="emit('onClose')">
                    <p class="line-hover  small-text">{{$t('gallery')}}</p>
                </NuxtLink>
                <br>
                <NuxtLink
                :to="localePath('/news')"
                 @close="emit('onClose')">
                    <p class="line-hover  small-text">{{ $t('newsTitle') }}</p>
                </NuxtLink>
                
                </div>

                <NuxtLink 
                :to="localePath('/contact')"
               @close="emit('onClose')">
                <p class="line-hover">{{ $t('contact') }}</p>
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

const localePath = useLocalePath()



const onLanguageChanged = () => {

}

</script>

<style scoped lang="scss">
.small-text {
    font-size: 12px;
}
</style>