import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.OdeEVNy0.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"_include/models/user_simple.md","filePath":"_include/models/user_simple.md"}'),t={name:"_include/models/user_simple.md"},l=e(`<p>It is necessary to expand the model that will have the wallet. This is done in two stages:</p><ul><li>Add <code>Wallet</code> interface;</li><li>Add the <code>HasWallet</code> trait;</li></ul><p>Let&#39;s get started.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Bavix\\Wallet\\Traits\\HasWallet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Bavix\\Wallet\\Interfaces\\Wallet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Wallet</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HasWallet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The model is prepared to work with a wallet.</p>`,5),n=[l];function p(h,d,k,r,c,o){return a(),i("div",null,n)}const m=s(t,[["render",p]]);export{g as __pageData,m as default};
