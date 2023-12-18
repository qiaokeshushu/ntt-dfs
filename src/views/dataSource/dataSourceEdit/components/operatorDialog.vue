<template>
  <div>
    <el-dialog
      :title="title"
      :model-value="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="700px"
      top="10%"
      :before-close="handleClose"
    >
      <el-form label-position="right">
        <el-form-item label="" prop="filename">
          <el-radio-group v-model="radio">
            <el-radio label="1">数据源拥有者</el-radio>
            <el-radio label="2">ETL确认</el-radio>
            <el-radio label="3">查看历史</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <CommonTable
        :columns="operatorColumn"
        @selectionChange="handleSelectionChange"
      >
      </CommonTable>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary">保存</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
const operatorColumn = [
  {
    label: "",
    type: "selection",
  },
  {
    label: "操作人ID",
    prop: "operator",
  },
  {
    label: "操作人名",
    prop: "operatorTime",
  },
  {
    label: "操作人邮箱",
    prop: "operatorType",
  },
];
const title = ref("添加操作人员");
const form = reactive({
  type: [],
});
const emit = defineEmits(["update:visible", "success"]);
const handleClose = () => {
  emit("update:visible", false);
};
const getInfo = (row) => {
  console.log(row);
};
defineExpose({ getInfo });
</script>
