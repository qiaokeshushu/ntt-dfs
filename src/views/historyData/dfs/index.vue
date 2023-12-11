<template>
  <div>
    <el-form>
      <el-row :gutter="20">
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
        <el-col :span="5">
          <el-form-item label="创建者">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="日期">
            <el-date-picker
              type="daterange"
              range-separator="To"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <CommonTable :columns="columns" :tableData="tableData">
      <template #dataSource="{ row }">
        <span class="table_href">
          {{ row.dataSource }}
        </span>
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
    label: "类别",
    prop: "name",
  },
  {
    label: "数据源",
    prop: "dataSource",
    render: true,
  },
  {
    label: "文件名",
    prop: "address",
  },
  {
    label: "记录 年/月/季",
    prop: "address",
    minWidth: "120px",
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
    label: "操作",
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
    dataSource: "数据源1",
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
