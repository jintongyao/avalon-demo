require(["jquery"], function() {
	// 定义member model
	var member = avalon.define({
		$id: "member",
		members : {}
	});

	// ajax加载数据
	$.getJSON('data/member.json').done(function(data) {
		member.members = data;
	});

	// 渲染模板
	avalon.scan();
});