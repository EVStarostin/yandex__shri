!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){
/*!
 * PEP v0.4.3 | https://github.com/jquery/PEP
 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
 */
t.exports=function(){"use strict";var t=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","pageX","pageY"],e=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0];function n(n,r){r=r||Object.create(null);var o=document.createEvent("Event");o.initEvent(n,r.bubbles||!1,r.cancelable||!1);for(var i,a=2;a<t.length;a++)i=t[a],o[i]=r[i]||e[a];o.buttons=r.buttons||0;var s=0;return s=r.pressure&&o.buttons?r.pressure:o.buttons?.5:0,o.x=o.clientX,o.y=o.clientY,o.pointerId=r.pointerId||0,o.width=r.width||0,o.height=r.height||0,o.pressure=s,o.tiltX=r.tiltX||0,o.tiltY=r.tiltY||0,o.twist=r.twist||0,o.tangentialPressure=r.tangentialPressure||0,o.pointerType=r.pointerType||"",o.hwTimestamp=r.hwTimestamp||0,o.isPrimary=r.isPrimary||!1,o}var r=window.Map&&window.Map.prototype.forEach?Map:o;function o(){this.array=[],this.size=0}o.prototype={set:function(t,e){if(void 0===e)return this.delete(t);this.has(t)||this.size++,this.array[t]=e},has:function(t){return void 0!==this.array[t]},delete:function(t){this.has(t)&&(delete this.array[t],this.size--)},get:function(t){return this.array[t]},clear:function(){this.array.length=0,this.size=0},forEach:function(t,e){return this.array.forEach(function(n,r){t.call(e,n,r,this)},this)}};var i=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","buttons","pointerId","width","height","pressure","tiltX","tiltY","pointerType","hwTimestamp","isPrimary","type","target","currentTarget","which","pageX","pageY","timeStamp"],a=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0,0,0,0,0,0,"",0,!1,"",null,null,0,0,0,0],s={pointerover:1,pointerout:1,pointerenter:1,pointerleave:1},u="undefined"!=typeof SVGElementInstance,c={pointermap:new r,eventMap:Object.create(null),captureInfo:Object.create(null),eventSources:Object.create(null),eventSourceList:[],registerSource:function(t,e){var n=e,r=n.events;r&&(r.forEach(function(t){n[t]&&(this.eventMap[t]=n[t].bind(n))},this),this.eventSources[t]=n,this.eventSourceList.push(n))},register:function(t){for(var e,n=this.eventSourceList.length,r=0;r<n&&(e=this.eventSourceList[r]);r++)e.register.call(e,t)},unregister:function(t){for(var e,n=this.eventSourceList.length,r=0;r<n&&(e=this.eventSourceList[r]);r++)e.unregister.call(e,t)},contains:function(t,e){try{return t.contains(e)}catch(t){return!1}},down:function(t){t.bubbles=!0,this.fireEvent("pointerdown",t)},move:function(t){t.bubbles=!0,this.fireEvent("pointermove",t)},up:function(t){t.bubbles=!0,this.fireEvent("pointerup",t)},enter:function(t){t.bubbles=!1,this.fireEvent("pointerenter",t)},leave:function(t){t.bubbles=!1,this.fireEvent("pointerleave",t)},over:function(t){t.bubbles=!0,this.fireEvent("pointerover",t)},out:function(t){t.bubbles=!0,this.fireEvent("pointerout",t)},cancel:function(t){t.bubbles=!0,this.fireEvent("pointercancel",t)},leaveOut:function(t){this.out(t),this.propagate(t,this.leave,!1)},enterOver:function(t){this.over(t),this.propagate(t,this.enter,!0)},eventHandler:function(t){if(!t._handledByPE){var e=t.type,n=this.eventMap&&this.eventMap[e];n&&n(t),t._handledByPE=!0}},listen:function(t,e){e.forEach(function(e){this.addEvent(t,e)},this)},unlisten:function(t,e){e.forEach(function(e){this.removeEvent(t,e)},this)},addEvent:function(t,e){t.addEventListener(e,this.boundHandler)},removeEvent:function(t,e){t.removeEventListener(e,this.boundHandler)},makeEvent:function(t,e){this.captureInfo[e.pointerId]&&(e.relatedTarget=null);var r=new n(t,e);return e.preventDefault&&(r.preventDefault=e.preventDefault),r._target=r._target||e.target,r},fireEvent:function(t,e){var n=this.makeEvent(t,e);return this.dispatchEvent(n)},cloneEvent:function(t){for(var e,n=Object.create(null),r=0;r<i.length;r++)n[e=i[r]]=t[e]||a[r],!u||"target"!==e&&"relatedTarget"!==e||n[e]instanceof SVGElementInstance&&(n[e]=n[e].correspondingUseElement);return t.preventDefault&&(n.preventDefault=function(){t.preventDefault()}),n},getTarget:function(t){var e=this.captureInfo[t.pointerId];return e?t._target!==e&&t.type in s?void 0:e:t._target},propagate:function(t,e,n){for(var r=t.target,o=[];r!==document&&!r.contains(t.relatedTarget);)if(o.push(r),!(r=r.parentNode))return;n&&o.reverse(),o.forEach(function(n){t.target=n,e.call(this,t)},this)},setCapture:function(t,e,r){this.captureInfo[t]&&this.releaseCapture(t,r),this.captureInfo[t]=e,this.implicitRelease=this.releaseCapture.bind(this,t,r),document.addEventListener("pointerup",this.implicitRelease),document.addEventListener("pointercancel",this.implicitRelease);var o=new n("gotpointercapture");o.pointerId=t,o._target=e,r||this.asyncDispatchEvent(o)},releaseCapture:function(t,e){var r=this.captureInfo[t];if(r){this.captureInfo[t]=void 0,document.removeEventListener("pointerup",this.implicitRelease),document.removeEventListener("pointercancel",this.implicitRelease);var o=new n("lostpointercapture");o.pointerId=t,o._target=r,e||this.asyncDispatchEvent(o)}},dispatchEvent:function(t){var e=this.getTarget(t);if(e)return e.dispatchEvent(t)},asyncDispatchEvent:function(t){requestAnimationFrame(this.dispatchEvent.bind(this,t))}};c.boundHandler=c.eventHandler.bind(c);var l={shadow:function(t){if(t)return t.shadowRoot||t.webkitShadowRoot},canTarget:function(t){return t&&Boolean(t.elementFromPoint)},targetingShadow:function(t){var e=this.shadow(t);if(this.canTarget(e))return e},olderShadow:function(t){var e=t.olderShadowRoot;if(!e){var n=t.querySelector("shadow");n&&(e=n.olderShadowRoot)}return e},allShadows:function(t){for(var e=[],n=this.shadow(t);n;)e.push(n),n=this.olderShadow(n);return e},searchRoot:function(t,e,n){if(t){var r,o,i=t.elementFromPoint(e,n);for(o=this.targetingShadow(i);o;){if(r=o.elementFromPoint(e,n)){var a=this.targetingShadow(r);return this.searchRoot(a,e,n)||r}o=this.olderShadow(o)}return i}},owner:function(t){for(var e=t;e.parentNode;)e=e.parentNode;return e.nodeType!==Node.DOCUMENT_NODE&&e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&(e=document),e},findTarget:function(t){var e=t.clientX,n=t.clientY,r=this.owner(t.target);return r.elementFromPoint(e,n)||(r=document),this.searchRoot(r,e,n)}},h=Array.prototype.forEach.call.bind(Array.prototype.forEach),d=Array.prototype.map.call.bind(Array.prototype.map),p=Array.prototype.slice.call.bind(Array.prototype.slice),v=Array.prototype.filter.call.bind(Array.prototype.filter),f=window.MutationObserver||window.WebKitMutationObserver,m={subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["touch-action"]};function b(t,e,n,r){this.addCallback=t.bind(r),this.removeCallback=e.bind(r),this.changedCallback=n.bind(r),f&&(this.observer=new f(this.mutationWatcher.bind(this)))}function y(t){return"body /shadow-deep/ "+g(t)}function g(t){return'[touch-action="'+t+'"]'}function E(t){return"{ -ms-touch-action: "+t+"; touch-action: "+t+"; }"}b.prototype={watchSubtree:function(t){this.observer&&l.canTarget(t)&&this.observer.observe(t,m)},enableOnSubtree:function(t){this.watchSubtree(t),t===document&&"complete"!==document.readyState?this.installOnLoad():this.installNewSubtree(t)},installNewSubtree:function(t){h(this.findElements(t),this.addElement,this)},findElements:function(t){return t.querySelectorAll?t.querySelectorAll("[touch-action]"):[]},removeElement:function(t){this.removeCallback(t)},addElement:function(t){this.addCallback(t)},elementChanged:function(t,e){this.changedCallback(t,e)},concatLists:function(t,e){return t.concat(p(e))},installOnLoad:function(){document.addEventListener("readystatechange",function(){"complete"===document.readyState&&this.installNewSubtree(document)}.bind(this))},isElement:function(t){return t.nodeType===Node.ELEMENT_NODE},flattenMutationTree:function(t){var e=d(t,this.findElements,this);return e.push(v(t,this.isElement)),e.reduce(this.concatLists,[])},mutationWatcher:function(t){t.forEach(this.mutationHandler,this)},mutationHandler:function(t){if("childList"===t.type){var e=this.flattenMutationTree(t.addedNodes);e.forEach(this.addElement,this);var n=this.flattenMutationTree(t.removedNodes);n.forEach(this.removeElement,this)}else"attributes"===t.type&&this.elementChanged(t.target,t.oldValue)}};var T=["none","auto","pan-x","pan-y",{rule:"pan-x pan-y",selectors:["pan-x pan-y","pan-y pan-x"]}],S="",w=window.PointerEvent||window.MSPointerEvent,P=!window.ShadowDOMPolyfill&&document.head.createShadowRoot,_=c.pointermap,O=[1,4,2,8,16],I=!1;try{I=1===new MouseEvent("test",{buttons:1}).buttons}catch(t){}var C,M={POINTER_ID:1,POINTER_TYPE:"mouse",events:["mousedown","mousemove","mouseup","mouseover","mouseout"],register:function(t){c.listen(t,this.events)},unregister:function(t){c.unlisten(t,this.events)},lastTouches:[],isEventSimulatedFromTouch:function(t){for(var e,n=this.lastTouches,r=t.clientX,o=t.clientY,i=0,a=n.length;i<a&&(e=n[i]);i++){var s=Math.abs(r-e.x),u=Math.abs(o-e.y);if(s<=25&&u<=25)return!0}},prepareEvent:function(t){var e=c.cloneEvent(t),n=e.preventDefault;return e.preventDefault=function(){t.preventDefault(),n()},e.pointerId=this.POINTER_ID,e.isPrimary=!0,e.pointerType=this.POINTER_TYPE,e},prepareButtonsForMove:function(t,e){var n=_.get(this.POINTER_ID);0!==e.which&&n?t.buttons=n.buttons:t.buttons=0,e.buttons=t.buttons},mousedown:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=_.get(this.POINTER_ID),n=this.prepareEvent(t);I||(n.buttons=O[n.button],e&&(n.buttons|=e.buttons),t.buttons=n.buttons),_.set(this.POINTER_ID,t),e&&0!==e.buttons?c.move(n):c.down(n)}},mousemove:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);I||this.prepareButtonsForMove(e,t),e.button=-1,_.set(this.POINTER_ID,t),c.move(e)}},mouseup:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=_.get(this.POINTER_ID),n=this.prepareEvent(t);if(!I){var r=O[n.button];n.buttons=e?e.buttons&~r:0,t.buttons=n.buttons}_.set(this.POINTER_ID,t),n.buttons&=~O[n.button],0===n.buttons?c.up(n):c.move(n)}},mouseover:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);I||this.prepareButtonsForMove(e,t),e.button=-1,_.set(this.POINTER_ID,t),c.enterOver(e)}},mouseout:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);I||this.prepareButtonsForMove(e,t),e.button=-1,c.leaveOut(e)}},cancel:function(t){var e=this.prepareEvent(t);c.cancel(e),this.deactivateMouse()},deactivateMouse:function(){_.delete(this.POINTER_ID)}},R=c.captureInfo,L=l.findTarget.bind(l),x=l.allShadows.bind(l),N=c.pointermap,D={events:["touchstart","touchmove","touchend","touchcancel"],register:function(t){C.enableOnSubtree(t)},unregister:function(){},elementAdded:function(t){var e=t.getAttribute("touch-action"),n=this.touchActionToScrollType(e);n&&(t._scrollType=n,c.listen(t,this.events),x(t).forEach(function(t){t._scrollType=n,c.listen(t,this.events)},this))},elementRemoved:function(t){t._scrollType=void 0,c.unlisten(t,this.events),x(t).forEach(function(t){t._scrollType=void 0,c.unlisten(t,this.events)},this)},elementChanged:function(t,e){var n=t.getAttribute("touch-action"),r=this.touchActionToScrollType(n),o=this.touchActionToScrollType(e);r&&o?(t._scrollType=r,x(t).forEach(function(t){t._scrollType=r},this)):o?this.elementRemoved(t):r&&this.elementAdded(t)},scrollTypes:{EMITTER:"none",XSCROLLER:"pan-x",YSCROLLER:"pan-y",SCROLLER:/^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/},touchActionToScrollType:function(t){var e=t,n=this.scrollTypes;return"none"===e?"none":e===n.XSCROLLER?"X":e===n.YSCROLLER?"Y":n.SCROLLER.exec(e)?"XY":void 0},POINTER_TYPE:"touch",firstTouch:null,isPrimaryTouch:function(t){return this.firstTouch===t.identifier},setPrimaryTouch:function(t){(0===N.size||1===N.size&&N.has(1))&&(this.firstTouch=t.identifier,this.firstXY={X:t.clientX,Y:t.clientY},this.scrolling=!1,this.cancelResetClickCount())},removePrimaryPointer:function(t){t.isPrimary&&(this.firstTouch=null,this.firstXY=null,this.resetClickCount())},clickCount:0,resetId:null,resetClickCount:function(){var t=function(){this.clickCount=0,this.resetId=null}.bind(this);this.resetId=setTimeout(t,200)},cancelResetClickCount:function(){this.resetId&&clearTimeout(this.resetId)},typeToButtons:function(t){var e=0;return"touchstart"!==t&&"touchmove"!==t||(e=1),e},touchToPointer:function(t){var e=this.currentTouchEvent,n=c.cloneEvent(t),r=n.pointerId=t.identifier+2;n.target=R[r]||L(n),n.bubbles=!0,n.cancelable=!0,n.detail=this.clickCount,n.button=0,n.buttons=this.typeToButtons(e.type),n.width=2*(t.radiusX||t.webkitRadiusX||0),n.height=2*(t.radiusY||t.webkitRadiusY||0),n.pressure=t.force||t.webkitForce||.5,n.isPrimary=this.isPrimaryTouch(t),n.pointerType=this.POINTER_TYPE,n.altKey=e.altKey,n.ctrlKey=e.ctrlKey,n.metaKey=e.metaKey,n.shiftKey=e.shiftKey;var o=this;return n.preventDefault=function(){o.scrolling=!1,o.firstXY=null,e.preventDefault()},n},processTouches:function(t,e){var n=t.changedTouches;this.currentTouchEvent=t;for(var r,o=0;o<n.length;o++)r=n[o],e.call(this,this.touchToPointer(r))},shouldScroll:function(t){if(this.firstXY){var e,n=t.currentTarget._scrollType;if("none"===n)e=!1;else if("XY"===n)e=!0;else{var r=t.changedTouches[0],o=n,i="Y"===n?"X":"Y",a=Math.abs(r["client"+o]-this.firstXY[o]),s=Math.abs(r["client"+i]-this.firstXY[i]);e=a>=s}return this.firstXY=null,e}},findTouch:function(t,e){for(var n,r=0,o=t.length;r<o&&(n=t[r]);r++)if(n.identifier===e)return!0},vacuumTouches:function(t){var e=t.touches;if(N.size>=e.length){var n=[];N.forEach(function(t,r){if(1!==r&&!this.findTouch(e,r-2)){var o=t.out;n.push(o)}},this),n.forEach(this.cancelOut,this)}},touchstart:function(t){this.vacuumTouches(t),this.setPrimaryTouch(t.changedTouches[0]),this.dedupSynthMouse(t),this.scrolling||(this.clickCount++,this.processTouches(t,this.overDown))},overDown:function(t){N.set(t.pointerId,{target:t.target,out:t,outTarget:t.target}),c.enterOver(t),c.down(t)},touchmove:function(t){this.scrolling||(this.shouldScroll(t)?(this.scrolling=!0,this.touchcancel(t)):(t.preventDefault(),this.processTouches(t,this.moveOverOut)))},moveOverOut:function(t){var e=t,n=N.get(e.pointerId);if(n){var r=n.out,o=n.outTarget;c.move(e),r&&o!==e.target&&(r.relatedTarget=e.target,e.relatedTarget=o,r.target=o,e.target?(c.leaveOut(r),c.enterOver(e)):(e.target=o,e.relatedTarget=null,this.cancelOut(e))),n.out=e,n.outTarget=e.target}},touchend:function(t){this.dedupSynthMouse(t),this.processTouches(t,this.upOut)},upOut:function(t){this.scrolling||(c.up(t),c.leaveOut(t)),this.cleanUpPointer(t)},touchcancel:function(t){this.processTouches(t,this.cancelOut)},cancelOut:function(t){c.cancel(t),c.leaveOut(t),this.cleanUpPointer(t)},cleanUpPointer:function(t){N.delete(t.pointerId),this.removePrimaryPointer(t)},dedupSynthMouse:function(t){var e=M.lastTouches,n=t.changedTouches[0];if(this.isPrimaryTouch(n)){var r={x:n.clientX,y:n.clientY};e.push(r);var o=function(t,e){var n=t.indexOf(e);n>-1&&t.splice(n,1)}.bind(null,e,r);setTimeout(o,2500)}}};C=new b(D.elementAdded,D.elementRemoved,D.elementChanged,D);var Y,k,q,X=c.pointermap,A=window.MSPointerEvent&&"number"==typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,z={events:["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerOut","MSPointerOver","MSPointerCancel","MSGotPointerCapture","MSLostPointerCapture"],register:function(t){c.listen(t,this.events)},unregister:function(t){c.unlisten(t,this.events)},POINTER_TYPES:["","unavailable","touch","pen","mouse"],prepareEvent:function(t){var e=t;return A&&((e=c.cloneEvent(t)).pointerType=this.POINTER_TYPES[t.pointerType]),e},cleanup:function(t){X.delete(t)},MSPointerDown:function(t){X.set(t.pointerId,t);var e=this.prepareEvent(t);c.down(e)},MSPointerMove:function(t){var e=this.prepareEvent(t);c.move(e)},MSPointerUp:function(t){var e=this.prepareEvent(t);c.up(e),this.cleanup(t.pointerId)},MSPointerOut:function(t){var e=this.prepareEvent(t);c.leaveOut(e)},MSPointerOver:function(t){var e=this.prepareEvent(t);c.enterOver(e)},MSPointerCancel:function(t){var e=this.prepareEvent(t);c.cancel(e),this.cleanup(t.pointerId)},MSLostPointerCapture:function(t){var e=c.makeEvent("lostpointercapture",t);c.dispatchEvent(e)},MSGotPointerCapture:function(t){var e=c.makeEvent("gotpointercapture",t);c.dispatchEvent(e)}};function F(t){if(!c.pointermap.has(t)){var e=new Error("InvalidPointerId");throw e.name="InvalidPointerId",e}}function j(t){for(var e=t.parentNode;e&&e!==t.ownerDocument;)e=e.parentNode;if(!e){var n=new Error("InvalidStateError");throw n.name="InvalidStateError",n}}function K(t){var e=c.pointermap.get(t);return 0!==e.buttons}return window.navigator.msPointerEnabled?(Y=function(t){F(t),j(this),K(t)&&(c.setCapture(t,this,!0),this.msSetPointerCapture(t))},k=function(t){F(t),c.releaseCapture(t,!0),this.msReleasePointerCapture(t)}):(Y=function(t){F(t),j(this),K(t)&&c.setCapture(t,this)},k=function(t){F(t),c.releaseCapture(t)}),q=function(t){return!!c.captureInfo[t]},function(){if(w){T.forEach(function(t){String(t)===t?(S+=g(t)+E(t)+"\n",P&&(S+=y(t)+E(t)+"\n")):(S+=t.selectors.map(g)+E(t.rule)+"\n",P&&(S+=t.selectors.map(y)+E(t.rule)+"\n"))});var t=document.createElement("style");t.textContent=S,document.head.appendChild(t)}}(),function(){if(!window.PointerEvent){if(window.PointerEvent=n,window.navigator.msPointerEnabled){var t=window.navigator.msMaxTouchPoints;Object.defineProperty(window.navigator,"maxTouchPoints",{value:t,enumerable:!0}),c.registerSource("ms",z)}else Object.defineProperty(window.navigator,"maxTouchPoints",{value:0,enumerable:!0}),c.registerSource("mouse",M),void 0!==window.ontouchstart&&c.registerSource("touch",D);c.register(document)}}(),window.Element&&!Element.prototype.setPointerCapture&&Object.defineProperties(Element.prototype,{setPointerCapture:{value:Y},releasePointerCapture:{value:k},hasPointerCapture:{value:q}}),{dispatcher:c,Installer:b,PointerEvent:n,PointerMap:r,targetFinding:l}}()},function(t,e,n){"use strict";n.r(e);n(0),n(2),n(4),n(6),n(8);function r(){setTimeout(()=>{document.querySelectorAll(".event__title").forEach(t=>{const e=2*parseFloat(getComputedStyle(t).lineHeight);t.scrollHeight-e>5&&t.classList.add("event__title_truncated"),t.style.maxHeight=`${e}px`})},100)}const o=100,i=1e3,a=100,s=30,u=100,c=0,l=500;function h(){const t=document.querySelector(".event__pic-img"),e={events:[],prevPos:null,prevDiff:null,prevAngle:null},n={zoom:o,scroll:INITIAL_SCROLL,brightness:u};function r(t){!function(t){for(let n=0;n<e.events.length;n++)if(e.events[n].pointerId==t.pointerId){e.events.splice(n,1);break}}(t),e.events.length<2&&(e.prevDiff=null),e.events.length<1&&(e.prevPos=null),e.events.length<2&&(e.prevAngle=null)}function h(r){for(let t=0;t<e.events.length;t++)if(r.pointerId==e.events[t].pointerId){e.events[t]=r;break}e.events.length&&(2===e.events.length?function(r){const o={x:e.events[0].clientX,y:e.events[0].clientY},u={x:e.events[1].clientX,y:e.events[1].clientY},h=function(t,e){let n=2^Math.abs(e.x-t.x),r=2^Math.abs(e.y-t.y);return Math.sqrt(n+r)}(o,u),d=function(t,e){return 180*Math.atan2(e.x-t.x,e.y-t.y)/Math.PI}(o,u);if(e.prevDiff){n.zoom+=(h-e.prevDiff)*s,n.zoom>i?n.zoom=i:n.zoom<a?(n.zoom=a,document.querySelector(".event__pic-scrollbar").style.display="none"):document.querySelector(".event__pic-scrollbar").style.display="block",r.target.style.backgroundSize=`${n.zoom}%`,document.querySelector(".event__pic-zoom").innerText=`Приближение: ${Math.round(n.zoom)}%`;const o=t.clientWidth*n.zoom/100-r.target.clientWidth;-parseFloat(r.target.style.backgroundPositionX)>o&&(r.target.style.backgroundPositionX=`${-o}px`)}e.prevAngle&&(n.brightness-=d-e.prevAngle,n.brightness>l?n.brightness=l:n.brightness<c&&(n.brightness=c),r.target.style.filter=`brightness(${n.brightness}%)`,document.querySelector(".event__pic-brightness").innerText=`Яркость: ${Math.round(n.brightness)}%`);e.prevDiff=h,e.prevAngle=d}(r):1===e.events.length&&function(r){if(e.prevPos){const o=t.clientWidth*n.zoom/100-r.target.clientWidth;n.scroll+=r.x-e.prevPos,n.scroll>0?n.scroll=0:-n.scroll>o&&(n.scroll=-o),r.target.style.backgroundPositionX=`${n.scroll}px`,document.querySelector(".event__pic-scrollbar").style.left=`${100*-n.scroll/o}%`}e.prevPos=r.x}(r))}document.querySelector(".event__pic-reset-zoom-btn").onclick=(e=>{n.zoom=o,t.style.backgroundPositionX=o}),t.addEventListener("pointerdown",n=>{t.setPointerCapture(n.pointerId),e.events.push(n),t.addEventListener("pointermove",h)}),t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("pointerout",r),t.addEventListener("pointerleave",r)}window.onload=async function(){!function(){return"content"in document.createElement("template")}?console.error("тег <template> не поддерживается браузером. Обновитесь на Yandex Browser"):(await async function(){const t=await fetch("data/events.json").then(t=>t.json()).then(t=>t).catch(t=>console.error(t));if(!t)return null;const e=document.querySelector("#events"),n=document.querySelector("#events-template"),r=n.content.querySelector(".event");t.events.forEach(t=>{const o=document.importNode(r,!0);o.classList.add(`event_size_${t.size}`),"critical"===t.type&&o.classList.add("event_critical");const i=o.querySelector(".event__icon");if(i.setAttribute("src",`img/${t.icon}${"critical"===t.type?"-white":""}.svg`),i.setAttribute("alt",t.source),o.querySelector(".event__title").textContent=t.title,o.querySelector(".event__source").textContent=t.source,o.querySelector(".event__time").textContent=t.time,t.description||t.data){var a=document.createElement("div");a.classList.add("event__details"),o.appendChild(a)}if(t.description){const e=n.content.querySelector(".event__description"),r=document.importNode(e,!0);r.textContent=t.description,a.appendChild(r)}if(t.data&&"graph"===t.data.type){const t=n.content.querySelector(".event__graph"),e=document.importNode(t,!0);a.appendChild(e)}if(t.data&&t.data.temperature){const e=n.content.querySelector(".event__temp-and-hum"),r=document.importNode(e,!0);r.querySelector("#temp").textContent=t.data.temperature,r.querySelector("#hum").textContent=t.data.humidity,a.appendChild(r)}if(t.data&&t.data.track){const e=n.content.querySelector(".event__track"),r=document.importNode(e,!0);r.querySelector(".event__track__cover").setAttribute("src",t.data.albumcover),r.querySelector(".event__track__name").textContent=`${t.data.artist} - ${t.data.track.name}`,r.querySelector(".event__track__time").textContent=t.data.track.length,r.querySelector(".event__track__vol").textContent=t.data.volume,a.appendChild(r)}if(t.data&&t.data.buttons){const e=n.content.querySelector(".event__btn-group"),r=document.importNode(e,!0);r.querySelector(".event__btn-confirm").textContent=t.data.buttons[0],r.querySelector(".event__btn-cancel").textContent=t.data.buttons[1],a.appendChild(r)}if(t.data&&t.data.image){const t=n.content.querySelector(".event__pic"),e=document.importNode(t,!0);a.appendChild(e)}e.appendChild(o)})}(),r()),"ontouchstart"in window&&document.body.classList.add("touch"),window.onresize=function(){r()},document.querySelector("#toggle-menu").addEventListener("click",()=>{document.querySelector("#nav-menu").classList.toggle("menu_visible")}),h()}}]);
//# sourceMappingURL=main.js.map