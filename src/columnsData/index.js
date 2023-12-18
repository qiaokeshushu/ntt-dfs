// 编辑数据源字段列表
export const fieldColumn = [
  {
    label: "",
    type: "selection",
  },
  {
    label: "#",
    type: "index",
  },
  {
    label: "字段",
    prop: "field",
    render:true
  },
  {
    label: "类型",
    prop: "type",
  },
  {
    label: "长度",
    prop: "address",
  },
  {
    label: "允许空",
    prop: "address",
  },
  {
    label: "描述",
    minWidth: "120px",
  },
]
//编辑数据源操作者列表
export const operatorColumn = [
  {
    label: "",
    type: "selection",
  },
  {
    label: "操作者人名",
    prop: "field",
    render:true
  },
  {
    label: "电子邮箱",
    prop: "type",
  },
  {
    label: "允许类型",
    prop: "address",
  },
]
//编辑数据源验证规则列表
export const ruleColumn = [
  {
    label: "",
    type: "selection",
  },
  {
    label: "名字",
    prop: "field",
    render: true,
    minWidth: "180px",
    
  },
  {
    label: "类型",
    prop: "type",
  },
  {
    label: "创建日期",
    prop: "address",
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
  },
]
//编辑数据源类别列表
export const categoryColumn = [
  {
    label: "",
    type: "selection",
  },
  {
    label: "类别",
    prop: "field",
    render: true,
    minWidth: "180px",
    
  },
  {
    label: "描述",
    prop: "type",
  },
  {
    label: "状态",
    prop: "address",
  },
]