<template><h1 id="git相关" tabindex="-1"><a class="header-anchor" href="#git相关" aria-hidden="true">#</a> git相关</h1>
<h2 id="git基本操作" tabindex="-1"><a class="header-anchor" href="#git基本操作" aria-hidden="true">#</a> git基本操作</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># #后面是注释</span>
<span class="token comment"># 克隆项目</span>
<span class="token function">git</span> clone http地址或者ssh地址
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 创建并且切换到新分支</span>
<span class="token function">git</span> checkout -b 新分支名<span class="token punctuation">(</span>用英文<span class="token punctuation">)</span>
<span class="token comment"># 切换到以有分支 比如切换到master分支</span>
<span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 提交代码的时候，连续执行下面三个命令</span>
<span class="token function">git</span> add. 
<span class="token comment"># 提交内容随便写 注意中文不用加""英文需要加""</span>
<span class="token function">git</span> commit -m 提交内容
<span class="token comment"># 最后推送到gitee上</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="gitee配置密钥" tabindex="-1"><a class="header-anchor" href="#gitee配置密钥" aria-hidden="true">#</a> gitee配置密钥</h2>
<h3 id="生成并且查找密钥" tabindex="-1"><a class="header-anchor" href="#生成并且查找密钥" aria-hidden="true">#</a> 生成并且查找密钥</h3>
<p>右键，打开git bash，输入命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后敲回车，不出意外的话，会出现</p>
<p><img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210823021848.png" alt=""></p>
<p>红色圈出的这块，就是你电脑的密钥，然后复制，注意不要把你刚才的 cat。。。命令也给复制进去，从ssh-xxx开始到最后。</p>
<p>注意，如果出意外的话，会找不到这个密钥文件，那就是你的电脑没有生成过密钥，如果出现了这个问题，可以查一下怎么生成ssh密钥，或者在群里说一下。</p>
<h3 id="配置gitee公钥" tabindex="-1"><a class="header-anchor" href="#配置gitee公钥" aria-hidden="true">#</a> 配置gitee公钥</h3>
<p>然后进入gitee，图图所示，打开ssh公钥页面，标题随便设置，然后把刚才复制的密钥复制的下面的文本框点击确定。</p>
<p><img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/[}EQE[Z6MSF9RFS9W}$3$~L.png" alt=""></p>
<h3 id="验证gitee密钥是否配置成功" tabindex="-1"><a class="header-anchor" href="#验证gitee密钥是否配置成功" aria-hidden="true">#</a> 验证gitee密钥是否配置成功</h3>
<p>到此位置就设置好了，然后需要验证一下是否成功</p>
<p>输入命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> -T git@gitee.com 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20210823022331419.png" alt="image-20210823022331419"></p>
<p>如果出现successfully，说明你的密钥就配好了。</p>
<h3 id="解释配置公钥的作用-http与ssh的区别" tabindex="-1"><a class="header-anchor" href="#解释配置公钥的作用-http与ssh的区别" aria-hidden="true">#</a> 解释配置公钥的作用&amp;http与ssh的区别</h3>
<p>配置密钥有什么用呢，没配置密钥的时候，本地与gitee远程链接只能通过http建立，</p>
<p><img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210823022527.png" alt=""></p>
<p>如图，http会导致每次提交代码都需要重复去提交账号密码，非常不方便，所以配好ssh密钥之后，就可以使用ssh建立连接，复制ssh下的这堆路径，通过git clone 就可以克隆下来代码，然后提交的时候也不需要再去填写账号密码。</p>
</template>
