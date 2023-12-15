<template>
  <div>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @onBlur="handleBlur"
        @onChange="handleChange"
      />
    </div>
  </div>
</template>
<script setup>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { DomEditor } from "@wangeditor/editor";
const editorRef = shallowRef();
const mode = ref("default");
const valueHtml = ref("");
const toolbarConfig = {
  excludeKeys: [
    "group-image",
    "group-video",
    "emotion",
    "codeBlock",
    "blockquote",
  ],
};
const editorConfig = { placeholder: "请输入内容..." };
const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const handleBlur = (editor) => {
  const toolbar = DomEditor.getToolbar(editor);
  console.log(toolbar.getConfig().toolbarKeys);
  editor.setHtml(
    "<h1>优雅永不过时</h1><h1>失败始终是最好的导师</h1> <p>我曾踏足山巅，也曾进入低谷，二者都让我受益良多，人名易逝，山峦易毁，掌控你的命运，否则命运将掌控你</p>"
  );
};
const handleChange = (editor) => {
  // console.log(editor.getHtml());
};

onMounted(() => {});
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
</script>
