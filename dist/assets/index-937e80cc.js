import{g as M,c as v,s as R,r as l,u as S,d as _,e as a,a as o,f as y,h as I,w,_ as b,T as L,L as T,j as d}from"./index-5dbbc5c6.js";import{C as k,G as N,d as j}from"./images-39987f48.js";import{P as W}from"./Paper-71f53842.js";function z(t){return M("MuiCard",t)}v("MuiCard",["root"]);const D=["className","raised"],B=t=>{const{classes:e}=t;return I({root:["root"]},z,e)},G=R(W,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({overflow:"hidden"})),V=l.forwardRef(function(e,n){const s=S({props:e,name:"MuiCard"}),{className:i,raised:m=!1}=s,c=_(s,D),r=a({},s,{raised:m}),p=B(r);return o(G,a({className:y(p.root,i),elevation:m?8:void 0,ref:n,ownerState:r},c))}),C=V;function F(t){return M("MuiCardActions",t)}v("MuiCardActions",["root","spacing"]);const H=["disableSpacing","className"],q=t=>{const{classes:e,disableSpacing:n}=t;return I({root:["root",!n&&"spacing"]},F,e)},J=R("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableSpacing&&e.spacing]}})(({ownerState:t})=>a({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),K=l.forwardRef(function(e,n){const s=S({props:e,name:"MuiCardActions"}),{disableSpacing:i=!1,className:m}=s,c=_(s,H),r=a({},s,{disableSpacing:i}),p=q(r);return o(J,a({className:y(p.root,m),ownerState:r,ref:n},c))}),g=K;function Q(t){return M("MuiCardContent",t)}v("MuiCardContent",["root"]);const X=["className","component"],Y=t=>{const{classes:e}=t;return I({root:["root"]},Q,e)},Z=R("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),ee=l.forwardRef(function(e,n){const s=S({props:e,name:"MuiCardContent"}),{className:i,component:m="div"}=s,c=_(s,X),r=a({},s,{component:m}),p=Y(r);return o(Z,a({as:m,className:y(p.root,i),ownerState:r,ref:n},c))}),f=ee;function oe(t){return M("MuiCardMedia",t)}v("MuiCardMedia",["root","media","img"]);const te=["children","className","component","image","src","style"],se=t=>{const{classes:e,isMediaComponent:n,isImageComponent:s}=t;return I({root:["root",n&&"media",s&&"img"]},oe,e)},ne=R("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{isMediaComponent:s,isImageComponent:i}=n;return[e.root,s&&e.media,i&&e.img]}})(({ownerState:t})=>a({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})),re=["video","audio","picture","iframe","img"],ae=["picture","img"],ie=l.forwardRef(function(e,n){const s=S({props:e,name:"MuiCardMedia"}),{children:i,className:m,component:c="div",image:r,src:p,style:A}=s,E=_(s,te),h=re.indexOf(c)!==-1,U=!h&&r?a({backgroundImage:`url("${r}")`},A):A,$=a({},s,{component:c,isMediaComponent:h,isImageComponent:ae.indexOf(c)!==-1}),O=se($);return o(ne,a({className:y(O.root,m),as:c,role:!h&&r?"img":void 0,ref:n,style:U,ownerState:$,src:h?r||p:void 0},E,{children:i}))}),x=ie;const ce=w(l.lazy(()=>b(()=>import("./index-f7fd5355.js"),["assets/index-f7fd5355.js","assets/index-5dbbc5c6.js"]))),de=w(l.lazy(()=>b(()=>import("./index-31fac089.js").then(t=>t.i),["assets/index-31fac089.js","assets/index-5dbbc5c6.js","assets/jsx-runtime_commonjs-proxy-2303a01c.js","assets/createSvgIcon-0a41df9d.js","assets/Instagram-706765e8.js","assets/images-39987f48.js","assets/Button-3c620322.js","assets/index-4a099258.css"]))),le=w(l.lazy(()=>b(()=>import("./index-16b702f8.js"),["assets/index-16b702f8.js","assets/index-5dbbc5c6.js","assets/Instagram-706765e8.js","assets/jsx-runtime_commonjs-proxy-2303a01c.js","assets/createSvgIcon-0a41df9d.js","assets/images-39987f48.js","assets/index-1e46aee6.css"]))),{rooms:u,otherPictures:P}=j,me=()=>{const{theme:t}=l.useContext(L),{currentLanguage:e}=l.useContext(T);return d("div",{className:t,children:[d("div",{children:[o(ce,{src:P.spruceBranch.src,alt:P.spruceBranch.alt,id:"mainImage"}),o("h2",{className:"centered",children:e.links.rooms})]}),d(k,{children:[o("div",{className:"top-left",children:o(de,{})}),d(N,{container:!0,spacing:2,children:[o(N,{item:!0,xs:6,children:d("div",{className:"cards",children:[o("span",{children:d(C,{sx:{maxWidth:450},children:[o(x,{height:"300",component:"img",alt:u.standardRoom.alt,image:u.standardRoom.src}),o(f,{children:o("h3",{children:e.roomsInformation.standardRoom.category})}),o(g,{disableSpacing:!0,children:o("h3",{children:e.roomsInformation.standardRoom.price})})]})}),o("span",{children:d(C,{sx:{maxWidth:450},children:[o(x,{height:"300",component:"img",alt:u.deluxe.alt,image:u.deluxe.src}),o(f,{children:o("h3",{children:e.roomsInformation.deluxeSuperior.category})}),o(g,{disableSpacing:!0,children:o("h3",{children:e.roomsInformation.deluxeSuperior.price})})]})})]})}),o(N,{item:!0,xs:6,children:d("div",{className:"cards",children:[o("span",{children:d(C,{sx:{maxWidth:450},children:[o(x,{height:"300",component:"img",alt:u.deluxeSuperior.alt,image:u.deluxeSuperior.src}),o(f,{children:o("h3",{children:e.roomsInformation.deluxe.category})}),o(g,{disableSpacing:!0,children:o("h3",{children:e.roomsInformation.deluxe.price})})]})}),o("span",{children:d(C,{sx:{maxWidth:450},children:[o(x,{height:"300",component:"img",alt:u.duplex.alt,image:u.duplex.src}),o(f,{children:o("h3",{children:e.roomsInformation.duplex.category})}),o(g,{disableSpacing:!0,children:o("h3",{children:e.roomsInformation.duplex.price})})]})})]})})]})]}),o(le,{})]})},Ce=l.memo(me);export{Ce as default};