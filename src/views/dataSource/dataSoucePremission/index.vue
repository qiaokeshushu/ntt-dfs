<template>
  <div>
    <el-form>
      <el-row :gutter="20">
        <el-col :span="5">
          <el-form-item label="类型">
            <el-select placeholder="请选择" clearable>
              <el-option label="Mapping" value="1"></el-option>
              <el-option label="Master" value="2"></el-option>
              <el-option label="Transaction" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="数据源">
            <el-input placeholder="请输入"></el-input>
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
    label: "类型",
    prop: "name",
  },
  {
    label: "数据源",
    prop: "dataSource",
    render: true,
  },
  {
    label: "描述",
    prop: "address",
    minWidth: "220px",
  },
  {
    label: "创建日期",
    prop: "address",
    minWidth: "120px",
  },
  {
    label: "创建人",
    prop: "address",
  },

  {
    label: "最近修改时间",
    prop: "address",
  },
  {
    label: "修改人",
    prop: "address",
    minWidth: "120px",
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
