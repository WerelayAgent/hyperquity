(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[34124,58099,e=>{var t=e.i(32868),r=e.i(47003),i=e.i(51699),a=e.i(28588),n=e.i(53091),o=e.i(63),s=e.i(85756),c=e.i(40534);let l={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},u={56:"714",204:"714"};class d extends Error{}async function h(e,t){let r=function(){let{sdkType:e,sdkVersion:t,projectId:r}=c.f.getSnapshot(),i=new URL("https://rpc.walletconnect.org/v1/json-rpc");return i.searchParams.set("projectId",r),i.searchParams.set("st",e),i.searchParams.set("sv",t),i.searchParams.set("source","fund-wallet"),i.toString()}(),{projectId:i}=c.f.getSnapshot(),a={jsonrpc:"2.0",id:1,method:e,params:{...t||{},projectId:i}},n=await fetch(r,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}),o=await n.json();if(o.error)throw new d(o.error.message);return o}async function p(e){return(await h("reown_getExchanges",e)).result}async function f(e){return(await h("reown_getExchangePayUrl",e)).result}async function m(e){return(await h("reown_getExchangeBuyStatus",e)).result}function g(e,t){let{chainNamespace:r,chainId:i}=s.f.parseCaipNetworkId(e),a=l[r];if(!a)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${r}`);let n=a.native.assetNamespace,o=a.native.assetReference;"native"!==t?(n=a.defaultTokenNamespace,o=t):"eip155"===r&&u[i]&&(o=u[i]);let c=`${r}:${i}`;return`${c}/${n}:${o}`}let w={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},y={ethereumETH:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseETH:{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseUSDC:w,baseSepoliaETH:{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ethereumUSDC:{network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},arbitrumUSDC:{network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},polygonUSDC:{network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},solanaUSDC:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ethereumUSDT:{network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},optimismUSDT:{network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},arbitrumUSDT:{network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},polygonUSDT:{network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaUSDT:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaSOL:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}};function b(e){return Object.values(y).filter(t=>t.network===e)}e.s(["B",0,{network:"eip155:84532",asset:"0x036CbD53842c5426634e7929541eC2318f3dCF7e",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},"_",0,w,"k",0,g,"W",0,m,"M",0,p,"V",0,f,"O",0,b],58099);var v=e.i(49851),x=e.i(4563),$=e.i(99672),k=e.i(22414);let T={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},S=(0,t.s)(T),P={state:S,subscribe:e=>(0,t.i)(S,()=>e(S)),subscribeKey:(e,t)=>(0,r.T)(S,e,t),resetState(){Object.assign(S,{...T})},async getAssetsForNetwork(e){let t=b(e),r=await P.getAssetsImageAndPrice(t),i=t.map(e=>{let t="native"===e.asset?(0,a.f)():`${e.network}:${e.asset}`,i=r.find(e=>e.fungibles?.[0]?.address?.toLowerCase()===t.toLowerCase());return{...e,price:i?.fungibles?.[0]?.price||1,metadata:{...e.metadata,iconUrl:i?.fungibles?.[0]?.iconUrl}}});return S.assets=i,i},async getAssetsImageAndPrice(e){let t=e.map(e=>"native"===e.asset?(0,a.f)():`${e.network}:${e.asset}`);return await Promise.all(t.map(e=>v.f.fetchTokenPrice({addresses:[e]})))},getTokenAmount(){if(!S?.paymentAsset?.price)throw Error("Cannot get token price");let e=i.f.bigNumber(S.amount??0).round(8),t=i.f.bigNumber(S.paymentAsset.price).round(8);return e.div(t).round(8).toNumber()},setAmount(e){S.amount=e,S.paymentAsset?.price&&(S.tokenAmount=P.getTokenAmount())},setPaymentAsset(e){S.paymentAsset=e},isPayWithExchangeEnabled:()=>c.f.state.remoteFeatures?.payWithExchange,isPayWithExchangeSupported:()=>P.isPayWithExchangeEnabled()&&x.f.state.activeCaipNetwork&&n.W.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(x.f.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{let e=P.isPayWithExchangeSupported();if(!S.paymentAsset||!e){S.exchanges=[],S.isLoading=!1;return}S.isLoading=!0;let t=await p({page:0,asset:g(S.paymentAsset.network,S.paymentAsset.asset),amount:S.amount?.toString()??"0"});S.exchanges=t.exchanges.slice(0,2)}catch(e){throw k.f.showError("Unable to get exchanges"),Error("Unable to get exchanges")}finally{S.isLoading=!1}},async getPayUrl(e,t){try{let r=Number(t.amount),i=await f({exchangeId:e,asset:g(t.network,t.asset),amount:r.toString(),recipient:`${t.network}:${t.recipient}`});return $.f.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:"exchange",exchangeId:e},source:"fund-from-exchange",headless:!1}}),i}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw Error("Asset not supported");throw Error(e.message)}},async handlePayWithExchange(e){try{let t=x.f.getAccountData()?.address;if(!t)throw Error("No account connected");if(!S.paymentAsset)throw Error("No payment asset selected");let r=o.f.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!r)throw Error("Could not create popup window");S.isPaymentInProgress=!0,S.paymentId=crypto.randomUUID(),S.currentPayment={type:"exchange",exchangeId:e};let{network:i,asset:a}=S.paymentAsset,n={network:i,asset:a,amount:S.tokenAmount,recipient:t},s=await P.getPayUrl(e,n);if(!s){try{r.close()}catch(e){console.error("Unable to close popup window",e)}throw Error("Unable to initiate payment")}S.currentPayment.sessionId=s.sessionId,S.currentPayment.status="IN_PROGRESS",S.currentPayment.exchangeId=e,r.location.href=s.url}catch(e){S.error="Unable to initiate payment",k.f.showError(S.error)}},async waitUntilComplete({exchangeId:e,sessionId:t,paymentId:r,retries:i=20}){let a=await P.getBuyStatus(e,t,r);if("SUCCESS"===a.status||"FAILED"===a.status)return a;if(0===i)throw Error("Unable to get deposit status");return await new Promise(e=>{setTimeout(e,5e3)}),P.waitUntilComplete({exchangeId:e,sessionId:t,paymentId:r,retries:i-1})},async getBuyStatus(e,t,r){try{if(!S.currentPayment)throw Error("No current payment");let i=await m({sessionId:t,exchangeId:e});if(S.currentPayment.status=i.status,"SUCCESS"===i.status||"FAILED"===i.status){let e=x.f.getAccountData()?.address;S.currentPayment.result=i.txHash,S.isPaymentInProgress=!1,$.f.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===i.status?o.f.parseError(S.error):void 0,source:"fund-from-exchange",paymentId:r,configuration:{network:S.paymentAsset?.network||"",asset:S.paymentAsset?.asset||"",recipient:e||"",amount:S.amount??0},currentPayment:{type:"exchange",exchangeId:S.currentPayment?.exchangeId,sessionId:S.currentPayment?.sessionId,result:i.txHash}}})}return i}catch(e){return{status:"UNKNOWN",txHash:""}}},reset(){S.currentPayment=void 0,S.isPaymentInProgress=!1,S.paymentId="",S.paymentAsset=null,S.amount=0,S.tokenAmount=0,S.priceLoading=!1,S.error=null,S.exchanges=[],S.isLoading=!1}};e.s(["f",0,P],34124)},90682,e=>{e.i(95126);var t,r,i=e.i(41449),a=e.i(18444);e.i(75353);var n=e.i(72072),o=e.i(1908),s=e.i(86295),c=e.i(53462),l=e.i(22229),u=e.i(54090);s.default.extend(l.default),s.default.extend(u.default);let d={...c.default,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},h=["January","February","March","April","May","June","July","August","September","October","November","December"];s.default.locale("en-web3-modal",d);var p=e.i(4563),f=e.i(63),m=e.i(99672),g=e.i(40534),w=e.i(68030),y=e.i(40970),b=e.i(28588);e.i(94613);var v=e.i(42851);let x=["receive","deposit","borrow","claim"],$=["withdraw","repay","burn"],k={getTransactionGroupTitle(e,t){let r=((e=new Date().toISOString())=>(0,s.default)(e).year())(),i=h[t];return e===r?i:`${i} ${e}`},getTransactionImages(e){let[t]=e;return e?.length>1?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]},getTransactionImage:e=>({type:k.getTransactionTransferTokenType(e),url:k.getTransactionImageURL(e)}),getTransactionImageURL(e){let t,r=!!e?.nft_info,i=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&i&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":void 0,getTransactionDescriptions(e,t){let r=e?.metadata?.operationType,i=t||e?.transfers,a=i&&i.length>0,n=i&&i.length>1,o=a&&i.every(e=>!!e?.fungible_info),[s,c]=i||[],l=this.getTransferDescription(s),u=this.getTransferDescription(c);if(!a)return("send"===r||"receive"===r)&&o?[l=v.f.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),v.f.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(n)return i?.map(e=>this.getTransferDescription(e));let d="";return x.includes(r)?d="+":$.includes(r)&&(d="-"),[l=d.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},mergeTransfers(e){if(e?.length<=1)return e;let t=this.filterGasFeeTransfers(e).reduce((e,t)=>{let r=t?.fungible_info?.name,i=e.find(({fungible_info:e,direction:i})=>r&&r===e?.name&&i===t.direction);if(i){let e=Number(i.quantity.numeric)+Number(t.quantity.numeric);i.quantity.numeric=e.toString(),i.value=(i.value||0)+(t.value||0)}else e.push(t);return e},[]),r=t;return t.length>2&&(r=t.sort((e,t)=>(t.value||0)-(e.value||0)).slice(0,2)),r=r.sort((e,t)=>"out"===e.direction&&"in"===t.direction?-1:+("in"===e.direction&&"out"===t.direction))},filterGasFeeTransfers(e){let t=e?.reduce((e,t)=>{let r=t?.fungible_info?.name;return r&&(e[r]||(e[r]=[]),e[r].push(t)),e},{}),r=[];return Object.values(t??{}).forEach(e=>{if(1===e.length){let t=e[0];t&&r.push(t)}else{let t=e.filter(e=>"in"===e.direction),i=e.filter(e=>"out"===e.direction);if(1===t.length&&1===i.length){let a=t[0],n=i[0],o=!1;if(a&&n){let e=Number(a.quantity.numeric),t=Number(n.quantity.numeric);t<.1*e?(r.push(a),o=!0):e<.1*t&&(r.push(n),o=!0)}o||r.push(...e)}else{let t=this.filterGasFeesFromTokenGroup(e);r.push(...t)}}}),e?.forEach(e=>{e?.fungible_info?.name||r.push(e)}),r},filterGasFeesFromTokenGroup(e){if(e.length<=1)return e;let t=e?.map(e=>Number(e.quantity.numeric)),r=Math.max(...t);if(Math.min(...t)<.01*r)return e?.filter(e=>Number(e.quantity.numeric)>=.01*r);let i=e?.filter(e=>"in"===e.direction),a=e?.filter(e=>"out"===e.direction);if(1===i.length&&1===a.length){let e=i[0],t=a[0];if(e&&t){let r=Number(e.quantity.numeric),i=Number(t.quantity.numeric);if(i<.1*r)return[e];if(r<.1*i)return[t]}}return e},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null};var T=e.i(45990);e.i(29354),e.i(6656),e.i(31917),e.i(1879);var S=i;e.i(83601);var P=e.i(18153);e.i(86116);var D=e.i(72461);(t=r||(r={})).approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn";var A=i;e.i(85568),e.i(70270),e.i(41541);var E=e.i(29521);let C=E.m`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  .swap-fallback-container {
    position: absolute;
    inset: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swap-fallback-container.first {
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-fallback-container.last {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var I=function(e,t,r,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,r,o):a(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};let O=class extends A.f{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""},this.failedImageUrls=new Set}handleImageError(e){return t=>{t.stopPropagation(),this.failedImageUrls.add(e),this.requestUpdate()}}render(){let[e,t]=this.images;this.images.length||(this.dataset.noImages="true");let r=e?.type==="NFT",i=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    --local-right-border-radius: ${i?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    `,a.c`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images;return 2===this.images.length&&(e?.url||t?.url)?this.renderSwapImages(e,t):e?.url&&!this.failedImageUrls.has(e.url)?this.renderSingleImage(e):e?.type==="NFT"?this.renderPlaceholderIcon("nftPlaceholder"):this.renderPlaceholderIcon("coinPlaceholder")}renderSwapImages(e,t){return a.c`<div class="swap-images-container">
      ${e?.url?this.renderImageOrFallback(e,"first",!0):null}
      ${t?.url?this.renderImageOrFallback(t,"last",!0):null}
    </div>`}renderSingleImage(e){return this.renderImageOrFallback(e,void 0,!1)}renderImageOrFallback(e,t,r=!1){return e.url?this.failedImageUrls.has(e.url)?r&&t?this.renderFallbackIconInContainer(t):this.renderFallbackIcon():a.c`<wui-image
      src=${e.url}
      alt="Transaction image"
      @onLoadError=${this.handleImageError(e.url)}
    ></wui-image>`:null}renderFallbackIconInContainer(e){return a.c`<div class="swap-fallback-container ${e}">${this.renderFallbackIcon()}</div>`}renderFallbackIcon(){return a.c`<wui-icon
      size="xl"
      weight="regular"
      color="default"
      name="networkPlaceholder"
    ></wui-icon>`}renderPlaceholderIcon(e){return a.c`<wui-icon size="xl" weight="regular" color="default" name=${e}></wui-icon>`}templateIcon(){let e,t="accent-primary";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?a.c`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${e}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontal":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};O.styles=[C],I([(0,n.f)()],O.prototype,"type",void 0),I([(0,n.f)()],O.prototype,"status",void 0),I([(0,n.f)()],O.prototype,"direction",void 0),I([(0,n.f)({type:Boolean})],O.prototype,"onlyDirectionIcon",void 0),I([(0,n.f)({type:Array})],O.prototype,"images",void 0),I([(0,n.f)({type:Object})],O.prototype,"secondImage",void 0),I([(0,o.f)()],O.prototype,"failedImageUrls",void 0),O=I([(0,T.f)("wui-transaction-visual")],O);let M=E.m`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var R=function(e,t,r,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,r,o):a(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};let U=class extends S.f{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return a.c`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,P.f)(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${r[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?a.c`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?a.c`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}};U.styles=[D.e,M],R([(0,n.f)()],U.prototype,"type",void 0),R([(0,n.f)({type:Array})],U.prototype,"descriptions",void 0),R([(0,n.f)()],U.prototype,"date",void 0),R([(0,n.f)({type:Boolean})],U.prototype,"onlyDirectionIcon",void 0),R([(0,n.f)()],U.prototype,"status",void 0),R([(0,n.f)()],U.prototype,"direction",void 0),R([(0,n.f)({type:Array})],U.prototype,"images",void 0),U=R([(0,T.f)("wui-transaction-list-item")],U);var j=i;e.i(48923),e.i(39696);var _=i;let N=E.m`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var z=function(e,t,r,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,r,o):a(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};let L={sm:"xxs",lg:"md"},F=class extends _.f{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return a.c`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){let[e,t]=this.images;return 2===this.images.length&&(e||t)?a.c`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${t} alt="Swap image"></wui-image>
      `:e?a.c`<wui-image src=${e} alt="Swap image"></wui-image>`:null}fiatTemplate(){return a.c`<wui-icon
      class="fallback-icon"
      size=${L[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return a.c`<wui-icon
      class="fallback-icon"
      size=${L[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){let[e]=this.images;return e?a.c`<wui-image src=${e} alt="Token image"></wui-image> `:a.c`<wui-icon
      class="fallback-icon"
      name=${"nft"===this.type?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?a.c`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:a.c`<wui-icon
      class="direction-icon"
      size=${L[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return"trade"===this.type?"arrowClockWise":"arrowBottom"}};F.styles=[N],z([(0,n.f)()],F.prototype,"type",void 0),z([(0,n.f)()],F.prototype,"size",void 0),z([(0,n.f)()],F.prototype,"statusImageUrl",void 0),z([(0,n.f)({type:Array})],F.prototype,"images",void 0),F=z([(0,T.f)("wui-transaction-thumbnail")],F);let q=E.m`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,B=class extends j.f{render(){return a.c`
      <wui-flex alignItems="center" .padding=${["1","2","1","2"]}>
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};B.styles=[D.e,q],B=function(e,t,r,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,r,o):a(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o}([(0,T.f)("wui-transaction-list-item-loader")],B);var H=e.i(25436);let Y=E.m`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e["3"]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e["3"]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var W=function(e,t,r,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,r,o):a(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};let G="last-transaction",J=class extends i.f{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=p.f.state.activeCaipAddress,this.transactionsByYear=y.f.state.transactionsByYear,this.loading=y.f.state.loading,this.empty=y.f.state.empty,this.next=y.f.state.next,y.f.clearCursor(),this.unsubscribe.push(p.f.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(y.f.resetTransactions(),y.f.fetchTransactions(e)),this.caipAddress=e}),p.f.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),y.f.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.c` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){y.f.resetTransactions(),this.caipAddress&&y.f.fetchTransactions(f.f.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{let t=parseInt(e,10),r=Array(12).fill(null).map((e,r)=>({groupTitle:k.getTransactionGroupTitle(t,r),transactions:this.transactionsByYear[t]?.[r]})).filter(({transactions:e})=>e).reverse();return r.map(({groupTitle:e,transactions:t},i)=>{let n=i===r.length-1;return t?a.c`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${n?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${e}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(t,n)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:r,descriptions:i,direction:n,images:o,status:s,type:c,transfers:l,isAllNFT:u}=this.getTransactionListItemProps(e);return a.c`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${t&&this.next?G:""}
        status=${s}
        type=${c}
        .images=${o}
        .onlyDirectionIcon=${u||1===l.length}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,i)=>{let n=t&&i===e.length-1;return a.c`${this.templateRenderTransaction(r,n)}`})}emptyStateActivity(){return a.c`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return a.c`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?a.c`${this.emptyStateAccount()}`:a.c`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?a.c` <wui-flex flexDirection="column" width="100%">
        <wui-flex .padding=${["2","3","3","3"]}>
          <wui-shimmer width="70px" height="16px" rounded></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2" width="100%">
          ${Array(7).fill(a.c` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}
        </wui-flex>
      </wui-flex>`:null}onReceiveClick(){w.f.push("WalletReceive")}createPaginationObserver(){let{projectId:e}=g.f.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(y.f.fetchTransactions(f.f.getPlainAddress(this.caipAddress)),m.f.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:f.f.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:(0,b.P)(p.f.state.activeChain)===H.P.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${G}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=((e,t="DD MMM")=>(0,s.default)(e).format(t))(e?.metadata?.minedAt),r=k.mergeTransfers(e?.transfers||[]),i=k.getTransactionDescriptions(e,r),a=r?.[0],n=!!a&&r?.every(e=>!!e.nft_info),o=k.getTransactionImages(r);return{date:t,direction:a?.direction,descriptions:i,isAllNFT:n,images:o,status:e.metadata?.status,transfers:r,type:e.metadata?.operationType}}};J.styles=Y,W([(0,n.f)()],J.prototype,"page",void 0),W([(0,o.f)()],J.prototype,"caipAddress",void 0),W([(0,o.f)()],J.prototype,"transactionsByYear",void 0),W([(0,o.f)()],J.prototype,"loading",void 0),W([(0,o.f)()],J.prototype,"empty",void 0),W([(0,o.f)()],J.prototype,"next",void 0),J=W([(0,T.f)("w3m-activity-list")],J),e.s([],90682)},16490,e=>{e.i(95126);var t=e.i(41449),r=e.i(18444);e.i(75353);var i=e.i(72072);e.i(83601);var a=e.i(18153);e.i(85568),e.i(86116);var n=e.i(72461),o=e.i(45990);e.i(31318);var s=e.i(40697);let c=s.m`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var l=function(e,t,r,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,r,o):a(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};let u=class extends t.f{constructor(){super(...arguments),this.disabled=!1}render(){return r.c`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,a.f)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?r.c`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};u.styles=[n.e,c],l([(0,i.f)()],u.prototype,"errorMessage",void 0),l([(0,i.f)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,i.f)()],u.prototype,"value",void 0),l([(0,i.f)()],u.prototype,"tabIdx",void 0),u=l([(0,o.f)("wui-email-input")],u),e.s([],16490)},6656,e=>{e.i(41541),e.s([])},88555,e=>{e.i(31318),e.s([])},50379,e=>{e.i(95126);var t=e.i(41449),r=e.i(18444);e.i(75353);var i=e.i(72072),a=e.i(1908),n=e.i(51699);e.i(85568),e.i(70270),e.i(86116),e.i(39696);var o=e.i(72461),s=e.i(45990),c=e.i(29521);let l=c.m`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    gap: ${({spacing:e})=>e[3]};
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  .token-name-container {
    flex: 1;
  }
`;var u=function(e,t,r,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,r,o):a(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};let d=class extends t.f{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1,this.imageError=!1}render(){return r.c`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex
            flexDirection="column"
            justifyContent="space-between"
            gap="1"
            class="token-name-container"
          >
            <wui-text variant="md-regular" color="primary" lineClamp="1">
              ${this.tokenName}
            </wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${n.f.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
          width="auto"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${n.f.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}updated(e){e.has("tokenImageUrl")&&(this.imageError=!1)}visualTemplate(){return this.tokenName&&this.tokenImageUrl&&!this.imageError?r.c`<wui-image
        alt=${this.tokenName}
        src=${this.tokenImageUrl}
        @onLoadError=${this.handleImageError}
      ></wui-image>`:r.c`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}handleImageError(){this.imageError=!0}};d.styles=[o.e,o.j,l],u([(0,i.f)()],d.prototype,"tokenName",void 0),u([(0,i.f)()],d.prototype,"tokenImageUrl",void 0),u([(0,i.f)({type:Number})],d.prototype,"tokenValue",void 0),u([(0,i.f)()],d.prototype,"tokenAmount",void 0),u([(0,i.f)()],d.prototype,"tokenCurrency",void 0),u([(0,i.f)({type:Boolean})],d.prototype,"clickable",void 0),u([(0,a.f)()],d.prototype,"imageError",void 0),d=u([(0,s.f)("wui-list-token")],d),e.s([],50379)},35324,e=>{e.i(95126);var t=e.i(41449),r=e.i(18444);e.i(75353);var i=e.i(72072);e.i(70270);var a=e.i(72461),n=e.i(42851),o=e.i(45990),s=e.i(29521);let c=s.m`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var l=function(e,t,r,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,r,o):a(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};let u=class extends t.f{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){let e={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${e[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${e[this.size??"xl"]});
    `,r.c`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",r.c`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=n.f.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};u.styles=[a.e,c],l([(0,i.f)()],u.prototype,"imageSrc",void 0),l([(0,i.f)()],u.prototype,"alt",void 0),l([(0,i.f)()],u.prototype,"address",void 0),l([(0,i.f)()],u.prototype,"size",void 0),u=l([(0,o.f)("wui-avatar")],u),e.s([],35324)},31318,e=>{e.i(95126);var t=e.i(41449),r=e.i(18444);e.i(75353);var i=e.i(72072);e.i(83601);var a=e.i(18153);e.i(60589);var n=e.i(86492);e.i(85568),e.i(86116);var o=e.i(72461),s=e.i(45990),c=e.i(29521);let l=c.m`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var u=function(e,t,r,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,r,o):a(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};let d=class extends t.f{constructor(){super(...arguments),this.inputElementRef=(0,n.J)(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return r.c` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${(0,n.C)(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,a.f)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?r.c`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?r.c`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?r.c`<wui-icon name="spinner" size="md"></wui-icon>`:r.c`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?r.c`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?r.c`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};d.styles=[o.e,o.j,l],u([(0,i.f)()],d.prototype,"icon",void 0),u([(0,i.f)({type:Boolean})],d.prototype,"disabled",void 0),u([(0,i.f)({type:Boolean})],d.prototype,"loading",void 0),u([(0,i.f)()],d.prototype,"placeholder",void 0),u([(0,i.f)()],d.prototype,"type",void 0),u([(0,i.f)()],d.prototype,"value",void 0),u([(0,i.f)()],d.prototype,"errorText",void 0),u([(0,i.f)()],d.prototype,"warningText",void 0),u([(0,i.f)()],d.prototype,"onSubmit",void 0),u([(0,i.f)()],d.prototype,"size",void 0),u([(0,i.f)({attribute:!1})],d.prototype,"onKeyDown",void 0),d=u([(0,s.f)("wui-input-text")],d),e.s([],31318)},60589,86492,e=>{var t=e.i(18444);let{I:r}=t.e;var i=e.i(26964);let a=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),a(e,t);return!0},n=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},o=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),l(t)}};function s(e){void 0!==this._$AN?(n(this),this._$AM=e,o(this)):this._$AM=e}function c(e,t=!1,r=0){let i=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(i))for(let e=r;e<i.length;e++)a(i[e],!1),n(i[e]);else null!=i&&(a(i,!1),n(i));else a(this,e)}let l=e=>{e.type==i.x.CHILD&&(e._$AP??=c,e._$AQ??=s)};class u extends i.C{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),o(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(a(this,e),n(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class d{}let h=new WeakMap,p=(0,i.l)(class extends u{render(e){return t.i}update(e,[r]){let i=r!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=r,this.ht=e.options?.host,this.rt(this.ct=e.element)),t.i}rt(e){if(void 0!==this.G)if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,r=h.get(t);void 0===r&&(r=new WeakMap,h.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ht,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?h.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});e.s(["J",0,()=>new d,"C",0,p],86492),e.s([],60589)},71404,e=>{var t=e.i(32465),r=e.i(38985);e.s(["f",0,function({key:e,methods:i,name:a,request:n,retryCount:o=3,retryDelay:s=150,timeout:c,type:l},u){let d=(0,r.f)();return{config:{key:e,methods:i,name:a,request:n,retryCount:o,retryDelay:s,timeout:c,type:l},request:(0,t.f)(n,{methods:i,retryCount:o,retryDelay:s,uid:d}),value:u}}])},6910,e=>{var t=e.i(86997),r=e.i(41598),i=e.i(14062),a=e.i(98046),n=e.i(71404);let o=0,s=new WeakMap;e.s(["f",0,function(e,c={}){let{batch:l,fetchFn:u,fetchOptions:d,key:h="http",maxResponseBodySize:p,methods:f,name:m="HTTP JSON-RPC",onFetchRequest:g,onFetchResponse:w,retryDelay:y,raw:b}=c;return({chain:v,retryCount:x,timeout:$})=>{let{batchSize:k=1e3,wait:T=0}="object"==typeof l?l:{},S=c.retryCount??x,P=$??c.timeout??1e4,D=e||v?.rpcUrls.default.http[0];if(!D)throw new r.f;let A=(0,a.f)(D,{fetchFn:u,fetchOptions:d,maxResponseBodySize:p,onRequest:g,onResponse:w,timeout:P});return(0,n.f)({key:h,methods:f,name:m,async request({method:e,params:r},a){let n={method:e,params:r},c=a?.signal?{signal:a.signal}:void 0,{schedule:u}=(0,i.f)({id:`${D}.${function(e){if(!e)return"default";let t=s.get(e);if(void 0!==t)return t;let r=o++;return s.set(e,r),r}(a?.signal)}`,wait:T,shouldSplitBatch:e=>e.length>k,fn:e=>A.request({body:e,fetchOptions:c}),sort:(e,t)=>e.id-t.id}),d=async e=>l?u(e):[await A.request({body:e,fetchOptions:c})],[{error:h,result:p}]=await d(n).catch(e=>{if(b&&e instanceof t.V)return[{error:e.cause,result:void 0}];throw e});if(b)return{error:h,result:p};if(h)throw new t.V({body:n,error:h,url:D});return p},retryCount:S,retryDelay:y,timeout:P,type:"http"},{fetchOptions:d,url:D})}}])},47267,45269,e=>{var t=e.i(37037),r=e.i(86997);class i extends t.f{constructor(e,{code:t,docsPath:i,metaMessages:a,name:n,shortMessage:o}){super(o,{cause:e,docsPath:i,metaMessages:a||e?.metaMessages,name:n||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=n||e.name,this.code=e instanceof r.V?e.code:t??-1}}class a extends i{constructor(e,t){super(e,t),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class n extends i{constructor(e){super(e,{code:n.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(n,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class o extends i{constructor(e){super(e,{code:o.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class s extends i{constructor(e,{method:t}={}){super(e,{code:s.code,name:"MethodNotFoundRpcError",shortMessage:`The method${t?` "${t}"`:""} does not exist / is not available.`})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class c extends i{constructor(e){super(e,{code:c.code,name:"InvalidParamsRpcError",shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class l extends i{constructor(e){super(e,{code:l.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class u extends i{constructor(e){super(e,{code:u.code,name:"InvalidInputRpcError",shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class d extends i{constructor(e){super(e,{code:d.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class h extends i{constructor(e){super(e,{code:h.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class p extends i{constructor(e){super(e,{code:p.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class f extends i{constructor(e,{method:t}={}){super(e,{code:f.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${t?` "${t}"`:""} is not supported.`})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class m extends i{constructor(e){super(e,{code:m.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class g extends i{constructor(e){super(e,{code:g.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class w extends a{constructor(e){super(e,{code:w.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class y extends a{constructor(e){super(e,{code:y.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class b extends a{constructor(e,{method:t}={}){super(e,{code:b.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${t?` " ${t}"`:""}.`})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class v extends a{constructor(e){super(e,{code:v.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class x extends a{constructor(e){super(e,{code:x.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class $ extends a{constructor(e){super(e,{code:$.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty($,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class k extends a{constructor(e){super(e,{code:k.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class T extends a{constructor(e){super(e,{code:T.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(T,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class S extends a{constructor(e){super(e,{code:S.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(S,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class P extends a{constructor(e){super(e,{code:P.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class D extends a{constructor(e){super(e,{code:D.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(D,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class A extends a{constructor(e){super(e,{code:A.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(A,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class E extends a{constructor(e){super(e,{code:E.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class C extends a{constructor(e){super(e,{code:C.code,name:"WalletConnectSessionSettlementError",shortMessage:"WalletConnect session settlement failed."})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:7e3}),e.s(["Z",0,A,"T",0,E,"Y",0,D,"r",0,x,"a",0,S,"D",0,l,"L",0,u,"u",0,c,"P",0,o,"J",0,g,"H",0,m,"X",0,s,"b",0,f,"Q",0,n,"p",0,v,"V",0,d,"j",0,h,"S",0,$,"g",0,p,"$",0,y,"s",0,P,"U",0,class extends i{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}},"d",0,T,"E",0,k,"q",0,b,"k",0,w,"B",0,C],47267);var I=e.i(74825);async function O(e,{signal:t}={}){return new Promise((r,i)=>{if(t?.aborted)return void i((0,I.l)(t));let a=()=>t?.removeEventListener("abort",o),n=setTimeout(()=>{a(),r()},Math.min(e,0x7fffffff)),o=()=>{clearTimeout(n),a(),i((0,I.l)(t))};t?.addEventListener("abort",o,{once:!0})})}e.s(["f",0,O],45269)},41598,98046,e=>{var t=e.i(37037);class r extends t.f{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}e.s(["f",0,r],41598);var i=e.i(86997),a=e.i(74825),n=e.i(19332);let o={current:0,take(){return this.current++},reset(){this.current=0}};async function s(e,{maxResponseBodySize:t}){if(!1===t)return e.text();let r=e.headers.get("Content-Length");if(r){let e=Number(r);if(e>t)throw new i.S({maxSize:t,size:e})}if(!e.body){let r=await e.text(),a=new TextEncoder().encode(r).length;if(a>t)throw new i.S({maxSize:t,size:a});return r}let a=e.body.getReader(),n=new TextDecoder,o="",c=0;try{for(;;){let{done:e,value:r}=await a.read();if(e)break;if((c+=r.byteLength)>t)throw await a.cancel(),new i.S({maxSize:t,size:c});o+=n.decode(r,{stream:!0})}return o+=n.decode()}finally{a.releaseLock()}}function c(e){return"number"==typeof e?.error?.code&&"string"==typeof e?.error?.message}e.s(["f",0,function(e,t={}){let{url:r,headers:l}=function(e){try{let t=new URL(e),r=(()=>{if(t.username){let e=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username="",t.password="",{url:t.toString(),headers:{Authorization:`Basic ${btoa(e)}`}}}})();return{url:t.toString(),...r}}catch{return{url:e}}}(e);return{async request(e){let{body:u,fetchFn:d=t.fetchFn??fetch,maxResponseBodySize:h=t.maxResponseBodySize??0xa00000,onRequest:p=t.onRequest,onResponse:f=t.onResponse,timeout:m=t.timeout??1e4}=e,g={...t.fetchOptions??{},...e.fetchOptions??{}},{headers:w,method:y,signal:b}=g;try{let e,{response:t,responseBody:v}=await function(e,{errorInstance:t=Error("timed out"),timeout:r,signal:i}){return new Promise((n,o)=>{(async()=>{let s,c=new AbortController;try{r>0&&(s=setTimeout(()=>{i?c.abort():o(t)},r)),n(await e({signal:c?.signal||null}))}catch(e){if(c?.signal.aborted&&(0,a.c)(e))return void o(t);o(e)}finally{clearTimeout(s)}})()})}(async({signal:e})=>{let{signal:t,cleanup:i}=function(e){let t=e.filter(e=>!!e);if(t.length<2)return{signal:t[0]??null,cleanup:()=>{}};let r=new AbortController,i=()=>{a(),r.abort(t.find(e=>e.aborted)?.reason)},a=()=>{for(let e of t)e.removeEventListener("abort",i)};for(let e of t){if(e.aborted){a(),r.abort(e.reason);break}e.addEventListener("abort",i)}return{signal:r.signal,cleanup:a}}([b,m>0?e:null]);try{let e={...g,body:Array.isArray(u)?(0,n.f)(u.map(e=>({jsonrpc:"2.0",id:e.id??o.take(),...e}))):(0,n.f)({jsonrpc:"2.0",id:u.id??o.take(),...u}),headers:{...l,"Content-Type":"application/json",...w},method:y||"POST",signal:t},i=new Request(r,e),a=await p?.(i,e)??{...e,url:r},c=await d(a.url??r,a);f&&await f(c);let m=await s(c,{maxResponseBodySize:h});return{response:c,responseBody:m}}finally{i()}},{errorInstance:new i.t({body:u,url:r}),timeout:m,signal:!0});if(t.headers.get("Content-Type")?.startsWith("application/json"))e=JSON.parse(v);else{e=v;try{e=JSON.parse(e||"{}")}catch(r){if(t.ok)throw r;e={error:e}}}let x=Array.isArray(u)&&Array.isArray(e)&&1===e.length?e[0]:e;if(!t.ok){if(c(x))throw new i.V({body:u,error:x.error,headers:t.headers,status:t.status,url:r});throw new i.y({body:u,details:(0,n.f)(e.error)||t.statusText,headers:t.headers,status:t.status,url:r})}if(!Array.isArray(u)||!u.length||Array.isArray(e)&&e.length>=u.length)return e;if(!c(x))throw Error(`Expected ${u.length} responses to batch request.`);return u.map(()=>x)}catch(e){if(b?.aborted)throw(0,a.l)(b);if((0,a.c)(e)||e instanceof i.y||e instanceof i.S||e instanceof i.V||e instanceof i.t)throw e;throw new i.y({body:u,cause:e,url:r})}}}}],98046)},32465,e=>{var t=e.i(37037),r=e.i(86997),i=e.i(47267),a=e.i(74825),n=e.i(53019),o=e.i(22404),s=e.i(19332);function c(e){if(e instanceof t.f)return e.walk(e=>e instanceof r.y||e instanceof r.V)}e.s(["f",0,function(e,r={}){return async(l,u={})=>{let{dedupe:d=!1,methods:h,retryDelay:p=150,retryCount:f=3,signal:m,uid:g}={...r,...u},{method:w}=l;if(h?.exclude?.includes(w)||h?.include&&!h.include.includes(w))throw new i.b(Error("method not supported"),{method:w});if(m?.aborted)throw(0,a.l)(m);let y=d?function(e,t=0){let r=0xdeadbeef^t,i=0x41c6ce57^t;for(let t=0;t<e.length;t++){let a=e.charCodeAt(t);r=Math.imul(r^a,0x9e3779b1),i=Math.imul(i^a,0x5f356495)}return r=Math.imul(r^r>>>16,0x85ebca6b)^Math.imul(i^i>>>16,0xc2b2ae35),(0x100000000*(2097151&(i=Math.imul(i^i>>>16,0x85ebca6b)^Math.imul(r^r>>>16,0xc2b2ae35)))+(r>>>0)).toString(36)}(`${g}.${(0,s.f)(l)}`):void 0;return(0,n.f)(()=>(0,o.f)(async()=>{try{return await e(l,m?{signal:m}:void 0)}catch(e){if(m?.aborted)throw(0,a.l)(m);if((0,a.c)(e))throw e;switch(e.code){case i.Q.code:throw new i.Q(e);case i.P.code:throw new i.P(e);case i.X.code:throw new i.X(e,{method:l.method});case i.u.code:throw new i.u(e);case i.D.code:throw new i.D(e);case i.L.code:throw new i.L(e);case i.V.code:throw new i.V(e);case i.j.code:throw new i.j(e);case i.g.code:throw new i.g(e);case i.b.code:throw new i.b(e,{method:l.method});case i.H.code:throw new i.H(e);case i.J.code:throw new i.J(e);case i.k.code:throw new i.k(e);case i.$.code:throw new i.$(e);case i.q.code:throw new i.q(e);case i.p.code:throw new i.p(e);case i.r.code:throw new i.r(e);case i.S.code:throw new i.S(e);case i.E.code:throw new i.E(e);case i.d.code:throw new i.d(e);case i.a.code:throw new i.a(e);case i.s.code:throw new i.s(e);case i.Y.code:throw new i.Y(e);case i.Z.code:throw new i.Z(e);case i.T.code:throw new i.T(e);case 5e3:throw new i.k(e);case i.B.code:throw new i.B(e);default:if(e instanceof t.f)throw e;throw new i.U(e)}}},{delay:({count:e,error:t})=>{let r=c(t)?.headers?.get("Retry-After");if(r){let e=Number.parseInt(r,10);if(!Number.isNaN(e))return 1e3*e;let t=Date.parse(r)-Date.now();if(t>0)return t}return~~(1<<e)*p},retryCount:f,signal:m,shouldRetry:({error:e})=>(function(e){if((0,a.c)(e))return!1;let t=c(e)?.status;if("code"in e&&"number"==typeof e.code){if(-1===e.code||e.code===i.H.code||e.code===i.D.code||429===e.code||-32007===e.code)return!0;if(!t)return!1}return!t||403===t||408===t||413===t||429===t||500===t||502===t||503===t||504===t||!1})(e)}),{enabled:d,id:y})}}])},53019,e=>{let t=new(e.i(91910)).f(8192);e.s(["f",0,function(e,{enabled:r=!0,id:i}){if(!r||!i)return e();if(t.get(i))return t.get(i);let a=e().finally(()=>t.delete(i));return t.set(i,a),a}])},22404,e=>{var t=e.i(74825),r=e.i(45269);e.s(["f",0,function(e,{delay:i=100,retryCount:a=2,shouldRetry:n=()=>!0,signal:o}={}){return new Promise((s,c)=>{let l=()=>c((0,t.l)(o));o?.addEventListener("abort",l,{once:!0});let u=async({count:l=0}={})=>{if(o?.aborted)return void c((0,t.l)(o));let d=async({error:e})=>{let t="function"==typeof i?i({count:l,error:e}):i;if(t)try{await (0,r.f)(t,{signal:o})}catch(e){c(e);return}return u({count:l+1})};try{let t=await e();s(t)}catch(e){if(o?.aborted)return void c((0,t.l)(o));if((0,t.c)(e))return void c(e);if(l<a&&await n({count:l,error:e}))return d({error:e});c(e)}};u().catch(c).finally(()=>o?.removeEventListener("abort",l))})}])},38985,e=>{let t,r=256;e.s(["f",0,function(e=11){if(!t||r+e>512){t="",r=0;for(let e=0;e<256;e++)t+=(256+256*Math.random()|0).toString(16).substring(1)}return t.substring(r,r+++e)}])}],86295,(e,t,r)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",r="minute",i="hour",a="week",n="month",o="quarter",s="year",c="date",l="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},p="en",f={};f[p]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}};var m="$isDayjsObject",g=function(e){return e instanceof v||!(!e||!e[m])},w=function e(t,r,i){var a;if(!t)return p;if("string"==typeof t){var n=t.toLowerCase();f[n]&&(a=n),r&&(f[n]=r,a=n);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;f[s]=t,a=s}return!i&&a&&(p=a),a||!i&&p},y=function(e,t){if(g(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new v(r)},b={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(i,n),o=r-a<0,s=t.clone().add(i+(o?-1:1),n);return+(-(i+(r-a)/(o?a-s:s-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:n,y:s,w:a,d:"day",D:c,h:i,m:r,s:t,ms:e,Q:o})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};b.l=w,b.i=g,b.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function h(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[m]=!0}var p=h.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(0/0);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var a=i[2]-1||0,n=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return b},p.isValid=function(){return this.$d.toString()!==l},p.isSame=function(e,t){var r=y(e);return this.startOf(t)<=r&&r<=this.endOf(t)},p.isAfter=function(e,t){return y(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<y(e)},p.$g=function(e,t,r){return b.u(e)?this[t]:this.set(r,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,o){var l=this,u=!!b.u(o)||o,d=b.p(e),h=function(e,t){var r=b.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return u?r:r.endOf("day")},p=function(e,t){return b.w(l.toDate()[e].apply(l.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},f=this.$W,m=this.$M,g=this.$D,w="set"+(this.$u?"UTC":"");switch(d){case s:return u?h(1,0):h(31,11);case n:return u?h(1,m):h(0,m+1);case a:var y=this.$locale().weekStart||0,v=(f<y?f+7:f)-y;return h(u?g-v:g+(6-v),m);case"day":case c:return p(w+"Hours",0);case i:return p(w+"Minutes",1);case r:return p(w+"Seconds",2);case t:return p(w+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(a,o){var l,u=b.p(a),d="set"+(this.$u?"UTC":""),h=((l={}).day=d+"Date",l[c]=d+"Date",l[n]=d+"Month",l[s]=d+"FullYear",l[i]=d+"Hours",l[r]=d+"Minutes",l[t]=d+"Seconds",l[e]=d+"Milliseconds",l)[u],p="day"===u?this.$D+(o-this.$W):o;if(u===n||u===s){var f=this.clone().set(c,1);f.$d[h](p),f.init(),this.$d=f.set(c,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[b.p(e)]()},p.add=function(e,o){var c,l=this;e=Number(e);var u=b.p(o),d=function(t){var r=y(l);return b.w(r.date(r.date()+Math.round(t*e)),l)};if(u===n)return this.set(n,this.$M+e);if(u===s)return this.set(s,this.$y+e);if("day"===u)return d(1);if(u===a)return d(7);var h=((c={})[r]=6e4,c[i]=36e5,c[t]=1e3,c)[u]||1,p=this.$d.getTime()+e*h;return b.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=b.z(this),n=this.$H,o=this.$m,s=this.$M,c=r.weekdays,u=r.months,h=r.meridiem,p=function(e,r,a,n){return e&&(e[r]||e(t,i))||a[r].slice(0,n)},f=function(e){return b.s(n%12||12,e,"0")},m=h||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(d,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return s+1;case"MM":return b.s(s+1,2,"0");case"MMM":return p(r.monthsShort,s,u,3);case"MMMM":return p(u,s);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(r.weekdaysMin,t.$W,c,2);case"ddd":return p(r.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(n);case"HH":return b.s(n,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(n,o,!0);case"A":return m(n,o,!1);case"m":return String(o);case"mm":return b.s(o,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,c,l){var u,d=this,h=b.p(c),p=y(e),f=(p.utcOffset()-this.utcOffset())*6e4,m=this-p,g=function(){return b.m(d,p)};switch(h){case s:u=g()/12;break;case n:u=g();break;case o:u=g()/3;break;case a:u=(m-f)/6048e5;break;case"day":u=(m-f)/864e5;break;case i:u=m/36e5;break;case r:u=m/6e4;break;case t:u=m/1e3;break;default:u=m}return l?u:b.a(u)},p.daysInMonth=function(){return this.endOf(n).$D},p.$locale=function(){return f[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=w(e,t,!0);return i&&(r.$L=i),r},p.clone=function(){return b.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},h}(),x=v.prototype;return y.prototype=x,[["$ms",e],["$s",t],["$m",r],["$H",i],["$W","day"],["$M",n],["$y",s],["$D",c]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),y.extend=function(e,t){return e.$i||(e(t,v,y),e.$i=!0),y},y.locale=w,y.isDayjs=g,y.unix=function(e){return y(1e3*e)},y.en=f[p],y.Ls=f,y.p={},y}()},53462,(e,t,r)=>{e.e,t.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}}},22229,(e,t,r)=>{e.e,t.exports=function(e,t,r){e=e||{};var i=t.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function n(e,t,r,a){return i.fromToBase(e,t,r,a)}r.en.relativeTime=a,i.fromToBase=function(t,i,n,o,s){for(var c,l,u,d=n.$locale().relativeTime||a,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=h.length,f=0;f<p;f+=1){var m=h[f];m.d&&(c=o?r(t).diff(n,m.d,!0):n.diff(t,m.d,!0));var g=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,g<=m.r||!m.r){g<=1&&f>0&&(m=h[f-1]);var w=d[m.l];s&&(g=s(""+g)),l="string"==typeof w?w.replace("%d",g):w(g,i,m.l,u);break}}if(i)return l;var y=u?d.future:d.past;return"function"==typeof y?y(l):y.replace("%s",l)},i.to=function(e,t){return n(e,t,this,!0)},i.from=function(e,t){return n(e,t,this)};var o=function(e){return e.$u?r.utc():r()};i.toNow=function(e){return this.to(o(this),e)},i.fromNow=function(e){return this.from(o(this),e)}}},54090,(e,t,r)=>{e.e,t.exports=function(e,t,r){r.updateLocale=function(e,t){var i=r.Ls[e];if(i)return(t?Object.keys(t):[]).forEach(function(e){i[e]=t[e]}),i}}}]);