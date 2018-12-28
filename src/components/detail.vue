<template>
	<div>
		<ul>
			<li v-for="data in datalist">
				{{data}}
			</li>
		</ul>
	</div>
</template>

<script >
	import axios from 'axios'
	export default {
		data(){
			return{
				datalist:[]

			}
		},
		mounted(){
			// console.log(this.$route.params)
			axios({

				url:"front/handle/control.do",
				method:'post',
				data:
				{
					biz_method: "queryIntentionInfo",
					biz_module: "intentionService",
					biz_param: {id: `${this.$route.params.id}`},

					version: "3.8.7",
				}
			}).then(res=>{
				this.datalist=res.data.biz_result.breedName
				console.log(this.$route.params)
				
				console.log(res.data)
			})
		}
		}
	
</script>

<style scoped>


</style>