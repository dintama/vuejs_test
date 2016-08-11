// 定义
var MyComponent = Vue.extend({
	/*props: ['value'],*/
	template: '<input type="range" min="0" max="255"/>', //自定义组件模版不能换行？
	/*watch:{
		'value': function(val, oldVal){
			styleColor.red = val
		}
	}
*/})

var styleColorAll = {
	red : 0,
	green: 0,
	blue: 52
}

/*var styleObjectAll = {
	backgroundColor: '#46c1d8'
}*/

// 注册
Vue.component('my-component', MyComponent)

// 创建根实例
new Vue({
  el: '#example',
  data: {
  	styleColor: styleColorAll,
  	styleObject: {
  		backgroundColor : "#46c1d8"
  	},
  	hex: function(){
  		return styleColorAll.blue.toString(16)
  	}
  },
  computed:{
  	styleObject : function(){
  		var red16 = styleColor.red.toString(16);
  		var green16 = styleColor.green.toString(16);
  		var blue = styleColor.blue.toString(16);
  		return {
  			backgroundColor : "#" + red16 + green16 + blue16
  		}
  	},
  	hex : function(){
  		var red16 = styleColor.red.toString(16);
  		var green16 = styleColor.green.toString(16);
  		var blue = styleColor.blue.toString(16);
  		return red16
  	}
  }
})