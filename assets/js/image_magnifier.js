function magnify(e,t){try{var n,o,s,r,l;n=document.getElementById(e),(o=document.createElement("DIV")).setAttribute("class","img-magnifier-glass"),n.parentElement.insertBefore(o,n),o.style.backgroundImage="url('"+n.src+"')",o.style.backgroundRepeat="no-repeat",o.style.backgroundSize=n.width*t+"px "+n.height*t+"px",l=3,s=o.offsetWidth/2,r=o.offsetHeight/2;let u=1;function a(e){var a,d,u;e.preventDefault(),d=(a=i(e)).x,u=a.y,d>n.width-s/t&&(d=n.width-s/t),d<s/t&&(d=s/t),u>n.height-r/t&&(u=n.height-r/t),u<r/t&&(u=r/t),o.style.left=d-s+"px",o.style.top=u-r+"px",o.style.backgroundPosition="-"+(d*t-s+l)+"px -"+(u*t-r+l)+"px"}function i(e){var t,o=0,s=0;return e=e||window.Event,t=n.getBoundingClientRect(),o=e.pageX-t.left,s=e.pageY-t.top,s-=window.scrollX,{x:o,y:s-=window.scrollY}}o.addEventListener("mousemove",a),n.addEventListener("mousemove",a),o.addEventListener("touchmove",a),n.addEventListener("touchmove",a),n.addEventListener("mouseover",function(){o.classList.add("show");let e=this.getElementsByTagName("a")[0].getAttribute("href");o.style.backgroundImage="url('"+e+"')"}),n.addEventListener("mouseout",function(){o.style.transform=null,u=1,o.classList.remove("show")}),n.addEventListener("wheel",e=>{e.deltaY>0?u--:u++,u<1&&(u=1),u>7&&(u=7),console.log(`zoom level: ${u}`),o.style.transform=`scale(${u})`})}catch(d){console.error(d)}}"undefined"!=typeof module&&(module.exports=magnify);