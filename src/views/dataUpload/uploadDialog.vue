<template>
  <div>
    <el-dialog
      title="上传"
      :model-value="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="400px"
      top="10%"
      :before-close="handleClose"
    >
      <el-form label-width="55px" label-position="right">
        <el-form-item label="类别" prop="filename" required>
          <el-select>
            <el-option label="请选择" value="请选择"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主题">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="文件" required>
          <uploadFile fileType="text/csv"></uploadFile>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary">上 传</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import uploadFile from "@/components/uploadFile/index.vue";
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
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
