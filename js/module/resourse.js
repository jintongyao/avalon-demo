require(["jquery"], function() {
	// 定义resourse model
	var resourse = avalon.define({
		$id: "resourse",
		resourses : {}
	});

	// ajax加载数据
	$.getJSON('data/resourse.json').done(function(data) {
		resourse.resourses = data;
	});

	// 渲染模板
	avalon.scan();
});