(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Name: Rachel Green","image":"http://picture-cdn.wheretoget.it/tmr6py-l-610x610-blouse-rachel+green-tease-navy+blue+crop-button-friends-patch.jpg","occupation":"Role: Fashion World","count":0},{"id":2,"name":"Name: Monica Geller","image":"https://amp.insider.com/images/5c8279ebeb3ce821ef1247a2-750-562.jpg","occupation":"Role: Chef","count":0},{"id":3,"name":"Name: Phoebe Buffay","image":"https://cimg.tvgcdn.net/i/2019/03/28/39b2a3f5-d5cc-4dfa-87ab-ee6510fee178/1f91170d8bad55db187de67885109072/phoebe-buffay-friends-lisa-kudrow-news.jpg","occupation":"Role: Songwriter","count":0},{"id":4,"name":"Name: Joey Tribbiani","image":"https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/30/09/joey.jpg?w968h681","occupation":"Role: Actor","count":0},{"id":5,"name":"Name: Chandler Bing","image":"http://images.newindianexpress.com/uploads/user/imagelibrary/2019/8/19/original/2ChandlerBing.JPG","occupation":"Role: IT Manager","count":0},{"id":6,"name":"Name: Ross Geller","image":"https://stellar.ie/wp-content/uploads/2016/07/Ross-Geller-640x400.jpg","occupation":"Role: Paleontologist","count":0},{"id":7,"name":"Name: Janice Hosenstein","image":"https://imgix.bustle.com/rehost/2016/9/13/a6d6a55c-3b0a-4c30-9b7c-c0d2b45031e6.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70","occupation":"Role: Chandler\'s Ex","count":0},{"id":8,"name":"Name: Emily Waltham","image":"http://scribol.com/wp-content/uploads/2017/05/19-Emily-Waltham-of-Friends.jpg","occupation":"Role: Ross\'s 9348 Wife","count":0},{"id":9,"name":"Name: Gunther","image":"https://i.kinja-img.com/gawker-media/image/upload/s--HU97xWxM--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/q2hy8z33nfnaalmyenao.jpg","occupation":"Role: Central Perk Barista","count":0},{"id":10,"name":"Name: Mike Hannigan","image":"https://em.wattpad.com/2e300acb644ee4079cf4cd48d560acfac400c527/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f49617578324357434f6d517a37413d3d2d3731333332393832302e313539306437636361353662353564353937323038303436343331302e6a7067?s=fit&w=720&h=720","occupation":"Role: Phoebe\'s Hubby","count":0},{"id":11,"name":"Name: Richard Burke","image":"https://i.pinimg.com/originals/39/d6/7f/39d67f239e1d70cf1d7c1314b953168e.jpg","occupation":"Role: Monica\'s Ex","count":0},{"id":12,"name":"Name: Carol Willick","image":"https://lgbtfansdeservebetter.com/static/uploads/2017/03/Carol-Willick-Jane-Sibbett.png","occupation":"Role: Ross\'s First Wife","count":0}]')},,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),i=a.n(o),r=a(4),s=a(5),l=a(7),m=a(6),u=a(8),d=(a(14),function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})),c.a.createElement("div",{className:"content"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("strong",null)," ",e.name),c.a.createElement("li",null,c.a.createElement("strong",null)," ",e.occupation))))}),h=(a(15),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)});a(16);var f=function(e){return c.a.createElement("h2",{className:"title"},e.children)},g=(a(17),function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"title"},e.children),c.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),p=a(1);a(18);var b=function(e){return c.a.createElement("div",{className:"jumbotron"},e.children)};a(19);var E=function(e){return c.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},c.a.createElement("span",{class:"navbar-brand mb-0 h1"}),e.children)},N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={friends:p,score:0,highscore:0},a.gameOver=function(){return a.state.score>a.state.highscore&&a.setState({highscore:a.state.score},function(){console.log(this.state.highscore)}),a.state.friends.forEach(function(e){e.count=0}),alert("Game Over! You Lost, Loser.\nScore: ".concat(a.state.score)),a.setState({score:0}),!0},a.winGame=function(){alert("YOU WIN!\nScore: 12"),a.setState({highscore:0,score:0})},a.clickCount=function(e){a.state.friends.find(function(t,n){if(t.id===e)if(0===p[n].count){if(p[n].count=p[n].count+1,11!==a.state.score)return a.setState({score:a.state.score+1,highscore:a.state.score+1>a.state.highscore?a.state.score+1:a.state.highscore},function(){console.log(this.state.score)}),a.state.friends.sort(function(){return Math.random()-.5}),!0;console.log("WINNNN"),a.winGame()}else a.gameOver()})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(h,null,c.a.createElement(E,null,c.a.createElement(g,{score:this.state.score,highscore:this.state.highscore})),c.a.createElement("br",null),c.a.createElement(b,null,c.a.createElement(f,null,"Friends Memory Game",c.a.createElement("br",null),"Don't click the same card twice!")),this.state.friends.map(function(t){return c.a.createElement(d,{clickCount:e.clickCount,id:t.id,key:t.id,name:t.name,image:t.image,occupation:t.occupation})}))}}]),t}(n.Component);a(20);i.a.render(c.a.createElement(N,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.cb6f057d.chunk.js.map