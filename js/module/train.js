require(["jquery"], function() {
	// 定义train model
	var train = avalon.define({
		$id: "train",
		trains : {}
	});

	// ajax加载数据
	$.getJSON('data/train.json').done(function(data) {
		train.trains = data;
	});

	// 渲染模板
	avalon.scan();
});