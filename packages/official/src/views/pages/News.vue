<template>
	<main>
		<header class="page-header page-header-dark bg-gradient-primary-to-secondary">
			<div class="page-header-content pt-10 pb-5">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6" data-aos="fade-up">
							<h1 class="page-header-title text-center">橙果工作室</h1>
							<h1 class="page-header-title text-center">橙果新闻</h1>
						</div>
						<div class="col-lg-6" data-aos="fade-up" data-aos-delay="50"><img src="https://s3.ax1x.com/2020/11/18/De1PeS.png"
							class="img-fluid " /></div>
					</div>
				</div>
			</div>
			<div class="svg-border-rounded text-white">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor">
					<path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
				</svg>
			</div>
		</header>
		
		<div>
			<section class="bg-white py-10">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-12">
							本页面正在开发中
						</div>
					</div>
				</div>
			</section>
		</div>
		<foot></foot>
	</main>
</template>

<script>
	import foot from "@/components/Footer.vue"
	export default {
		data() {
			return {
				newslist: [
					
				],
			}
		},
		components: {
			foot
		},
		created() {
			
		}
	};
</script>

<style>
</style>
