<template>
  <div class="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import { getSeller } from "@/api";
import qs from 'query-string'
export default {
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  components: {
    Header
  },
  created() {
    getSeller({
      id: this.seller.id
    }).then(seller => {
      console.log(seller)
    });
  }
};
</script>

<style>
</style>