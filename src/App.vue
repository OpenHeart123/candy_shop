<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.footGuideShow"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
   mounted() {
    // const result = reqFoodCategorys().then((response)=>{
    //     return response.data
    // });
    this.getAddress()
    this.getUserInfo()
   // this.getCategorys();
  },
  methods:{
   ...mapActions(['getAddress','getUserInfo'])
  },
  components: {
    FooterGuide
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.app {
  color: red;
}
</style>
