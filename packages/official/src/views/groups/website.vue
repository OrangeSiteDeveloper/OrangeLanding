<template>
  <main>
    <header
      class="page-header page-header-dark bg-gradient-primary-to-secondary"
    >
      <div class="page-header-content pt-10 pb-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6" data-aos="fade-up">
              <h1 class="page-header-title text-center">橙果工作室</h1>
              <h1 class="page-header-title text-center">网站组</h1>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="50">
              <img
                src="https://s3.ax1x.com/2020/11/18/De1PeS.png"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="svg-border-rounded text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.54 17.34"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
          ></path>
        </svg>
      </div>
    </header>
    <section class="bg-white py-10">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="card post-preview post-preview-featured lift mb-5">
              <div class="row no-gutters">
                <div class="col-lg-5">
                  <div
                    class="post-preview-featured-img"
                    style="
                      background-image: url('https://s1.ax1x.com/2020/09/13/wwTa59.md.jpg');
                    "
                  ></div>
                </div>
                <div class="col-lg-7">
                  <div class="card-body">
                    <div class="py-5">
                      <h5 class="card-title">做网站，我们是认真的！</h5>
                      <p class="card-text" style="text-indent: 2em">
                        橙果工作室网站组，旨在引领小组成员实现Web“大前端”领域的探索，负责搭建与维护学校官网站点，开发工作室内部使用的产品与对外宣传的网站。加入我们，你能接触到包括HTML5、CSS3、JavaScript、Vue.js、Node.js等现代Web前端开发技术，支撑你的专业技术硬实力；也能接触到包括计算机网络技术、计算机操作系统、软件工程等计算机领域的底层基础知识，打通计算机科学从理论到实践的“任督二脉”；同时还能为微信小程序开发、前后端联合全栈开发、H5游戏开发等不同实践场景下提供全面的技术解决方案，同时注重优化用户界面设计与提升用户体验，真正做到追求技术产品的实用性与良好的使用体验性。
                      </p>
                      <p class="card-text" style="text-indent: 2em">
                        在这里，有专业的指导老师带领，大牛学长学姐带队，与大家一同不断探索时代前沿，突破想象空间。在这里，你将能够让你的每一行代码落地生根，为全校师生提供更优质便捷的服务；在这里，团队专业且纯粹，合作氛围平等且轻松。在这里，可以收获的不仅是知识，更多的是有温度的人文关怀，真心诚意的感情和志同道合的朋友。
                      </p>
                    </div>
                    <hr />
                    <div class="post-preview-meta">
                      <img
                        class="post-preview-meta-img"
                        src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/QQ%E5%9B%BE%E7%89%8720210922122051.jpg"
                      />
                      <div class="post-preview-meta-details">
                        <div class="post-preview-meta-details-name">葛腾飞</div>
                        <div class="post-preview-meta-details-date">
                          2021-09-10
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 遍历数据库拿到的学习记录 -->
    <!-- <div v-for="(news, index) in newslist" :key="index">
      <section class="bg-light py-10">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="text-center mb-3">
                <h2 class="sub-header">{{ news.title }}</h2>
                <p>发布者：{{ news.publisher }}</p>
                <p>{{ news.createTime }}</p>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="container p-0" v-html="news.content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> -->

    <section class="bg-white py-10">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="text-center mb-3">
              <h2 class="sub-header">css的使用规则</h2>
              <p>涂玉如</p>
              <p>2020-11-08 16:00:00</p>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="container">
                  <h2>基本信息</h2>
                  <p>时间：2020年11月3日</p>
                  <p>场地：橙果大会议室</p>
                  <p>
                    到场人员：涂玉茹 郑立强 王聪 姜厚任 张良鸿 刁兆烨 陈杰龙
                    张希莲 王宇哲 李瑾杨 朱福裕 刘静怡 许文榕 刘锡瑞 葛腾飞 彭启
                    丁婧文 韩彬 王怡璇
                  </p>
                  <h2>详细内容</h2>
                  <p>·书写css的规则</p>
                  <p>·选择器类型（id选择器，类选择器，标签选择器）</p>
                  <p>·使用css修饰html元素（边框，颜色，字体，背景）</p>
                  <p>·div（盒模型）用法</p>
                  <p class="text-center">
                    <img
                      src="https://s1.ax1x.com/2020/11/06/BhEeiD.jpg"
                      class="img-fluid"
                      referrerpolicy="no-referrer"
                      alt="BhEeiD.jpg"
                    />
                  </p>
                  <p class="text-center">
                    <img
                      src="https://s1.ax1x.com/2020/11/08/BoruwQ.jpg"
                      class="img-fluid"
                      referrerpolicy="no-referrer"
                      alt="BhEeiD.jpg"
                    />
                  </p>
                  <p class="text-center">
                    <img
                      src="https://s1.ax1x.com/2020/11/08/BorGlV.jpg"
                      class="img-fluid"
                      referrerpolicy="no-referrer"
                      alt="BhEeiD.jpg"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-10">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="text-center mb-3">
              <h2 class="sub-header">网站组学习路线详解</h2>
              <p>张治邦</p>
              <p>2020-11-01 21:09:14</p>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="container">
                  <h2>基本信息</h2>
                  <p>时间：2020/10/27 星期二</p>
                  <p>场地：104大会议室</p>
                  <p>
                    到场人员：周翔 高磊鑫 刘雨晨 孙文茂 徐茂森 王同泽 张治邦
                    20级
                  </p>
                  <h2>详细内容</h2>
                  <p class="text-center">
                    <img
                      src="https://s1.ax1x.com/2020/11/01/B0apLt.png"
                      class="img-fluid"
                      referrerpolicy="no-referrer"
                      alt="img"
                    />
                  </p>
                  <h3>了解网站组的学习计划</h3>
                  <p>本学期学完html，css；</p>
                  <p>JavaScript据情况进行一部分。</p>
                  <p>下学期，jquery，ajax，vue，bootstrap等框架。</p>
                  <h3>了解网站组分流计划</h3>
                  <p>橙果官网维护</p>
                  <p>站群</p>
                  <p>橙果官网维护+站群</p>
                  <h3>路径问题</h3>
                  <p>
                    绝对路径：以本页面所在的目录为基础
                    相对路径：以根目录为基础，别忘了＋/
                  </p>
                  <h3>元素种类</h3>
                  <h4>块级元素</h4>
                  <p>默认display: block; 独占一行，宽高可调</p>
                  <h4>行级元素（内联元素）</h4>
                  <p>默认display: inline; 与文字图片同行，宽高可不调</p>
                  <h4>inline-block（双重特性）</h4>
                  <p>
                    默认display: inline-block;
                    可与文字图片同行显示，并且宽高可调。
                  </p>
                  <h3>h5新特性</h3>
                  <h4>mathML（了解）</h4>
                  <p>
                    数学公式，火狐浏览器支持的较好，其他浏览器需要导入相应的js
                    css文件。在markdown中的laTeX可有相同用法。
                  </p>
                  <h4>canvas（以后再学）</h4>
                  <p>动画 游戏等等。</p>
                  <h3>markdown</h3>
                  <p>基本语法 laTeX(数学公式)</p>
                  <h3>审查元素调试技巧</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-10">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="text-center mb-3">
              <h2 class="sub-header">Web前端开发学习路线</h2>
              <p>周翔</p>
              <p>2020-10-07 14:07:23</p>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="container">
                  <center>
                    <p>使用手机浏览时可将此图片保存至本地以查看大图</p>
                    <img
                      src="https://i.loli.net/2020/10/07/fus8HzJ5hxykQnP.png"
                      class="img-fluid"
                    />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-10">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="text-center mb-3">
              <h2 class="sub-header">带你走进web技术之HTML</h2>
              <p>高磊鑫</p>
              <p>2020-10-03 11:33:12</p>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="container">
                  <center>
                    <img
                      src="https://pic.downk.cc/item/5f786a61160a154a6711a5f0.jpg"
                      class="img-fluid"
                    />
                  </center>
                  <br />
                  <div>
                    HTML是一种控制页面内容显示的标记语言，按照HTML语法编写的文件称为HTML文件。
                    <br />可以使用任意的文本编辑器编写HTML文件，以纯文本形式存储，并以html或htm为扩展名（只支持三个字母做后缀的操作系统中，扩展名是“.htm”）。<br />
                    文件编写完成后，可在浏览器中查看效果。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <foot></foot>
  </main>
</template>

<script>
import foot from "@/components/Footer.vue";
export default {
  data() {
    return {
      newslist: [],
    };
  },
  components: {
    foot,
  },
  created() {
    this.axios
      .get("listGroupInformationByName?groupName=" + "网站组")
      .then((res) => {
        // console.log('获取网站组新闻成功', res.data.content);
        this.newslist = res.data.content;
        for (let data of this.newslist) {
          data.createTime = data.createTime.split("T")[0];
          // console.log(data);
        }
      })
      .catch((res) => {
        console.log("获取网站组新闻失败", res.data);
      });
  },
};
</script>

<style>
</style>
