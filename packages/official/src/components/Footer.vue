<template>
  <footer class="footer pt-10 pb-5 mt-auto bg-white footer-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="footer-brand">
            <router-link to="/">
              <img class="img-fluid" src="../assets/img/cglogo.png" />
            </router-link>
          </div>
          <!-- <div class="mb-3 text-center mt-3">我的橙果，分你一半</div> -->
        </div>
        <div class="col-lg-9">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div class="text-uppercase-expanded text-xs mb-4">网站导航</div>
              <ul class="list-unstyled mb-0">
                <li class="mb-1">
                  <router-link to="/"> 主页 </router-link>
                </li>
                <li class="mb-1">
                  <router-link to="/study"> 学习部 </router-link>
                </li>
                <li class="mb-1">
                  <router-link to="/secretary"> 秘书部 </router-link>
                </li>
                <li class="mb-1">
                  <router-link to="/propaganda"> 宣传部 </router-link>
                </li>
                <li class="mb-1">
                  <router-link to="/communication"> 外联部 </router-link>
                </li>
                <li class="mb-1">
                  <router-link to="/website"> 网站组 </router-link>
                </li>
                <li class="mb-1">
                  <router-link to="/bigdata"> 大数据组 </router-link>
                </li>
                <li class="mb-1">
                  <router-link to="/hardware"> 硬件组 </router-link>
                </li>
                <li class="mb-1">
                  <router-link to="/embed"> 嵌入式组 </router-link>
                </li>
                <li class="mb-1">
                  <router-link to="/programming"> 程序设计组 </router-link>
                </li>
								<li>
									<span class="ft-pop" id="tooltip-target-3"
										>极橙大后台系统</span>
									<b-tooltip target="tooltip-target-3" triggers="hover">
										此页面还在开发中！
									</b-tooltip>
								</li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div class="text-uppercase-expanded text-xs mb-4">工作室风采</div>
              <ul class="list-unstyled mb-0">
                <li class="mb-1">
                  <router-link to="/microcourse"> 橙果微课 </router-link>
                </li>
								<li class="mb-1">
									<span class="ft-pop" id="tooltip-target-4">选购推荐</span>
									<b-tooltip target="tooltip-target-4" triggers="hover">
										此页面还在开发中！
									</b-tooltip>
								</li>
                <li class="mb-1">
                  <span class="ft-pop" id="tooltip-target-2"
                    >活动剪影</span
                  >
                  <b-tooltip target="tooltip-target-2" triggers="hover">
                    此页面还在开发中！
                  </b-tooltip>
                </li>
                <li class="mb-1">
                  <span class="ft-pop" id="tooltip-target-3"
                    >橙果新闻</span
                  >
                  <b-tooltip target="tooltip-target-3" triggers="hover">
                    此页面还在开发中！
                  </b-tooltip>
                </li>
                <li class="mb-1">
                  <span class="ft-pop" id="tooltip-target-4"
                    >技术分享</span
                  >
                  <b-tooltip target="tooltip-target-4" triggers="hover">
                    此页面还在开发中！
                  </b-tooltip>
                </li>
								
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
              <div class="text-uppercase-expanded text-xs mb-4">友情链接</div>
              <ul class="list-unstyled mb-0">
                <li class="mb-1">
                  <a href="http://210.44.154.22:5000/" target="_blank"
                    >橙果网盘</a
                  >
                </li>
                <li class="mb-1">
                  <a href="http://www.qlu.edu.cn/" target="_blank"
                    >齐鲁工业大学</a
                  >
                </li>
                <li class="mb-1">
                  <a href="http://jwxt.qlu.edu.cn/" target="_blank"
                    >齐鲁工大教务系统</a
                  >
                </li>
                <li class="mb-1">
                  <a href="http://jwc.qlu.edu.cn/" target="_blank"
                    >齐鲁工大教务处</a
                  >
                </li>
                <li class="mb-1">
                  <a href="http://my.qlu.edu.cn/" target="_blank">数字工大</a>
                </li>
                <li class="mb-1">
                  <a href="http://ms.qlu.edu.cn/" target="_blank">微软正版化</a>
                </li>
                <li>
                  <a href="https://mail.stu.qlu.edu.cn/" target="_blank"
                    >校园邮箱（学生端）</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="text-uppercase-expanded text-xs mb-4">加入我们</div>
              <ul class="list-unstyled mb-0">
                <li class="mb-1">
                  <a href="http://139.9.118.85/#/registration"> 在线报名 </a>
                </li>
                <li>
                  <a href="http://139.9.118.85/#/status"> 查询报名状态 </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-5" />
      <div class="row align-items-center">
        <div class="col-md-6 small copyright">
          Copyright &copy; 2019-2020
          <span class="mb-wrap"><br /></span>
          齐鲁工业大学网络信息中心橙果工作室<br />
					<a href="https://beian.miit.gov.cn/" target="_blank">
						豫ICP备19025563号
					</a>
        </div>
        <div class="col-md-6 text-md-right small">
          本站点由<span class="mb-wrap"><br /></span
          >橙果工作室网站组×程序设计组<span class="mb-wrap"><br /></span
          >联合提供技术支持
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>
