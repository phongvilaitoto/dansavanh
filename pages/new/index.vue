<template>
  <a-layout-content class="content-container max-width">
    <div class="line-header">
      <h1 class="headerTitle">New page title</h1>
      <img
        src="/assets/image/decoration-1.png"
        alt=""
        :style="{ height: '50px', display: 'block' }"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        accusamus commodi expedita iste qui quas ratione! Cum architecto
        repudiandae cupiditate.
      </p>
    </div>
    <!-- <div :style="{ padding: '0 24px', minHeight: '280px' }"></div> -->
    <a-row class="blog-container" :gutter="[48, 16]">
      <a-col class="blog" :sm="24" :lg="12" v-for="i in 4">
        <div class="cover">
          <img
            src="https://www.aman.com/sites/default/files/styles/slider_cards_equals_extra_large/public/2021-03/Amantaka%2C%20Laos%20-%20Resort%20Pool.jpg?itok=KG7qbXBH"
            alt="blog image"
          />
        </div>
        <div class="content">
          <span class="tag">Tag name</span>
          <h3>blog title</h3>
          <span class="date">Until 30 jun 2024</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            officiis assumenda at iusto error molestiae saepe voluptatum, amet
            tempora ea!
          </p>
          <div class="btn-group">
            <a href="#">
              <button class="btn btn-2 hover-slide-up">
                <span>{{ $t("more") }}</span>
              </button>
            </a>
          </div>
        </div>
      </a-col>
    </a-row>
  </a-layout-content>
</template>
<script setup lang="ts">
useHead({
  title: "New Page",
  meta: [{ name: "description", content: "New Page" }],
});
</script>

<style scoped lang="scss">
.content-container {
  margin-top: 180px;
  @media (max-width: 567px) {
    margin-top: 90px;
  }
}
/* top header  */
.line-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  min-height: 60px;
  /* border: 10px solid red; */
  padding-bottom: 50px;
  span {
    /* display: block; */
    font-family: var(--font-family);
    font-size: 30px;
    bottom: 30px;
    /* left: 0;
    right: 0; */
    line-height: 0 !important;
    pointer-events: none;
    -webkit-pointer-events: none;
    -moz-pointer-events: none;
    -ms-pointer-events: none;
    -o-pointer-events: none;
    position: absolute;
    opacity: 0.03;
    @media (min-width: 567px) {
      font-size: 60px;
    }
  }
  p {
    padding: 0 2rem;
  }
}
.blog-container {
  padding: 1.5rem;
  .blog {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    .cover {
      img {
        aspect-ratio: 16/10;
        // display: block;
        object-fit: cover;
        height: auto;
        max-width: 100%;
      }
    }

    //content
    .content {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      @media (max-width: 576px) {
        padding: 1rem;
      }
      .tag {
        margin-bottom: 1rem;
        font-size: 0.722rem;
        text-transform: uppercase;
        letter-spacing: 0.1428571429rem;
      }
      h3 {
        margin-bottom: 0.5rem;
      }
      .date {
        margin-bottom: 1rem;
      }
      p {
        line-height: 1.45;
        color: #313131;
        letter-spacing: 0.0571428571rem;
        overflow-wrap: break-word;
      }
    }
  }
}
</style>
