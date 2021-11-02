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
            <el-form-item class="form_title" label="统筹支付编号">
              <el-input
                v-model="formEditData.name"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="报案编号">
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
            <el-form-item class="form_title" label="车号">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="统筹单位">
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
            <el-form-item class="form_title" label="车辆型号">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="出检日期">
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="value"
                  type="datetime"
                  placeholder="选择日期时间"
                >
                </el-date-picker>
              </div>
            </el-form-item></div
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="责任">
              <el-radio v-model="radio" label="1">全责</el-radio>
              <el-radio v-model="radio" label="2">主责</el-radio>
              <el-radio v-model="radio" label="3">同责</el-radio>
              <el-radio v-model="radio" label="4">次责</el-radio>
              <el-radio v-model="radio" label="5">无责</el-radio>
            </el-form-item>
          </div></el-col
        >
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="统筹类型">
              <el-radio v-model="radio1" label="1">车辆统筹</el-radio>
              <el-radio v-model="radio1" label="2">承运人统筹</el-radio>
            </el-form-item>
          </div></el-col
        >
      </el-row>

      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="统筹开始日期">
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
            <el-form-item class="form_title" label="统筹截止日期">
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
      </el-row>

      <el-form-item class="form_title" label="计算">
        <el-button>添加理赔统筹项目</el-button>
        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        />
      </el-form-item>

      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="是否诉讼">
              <el-radio v-model="radio2" label="1">是</el-radio>
              <el-radio v-model="radio2" label="2">否</el-radio>
            </el-form-item>
          </div></el-col
        >
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="预支付金额">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 60%"
              />
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="总计金额">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="理算人">
              <el-select v-model="valuee" placeholder="请选择">
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
            <el-form-item class="form_title" label="核算人">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="核算状态">
              <el-select v-model="valuee1" placeholder="请选择">
                <el-option
                  v-for="item in options1"
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
            <el-form-item class="form_title" label="审核人">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="审核状态">
              <el-select v-model="valuee2" placeholder="请选择">
                <el-option
                  v-for="item in options2"
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
            <el-form-item class="form_title" label="主任">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="审核状态">
              <el-select v-model="valuee3" placeholder="请选择">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-form-item class="form_title" label="备注">
        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveUserData">保存</el-button>
        <el-button @click="closeeditUserBox">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { caseList } from "@/api/carcase";
export default {
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
      value: "",
      value1: "",
      value2: "",
      valuee: "",
      valuee1: "",
      valuee2: "",
      valuee3: "",
      radio: "",
      radio1: "",
      radio2: "",
      options1: [
        {
          value: "选项1",
          label: "通过",
        },
      ],
      options2: [
        {
          value: "选项1",
          label: "未审核",
        },
      ],
      options3: [
        {
          value: "选项1",
          label: "未审核",
        },
      ],
    };
  },
  methods: {
    // 启用开关
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
