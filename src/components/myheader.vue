<template>

		<header>
		<ul>
			<!-- <li @click="handelClick()">
			<img :src="datalist[0]">
							
				<span >{{name}}</span>
			</li> -->
			<router-link to="/shoppingcar" tag="li" >

				<img :src="datalist[0]">
				<span >{{shopname}}</span>

		</router-link>
			<li class="middle">
				<input type="text" name="information" placeholder="请输入你想要的资源">
			</li>
			<li @click="isShow=true">
			<img :src="datalist[1]">
							
				<span>{{infoname}}</span>
			</li>
		</ul>

		<popup v-model="isShow" popup-transtion="popup-fade">亲，您还没有注册哦~</popup>

	</header>

</template>

<script >
	import axios from 'axios'
	import { Popup } from 'mint-ui';

	

	export default {

		data(){
			return{
			shopname:'购物车',
			datalist:[],
			
			infoname:'消息',
			isShow:false
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

						biz_module: "filesService",
						 biz_method: "showIconImage", 
						 biz_param: {fileType: 1},
						sign: "7mQ/wnvswz4wEVxQA1pFuWHdn6I=",
					    time: 1545891484235,
					    version: "3.8.7"
					}
				
			}).then(res=>{
/*				console.log(res.data.biz_result.list[0].path)


*/				this.datalist= res.data.biz_result.list[0].path
				
			
		})

		},
		methods:{
					/*handelClick(){
						'isShow'==true
						console.log('aaa')
					}*/
			},
		components:{
			

			"Popup":Popup,
			

		}

	
	}

</script>

<style  lang="scss">

header{
		position: fixed;
		left:5px;
		top:15px;
		width:100%;
		height: 70px;
		overflow:hidden;
		z-index: 1;
		ul{
			list-style:none;
			display: flex;
			li{
 				line-height: 20px;

				width:15%;

				img{
				}
				span{
					display:block;
					color:#fff

				}
			}
			li.middle{
				width:80%;
				input{
					width:90%;	
					height:25px;
					margin-top:13px;
					margin-left:8px;
					border-radius: 5px;
					text-indent: 1em;
					opacity:0.7

				}

			}
		}
	}
</style>
