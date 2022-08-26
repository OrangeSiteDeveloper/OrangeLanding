<template>
	<div>
		<main>
			<header class="page-header page-header-dark bg-img-repeat bg-secondary" id="header" style='background-image: url("https://s1.ax1x.com/2020/09/12/waitd1.png")'>
					<div class="page-header-content pt-5">
						<div class="container">
							<div class="row align-items-center">
								<div class="col-lg-6">
									<div class="badge badge-marketing badge-pill badge-secondary-soft text-secondary mb-3">加入我们，一起成长吧！</div>
									<h1 class="page-header-title">在橙果，<br />发掘你的潜力，<br />智慧与才能。</h1>
									<p class="page-header-text">工作室在每年新生入学后进行大规模纳新，面向新同学，同时也欢迎想要加入工作室的高年级同学，一起为工作室的发展添砖加瓦，贡献自己的一份力量！</p>
									<p class="page-header-text">成功提交报名表后，你将收到一份短信提示，请按照短信内注明的时间和地点按时参加初次面试。面试通过者将进入复试，通过者将加入橙果工作室，享受工作室提供的专属资源。</p>
									<p class="page-header-text"><i class="fa fa-arrow-down mr-2"></i>下拉可查看更多信息</p>
								</div>
								<div class="col-lg-6">
									<div class="card rounded-lg text-dark">
										<div class="card-header py-4">请在下方填写你的报名信息</div>
										<div class="card-body">
											<form>
												<div class="form-group">
													<p>如果遇到点击提交无反应等情况，请清空浏览器缓存再试！</p>
												</div>
												<div class="form-row">
													<div class="form-group col-md-6">
														<label class="small text-gray-600" for="name">姓名</label>
														<input class="form-control rounded-pill" id="name" v-model="name" type="text" placeholder="请输入姓名" />
													</div>
													<div class="form-group col-md-6">
														<label class="small text-gray-600" for="stuid">学号</label>
														<input class="form-control rounded-pill" id="stuid" v-model="stuid" type="text" placeholder="请输入学号" />
													</div>
												</div>
												<div class="form-row">
													<div class="form-group col-md-6">
														<label class="small text-gray-600" for="phone">手机号（请勿填错）</label>
														<input class="form-control rounded-pill" id="phone" v-model="phone" type="text" placeholder="请输入手机号" />
													</div>
													<div class="form-group col-md-6">
														<label class="small text-gray-600" for="college">专业班级</label>
														<input class="form-control rounded-pill" id="college" v-model="college" type="text" placeholder="示例：软工20-1" />
													</div>
												</div>
												<div class="form-row">
													<div class="form-group col-md-6">
														<label class="small text-gray-600" for="sex">性别</label>
														<select class="form-control rounded-pill" id="sex" v-model="sex">
															<option value="">未选择</option>
															<option value="男">男</option>
															<option value="女">女</option>
														</select>
													</div>
													<div class="form-group col-md-6">
														<label class="small text-gray-600" for="group">意向小组</label>
														<select class="form-control rounded-pill" id="group" v-model="group">
															<option value="">未选择</option>
															<option value="网站组">网站组</option>
															<option value="大数据组">大数据组</option>
															<option value="硬件组">硬件组</option>
															<option value="嵌入式组">嵌入式组</option>
															<option value="程序设计组">程序设计组</option>
														</select>
													</div>
												</div>
												<div class="form-group">
													<label class="small text-gray-600" for="department">意向部门（可选）</label>
													<select class="form-control rounded-pill" id="department" v-model="department">
														<option value="">不选择任何部门</option>
														<option value="学习部">学习部</option>
														<option value="秘书部">秘书部</option>
														<option value="宣传部">宣传部</option>
														<option value="外联部">外联部</option>
													</select>
												</div>
												<div class="form-group">
													<label class="small text-gray-600" for="intro">用一段简短的文字介绍自己！</label>
													<textarea class="form-control " rows="6" placeholder="比如你的性格，爱好，特长..." id="intro" name="intro" v-model="intro"></textarea>
												</div>
												<div class="form-group">
													<p class="text-danger" v-if="!complete">你的信息填写不完善，请重新填写！</p>
													<p class="text-danger" v-if="already">该手机号已经被注册过了！请检查</p>
													<p class="text-danger" v-if="!validphone">此手机号不是有效的手机号！</p>
												</div>
												
												<button type="button" disabled class="btn btn-primary btn-marketing btn-block rounded-pill mt-4 disabled" @click="submit">
													敬请期待2021纳新季再次开启
												</button>
												<!-- 
												<button type="button" id="btnsubmit" class="btn btn-primary btn-marketing btn-block rounded-pill mt-4" @click="submit">
													提交报名表
												</button>
												-->
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<section class="bg-light pt-10">
					<div class="container">
						<div class="row">
							<div class="col-lg-8 mb-5">
								<h2>A better way to improve yourself</h2>
								<p class="lead">橙果工作室让你发现更好的自己！</p>
							</div>
						</div>
						<div class="row mb-n10 z-1">
							<div class="col-lg-6 mb-5">
								<div class="card h-100">
									<div class="card-body p-5">
										<div class="icon-stack icon-stack-xl bg-secondary-soft text-secondary mb-4"><i class="fa fa-archive"></i></div>
										<h5>硬件设施充足</h5>
										<p class="card-text">工作室拥有舒适的工作学习环境，全年空调开放，存有纸质、电子版资料众多，配备工作室专属校园网专线，我们力争为工作室成员提供更好的基础硬件设施。</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6 mb-5">
								<div class="card h-100">
									<div class="card-body p-5">
										<div class="icon-stack icon-stack-xl bg-success-soft text-success mb-4"><i class="fa fa-check"></i></div>
										<h5>优秀团队带领</h5>
										<p class="card-text">依托校网络信息中心，工作室拥有多名优秀指导教师带领，往届学长学姐积累了满满的干货，只等你来深入学习，并将橙果技术与精神继续传递下去。</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6 mb-5 mb-lg-0">
								<div class="card h-100">
									<div class="card-body p-5">
										<div class="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4"><i class="fa fa-crosshairs"></i></div>
										<h5>聚焦技术热点</h5>
										<p class="card-text">摒弃旧课本上的“老掉牙”，工作室的学习内容与时俱进，直击当前主流需求，让工作室成员能够熟练上手，学以致用，为以后考研、就业等打下坚实技术基础。</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="card h-100">
									<div class="card-body p-5">
										<div class="icon-stack icon-stack-xl bg-warning-soft text-warning mb-4"><i class="fa fa-smile-o"></i></div>
										<h5>气氛轻松和谐</h5>
										<p class="card-text">工作室是一个轻松欢乐的地方，这里没有什么条条框框的繁杂限制，杜绝官僚主义与形式主义等大学组织弊病，大家能在一起开心的学习就是我们的目标。</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="svg-border-angled text-white">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
							<polygon points="0,100 100,0 100,100"></polygon>
						</svg>
					</div>
				</section>
			
				<section class="bg-white border-bottom py-10">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-lg-6 mb-4 mb-lg-0">
								<h4 class="text-primary">准备好了吗？</h4>
								<p class="lead mb-0">点击填写你的报名表吧！</p>
							</div>
							<div class="col-lg-6 text-lg-right"><a class="btn btn-marketing btn-primary rounded-pill mr-3" href="#header">现在填写</a></div>
						</div>
					</div>
				</section>
				
		</main>
		<foot></foot>
	</div>
</template>

<script>
	import foot from "@/components/Footer.vue"
	export default {
		data() {
			return {
				name: "",
				stuid: "",
				phone: "",
				college: "",
				sex: "",
				group: "",
				department: "",
				intro: "",
				complete: true,
				already: false,
				infolist: "",
				validphone: true
			}
		},
		components: {
			foot
		},
		methods: {
			validatePhoneNumber(str) {
				const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				return reg.test(str);
			},
			submit() {
				let jsons = {
					userName: this.name,
					stuId: this.stuid,
					phone: this.phone,
					college: this.college,
					sex: this.sex,
					groupName: this.group,
					department: this.department,
					intro: this.intro
				};
				console.log(jsons);
				document.getElementById("btnsubmit").disabled = "disabled";
				document.getElementById("btnsubmit").className += " disabled";
				if (!this.validatePhoneNumber(this.phone)) {
					this.validphone = false;
					return;
				}
				else {
					this.validphone = true;
				}
				
				this.axios.get('getSignUpInfo?phone=' + this.phone)
					.then(res => {
						this.infolist = res.data.content;
						// console.log(this.infolist);
						if (this.infolist == null) {
							this.already = false;
						}
						else {
							this.already = true;
							return;
						}
						
						if (this.name == "" ||
								this.stuId == "" ||
								this.phone == "" ||
								this.college == "" ||
								this.sex == "" ||
								this.group == "" ||
								this.intro == "") {
							this.complete = false;
							return;
						}
						else {
							this.complete = true;
						}
						
						this.$axios({
							url: "http://139.199.7.176:8090/signUp",
							data: jsons,
							method: "post",
							header: {
								'Content-Type': 'application/json',
							},
						}).then(res => {
							// console.log(res.status);
							if (res.status == 200) {
								// console.log("发送成功");
								this.$router.push("/Success");
							}
							else {
								this.$router.push("/Failure");
								// console.log(res.data.code);
							}
						}).catch(Error => {
							this.$router.push("/Failure");
							console.log(Error);
						});
						
					})
					.catch(res => {
						// this.popinfo = "出错了，报错信息为" + res;
						console.log('获取提交信息失败', res);
					})
				
				
				
			}
		}
	};
</script>

<style>
</style>
