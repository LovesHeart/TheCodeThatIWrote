<template>
  <div class="rolelist_table">
    <el-form
      :model="formEditData"
      label-position="left"
      label-width="150px"
      class="roleform"
      ref="form"
      style="width: 90%; margin-left: 50px"
    >
      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="">
              <el-select
                v-model="valueO2"
                @change="change($event)"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-button v-for="item in list" :key="item" v-show="elb">{{
                item
              }}</el-button>
              <el-button
                type="primary"
                icon="el-icon-delete"
                @click="ddelete"
              ></el-button>
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="">
              <el-button>案件理算</el-button>
              <el-button>案件审核</el-button>
              <el-button>主任审核</el-button>
              <el-button>案件支付</el-button>
            </el-form-item>
          </div></el-col
        >
      </el-row>
      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="报案编号">
              <el-input
                v-model="formEditData.name"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="车号">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="驾驶员姓名">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="驾驶员证件号">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="事故时间">
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="value1"
                  type="datetime"
                  placeholder="选择日期时间"
                >
                </el-date-picker>
              </div>
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="事故地点">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-form-item class="form_title" label="事故概况">
        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        />
      </el-form-item>

      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="报案人">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="报案人联系电话">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="接案人">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="案件状态">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="录入人">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="统筹日期">
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="value2"
                  type="datetime"
                  placeholder="选择日期时间"
                >
                </el-date-picker>
              </div>
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="是否伤人">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </el-form-item>
          </div></el-col
        >
      </el-row>

      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="事故照片">
              <el-button>添加事故照片</el-button>
              <el-button>查看事故照片</el-button>
            </el-form-item>
          </div></el-col
        >
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="流程信息">
              <el-button @click="dialogFormVisible = true">提交</el-button>
            </el-form-item>
          </div>

          <div class="block" v-show="dialogFormVisible2">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-col>
      </el-row>
      <el-form-item class="form_title" label="备注">
        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        />
      </el-form-item>
      <el-form-item>
        <el-button>打印整个页面</el-button>
        <el-button type="primary" @click="saveUserData">保存</el-button>
        <el-button @click="closeeditUserBox">取消</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="统筹表单"
      :visible.sync="dialogFormVisible"
      @closed="handleClose"
      ><el-form
        ><el-form-item class="form_title" label="提交人">
          <el-input
            v-model="formEditData.username"
            auto-complete="off"
            style="width: 60%" /></el-form-item
        ><el-form-item class="form_title" label="提交对象">
          <el-input
            v-model="formEditData.username"
            auto-complete="off"
            style="width: 60%"
        /></el-form-item>
        <el-form-item class="form_title" label="提交时间">
          <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
              v-model="value3"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker></div
        ></el-form-item>
        <el-form-item class="form_title" label="备注">
          <el-input
            v-model="formEditData.username"
            auto-complete="off"
            style="width: 60%"
        /></el-form-item>
        <el-form-item
          ><el-button
            type="“primary”"
            @click="
              dialogFormVisible = false;
              dialogFormVisible2 = true;
            "
            >提交</el-button
          ></el-form-item
        >
      </el-form></el-dialog
    >
  </div>
</template>

<script>
import { caseList } from "@/api/carcase"; //你在不
import line from "../charts/line.vue";
export default {
  components: { line },
  data() {
    return {
      tableData: [],
      roleData: [],
      formEditData: {
        name: "",
        avatar: "",
        role: "",
      },
      password: "",
      editUserBoxShow: true,
      editUserBoxTitle: "新增案件",
      passwordplaceholder: "",
      editId: 0,
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
      },
      search: {
        name: "",
      },
      value1: "",
      value2: "",
      value3: "",
      options: [
        {
          value: "选项1",
          label: "办理中",
        },
      ],
      value: "",
      valueO2: "",
      options2: [
        {
          value: "选项1",
          label: "立案信息",
        },
        {
          value: "选项2",
          label: "简易案件",
        },
        {
          value: "选项3",
          label: "车损确认",
        },
        {
          value: "选项4",
          label: "非车损确认",
        },
        {
          value: "选项5",
          label: "简易人伤处理",
        },
        {
          value: "选项6",
          label: "人伤处理",
        },
      ],
      radio: "",
      elb: false,
      elbContent: "",
      dialogFormVisible: false, //'false'为真值
      dialogFormVisible2: false, //'false'为真值
      list: [],
    };
  },
  methods: {
    // 启用开关
    change(e) {
      console.log(e);
      this.elb = true;
      //this.elbContent=l.label
      for (let i in this.options2) {
        // console.log(i)
        if (this.options2[i].value === e) {
          this.list.push(this.options2[i].label);
          break;
        }
      }
    },
    ddelete() {
      this.list.splice(this.list.length - 1, 1);
    },
    statusChangeStatus(id, value) {
      let that = this;
      let data = {
        status: value,
        id: id,
      };
      editUser({ data }).then((response) => {
        if (response.code == 200) {
          this.$message({
            message: "操作成功",
            type: "success",
            duration: 1000,
          });
        } else {
          this.$message({
            message: response.msg,
            type: "warning",
            onClose: function () {
              that.getList();
            },
          });
        }
      });
    },
    // 分页方法
    handleSizeChange(val) {
      this.page.pageSize = val;
      this.page.currentPage = 1;
      this.getList();
    },
    // 分页方法
    handleCurrentChange(val) {
      this.page.currentPage = val;
      this.getList();
    },
    handleAvatarSuccess(res) {
      this.formEditData.avatar = res.data.img;
    },
    // 获取用户列表
    getList() {
      caseList({
        page: this.page.currentPage,
        pageSize: this.page.pageSize,
      }).then((response) => {
        this.tableData = response.data.info;
        this.page.currentPage = response.data.page.currentPage;
        this.page.pageSize = response.data.page.pageSize;
        this.page.total = response.data.page.total;
      });
    },
    getRoleList() {
      getRoles({ page: 1, pageSize: 999 }).then((response) => {
        this.roleData = response.data.info;
      });
    },

    // 搜索用户数据
    searchList() {
      getUserList(this.search).then((response) => {
        this.tableData = response.data.info;
        this.page.currentPage = response.data.page.currentPage;
        this.page.pageSize = response.data.page.pageSize;
        this.page.total = response.data.page.total;
      });
    },
    showEditPage(data, type) {
      this.password = "";
      this.editUserBoxShow = true;
      this.formEditData = {
        avatar: "",
        name: "",
        avatar: "",
        role: "",
      };
      if (type == 2) {
        this.editId = data.id;
        this.formEditData = data;
        this.editUserBoxTitle = "编辑管理员";
        this.passwordplaceholder = "不修改请不要填写";
      }
    },
    closeeditUserBox() {
      this.editUserBoxShow = false;
      this.editId = 0;
      this.formEditData = [];
      this.editUserBoxTitle = "添加管理员";
      this.passwordplaceholder = "";
    },

    // 保存表单数据
    saveUserData() {
      let that = this;
      // editId不为0时是编辑
      if (this.editId > 0) {
        this.formEditData.id = this.editId;
      }
      if (this.password != "") {
        this.formEditData.password = this.password;
      }
      let data = this.formEditData;
      editUser({ data }).then((response) => {
        if (response.code == 200) {
          this.$message({
            message: "编辑成功",
            type: "success",
            duration: 1000,
            onClose: function () {
              that.editUserBoxShow = false;
              that.editId = 0;
              that.editUserBoxTitle = "添加管理员";
              that.getList();
              return false;
            },
          });
        }
      });
    },
    deladmin(id) {
      let that = this;
      let data = {
        id: id,
        status: 1,
      };
      this.$confirm("确认删除该用户吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        editUser({ data }).then((response) => {
          if (response.code == 200) {
            this.$message({
              message: "删除成功",
              type: "success",
              duration: 1000,
              onClose: function () {
                that.getList();
              },
            });
          } else {
            this.$message({
              message: response.msg,
              type: "warning",
            });
          }
        });
      });
    },
    // 获取权限数据列表
    // getPermissionList() {
    //   getAuthList().then(response => {
    //     this.permissionData = response.data
    //   })
    // },
  },
  created() {
    this.getList();
    //this.getPermissionList();
    this.getRoleList();
  },
  mounted() {
    this.getList();
    //this.getPermissionList();
    this.getRoleList();
  },
};
</script>

<style scoped>
.rolelist_table {
  margin: 20px;
}
d .avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  border: 1px dashed #d9d9d9;
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<style>
</style>
