import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.OdeEVNy0.js";const E=JSON.parse('{"title":"Withdraw","description":"","frontmatter":{},"headers":[],"relativePath":"guide/single/withdraw.md","filePath":"guide/single/withdraw.md"}'),t={name:"guide/single/withdraw.md"},n=e(`<h1 id="withdraw" tabindex="-1">Withdraw <a class="header-anchor" href="#withdraw" aria-label="Permalink to &quot;Withdraw&quot;">​</a></h1><p>When there is enough money in the account, you can transfer/withdraw it or buy something in the system.</p><p>Since the currency is virtual, you can buy any services on your website. For example, priority in search results.</p><h2 id="user-model" tabindex="-1">User Model <a class="header-anchor" href="#user-model" aria-label="Permalink to &quot;User Model&quot;">​</a></h2><p>It is necessary to expand the model that will have the wallet. This is done in two stages:</p><ul><li>Add <code>Wallet</code> interface;</li><li>Add the <code>HasWallet</code> trait;</li></ul><p>Let&#39;s get started.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Bavix\\Wallet\\Traits\\HasWallet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Bavix\\Wallet\\Interfaces\\Wallet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Wallet</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HasWallet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The model is prepared to work with a wallet.</p><h2 id="make-a-withdraw" tabindex="-1">Make a Withdraw <a class="header-anchor" href="#make-a-withdraw" aria-label="Permalink to &quot;Make a Withdraw&quot;">​</a></h2><p>Find user:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">first</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>As the user uses <code>HasWallet</code>, he will have <code>balance</code> property. Check the user&#39;s balance.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">balance; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">balanceInt; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 100</span></span></code></pre></div><p>The balance is not empty, so you can withdraw funds.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withdraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">balance; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 90</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">balanceInt; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 90</span></span></code></pre></div><p>It&#39;s simple!</p><h2 id="force-withdraw" tabindex="-1">Force Withdraw <a class="header-anchor" href="#force-withdraw" aria-label="Permalink to &quot;Force Withdraw&quot;">​</a></h2><p>Forced withdrawal is necessary for those cases when the user has no funds. For example, a fine for spam.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">balance; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">balanceInt; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forceWithdraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">balance; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">balanceInt; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -1</span></span></code></pre></div><h2 id="and-what-will-happen-if-the-money-is-not-enough" tabindex="-1">And what will happen if the money is not enough? <a class="header-anchor" href="#and-what-will-happen-if-the-money-is-not-enough" aria-label="Permalink to &quot;And what will happen if the money is not enough?&quot;">​</a></h2><p>There can be two situations:</p><ul><li>The user&#39;s balance is zero, then we get an error <code>Bavix\\Wallet\\Exceptions\\BalanceIsEmpty</code></li><li>If the balance is greater than zero, but it is not enough <code>Bavix\\Wallet\\Exceptions\\InsufficientFunds</code></li></ul>`,23),h=[n];function l(p,k,r,d,o,c){return a(),i("div",null,h)}const y=s(t,[["render",l]]);export{E as __pageData,y as default};
