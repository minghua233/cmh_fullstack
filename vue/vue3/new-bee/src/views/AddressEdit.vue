<template>
  <div class="address-edit-box">
    <simple-header-vue :name="type == 'add' ? '新增地址' : '修改地址'"></simple-header-vue>
    <van-address-edit
      :area-list="areaList"
      :show-delete="type == 'edit'"
      show-set-default
      show-search-result
      :address-info="addressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { tdist } from '../common/js/utils'
import { addAddress, EditAddress, getAddressDetail, DeleteAddress } from '../service/address'
import SimpleHeaderVue from '../components/SimpleHeader.vue'
import { Toast } from 'vant'
import { useRouter, useRoute } from 'vue-router'

export default {
  components: {
    SimpleHeaderVue
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {}
      },
      type: route.query.type,
      addressId: route.query.addressId,
      addressInfo: {}
    })

    onMounted(async () => {
      // 获取省市区
      let _province_list = {}
      let _city_list = {}
      let _county_list = {}
      tdist.getLev1().forEach(p => {
        _province_list[p.id] = p.text
        tdist.getLev2(p.id).forEach(c => {
          _city_list[c.id] = c.text
          tdist.getLev3(c.id).forEach(c => _county_list[c.id] = c.text)
        })
      })
      state.areaList.province_list = _province_list
      state.areaList.city_list = _city_list
      state.areaList.county_list = _county_list
      // 数据回显
      if (state.type != 'add') {
        const { data: address } = await getAddressDetail(state.addressId)
        state.addressInfo.id = address.addressId
        state.addressInfo.name = address.userName
        state.addressInfo.tel = address.userPhone
        state.addressInfo.addressDetail = address.detailAddress
        state.addressInfo.areaCode = toCode(address.provinceName)
        state.addressInfo.areaCode = toCode(address.cityName)
        state.addressInfo.areaCode = toCode(address.regionName)
        state.addressInfo.isDefault = !!address.defaultFlag
      }
    })
    const toCode = (area, code) => {
      for (let key in tdist) if (tdist[key][0] == area && tdist[key][1] == code) return key
    }
    const onSave = async (content) => {
      const params = {
        userName: content.name,
        userPhone: content.tel,
        provinceName: content.province,
        cityName: content.city,
        regionName: content.county,
        detailAddress: content.addressDetail,
        defaultFlag: content.isDefault ? 1 : 0
      }
      // 新增或修改
      await state.type == 'add' ? addAddress(params) : (params.addressId = state.addressId, EditAddress(params))
      Toast('保存成功')
      setTimeout(() => {
        router.go(-1)
      }, 1000);
    }
    const onDelete = async () => {
      await DeleteAddress(state.addressId)
      Toast('删除成功')
      setTimeout(() => {
        router.back()
      }, 1000)
    }
    return {
      ...toRefs(state),
      onSave,
      onDelete
    }
  },
}
</script>

<style lang="less">
@import "../common/style/mixin";
.edit {
  .van-field__body {
    textarea {
      height: 26px !important;
    }
  }
}
.address-edit-box {
  margin-top: 44px;
  .van-address-edit {
    .van-button--danger {
      background: @primary;
      border-color: @primary;
    }
    .van-switch--on {
      background: @primary;
    }
  }
}
</style>