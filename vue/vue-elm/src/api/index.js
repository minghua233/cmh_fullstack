import {
  get
} from './helper'

const getSeller = get('api/seller') // 获取商家信息的接口
const getGoods = get('api/goods')

export {
  getSeller,
  getGoods
}