<template>
  <div>
    <el-form>
      <el-row :gutter="20">
        <el-col :span="5">
          <el-form-item label="类别">
            <el-select placeholder="请选择">
              <el-option label="选项一" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="类型">
            <el-select placeholder="请选择">
              <el-option
                v-for="(item, index) in typeOfOption"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="数据源">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <CommonTable :columns="columns" :tableData="tableData">
      <template #action="{ row }">
        <el-button type="primary" @click="handleUpload(row)">上传</el-button>
        <el-button type="primary" @click="handleDownload(row)"
          >下载模板</el-button
        >
      </template>
    </CommonTable>
    <pagination
      :total="total"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
    <uploadDialog
      v-model:visible="visible"
      ref="uploadDialogRef"
    ></uploadDialog>
  </div>
</template>

<script setup>
import { reactive } from "vue";

import { download, typeOfOption } from "@/utils/utils";
import uploadDialog from "./uploadDialog.vue";
import { getCaseData, getCaselist } from "@/api/inovative";

const columns = [
  {
    label: "类别",
    prop: "name",
    minWidth: "120px",
  },
  {
    label: "类型",
    prop: "age",
    minWidth: "120px",
  },
  {
    label: "数据源",
    prop: "address",
    minWidth: "220px",
  },
  {
    label: "操作",
    render: true,
    prop: "action",
    width: "220px",
  },
];
const total = ref(900);
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
  pageSize: 15,
});
const visible = ref(false);
const uploadDialogRef = ref(null);
const getList = () => {};
const handleDownload = (row) => {
  const res = new Blob();
  download(res, "test");
};
const handleUpload = (row) => {
  visible.value = true;
  uploadDialogRef.value.getInfo(row);
};
</script>

<style lang="scss" scoped></style>
