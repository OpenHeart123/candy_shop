<template>
    <footer class="footer_guide ">
      <span href="javascript:;" class="guide_item " :class="{on:isCurrent('/msite')}" @click="goto('/msite')">
        <span class="item_icon">
          <i class="iconfont icon-food"></i>
        </span>
        <span>外卖</span>
      </span>

      <span href="javascript:;" class="guide_item " :class="{on:isCurrent('/search')}" @click="goto('/search')">
        <span class="item_icon">
          <i class="iconfont icon-food"></i>
        </span>
        <span>搜索</span>
      </span>

      <span href="javascript:;" class="guide_item " :class="{on:isCurrent('/order')}" @click="goto('/order')">
        <span class="item_icon">
          <i class="iconfont icon-food"></i>
        </span>
        <span>订单</span>
      </span>

      <span href="javascript:;" class="guide_item " :class="{on:isCurrent('/profile')}" @click="goto('/profile')">
        <span class="item_icon">
          <i class="iconfont icon-food"></i>
        </span>
        <span>我的</span>
      </span>
    </footer>

</template>

<script>
export default {
     methods:{
       isCurrent:function(path){
          return this.$route.path===path;
       },
       goto:function(path){
         this.$router.replace(path);
       }
     }

};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
 @import "../../common/stylus/mixins.styl"
.footer_guide
  // 顶部有白色的边框
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px

</style>
