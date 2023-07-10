<template>
  <div class="users-box">
    <h3>用户资料</h3>
    <hr />

    <!-- 引入表格组件 -->
    <Table :goodsdata="goodslist" :usersdata="userslist">
      <!-- 表格标题 -->
      <template v-slot:header>
        <th>#</th>
        <th>姓名</th>
        <th>地址</th>
        <th>购买商品</th>
        <th>操作</th>
      </template>
      <!-- 商品表格 -->
      <template v-slot:body="{ row, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.address }}</td>
        <td class="goods-name">
          <div v-for="(item, index) in row.goods_id" :key="item.id">
            {{ goodslist[item - 1].goods_name }}
          </div>
        </td>
        <td>
          <button
            type="button"
            class="btn-danger btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#info"
            @click="goodslist_id(row.id - 1)"
          >
            详情
          </button>
        </td>
      </template>
    </Table>
    <!-- 详情页 -->
    <UserInfo :goodsdata="goodslist" :usersdata="userslist">
      <template v-slot:userinfo>
        <div
          class="modal fade modal-dialog modal-dialog-centered"
          id="info"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  {{ username }}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  取消
                </button>
                <button type="button" class="btn btn-primary">保存</button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </UserInfo>
  </div>
</template>

<script>
import Table from '@/components/menus/Users/UsersTable.vue'
import UserInfo from './UserInfo.vue'
import { nextTick } from 'vue'
export default {
  name: 'Users',
  data() {
    return {
      // 商品列表数据
      goodslist: [],
      userslist: [],
      username: ''
    }
  },
  components: {
    Table,
    UserInfo
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('/api/get/goodslist')
      if (res.status !== 0) return console.log('商品获取失败')
      if (typeof res != 'undefined') {
        this.goodslist = res.data
      }
    },
    async getUsersList() {
      const { data: res } = await this.$http.get('/api/get/userslist')
      if (res.status !== 0) return console.log('用户信息获取失败')
      if (typeof res != 'undefined') {
        this.userslist = res.data
      }
    },
    async goodslist_id(id) {
      this.listId = id
      this.username = this.userslist[id].name
    }
  },
  async created() {
    // 发起请求
    this.getGoodsList()
    this.getUsersList()
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
.goods-name {
  width: 100px;
  div {
    color: #57a8ff;
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.modal-dialog-centered {
  top: -200px;
}
</style>
