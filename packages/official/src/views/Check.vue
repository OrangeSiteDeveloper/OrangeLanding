<template>
	<div>
		<main>
			<header class="page-header page-header-dark bg-img-repeat bg-secondary" id="header" style='background-image: url("https://s1.ax1x.com/2020/09/12/waitd1.png")'>
					<div class="page-header-content">
						<div class="container">
							<div class="row align-items-center">
								<div class="col-lg-12">
									<div class="card rounded-lg text-dark">
										<div class="card-header py-4">查询报名状态</div>
										<div class="card-body">
											<form>
												
												<div class="form-row">
													<div class="form-group col-12">
														<label class="small text-gray-600" for="phone">请输入提交时的手机号</label>
														<input class="form-control rounded-pill" id="phone" v-model="iphone" type="text" placeholder="请输入手机号" />
													</div>
												</div>
												<div class="form-group">
													<p class="text-danger">{{popinfo}}</p>
												</div>
												<div class="form-group" v-if="flag">
													<p>手机号：{{phone}}</p>
													<p>姓名：{{name}}</p>
													<p>学号：{{stuid}}</p>
													<p>性别：{{sex}}</p>
													<p>专业班级：{{college}}</p>
													<p>意向小组：{{group}}</p>
													<p>意向部门：{{department}}</p>
													<p>自我介绍：{{intro}}</p>
													<p>报名id：{{ id }}</p>
													<p>面试教室：{{ classroom }}</p>
													<p>请核对以上信息是否正确，如有错误，请加入橙果纳新QQ大群452315484联系网站管理员修改。</p>
												</div>
												
												<button type="button" class="btn btn-primary btn-marketing btn-block rounded-pill mt-4" @click="checkInfo">
													查询报名状态
												</button>
											</form>
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
				infolist: "",
				popinfo: "",
				name: "",
				stuid: "",
				phone: "",
				college: "",
				sex: "",
				group: "",
				department: "",
				intro: "",
				flag: false,
				iphone: "",
				id: 0,
			}
		},
		components: {
			foot
		},
		computed: {
			// eslint-disable-next-line vue/return-in-computed-property
			classroom() {
				if (this.infolist.id > 256) {
					if (this.infolist.id % 2 == 1) {
						return "10月11号上午九点，橙果大会议室（图书馆一楼西侧）"
					} else {
						return "10月11号上午九点，橙果小会议室（图书馆一楼西侧）"
					}
				}
				else {
					if (this.infolist.id % 2 == 1) {
						if (this.infolist.id <= 142)
							return "1教阶梯102，请于晚六点前到"
						else 
							return "1教阶梯102，请于晚八点前到"
					} else {
						if (this.infolist.id <= 142)
							return "1教阶梯104，请于晚六点前到"
						else 
							return "1教阶梯104，请于晚八点前到"
					}
				}
				
			}
		},
		methods: {
			checkInfo() {
				this.axios.get('getSignUpInfo?phone=' + this.iphone)
					.then(res => {
						this.infolist = res.data.content;
						console.log(this.infolist);
						if (this.infolist == null) {
							this.flag = false;
							this.popinfo = "找不到手机号为" + this.iphone + "的报名信息，手机号是否填错？"
						}
						else {
							this.flag = true;
							this.popinfo = "";
							this.phone = this.infolist.phone;
							this.name = this.infolist.userName;
							this.stuid = this.infolist.stuId;
							this.college = this.infolist.college;
							this.sex = this.infolist.sex;
							this.group = this.infolist.groupName;
							this.department = this.infolist.department;
							this.intro = this.infolist.intro;
							this.id = this.infolist.id;
							if (this.department == "")
								this.department = "无";
						}
						
					})
					.catch(res => {
						this.popinfo = "出错了，报错信息为" + res;
						// console.log('获取提交信息失败', res);
					})
			}
		},
	};
</script>

<style>
</style>
