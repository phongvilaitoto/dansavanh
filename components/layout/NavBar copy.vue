<template>
  <a-layout-header  :style="NavStyle">
    <nav>
    <a-flex gap="middle" horizontal justify="space-between">
      <div class="logo">
        <img src="/assets/image/logo-dansavanh4.png" alt="Image" style="max-height: 50px;">
      </div>
      <a-menu mode="horizontal" gap="middle" class="menuStyle">
        <a-menu-item>
          <nuxt-link to="/">HOME</nuxt-link>
        </a-menu-item>
        <a-menu-item>
          <nuxt-link to="/casino">CASINO</nuxt-link>
        </a-menu-item>
        <a-menu-item>
          <a-dropdown >
            <nuxt-link to="/hotels" class="ant-dropdown-link">
              HOTELS
              <DownOutlined />
            </nuxt-link>
            <template #overlay >
              <a-menu class="dropdrownMenu">
                <a-menu-item>
                  <nuxt-link to="/hotels/numngum">Dansavanh Resort & Casino</nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/hotels/golf">Dansavanh Golf & Country Club</nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/hotels/vientaine-hotel">Dansavanh Vientiane Hotel</nuxt-link>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-menu-item>
        <a-menu-item>
          <nuxt-link to="/experience">
            experience
          </nuxt-link>
        </a-menu-item>

        <a-menu-item>
          <nuxt-link to="/events">
            events
          </nuxt-link>
        </a-menu-item>

        <a-menu-item>
          <nuxt-link to="/offer">offer</nuxt-link>
        </a-menu-item>

        <a-menu-item>
          <a-dropdown>
            <nuxt-link class="ant-dropdown-link">
              more
              <DownOutlined />
            </nuxt-link>
            <template #overlay>
              <a-menu class="dropdrownMenu">
                <a-menu-item>
                  <nuxt-link to="/more/career">Career</nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/more/testimonials">Testimonials</nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/more/news">News</nuxt-link>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>  
        </a-menu-item>
        <a-menu-item>
          <nuxt-link to="/contact">
            contact
          </nuxt-link>
        </a-menu-item>
      </a-menu>
      <div class="langSW">LA</div>
    </a-flex>
  </nav>
  </a-layout-header>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const NavStyle: CSSProperties = {
height: "auto",
padding:"10px 20px",
backgroundColor:"rgba(23,23,32,.8) !important",
position:"absolute",
top:"0",
right:"0",
left:"0",
zIndex:"2"


}

</script>

<style scoped>
a{
text-transform: uppercase;
}

.menuStyle{
background-color: transparent;
}
.dropdrownMenu{
margin-top: 26px;
background-color:rgba(23,23,32,.8) !important;
}
</style>
