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
            <el-form-item class="form_title" label="车辆类型">
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
            <el-form-item class="form_title" label="车属单位">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="车牌号码">
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
            <el-form-item class="form_title" label="驾驶证号">
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
            <el-form-item class="form_title" label="第三者车号">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="第三者车辆型号">
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
            <el-form-item class="form_title" label="第三者驾驶员姓名">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="驾驶证号">
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
            <el-form-item class="form_title" label="统筹单号">
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
            <el-form-item class="form_title" label="出险时间">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="出险地点">
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
            <el-form-item class="form_title" label="统筹类别">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="统筹限额">
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
            <el-form-item class="form_title" label="事故类别">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="报案时间">
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
            <el-form-item class="form_title" label="车架号">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="发动机号">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
      </el-row>
      <el-form-item class="form_title" label="定损地点">
        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        />
      </el-form-item>
      <el-form-item class="form_title" label="事故经过及原因">
        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        />
      </el-form-item>
      <el-form-item class="form_title" label="换件项目">
        <el-button @click="dialogFormVisible = true">换件项目</el-button>
      </el-form-item>
      <el-dialog :visible.sync="dialogFormVisible"
        ><el-form>
          <el-form-item label="换件名称">        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        /></el-form-item>
          <el-form-item label="数量">        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        /></el-form-item>
          <el-form-item label="价格">        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        /></el-form-item>
          <el-form-item label="备注">        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        /></el-form-item>
          <el-form-item label=""
            ><el-button type="“primary”" @click="dialogFormVisible = false"
              >提交</el-button
            ></el-form-item
          >
        </el-form></el-dialog
      >
      <el-form-item class="form_title" label="修理项目">
        <el-button @click="dialogFormVisible2 = true">换件项目</el-button>
      </el-form-item>
      <el-dialog :visible.sync="dialogFormVisible2"
        ><el-form>
          <el-form-item label="所属类别">        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        /></el-form-item>
          <el-form-item label="修理项目">        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        /></el-form-item>
          <el-form-item label="价格">        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        /></el-form-item>
          <el-form-item label="备注">        <el-input
          v-model="formEditData.username"
          auto-complete="off"
          style="width: 60%"
        /></el-form-item>
          <el-form-item label=""
            ><el-button type="“primary”" @click="dialogFormVisible2 = false"
              >提交</el-button
            ></el-form-item
          >
        </el-form></el-dialog
      >
      <el-row :gutter="20">
        <el-col :span="14"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="统筹支付金额">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
            </el-form-item></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <el-form-item class="form_title" label="残值作价">
              <el-input
                v-model="formEditData.username"
                auto-complete="off"
                style="width: 40%"
              />
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
      dialogFormVisible: false,
      dialogFormVisible2: false,
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
