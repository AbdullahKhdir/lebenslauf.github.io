/*! For license information please see component---src-pages-index-js-c4aa23d43b087b39e06b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5Q0V":function(e,t,a){var l=a("cDf5").default;e.exports=function(e,t){if("object"!=l(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"7W2i":function(e,t,a){var l=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){var t,a,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var n=+new Date;!!t&&n<t+l?(clearTimeout(a),a=setTimeout((function(){t=n,e()}),l)):(t=n,e())}};t.default=l},Ijbi:function(e,t,a){var l=a("WkPL");e.exports=function(e){if(Array.isArray(e))return l(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,a(t)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},RIqP:function(e,t,a){var l=a("Ijbi"),n=a("EbDI"),r=a("ZhPi"),i=a("Bnag");e.exports=function(e){return l(e)||n(e)||r(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},RXBc:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("7oih"),i=a("dI71"),o=a("YIkO"),s=a.n(o),c=a("dwco"),m=a.n(c);const u=e=>e.children;var f=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(t),t}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){m.a.polyfill()},a.handleClick=function(e){e.preventDefault();let t=0,a=!0;const{type:l,element:n,offset:r,timeout:i}=this.props;if(l&&n)switch(l){case"class":t=document.getElementsByClassName(n)[0],a=!!t;break;case"id":t=document.getElementById(n),a=!!t}a?this.scrollTo(t,r,i):console.log("Element not found: "+n)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);const l=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout(()=>{window.scroll({top:l+t,left:0,behavior:"smooth"})},a):window.scroll({top:l+t,left:0,behavior:"smooth"})},a.render=function(){return n.a.createElement(u,null,"object"==typeof this.props.children?n.a.cloneElement(this.props.children,{onClick:this.handleClick}):n.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(n.a.Component),d=a("SDAe"),p=a.n(d),h=a("obyI"),g=a.n(h);var v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About me",href:"about"},{content:"Experiences",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Interests",href:"interests"}],isCollapsed:!0},a.toggleNavbar=a.toggleNavbar.bind(a),a}Object(i.a)(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},a.render=function(){const{tabs:e,isCollapsed:t}=this.state;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},n.a.createElement("a",{className:"navbar-brand",href:"#page-top"},n.a.createElement("span",{className:"d-block d-lg-none"},g.a.firstName,"   ",g.a.lastName),n.a.createElement("span",{className:"d-none d-lg-block"},n.a.createElement("img",{className:"img-fluid img-profile mx-auto mb-2",src:p.a,alt:""}))),n.a.createElement("button",{className:"navbar-toggler navbar-toggler-right "+(t?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse "+(t?"":"show"),id:"navbarSupportedContent"},n.a.createElement(s.a,{items:e.map(e=>e.href),currentClassName:"active",offset:-300,className:"navbar-nav"},e.map((e,t)=>{const{href:a,content:l}=e;return n.a.createElement("li",{className:"nav-item",key:a},n.a.createElement(f,{type:"id",element:a},n.a.createElement("a",{className:"nav-link",href:"#"+a},l)))}))))},t}(l.Component);t.default=()=>n.a.createElement(r.a,null,n.a.createElement(v,null),n.a.createElement("div",{className:"container-fluid p-0"},n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h1",{className:"mb-0"},g.a.firstName,n.a.createElement("span",{className:"text-primary"}," ",g.a.lastName)),n.a.createElement("div",{className:"subheading mb-5"},g.a.getAddress()," · ",g.a.getPhone()," ·",n.a.createElement("a",{href:"mailto:"+g.a.getEmail()},g.a.getEmail())),n.a.createElement("p",{className:"lead mb-5"},"I'm Abdullah, Khdir, ",g.a.calculateAge("1997-04-01")," years old. I have been in Germany for ",g.a.calculateAge("2015-08-22")," years and am currently working as a Full Stack Web Developer at Deutsche Telekom Individual Solutions & Products GmbH. In 2021 I completed an apprenticeship as an IT specialist for application development at Deutsche Telekom AG. During my training, I gained experience in different areas that are important in the telecommunications world and are needed in the IT world as a programmer. I also have experience in the field of automation, where different network components can be controlled and automated by agents, and I worked on developing and implementing agents based on different protocols like SNMP, which can be used for control and automation of different hardware like power distribution units. In addition, I checked the quality of the project with the development of automated system tests, and I gained knowledge about the development of web applications using a wide range of technologies, as well as experience in designing and developing interfaces (GUI). I am currently specializing concretely and deeply in the different technologies and frameworks that revolve around web development."),n.a.createElement("div",{className:"social-icons"},g.a.socialLinks.map(e=>{const{icon:t,url:a}=e;return n.a.createElement("a",{key:a,href:a},n.a.createElement("i",{className:"fab "+t}))})))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Experiences"),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Full Stack PHP Web Developer"),n.a.createElement("div",{className:"subheading mb-3"},"Deutsche Telekom Individual Solutions & Products GmbH"),n.a.createElement("p",null,"Using the Laravel framework, I'm currently working on the development, implementation, customization, data model design, testing, and organization of a tool, that archives and addresses the orders and contracts of global and local companies in Germany and around the globe.")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"June 2021 - Present"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Automation"),n.a.createElement("div",{className:"subheading mb-3"},"Deutsche Telekom Technik GmbH"),n.a.createElement("p",null,"I have developed an SNMP agent using Java programming language, which is used to control power distribution units using the SNMP protocol. I have also worked on different automation solutions, that can be automated by the agent via the network components.")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"March 2021 - June 2021"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Development of web applications"),n.a.createElement("div",{className:"subheading mb-3"},"Professional development"),n.a.createElement("p",null,"Through various projects, I have acquired knowledge in the area of developing web applications using MERN technologies. In addition, I am also familiar with separate frontend applications.")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"February 2021"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Development of Graphical User Interface"),n.a.createElement("div",{className:"subheading mb-3"},"Deutsche Telekom Technik GmbH"),n.a.createElement("p",null,"I have developed a graphical user interface with the help of Java programming language for a power distribution unit hardware that controls and monitors the functionalities of the product.")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"August 2020"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Development and maintenance of databases"),n.a.createElement("div",{className:"subheading mb-3"},"Deutsche Telekom Technik GmbH"),n.a.createElement("p",null,"I developed and maintained an interface for a database using MS Access, which deals with the tools of all departments of the company.")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"December 2020"))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex ",id:"education"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Professional Background"),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between p-0"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"IT specialist as application developer"),n.a.createElement("div",{className:"subheading mb-3"},"Apprenticeship at Deutsche Telekom AG in Nuremberg"),n.a.createElement("div",null,"Extensive topics in the telecommunications world, specifically in the field of automation"),n.a.createElement("p",null)),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"September 2018 - September 2021"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Language Skills"),n.a.createElement("div",{className:"subheading mb-3"},"University of Oldenburg"),n.a.createElement("div",null,"Completion of language course DSH-1 with certificate"),n.a.createElement("p",null,"I also have a very good knowledge of English")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"March 2017 - February 2018"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Al Imam Ali Senior High School, Amman"),n.a.createElement("div",{className:"subheading mb-3"},"High school graduation"),n.a.createElement("p",null)),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"September 2013 - May 2015"))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex ",id:"skills"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Knowledge"),n.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),n.a.createElement("ul",{className:"list-inline dev-icons"},n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-java"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-cuttlefish"},"++")),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-cuttlefish"},"#")),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-html5"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-css3-alt"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-js-square"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-react"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-node-js"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-npm"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-php"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-laravel"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-github"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-docker"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-linkedin"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-figma"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-windows"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-apple"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-stack-overflow"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-android"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-linux"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-python"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-gitlab"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-microsoft"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-yarn"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-ubuntu"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fab fa-symfony"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{class:"fa fa-file-code"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("svg",{className:"maria-db-icon",fill:"#495057",width:64,height:64,viewBox:"0 0 32 32"},n.a.createElement("path",{className:"maria-db-icon",d:"M29.942 6.518c-0.597 0.293-1.3 0.465-2.042 0.465-0.017 0-0.034-0-0.051-0l0.003 0c-0.543 0-1.064 0.096-1.546 0.271l0.032-0.010c-1.052 0.391-1.916 1.082-2.513 1.969l-0.012 0.018c-0.495 0.693-1.011 1.505-1.487 2.343l-0.074 0.142c-0.382 0.63-0.759 1.169-1.168 1.681l0.024-0.031c-0.701 0.866-1.6 1.545-2.63 1.971l-0.044 0.016c-1.369 0.617-3.070 1.245-4.818 1.767l-0.308 0.079c-1.341 0.441-2.665 0.922-2.958 1.080-1.109 0.603-2.030 1.418-2.737 2.398l-0.016 0.024c-1.253 1.65-1.215 1.641-3.801 1.183q-0.421-0.051-0.844-0.079c-0.12-0.026-0.258-0.041-0.399-0.041-0.483 0-0.925 0.173-1.268 0.461l0.003-0.003-0.284 0.269 0.221 0.11c0.268 0.167 0.496 0.331 0.714 0.508l-0.013-0.010c0.202 0.167 0.426 0.328 0.661 0.473l0.026 0.015c0.089 0.041 0.164 0.084 0.236 0.131l-0.007-0.004c-0.078 0.169-0.173 0.314-0.287 0.443l0.002-0.002c-0.544 0.726-0.741 1.088-0.717 1.31 0.024 0.205 0.040 0.212 0.537 0.212 0.027 0.001 0.059 0.001 0.091 0.001 0.533 0 1.043-0.096 1.515-0.271l-0.030 0.010c1.352-0.551 2.496-1.138 3.582-1.809l-0.103 0.059c0.704-0.485 1.508-0.922 2.358-1.271l0.086-0.031c0.102-0.025 0.442-0.087 0.742-0.142 0.42-0.055 0.906-0.087 1.4-0.087 0.647 0 1.282 0.054 1.899 0.159l-0.067-0.009c0.135 0.016 0.466 0.056 0.75 0.080 0.208 0.014 0.402 0.048 0.587 0.1l-0.020-0.005c0.033 0.015 0.592 0.046 1.247 0.070 1.167 0.032 1.38 0.009 1.625-0.236 0.256-0.353 0.467-0.761 0.613-1.199l0.009-0.032c0.261-0.804 0.521-1.151 0.457-0.615-0.1 1.117-0.418 2.14-0.912 3.055l0.021-0.042c-0.351 0.662-0.738 1.234-1.179 1.758l0.012-0.015c-0.402 0.434-0.394 0.45 0.11 0.394 0.991-0.155 1.876-0.516 2.641-1.039l-0.022 0.014c1.225-0.975 2.167-2.255 2.717-3.727l0.019-0.059c0.134-0.337 0.275-0.275 0.229 0.104-0.016 0.117-0.047 0.394-0.071 0.622l-0.039 0.41 0.441-0.252c1.245-0.867 2.178-2.107 2.644-3.555l0.014-0.049c0.473-1.33 0.936-2.995 1.294-4.699l0.047-0.269c0.106-0.524 0.223-0.961 0.363-1.387l-0.024 0.085c0.092-0.425 0.305-0.791 0.599-1.071l0.001-0.001c0.37-0.353 0.768-0.684 1.189-0.987l0.033-0.023c0.63-0.358 1.134-0.87 1.473-1.486l0.010-0.020c0.16-0.307 0.254-0.671 0.254-1.057 0-0.227-0.033-0.447-0.093-0.655l0.004 0.016c-0.165-0.252-0.355-0.245-0.954 0.008z"}))),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("svg",{className:"mongo-db-icon",width:60,height:60,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",fill:"#495057"},n.a.createElement("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),n.a.createElement("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),n.a.createElement("g",{id:"SVGRepo_iconCarrier"},n.a.createElement("circle",{className:"mongo-db-icon",cx:"512",cy:"512",r:"512",style:{fill:"#495057"}}),n.a.createElement("path",{d:"M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z",style:{fill:"#fff"}}))))),n.a.createElement("div",{className:"subheading mb-3"},"Workflow"),n.a.createElement("ul",{className:"fa-ul mb-0"},n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Cross Functional Teams"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Agile Development & Scrum"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"EDV")),n.a.createElement("div",{className:"subheading mb-3 language"},"Languages"),n.a.createElement("ul",{style:{paddingLeft:"20px",listStyle:"none"}},n.a.createElement("li",null,n.a.createElement("i",{class:"fa fa-language",style:{fontSize:"24px",position:"relative",fontSize:"24px",top:"4px",paddingRight:"10px"}}),"English B1"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-language",style:{fontSize:"24px",position:"relative",fontSize:"24px",top:"4px",paddingRight:"10px"}}),"German C1"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-language",style:{fontSize:"24px",position:"relative",fontSize:"24px",top:"4px",paddingRight:"10px"}}),"Arabic native language")))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex",id:"interests"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Interests"),n.a.createElement("p",null,"Learning from the new technologies that are turning the IT world upside down in all areas. Specifically, the programming technologies that are often used in practice."),n.a.createElement("p",{className:"mb-0"},"I like to travel and get to know new places, features, cultures and people.")))))},SDAe:function(e,t,a){e.exports=a.p+"static/Foto3-9f8836950d8f3fe2f30cd3f6e18b9f49.jpg"},TSYQ:function(e,t,a){var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=i(e,r(a)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=i(t,l));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()},W8MJ:function(e,t,a){var l=a("o5UB");function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,l(n.key),n)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=Array(t);a<t;a++)l[a]=e[a];return l},e.exports.__esModule=!0,e.exports.default=e.exports},YIkO:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("pVnL")),r=l(a("lSNA")),i=l(a("RIqP")),o=l(a("lwsE")),s=l(a("a1gu")),c=l(a("Nsbk")),m=l(a("PJYZ")),u=l(a("W8MJ")),f=l(a("7W2i")),d=l(a("17x9")),p=l(a("q1tI")),h=l(a("TSYQ")),g=l(a("Fxm3"));var v=function(e){function t(e){var a;return(0,o.default)(this,t),(a=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,f.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],l=0,n=e.length;l<n;l++)a[l]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],l=[],n=e||this.state.targetItems,r=!1,o=0,s=n.length;o<s;o++){var c=n[o],m=!r&&this._isInView(c);m?(r=!0,t.push(c)):a.push(c);var u=o===s-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&f&&(a.pop(),a.push.apply(a,(0,i.default)(t)),t=[c],l=this._fillArray(l,!1),m=!0),l.push(m)}return{inView:t,outView:a,viewStatusList:l,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(l)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,l=a.rootEl,n=a.offset;l&&(t=document.querySelector(l).getBoundingClientRect());var r=e.getBoundingClientRect(),i=l?t.height:window.innerHeight,o=this._getScrollDimension().scrollTop,s=o+i,c=l?r.top+o-t.top+n:r.top+o+n,m=c+e.offsetHeight;return c<s&&m>o}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,l=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=l}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),l=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(l)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,g.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,l=a.children,i=a.className,o=a.scrolledPastClassName,s=a.style,c=0,m=p.default.Children.map(l,(function(t,a){var l;if(!t)return null;var i=t.type,s=o&&e.state.isScrolledPast[a],m=(0,h.default)((l={},(0,r.default)(l,"".concat(t.props.className),t.props.className),(0,r.default)(l,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,r.default)(l,"".concat(e.props.scrolledPastClassName),s),l));return p.default.createElement(i,(0,n.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,h.default)((0,r.default)({},"".concat(i),i));return p.default.createElement(t,{className:u,style:s},m)}}]),t}(p.default.Component);t.default=v},ZhPi:function(e,t,a){var l=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return l(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},a1gu:function(e,t,a){var l=a("cDf5").default,n=a("PJYZ");e.exports=function(e,t){if(t&&("object"==l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,l=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:l.prototype.scroll||o,scrollIntoView:l.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var a=f(this),l=a.getBoundingClientRect(),r=this.getBoundingClientRect();a!==t.body?(p.call(this,a,a.scrollLeft+r.left-l.left,a.scrollTop+r.top-l.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function o(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function m(t,a){var l=e.getComputedStyle(t,null)["overflow"+a];return"auto"===l||"scroll"===l}function u(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function d(t){var a,l,n,i,o=(r()-t.startTime)/468;i=o=o>1?1:o,a=.5*(1-Math.cos(Math.PI*i)),l=t.startX+(t.x-t.startX)*a,n=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,l,n),l===t.x&&n===t.y||e.requestAnimationFrame(d.bind(e,t))}function p(a,l,i){var s,c,m,u,f=r();a===t.body?(s=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=n.scroll):(s=a,c=a.scrollLeft,m=a.scrollTop,u=o),d({scrollable:s,method:u,startTime:f,startX:c,startY:m,x:l,y:i})}}}}()},lSNA:function(e,t,a){var l=a("o5UB");e.exports=function(e,t,a){return(t=l(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.__esModule=!0,e.exports.default=e.exports},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},o5UB:function(e,t,a){var l=a("cDf5").default,n=a("5Q0V");e.exports=function(e){var t=n(e,"string");return"symbol"==l(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},obyI:function(e,t){e.exports={siteTitle:"Resume",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#b8b8b8",manifestThemeColor:"#0049bf",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/cv",firstName:"Abdullah",lastName:"Khdir",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/AbdullahKhdir"}],getEmail:function(){return"abdullahkhder77@gmail.com"},getPhone:function(){return"+49-1577 1191 488"},getAddress:function(){return"DL, Germany, Nuremberg"},calculateAge:function(e){let t=new Date(e),a=new Date,l=a.getFullYear()-t.getFullYear(),n=a.getMonth()-t.getMonth(),r=a.getDate()-t.getDate();return(n<0||0===n&&r<0)&&l--,l}}}}]);
//# sourceMappingURL=component---src-pages-index-js-c4aa23d43b087b39e06b.js.map