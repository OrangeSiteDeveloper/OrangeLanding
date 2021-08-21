<template><h1 id="_01修改this的指向" tabindex="-1"><a class="header-anchor" href="#_01修改this的指向" aria-hidden="true">#</a> 01修改this的指向</h1>
<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2>
<div class="custom-container tip"><p class="custom-container-title">题干</p>
<p>封装函数 f，使 f 的 this 指向指定的对象 （这是官方的题目描述）</p>
<details class="custom-container details"><summary>我做了之后，发现这个描述其实十分不详细，其实应该这样说才对</summary>
<p>应该是封装一个函数，这个函数在调用后，返回一个函数，最里面的这个函数才是会改变this指向的那个函数，最外面的这个bindThis只是一个中间层，也就是最后这样用bindThis(f.oTarget)(参数列表)，第一次调用得到了一个函数，再次调用才会进行this的绑定，this的绑定，众所周知，是在函数f真正运行的时候才能决定，所以最后一步一定是某种方式执行这个f函数。<br>
由此，这个函数的最终操作之前要加一层，也就是return function(){ 里面写真正的函数调用 }，当然也不是所有情况都这样写，比如要是用bind的话，f.bind()本身并没有去调用函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bindTHis</span><span class="token punctuation">(</span><span class="token parameter">f<span class="token punctuation">,</span>oTarget</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>oTarget<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这样本身bindThis返回的就是一个函数，没有对f的调用，要是再加一层的话，bindThis()()()这样才能最终对f函数进行调用</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>总之，具体情况具体分析，内置函数bind()返回值我忘记是什么了，看起来应该是个function就比较容易说的通了(刚才去试了一下，确实返回的是个函数，就是f函数，不过他具体怎么改的this指向，可能得看一下源码了，bind的返回值没有体现出来)</p>
</details>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<p>this的绑定问题本身就比较复杂，具体请移步另一篇文章<RouterLink to="/guide/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/JavaScript/%E4%B8%80%E6%96%87%E6%90%9E%E6%87%82this%E6%8C%87%E5%90%91.html">一文搞懂this指向</RouterLink><br>
下面说一下本题的主要解法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bindThis</span><span class="token punctuation">(</span><span class="token parameter">f<span class="token punctuation">,</span> oTarget</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用apply</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>oTarget<span class="token punctuation">,</span>arguments<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
     
    <span class="token comment">// 使用call</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>oTarget<span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
     
    <span class="token comment">// 直接使用bind函数</span>
    <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>oTarget<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 这是题目的测试样例</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 官方的测试就是写了这么个函数</span>
    <span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token function">bindThis</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>test <span class="token operator">+</span> a <span class="token operator">+</span> b <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> test<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> r <span class="token operator">===</span> <span class="token number">7</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 如果是true那就没问题了</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> Ps.</h2>
<p>好像并不需要说什么了</p>
</template>
