_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return F}));var o=n("q1tI"),a=n.n(o),i=n("/MKj"),r=n("1zst"),l=n("ODXe"),c=n("2/Rp"),s=n("Vl3Y"),d=n("5rEg"),u=n("VTBJ"),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},f=n("6VBw"),m=function(e,t){return o.createElement(f.a,Object(u.a)(Object(u.a)({},e),{},{ref:t,icon:p}))};m.displayName="DownloadOutlined";var h=o.forwardRef(m),b=n("vOnD"),g=n("p+NB"),w=n("3zrx"),v=n("OcYQ"),y=a.a.createElement,x=Object(b.b)(c.a).withConfig({displayName:"PostForm__SubmitBtn",componentId:"sc-1s3n0yo-0"})(["background-color:#FFF3D4;color:#857171;border:none;border-radius:20px;width:20%;height:40px;font-weight:500;position:absolute;right:15px;bottom:15px;&:hover{background-color:#857171;border:1px solid #857171;color:white;}"]),O=b.b.div.withConfig({displayName:"PostForm__FileUploadWrapper",componentId:"sc-1s3n0yo-1"})(['display:flex;margin-bottom:20px;#file[type="file"]{display:none;}.label-holder{display:flex;margin:1em auto;width:50%;height:20vh;}.label{display:grid;place-items:center;font-size:1rem;cursor:pointer;border-radius:5px;width:100%;padding:5vh 0;}.label > span{display:flex;flex-direction:column;font-weight:500;font-size:1.1rem;color:gray;}.result{width:100%;margin-top:1rem;display:flex;flex-wrap:wrap;justify-content:left;}']),_=b.b.img.withConfig({displayName:"PostForm__SelectedImg",componentId:"sc-1s3n0yo-2"})(["display:flex;align-items:center;justify-content:center;width:100%;"]),j=Object(b.b)(s.a).withConfig({displayName:"PostForm__FormWrapper",componentId:"sc-1s3n0yo-3"})(["margin:0 auto;background-color:white;height:45vh;position:relative;border-radius:20px;box-shadow:grey 1px 1px 8px -7px;"]),E=function(){var e=Object(i.c)((function(e){return e.post})),t=e.imagePaths,n=e.addPostDone,a=Object(i.b)(),r=Object(w.a)(""),s=Object(l.a)(r,3),u=s[0],p=s[1],f=s[2];Object(o.useEffect)((function(){n&&f("")}),[n]);var m=Object(o.useCallback)((function(){if(!u||!u.trim())return alert("\uac8c\uc2dc\uae00\uc744 \uc791\uc131\ud558\uc138\uc694.");var e=new FormData;return t.forEach((function(t){e.append("image",t)})),e.append("content",u),a({type:g.e,data:e})}),[u,t]),b=Object(o.useRef)(),E=Object(o.useCallback)((function(){b.current.click()}),[b.current]),N=Object(o.useCallback)((function(e){console.log("images",e.target.files);var t=new FormData;[].forEach.call(e.target.files,(function(e){t.append("image",e)})),a({type:g.G,data:t})}),[]),k=Object(o.useCallback)((function(e){return function(){a({type:g.v,data:e})}}),[]);return y(j,{encType:"multipart/form-data",onFinish:m},y(O,null,y("input",{type:"file",name:"image",multiple:!0,hidden:!0,ref:b,onChange:N}),y("div",{className:"label-holder",onClick:E},y("label",{htmlFor:"file",className:"label"},y("span",null,y(h,{style:{fontSize:"30px",marginBottom:"10px"}}),"Upload Images"))),y("div",null,t.map((function(e,t){return y("div",{key:e,style:{position:"relative"}},y(_,{src:"".concat(v.a,"/").concat(e),alt:e,style:{width:"20vw",heigth:"20vh"}}),y(c.a,{onClick:k(t),style:{position:"absolute",zIndex:1,top:0,right:0}},"X"))})))),y(d.a.TextArea,{value:u,onChange:p,maxLength:300,placeholder:"\ubc18\ub824\ub3d9\ubb3c\uc5d0 \ub300\ud55c \uc790\uc720\ub85c\uc6b4 \uae00\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694",style:{border:"none"}}),y(x,{htmlType:"submit"},"\uc5c5\ub85c\ub4dc"))},N=n("kduo"),k=a.a.createElement,F=!0;t.default=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.user})).me,n=Object(i.c)((function(e){return e.post})),a=n.mainPosts,l=n.hasMorePosts,c=n.loadPostsLoading;return Object(o.useEffect)((function(){function t(){if(window.pageYOffset+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&l&&!c){var t,n=null===(t=a[a.length-1])||void 0===t?void 0:t.id;e({type:g.n,lastId:n})}}return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[l,c,a]),k(r.a,null,t&&k(E,null),a.map((function(e){return k(N.a,{key:e.id,post:e})})))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,7,1,3,4,5,6,8]]]);