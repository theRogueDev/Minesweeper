(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{27:function(e,t,n){e.exports=n(44)},37:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),l=n(8),c=n(11),i=n(12),u=n(15),d=n(14),s=n(16),m=n(46),x=n(47),y=n(48),v=(n(37),n(13)),p="INIT_GAME",h="USER_CLICK",f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={block:n.props.board[n.props.x][n.props.y]},n.handleClick=n.handleClick.bind(Object(v.a)(n)),n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.props.handleClick(e.button,this.props.x,this.props.y)}},{key:"render",value:function(){var e,t=this.props.board[this.props.x][this.props.y];return e=t.flag?r.a.createElement("div",{style:{height:"100%",width:"100%",backgroundImage:"flag.png"}}):t.revealed?r.a.createElement("div",{className:"revealed"},r.a.createElement("p",null,t.count)):r.a.createElement("div",{className:"unrevealed"}),this.props.win&&t.mine&&(e=r.a.createElement("div",{style:{width:"100%",height:"100%",backgroundImage:"url(mine.png)"}})),r.a.createElement("td",{style:{backgroundImage:"flag.png"},onContextMenu:this.handleClick,onClick:this.handleClick},e)}}]),t}(r.a.Component),b=Object(l.b)((function(e){return{board:e.board.board,win:e.board.win}}),(function(e){return{handleClick:function(t,n,a){e(function(e,t,n){return{type:"USER_CLICK",button:e,x:t,y:n}}(t,n,a))}}}))(f),g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<10;t++){for(var n=[],a=0;a<10;a++)n.push(r.a.createElement(b,{key:a,mine:this.props.root.board[t][a].mine,x:t,y:a}));e.push(r.a.createElement("tr",{key:t},n))}return r.a.createElement(m.a,null,r.a.createElement(x.a,null,r.a.createElement(y.a,{className:"text-center mt-5 mb-5"},r.a.createElement("h1",null,"Minesweeper with React-Redux"))),r.a.createElement(x.a,null,r.a.createElement(y.a,{className:"text-center"},r.a.createElement("table",{id:"gameTable",className:"mx-auto"},r.a.createElement("tbody",null,e)))),r.a.createElement(x.a,null,r.a.createElement(y.a,{className:"text-center mt-5 mb-5"},r.a.createElement("p",null,"Use left click to reveal blocks, and right click to flag blocks."),r.a.createElement("p",null,"After flagging all mines, you win the game."))))}}]),t}(r.a.Component),E=Object(l.b)((function(e){return{root:e.board}}),(function(e){return{}}))(g),k=n(26),j=n(20),O=function(e){return function(t,n,a){return e((function(e,n){var a,r=performance.now(),o=t(e,n),l=performance.now(),c=(a=l-r,Math.round(100*a)/100);return console.log("reducer process time:",c),o}),n,a)}},w=function(e){return function(t){return function(n){console.log(n.type),console.info("dispatching",n);var a=t(n);return console.log("next state",e.getState()),a}}},C=n(4),M=n(23),I=function(e){for(var t=[],n=0;n<e.length;n++){for(var a=[],r=0;r<e[n].length;r++)a.push(Object(M.a)({},e[n][r]));t.push(a)}return t},N=function(){for(var e=10*Math.random()+10,t=[],n=0;n<10;n++){for(var a=[],r=0;r<10;r++)a.push({mine:!1,revealed:!1,flag:!1});t.push(a)}for(var o=0;o<e;o++){var l=Math.floor(10*Math.random()),c=Math.floor(10*Math.random());t[l][c].mine=!0}return{board:t,win:!1}},R=function e(t,n){var a=0,r=I(t),o=!1,l=!1,c=!1,i=!1,u=!1,d=!1,s=!1,m=!1;return console.log("Flood source: "+n.x+", "+n.y),console.log(r),r[n.x][n.y].revealed?(console.log("Already revealed, return unmodded board"),r):(void 0!==r[n.x]&&void 0!==r[n.x][n.y+1]&&(o=!0),void 0!==r[n.x+1]&&void 0!==r[n.x+1][n.y+1]&&(u=!0),void 0!==r[n.x+1]&&void 0!==r[n.x+1][n.y]&&(l=!0),void 0!==r[n.x+1]&&void 0!==r[n.x+1][n.y-1]&&(s=!0),void 0!==r[n.x]&&void 0!==r[n.x][n.y-1]&&(c=!0),void 0!==r[n.x-1]&&void 0!==r[n.x-1][n.y-1]&&(m=!0),void 0!==r[n.x-1]&&void 0!==r[n.x-1][n.y]&&(i=!0),void 0!==r[n.x-1]&&void 0!==r[n.x-1][n.y+1]&&(d=!0),o&&r[n.x][n.y+1].mine&&(a+=1),u&&r[n.x+1][n.y+1].mine&&(a+=1),l&&r[n.x+1][n.y].mine&&(a+=1),s&&r[n.x+1][n.y-1].mine&&(a+=1),c&&r[n.x][n.y-1].mine&&(a+=1),m&&r[n.x-1][n.y-1].mine&&(a+=1),i&&r[n.x-1][n.y].mine&&(a+=1),d&&r[n.x-1][n.y+1].mine&&(a+=1),r[n.x][n.y].count=a,r[n.x][n.y].revealed=!0,0!==a?r:(o&&!r[n.x][n.y+1].revealed&&(r=e(r,{x:n.x,y:n.y+1})),u&&!r[n.x+1][n.y+1].revealed&&(r=e(r,{x:n.x+1,y:n.y+1})),l&&!r[n.x+1][n.y].revealed&&(r=e(r,{x:n.x+1,y:n.y})),s&&!r[n.x+1][n.y-1].revealed&&(r=e(r,{x:n.x+1,y:n.y-1})),c&&!r[n.x][n.y-1].revealed&&(r=e(r,{x:n.x,y:n.y-1})),m&&!r[n.x-1][n.y-1].revealed&&(r=e(r,{x:n.x-1,y:n.y-1})),i&&!r[n.x-1][n.y].revealed&&(r=e(r,{x:n.x-1,y:n.y})),d&&!r[n.x-1][n.y+1].revealed&&(r=e(r,{x:n.x-1,y:n.y+1})),r))},S=function(e){for(var t=!0,n=0;n<10;n++)for(var a=0;a<10;a++)e[n][a].mine&&(e[n][a].flag||(t=!1));return t},A=Object(C.combineReducers)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return N();case h:var n=I(e.board),a=t.button,r=t.x,o=t.y;0===a?n[r][o].mine?alert("Game over"):n=R(n,{x:r,y:o}):2===a&&(n[r][o].flag=!n[r][o].flag);var l=S(n);return{win:l,board:n};default:return e}}});n(43);var U,_=Object(j.a)({reducer:A,middleware:[w].concat(Object(k.a)(Object(j.b)())),preloadedState:U,enhancers:[O]});Object(o.render)(r.a.createElement(l.a,{store:_},r.a.createElement(E,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.ec95f8a0.chunk.js.map