<template>
  <div>
    <div class="btn_list">
      <el-button type="primary" @click="back">返回</el-button>
      <el-button type="primary">修改</el-button>
    </div>
    <div class="form_content">
      <el-form label-width="105px">
        <el-row>
          <el-col :span="6" :offset="3">
            <el-form-item label="类型" required>
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
          <el-col :span="6" :offset="4">
            <el-form-item label="数据源" required>
              <el-input placeholder="请输入数据源"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="3">
            <el-form-item label="允许人工验证">
              <el-radio-group v-model="radio">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="4">
            <el-form-item label="允许在线编辑">
              <el-radio-group>
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="3">
            <el-form-item label="允许撤销">
              <el-radio-group>
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="4">
            <el-form-item label="状态" required>
              <el-select>
                <el-option label="1">无效</el-option>
                <el-option label="2">有效</el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="3">
            <el-form-item label="Staging表名" required>
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="4">
            <el-form-item label="频率">
              <el-select>
                <el-option label="1">Monthly</el-option>
                <el-option label="2">Quarterly</el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16" :offset="3">
            <el-form-item label="描述">
              <el-input type="textarea" placeholder="请输入" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="demo-tabs">
      <div class="tabs_btn">
        <el-button
          type="primary"
          v-if="activeName === 'first'"
          @click="fieldAdd"
        >
          添加字段
        </el-button>
        <el-button
          type="primary"
          v-if="activeName === 'second'"
          @click="operatorAdd"
        >
          增加操作人员
        </el-button>
        <el-button
          type="primary"
          v-if="activeName === 'third'"
          @click="ruleAdd"
        >
          增加规则
        </el-button>
        <el-button
          type="primary"
          v-if="activeName === 'fourth'"
          @click="categoryAdd"
        >
          增加类别
        </el-button>
        <el-button type="danger" @click="del">删除</el-button>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="字段" name="first">
          <CommonTable
            :columns="fieldColumn"
            @selectionChange="handleSelectionChange"
          >
          </CommonTable>
        </el-tab-pane>
        <el-tab-pane label="操作者列表" name="second">
          <CommonTable
            :columns="operatorColumn"
            @selectionChange="handleSelectionChange"
          >
          </CommonTable>
        </el-tab-pane>
        <el-tab-pane label="验证规则" name="third">
          <CommonTable
            :columns="ruleColumn"
            @selectionChange="handleSelectionChange"
          >
          </CommonTable>
        </el-tab-pane>
        <el-tab-pane label="类别" name="fourth">
          <CommonTable
            :columns="categoryColumn"
            @selectionChange="handleSelectionChange"
          >
          </CommonTable>
        </el-tab-pane>
      </el-tabs>
    </div>
    <fieldDialog v-model:visible="fieldVisible"></fieldDialog>
    <operatorDialog v-model:visible="operatorVisible"></operatorDialog>
    <ruleDialog v-model:visible="ruleVisible"></ruleDialog>
    <categoryDialog v-model:visible="categoryVisible"></categoryDialog>
  </div>
</template>
<script setup>
import { typeOfOption, delConfirm } from "@/utils/utils";
import fieldDialog from "./components/fieldDialog.vue";
import operatorDialog from "./components/operatorDialog.vue";
import ruleDialog from "./components/ruleDialog.vue";
import categoryDialog from "./components/categoryDialog.vue";
import {
  fieldColumn,
  operatorColumn,
  ruleColumn,
  categoryColumn,
} from "@/columnsData/index";
import { ref } from "vue";
const router = useRouter();
const radio = ref("2");
const activeName = ref("first");
const fieldVisible = ref(false);
const operatorVisible = ref(false);
const ruleVisible = ref(false);
const categoryVisible = ref(false);
const back = () => {
  router.back();
};
const fieldAdd = () => {
  fieldVisible.value = true;
};
const operatorAdd = () => {
  operatorVisible.value = true;
};
const ruleAdd = () => {
  ruleVisible.value = true;
};
const categoryAdd = () => {
  categoryVisible.value = true;
};
const del = () => {
  delConfirm();
};
</script>
<style lang="scss" scoped>
.form_content {
  background: #f7f8fa;
  margin-top: 16px;
  padding: 16px 0 0;
}
.demo-tabs {
  position: relative;
  margin-top: 20px;
  .tabs_btn {
    position: absolute;
    right: 0px;
    z-index: 99;
  }
}
</style>
