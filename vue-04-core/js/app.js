(function (Vue) {//表示依赖了全局的vue

	//变量不可变，es6语法
	const items = [
	]
	//指令名不要加上v-, 在引用这个指令时才需要加上 v
	Vue.directive('app-focus', {
      inserted (el, binding) {
	//聚集元素
	el.focus()
	}
	})
	


	
  var app =	new Vue({


		el: '#todoapp',
		data: {

			title:'你好 vue.js',
			items //items:items


		},
		methods:{
			
			finishEdit (item, index, event) {
				const content = event.target.value.trim();
				// 1. 如果为空, 则进行删除任务项
				if (!event.target.value.trim()){
				//重用 removeItem 函数进行删除
				this.removeItem(index)
				return
				}
				// 2. 添加数据到任务项中
				item.content = content
				// 3. 移除 .editing 样式
				this.currentItem = null
				},
				//取消编辑
				cancelEdit () {
				// 移除样式
				this.currentItem = null
				},
				// 进入编辑状态,当前点击的任务项item赋值currentItem，用于页面判断显示 .editing
				toEdit (item) {
				this.currentItem = item
				},

				
			removeCompleted(){

				this.items =this.items.filter(item => !item.completed)
   
			   },
   

			removeItem(index){
			  this.items.splice(index,1)	
			},

		addItem(event){
				console.log("点击了回车键");
				// 获取文本输入的内容
				const content =event.target.value.trim();
				if(!content.length) {
					return;
				}
				//获取自增主键
				const id  = this.items.length+1;
				this.items.push({
					id,// 相当于 id:id
					content:content,
					completed:false
				})
				//清楚文本
				event.target.value='';

			},



		},


		computed:{

	

		
			toggleAll:{

				get () {
					return this.remaining===0;
				},
				set(newStatus) {
					this.items.forEach((items) => {
						item.completed=newStatus
					});


				}

			},
			remaining(){

				return this.items.filter(item =>!item.completed).length;
			}

		}





	})







})(Vue);
