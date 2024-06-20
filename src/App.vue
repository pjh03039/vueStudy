<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <spinner-view :loading=loadingState></spinner-view>
  </div>
</template>
<script>
import ToolBar from './components/ToolBar.vue';
import SpinnerView from './components/SpinnerView.vue';
import bus from './utils/bus.js'

export default {
  name: 'App',
  components: {
    ToolBar,
    SpinnerView,
  },
  data() {
    return {
      propsParam: "appHeader",
      loadingState: false,
    }
  },
  methods: { // 스피너 매서드로 변수 조정
    loadingShow() {
      this.loadingState = true;
    },
    loadingHide() {
      this.loadingState = false;
    }
  },
  created() { // 이벤트 생성
    bus.$on('start:spinner', this.loadingShow);
    bus.$on('end:spinner', this.loadingHide);
  },
  Destroyed() {
    bus.$off('start:spinner');
    bus.$off('end:spinner');

  } // 이벤트 끝날때 객체 제거
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link--exact-active {
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: opacity .5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
