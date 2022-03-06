<template><h1 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h1>
<h2 id="page1" tabindex="-1"><a class="header-anchor" href="#page1" aria-hidden="true">#</a> page1</h2>
<p>报名表单</p>
<ul>
<li>纳新总表</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>-- 会员纳新 
-- auto-generated definition
create table ums_new_member
(
    id             varchar(20)  not null comment 'id'
        primary key,
    username       char(64)     null comment '用户名',
    gender         tinyint      null comment '性别',
    qq             varchar(255) null comment 'qq号',
    mobile         varchar(20)  null comment '手机号码',
    email          varchar(64)  null comment '邮箱',
    header         varchar(500) null comment '头像,个人照片',
    faculty        varchar(255) null comment '院系',
    intro          text         null comment '自我介绍',
    integration    int          null comment '积分',
    status         tinyint      null comment '人员状态',
    `current_time` datetime     null comment '提交时间',
    source_type    tinyint      null comment '用户来源',
    member_status  tinyint      null comment '面试进程，详细信息见table:news_state',
    `group`        char         null comment '目标小组',
    department     char         null comment '目标部门'
)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><ul>
<li>部门/小组表</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>-- 成员所属群组 
-- auto-generated definitio
create table ums_group
(
    id         varchar(5)   not null comment 'id'
        primary key,
    power_name varchar(255) null comment '人员状态'
)
    comment '成员所属群组';
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>表信息</p>
<table>
<thead>
<tr>
<th>id</th>
<th>power_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>学习部</td>
</tr>
<tr>
<td>2</td>
<td>秘书部</td>
</tr>
<tr>
<td>3</td>
<td>宣传部</td>
</tr>
<tr>
<td>4</td>
<td>外联部</td>
</tr>
<tr>
<td>5</td>
<td>网站组</td>
</tr>
<tr>
<td>6</td>
<td>大数据组</td>
</tr>
<tr>
<td>7</td>
<td>硬件组</td>
</tr>
<tr>
<td>8</td>
<td>程序设计组</td>
</tr>
<tr>
<td>9</td>
<td>嵌入式组</td>
</tr>
</tbody>
</table>
<h2 id="page2" tabindex="-1"><a class="header-anchor" href="#page2" aria-hidden="true">#</a> page2</h2>
<p>状态查询 -&gt; 通过id(cookie 一个月)</p>
<p>纳新状态信息表</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>create table member_state
(
    news_state        int     null,
    state_information char(4) null
)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table>
<thead>
<tr>
<th>news_state</th>
<th>state_information</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>报名成功</td>
</tr>
<tr>
<td>1</td>
<td>初试通过</td>
</tr>
<tr>
<td>2</td>
<td>复试通过</td>
</tr>
<tr>
<td>3</td>
<td>确认加入</td>
</tr>
</tbody>
</table>
<p>发送邮件</p>
<h2 id="page3" tabindex="-1"><a class="header-anchor" href="#page3" aria-hidden="true">#</a> page3</h2>
<p>主页 宣传页面<br>
文字 微课 博客 照片 成果</p>
</template>
