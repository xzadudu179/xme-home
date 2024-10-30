<script setup>
import InfoItem from './components/InfoItem.vue';
import IconNav from './components/IconNav.vue';
</script>

<template>
  <main>
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
            个人博客 >>
          </a>
        </div>
    </div>
    <footer class="find-me">
      <a href=""><IconNav name="Vue.js" icon-class="fa-brands fa-vuejs"></IconNav></a>
    </footer>
</div>
  </main>
</template>

<style scoped>

  /* .logo {
    filter: drop-shadow(0 0 10px var(--primary-color));
  } */

  main {
    color: rgb(48, 48, 73);
    display: flex;
    height: 100%;
    place-items: center;
  }

  .find-me {
    margin: auto;
    width: 500px;
    padding-top: 20px;
    font-size: 1.2em;
    line-height: 0;
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
    padding-right: 10px;
    padding-left: 5px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    background-color: #fff6;
    backdrop-filter: blur(20px);
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
    background: linear-gradient(135deg, rgba(215, 113, 255, 0.508) 0%, rgba(61, 132, 255, 0.508) 100%);
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
    width: 470px;
    height: 100%;
  }

  .avatar {
    /* height: 100%; */
    margin: 20px 0;
    width: 40%;
    background: url("./assets/img/avatar.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: -40px;
    transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
  }

  .infos p, .infos span {
    font-size: 1.2em;
    line-height: 1.8em;
    /* font-family: 'Maiyuan'; */
  }

  .avatar:hover {
    filter: drop-shadow(0 0 15px #acd0ff80);
    background-image: url("./assets/img/avatar2.png");
    /* border: 3px solid red; */
  }

  #chac-name {
    font-weight: 600;
    color: rgb(67, 67, 107);
    font-size: 2.7em;
    line-height: 1.2em;
    margin-top: -8px;
  }

</style>
