!function(e,t){t((e="undefined"!=typeof globalThis?globalThis:e||self).webVitals={})}(this,(function(e){"use strict";var t,n,i,r,a=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},o=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},c=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},f=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},s=-1,d=function(){return"hidden"===document.visibilityState?0:1/0},m=function(){u((function(e){var t=e.timeStamp;s=t}),!0)},v=function(){return s<0&&(s=d(),m(),c((function(){setTimeout((function(){s=d(),m()}),0)}))),{get firstHiddenTime(){return s}}},p=function(e,t){var n,i=v(),r=a("FCP"),u=function(e){"first-contentful-paint"===e.name&&(d&&d.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),n(!0)))},s=performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],d=s?null:o("paint",u);(s||d)&&(n=f(e,r,t),s&&u(s),c((function(i){r=a("FCP"),n=f(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,n(!0)}))}))})))},l=!1,g=-1,h={passive:!0,capture:!0},y=new Date,T=function(e,r){t||(t=r,n=e,i=new Date,L(removeEventListener),E())},E=function(){if(n>=0&&n<i-y){var e={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+n};r.forEach((function(t){t(e)})),r=[]}},S=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){T(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,h),removeEventListener("pointercancel",i,h)};addEventListener("pointerup",n,h),addEventListener("pointercancel",i,h)}(t,e):T(t,e)}},L=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,S,h)}))},w=new Set;e.getCLS=function(e,t){l||(p((function(e){g=e.value})),l=!0);var n,i=function(t){g>-1&&e(t)},r=a("CLS",0),s=0,d=[],m=function(e){if(!e.hadRecentInput){var t=d[0],i=d[d.length-1];s&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(s+=e.value,d.push(e)):(s=e.value,d=[e]),s>r.value&&(r.value=s,r.entries=d,n())}},v=o("layout-shift",m);v&&(n=f(i,r,t),u((function(){v.takeRecords().map(m),n(!0)})),c((function(){s=0,g=-1,r=a("CLS",0),n=f(i,r,t)})))},e.getFCP=p,e.getFID=function(e,i){var s,d=v(),m=a("FID"),p=function(e){e.startTime<d.firstHiddenTime&&(m.value=e.processingStart-e.startTime,m.entries.push(e),s(!0))},l=o("first-input",p);s=f(e,m,i),l&&u((function(){l.takeRecords().map(p),l.disconnect()}),!0),l&&c((function(){var o;m=a("FID"),s=f(e,m,i),r=[],n=-1,t=null,L(addEventListener),o=p,r.push(o),E()}))},e.getLCP=function(e,t){var n,i=v(),r=a("LCP"),s=function(e){var t=e.startTime;t<i.firstHiddenTime&&(r.value=t,r.entries.push(e)),n()},d=o("largest-contentful-paint",s);if(d){n=f(e,r,t);var m=function(){w.has(r.id)||(d.takeRecords().map(s),d.disconnect(),w.add(r.id),n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,m,{once:!0,capture:!0})})),u(m,!0),c((function(i){r=a("LCP"),n=f(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,w.add(r.id),n(!0)}))}))}))}},e.getTTFB=function(e){var t,n=a("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},Object.defineProperty(e,"__esModule",{value:!0})}));var metricNameMap={"CLS":"cls_value","FID":"fid_value","LCP":"lcp_value"};function ezlogVital(m){if(!metricNameMap[m.name]||!window._ezaq){return;}
window.__ez.bit.Add(window._ezaq["page_view_id"],[(new window.__ezDotData(metricNameMap[m.name],m.delta))]);window.__ez.bit.Fire();}
window.webVitals.getCLS(ezlogVital);window.webVitals.getLCP(ezlogVital);window.webVitals.getFID(ezlogVital);