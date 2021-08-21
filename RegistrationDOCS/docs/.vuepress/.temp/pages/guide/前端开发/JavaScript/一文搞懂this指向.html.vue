<template><h1 id="一文搞懂this指向" tabindex="-1"><a class="header-anchor" href="#一文搞懂this指向" aria-hidden="true">#</a> 一文搞懂this指向</h1>
<h2 id="this的绑定规则-一共有四种规则" tabindex="-1"><a class="header-anchor" href="#this的绑定规则-一共有四种规则" aria-hidden="true">#</a> this的绑定规则(一共有四种规则)</h2>
<h3 id="默认绑定" tabindex="-1"><a class="header-anchor" href="#默认绑定" aria-hidden="true">#</a> 默认绑定</h3>
<p>默认绑定，就是你什么也不做的时候，单纯的去调用函数，就会匹配这个规则。也可以说是独立函数调用<br>
当然，是存在各种花里胡哨的调用方式的。</p>
<ul>
<li>案例一：普通函数调用</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>
sadsad<abbr title="ssdsds">ddd</abbr>sadsad
</p>
</template>

<style>

    abbr {
        font-size: 100px;
    }

</style>
