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
      <el-form label-width="80px" label-position="right">
        <el-row>
          <el-col :span="12">
            <el-form-item label="类别名" prop="filename" required>
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="状态">
          <el-radio-group v-model="radio">
            <el-radio label="1">有效</el-radio>
            <el-radio label="2">无效</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" placeholder="请输入"></el-input>
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
    label: "电子邮箱",
    prop: "operatorType",
  },
];
const title = ref("添加类别");
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
