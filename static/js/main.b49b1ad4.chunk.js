(this.webpackJsonpgif_library=this.webpackJsonpgif_library||[]).push([[0],{22:function(e,t,n){e.exports=n(36)},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(11),c=n.n(r),u=n(3),l=n(2),s=n(19),o=n(20),p=n.n(o),f=n(6),h=n(7),d=n(9),g=n(8),m=n(10);function b(e){return{type:"FETCH_INPUT",payload:e}}function y(e){return{type:"FETCH_GIFS",payload:fetch("https://api.giphy.com/v1/gifs/search?q=".concat(e,"&api_key=CuBjwgU0RjWbsxzewisHRPN0YA3PU0bL&limit=25&rating=G")).then((function(e){return e.json()}))}}function v(){return{type:"FETCH_TRENDING_GIFS",payload:fetch("https://api.giphy.com/v1/gifs/trending?api_key=CuBjwgU0RjWbsxzewisHRPN0YA3PU0bL&limit=10&rating=G").then((function(e){return e.json()}))}}var j=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).handleChange=function(e){n.props.fetchInput(e.target.value),n.props.fetchGifs(e.target.value)},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search_bar_container",id:"search_bar_id"},i.a.createElement("h4",null,"GIF Library"),i.a.createElement("i",{class:"fas fa-search search"}),i.a.createElement("input",{type:"text",className:"search_bar",value:this.props.inputValue,onChange:this.handleChange}))}}]),t}(a.Component);var E=Object(u.b)((function(e){return{inputValue:e.inputValue}}),(function(e){return Object(l.b)({fetchInput:b,fetchGifs:y},e)}))(j),O=function(e){return i.a.createElement("div",{className:""},i.a.createElement("img",{src:"https://media.giphy.com/media/".concat(e.id,"/giphy.gif"),alt:"Loading",className:"gif"}))},_=function(e){function t(){return Object(f.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return null===this.props.gifList?i.a.createElement("h2",{className:"waiting"}," "):i.a.createElement("div",{className:"gif_list_container",id:"gif_list_id"},this.props.gifList.data.map((function(e){return i.a.createElement(O,{id:e.id,key:e.id})})))}}]),t}(a.Component);var G=Object(u.b)((function(e){return{inputValue:e.inputValue,gifList:e.gifList}}),(function(e){return Object(l.b)({fetchInput:b},e)}))(_),N=n(16),I=function(e){function t(){return Object(f.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTrendingGifs()}},{key:"render",value:function(){if(this.props.trendingGifs){var e=this.props.trendingGifs.data;return i.a.createElement("div",null,i.a.createElement("p",{className:"trending_header"},"Trending Gifs"),i.a.createElement(N.a,{className:"carousel"},e.map((function(e){return i.a.createElement(N.a.Item,null,i.a.createElement("img",{className:"gifImg",src:"https://media.giphy.com/media/".concat(e.id,"/giphy.gif"),alt:"First slide"}))}))))}return i.a.createElement("h2",null,"Loading")}}]),t}(a.Component);var C=Object(u.b)((function(e){return{inputValue:e.inputValue,gifList:e.gifList,trendingGifs:e.trendingGifs}}),(function(e){return Object(l.b)({fetchInput:b,fetchTrendingGifs:v},e)}))(I),T=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(E,null),i.a.createElement(C,null),i.a.createElement(G,null))},F=(n(35),Object(l.c)({inputValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_INPUT":return t.payload;default:return e}},gifList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_GIFS":return t.payload;default:return e}},trendingGifs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TRENDING_GIFS":return t.payload;default:return e}}})),L=Object(l.a)(p.a,s.logger),w=Object(l.d)(F,{},L);c.a.render(i.a.createElement(u.a,{store:w},i.a.createElement(T,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b49b1ad4.chunk.js.map