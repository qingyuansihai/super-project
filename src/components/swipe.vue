<template>
	<div>
	<swipe class="my-swipe">
		<swipe-item v-for="data in swipeImgList" :key="data.id">
			<img :src="data.activityImg"> 
			
		</swipe-item>
	</swipe>


	</div>
</template>

<script >
import axios from 'axios'


import 'vue-swipe/dist/vue-swipe.css' //引入样式
import { Swipe, SwipeItem } from 'vue-swipe';

	export default{
		data(){
			return{
				
				swipeImgList:[]
			}
		},
		computed:{

		},
		methods:{

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
						biz_method: "queryActivityList",
						biz_module: "activityService",
						biz_param: {type: 4},
						version: "3.8.7",
					
					}
				
			}).then(res=>{
				//console.log(res.data.biz_result.list)
				this.swipeImgList =res.data.biz_result.list


			})

		},
		components:{
		
		"swipe":Swipe,
		"swipe-item":SwipeItem
		},
		watch:{

		}
	}


</script>

<style>
.my-swipe{
height: 250px;
/*z-index: -1;*/
width: 100%

}
.my-swipe img{
	
	width: 100%
}
</style>