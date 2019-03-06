module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";var r,o=this&&this.__extends||(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),a=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var l=i(t(2)),s=t(3);!function(e){e.MOBILE="06[0-9]{8}",e.EMAIL=".+@.+\\.[a-z]{2,3}"}(n.Patterns||(n.Patterns={}));var u=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={errorMessage:n.props.errorMessage||"Voer een geldige waarde in",hasValue:!1,maxLength:n.props.maxLength||null,minLength:n.props.minLength||null,required:n.props.required||!1,type:n.props.type||"text",value:""},n.checkValue=function(e){var t=e.target.value;t?(e.currentTarget.setCustomValidity(""),n.setState({hasValue:!0,value:t})):n.setState({hasValue:!1,value:""}),n.props.onChange&&n.props.onChange(e),n.props.localStorage&&n.store(t)},n.store=function(e){e?localStorage.setItem("fd-input-"+n.props.id,e):localStorage.removeItem("fd-input-"+n.props.id)},n.handleInvalid=function(e){e.currentTarget.setCustomValidity(n.state.errorMessage)},n}return o(n,e),n.prototype.componentDidMount=function(){var e=this.props.localStorage?localStorage.getItem("fd-input-"+this.props.id):this.props.value||"";e&&this.setState({hasValue:!0,value:e})},n.prototype.render=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(c,null),l.default.createElement("div",{className:"fd-input"+(this.props.className?" "+this.props.className:"")},l.default.createElement("div",{className:"input"},l.default.createElement("input",{className:this.state.hasValue?"has-value":"",id:this.props.id,name:this.props.name?this.props.name:this.props.id,type:this.state.type,minLength:this.state.minLength,maxLength:this.state.maxLength,onChange:this.checkValue,value:this.state.value,required:this.state.required,pattern:this.props.pattern,onInvalid:this.handleInvalid,title:this.props.title?this.props.title:this.props.label||"Value",onFocus:this.props.onFocus,onBlur:this.props.onBlur,placeholder:" "}),l.default.createElement("label",{htmlFor:this.props.id},this.props.label||"Value"," ",l.default.createElement("i",{className:"icon-check"})))))},n}(l.default.PureComponent);n.default=u;var p,c=s.createGlobalStyle(p||(p=a(["\n.fd-input {\n    display: inline-block;\n    i {\n        transition: .4s opacity ease-out;\n        opacity: 0;\n        position: relative;\n        color: #3CAB87;\n    }\n    input:not(:required):not(:placeholder-shown) ~ label > i,\n    input:required:valid ~ label > i {\n        opacity: 1;\n    }\n    p {\n        font-size: 12px;\n        color: #677381;\n    }\n\n    .input {\n        position: relative;\n        float: left;\n        font-family: 'ProximaNovaRegular',sans-serif;\n        width: 100%;\n        input {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            padding: 1.4rem 1rem .6rem 1rem;\n            font-size: 1rem;\n            vertical-align: bottom;\n            border: none;\n            border-bottom: 0.125rem solid #ccbeb3;\n            &:hover {\n                border-color: #99908a;\n            }\n            &:valid {\n                border-color: #49a3a1;\n            }\n            &:focus {\n                border: none;\n                border-bottom: 0.125rem solid #49a3a1;\n            }\n            border-radius: 0.1875rem;\n            box-sizing: border-box;\n            width: 100%;\n            height: unset;\n            outline: none;\n            margin: unset;\n            color: #191919;\n        }\n        label {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            position: absolute;\n            top: 1.2rem;\n            left: 1rem;\n            line-height: 1;\n            padding: 0;\n            transition: all .1s;\n            color: #677381;\n            font-size: 1rem;\n            user-select: none;\n            white-space: nowrap;\n            cursor: text;\n        }\n        input:focus ~ label,\n        input.has-value ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n    }\n}\n"],["\n.fd-input {\n    display: inline-block;\n    i {\n        transition: .4s opacity ease-out;\n        opacity: 0;\n        position: relative;\n        color: #3CAB87;\n    }\n    input:not(:required):not(:placeholder-shown) ~ label > i,\n    input:required:valid ~ label > i {\n        opacity: 1;\n    }\n    p {\n        font-size: 12px;\n        color: #677381;\n    }\n\n    .input {\n        position: relative;\n        float: left;\n        font-family: 'ProximaNovaRegular',sans-serif;\n        width: 100%;\n        input {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            padding: 1.4rem 1rem .6rem 1rem;\n            font-size: 1rem;\n            vertical-align: bottom;\n            border: none;\n            border-bottom: 0.125rem solid #ccbeb3;\n            &:hover {\n                border-color: #99908a;\n            }\n            &:valid {\n                border-color: #49a3a1;\n            }\n            &:focus {\n                border: none;\n                border-bottom: 0.125rem solid #49a3a1;\n            }\n            border-radius: 0.1875rem;\n            box-sizing: border-box;\n            width: 100%;\n            height: unset;\n            outline: none;\n            margin: unset;\n            color: #191919;\n        }\n        label {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            position: absolute;\n            top: 1.2rem;\n            left: 1rem;\n            line-height: 1;\n            padding: 0;\n            transition: all .1s;\n            color: #677381;\n            font-size: 1rem;\n            user-select: none;\n            white-space: nowrap;\n            cursor: text;\n        }\n        input:focus ~ label,\n        input.has-value ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n    }\n}\n"])));n.StyledInput=c},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")}]);