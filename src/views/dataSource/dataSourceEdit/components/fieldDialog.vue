<template>
  <div>
    <el-dialog
      :title="title"
      :model-value="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="500px"
      top="10%"
      :before-close="handleClose"
    >
      <el-form label-width="75px" label-position="right">
        <el-form-item label="模板名" prop="filename" required>
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="字段" required>
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="类型" required>
          <el-select placeholder="请选择">
            <el-option label="DateTime" value="1"></el-option>
            <el-option label="Text" value="2"></el-option>
            <el-option label="Numeric" value="3"></el-option>
            <el-option label="Integer" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="长度" required>
          <el-input-number placeholder="请输入"></el-input-number>
        </el-form-item>
        <el-form-item label="">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="1">允许空</el-checkbox>
            <el-checkbox label="2">移除空白处</el-checkbox>
            <el-checkbox label="3">全半角转换</el-checkbox>
            <el-checkbox label="4">重复校验</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
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
const title = ref("添加字段");
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
