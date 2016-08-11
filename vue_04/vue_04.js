var vm = new Vue({
	el: "#app",
	data: {
 		styleObject: {
    	fontSize: '13px',
    	backgroundColor: '#46c1d8'
  		}
	}
})

var PaintSlider = Vue.extend({
	template: '<div><input type="range" min="0" max="255"/></div>'
})

Vue.component("paint-slider", PaintSlider)


var tmp = new Vue({
	el: "#test"
	data:function(){
		return {
      		msg: '<span>haha</span>Hello World!12344',
			items: [
				{
					label: "123",
					isFinally: true
				},
				{
					label: "456",
					isFinally: false
				}
			]
    	}
  	}
})
/*var vm = new Vue({
	el: "#app",
	data: function(){
		var red = "00";
		var green = "00";
		var blue = "00";
		var hex = '#' + red + green + blue
		return {
			red : red,
			green : green,
			blue : blue,
			hex : hex
		}
	},
	methods:{
		update: function(event){
			console.log("hahahaahah")
		}
	}
})*/