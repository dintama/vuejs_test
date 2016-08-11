var vm = new Vue({
	el: "#app",
	data:{
		name: "joy",
		sexy: "male"
	},
	computed: {
		msg : function(){
			return this.name + ' ' + this.sexy
		}
	}
})

var scanner = new Vue({
	data: {
		scan : "通过JS尝试：<input v-model='txt'/>",
		txt: "haha"
	}
})

scanner.$mount("#user")