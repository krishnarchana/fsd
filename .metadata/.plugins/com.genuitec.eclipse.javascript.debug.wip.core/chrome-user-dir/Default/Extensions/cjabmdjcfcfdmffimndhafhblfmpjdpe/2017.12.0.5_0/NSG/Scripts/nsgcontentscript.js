var _tabId=0;var _windowId=0;var NSG=function(){return{enableClientLibrary:function(h,a,i,g,d){var e=document.createElement("script");e.type="text/javascript";e.src=chrome.extension.getURL("NSG/Scripts/nsgeventhandler.js");var f=getHostName();if(d.indexOf(f)!==-1){if((window.sessionStorage.getItem("last_visited")===null)||(window.sessionStorage.getItem("last_visited")!==f)){var c="<d><h>"+f+"</h><m>"+g+"</m></d>";sendNSGEligibleURLVisitedTelemetryEvent(c)}window.sessionStorage.setItem("last_visited",f)}document.getElementsByTagName("body")[0].appendChild(e);_windowId=h;_tabId=a;var b="nsg_info_callback_"+new Date().valueOf();window[b]=function(j){if(j!==undefined){if(j.type==="ORDER"){if(j.fn&&typeof window[j.fn]==="function"){window[j.fn](i)}}else{if(j.type==="GUARANTEE"){if(j.fn&&typeof window[j.fn]==="function"){window[j.fn](i)}SendNSGOrderReceivedEvent(j)}}}};nsg_anywhere(window,document,b)}}}();function getHostName(){return window.location.hostname}function SendNSGOrderReceivedEvent(a){chrome.runtime.sendMessage({method:"NSGOrderReceived",windowId:_windowId,tabId:_tabId,nsgType:a.type,nsgGuaranteeId:a.guaranteeId})}function sendNSGEligibleURLVisitedTelemetryEvent(a){chrome.runtime.sendMessage({method:"NSGEligibleURLVisitedTelemetry",telemetryData:a})};