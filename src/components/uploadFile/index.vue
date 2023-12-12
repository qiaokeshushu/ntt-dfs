<template>
  <el-upload
    action="#"
    :limit="1"
    :http-request="upload"
    :before-upload="beforeUpload"
    :show-file-list="false"
  >
    <el-button type="primary">选择文件</el-button>
  </el-upload>
</template>
<script setup>
import { ElMessage, ElLoading } from "element-plus";
const props = defineProps({
  fileType: {
    type: String,
    default: "",
  },
});
const beforeUpload = (file) => {
  if (file.type !== props.fileType) {
    ElMessage.warning("文件类型必须为cvs");
    return false;
  }
};
const upload = ({ file }) => {
  const loading = ElLoading.service({
    fullscreen: true,
    lock: true,
    text: "上传中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  console.log(file);
  setTimeout(() => {
    loading.close();
    ElMessage.success("上传成功");
  }, 1000);
};
</script>
