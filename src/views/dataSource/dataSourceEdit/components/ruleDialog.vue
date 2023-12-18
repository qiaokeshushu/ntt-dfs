<template>
  <div>
    <el-dialog
      :title="title"
      :model-value="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="500px"
      :before-close="handleClose"
    >
      <el-form label-width="110px" label-position="right">
        <el-form-item label="名字" prop="filename" required>
          <el-input placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="类型" required>
          <el-select placeholder="请选择">
            <el-option label="Error" value="1"></el-option>
            <el-option label="Problem" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" required>
          <el-select placeholder="请选择">
            <el-option label="1">无效</el-option>
            <el-option label="2">有效</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="次序" required>
          <el-input-number placeholder="请输入"></el-input-number>
        </el-form-item>
        <el-form-item label="规则描述">
          <el-input type="textarea" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="验证SQL" required>
          <el-input
            :autosize="{ minRows: 4 }"
            type="textarea"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证结果SQL" required>
          <el-input
            type="textarea"
            :autosize="{ minRows: 4 }"
            placeholder="请输入"
          ></el-input>
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
const title = ref("添加规则");
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
