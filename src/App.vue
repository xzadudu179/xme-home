<script setup>
  import InfoItem from './components/InfoItem.vue';
  import IconNav from './components/IconNav.vue';
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  const glowStyle = ref({
      left: '0px',
      top: '0px'
  });
  const updateGlowPosition = (event) => {
      glowStyle.value.left = `${event.clientX - 250}px`;
      glowStyle.value.top = `${event.clientY - 250}px`;
  };
  onMounted(() => {
      document.addEventListener('mousemove', updateGlowPosition);
  });
  onBeforeUnmount(() => {
      document.removeEventListener('mousemove', updateGlowPosition);
  });

  const curYear = ref(new Date().getFullYear());
</script>

<template>
  <main>
    <div class="glow" :style="glowStyle"></div>
    <div class="container">
          <div class="card">
            <div class="avatar"></div>
            <div class="infos">
              <InfoItem>
                <template #title>
                  NAME:
                </template>
                <h1 id="chac-name">九镹-xzadudu179</h1>
              </InfoItem>
              <InfoItem>
                <template #title>
                  个人介绍:
                </template>
                <p>一只兽兽 owo</p>
                <p>想被别人发现，希望尝试新的东西</p>
                <p>喜欢太空、科幻、像素风格一类的东西~</p>
                <p>想做全栈，想展示自己的世界观（？</p>
              </InfoItem>
              <InfoItem>
                <template #title>
                  正在做/学习:
                </template>
                <IconNav name="Vue.js" icon-class="fa-brands fa-vuejs"></IconNav>
                |
                <IconNav name="Unity" icon-class="fa-brands fa-unity"></IconNav>
                |
                <IconNav name="Python" icon-class="fa-brands fa-python"></IconNav>
                |
                <IconNav name="C-sharp" icon-class="fa-brands fa-microsoft"></IconNav>
              </InfoItem>
              <a class="bloglink" target="_blank" href="https://blog.xzadudu179.top">
                <IconNav name="个人博客 >>" icon-class="fa-regular fa-planet-ringed"></IconNav>
              </a>
            </div>
        </div>
        <aside class="find-me">
          <a href="https://github.com/xzadudu179" target="_blank"><IconNav name="Github" icon-class="fa-brands fa-github" size="1.1" padding="0.35"></IconNav></a>
          |
          <a href="https://space.bilibili.com/70738350" target="_blank"><IconNav name="Bilibili" icon-class="fa-brands fa-bilibili" size="1.1" padding="0.3"></IconNav></a>
          |
          <a href="https://x.com/xzadudu179" target="_blank"><IconNav name="Twitter" icon-class="fa-brands fa-x-twitter" size="1.1"></IconNav></a>
          |
          <a href="mailto:terra179@163.com"><IconNav name="E-mail" icon-class="fa-regular fa-at" size="1.1"></IconNav></a>
        </aside>
    </div>
  </main>
  <footer>
    <p class="copyright">© 2024 - {{ curYear }} <IconNav name=" xzadudu179" icon-class="fa-regular fa-star fa-spin"></IconNav> All rights reserved</p>
  </footer>
</template>

<style scoped>

  /* .logo {
    filter: drop-shadow(0 0 10px var(--primary-color));
  } */

  .copyright {
    text-align: center;
    color: rgb(147, 148, 207);
    font-size: 1.1em;
    position: relative;
    bottom: 5px;
  }

  main {
    /* color: rgb(48, 48, 73); */
    /* color: rgb(212, 223, 255); */
    display: flex;
    height: 100%;
    place-items: center;
  }

  a {
    transition: color 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
  }

  a:hover {
    /* text-decoration: underline; */
    color: var(--primary-color);
    /* text-shadow: 0 0 2px var(--primary-color);+ */
  }

  .glow {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(
      circle
      135px
      at 250px 250px,
      rgba(224, 224, 255, 0.5),
      rgba(0, 0, 0, 0)
    );
    mix-blend-mode: overlay;
    pointer-events: none;
    transition: background-color 0.2s ease;
  }

  .find-me {
    margin: auto;
    width: 500px;
    padding-top: 20px;
    font-size: 1.2em;
    line-height: 0;
    text-align: center;
  }

  .container {
    width: 100%;
  }

  .bloglink {
    color: var(--primary-color);
    float: right;
    /* margin: 0 50px; */
    position: relative;
    top: 10px;
    right: 50px;
    font-size: 1.1em;
    font-weight: 500;
    text-decoration: none;
  }

  .card {
    width: 850px;
    max-width: 80%;
    /* height: 525px; */
    min-height: 300px;
    /* padding-right: 10px; */
    padding-left: 5px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    background-color: #2238;
    backdrop-filter: blur(10px);
    border-radius: 30px;
    transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
    box-shadow:
      2.4px 1.9px 3.2px -9px rgba(0, 0, 40, 0.008),
      4.3px 3.3px 7.6px -9px rgba(0, 0, 40, 0.014),
      5.9px 4.6px 13.8px -9px rgba(0, 0, 40, 0.02),
      7.5px 5.9px 23.5px -9px rgba(0, 0, 40, 0.029),
      10.1px 7.8px 39.9px -9px rgba(0, 0, 40, 0.045),
      18px 14px 80px -9px rgba(0, 0, 0, 0.09)
    ;
  }

  .card::after {
    transition: background 0.5s;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -10;
    width: 100%;
    height: 100%;
    /* 边框宽度 */
    padding: 5px;
    border-radius: 30px;
    /* background: linear-gradient(135deg, rgba(215, 113, 255, 0.528) 0%, rgba(61, 132, 255, 0.528) 100%); */
    background: conic-gradient(
      rgba(215, 113, 255, 0.528),
      rgba(61, 132, 255, 0.528) 50%,
      rgba(215, 113, 255, 0.528)
    );
    --mask-bg: linear-gradient(#999999, #179179);
    --mask-clip: content-box, padding-box;
    mask-image: var(--mask-bg), var(--mask-bg);;
    -webkit-mask-image: var(--mask-bg), var(--mask-bg);
    mask-origin: var(--mask-clip);
    -webkit-mask-origin: var(--mask-clip);
    mask-clip: var(--mask-clip);
    -webkit-mask-clip: var(--mask-clip);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
  }


  .infos {
    padding: 40px 0;
    padding-bottom: 33px;
    width: 450px;
    height: 100%;
  }

  .avatar {
    /* height: 100%; */
    margin: 20px 0;
    width: 40%;
    background: url("./assets/img/avatar.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: -20px;
    transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
  }

  .infos p, .infos span {
    font-size: 1.15em;
    line-height: 1.8em;
    /* font-family: 'Maiyuan'; */
  }

  .avatar:hover {
    filter: drop-shadow(0 0 15px #acbfff80);
    background-image: url("./assets/img/avatar2.png");
    /* border: 3px solid red; */
  }

  #chac-name {
    font-weight: 600;
    color: rgb(192, 198, 255);
    font-size: 2.7em;
    line-height: 1.2em;
    margin-top: -8px;
  }

</style>
