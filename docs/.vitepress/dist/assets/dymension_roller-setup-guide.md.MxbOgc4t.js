import{_ as s,o as i,c as a,R as e,af as t,ag as l,ah as n,ai as p,aj as h,ak as o,al as r,am as d,an as k}from"./chunks/framework.d7vBfy8Y.js";const f=JSON.parse('{"title":"Roller Setup Guide","description":"","frontmatter":{},"headers":[],"relativePath":"dymension/roller-setup-guide.md","filePath":"dymension/roller-setup-guide.md"}'),c={name:"dymension/roller-setup-guide.md"},g=e('<h1 id="roller-setup-guide" tabindex="-1">Roller Setup Guide <a class="header-anchor" href="#roller-setup-guide" aria-label="Permalink to &quot;Roller Setup Guide&quot;">​</a></h1><p>Dymension: Roller Setup Guide</p><p><img src="'+t+`" alt="An image"></p><p>Welcome to our guide on setting up your node and participating in the <a href="https://medium.com/@dymension/froopyland-is-live-8bf21e9d7046" target="_blank" rel="noreferrer">Dymension testnet</a>. Follow these step-by-step instructions to get started.</p><h2 id="hardware-requirements" tabindex="-1">Hardware Requirements <a class="header-anchor" href="#hardware-requirements" aria-label="Permalink to &quot;Hardware Requirements&quot;">​</a></h2><p>We recommend the following minimum hardware requirements for deploying a RollApp:</p><ul><li>Machine: <strong>16 GB RAM, Dual Core, 500 SSD</strong></li><li>Network: <strong>At least 100mbps network bandwidth</strong></li><li>OS: <strong>Linux AMD64, Linux ARM64, Mac AMD64, Mac ARM64</strong></li></ul><h2 id="install-roller" tabindex="-1">Install Roller <a class="header-anchor" href="#install-roller" aria-label="Permalink to &quot;Install Roller&quot;">​</a></h2><p>Run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://dymensionxyz.github.io/roller/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span></span></code></pre></div><p>Verify Roller version:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><div class="language-output vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">output</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>💈 Roller version v0.1.16-beta</span></span>
<span class="line"><span>💈 Build time: 2023-10-04T13:38:07+0000&quot;</span></span>
<span class="line"><span>💈 Git commit: 57994323bdaea039b4ce7449b9f026f0059ba925</span></span></code></pre></div><h2 id="initialize-rollapp" tabindex="-1">Initialize RollApp <a class="header-anchor" href="#initialize-rollapp" aria-label="Permalink to &quot;Initialize RollApp&quot;">​</a></h2><p> Initializing the configuration files of the RollApp will create the necessary information to start a new RollApp. This will create a folder <span style="background-color:rgba(43,46,57,1.00);color:white;padding:2.5px;border-radius:.5rem;"> ~/.roller</span> in the root directory of your computer with important files such as the <span style="background-color:rgba(43,46,57,1.00);color:white;padding:2.5px;border-radius:.5rem;">Genesis</span> file. </p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --interactive</span></span></code></pre></div><ul><li>Select your network → <strong>Froopyland (default)</strong></li><li>Select your execution environment → <strong>EVM RollApp (default)</strong></li><li>Enter your RollApp ID → <strong>The rollapp ID, should contain only alphabetical characters. Example: denodes</strong></li><li>Specify your RollApp denom → → <strong>Name of the native token of the RollApp in English letters. Example: BTC, PEPE, DYM</strong></li><li>Set the genesis token supply → <strong>Initial token supply in the RollApp 1,000,000,000 (default)</strong></li><li>Choose your data layer → <strong>Celestia: Arabica testnet, Avail: Dymension dedicated devnet</strong></li></ul><h2 id="address-funding" tabindex="-1">Address funding <a class="header-anchor" href="#address-funding" aria-label="Permalink to &quot;Address funding&quot;">​</a></h2><p>After initializing the RollApp, addresses to fund should be returned to you:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">🔑</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Addresses:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Sequencer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">networ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">k</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> used</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publish</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> updates</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Dymension</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Hub</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Relayer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">networ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">k</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> handles</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relaying</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IBC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packets</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">networ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">k</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> used</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publish</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on-chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> network</span></span></code></pre></div><p>You can get these addresses at any time by executing the command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keys</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre></div><p>The first two addresses need to be fund through the <a href="https://discord.com/channels/956961633165529098/1143231362468434022" target="_blank" rel="noreferrer">froopyland-faucet</a> channel in the Dymension discord:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dym-address</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>For Celestia and Avail network tokens you may use the <a href="https://discord.com/channels/956961633165529098/1128048548999610451" target="_blank" rel="noreferrer">celestia-faucet</a> or <a href="https://discord.com/channels/956961633165529098/1144240033650458685" target="_blank" rel="noreferrer">avail-faucet</a> respectively:</p><div class="language-Celestia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Celestia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$request &lt;celestia-address&gt;</span></span></code></pre></div><div class="language-Avail vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Avail</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/deposit &lt;avail-address&gt;</span></span></code></pre></div><h2 id="registering-the-rollapp" tabindex="-1">Registering the RollApp <a class="header-anchor" href="#registering-the-rollapp" aria-label="Permalink to &quot;Registering the RollApp&quot;">​</a></h2><p>Registering the RollApp adds a namespace in the Dymension Hub to account for the newly initalized RollApp.</p><p>Instead of managing a multi-sig smart contract, a developer only needs to register the RollApp with a simple command. Registering the RollApp to the Dymension Hub allows a Sequencer to publish state updates on-chain and furthermore facilitates bridging between ecosystems.</p><p>The following command utilizes the addresses generated in the <a href="https://docs.dymension.xyz/build/quick-start/roller-quick/initialize" target="_blank" rel="noreferrer">previous step</a>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> register</span></span></code></pre></div><div class="language-output vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">output</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>💈 Rollapp &#39;&lt;rollapp-id&gt;&#39; has been successfully registered on the hub.</span></span></code></pre></div><h2 id="running-the-rollapp" tabindex="-1">Running the RollApp <a class="header-anchor" href="#running-the-rollapp" aria-label="Permalink to &quot;Running the RollApp&quot;">​</a></h2><p>There are two ways to run RollApp. In the first case it is enough to execute the command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><p> During the <span style="background-color:rgba(43,46,57,1.00);color:white;padding:2.5px;border-radius:.5rem;">Run</span> process a RollApp with an IBC connection to the Dymension Hub is started. A status table will appear with information about the RollApp and IBC relayer. Developers should see an output with useful information such as this: </p><p><img src="`+l+'" alt="An image" data-zoomable=""></p><p>If you close the terminal, the process execution will be stopped. Therefore, it is recommended to use the following method. It only works on Linux with systemd.</p><p>Creating service files:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> services</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> load</span></span></code></pre></div><p>Enable services:</p><div class="language-Celestia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Celestia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo systemctl enable da-light-client sequencer relayer</span></span></code></pre></div><div class="language-Avail vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Avail</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo systemctl enable sequencer relayer</span></span></code></pre></div><p>Start the services:</p><div class="language-Celestia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Celestia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo systemctl start da-light-client sequencer relayer</span></span></code></pre></div><div class="language-Avail vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Avail</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo systemctl start sequencer relayer</span></span></code></pre></div><p>Next, check the status of running services:</p><div class="language-Celestia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Celestia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo systemctl status da-light-client sequencer relayer</span></span></code></pre></div><div class="language-Avail vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Avail</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo systemctl status sequencer relayer</span></span></code></pre></div><p>The status of all services should be active (running).</p><h2 id="ibc-transfer" tabindex="-1">IBC Transfer <a class="header-anchor" href="#ibc-transfer" aria-label="Permalink to &quot;IBC Transfer&quot;">​</a></h2><p>Fund the Dymension Hub faucet from the created RollApp:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fund-faucet</span></span></code></pre></div><p>Within 30 minutes tokens will become available via faucet in the Dymension Discord <a href="https://discord.com/channels/956961633165529098/1143231362468434022" target="_blank" rel="noreferrer">(#froopyland-faucet channel)</a>. Run the following command to check the balance of your RollApp token:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$balances dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rollapp-id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><code>&lt;rollapp-id&gt;</code> can always be found with the command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span></span></code></pre></div><p>Once the tokens appear in the faucet balance, users will be able to request them with the following command in Discord:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user-address</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rollapp-id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="transfer-ibc-tokens" tabindex="-1">Transfer IBC Tokens <a class="header-anchor" href="#transfer-ibc-tokens" aria-label="Permalink to &quot;Transfer IBC Tokens&quot;">​</a></h2><p>Let&#39;s transfer the tokens to the faucet address (for the example) using IBC. First, let&#39;s define the source channel of our RollApp:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relayer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span></code></pre></div><p><img src="'+n+'" alt="An image"></p><p>The source channel, in this case <code>channel-0</code>, will be used in the following command and will be referred to as <code>&lt;src-channel&gt;</code>.</p><p>In the following command, you must substitute your own values for <code>&lt;src-channel&gt;</code> and <code>&lt;base-denom&gt;</code>.<code>&lt;destination-address&gt;</code> replace with faucet address (dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollapp_evm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ibc-transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">src-channe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">destination-addres</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5000000000000000000000000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">base-deno</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollapp_sequencer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --keyring-backend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --home</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.roller/rollapp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --broadcast-mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span></span></code></pre></div><p>For example:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollapp_evm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ibc-transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channel-0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5000000000000000000000000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uDEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollapp_sequencer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --keyring-backend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --home</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.roller/rollapp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --broadcast-mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span></span></code></pre></div><h2 id="export-keys" tabindex="-1">Export keys <a class="header-anchor" href="#export-keys" aria-label="Permalink to &quot;Export keys&quot;">​</a></h2><p>Backup the private keys of your account. Run the following command to display the private keys that are associated with the RollApp.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keys</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre></div><p>The following keys can currently be exported: <code>hub_sequencer</code>, <code>rollapp_sequencer</code> and <code>my_celes_key</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keys</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> export</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_celes_key</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keys</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> export</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hub_sequencer</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keys</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> export</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollapp_sequencer</span></span></code></pre></div><p>It is recommended to keep the keys in a secure place.</p><h2 id="portal-listing" tabindex="-1">Portal Listing <a class="header-anchor" href="#portal-listing" aria-label="Permalink to &quot;Portal Listing&quot;">​</a></h2><p>Listing on the <a href="https://portal.dymension.xyz/" target="_blank" rel="noreferrer">Dymension Portal</a> will allow users to discover and interact with the RollApp.</p><p>First, you need to make sure the Dymension Hub faucet is funded with tokens from the created RollApp. Earlier we did this in the <a href="https://hub.denodes.xyz/dymension/roller-setup-guide#ibc-transfer" target="_blank" rel="noreferrer">IBC transfer</a> step. Next, you need to create a PR in the Dymension GitHub with the RollApp configuration so that the project team can list it on the portal. To do this, follow the steps below.</p><ul><li>Fork the RollApp-registry <a href="https://github.com/dymensionxyz/rollapp-registry" target="_blank" rel="noreferrer">repo</a> into your GitHub account:</li></ul><p><img src="'+p+'" alt="An image"></p><ul><li>Clone it:</li></ul><p><img src="'+h+'" alt="An image"></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">your-github-usernam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/rollapp-registry</span></span></code></pre></div><ul><li>Create the RollApp directory and prepare config information and logo:</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollapp-registry</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ROLLAPP_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config show </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RollappID </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&quot;.*&quot;&#39; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/&quot;//g&#39;)</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLAPP_ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/logos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLAPP_ID &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLAPP_ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.json</span></span></code></pre></div><p>Next, place the logo in SVG, PNG, or JPG format in the logos directory. The size should not exceed 50 KB.</p><p>Then export the RollApp configuration to the <code>&lt;RollApp-ID&gt;.json</code> file:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 2&gt;&amp;1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tail</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLAPP_ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLAPP_ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.json</span></span></code></pre></div><p><img src="'+o+`" alt="An image"></p><p>In the <code>&lt;RollApp-ID&gt;.json</code> file, change the following fields:</p><ul><li><code>rpc</code> <code>&quot;http://&lt;your-public-ip-or-domain&gt;:port&quot;</code> (default port 26657)</li><li><code>rest</code> <code>&quot;http://&lt;your-public-ip-or-domain&gt;:port&quot;</code> (default port 1317)</li><li><code>rpc</code> in the <code>evm</code> section: <code>&quot;http://&lt;your-public-ip-or-domain&gt;:port&quot;</code> (default port 8545)</li><li><code>logo</code> Correct the file extension</li></ul><p>Optional:</p><ul><li><code>chainName</code> The RollApp name as it will appear on the Portal</li><li><code>description</code> Description to be displayed on the portal</li><li><code>website</code> Website URL</li></ul><p>Then commit your changes:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;added RollApp&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span></code></pre></div><p>And create pull request:</p><p><img src="`+r+'" alt="An image"></p><p><img src="'+d+'" alt="An image"></p><p>Next pair the RollApp on the <a href="https://discord.com/channels/956961633165529098/1140590139022782474" target="_blank" rel="noreferrer">Discord channel</a> by entering the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$pair </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RollApp-ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>Then create a thread in the post and send a link to the PR.</p><p><img src="'+k+'" alt="An image"></p><p>You just have to wait for a moderator to check the PR and list it on the portal. After that, you should send a tweet about the listing with the required <code>@Dymension</code> tag and a link to RollApp on the portal. The link to the tweet will need to be sent to this same thread.</p><h2 id="upgrade" tabindex="-1">Upgrade <a class="header-anchor" href="#upgrade" aria-label="Permalink to &quot;Upgrade&quot;">​</a></h2><p>Install the most recent version of Roller:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://dymensionxyz.github.io/roller/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span></span></code></pre></div><p>Stop the Roller services:</p><div class="language-Celestia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Celestia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo systemctl stop relayer sequencer da-light-client</span></span></code></pre></div><div class="language-Avail vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Avail</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo systemctl stop relayer sequencer</span></span></code></pre></div><p>Execute the <code>migrate</code> command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span></span></code></pre></div><p>Start the Roller services:</p><div class="language-Celestia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Celestia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo systemctl start da-light-client sequencer relayer</span></span></code></pre></div><div class="language-Avail vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Avail</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo systemctl stop sequencer relayer</span></span></code></pre></div>',118),u=[g];function F(y,b,m,C,v,E){return i(),a("div",null,u)}const A=s(c,[["render",F]]);export{f as __pageData,A as default};