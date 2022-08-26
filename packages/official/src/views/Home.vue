<template>
	<div class="home">
		<body>
			<div id="layoutDefault">
				<div id="layoutDefault_content">
					<main>
						<nav class="navbar navbar-marketing navbar-expand-lg topbar fixed-top">
							<div class="container">
								<router-link to="/">
									<div class="navbar-brand neucard-square">
										<img src="https://s3.ax1x.com/2020/11/17/DZJFMt.png" class="img-fluid img-responsive img-navbar" />
									</div>
								</router-link>
								<button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="togglebtn">
									<i class="fa fa-reorder"></i>
								</button>
								<div class="collapse navbar-collapse" id="navbarSupportedContent">
									<ul class="navbar-nav ml-auto mr-lg-5">
										<li class="nav-item dropdown no-caret">
											<router-link to="/">
												<a class="nav-link dropdown-toggle text-white">官网主页<i class="fa fa-angle-right dropdown-arrow"></i></a>
											</router-link>
										</li>

										<li class="nav-item dropdown no-caret">
											<a class="nav-link dropdown-toggle text-white" id="navbarDropdownDemos" href="#" role="button" data-toggle="dropdown"
											aria-haspopup="true" aria-expanded="false">工作部门<i class="fa fa-angle-right dropdown-arrow"></i></a>
											<div class="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownDemos">
												<router-link to="/study">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-edit"></i>
														</div>
														<div>
															<div class="small text-gray-500">学习部</div>
															<span class="text-dark">制定计划/储备资源/培训基础/组织考核</span>
														</div>
													</a>
												</router-link>
												<div class="dropdown-divider m-0"></div>
												<router-link to="/secretary">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-folder-open"></i>
														</div>
														<div>
															<div class="small text-gray-500">秘书部</div>
															<span class="text-dark">整理记录/协助服务/策划活动/考勤监督</span>
														</div>
													</a>
												</router-link>
												<div class="dropdown-divider m-0"></div>
												<router-link to="/propaganda">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-camera"></i>
														</div>
														<div>
															<div class="small text-gray-500">宣传部</div>
															<span class="text-dark">对外宣传/对内教育/对上参谋/对下指导</span>
														</div>
													</a>
												</router-link>

												<div class="dropdown-divider m-0"></div>
												<router-link to="/communication">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-paper-plane"></i>
														</div>
														<div>
															<div class="small text-gray-500">外联部</div>
															<span class="text-dark">外联商企/内联校内/承办活动/筹措经费</span>
														</div>
													</a>
												</router-link>
											</div>
										</li>

										<li class="nav-item dropdown no-caret">
											<a class="nav-link dropdown-toggle text-white" id="navbarDropdownPages" href="#" role="button" data-toggle="dropdown"
											aria-haspopup="true" aria-expanded="false">学习小组<i class="fa fa-angle-right dropdown-arrow"></i></a>
											<div class="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownPages">
												<router-link to="/website">
													<a class="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-ui-kit-pro/quickstart" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-code"></i>
														</div>
														<div>
															<div class="small text-gray-500">网站组</div>
															<span class="text-dark">于纷繁网站探寻前端无穷奥秘</span>
														</div>
													</a>
												</router-link>
												<div class="dropdown-divider m-0"></div>
												<router-link to="/bigdata">
													<a class="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-ui-kit-pro/components" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-database"></i>
														</div>
														<div>
															<div class="small text-gray-500">大数据组</div>
															<span class="text-dark">精于数据分析，提前洞察先机</span>
														</div>
													</a>
												</router-link>
												<div class="dropdown-divider m-0"></div>
												<router-link to="/hardware">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-desktop"></i>
														</div>
														<div>
															<div class="small text-gray-500">硬件组</div>
															<span class="text-dark">我们可不仅仅是修电脑的</span>
														</div>
													</a>
												</router-link>
												<div class="dropdown-divider m-0"></div>
												<router-link to="/embed">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-th"></i>
														</div>
														<div>
															<div class="small text-gray-500">嵌入式组</div>
															<span class="text-dark">软硬皆施走遍天下都不怕</span>
														</div>
													</a>
												</router-link>
												<div class="dropdown-divider m-0"></div>
												<router-link to="/programming">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-terminal"></i>
														</div>
														<div>
															<div class="small text-gray-500">程序设计组</div>
															<span class="text-dark">码出梦想，码出未来</span>
														</div>
													</a>
												</router-link>
											</div>
										</li>

										<!-- 橙果媒体 -->
										<li class="nav-item dropdown no-caret mb-3">
											<a class="nav-link dropdown-toggle text-white" id="navbarDropdownDemos" href="#" role="button" data-toggle="dropdown"
											aria-haspopup="true" aria-expanded="false">工作室风采<i class="fa fa-angle-right dropdown-arrow"></i></a>
											<div class="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownDemos">
												<router-link to="/microcourse">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-toggle-right"></i>
														</div>
														<div>
															<div class="small text-gray-500">橙果微课</div>
															<span class="text-dark">我的橙果，分你一半！</span>
														</div>
													</a>
												</router-link>
												<div class="dropdown-divider m-0"></div>
												<router-link to="/recommend">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-laptop"></i>
														</div>
														<div>
															<div class="small text-gray-500">选购推荐</div>
															<span class="text-dark">为你推荐当季高性价比设备！</span>
														</div>
													</a>
												</router-link>
												<div class="dropdown-divider m-0"></div>
												<router-link to="/gallery">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-picture-o"></i>
														</div>
														<div>
															<div class="small text-gray-500">活动剪影</div>
															<span class="text-dark">日常活动照片图集</span>
														</div>
													</a>
												</router-link>
												<div class="dropdown-divider m-0"></div>
												<router-link to="/news">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-newspaper-o"></i>
														</div>
														<div>
															<div class="small text-gray-500">橙果新闻</div>
															<span class="text-dark">掌握橙果工作室最新动态</span>
														</div>
													</a>
												</router-link>
												<div class="dropdown-divider m-0"></div>
												<router-link to="/techs">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-line-chart"></i>
														</div>
														<div>
															<div class="small text-gray-500">技术分享</div>
															<span class="text-dark">工作室成员技术总结贴</span>
														</div>
													</a>
												</router-link>
											</div>
										</li>

										<li class="nav-item dropdown no-caret mb-3">
											<a class="nav-link dropdown-toggle text-white" id="navbarDropdownDemos" href="#" role="button" data-toggle="dropdown"
											aria-haspopup="true" aria-expanded="false">极橙大后台<i class="fa fa-angle-right dropdown-arrow"></i></a>
											<div class="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownDemos">
												<router-link to="/geekorange">
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4">
															<i class="fa fa-tachometer"></i>
														</div>
														<div>
															<div class="small text-gray-500">点击进入</div>
															<span class="text-dark">橙果工作室综合管理系统</span>
														</div>
													</a>
												</router-link>
											</div>
										</li>


										<!-- <li class="nav-item dropdown no-caret">
											<a class="nav-link dropdown-toggle text-white" id="navbarDropdownPages" href="#" role="button" data-toggle="dropdown"
											aria-haspopup="true" aria-expanded="false">简介<i class="fa fa-angle-right dropdown-arrow"></i></a>
											<div class="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownPages">
												<a class="dropdown-item py-3"  target="_blank">
													<div class="icon-stack bg-primary-soft text-primary mr-4"><i class="fa fa-star-o"></i></div>
													<div>
														<div class="small text-gray-500">关于我们</div>
														一个很棒的技术工作室
													</div>
												</a>
												<div class="dropdown-divider m-0"></div>
												<a class="dropdown-item py-3" target="_blank">
													<div class="icon-stack bg-primary-soft text-primary mr-4"><i class="fa fa-users"></i></div>
													<div>
														<div class="small text-gray-500">往届优秀成员</div>
														点击查看
													</div>
												</a>
												<div class="dropdown-divider m-0"></div>
													<a class="dropdown-item py-3" target="_blank">
														<div class="icon-stack bg-primary-soft text-primary mr-4"><i class="fa fa-wrench"></i></div>
														<div>
															<div class="small text-gray-500">二级页面模板</div>
															点击查看
														</div>
													</a>
											</div>
										</li> -->

										<!-- <li class="nav-item">
                      <router-link to="/join-us">
                        <a
                          class="btn-teal btn rounded-pill px-4 ml-lg-4 text-white"
                          target="_blank"
                        >
                          加入我们<i class="fa fa-arrow-right ml-1"></i>
                        </a>
                      </router-link>
                    </li> -->

									</ul>
								</div>
							</div>
						</nav>
					</main>
				</div>
				<transition name="slide-fade">
					<router-view></router-view>
				</transition>
			</div>
		</body>
	</div>
</template>

<link href="https://cdn.bootcdn.net/ajax/libs/aos/2.1.0/aos.css" rel="stylesheet">
<!-- <link rel="icon" type="image/x-icon" href="/assets/img/favicon.png" /> -->
<script src="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.11.2/js/all.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.24.1/feather.min.js" crossorigin="anonymous"></script>
<script src="../js/scripts.js"></script>
<script>
	// import Cookies from 'js-cookie'
	import $ from "jquery";
	import AOS from "aos";
	export default {
		components: {},
		data() {
			return {};
		},

		methods: {},
		created() {
			AOS.init({
				disable: "mobile",
				duration: 600,
				once: true,
			});
		},
		computed: {},
	};
</script>
<script src="js/scripts.js"></script>
<!-- <script>
	import AOS from 'aos'
	AOS.init({
		disable: 'mobile',
		duration: 600,
		once: true
	});
</script> -->
