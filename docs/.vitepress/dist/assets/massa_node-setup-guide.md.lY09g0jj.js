import{_ as s,o as a,c as i,R as e,aB as t,aC as n,aD as h}from"./chunks/framework.d7vBfy8Y.js";const y=JSON.parse('{"title":"Node Setup Guide (Outdated)","description":"","frontmatter":{},"headers":[],"relativePath":"massa/node-setup-guide.md","filePath":"massa/node-setup-guide.md"}'),l={name:"massa/node-setup-guide.md"},p=e('<h1 id="node-setup-guide-outdated" tabindex="-1">Node Setup Guide (Outdated) <a class="header-anchor" href="#node-setup-guide-outdated" aria-label="Permalink to &quot;Node Setup Guide (Outdated)&quot;">​</a></h1><p>Massa: Node Setup Guide</p><p><img src="'+t+`" alt="An image"></p><p>Welcome to our guide on setting up your node and participating in the Testnet Episode 26, Massa Incentivized Testnet. Follow these step-by-step instructions to get started.</p><div class="language-note vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">note</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Massa&#39;s Incentivized Testnet ended in September 2023.</span></span></code></pre></div><h2 id="hardware-requirements" tabindex="-1">Hardware Requirements <a class="header-anchor" href="#hardware-requirements" aria-label="Permalink to &quot;Hardware Requirements&quot;">​</a></h2><p>We recommend the following minimum hardware requirements for running the Massa Node:</p><ul><li>Machine: <strong>8 GB RAM, 4 Cores CPU, 100 GB SSD</strong></li><li>OS: <strong>Ubuntu Linux 20.04 (LTS)</strong></li></ul><h2 id="setting-up-a-massa-node" tabindex="-1">Setting up a Massa Node <a class="header-anchor" href="#setting-up-a-massa-node" aria-label="Permalink to &quot;Setting up a Massa Node&quot;">​</a></h2><ul><li>Run the following command:</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -q</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> massa.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/bombermine3/massa/main/massa.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> massa.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p>After installing the node, watch the logs and wait for synchronization:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">journalctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> massa-node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span></span></code></pre></div><p>Next, you need to <a href="https://hub.denodes.xyz/massa/node-setup-guide#creating-a-wallet" target="_blank" rel="noreferrer">create a wallet</a> and <a href="https://hub.denodes.xyz/massa/the-node-guide#registering-the-node-in-discord" target="_blank" rel="noreferrer">register the node in Discord</a>.</p><h2 id="creating-a-wallet" tabindex="-1">Creating a wallet <a class="header-anchor" href="#creating-a-wallet" aria-label="Permalink to &quot;Creating a wallet&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.bash_profile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">massa_client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wallet_generate_secret_key</span></span></code></pre></div><p>Getting the wallet address:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">massa_client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wallet_info</span></span></code></pre></div><p>Enable staking for the address. To do this, copy the address and substitute it into the command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">massa_client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_start_staking</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Address</span></span></code></pre></div><p>Go to Discord to get test tokens.</p><p>Checking the balance:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">massa_client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wallet_info</span></span></code></pre></div><p>After tokens have appeared on the balance, buy one ROLL, replacing the Address parameter with your own:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">massa_client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> buy_rolls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Address</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span></code></pre></div><h2 id="registering-the-node-in-discord" tabindex="-1">Registering the node in Discord <a class="header-anchor" href="#registering-the-node-in-discord" aria-label="Permalink to &quot;Registering the node in Discord&quot;">​</a></h2><p>To register a node in the Incentivized program, you need to go to the #testnet-rewards-registration channel and click on the &quot;👍🏻&quot; emoji.</p><p><img src="`+n+'" alt="An image" data-zoomable=""></p><p>Next, we receive a private message from MassaBot, send in reply the IP address of your server.</p><p><img src="'+h+`" alt="An image" data-zoomable=""></p><p>The output of the command needs to be sent back to the bot in Discord.</p><h2 id="node-monitoring" tabindex="-1">Node Monitoring <a class="header-anchor" href="#node-monitoring" aria-label="Permalink to &quot;Node Monitoring&quot;">​</a></h2><p>To view logs, use the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">journalctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> massa-node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span></span></code></pre></div><h2 id="updating" tabindex="-1">Updating <a class="header-anchor" href="#updating" aria-label="Permalink to &quot;Updating&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> massa-node</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MASSA_LATEST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qO-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://api.github.com/repos/massalabs/massa/releases/latest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.tag_name&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/massa.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://github.com/massalabs/massa/releases/download/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MASSA_LATEST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/massa_\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MASSA_LATEST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}_release_linux.tar.gz&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/massa.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/massa.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> massa-node</span></span></code></pre></div><p>Then we <a href="https://hub.denodes.xyz/massa/node-setup-guide#creating-a-wallet" target="_blank" rel="noreferrer">re-enable staking</a> for an address, buy <code>ROLL</code>, and <a href="https://hub.denodes.xyz/massa/node-setup-guide#registering-the-node-in-discord" target="_blank" rel="noreferrer">register the node in Discord</a>.</p><h2 id="useful-commands" tabindex="-1">Useful Commands <a class="header-anchor" href="#useful-commands" aria-label="Permalink to &quot;Useful Commands&quot;">​</a></h2><ul><li>Restart your node:</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> massa-node</span></span></code></pre></div><ul><li>Stop your node:</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> massa-node</span></span></code></pre></div><ul><li>Delete your node:</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> massa-node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> massa-node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/system/massa-node.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/massa</span></span></code></pre></div>`,44),d=[p];function r(o,k,g,c,F,u){return a(),i("div",null,d)}const C=s(l,[["render",r]]);export{y as __pageData,C as default};
