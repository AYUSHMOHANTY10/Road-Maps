import{h as l,p as S}from"./hooks.module.ee390651.js";import{h as L,a as T}from"./http.9fcca5a9.js";import{a as G,T as O}from"./jwt.5024b243.js";import{o as e}from"./jsxRuntime.module.760e3403.js";import"./preact.module.e54f245b.js";function U(){const[i,c]=l(""),[k,I]=l(""),[d,u]=l(""),[m,f]=l(""),[p,g]=l(""),[h,b]=l(""),[x,a]=l(!0),[w,s]=l(""),[y,N]=l(""),E=async t=>{t.preventDefault(),a(!0),s(""),N("");const{response:r,error:n}=await L("https://api.roadmap.sh/v1-update-profile",{name:i,github:d||void 0,linkedin:p||void 0,twitter:m||void 0,website:h||void 0});if(n||!r){a(!1),s(n?.message||"Something went wrong");return}await v(),N("Profile updated successfully")},v=async()=>{a(!0);const{error:t,response:r}=await T("https://api.roadmap.sh/v1-me");if(t||!r){if(t?.status===401){G.remove(O),window.location.reload();return}a(!1),s(t?.message||"Something went wrong");return}const{name:n,email:P,links:o}=r;c(n),I(P),u(o?.github||""),g(o?.linkedin||""),f(o?.twitter||""),b(o?.website||""),a(!1)};return S(()=>{v().finally(()=>{})},[]),e("form",{onSubmit:E,children:[e("h2",{className:"text-3xl font-bold sm:text-4xl",children:"Profile"}),e("p",{className:"mt-2",children:"Update your profile details below."}),e("div",{className:"mt-8 space-y-4",children:[e("div",{className:"flex w-full flex-col",children:[e("label",{for:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Name"}),e("input",{type:"text",name:"name",id:"name",className:"mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,placeholder:"John Doe",value:i,onInput:t=>c(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"email",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Email"}),e("input",{type:"email",name:"email",id:"email",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,disabled:!0,placeholder:"john@example.com",value:k})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"github",className:"text-sm leading-none text-slate-500",children:"Github"}),e("input",{type:"text",name:"github",id:"github",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/username",value:d,onInput:t=>u(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"twitter",className:"text-sm leading-none text-slate-500",children:"Twitter"}),e("input",{type:"text",name:"twitter",id:"twitter",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://twitter.com/username",value:m,onInput:t=>f(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"linkedin",className:"text-sm leading-none text-slate-500",children:"LinkedIn"}),e("input",{type:"text",name:"linkedin",id:"linkedin",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://www.linkedin.com/in/username/",value:p,onInput:t=>g(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"website",className:"text-sm leading-none text-slate-500",children:"Website"}),e("input",{type:"text",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://example.com",value:h,onInput:t=>b(t.target.value)})]}),w&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:w}),y&&e("p",{className:"mt-2 rounded-lg bg-green-100 p-2 text-green-700",children:y}),e("button",{type:"submit",disabled:x,className:"inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",children:x?"Please wait...":"Continue"})]})]})}export{U as UpdateProfileForm};