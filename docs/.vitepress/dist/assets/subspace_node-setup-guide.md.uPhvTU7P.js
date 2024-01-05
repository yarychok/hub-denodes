import{_ as s,o as a,c as i,R as e,aS as t,aT as n,aU as l,aV as p,aW as h,aX as o,aY as d,aZ as r,a_ as k}from"./chunks/framework.d7vBfy8Y.js";const f=JSON.parse('{"title":"Node Setup Guide","description":"","frontmatter":{},"headers":[],"relativePath":"subspace/node-setup-guide.md","filePath":"subspace/node-setup-guide.md"}'),c={name:"subspace/node-setup-guide.md"},u=e('<h1 id="node-setup-guide" tabindex="-1">Node Setup Guide <a class="header-anchor" href="#node-setup-guide" aria-label="Permalink to &quot;Node Setup Guide&quot;">​</a></h1><p>Subspace: Node Setup Guide</p><p><img src="'+t+'" alt="An image"></p><p>Welcome to our guide on setting up your node and participating in the Gemini3, Subspace Incentivized Testnet. Follow these step-by-step instructions to get started.</p><h2 id="hardware-requirements" tabindex="-1">Hardware Requirements <a class="header-anchor" href="#hardware-requirements" aria-label="Permalink to &quot;Hardware Requirements&quot;">​</a></h2><p>We recommend the following minimum hardware requirements for running the Subspace Node:</p><ul><li>Machine: <strong>8 GB+ RAM, CPU 4 Core+, 100GB SSD</strong></li><li>OS: <strong>Ubuntu Linux 20.04 (LTS)</strong></li></ul><h2 id="setting-up-a-subspace-node" tabindex="-1">Setting up a Subspace Node <a class="header-anchor" href="#setting-up-a-subspace-node" aria-label="Permalink to &quot;Setting up a Subspace Node&quot;">​</a></h2><ul><li>Run the following command:</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subspace.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.github.com/denodesxyz/denodes-hub/hub/scripts/subspace.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subspace.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./subspace.sh</span></span></code></pre></div><p>If the message &quot;Illegal Instruction&quot; appears during installation. It means that the processor is not compatible with this version. You can try adding the &quot;v2&quot; parameter and installing the version for older processors:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subspace.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.github.com/denodesxyz/denodes-hub/hub/scripts/subspace.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subspace.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./subspace.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v2</span></span></code></pre></div><p>During the installation process, several parameters will be requested, the most important of which are the wallet address, the node name and the volume of the disk allocated for the plot.</p><ul><li>For the first question, enter <code>Y</code>:</li></ul><p><img src="'+n+'" alt="An image" data-zoomable=""></p><ul><li>Your subspace wallet address:</li></ul><p>Enter the address that can be taken <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3e.subspace.network%2Fws#/accounts" target="_blank" rel="noreferrer">here</a>, or install recommended wallet <a href="https://docs.subspace.network/docs/protocol/wallets/subwallet" target="_blank" rel="noreferrer">Subwallet</a>.</p><p><img src="'+l+'" alt="An image" data-zoomable=""></p><ul><li>Enter a unique node name:</li></ul><p><img src="'+p+'" alt="An image" data-zoomable=""></p><ul><li>Specify the paths for storing the plot and the node data (you can leave the default values):</li></ul><p><img src="'+h+'" alt="An image" data-zoomable=""></p><ul><li>Specify the size of the plot:</li></ul><p><img src="'+o+'" alt="An image" data-zoomable=""></p><ul><li>Leave the default value when selecting the chain:</li></ul><p><img src="'+d+'" alt="An image" data-zoomable=""></p><ul><li>Installation successfully completed:</li></ul><p><img src="'+r+`" alt="An image" data-zoomable=""></p><h2 id="node-monitoring" tabindex="-1">Node Monitoring <a class="header-anchor" href="#node-monitoring" aria-label="Permalink to &quot;Node Monitoring&quot;">​</a></h2><p>To view logs, use the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">journalctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subspace-node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span></span></code></pre></div><p>In addition to logs, you can find your node in telemetry. Keep in mind that with a large number of farmers, there is a chance that even a successfully working node will not be seen in telemetry immediately.</p><p><a href="https://telemetry.subspace.network/#list/0x92e91e657747c41eeabed5129ff51689d2e935b9f6abfbd5dfcb2e1d0d035095" target="_blank" rel="noreferrer">Subspace Telemetry</a></p><div class="language-note vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">note</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>To search, simply start typing the Node Name. </span></span>
<span class="line"><span>Click on the row with the node to pin it to the top of the list.</span></span></code></pre></div><p><img src="`+k+`" alt="An image"></p><h2 id="useful-commands" tabindex="-1">Useful Commands <a class="header-anchor" href="#useful-commands" aria-label="Permalink to &quot;Useful Commands&quot;">​</a></h2><p>The list of useful commands includes ways to manage and monitor your subspace node:</p><ul><li>View the logs:</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">journalctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subspace-node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span></span></code></pre></div><ul><li>Restart your node:</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">journalctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subspace-node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subspace-node</span></span></code></pre></div><ul><li>Stop your node:</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subspace-node</span></span></code></pre></div><ul><li>Delete your node:</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subspace-node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subspace-node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/system/subspace-node.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/subspace</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.local/share/subspace</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.config/subspace</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span></code></pre></div>`,46),g=[u];function F(m,b,y,C,B,v){return a(),i("div",null,g)}const _=s(c,[["render",F]]);export{f as __pageData,_ as default};