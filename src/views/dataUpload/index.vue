<template>
  <div>
    <el-form>
      <el-row :gutter="20">
        <el-col :span="5">
          <el-form-item label="类别：">
            <el-select placeholder="请选择">
              <el-option label="选项一" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="类型：">
            <el-select placeholder="请选择">
              <el-option label="选项一" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="数据源：">
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
    <CommonTable :columns="columns" :tableData="tableData">
      <template #action="{ row }">
        <el-button type="primary">上传</el-button>
        <el-button type="primary">下载模板</el-button>
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

const columns = [
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
    label: "操作",
    render: true,
    prop: "action",
  },
];
const total = ref(0);
const tableData = ref([
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
  },
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
  },
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
  },
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
  },
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
  },
  {
    name: "类别1",
    age: "类型1",
    address: "数据源1",
  },
]);
const queryParams = reactive({
  pageNum: 1,
  pageSize: 10,
});
const getList = () => {};
</script>

<style lang="scss" scoped></style>
