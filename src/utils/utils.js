export const download =(res,name)=> {
	const downloadElement = document.createElement("a");
	const href = window.URL.createObjectURL(res);
	downloadElement.href = href;
	downloadElement.download = `${name}.csv`;
	document.body.appendChild(downloadElement);
	downloadElement.click();
	document.body.removeChild(downloadElement);
	window.URL.revokeObjectURL(href);
};
