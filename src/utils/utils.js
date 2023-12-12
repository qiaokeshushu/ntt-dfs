import { ElMessage, ElMessageBox } from "element-plus";
export const typeOfOption = [
	{
		value: "1",
		label: "Mapping",
	},
	{
		value: "2",
		label: "Master"
	},
	{
		value: "3",
		label: "Transaction"
	}
	
]
export const download = (res, name) => {
	const downloadElement = document.createElement("a");
	const href = window.URL.createObjectURL(res);
	downloadElement.href = href;
	downloadElement.download = `${name}.csv`;
	document.body.appendChild(downloadElement);
	downloadElement.click();
	document.body.removeChild(downloadElement);
	window.URL.revokeObjectURL(href);
};
export const delConfirm = (rows) => {
	return new Promise((resolve, reject) => {
		if (!rows || rows.length === 0) {
			ElMessage.warning("请选择要删除的数据");
			return reject();
		}
		ElMessageBox.confirm('确定删除该数据吗？', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning',
		}).then(() => {
			return resolve()
		}).catch(() => {
			return reject()
		})
	})
	
}
