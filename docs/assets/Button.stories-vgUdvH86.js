import{d as j,o as l,c as s,n as g,a as f,r as q,t as A,b as _}from"./vue.esm-bundler-b56p70N7.js";const J=["disabled"],K=_("i",{class:"fab fa-github"},null,-1),Q=[K],X={key:0},Z=_("i",{class:"fab fa-github"},null,-1),ee=[Z],t=j({__name:"Button",props:{label:{type:String},disabled:{type:Boolean,default:!1},expanded:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},focused:{type:Boolean,default:!1},active:{type:Boolean,default:!1},hovered:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},responsive:{type:Boolean,default:!1},size:{type:String,default:"is-normal"},color:{type:String,default:"primary"},iconRight:String,iconLeft:String,type:{type:String,default:"button",validator:e=>["button","submit","reset"].includes(e)},tag:{type:String,default:"button",validator:e=>["a","button","input","router-link","nuxt-link","n-link","RouterLink","NuxtLink","NLink"].includes(e)}},setup(e){const a=e;return($,ae)=>(l(),s("button",{class:g(["button",[a.size,a.color,{"is-responsive":a.responsive,"is-fullwidth":a.expanded,"is-rounded":e.rounded,"is-loading":e.loading,"is-outlined":e.outlined,"is-inverted":e.inverted,"is-focused":e.focused,"is-active":e.active,"is-hovered":e.hovered,"is-selected":e.selected}]]),disabled:a.disabled},[e.iconLeft?(l(),s("span",{key:0,class:g(["icon",[a.size]])},Q,2)):f("",!0),q($.$slots,"default",{},()=>[a.label?(l(),s("span",X,A(a.label),1)):f("",!0)]),e.iconRight?(l(),s("span",{key:1,class:g(["icon",[a.size]])},ee,2)):f("",!0)],10,J))}});t.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",type:{name:"String | undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"expanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"outlined",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inverted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"focused",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hovered",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"responsive",description:"If you want different button sizes for each breakpoint, you can use Bulma's responsive buttons",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:`The button comes in 4 different sizes: small, normal, medium, large.
While the default size is the normal one, the is-normal modifier exists in case you need to reset the button to its normal size.`,tags:{version:[{description:"1.0.5",title:"version"}]},values:["is-small","is-normal","is-medium","is-large"],type:{name:"string"},defaultValue:{func:!1,value:"'is-normal'"}},{name:"color",values:["primary","secondary"],type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"iconRight",type:{name:"string"}},{name:"iconLeft",type:{name:"string"}},{name:"type",values:["button","submit","reset"],type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"tag",values:["a","button","input","router-link","nuxt-link","n-link","RouterLink","NuxtLink","NLink"],type:{name:"string"},defaultValue:{func:!1,value:"'button'"}}],slots:[{name:"default"}],sourceFiles:["C:/Users/Yuri/Documents/GitHub/bear-ui/src/components/button/Button.vue"]};const te={title:"UI components/Elements/Button",component:t,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["button","submit","reset"]},tag:{control:{type:"select"},options:["a","button","input","router-link","nuxt-link","n-link","RouterLink","NuxtLink","NLink"]},disabled:{control:{type:"boolean"}},size:{control:{type:"radio"},options:["is-small","is-normal","is-medium","is-large"]},color:{control:{type:"select"},options:["primary","secondary"]},onClick:{action:"clicked"}},args:{label:"Bear Button"}},n=e=>({components:{Button:t},setup(){return{args:e}},template:`
    <Button v-bind="args" />
  `}),r={parameters:{controls:{expanded:!0,exclude:["size","label"]}},render:e=>({setup:()=>({args:e}),components:{Button:t},template:`
      <div style="display: flex; flex-direction: row; gap: 12px;">
        <Button v-bind="args" size="is-large" label="Large" />
        <Button v-bind="args" size="is-medium" label="Medium" />
        <Button v-bind="args" size="is-normal" label="Normal (Default)" />
        <Button v-bind="args" size="is-small" label="Small" />
      </div>
    `})},o={parameters:{controls:{expanded:!0,exclude:["color","label"]}},render:e=>({setup:()=>({args:e}),components:{Button:t},template:`
      <div style="display: flex; flex-direction: column; gap: 22px;">
        <div style="display: flex; flex-direction: row; gap: 12px;">
          <Button v-bind="args" color="is-white" label="White" />
          <Button v-bind="args" color="is-light" label="Light" />
          <Button v-bind="args" color="is-dark" label="Dark" />
          <Button v-bind="args" color="is-black" label="Black" />
          <Button v-bind="args" color="is-text" label="Text" />
          <Button v-bind="args" color="is-ghost" label="Ghost" />
        </div>
        <div style="display: flex; flex-direction: row; gap: 12px;">
          <Button v-bind="args" color="is-primary" label="Primary" />
          <Button v-bind="args" color="is-primary is-light" label="Primary light" />
          <Button v-bind="args" color="is-link" label="Link" />
          <Button v-bind="args" color="is-link is-light" label="Link light" />
        </div>
        <div style="display: flex; flex-direction: row; gap: 12px;">
          <Button v-bind="args" color="is-info" label="Info" />
          <Button v-bind="args" color="is-info is-light" label="Info light" />
          <Button v-bind="args" color="is-success" label="Success" />
          <Button v-bind="args" color="is-success is-light" label="Success light" />
          <Button v-bind="args" color="is-warning" label="Warning" />
          <Button v-bind="args" color="is-warning is-light" label="Warning light" />
          <Button v-bind="args" color="is-danger" label="Danger" />
          <Button v-bind="args" color="is-danger is-light" label="Danger light" />
        </div>
      </div>
    `})},i={args:{label:"Outlined",outlined:!0},parameters:{controls:{expanded:!0}},render:n.bind({})},d={args:{label:"Loading",loading:!0},parameters:{controls:{expanded:!0}},render:n.bind({})},u={args:{label:"Rounded",rounded:!0},parameters:{controls:{expanded:!0}},render:n.bind({})},c={args:{label:"Expanded",expanded:!0},parameters:{controls:{expanded:!0}},render:n.bind({})},p={args:{label:"Inverted",inverted:!0},parameters:{controls:{expanded:!0}},render:n.bind({})},m={args:{label:"Responsive",responsive:!0},parameters:{controls:{expanded:!0}},render:n.bind({})},b={args:{label:"Icon","icon-left":"github"},parameters:{controls:{expanded:!0}},render:n.bind({})};var v,y,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      expanded: true,
      exclude: ['size', 'label']
    }
  },
  render: args => ({
    setup: () => ({
      args
    }),
    components: {
      Button
    },
    template: \`
      <div style="display: flex; flex-direction: row; gap: 12px;">
        <Button v-bind="args" size="is-large" label="Large" />
        <Button v-bind="args" size="is-medium" label="Medium" />
        <Button v-bind="args" size="is-normal" label="Normal (Default)" />
        <Button v-bind="args" size="is-small" label="Small" />
      </div>
    \`
  })
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var B,h,k;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      expanded: true,
      exclude: ['color', 'label']
    }
  },
  render: args => ({
    setup: () => ({
      args
    }),
    components: {
      Button
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 22px;">
        <div style="display: flex; flex-direction: row; gap: 12px;">
          <Button v-bind="args" color="is-white" label="White" />
          <Button v-bind="args" color="is-light" label="Light" />
          <Button v-bind="args" color="is-dark" label="Dark" />
          <Button v-bind="args" color="is-black" label="Black" />
          <Button v-bind="args" color="is-text" label="Text" />
          <Button v-bind="args" color="is-ghost" label="Ghost" />
        </div>
        <div style="display: flex; flex-direction: row; gap: 12px;">
          <Button v-bind="args" color="is-primary" label="Primary" />
          <Button v-bind="args" color="is-primary is-light" label="Primary light" />
          <Button v-bind="args" color="is-link" label="Link" />
          <Button v-bind="args" color="is-link is-light" label="Link light" />
        </div>
        <div style="display: flex; flex-direction: row; gap: 12px;">
          <Button v-bind="args" color="is-info" label="Info" />
          <Button v-bind="args" color="is-info is-light" label="Info light" />
          <Button v-bind="args" color="is-success" label="Success" />
          <Button v-bind="args" color="is-success is-light" label="Success light" />
          <Button v-bind="args" color="is-warning" label="Warning" />
          <Button v-bind="args" color="is-warning is-light" label="Warning light" />
          <Button v-bind="args" color="is-danger" label="Danger" />
          <Button v-bind="args" color="is-danger is-light" label="Danger light" />
        </div>
      </div>
    \`
  })
}`,...(k=(h=o.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var S,L,z;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Outlined',
    outlined: true
  },
  parameters: {
    controls: {
      expanded: true
    }
  },
  render: Template.bind({})
}`,...(z=(L=i.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var V,w,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Loading',
    loading: true
  },
  parameters: {
    controls: {
      expanded: true
    }
  },
  render: Template.bind({})
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var R,N,T;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Rounded',
    rounded: true
  },
  parameters: {
    controls: {
      expanded: true
    }
  },
  render: Template.bind({})
}`,...(T=(N=u.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var D,C,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Expanded',
    expanded: true
  },
  parameters: {
    controls: {
      expanded: true
    }
  },
  render: Template.bind({})
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var W,O,P;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Inverted',
    inverted: true
  },
  parameters: {
    controls: {
      expanded: true
    }
  },
  render: Template.bind({})
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var G,M,U;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Responsive',
    responsive: true
  },
  parameters: {
    controls: {
      expanded: true
    }
  },
  render: Template.bind({})
}`,...(U=(M=m.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var F,H,Y;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Icon',
    'icon-left': 'github'
  },
  parameters: {
    controls: {
      expanded: true
    }
  },
  render: Template.bind({})
}`,...(Y=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};const le=["Size","Colors","Outlined","Loading","Rounded","Expanded","Inverted","Responsive","Icon"];export{o as Colors,c as Expanded,b as Icon,p as Inverted,d as Loading,i as Outlined,m as Responsive,u as Rounded,r as Size,le as __namedExportsOrder,te as default};
//# sourceMappingURL=Button.stories-vgUdvH86.js.map
