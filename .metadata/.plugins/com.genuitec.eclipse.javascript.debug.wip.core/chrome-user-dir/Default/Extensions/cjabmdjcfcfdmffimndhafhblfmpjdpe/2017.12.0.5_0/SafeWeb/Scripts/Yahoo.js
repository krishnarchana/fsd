var Yahoo=function(){var a=false;var d=false;var c=false;var b=false;var e=new Array();return{parsePage:function(){cancelEventHandler=function(k){var l=k?k:window.event;if(window.event){l.cancelBubble=true}else{l.stopPropagation()}};executeXPathQuery=function(){var k=true;if(window.location.hostname==="hk.search.yahoo.com"){Utils.execSearchQuery("//div[contains(@id,'web') or contains(@id,'kp') or contains(@id,'ysch')]//li/div//a[contains(@class,'ttl')]");Utils.execSearchQuery("//div[contains(@class,'sc-knowledge')]//li/a[not(child::img)][1]");Utils.execTopBtmSponsQuery("//div[contains(@class,'spns') or contains(@class,'ads horiz')]//li/div[not(contains(@class, 'abs'))]/a[not(contains(@class, 'nradan'))][1]","//div[contains(@class,'spns') or contains(@class,'ads horiz')]//li/em[1]");Utils.execRightSponsQuery("//div[@id='east' or contains(@id,'sec')]//ul/li[not(@class)]/a[not(child::img)]","//div[@id='east' or contains(@id,'sec')]//li[not (@class='yschprom')]//em[(not(@class))][1]");Utils.execSearchQuery("//div[@id='yschiy']/cite/a[not(child::img)]");Utils.execSearchQuery("//div[@class='res sc']//div/a[contains(@class,'spt')]");Utils.execRightSponsQuery("//div[@id='east']/ul[starts-with(@class,'ead')]//li/a","//div[@id='east']/ul[starts-with(@class,'ead')]//li/em");k=false;a=true}else{if(window.location.hostname==="hk.m.search.yahoo.com"){Utils.execSearchQuery("//div[contains(@id,'web') or contains(@id,'kp')]//li/div//a[contains(@class,'ttl')]");Utils.execSearchQuery("//div[contains(@class,'sc-knowledge')]//li/a[not(child::img)][1]");Utils.execTopBtmSponsQuery("//div[contains(@class,'spns') or contains(@class,'ads horiz')]//li/div/a[not(child::img)][1]","//div[contains(@class,'spns') or contains(@class,'ads horiz')]//li/em[1]");Utils.execRightSponsQuery("//div[@id='east' or contains(@id,'sec')]//ul/li[not(@class)]/a[not(child::img)]","//div[@id='east' or contains(@id,'sec')]//li[not (@class='yschprom')]//em[(not(@class))][1]");Utils.execSearchQuery("//div[@id='yschiy']/cite/a[not(child::img)]");Utils.execSearchQuery("//div[@class='res sc']//div/a[contains(@class,'spt')]");Utils.execRightSponsQuery("//div[@id='east']/ul[starts-with(@class,'ead')]//li/a","//div[@id='east']/ul[starts-with(@class,'ead')]//li/em");k=false;a=true}else{if(window.location.hostname==="kr.search.yahoo.com"){Utils.execSearchQuery("//div[@id='web']//li//div/h3/a[not(child::img)]");Utils.execSearchQuery("//div[starts-with(@id,'bl') or @id='vdo']//li/div[@class='cn']/h4/a[not(child::img)]");Utils.execSearchQuery("//div[@id='ks2']//div[@class='box']/p/a[not(child::img)]");Utils.execSearchQuery("//div[@id='vpr']//div/strong//a[not(child::img)]");Utils.execSearchQuery("//div[@id='nws']//div[@class='box']//div[@class='rt']/p/a[not(child::img)]");Utils.execSearchQuery("//div[@id='gg1']//div[@class='box']/span/p/a[not(child::img)]");Utils.execSearchQuery("//div[@id='go']//dd/strong//a[not(child::img)and not(parent::span)]");Utils.execSearchQuery("//div[@id='dic']//dd/span/a[1][not(child::img)]");Utils.execSearchQuery("//div[(@id='poi')]//div/h5//a[contains(@class,'spt')]");Utils.execSearchQuery("//div[@id='sp1']//dd//a[(parent::h3) or ((parent::dd) and not(child::img))]");Utils.execSearchQuery("//div[@class='yiy']/h4[(preceding-sibling::span)]/a[1]");Utils.execTopBtmSponsQuery("//div[contains(@class,'special-link')]//li//h3/a[not(child::img) and not(@class)]","//div[contains(@class,'special-link')]//li/em[1]");Utils.execTopBtmSponsQuery("//div[contains(@class,'premium-link')]//li//h3/a[not(child::img) and not(@class)]","//div[contains(@class,'premium-link')]//li/div/a[not(child::img) and not(@class)]");Utils.execTopBtmSponsQuery("//div[starts-with(@class,'ads horiz ')]//ul[@class='spns']//div[not(@class)]/a[not(child::img)]","//div[starts-with(@class,'ads horiz ')]//ul[@class='spns']//em/a[not(@class) and not(child::img)]");d=true}else{if(window.location.hostname==="search.yahoo.co.jp"){Utils.execSearchQuery("//div[@id='mIn']//div[@class='hd']//h3/a");Utils.execSearchQuery("//div[@id='mIn']//div[@class='bd']//div[@class='row']//ul/li//a[not(child::img)]");Utils.execTopBtmSponsQuery("//div[@id='mIn']//div[@class='bd']//ul/li//a[@class='t' and not(child::img)]","//div[@id='mIn']//div[@class='bd']//ul/li//span[@class='u']");Utils.execTopBtmSponsQuery("//div[@id='mIn']//div[@class='bd']//h3/a","//div[@id='mIn']//div[@class='bd']//div[contains(@class,'cf') and not(contains(@class,'st1'))]/span[1]");Utils.execRightSponsQuery("//div[@id='sIn']//div[@class='bd']//a[not(child::img)]","//div[@id='sIn']//div[@class='bd']//span[@class='u']")}else{if((window.location.hostname==="search.cn.yahoo.com")||(window.location.hostname==="one.cn.yahoo.com")){Utils.execSearchQuery("//div[@class='rst' or @class='yst-web']//h3/a[not(child::img)]");Utils.execTopBtmSponsQuery("//div[contains(@class,'p4p') or contains(@id,'p4p')]//h3/em[1]","//div[contains(@class,'p4p') or contains(@id,'p4p')]//h3/em[1]");Utils.execRightSponsQuery("//div[@class='pr']//a[@class='pa']//em","//div[@class='pr']//a[@class='pa']//div[@class='f1']//div[@class='rel']")}else{if((window.location.href.indexOf("http://www.yahoo.cn/s?")!=-1)||(window.location.href.indexOf("https://www.yahoo.cn/s?")!=-1)){Utils.execSearchQuery("//div[@class='main_content']/div[@class='content']/ul[@class='results']/li[@class='record']/h3[@class='title']/a");Utils.execSearchQuery("//div[@class='main_content']/div[@class='content']/ul[@class='results']/li[@class='record sc_news']/div/ul/li/a[@class='sub_title']");Utils.execSearchQuery("//div[@class='main_content']/div[@class='content']/ul[@class='results']/li[@class='record']/ul[@class='sitelink']/li/a")}else{if(window.location.hostname==="ca.search.yahoo.com"){Utils.execSearchQuery("//div[@id='web']//a[contains(@class,'yschttl')]");Utils.execTopBtmSponsQuery("//div[contains(@class,'spns') or contains(@class,'ads horiz')]//li/div/a[not(contains(@class,'pp-'))and not(child::img)]","//div[contains(@class,'spns') or contains(@class,'ads horiz')]//li//em[1]");Utils.execRightSponsQuery("//div[@id='east']//li[not(@class)]/a[not(child::img)]","//div[@id='east']//li//em[1]");Utils.execRightSponsQuery("//div[@id='east']/ul[starts-with(@class,'ead')]//li/a","//div[@id='east']/ul[starts-with(@class,'ead')]//li/em");k=false}else{if(window.location.hostname==="tw.search.yahoo.com"){Utils.execSearchQuery("//div[contains(@id,'web')]//a[contains(@class,'ttl')]");c=Utils.execTopBtmSponsQuery("//div[contains(@class,'spns') or contains(@class,'ads horiz')]//li//div/a[1 and not(@class) and not(child::img)]","//div[contains(@class,'spns') or contains(@class,'ads horiz')]//li//em[1 and not(parent::a)]");Utils.execSearchQuery("//div[contains(@class,'sc-knowledge') or contains(@class,'sc-shopping')]//li/a[not(child::img)]");Utils.execSearchQuery("//div[@class='res sc']/div[contains(@class,'ttl')]/a[contains(@class,'spt')and not(child::img)]")}else{if((window.location.href.indexOf("http://search.yahoo.com/sponsored_search")!=-1)||(window.location.href.indexOf("https://search.yahoo.com/sponsored_search")!=-1)){c=Utils.execTopBtmSponsQuery("//div[@id='ad-srp']//li//h3/a[not(child::img)]","//div[@id='ad-srp']//li//div[(@class='res')]/span[(@class='url')]")}else{if(window.location.href.indexOf("search/dir")!=-1){Utils.execSearchQuery("//div[contains(@id,'web')]//a[contains(@class,'ttl')]");c=Utils.execTopBtmSponsQuery("//div[contains(@class,'spns') or contains(@class,'ads horiz')]//li/div[not(@class='abst')]/a[1 and not(@class) and not(child::img)]","//div[contains(@class,'spns') or contains(@class,'ads horiz')]//li//em[1 and not(parent::a)]")}else{Utils.execSearchQuery("//div[contains(@id,'web')]//h3//a[1]");c=Utils.execTopBtmSponsQuery("//ul[contains(@class,'spns') or contains(@class,'ads horiz') or contains(@class,'eads')]/li/div[contains(@class,'ad-ttl') or contains(@class,'vert-ad-ttl')]/a[not(child::img)]","//ul[contains(@class,'spns') or contains(@class,'ads horiz') or contains(@class,'eads')]//li/em[1 and not(parent::a)]")}}}}}}}}}}if(k){Utils.execRightSponsQuery("//div[contains(@class,'bcae') or contains(@class, 'bcaw')]//h3[@class='title']//a[1]","//div[contains(@class,'bcae') or contains(@class, 'bcaw')]//div[contains(@class,'compTitle')]//div//a[1]");if(window.location.hostname==="in.search.yahoo.com"){Utils.execRightSponsQuery("//div[@class='mod glue-spl']//li[not (@class='yschprom')]//a[(not(@class) and not(child::img))]","//div[@class='mod glue-spl']//li[not (@class='yschprom')]//em[1]")}}Utils.execSearchQuery("//div[starts-with(@class,'res sc')]//tr/td[@class='news-r']//li/a[not(child::img)]");Utils.execSearchQuery("//ul[contains(@class,'compArticleList')]//li/h4//a[1]");Utils.execSearchQuery("//div[@class='shpnr']//*[contains(@class,'ttl')]");Utils.execTopBtmSponsQuery("//div[contains(@class,'bcas') or contains(@class, 'bcan')]//h3[@class='title']//a[1]","//div[contains(@class,'bcas') or contains(@class, 'bcan')]//div[contains(@class,'compTitle')]//div//a[not(contains(@class, 'thmb'))][1]");Utils.execSearchQuery("//div[starts-with(@class,'res sc') and (following::div[contains(@id,'web')])]//a[contains(@class,'yschttl')]");Utils.execSearchQuery("//div[starts-with(@class,'res sc')]/h4/a[(not(@class) or (@class='spt')) and not(child::img)]");Utils.execSearchQuery("//div[contains(@class,'navset')]//div[contains(@class,'cnt')]//li[not(@class)]/a[not(child::img)]");Utils.execSearchQuery("//div[contains(@class,'sc-clues')]//a[contains(@class,'ttl')and not(child::img)]");Utils.execSearchQuery("//div[@id='main']//ol[@id='quickapp-prompt']//li//a[contains(@class,'ttl')and not(child::img)]");Utils.execSearchQuery("//div[contains(@class,'tabview-content')]//li//div[contains(@class,'accrdn-panel')]//div[@class='wt-bd']/h3/a[not(child::img)]");Utils.execSearchQuery("//div[contains(@class,'tabview-content')]//li//div[contains(@class,'accrdn-panel')]//li/h3/a[not(child::img)]")};getMatchNode=function(o,l,n){if(n&&n.parentNode&&n.parentNode.parentNode&&n.parentNode.parentNode.parentNode){var k=n.parentNode.parentNode.parentNode;var q=k.getElementsByTagName(o);var m=q.length;if(m){for(var p=0;p<m;p++){if(q[p].className==l){return q[p]}}}}return null};getLink=function(r,k){var n=["/**","/*-"];var q;var m;var o=r.replace(/\u200B|\u2060/g,"");o=unescape(o);var p=Utils.getFormatLink(o);for(var l=0;l<n.length;l++){if((q=p.lastIndexOf(n[l]))!=-1){break}}if(q!=-1){m=p.slice(q+n[l].length)}else{m=p}if(m.match(/\.yahoo\.com/)&&m.match(/RU=/)){m=m.slice(m.lastIndexOf("RU=")+3);m=m.slice(0,m.indexOf("/RK="))}return encodeURI(m)};if(typeof Utils!="undefined"){executeXPathQuery();var i=new Array();i=Utils.getSearchText();if(i.length<=0){return false}e=Utils.getSearchNodes();for(var g=0;g<i.length;g++){var j;var h;j=getLink(i[g],e[g]);var f=Shasta.addURL(j)}}return true},createAnnotation:function(){addAnnotation=function(w,s){var y=false;var z=w.parentNode;var i=w.nextSibling;var r=false;if(!z){return false}s.style.cssFloat=s.style.styleFloat="none";s.style.display="inline";if(d){if(z.nodeName.toLowerCase()!="p"){s.style.top="0px"}}if(a&&(p[j].toLowerCase()=="topbottom")){var x=document.createElement("span");x.style.display="inline";w.style.display="inline";x.onclick=cancelEventHandler;var t=x.appendChild(s);var v=document.createElement("br");x.appendChild(v);s=x}if(!i){r=true}if(r){if(a&&(p[j].toLowerCase()=="right")){if(w.currentStyle){s.style.marginLeft=w.currentStyle.marginLeft}else{if(window.getComputedStyle){var u=window.getComputedStyle(w,null);if(u){s.style.marginLeft=u.getPropertyValue("margin-left")}}}}z.appendChild(document.createTextNode(" "));z.appendChild(s)}else{if(p[j].toLowerCase()!="normal"&&i&&(i.nodeName.toLowerCase()=="em")){y=true}if(y||(p[j].toLowerCase()=="right")){w.style.display="inline"}z.insertBefore(document.createTextNode(" "),i);z.insertBefore(s,i);if(y){var v=document.createElement("br");z.insertBefore(v,i);b=true;q[l++]=z}}return true};detectSA=function(){var s=Utils.IsSAEnabled();if(s){for(var y=0;y<q.length;y++){var u=0;var x=0;var i=false;var A=q[y].parentNode;var v=A.getElementsByTagName("img");for(var t=0;t<v.length;t++){if(v[t].src.indexOf(Shasta.getResProtocol())!=-1){u=t}if(v[t].src.match(h)){x=t;n=true}}if(n){if(x<u){v[x].style.cssFloat=v[x].style.styleFloat="left";v[u].style.left="5px"}else{saParent=v[x].parentNode;saNextNode=saParent.nextSibling;while(saNextNode!=null){if(saNextNode.nodeName.toLowerCase()=="em"){i=true;break}saNextNode=saNextNode.nextSibling}if(i){var w=q[y].childNodes.length;var z=q[y].childNodes;for(liStartIdx=0;liStartIdx<w;liStartIdx++){var r=z[liStartIdx];if(r.nodeName.toLowerCase()=="br"||r.nodeName.toLowerCase()=="em"){break}if(r.nodeType!=3){r.style.cssFloat=r.style.styleFloat="left"}}}}}}}if(n||(!s&&(++o>g))){clearInterval(k)}};if(typeof Utils!="undefined"){if(e.length<=0){return false}var p=new Array();var q=new Array();var l=0;p=Utils.getSearchFlags();for(var j=0;j<e.length;j++){var f;f=Utils.createImage(j);if(!addAnnotation(e[j],f)){return false}}if(b){var o=0;var n=false;var m=Utils.getSADetectInterval();var g=Utils.getSADetectCnt();Utils.ResetSAEnabled();var h=Utils.getSAProtocol();var k=setInterval(detectSA,m)}}return true}}}();function sb_collectURLs(b,c,a){if(typeof Shasta!="undefined"){return Shasta.collectURLs(b,c,a)}}function sb_setResults(a){if(typeof Shasta!="undefined"){return Shasta.setResults(a)}}function sb_getPageDirection(){if(typeof Shasta!="undefined"){return Shasta.getPageDirection()}};