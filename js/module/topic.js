require(["jquery"], function() {
	// 定义topic model
	var topic = avalon.define({
		$id: "topic",
		topics : {}
	});

	// ajax加载数据
	$.getJSON('data/topic.json').done(function(data) {
		topic.topics = data;
	});

	// 渲染模板
	avalon.scan();

});