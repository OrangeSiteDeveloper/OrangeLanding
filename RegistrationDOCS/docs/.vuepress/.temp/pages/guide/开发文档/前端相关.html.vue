<template><h1 id="前端相关" tabindex="-1"><a class="header-anchor" href="#前端相关" aria-hidden="true">#</a> 前端相关</h1>
<p>本项目技术栈采用 前端vue ui框架vuetify + 后端nodejs koa框架 + mysql数据库<br>
文档使用vite构建的vuepress （注意，vite可能会导致某些时候热更新失败，特别是在更改config.js的时候，建议重启服务）</p>
<h2 id="项目前后端目录解析" tabindex="-1"><a class="header-anchor" href="#项目前后端目录解析" aria-hidden="true">#</a> 项目前后端目录解析</h2>
<p>等我写完了，这里会有很多内容</p>
<h2 id="资源以及合作平台链接" tabindex="-1"><a class="header-anchor" href="#资源以及合作平台链接" aria-hidden="true">#</a> 资源以及合作平台链接</h2>
<p><a href="https://github.com/OrangeSiteDeveloper/RegistrationSystem" target="_blank" rel="noopener noreferrer">github<ExternalLinkIcon/></a><br>
<a href="https://gitee.com/cata_lina/registration-system" target="_blank" rel="noopener noreferrer">gitee<ExternalLinkIcon/></a><br>
<a href="https://catalina.pingcode.com/workspace/dashboards/60f67990f4bdb118751f72a9" target="_blank" rel="noopener noreferrer">pingcode<ExternalLinkIcon/></a><br>
<a href="https://vuetifyjs.com/zh-Hans/" target="_blank" rel="noopener noreferrer">vuetify<ExternalLinkIcon/></a><br>
<a href="https://materialdesignicons.com/" target="_blank" rel="noopener noreferrer">icons<ExternalLinkIcon/></a><br>
<a href="https://space.bilibili.com/4276791/channel/detail?cid=190943&amp;ctype=0" target="_blank" rel="noopener noreferrer">vuetify实战课程<ExternalLinkIcon/></a></p>
<h2 id="vuetify" tabindex="-1"><a class="header-anchor" href="#vuetify" aria-hidden="true">#</a> vuetify</h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>用npm进行管理，输入命令后自动配置</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue <span class="token function">add</span> vuetify
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="grid布局-网格" tabindex="-1"><a class="header-anchor" href="#grid布局-网格" aria-hidden="true">#</a> Grid布局（网格）</h3>
<p>用好栅格布局，可以更好的适配多端
<img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210822222509.png" alt=""><br>
基本使用，通过v-row标签设置行，v-col设置列，给与v-col属性col，设置值1-12，可以占据屏幕横向的相应比例</p>
<h3 id="icons" tabindex="-1"><a class="header-anchor" href="#icons" aria-hidden="true">#</a> icons</h3>
<p>vuetify有个自带的icons库，网址如下<br>
<a href="https://materialdesignicons.com">Material Design Icons</a><br>
使用方法：
进入图标库后，根据需求，进行搜索<img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210822221504.png" alt=""><br>
搜索的时候要使用英文，然后复制图标的名称
<img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210822221549.png" alt="">
在代码里面，用v-icon标签将刚才复制的icon名称复制到标签里面，即可使用，不过前面要加上&quot;mid-&quot;<br>
<img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210822221821.png" alt=""><br>
<img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210822221702.png" alt=""></p>
<h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2>
<p>此项目页面数量不多，也并不复杂，目前对应了路由有下面几个<br>
<img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210822222759.png" alt=""><br>
在代码中我已经做好了相应的配置，不过查看报名进度页面，肯定需要动态路由决定目前是哪个同学在查询，前期可专注于ui的设计，后面再将其改成动态路由<br>
剩下的需要做的就是在每个vue文件里面写这个页面需要写的东西就可以了。</p>
<h2 id="组件化开发" tabindex="-1"><a class="header-anchor" href="#组件化开发" aria-hidden="true">#</a> 组件化开发</h2>
<p>随着项目越来越复杂，几乎不可能在一个页面文件中写完所有的组件，因为这会导致一个文件代码量极大，所以要把一些容易抽离出去的模块抽离成组件。<br>
比如这个现在的导航狼，为了方便，我把上面的导航栏和侧边导航栏写成了一个组件，其实抽离开写也可以，不过相对来说麻烦一些，而且我确实觉得没必要，下面介绍组件化开发的基本写法。</p>
<h3 id="基本写法" tabindex="-1"><a class="header-anchor" href="#基本写法" aria-hidden="true">#</a> 基本写法</h3>
<p>首先，组件创建的位置和某个页面是不一样的<br>
<img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210822224121.png" alt=""><br>
如图所示，views里面存放的是页面，也就是需要写在router路由配置里面的vue文件，上面的component见名知意义，就是放组件的。<br>
比如我现在有一个组件，就是导航栏<br>
<img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210822224308.png" alt=""><br>
组件文件里面的写法就跟普通的vue模板一样，然后是父组件引用，我的导航栏组件直接在app.vue文件引用了，引用方式如下<br>
<img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210822224520.png" alt=""><br>
当然，我们经常会用到组件之间传值的行为，下面详细说明</p>
<h3 id="组件之间传值" tabindex="-1"><a class="header-anchor" href="#组件之间传值" aria-hidden="true">#</a> 组件之间传值</h3>
<p>等我写完了，这里会有很多内容</p>
</template>
