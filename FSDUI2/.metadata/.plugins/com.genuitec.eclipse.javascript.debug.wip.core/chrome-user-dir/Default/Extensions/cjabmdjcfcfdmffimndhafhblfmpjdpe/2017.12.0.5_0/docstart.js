var DOMCONTENTLOADED_EVENT="OnDOMContentLoaded";var BEGIN_NAV_EVENT="OnBeginNav";var END_NAV_EVENT="OnEndNav";var TAB_UPDATED="OnTabUpdated";var ALL_NAV_EVENTS="AllNavEvents";var _receivedBeginNav=false;var _firedBeginNav=false;var _receivedDOMContentLoaded=false;var _firedDOMContentLoaded=false;var _receivedEndNav=false;var _firedEndNav=false;var _firedFakeDOMContentLoaded=false;var _maxCheckCounter=0;var _injectedToolbarScript=false;var _tabId=0;var _windowId=0;var _incognitoMode=0;var _windowType=0;var _fid=0;var _urlPortalPageRegEx="http(s)?://identitysafe.norton.com/[a-zA-Z-]*/?client";var _isTopLevel=(top==self);var queueOfSubmittedForms=[];var timerClickEventQueue=0;var regexp=new RegExp(".(pdf)$","i");var _delayEvents=regexp.test(document.URL);if(false==_delayEvents){regexp=new RegExp("^(http|https)://www.divx.com/[a-z]|[a-z]-[a-z]/software/download/installed|(/chromium)","i");_delayEvents=regexp.test(document.URL)}function isInside(a,f,e,d,c,b){x1=Math.min(e,c);x2=Math.max(e,c);y1=Math.min(d,b);y2=Math.max(d,b);if((x1<=a)&&(a<=x2)&&(y1<=f)&&(f<=y2)){return true}else{return false}}var updatePortalPage=function(){var a=new RegExp(_urlPortalPageRegEx,"i");var b=a.test(document.URL);if(b){var c=document.createElement("div");c.setAttribute("style","display: none;");c.id="extension-is-installed-"+chrome.runtime.id;if(document.body){document.body.appendChild(c)}}};function SendMessageToNativeHost(a){chrome.runtime.sendMessage(a)}function getFrameId(){if(_fid===0){_fid=Math.floor((Math.random()*2147483646)+1)}return _fid}function CheckForEventInQueue(c){var b=0,a=queueOfSubmittedForms.length;for(b=0;b<a;b+=1){if(queueOfSubmittedForms[b]===c){return true}}if(!a&&!timerClickEventQueue){timerClickEventQueue=window.setInterval(function(){queueOfSubmittedForms=[];window.clearInterval(timerClickEventQueue);timerClickEventQueue=0},1000)}queueOfSubmittedForms.push(c);return false}function OnSubmit(u){var D=u.target;var z={};if($(u.target).is("form")){z=D}else{z=D.form;if(!z){z=$(D).closest("form")[0]}}var s=false;if(z){var w=z.getBoundingClientRect();var b=$(z).find("input:visible");if(_isTopLevel&&(window.location.hostname)&&(window.location.hostname=="accounts.google.com")){b=$(z).find("input")}for(var f=0;f<b.length;f++){var k=b[f];if(k){var m=k.getBoundingClientRect();if(m){var j=(m.right-m.left)/2+m.left;var h=(m.bottom-m.top)/2+m.top;if(!(isInside(j,h,w.left,w.top,w.right,w.bottom))){s=true;break}}}}}if(!z||s){s=true;z=window.document.body}if(true==CheckForEventInQueue(z)){return}var B=[];B.push(0);var n=[];n.push(0);var r={};var q={};if(!s){var A=z.getBoundingClientRect();r.value=ElementType.Form;q.value=InputType.Unknown;var g=WAX.processInput(z,A,r,q,true);if(null!=g){n.push(g.length);n.push(g)}}var p=new Rect(Number.MAX_VALUE,Number.MAX_VALUE,0,0,0,0);WAX.collectInputs(z,p,n,B,true);var l=[];l.push(0);WAX.collectNonInputs(z,p,n,l,B,true);n[0]=(n.length-1)/2;var t=n.join("#!#");t=n[1]=t.length+"#!#"+t;l[0]=(l.length-1)/2;if(1==l.length){l.push("0")}sLabels=l.join("#!#");sLabels=l[1]=sLabels.length+"#!#"+sLabels;var o=t+sLabels;o=o.length.toString()+"#!#"+o;var C=z.getBoundingClientRect();if(C){var v=Math.floor(C.width);var e=Math.floor(C.height);var c=new Rect(Math.floor(C.left),Math.floor(C.top),Math.floor(C.right),Math.floor(C.bottom),v,e);C=c}var a="";try{a=top.location.href.toString()}catch(d){a=document.URL.toString()}SendMessageToNativeHost({method:"OnSubmit",windowId:_windowId,tabId:_tabId,documentURL:a,documentTitle:document.domain,button:D.id,elementData:{attributes:{id:$(z).attr("id"),name:$(z).attr("name")},boundingClientRect:C,tagName:z.tagName},sourceData:o});_firedDOMContentLoaded=false}function AddSubmitHandler(){var a=document.forms;for(i=0;i<a.length;i++){a[i].addEventListener("submit",OnSubmit,false)}if(null!=document.body){document.body.addEventListener("submit",OnSubmit,false)}}function FireEvent(b,a){chrome.runtime.sendMessage({contentscript:"GetTabInfo"},function(e){_windowId=e.windowId;_tabId=e.tabId;_incognitoMode=e.incognitoMode;_windowType=e.windowType;if((0==_tabId)||(0==_windowId)){return false}if(e.frameID){_fid=e.frameID}var f=false;var c=(window==window.top?true:false);var d=getFrameId();if(BEGIN_NAV_EVENT==b){_receivedBeginNav=true;if(false==_firedBeginNav){_firedBeginNav=true;SendMessageToNativeHost({method:"NavEvent",windowId:_windowId,tabId:_tabId,topLevelNav:c,beginNav:true,documentURL:document.URL.toString(),fid:d});f=true}}else{if(DOMCONTENTLOADED_EVENT==b){FireEvent(BEGIN_NAV_EVENT,"");_receivedDOMContentLoaded=true;if(false==_firedDOMContentLoaded){_firedDOMContentLoaded=true;AddSubmitHandler();SendMessageToNativeHost({method:"DOMContentLoaded",windowId:_windowId,tabId:_tabId,topLevel:c,fid:d,documentURL:document.URL.toString(),documentTitle:document.title,documentReferrer:document.referrer,documentReadyState:document.readyState,screenX:window.screenX,screenY:window.screenY,outerWidth:window.outerWidth,outerHeight:window.outerHeight});f=true}}else{if(END_NAV_EVENT==b){FireEvent(BEGIN_NAV_EVENT,"");FireEvent(DOMCONTENTLOADED_EVENT,"");_receivedEndNav=true;if(false==_firedEndNav){_firedEndNav=true;SendMessageToNativeHost({method:"NavEvent",windowId:_windowId,tabId:_tabId,topLevelNav:c,beginNav:false,documentURL:document.URL.toString(),fid:d});f=true}}else{if(TAB_UPDATED==b){if("complete"==a){FireEvent(ALL_NAV_EVENTS,"")}else{if("resend"==a){_firedBeginNav=false;_firedDOMContentLoaded=false;_firedEndNav=false;FireEvent(ALL_NAV_EVENTS,"")}}SendMessageToNativeHost({method:"TabUpdated",windowId:_windowId,tabId:_tabId,status:a,documentURL:document.URL.toString()})}else{if(ALL_NAV_EVENTS==b){if(true==_receivedBeginNav){FireEvent(BEGIN_NAV_EVENT,"")}if(true==_receivedDOMContentLoaded){FireEvent(DOMCONTENTLOADED_EVENT,"")}if(true==_receivedEndNav){FireEvent(END_NAV_EVENT,"")}f=true}}}}}return f})}function UpdateEmbedObject(){if((0==_tabId)||(0==_windowId)){return false}SendMessageToNativeHost({method:"ChromeSetId",windowId:_windowId,tabId:_tabId,incognitoMode:_incognitoMode,windowType:_windowType,topLevel:_isTopLevel});return true}function OnKeyDown(a){if(a.keyCode==13){OnSubmit(a)}}function MessageFilter(a){switch(a){case"parseprefs":case"PerformAnalysis":case"AddAjaxEventListener":case"fillData":case"verifyandsubmit":case"verifyFilling":case"collectURLs":case"setResults":case"onCheckTabWindow":case"onTabReplaced":case"onSelectionChanged":case"onDOMContentLoaded":case"onCommitted":case"onCompleted":case"onUpdated":case"GetElementById":case"AddEventListener":case"enableNSGClientLibrary":return true;default:return false}}chrome.runtime.onMessage.addListener(function(f,e,t){if(typeof f.type=="undefined"){return}var m=f.windowId;var v=f.tabId;if((0==v)||(0==m)){return}var g=f.type;var j=window==window.top;if(MessageFilter(g)===false){return}if((v&&m)&&((v!=_tabId)||(m!=_windowId))){_windowId=m;_tabId=v;if(f.incognitoMode){_incognitoMode=f.incognitoMode}if(f.windowType){_windowType=f.windowType}var u=getFrameId()}if("parseprefs"==g){var d=f.frameId;var u=getFrameId();if(parseInt(d,10)==u){if(undefined!=f.WCIDArguments){if((undefined!=f.WCIDArguments.responseType)&&("wcidDomLoadedResponse"==f.WCIDArguments.responseType)){var b=f.WCIDArguments.result;if(b!=undefined){wcidInit(b)}}}if(undefined!=f.WAXArguments){if((undefined!=f.WAXArguments.responseType)&&("waxDomLoadedResponse"==f.WAXArguments.responseType)){var r=f.WAXArguments.prefs;if(typeof r!=="undefined"){waxInit(r)}}}}}else{if("PerformAnalysis"==g){var d=f.frameId;var u=getFrameId();if(parseInt(d,10)==u){waxReparse()}}else{if("AddAjaxEventListener"==g){var d=f.frameId;var u=getFrameId();if(parseInt(d,10)==u){waxAddAjaxEventListener()}}else{if("fillData"==g){var d=f.frameId;var u=getFrameId();if(parseInt(d,10)==u){waxFill(f.msg)}}else{if(("verifyandsubmit"==g)||("verifyFilling"==g)){var d=f.frameId;var u=getFrameId();if(parseInt(d,10)!=u){return}if("verifyandsubmit"==g){setTimeout(function(){waxVerifyandSubmit(f.msg)},100)}if("verifyFilling"==g){waxVerify(f.msg)}}else{if("collectURLs"===g){if(_isTopLevel&&document.URL.search("nortonsafe.search.ask.com")>=0&&navigator.userAgent.indexOf("Firefox")>=0){return}var k=new Array();k=Shasta.collectURLs(f.frameid,f.siteid,f.rescan);var q=Shasta.getPageDirection();var s=Utils.getIframeIndex();SendMessageToNativeHost({method:"collectURLsResponse",windowId:_windowId,tabId:_tabId,annotateURLsArray:k,dirStyle:q,caller_thread_id:f.caller_thread_id,frame_index:s})}else{if("setResults"===g){var h=Shasta.setResults(f.scriptData);SendMessageToNativeHost({method:"setResultsResponse",windowId:_windowId,tabId:_tabId,returnValue:h,caller_thread_id:f.caller_thread_id})}else{if("onCheckTabWindow"==g){_maxCheckCounter=0;setTimeout(function(){SendMessageToNativeHost({method:"ChromeSetId",windowId:_windowId,tabId:_tabId,incognitoMode:_incognitoMode,windowType:_windowType,topLevel:_isTopLevel})},100)}else{if("onTabReplaced"==g){setTimeout(function(){if((false==_receivedBeginNav)&&(false==_receivedDOMContentLoaded)){_firedFakeDOMContentLoaded=true;FireEvent(DOMCONTENTLOADED_EVENT,"")}setTimeout(function(){if(true==_firedFakeDOMContentLoaded){FireEvent(END_NAV_EVENT,"")}},10)},50)}else{if("onSelectionChanged"==g){_maxCheckCounter=0;setTimeout(function(){SendMessageToNativeHost({method:"ChromeSetId",windowId:_windowId,tabId:_tabId,incognitoMode:_incognitoMode,windowType:_windowType,topLevel:_isTopLevel})},100)}else{if("onDOMContentLoaded"==g){_maxCheckCounter=0;FireEvent(DOMCONTENTLOADED_EVENT,"")}else{if("onCommitted"==g){_maxCheckCounter=0;FireEvent(BEGIN_NAV_EVENT,"")}else{if("onCompleted"==g){_maxCheckCounter=0;FireEvent(END_NAV_EVENT,"")}else{if(("onUpdated"==g)&&(typeof f.status!="undefined")&&(true==j)){if("complete"==f.status){_maxCheckCounter=0;if(_isTopLevel&&(window.location.hostname)&&(window.location.hostname=="accounts.google.com")){var p=true;waxReparse(p)}}FireEvent(TAB_UPDATED,f.status)}else{if("GetElementById"===g){var o=document.getElementById(f.id);var a={};if(o){a.id=o.id;a.type=o.tagName;a.result=true}else{a=false}SendMessageToNativeHost({method:"getElementByIdResponse",windowId:_windowId,tabId:_tabId,returnValue:a,caller_thread_id:f.caller_thread_id})}else{if("AddEventListener"===g){var c=document.getElementById(f.elementId);if(c==null){c=document.getElementsByName(f.elementName)[0];if(c==null){var n=f.XPosition;var l=f.YPosition;c=document.elementFromPoint(n,l)}}if(c==null){return}if(f.eventType==0){c.addEventListener("keydown",OnKeyDown,false)}else{c.addEventListener("click",OnSubmit,false)}}else{if("enableNSGClientLibrary"===g){NSG.enableClientLibrary(_windowId,_tabId,f.nsgData,f.machineId,f.tab_url)}}}}}}}}}}}}}}}}}});function ProcessNavStart(){if(0==_tabId){chrome.runtime.sendMessage({contentscript:"GetTabInfo"},function(a){_windowId=a.windowId;_tabId=a.tabId;_incognitoMode=a.incognitoMode;_windowType=a.windowType;SendMessageToNativeHost({method:"ChromeSetId",windowId:_windowId,tabId:_tabId,incognitoMode:_incognitoMode,windowType:_windowType,topLevel:_isTopLevel});ProcessNavStart()})}else{FireEvent(ALL_NAV_EVENTS,"")}}document.addEventListener("DOMContentLoaded",function(){FireEvent(DOMCONTENTLOADED_EVENT,"");updatePortalPage()});