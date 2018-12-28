<template>

		<footer>
		<ul>
			<router-link to="/" tag="li" activeClass=active0>
				<img :src="looplist[0]">
				<span>首页</span>
			</router-link>
<!-- 			<router-link to="/" tag="li" activeClass=active1>
				<img :src="looplist[1]">
				<span>首页</span>
			</router-link>
			<router-link to="/list" tag="li" activeClass=active2>
				<img :src="looplist[2]">
				<span>资源</span>
			</router-link>
 -->			<router-link to="/list" tag="li" activeClass=active3>
				<img :src="looplist[3]">
				<span>资源</span>
			</router-link>
<!-- 			<router-link to="/shoppingcar" tag="li" activeClass=active4>
				<img :src="looplist[4]">
				<span>资源</span>
			</router-link>
 -->			<router-link to="/shoppingcar" tag="li" activeClass=active5>
				<img :src="looplist[5]">
				<span>求购</span>
			</router-link>
<!-- 			<router-link to="/my" tag="li" activeClass=active6>
				<img :src="looplist[6]">
				<span>资源</span>
			</router-link>
 -->			<router-link to="/my" tag="li" activeClass=active7>
				<img :src="looplist[7]">
				<span>我的</span>
			</router-link>
		
		</ul>
	</footer>

</template>

<script >
	import axios from 'axios'

	export default {

		data(){
			return{
			name:'lihaibo',
			looplist:[],
			isShow:false
			}
		},
	mounted(){
			axios({
				url:"front/handle/control.do",
				method:'post',
				data:
					{
						biz_module:"filesService",
						biz_method:"showIconImage",
						biz_param:{"fileType":0},
						time:1545824538235,
						sign:"H1hzUtBOsCTubzqtGES7at6/gHI=",
						version:"3.8.7"
					}
				
			}).then(res=>{
				// console.log(res.data.biz_result.list[0].path)
				this.looplist= res.data.biz_result.list[0].path
			})

		}
	
	}
</script>

<style  lang="scss">

footer{
		position: fixed;
		padding-top: 10px;
		bottom:5px;
		width:100%;
		height: 70px;
		background-color: white;

		ul{
			list-style:none;
			display: flex;
			li{
				flex:1;
				text-align: center;
				line-height: 20px;
				img{
					display: inline-block;
					width: 31%;
					height:32px;
				}
				span{
					display:block;
				}
			}
		}
	}
</style>
