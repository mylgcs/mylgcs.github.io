(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-GeneratingUnscanned-GeneratingUnscanned"],{"08c8":function(t,e,a){"use strict";a.r(e);var i=a("d3f5"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e["default"]=n.a},"267e":function(t,e,a){"use strict";var i=a("5503"),n=a.n(i);n.a},"29ee":function(t,e,a){var i=a("377c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("f115b55c",i,!0,{sourceMap:!1,shadowMode:!1})},"377c":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".uni-list[data-v-69e591aa]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.uni-list-cell[data-v-69e591aa]{position:relative}.uni-list-cell-db uni-button[data-v-69e591aa]{position:absolute;right:%?20?%;top:%?10?%;background:#ffac60;color:#fff;z-index:99}.rui-head[data-v-69e591aa]{font-size:4vw;height:10vw;line-height:10vw;padding:0 4vw;text-align:left}.rui-flex[data-v-69e591aa]{display:-webkit-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;background:#fff}.rui-picker[data-v-69e591aa]{border:none!important}.box[data-v-69e591aa]{background:#fff;margin-bottom:%?24?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;top:%?0?%;width:100%;height:%?72?%;z-index:20;border-bottom:1px solid #ccc}.box uni-input[data-v-69e591aa]{padding:0 %?20?%}.section[data-v-69e591aa]{position:relative;background:#fff}.content uni-input[data-v-69e591aa]{padding:0 10px;padding-left:%?100?%}.section uni-text[data-v-69e591aa]{position:absolute;top:%?10?%}uni-button[data-v-69e591aa]{position:absolute;right:%?20?%;top:%?10?%;background:#ffac60;color:#fff;z-index:99}.warp[data-v-69e591aa]{background:#fff}.dw[data-v-69e591aa]{position:fixed;bottom:0;background:#fff}\r\n/* .t-table .t-tr:nth-child(2n){background: #FFFFFF;} */\r\n/* .hj{color: red;font-weight: 600;font-size: 36upx;} */.sl[data-v-69e591aa]{color:#f6871e;font-weight:600;font-size:%?28?%}.sl uni-view[data-v-69e591aa]{color:#f6871e;font-weight:600;font-size:%?28?%}.kg[data-v-69e591aa]{margin-left:%?20?%}",""])},"3e42":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"box",staticStyle:{"margin-bottom":"0"}},[a("v-uni-view",{staticClass:"rui-flex"},[a("ruiDatePicker",{attrs:{fields:"day",start:"2018-01-01",end:"2019-12-30",value:t.dates},on:{change:function(e){e=t.$handleEvent(e),t.bindChange1(e)}}})],1),a("v-uni-view",{staticClass:"rui-flex"},[a("v-uni-text",{staticStyle:{color:"#CCCCCC"}},[t._v("到")]),a("ruiDatePicker",{attrs:{fields:"day",start:"2018-01-01",end:"2019-12-00",value:t.datee},on:{change:function(e){e=t.$handleEvent(e),t.bindChange2(e)}}})],1),a("v-uni-button",{staticStyle:{right:"160upx"},attrs:{size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.onpeDetailed(e)}}},[t._v("查询")]),a("v-uni-button",{attrs:{size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.onpeIfon(e)}}},[t._v("更多")])],1),a("v-uni-view",{staticClass:"m-top1"}),a("v-uni-view",{staticClass:"warp"},[t._l(t.tableList,function(e,i){return a("v-uni-view",{staticClass:"uni-list"},[[a("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[a("v-uni-view",{staticClass:"uni-triplex-row"},[a("v-uni-view",{staticClass:"uni-triplex-left",staticStyle:{width:"100%"}},[a("v-uni-text",{staticClass:"uni-title uni-ellipsis"},[t._v("编号:"+t._s(e.id)),a("v-uni-text",{staticClass:"kg"}),t._v("床/缸号:"+t._s(e.chuanghao)),a("v-uni-text",{staticClass:"kg"}),t._v("货号:"+t._s(e.huohao))],1),a("v-uni-text",{staticClass:"uni-text"},[t._v("颜色:"+t._s(e.color)),a("v-uni-text",{staticClass:"kg"}),t._v("尺码:"+t._s(e.chima)),a("v-uni-text",{staticClass:"kg"}),t._v("工序:"+t._s(e.worktype)),a("v-uni-text",{staticClass:"kg"}),t._v("数量:"+t._s(e.sl))],1)],1)],1)],1)]],2)}),a("t-table",{staticClass:"dw",staticStyle:{width:"100%","z-index":"10"}},[a("t-tr",[a("t-td",[t._v("合计:")]),a("t-td",{staticClass:"sl"},[t._v(t._s(t.sl2)+"包")]),a("t-td",{staticClass:"sl"},[t._v(t._s(t.sl1))])],1)],1)],2),a("v-uni-view",{staticClass:"m-bottom"})],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"4ded":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("f5a5"));function n(t){return t&&t.__esModule?t:{default:t}}var r={name:"rattenking-dtpicker",props:{start:{type:String,default:"1900-00-00 00:00:00"},end:{type:String,default:"2500-12-30 23:59:59"},value:{type:String,default:""},fields:{type:String,default:"second"},disabled:{type:Boolean,default:!1}},data:function(){return{times:[["2019","2020"],["01","02"]],timesIndex:[1,1],timesString:null,curValue:this.value,curDisabled:this.disabled,cancel:null}},watch:{value:function(t){this.curValue=t},disabled:function(t){this.curDisabled=t},curDisabled:function(t){this.curDisabled=t},curValue:function(t){this.curValue=t,this.$emit("change",t)},times:function(t){this.times=t},timesIndex:function(t){this.timesIndex=t},cancel:function(t){this.$emit("cancel",t)}},created:function(){if(""===this.value){var t=i.default.getCurrentTimes(),e=[];for(var a in t.detail)if(e.push(t.detail[a]),a===this.fields)break;this.value=i.default.format(e),this.curValue=i.default.format(e)}switch(this.fields){case"year":if(4!==this.value.length)return i.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(4!==this.start.length)return i.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(4!==this.end.length)return i.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"month":if(7!==this.value.length)return i.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(7!==this.start.length)return i.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(7!==this.end.length)return i.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"day":if(10!==this.value.length)return i.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(10!==this.start.length)return i.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(10!==this.end.length)return i.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"hour":if(13!==this.value.length)return i.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(13!==this.start.length)return i.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(13!==this.end.length)return i.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"minute":if(16!==this.value.length)return i.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(16!==this.start.length)return i.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(16!==this.end.length)return i.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"second":if(19!==this.value.length)return i.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(19!==this.start.length)return i.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(19!==this.end.length)return i.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;default:i.default.error("时间粒度不存在");break}this.value.split(" ");var n=i.default.getCurrentStringValue(this.value);if(i.default.getTimes(this.value)<i.default.getTimes(this.start))return i.default.error("默认时间不能小于开始时间"),this.curDisabled=!0,!1;if(i.default.getTimes(this.value)>i.default.getTimes(this.end))return i.default.error("默认时间不能大于开始时间"),this.curDisabled=!0,!1;var r=i.default.getDateTimes({start:this.start.substring(0,4),end:this.end.substring(0,4),curyear:this.value.substring(0,4),curmonth:this.value.substring(5,7),fields:this.fields}),s=i.default.getTimeIndex(r,n),u=[];s.forEach(function(t){return u.push(t)}),this.times=r,this.timesIndex=s,this.timesString=u},methods:{changeDate:function(t){for(var e=t.detail.value,a=this.times,n=[],r=0,s=e.length;r<s;r++)n.push(a[r][e[r]]);var u=i.default.format(n);this.curValue=u},columnchangeDate:function(t){if("year"===this.fields||"month"===this.fields){var e=i.default.getNewArray(this.timesIndex);return e[t.detail.column]=t.detail.value,this.timesIndex=e,!1}if(0===t.detail.column||1===t.detail.column){var a=i.default.getNewArray(this.times),n=i.default.getNewArray(this.timesIndex);n[t.detail.column]=t.detail.value;var r=i.default.getMonthDay(a[0][n[0]],a[1][n[1]]);a[2]=r,n[2]>r.length-1&&(n[2]=r.length-1),this.times=a,this.timesIndex=n}else{var s=i.default.getNewArray(this.timesIndex);s[t.detail.column]=t.detail.value,this.timesIndex=s}},cancelDate:function(t){this.cancel=t}}};e.default=r},5503:function(t,e,a){var i=a("92fd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("4ba99689",i,!0,{sourceMap:!1,shadowMode:!1})},"7a36":function(t,e,a){"use strict";a.r(e);var i=a("4ded"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e["default"]=n.a},"92fd":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".rui-picker[data-v-4d4c7054]{height:10vw;font-size:%?28?%;color:#000;display:-webkit-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #aaa;-webkit-border-radius:3px;border-radius:3px}",""])},ba55:function(t,e,a){"use strict";var i=a("29ee"),n=a.n(i);n.a},d3f5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(a("f54b")),n=o(a("998c")),r=o(a("f05a")),s=o(a("e5af")),u=o(a("d613"));function o(t){return t&&t.__esModule?t:{default:t}}var l=d(),c=d();function d(){var t=new Date,e="-",a=t.getMonth()+1,i=t.getDate();a>=1&&a<=9&&(a="0"+a),i>=0&&i<=9&&(i="0"+i);var n=t.getFullYear()+e+a+e+i;return n}l=l.substring(0,7)+"-01";var f={components:{ruiDatePicker:i.default,tTable:n.default,tTh:r.default,tTr:s.default,tTd:u.default},data:function(){return{time:"",tableList:[],dates:l,datee:c,huohao:"",chuanghao:"",color:"",chima:"",userid:"",uid:"",worktype:"",sl1:"",dk:"",sl2:""}},onBackPress:function(t){return console.log("###"+JSON.stringify(t)),"backbutton"===t.from&&(uni.switchTab({url:"/pages/admin/admin"}),!0)},onLoad:function(t){var e=this,a=JSON.stringify(t);if(a.indexOf(".html")<0&&"{}"!=JSON.stringify(t)){this.huohao=t.huohao,this.chuanghao=t.chuanghao,this.color=t.color,this.chima=t.chima,this.userid=t.userid,this.uid=t.uid,this.worktype=t.worktype,this.time=t.time;var i=t.time.split(",");this.dates=i[0],this.datee=i[1]}this.dk=this.websiteUrl,uni.getStorage({key:"fwqsj",success:function(t){e.dk=t.data,console.log(t.data)}}),uni.request({url:"https://".concat(this.dk,"/getSearchWsk.aspx"),method:"GET",data:{dates:this.dates,datee:this.datee,huohao:this.huohao,chuanghao:this.chuanghao,color:this.color,chima:this.chima,userid:this.userid,uid:this.uid,worktype:this.worktype},success:function(t){console.log(t),e.tableList=t.data;for(var a=t.data,i=0,n=0;n<a.length;n++)i+=a[n].sl;e.sl1=i,e.sl2=a.length},fail:function(t){},complete:function(){}})},methods:{bindChange1:function(t){this.dates=t},bindChange2:function(t){this.datee=t},onpeDetailed:function(){var t=this;uni.request({url:"https://".concat(this.dk,"/getSearchWsk.aspx"),method:"GET",data:{dates:this.dates,datee:this.datee,huohao:this.huohao,chuanghao:this.chuanghao,color:this.color,chima:this.chima,userid:this.userid,uid:this.uid,worktype:this.worktype},success:function(e){t.tableList=e.data;var a=e.data;console.log(a);for(var i=0,n=0;n<a.length;n++)i+=a[n].sl;t.sl1=i,t.sl2=a.length},fail:function(){},complete:function(){}})},onpeIfon:function(){uni.navigateTo({url:"../../info/info?flag=3"})}}};e.default=f},dd61:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-picker",{staticClass:"rui-picker rui-class",attrs:{mode:"multiSelector",range:t.times,value:t.timesIndex,disabled:t.curDisabled},on:{change:function(e){e=t.$handleEvent(e),t.changeDate(e)},cancel:function(e){e=t.$handleEvent(e),t.cancelDate(e)},columnchange:function(e){e=t.$handleEvent(e),t.columnchangeDate(e)}}},[t._v(t._s(t.curValue))])},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},e195:function(t,e,a){"use strict";a.r(e);var i=a("3e42"),n=a("08c8");for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);a("ba55");var s=a("2877"),u=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"69e591aa",null);e["default"]=u.exports},f54b:function(t,e,a){"use strict";a.r(e);var i=a("dd61"),n=a("7a36");for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);a("267e");var s=a("2877"),u=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"4d4c7054",null);e["default"]=u.exports},f5a5:function(t,e,a){"use strict";function i(t){return s(t)||r(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var u={withData:function(t){var e=parseInt(t);return e<10?"0"+e:""+e},getTimes:function(t){return new Date(t.replace(/-/g,"/")).getTime()},getCurrentTimes:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate(),n=t.getHours(),r=t.getMinutes(),s=t.getSeconds();return{detail:{year:e,month:a,day:i,hour:n,minute:r,second:s}}},format:function(t){var e=[],a=[],i="";return t.forEach(function(t,i){var n=u.withData(t);i>2?e.push(n):a.push(n)}),i=t.length<4?a.join("-"):a.join("-")+" "+e.join(":"),i},getCurrentStringValue:function(t){var e=t.split(" ");if(e&&e[1]){var a=[].concat(i(e[0].split("-")),i(e[1].split(":")));return a}return e[0].split("-")},getCompare:function(t,e,a,i){var n=u.getTimes(t),r=u.getTimes(e),s=u.getTimes(a);return n<r?u.getTimeIndex(i,u.getCurrentStringValue(e)):n>s?u.getTimeIndex(i,u.getCurrentStringValue(a)):u.getTimeIndex(i,u.getCurrentStringValue(t))},getChooseArr:function(t,e){var a=[];return t.forEach(function(t,i){return a.push(t[e[i]])}),a},getNewArray:function(t){var e=[];return t.forEach(function(t){return e.push(t)}),e},getLoopArray:function(t,e){t=t||0,e=e||1;for(var a=[],i=t;i<=e;i++)a.push(u.withData(i));return a},getMonthDay:function(t,e){var a=t%400==0||t%4==0&&t%100!=0,i=null;switch(e){case"01":case"03":case"05":case"07":case"08":case"10":case"12":i=u.getLoopArray(1,31);break;case"04":case"06":case"09":case"11":i=u.getLoopArray(1,30);break;case"02":i=a?u.getLoopArray(1,29):u.getLoopArray(1,28);break;default:i="月份格式不正确，请重新输入！"}return i},getDateTimes:function(t){var e=u.getLoopArray(t.start,t.end),a=u.getLoopArray(1,12),i=u.getMonthDay(t.curyear,t.curmonth),n=u.getLoopArray(0,23),r=u.getLoopArray(0,59),s=u.getLoopArray(0,59),o=null;switch(t.fields){case"year":o=[e];break;case"month":o=[e,a];break;case"day":o=[e,a,i];break;case"hour":o=[e,a,i,n];break;case"minute":o=[e,a,i,n,r];break;case"second":o=[e,a,i,n,r,s];break;default:o=[e,a,i,n,r,s]}return o},getIndex:function(t,e){for(var a=t.length,i=0;i<a;i++)if(t[i]==e)return i},getTimeIndex:function(t,e){for(var a=t.length,i=[],n=0;n<a;n++)i.push(u.getIndex(t[n],e[n]));return i},error:function(t){console.error(t)}};t.exports=u}}]);