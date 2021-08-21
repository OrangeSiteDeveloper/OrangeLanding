<template><h1 id="orange-studio纳新系统开发文档" tabindex="-1"><a class="header-anchor" href="#orange-studio纳新系统开发文档" aria-hidden="true">#</a> Orange Studio纳新系统开发文档</h1>
<h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2>
<h3 id="page1" tabindex="-1"><a class="header-anchor" href="#page1" aria-hidden="true">#</a> page1</h3>
<p>报名表单</p>
<h3 id="page2" tabindex="-1"><a class="header-anchor" href="#page2" aria-hidden="true">#</a> page2</h3>
<p>状态查询 -&gt; 通过id(cookie 一个月)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>报名表已提交，待筛选 0
报名表筛选通过，初试安排中 1
初试进行中 2
初试通过，复试安排中 3 /初试不通过，流程结束 4  --> 发送邮件
复试进行中5
复试通过，请确认录取信息 6 /复试不通过，流程结束 4 --> 发送邮件
已确认加入橙果工作室 7/放弃加入4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>发送邮件</p>
<h3 id="page3" tabindex="-1"><a class="header-anchor" href="#page3" aria-hidden="true">#</a> page3</h3>
<p>主页 宣传页面<br>
文字 微课 博客 照片 成果</p>
</template>
