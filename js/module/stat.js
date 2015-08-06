require(["jquery"], function() {
	// 定义stat model
	var stat = avalon.define({
		$id: "stat",
		"member": 0,
		"act": 0,
		"discuss": 0,
		"resource": 0,
		"announcement": 0,
		"brief": 0
	});

	// ajax加载数据
	$.getJSON('data/stat.json').done(function(data) {
		stat.member = data.member;
		stat.act = data.act;
		stat.discuss = data.discuss;
		stat.resource = data.resource;
		stat.announcement = data.announcement;
		stat.brief = data.brief;
	});

	// 渲染模板
	avalon.scan();
});