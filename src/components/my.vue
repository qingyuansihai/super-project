<template>
	<div>
		<mt-header title="个人中心" fixed style="background-color: #f60;height:60px">
		<router-link to="/" slot="left">
		<mt-button icon="back">返回</mt-button>
		</router-link>
		<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="user"></div>
		<nav>
			<div>
			<span class="iconfont icon-Mycollection"></span>
			<p>我的收藏</p></div>
			<div>
			<span class="iconfont icon-shoufei"></span>
			<p>药款宝</p></div>
			<div>
			<span class="iconfont icon-shouye1"></span>
			<p>药贷宝</p></div>

		</nav>
		<section class="all">
			
		<section class="one">
			
		</section>
		<section class="two">
			
		</section>
		<section class="three">
			
		</section>
		<section class="four">
			
		</section>
		</section>
		<main>
			
		</main>

		<myfooter></myfooter>	  
	</div>
</template>

<script >
	import { Header } from 'mint-ui';
	import Vue from 'vue'
	import myfooter from './myfooter'
	
	export default {

		components:{
			myfooter
		}
		
	}
</script>

<style lang="scss">

.user{
	background-color:#f60;
	height:8rem;
	width:100%;
}
nav{ height:4.3rem;background-color: #fff;display: flex;justify-content: space-around;
	div{flex: 1;text-align: center;}
	span{height:3rem;width:40px;display: block;line-height: 3rem;display: block;}
	.iconfont {font-size:1.8rem}
	p{}
	
}
section.all{
	display: flex;flex-direction: column;
	height:600px;background-color: #f3f3f3;justify-content: space-between;

section.one{
	flex: 1; background-color: #00f;margin-top: .2rem;
	
}
section.two{
	flex: 1; background-color: #f0f;margin-top: .2rem;
}
section.three{
	flex: 1; background-color: #ff0;margin-top: .2rem;
}
section.four{
	flex: 1; background-color: #0ff;margin-top: .2rem;
}
}
main{
	
}
</style>