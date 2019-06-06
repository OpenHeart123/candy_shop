/**
 * 利用mock生成模拟数据
 */

 import Mock from 'mockjs'
 import data from './data.json'
//生成goods模拟数据
 Mock.mock('/goods',{code:0,data:data.goods})

 Mock.mock('/ratings',{code:0,data:data.ratings})

 Mock.mock('/info',{code:0,data:data.info})

 //不需要向外暴露
