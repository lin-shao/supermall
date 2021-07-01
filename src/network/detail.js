import {request} from "@/network/request";

export function getDetail(iid){
  return request({
    url:'detail',
    params:{
      iid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,shopInfo) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop{
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.fan = shopInfo.cFans
    this.good = shopInfo.cGoods
    this.sell = shopInfo.cSells
    this.score = shopInfo.score
  }
}

export class Param{
  constructor(info,rule) {
    this.info = info.set
    this.rule = rule.tables
  }
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}
