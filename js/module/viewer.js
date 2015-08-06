require(["jquery"], function() {
	// 定义viewer model
	var viewer = avalon.define({
		$id: "viewer",
		viewers : {}
	});

	// ajax加载数据
	$.getJSON('data/viewer.json').done(function(data) {
		viewer.viewers = data;
	});

	// 渲染模板
	avalon.scan();
});