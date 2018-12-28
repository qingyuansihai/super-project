<template>
	<div>

	<myheader></myheader>
	<swipe ></swipe>

	<ul class="five">
 		<li @click="handleClick()">
			<img :src="fiveList[0]">
			<span>预售专区</span>
		</li>
 		<li @click="handleClick()">
			<img :src="fiveList[1]">
			<span>实时成交</span>
		</li>
 		<li @click="handleClick()">
			<img :src="fiveList[2]">
			<span>我的主营</span>
		</li>
 		<li @click="handleClick()">
			<img :src="fiveList[3]">
			<span>市场行情</span>
		</li>
 		<li @click="handleClick()">
			<img :src="fiveList[4]">
			<span>药材百科</span>
		</li>
 	</ul>

 	<div id="two">
 		<ul>
 			<li></li>
 		</ul>
 	</div>


	<tabbar></tabbar>

	</div>
</template>

<script >
import tabbar from './tabbar-index'
import myheader from './myheader'
import axios from 'axios'
import swipe from './swipe'

import 'vue-swipe/dist/vue-swipe.css' //引入样式
import { Swipe, SwipeItem } from 'vue-swipe';

	export default{
		data(){
			return{
				title:"111",
				fiveList:[],
			}
		},
		computed:{

		},
		methods:{
			handleClick(){
				alert("亲，您还未登录")
			}
		},
		mounted(){
			axios({
				url:"front/handle/control.do",
				method:'post',
				data:
					{
						// biz_module:"filesService",
						// biz_method:"showIconImage",
						// biz_param:{"fileType":0},
						// time:1545824538235,
						// sign:"H1hzUtBOsCTubzqtGES7at6/gHI=",
						// version:"3.8.7"
					
						biz_method: "showIconImage",
						biz_module: "filesService",
						biz_param: {fileType: 1},
						sign: "XOs5RCBVGABLBQvGXYpKCrjIjh0=",
						time: 1545908316235,
						version: "3.8.7"
					}
				
			}).then(res=>{
				console.log(res.data.biz_result.list)
				this.fiveList =res.data.biz_result.list[0].path.slice(0,5)


			})

		},
		components:{
		tabbar,
		myheader,
		swipe,
		},
		watch:{

		}
	}


</script>

<style>
.five{
	display: flex;
	
	margin-bottom: 5px;
	background-color: #fff;

}
.five li{
	display: flex;
	flex:1;
	flex-direction: column;
	margin-top: 20px;


}
.five li img{
	margin: auto;
	line-height: 50px;
	
}
.five li span{
		display: block;
		font-size: 13px;
	margin: 5px auto;
	color:#bbb;
}
#two{
	width: 100%;
	padding: 3px;
}
#two ul{
	background-color: #fff;
	height: 30px;
}
</style>