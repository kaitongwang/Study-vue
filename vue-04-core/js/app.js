(function (Vue) {//表示依赖了全局的vue

	//变量不可变，es6语法
	const items = [

		{
			id: 1,
			content: 'vue.js',
			completed: true
		},
		{
			id: 2,
			content: 'java',
			completed: false
		},
		{
			id: 3,
			content: 'python',
			completed: false
		}
	]
	new Vue({


		el: '#todoapp',
		data: {

			items //items:items


		}



	})







})(Vue);
