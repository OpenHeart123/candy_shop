/**
 通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopRatings,
  reqShopGoods,
  reqShopInfo,
  reqSearchShop
} from '../api'

export default {
  async getAddress({ commit, state }) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, { address })
    }
  },
  async getCategorys({commit}) {
    const result = await reqFoodCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }

  },
  async getShops({commit,state}) {
    const latitude=state.latitude
    const longitude=state.longitude
    const result = await reqShops(latitude,longitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }

  },
  //同步显示用户信息
  recodeUser({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  //异步获取用户信息
  async getUserInfo({commit}){
     const result=await reqUserInfo()
     if(result.code===0){
       const userInfo=result.data
       commit(RECEIVE_USER_INFO,{userInfo})
     }
  },
  //异步登录
  async logout({commit}){
     const result=await reqLogout()
     if(result.code===0){
      commit(RESET_USER_INFO)
    }

  },

  //异步点餐
  async getShopGoods({commit},callback){
    const result=await reqShopGoods()
    if(result.code===0){
      const goods=result.data
     commit(RECEIVE_GOODS,{goods})
     //数据更新了，通知一下组件
     callback && callback()
   }

 },
 //异步评价信息
 async getShopRatings({commit}){
  const result=await reqShopRatings()
  if(result.code===0){
    const ratings=result.data
   commit(RECEIVE_RATINGS,{ratings})
 }

},

//异步商家信息
async getShopInfo({commit}){
  const result=await reqShopInfo()
  if(result.code===0){
    const info=result.data
   commit(RECEIVE_INFO,{info})
 }

},


}
