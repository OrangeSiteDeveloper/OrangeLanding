<template>
	<main>
		<header class="page-header page-header-dark bg-geek">
			<div class="page-header-content pt-5 pb-5 mt-10">
				<div class="container pt-15 pb-10">
					<div class="row align-items-center">
						<div class="col-lg-12" data-aos="fade-up">
							<h1 class="text-center geek-h1 text-white">极橙大后台计划即将启动</h1>
							<h1 class="text-center geek-h1 text-white">敬请期待</h1>
							<h1 class="text-center geek-h1 text-white">START PROJECT</h1>
						</div>
					</div>
				</div>
			</div>
			<div class="svg-border-rounded text-white">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor">
					<path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
				</svg>
			</div>
		</header>

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
