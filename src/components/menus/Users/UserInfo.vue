<template>
  <div>
    <slot name="userinfo"> </slot>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    goodsdata: {
      type: Array,
      required: true,
      default: []
    },
    usersdata: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style lang="less" scoped></style>
