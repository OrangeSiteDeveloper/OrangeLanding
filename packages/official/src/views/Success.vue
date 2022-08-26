<template>
	<div>
		<main>
			<header class="page-header page-header-dark bg-img-repeat bg-secondary" id="header" style='background-image: url("https://s1.ax1x.com/2020/09/12/waitd1.png")'>
					<div class="page-header-content">
						<div class="container">
							<div class="row align-items-center">
								<div class="col-12">
									<div class="card rounded-lg text-dark">
										<div class="card-header py-4">你的报名信息已经成功提交</div>
										<div class="card-body ">
											<div class="row">
												<div class="col-12 text-center">
													<img src="https://s1.ax1x.com/2020/09/23/wxQGxe.png" class="img-fluid img-signicon">
												</div>
												<div class="col-12">
													<p>我们已经收到了你的报名信息，请注意查收短信。</p>
													<p>你可以在网页最下方导航栏“加入我们”一列中点击“查询报名状态”确认你的报名情况。</p>
													<p>欢迎加入2020年橙果纳新QQ大群452315484，如对报名或其他问题有疑问亦可在本群讨论。</p>
													<p>橙果工作室欢迎你的到来！</p>
													
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
		</main>
		<foot></foot>
	</div>
</template>

<script>
	import foot from "@/components/Footer.vue"
	export default {
		data() {
			return {
				infolist: [],
			}
		},
		components: {
			foot
		},
		methods: {
			
		},
	};
</script>

<style>
</style>
