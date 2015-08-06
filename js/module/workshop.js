require(["jquery"], function() {
	// 定义workshop model
	var workshop = avalon.define({
		$id: "workshop",
		"name": "",
		"desc": "",
		"subject": "",
		"part": ""
	});

	// ajax加载数据
	$.getJSON('data/workshop.json').done(function(data) {
		workshop.name = data.name;
		workshop.desc = data.desc;
		workshop.subject = data.subject;
		workshop.part = data.part;
	});

	// 渲染模板
	avalon.scan();
});