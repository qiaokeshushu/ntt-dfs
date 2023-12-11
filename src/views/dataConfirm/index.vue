<template>
  <div>
    <el-form>
      <el-row :gutter="20">
        <el-col :span="5">
          <el-form-item label="类型">
            <el-select placeholder="请选择">
              <el-option label="选项一" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="类别">
            <el-select placeholder="请选择">
              <el-option label="选项一" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="数据源">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="状态">
            <el-select placeholder="请选择">
              <el-option label="选项一" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <div class="btn_list">
      <el-button type="primary">在线编辑</el-button>
      <el-button type="primary">验证</el-button>
      <el-button type="primary">确认</el-button>
      <el-button type="primary">撤销</el-button>
      <el-button type="danger">删除</el-button>
    </div>
    <CommonTable :columns="columns" :tableData="tableData">
      <template #radio="{ row }">
        <el-radio
          v-model="radio"
          :label="row.id"
          @click.native.prevent="clickDataType(row)"
        ></el-radio>
      </template>
      <template #action="{ row }">
        <el-button type="primary" @click="handleDownload(row)">下载</el-button>
      </template>
    </CommonTable>
    <pagination
      :total="total"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { download } from "@/utils/utils";
const radio = ref(null);
const columns = [
  {
    label: "",
    prop: "radio",
    width: "40px",
    render: true,
  },
  {
    label: "类别",
    prop: "name",
  },
  {
    label: "类型",
    prop: "age",
  },
  {
    label: "数据源",
    prop: "address",
  },
  {
    label: "条数",
    prop: "address",
  },
  {
    label: "状态",
    prop: "address",
  },
  {
    label: "创建者",
    prop: "address",
  },
  {
    label: "创建日期",
    prop: "address",
    minWidth: "120px",
  },
  {
    label: "确认者",
    prop: "address",
  },
  {
    label: "确认日期",
    prop: "address",
    minWidth: "120px",
  },
  {
    label: "记录 年/月/季",
    prop: "address",
    minWidth: "120px",
  },

  {
    label: "错误日志",
    render: true,
    prop: "action",
    width: "100px",
  },
];
const total = ref(20);
const tableData = ref([
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
    id: 1,
  },
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
    id: 2,
  },
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
    id: 3,
  },
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
    id: 4,
  },
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
    id: 5,
  },
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
    id: 6,
  },
]);
const queryParams = reactive({
  pageNum: 1,
  pageSize: 15,
});
const getList = () => {};
const handleDownload = (row) => {
  const res = new Blob();
  download(res, "test");
};
const clickDataType = (row) => {
  radio.value = row.id;
};
</script>

<style lang="scss" scoped>
:deep(.el-radio) {
  .el-radio__label {
    display: none;
  }
}
</style>
