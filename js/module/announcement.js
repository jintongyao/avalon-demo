require(["jquery"], function() {
	// 定义announcement model
	var announcement = avalon.define({
		$id: "announcement",
		"title": "",
		"digest": "",
		"viewers": 0
	});

	// ajax加载数据
	$.getJSON('data/announcement.json').done(function(data) {
		announcement.title = data.title;
		announcement.digest = data.digest;
		announcement.viewers = data.viewers;
	});

	// 渲染模板
	avalon.scan();
});