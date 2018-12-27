<template>
	<div>
		<footer>
		<ul>
			<li>
				<img :src="looplist[0]">
				<span>首页</span>
			</li>
			<li>
				<img :src="looplist[3]">
				<span>首页</span>
			</li>
			<li>
				<img :src="looplist[5]">
				<span>首页</span>
			</li>
			<li>
				<img :src="looplist[7]">
				<span>首页</span>
			</li>
		</ul>
	</footer>
	</div>
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

<style scoped lang="scss">

footer{
		position: fixed;
		left:-22px;
		bottom:10px;
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
					width: 45%;
					height:40px;
				}
				span{
					display:block;
				}
			}
		}
	}

</style>