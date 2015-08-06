require(["jquery"], function() {
	// 定义brief model
	var brief = avalon.define({
		$id: "brief",
		"title": "",
		"digest": "",
		"viewers": 0
	});

	// ajax加载数据
	$.getJSON('data/brief.json').done(function(data) {
		brief.title = data.title;
		brief.digest = data.digest;
		brief.viewers = data.viewers;
	});

	// 渲染模板
	avalon.scan();
});