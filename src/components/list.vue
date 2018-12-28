<template>
	<div>
		<div class="head">
			
		</div>
		<div class="nav"></div>

		<ul>
			<li v-for="data in breedNamelist" @click="handleclick(data.id)" :key="data.id">
				<img class="pic1" :src="data.image"/>
				<img class="pic2" :src="data.cFlagsPath"/>
				
 				<span>
					{{data.breedName}}
				</span>
			</li>
		</ul>
		
		

		
	</div>
</template>

<script >
	import axios from 'axios'
	export default {
		data(){
			return{
				breedNamelist:[]

			}
		},
		methods:{
			handleclick(id){
				this.$router.push(`/detail/${id}`)
			}
		},
		mounted(){
			axios({
				url:"front/handle/control.do",
				method:'post',
				data:
				{
					biz_method: "querySupplyList",
                    biz_module: "intentionService",
                    biz_param: {sort: {shelve_time: 0, price: 0}, sampling: "", isAuth: "-1", pn: 1, pSize: 10, location: []},
                    version: "3.8.7"
				}
			}).then(res=>{
				this.breedNamelist=res.data.biz_result.list

				console.log(res.data.biz_result.list)
			})
		}
	}
</script>

<style scoped lang="scss">
.head{
	height: 70px;
	background-color:#ff8201;
}
.nav{
	height: 40px;
	background-color:white;
	margin-bottom: 15px
}

	ul{
		width: 90%;
		list-style: none;
		margin-left: 20px;
		li{
			position:relative;
			cursor: pointer;
			border-left:1px solid #ccc;
			border-radius: 8px; 
			height: 100px;
			background-color:white;
			margin-bottom:15px;
			box-shadow: 2px 2px 2px #ccc;
			.pic1{
				width: 80px;
				height: 80px;
				margin: 10px;
			}
			.pic2{
				position:absolute;
				width: 25px;
				height: 18px;
				margin-top: 10px;
			}
		}
	}

</style>  