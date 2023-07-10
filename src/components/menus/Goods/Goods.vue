<template>
  <div class="goods-box">
    <h3>商品管理</h3>
    <hr />

    <!-- 引入表格组件 -->
    <Table :data="goodslist">
      <!-- 表格标题 -->
      <template v-slot:header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <!-- 商品表格 -->
      <template v-slot:body="{ row, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ row.goods_name }}</td>
        <td>{{ row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="form-control form-control-sm from-ipt"
            v-if="row.inputVisible"
            v-focus
            v-model.trim="row.inputValue"
            @blur="addTag(row)"
            @keyup.enter="addTag(row)"
            @keyup.esc=";(row.inputVisible = false), (row.inputValue = '')"
          />
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="row.inputVisible = 'true'"
            v-else
          >
            +添加
          </button>
          <span
            class="badge badge-warning ml-2"
            v-for="item in row.tags"
            :key="item"
          >
            {{ item }}
          </span>
        </td>
        <td>
          <button
            type="button"
            class="btn-danger btn-sm"
            @click="remove_goods(row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from '@/components/menus/Goods/GoodsTable.vue'
export default {
  name: 'Goods',
  data() {
    return {
      // 商品列表数据
      goodslist: []
    }
  },
  components: {
    Table
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('/api/get/goodslist')
      if (res.status !== 0) return console.log('商品获取失败')
      this.goodslist = res.data
    },
    remove_goods(id) {
      this.goodslist = this.goodslist.filter((x) => x.id !== id)
    },
    addTag(row) {
      const val = row.inputValue
      row.inputValue = ''
      row.inputVisible = false

      if (!val || row.tags.indexOf(val) !== -1) return
      row.tags.push(val)
    }
  },
  created() {
    // 发起请求
    this.getGoodsList()
  },
  directives: {
    focus(el) {
      el.focus()
    }
  }
}
</script>

<style lang="less" scoped>
h3 {
  text-align: center;
}
.form-control {
  width: 80px;
}
.from-ipt {
  display: inline;
}

.badge {
  color: var(--bs-table-striped-color);
}
</style>
