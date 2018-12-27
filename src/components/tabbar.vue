<template>
	<footer>
		<ul>
		        <router-link tag="li" to="/film" activeClass="kerwinactive">
		        	<i class="iconfont icon-all"></i>
		        	<span>film</span>
		        </router-link>
		        <router-link tag="li" to="/cinema" activeClass="kerwinactive">
		        	<i class="iconfont icon-cart"></i>
		        <span>cinema</span></router-link>
		        <router-link tag="li" to="/center" activeClass="kerwinactive">
		        	<i class="iconfont icon-help"></i>
		        <span>center</span></router-link>
		</ul>
	</footer>
</template>

<script >
	export default {
	}
</script>

<style scoped lang="scss">

	footer{
		position: fixed;
		left:0px;
		bottom:0px;
		width:100%;
		height: 50px;
		background-color: white;

		ul{
			display: flex;
			li{
				flex:1;
				text-align: center;
				line-height: 25px;
				i{
					display: inline-block;
					width: 100%;
				}
			}
		}
	}

</style>