// require.js配置
require.config({
	baseUrl: '',
	paths: {
		// common
		jquery: 'js/lib/jquery-2.1.1',
		avalon: "js/lib/avalon",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
		text: 'js/lib/text',
		domReady: 'js/lib/domReady',
		css: 'js/lib/css.js',

		// 业务
		workshop: 'js/module/workshop',
		announcement: 'js/module/announcement',
		brief: 'js/module/brief',
		member: 'js/module/member',
		viewer: 'js/module/viewer',
		stat: 'js/module/stat',
		topic: 'js/module/topic',
		train: 'js/module/train',
		resourse: 'js/module/resourse'
	},
	priority: ['text', 'css'],
	shim: {
		jquery: {
			exports: "jQuery"
		},
		avalon: {
			exports: "avalon"
		}
	}
});


require(['avalon', "domReady!"], function() {// 第二块，添加根VM（处理共用部分）
	avalon.log("加载avalon完毕，开始构建根VM与加载其他模块");
	//avalon.templateCache.empty = "";

	// 定义页面主模块
	avalon.define({
		$id: "main",
		header: "这是根模块，用于放置其他模块都共用的东西",
		footer: "页脚消息",
		workshop: "",
		announcement: "",
		brief: "",
		member: "",
		viewer: "",
		stat: "",
		topic: "",
		train: "",
		resourse: ""
	});
	avalon.scan(document.body);

	require(['workshop'], function() {
		avalon.log("加载workshop完毕!!!");
	});

	require(['announcement'], function() {
		avalon.log("加载announcement完毕!!!");
	});

	require(['brief'], function() {
		avalon.log("加载brief完毕!!!");
	});

	require(['member'], function() {
		avalon.log("加载member完毕!!!");
	});

	require(['viewer'], function() {
		avalon.log("加载viewer完毕!!!");
	});

	require(['stat'], function() {
		avalon.log("加载stat完毕!!!");
	});

	require(['topic'], function() {
		avalon.log("加载topic完毕!!!");
	});

	require(['train'], function() {
		avalon.log("加载train完毕!!!");
	});

	require(['resourse'], function() {
		avalon.log("加载resourse完毕!!!");
	});

});