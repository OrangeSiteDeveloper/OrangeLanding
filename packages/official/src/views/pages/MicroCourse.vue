<template>
	<main>
		<header class="page-header page-header-dark bg-gradient-primary-to-secondary">
			<div>
				<div class="container mt-5">
					<h1 class="mctitle">橙果微课视频归档</h1>
					<p>{{title}}</p>
				</div>
				<div class="container">
					<iframe id="if" src="//player.bilibili.com/player.html?bvid=BV1s5411V7mj"
					scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
					</iframe>
				</div>
				
				<div class="container mt-5">
					<h1>微课目录</h1>
				</div>
				
				<ul class="container mt-3" >
					<li class="list-inline-item btn btn-primary-soft m-1 text-left" v-for="(video, index) in course" :key="index">
						<label @click="fun1($event)" class="option1 mr-2" :id="index">{{index + 1}}. {{ video.title }} - {{ video.auther }}</label>
					</li>
				</ul>
				
			<!-- 	<div class="dropdown container mt-5">
					<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
						选择播放：第一期
					</button>
					
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">
							<label class="option11">
								<input @click="fun1($event)" type="radio" name="options" class="option1" id="0" />
								{{ course[0].title }}-{{ course[0].auther }}
							</label>
						</a>
						<a class="dropdown-item" href="#">
							<label class="">
								<input @click="fun1($event)" type="radio" name="options" class="option1" id="1" />
								{{ course[1].title }}-{{ course[1].auther }}
							</label>
						</a>
						<a class="dropdown-item" href="#">
							<label class="">
								<input @click="fun1($event)" type="radio" name="options" class="option1" id="2" />
							</label>
						</a>
					</div>
				</div> -->

				<div class="svg-border-rounded text-white">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor">
						<path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
					</svg>
				</div>
			</div>
		</header>
		<foot></foot>
	</main>
</template>

<script>
	import foot from "@/components/Footer.vue";
	export default {
		data() {
			return {
				nowcourse: {},
				//json结构
				course: [{
						id: 0,
						title: "浅谈Markdown文本记述法",
						auther: "周翔",
						src: "//player.bilibili.com/player.html?bvid=1s5411V7mj",
					},
					{
						id: 1,
						title: "计算机常见物理接口",
						auther: "郎文杰",
						src: "//player.bilibili.com/player.html?bvid=1h54y1z7pe",
					},
					{
						id: 2,
						title: "机械键盘的科普与选购推荐",
						auther: "杨涵",
						src: "//player.bilibili.com/player.html?bvid=BV1yD4y1U7ar",
					},
					{
						id: 3,
						title: "VMWare虚拟机的使用",
						auther: "吴典泽",
						src: "//player.bilibili.com/player.html?bvid=BV1yD4y1U7ar",
					},
				],
			};
		},
		methods: {
			fun1(e) {
				// console.log(e.target);
				let num = e.target.id;
				document.getElementById("if").src = this.course[num].src;
				this.nowcourse = this.course[num];
			},

			// created() {
			//   this.axios
			//     .get("/microcourse")
			//     .then((res) => {
			//       // console.log(res.data.content);
			//       this.course = res.data.content;
			//       // console.log(this.numlist);
			//     })
			//     .catch((res) => {
			//       console.log("获取学生信息失败", res.data);
			//     });
			// },
		},
		components: {
			foot,
		},
		mounted() {
			this.nowcourse = this.course[0];
		},
		computed: {
			title() {
				return "第" + (this.nowcourse.id + 1) + "期：" + this.nowcourse.title;
			}
		}
	};
</script>

<style scoped>
	.mctitle {
		font-size: 2rem;
	}
	
	#layoutDefault_content {
		height: 100px;
	}

	iframe {
		width: 100%;
		height: 60vh;
/* 		margin-left: 8vw;
		margin-top: 2.5vw; */
	}

	.nu {
		background-color: rebeccapurple;
		height: 80vh;
		width: 80vh;
	}

	.list-group {
		display: inline-block;
		width: 20vw;
	}

	.dropdown-menu {
		position: absolute;
		top: 1000px;
		background: rebeccapurple;
		z-index: 9999;
	}

	.btn-group-vertical {
		margin-left: 1vw;
		margin-top: -82.7vh;
		height: 38vw;
		width: 15vw;
		/* border-radius: 10vh; */
		overflow: auto;
		border-radius: 2vw;
	}

	.btn {
		/* padding-top: 1.3vw; */
		/* padding-bottom: 1.3vw; */
		/* background: white; */
		/* font-size: 1vw; */
	}

	.option1 .btn-outline-success {
		border-radius: 10vw;
	}

	/* .option11 {
		margin-top: 10vw;
	} */

	div::-webkit-scrollbar {
		width: 20px;
		height: 10px;
		display: none;
	}

	div::-webkit-scrollbar-track {
		background: rgb(250, 250, 250);
		border-radius: 2px;
		padding-left: 10vw;
		display: none;
	}

	div::-webkit-scrollbar-thumb {
		background: rgba(0, 161, 214, 0);
		border-radius: 10px;
	}

	div::-webkit-scrollbar-thumb:hover {
		background: #333;
		display: none;
	}

	div::-webkit-scrollbar-corner {
		background: rgb(0, 161, 214);
	}

	.active {
		background: rgb(0, 161, 214) !important;
	}

	@media only screen and (max-width: 700px) {
		iframe {
			height: 30vh;
			/* width: 100vw; */
			margin-left: 0vw;
			margin-top: 2vh;
		}

		.btn-group-vertical {
			display: inline-block;
			position: relative;
			top: 50vh;
			left: 3vw;
			width: 100vw;
			height: 20vh;
		}

		.btn input {
			display: inline-block;
			width: 10vw;
		}

		.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),
		.btn-group-vertical>.btn-group:not(:last-child)>.btn {
			width: 18.6vw;
			height: 20vh;
		}

		.btn-group-vertical>.btn:not(:first-child),
		.btn-group-vertical>.btn-group:not(:first-child)>.btn {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			width: 18.6vw;
			height: 20vh;
		}

		div::-webkit-scrollbar {
			width: 20px;
			height: 10px;
		}

		div::-webkit-scrollbar-track {
			background: rgba(250, 250, 250, 0);
			border-radius: 2px;
		}

		div::-webkit-scrollbar-thumb {
			background: rgba(0, 161, 214, 0);
			border-radius: 10px;
		}

		div::-webkit-scrollbar-thumb:hover {
			background: #333;
		}

		div::-webkit-scrollbar-corner {
			background: rgb(0, 161, 214);
		}

		.option11 {
			margin-top: 0vw;
		}
	}

	.dropdown-menu {
		background: white;
	}
</style>
