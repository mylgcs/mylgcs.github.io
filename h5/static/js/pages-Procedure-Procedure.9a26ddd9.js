(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Procedure-Procedure"],{"1ccb":function(t,i,a){"use strict";a.r(i);var n=a("deee"),e=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);i["default"]=e.a},"3cb1":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".btn[data-v-21385fba]{margin:auto;width:90%;left:0;right:0;bottom:%?60?%;background:#ffac60!important}.uni-list-cell[data-v-21385fba]{position:relative}.uni-list-cell-db uni-button[data-v-21385fba]{position:absolute;right:%?20?%;top:%?10?%;background:#ffac60;color:#fff;z-index:99}.content[data-v-21385fba]{overflow:hidden}.content uni-input[data-v-21385fba]{padding-left:0!important}.uni-input[data-v-21385fba]{padding:0!important;height:%?66?%;line-height:%?66?%}.uni-label[data-v-21385fba]{width:%?140?%}.warp[data-v-21385fba]{background:#fff;margin-top:%?40?%}.t-table .t-tr[data-v-21385fba]:nth-child(2n){background:#fff}.t-table .t-tr[data-v-21385fba]:nth-child(2n){background:#fff}",""])},5068:function(t,i,a){"use strict";var n=a("6bfd"),e=a.n(n);e.a},"6bfd":function(t,i,a){var n=a("3cb1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("18f11d09",n,!0,{sourceMap:!1,shadowMode:!1})},cf57:function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell",staticStyle:{height:"80upx"}},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[t._v("编号:")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"number",placeholder:"无法扫描可手动输入并点击确认"},on:{focus:function(i){i=t.$handleEvent(i),t.focus(i)}},model:{value:t.userid,callback:function(i){t.userid=i},expression:"userid"}}),a("v-uni-button",{attrs:{size:"mini"},on:{click:function(i){i=t.$handleEvent(i),t.getData(i)}}},[t._v("确认")])],1)],1),a("v-uni-view",{staticClass:"uni-list-cell",staticStyle:{height:"80upx"}},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[t._v("床/缸号:")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:"true"},model:{value:t.chuanghao,callback:function(i){t.chuanghao=i},expression:"chuanghao"}})],1),a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[t._v("货号:")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:"true"},model:{value:t.huohao,callback:function(i){t.huohao=i},expression:"huohao"}})],1)],1),a("v-uni-view",{staticClass:"uni-list-cell",staticStyle:{height:"80upx"}},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[t._v("颜色:")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:"true"},model:{value:t.color,callback:function(i){t.color=i},expression:"color"}})],1),a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[t._v("尺码:")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:"true"},model:{value:t.chima,callback:function(i){t.chima=i},expression:"chima"}})],1)],1)],1),a("v-uni-view",{staticClass:"warp",staticStyle:{"margin-bottom":"70px"}},[a("t-table",[a("t-tr",[a("t-th",[t._v("工序")]),a("t-th",[t._v("员工")]),a("t-th",[t._v("时间")])],1),t._l(t.list,function(i,n){return a("t-tr",{key:i.index},[a("t-td",[t._v(t._s(i.name))]),a("t-td",[t._v(t._s(i.uname))]),null!=i.inputtime?a("t-td",[t._v(t._s(i.inputtime))]):a("t-td",[t._v(t._s(""))])],1)})],2)],1),a("v-uni-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.onpeSweepCode(i)}}},[t._v("扫码")])],1)},e=[];a.d(i,"a",function(){return n}),a.d(i,"b",function(){return e})},deee:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(a("998c")),e=o(a("f05a")),s=o(a("e5af")),u=o(a("d613"));function o(t){return t&&t.__esModule?t:{default:t}}var l={components:{tTable:n.default,tTh:e.default,tTr:s.default,tTd:u.default},data:function(){return{msg:"",uid:"",curr_worktype_name:"",curr_worktype_bh:"",chuanghao:"",huohao:"",worktype:"",sl:"",price:"",je:"",info:"",list:[],userid:"",color:"",chima:"",ganghao:"",dk:""}},onBackPress:function(t){return"navigateBack"===t.from&&(uni.switchTab({url:"/pages/index/index"}),!0)},onLoad:function(){var t=this;this.dk=this.websiteUrl,uni.getStorage({key:"fwqsj",success:function(i){t.dk=i.data}}),uni.getStorage({key:"loginData",success:function(i){t.uid=i.data.uid,t.curr_worktype_bh=i.data.curr_worktype_bh}})},methods:{focus:function(){this.userid=""},onpeSweepCode:function(){var t=this;uni.scanCode({onlyFromCamera:!0,scanType:["qrCode"],success:function(i){t.userid=i.result,uni.request({url:"https://".concat(t.dk,"/getWorktypeProgress.aspx"),method:"GET",data:{userid:t.userid},complete:function(i){if(200==i.statusCode){if(t.list=i.data,t.huohao="",t.color="",t.chima="",t.list.length>0){var a=i.data;t.huohao=a[0].huohao,t.color=a[0].color,t.chima=a[0].chima,t.chuanghao=a[0].chuanghao,uni.showToast({position:"top",title:"扫描成功",icon:"none",duration:5e3})}}else t.list=[],t.huohao="",t.color="",t.chima="",t.chuanghao="",uni.showToast({position:"top",title:"网络异常，请重试",icon:"none",duration:3e3})}})}})},getData:function(){var t=this;uni.request({url:"https://".concat(this.dk,"/getWorktypeProgress.aspx"),method:"GET",data:{userid:this.userid},complete:function(i){if(200==i.statusCode){if(t.list=i.data,t.huohao="",t.color="",t.chima="",t.list.length>0){var a=i.data;t.huohao=a[0].huohao,t.color=a[0].color,t.chima=a[0].chima,t.chuanghao=a[0].chuanghao,uni.showToast({position:"top",title:"扫描成功",icon:"none",duration:5e3})}}else t.list=[],t.huohao="",t.color="",t.chima="",t.chuanghao="",uni.showToast({position:"top",title:"请求数据失败，请输入正确的条码",icon:"none",duration:3e3})}})}}};i.default=l},faf7:function(t,i,a){"use strict";a.r(i);var n=a("cf57"),e=a("1ccb");for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);a("5068");var u=a("2877"),o=Object(u["a"])(e["default"],n["a"],n["b"],!1,null,"21385fba",null);i["default"]=o.exports}}]);