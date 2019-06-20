module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")},function(e,n,t){e.exports=t(3)},function(e,n,t){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t(4));n.TextInput=o.default,n.TextInputStyle=o.TextInputStyle,n.Patterns=o.Patterns;var a=r(t(6));n.Switch=a.default,n.SwitchStyle=a.SwitchStyle;var i=r(t(7));n.Checkbox=i.default,n.CheckboxStyle=i.CheckboxStyle;var l=r(t(8));n.Radio=l.default,n.RadioStyle=l.RadioStyle;var s=r(t(9));n.TextArea=s.default,n.TextAreaStyle=s.TextAreaStyle},function(e,n,t){"use strict";var r,o=this&&this.__extends||(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),a=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var l=i(t(0)),s=t(1);t(5),function(e){e.MOBILE="06[0-9]{8}",e.EMAIL=".+@.+\\.[a-z]{2,3}"}(n.Patterns||(n.Patterns={}));var p=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={errorMessage:n.props.errorMessage||"Voer een geldige waarde in",maxLength:n.props.maxLength||null,minLength:n.props.minLength||null,required:n.props.required||!1,type:n.props.type||"text",value:""},n.checkValue=function(e){var t=e.target.value;t?(e.currentTarget.setCustomValidity(""),n.setState({value:t})):n.setState({value:""}),n.props.onChange&&n.props.onChange(e),n.props.localStorage&&n.store(t)},n.store=function(e){e?localStorage.setItem("fd-input-"+n.props.id,e):localStorage.removeItem("fd-input-"+n.props.id)},n.handleInvalid=function(e){e.currentTarget.setCustomValidity(n.state.errorMessage)},n}return o(n,e),n.prototype.componentDidMount=function(){var e=this.props.localStorage?localStorage.getItem("fd-input-"+this.props.id):this.props.value||"";e&&this.setState({value:e})},n.prototype.componentDidUpdate=function(e){e.value!==this.props.value&&this.state.value!==this.props.value&&this.setState({value:this.props.value})},n.prototype.render=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(m,null),l.default.createElement("div",{className:"fd-input"+(this.props.className?" "+this.props.className:"")},l.default.createElement("div",{className:"input"},l.default.createElement("input",{id:this.props.id,name:this.props.name?this.props.name:this.props.id,type:this.state.type,minLength:this.state.minLength,maxLength:this.state.maxLength,onChange:this.checkValue,value:this.state.value,required:this.state.required,pattern:this.props.pattern,onInvalid:this.handleInvalid,title:this.props.title?this.props.title:this.props.label||"Value",onFocus:this.props.onFocus,onBlur:this.props.onBlur,placeholder:this.props.placeholder?this.props.placeholder:" "}),l.default.createElement("label",{htmlFor:this.props.id},this.props.label||"Value"," ",l.default.createElement("i",{className:"icon-check"})),"date"!==this.state.type&&"datetime"!==this.state.type?l.default.createElement("div",{className:"input-message error-message"},this.props.errorMessage):null,l.default.createElement("div",{className:"input-message"},this.props.description))))},n}(l.default.PureComponent);n.default=p;var u=s.css(c||(c=a(["\n.fd-input {\n    display: inline-block;\n\n    i {\n        transition: .4s opacity ease-out;\n        opacity: 0;\n        position: relative;\n        color: #3CAB87;\n    }\n\n    p {\n        font-size: 12px;\n        color: #677381;\n    }\n\n    .input {\n        position: relative;\n        float: left;\n        font-family: 'ProximaNovaRegular',sans-serif;\n        width: 100%;\n        input {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            padding: 1.4rem 1rem .6rem 1rem;\n            font-size: 1rem;\n            vertical-align: bottom;\n            border: none;\n            border-bottom: 0.125rem solid #ccbeb3;\n            &:hover {\n                border-color: #99908a;\n            }\n            &:valid {\n                border-color: #49a3a1;\n            }\n            &:focus {\n                border: none;\n                border-bottom: 0.125rem solid #49a3a1;\n            }\n            border-radius: 0.1875rem;\n            box-sizing: border-box;\n            width: 100%;\n            height: unset;\n            outline: none;\n            margin: unset;\n            color: #191919;\n        }\n\n        label {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            position: absolute;\n            top: 1.2rem;\n            left: 1rem;\n            line-height: 1;\n            padding: 0;\n            transition: all .1s ease-out;\n            color: #677381;\n            font-size: 1rem;\n            user-select: none;\n            white-space: nowrap;\n            cursor: text;\n        }\n\n        @supports (-ms-ime-align:auto) {\n            input ~ label {\n                font-size: .75rem;\n                top: .5rem;\n            }\n        }\n\n        input:not([type=\"date\"]):not([type=\"datetime\"]):not([placeholder=' ']) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n        input:not(:placeholder-shown) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n        input:not(:-ms-input-placeholder) ~ label,\n        input:-ms-input-placeholder:not([placeholder=' ']) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n\n        input[type=\"date\"] ~ label,\n        input[type=\"datetime\"] ~ label,\n        input:focus ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n\n        .input-message {\n            transition: all .3s ease-out;\n            font-size: .75rem;\n            color: #677382;\n            line-height: 1;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            font-weight: normal;\n            margin-left: 1rem;\n            &:not(.error-message):not(:empty) {\n                max-height: 5rem;\n                margin: .5rem 1rem;\n            }\n        }\n        .error-message {\n            opacity: 0;\n            color: #F57268;\n            max-height: 0;\n            font-family: 'ProximaNovaBold', sans-serif;\n        }\n    }\n\n    /**\n     * input validation styles\n     */\n    input:not(:required):focus ~ label > i,\n    input:required:valid ~ label > i,\n    input:not(:required):valid:not([placeholder=' ']) ~ label > i {\n        opacity: 1;\n    }\n    input:not(:required):not(:placeholder-shown):valid ~ label > i {\n        opacity: 1;\n    }\n    input:not(:required):not(:-ms-input-placeholder):valid ~ label > i {\n        opacity: 1;\n    }\n\n    input:not([type='date']):not([type='datetime']):required:not(:valid):not(:placeholder-shown):not(:focus) {\n        border-color: #F57268;\n    }\n\n    input:required:not(:valid):not(:placeholder-shown):not(:focus) ~ .error-message:not(:empty) {\n        max-height: 5rem;\n        opacity: 1;\n        margin: .5rem 1rem;\n    }\n    input:required:not(:valid):not(:-ms-input-placeholder):not(:focus) ~ .error-message:not(:empty) {\n        max-height: 5rem;\n        opacity: 1;\n        margin: .5rem 1rem;\n    }\n}\n"],["\n.fd-input {\n    display: inline-block;\n\n    i {\n        transition: .4s opacity ease-out;\n        opacity: 0;\n        position: relative;\n        color: #3CAB87;\n    }\n\n    p {\n        font-size: 12px;\n        color: #677381;\n    }\n\n    .input {\n        position: relative;\n        float: left;\n        font-family: 'ProximaNovaRegular',sans-serif;\n        width: 100%;\n        input {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            padding: 1.4rem 1rem .6rem 1rem;\n            font-size: 1rem;\n            vertical-align: bottom;\n            border: none;\n            border-bottom: 0.125rem solid #ccbeb3;\n            &:hover {\n                border-color: #99908a;\n            }\n            &:valid {\n                border-color: #49a3a1;\n            }\n            &:focus {\n                border: none;\n                border-bottom: 0.125rem solid #49a3a1;\n            }\n            border-radius: 0.1875rem;\n            box-sizing: border-box;\n            width: 100%;\n            height: unset;\n            outline: none;\n            margin: unset;\n            color: #191919;\n        }\n\n        label {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            position: absolute;\n            top: 1.2rem;\n            left: 1rem;\n            line-height: 1;\n            padding: 0;\n            transition: all .1s ease-out;\n            color: #677381;\n            font-size: 1rem;\n            user-select: none;\n            white-space: nowrap;\n            cursor: text;\n        }\n\n        @supports (-ms-ime-align:auto) {\n            input ~ label {\n                font-size: .75rem;\n                top: .5rem;\n            }\n        }\n\n        input:not([type=\"date\"]):not([type=\"datetime\"]):not([placeholder=' ']) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n        input:not(:placeholder-shown) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n        input:not(:-ms-input-placeholder) ~ label,\n        input:-ms-input-placeholder:not([placeholder=' ']) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n\n        input[type=\"date\"] ~ label,\n        input[type=\"datetime\"] ~ label,\n        input:focus ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n\n        .input-message {\n            transition: all .3s ease-out;\n            font-size: .75rem;\n            color: #677382;\n            line-height: 1;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            font-weight: normal;\n            margin-left: 1rem;\n            &:not(.error-message):not(:empty) {\n                max-height: 5rem;\n                margin: .5rem 1rem;\n            }\n        }\n        .error-message {\n            opacity: 0;\n            color: #F57268;\n            max-height: 0;\n            font-family: 'ProximaNovaBold', sans-serif;\n        }\n    }\n\n    /**\n     * input validation styles\n     */\n    input:not(:required):focus ~ label > i,\n    input:required:valid ~ label > i,\n    input:not(:required):valid:not([placeholder=' ']) ~ label > i {\n        opacity: 1;\n    }\n    input:not(:required):not(:placeholder-shown):valid ~ label > i {\n        opacity: 1;\n    }\n    input:not(:required):not(:-ms-input-placeholder):valid ~ label > i {\n        opacity: 1;\n    }\n\n    input:not([type='date']):not([type='datetime']):required:not(:valid):not(:placeholder-shown):not(:focus) {\n        border-color: #F57268;\n    }\n\n    input:required:not(:valid):not(:placeholder-shown):not(:focus) ~ .error-message:not(:empty) {\n        max-height: 5rem;\n        opacity: 1;\n        margin: .5rem 1rem;\n    }\n    input:required:not(:valid):not(:-ms-input-placeholder):not(:focus) ~ .error-message:not(:empty) {\n        max-height: 5rem;\n        opacity: 1;\n        margin: .5rem 1rem;\n    }\n}\n"])));n.TextInputStyle=u;var c,d,m=s.createGlobalStyle(d||(d=a(["",""],["",""])),u)},function(e,n){e.exports=require("date-input-polyfill")},function(e,n,t){"use strict";var r,o=this&&this.__extends||(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),a=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var l=i(t(0)),s=t(1),p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return o(n,e),n.prototype.render=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(m,null),l.default.createElement("div",{className:"fd-input-switch"+(this.props.className?" "+this.props.className:"")},l.default.createElement("label",{className:"switch-container"},l.default.createElement("input",{type:"checkbox",name:this.props.name?this.props.name:this.props.id,value:this.props.value?this.props.value:"1",defaultChecked:this.props.defaultChecked}),l.default.createElement("span",{className:"switch"}),l.default.createElement("span",{className:"switch-label"},this.props.label))))},n}(l.PureComponent);n.default=p;var u=s.css(c||(c=a(["\n.fd-input-switch {\n    input {\n        opacity: 0;\n        position: absolute;\n    }\n    .switch {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        width: 2.5rem;\n        height: 1.5rem;\n        display: inline-block;\n        margin-right: .5rem;\n        margin-bottom: .5rem;\n        cursor: pointer;\n        &:before {\n            content: '';\n            position: absolute;\n            box-sizing: border-box;\n            transition: border-color .3s;\n            background-color: #fff;\n            transition: all .3s ease-out;\n            width: 100%;\n            height: 1rem;\n            top: .25rem;\n            border-radius: .5rem;\n            background-color: #f3f3f3;\n        }\n        &:after {\n            content: '';\n            position: absolute;\n            transition: all .3s ease-out;\n            transform: rotate(-45deg);\n            width: 1.5rem;\n            height: 1.5rem;\n            border-radius: 50%;\n            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);\n            background-color: #999;\n            left: 0;\n            top: 0;\n        }\n    }\n\n    input:checked ~ .switch {\n        &:before {\n            background-color: rgba(225, 132, 43, 0.5);\n            border-radius: .5rem;\n        }\n        &:after {\n            left: calc(100% - 1.5rem);\n            background-color: #E1842B;\n        }\n    }\n\n    .switch-label {\n        user-select: none;\n        cursor: pointer;\n        font-size: 1rem;\n        color: #191919;\n        position: relative;\n        top: -1rem;\n        font-family: 'ProximaNovaRegular', sans-serif;\n    }\n}\n"],["\n.fd-input-switch {\n    input {\n        opacity: 0;\n        position: absolute;\n    }\n    .switch {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        width: 2.5rem;\n        height: 1.5rem;\n        display: inline-block;\n        margin-right: .5rem;\n        margin-bottom: .5rem;\n        cursor: pointer;\n        &:before {\n            content: '';\n            position: absolute;\n            box-sizing: border-box;\n            transition: border-color .3s;\n            background-color: #fff;\n            transition: all .3s ease-out;\n            width: 100%;\n            height: 1rem;\n            top: .25rem;\n            border-radius: .5rem;\n            background-color: #f3f3f3;\n        }\n        &:after {\n            content: '';\n            position: absolute;\n            transition: all .3s ease-out;\n            transform: rotate(-45deg);\n            width: 1.5rem;\n            height: 1.5rem;\n            border-radius: 50%;\n            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);\n            background-color: #999;\n            left: 0;\n            top: 0;\n        }\n    }\n\n    input:checked ~ .switch {\n        &:before {\n            background-color: rgba(225, 132, 43, 0.5);\n            border-radius: .5rem;\n        }\n        &:after {\n            left: calc(100% - 1.5rem);\n            background-color: #E1842B;\n        }\n    }\n\n    .switch-label {\n        user-select: none;\n        cursor: pointer;\n        font-size: 1rem;\n        color: #191919;\n        position: relative;\n        top: -1rem;\n        font-family: 'ProximaNovaRegular', sans-serif;\n    }\n}\n"])));n.SwitchStyle=u;var c,d,m=s.createGlobalStyle(d||(d=a(["",""],["",""])),u)},function(e,n,t){"use strict";var r,o=this&&this.__extends||(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),a=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var l=i(t(0)),s=t(1),p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return o(n,e),n.prototype.render=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(m,null),l.default.createElement("label",{className:"fd-checkbox"},l.default.createElement("input",{id:this.props.id,type:"checkbox",name:this.props.name?this.props.name:this.props.id,value:this.props.value,defaultChecked:this.props.defaultChecked}),l.default.createElement("span",{className:"checkbox"},this.props.label)))},n}(l.PureComponent);n.default=p;var u=s.css(c||(c=a(["\n.fd-checkbox {\n    input {\n        opacity: 0;\n        position: absolute;\n    }\n    .checkbox {\n        user-select: none;\n        position: relative;\n        display: inline-block;\n        padding-left: 1.5rem;\n        margin-right: 1rem;\n        margin-bottom: .5rem;\n        cursor: pointer;\n        color: #191919;\n        font-size: 1rem;\n        font-family: 'ProximaNovaRegular', sans-serif;\n        &:before {\n            content: '';\n            position: absolute;\n            box-sizing: border-box;\n            left: 0;\n            top: .25rem;\n            width: 1rem;\n            height: 1rem;\n            border: .0625rem solid #ccbeb3;\n            border-radius: .125rem;\n            transition: border-color .3s;\n            background-color: #fff;\n        }\n        &:after {\n            content: '';\n            position: absolute;\n            left: .1875rem;\n            top: .5rem;\n            width: .5rem;\n            height: .2rem;\n            border-left: .125rem solid #fff;\n            border-bottom: .125rem solid #fff;\n            opacity: 0;\n            transition: all .3s;\n            transform: rotate(-45deg);\n        }\n    }\n\n    input:checked ~ .checkbox {\n        &:before {\n            background-color: #E1842B;\n        }\n        &:after {\n            opacity: 1;\n        }\n    }\n}\n"],["\n.fd-checkbox {\n    input {\n        opacity: 0;\n        position: absolute;\n    }\n    .checkbox {\n        user-select: none;\n        position: relative;\n        display: inline-block;\n        padding-left: 1.5rem;\n        margin-right: 1rem;\n        margin-bottom: .5rem;\n        cursor: pointer;\n        color: #191919;\n        font-size: 1rem;\n        font-family: 'ProximaNovaRegular', sans-serif;\n        &:before {\n            content: '';\n            position: absolute;\n            box-sizing: border-box;\n            left: 0;\n            top: .25rem;\n            width: 1rem;\n            height: 1rem;\n            border: .0625rem solid #ccbeb3;\n            border-radius: .125rem;\n            transition: border-color .3s;\n            background-color: #fff;\n        }\n        &:after {\n            content: '';\n            position: absolute;\n            left: .1875rem;\n            top: .5rem;\n            width: .5rem;\n            height: .2rem;\n            border-left: .125rem solid #fff;\n            border-bottom: .125rem solid #fff;\n            opacity: 0;\n            transition: all .3s;\n            transform: rotate(-45deg);\n        }\n    }\n\n    input:checked ~ .checkbox {\n        &:before {\n            background-color: #E1842B;\n        }\n        &:after {\n            opacity: 1;\n        }\n    }\n}\n"])));n.CheckboxStyle=u;var c,d,m=s.createGlobalStyle(d||(d=a(["",""],["",""])),u)},function(e,n,t){"use strict";var r,o=this&&this.__extends||(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),a=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var l=i(t(0)),s=t(1),p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return o(n,e),n.prototype.render=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(m,null),l.default.createElement("label",{className:"fd-input-radio"},l.default.createElement("input",{id:this.props.id,type:"radio",name:this.props.name?this.props.name:this.props.id,value:this.props.value,defaultChecked:this.props.defaultChecked}),l.default.createElement("span",{className:"radio"},this.props.label)))},n}(l.PureComponent);n.default=p;var u=s.css(c||(c=a(["\n.fd-input-radio {\n    line-height: 1.5;\n    color: #191919;\n    input {\n        opacity: 0;\n        position: absolute;\n    }\n    .radio {\n        user-select: none;\n        position: relative;\n        z-index: 1;\n        display: inline-block;\n        padding-left: 1.5rem;\n        margin-right: 1rem;\n        margin-bottom: .5rem;\n        cursor: pointer;\n        color: #191919;\n        font-size: 1rem;\n        line-height: 1.5;\n        font-family: 'ProximaNovaRegular', sans-serif;\n        border-radius: 50%;\n        &:before {\n            content: '';\n            position: absolute;\n            box-sizing: border-box;\n            left: 0;\n            top: .25rem;\n            width: 1rem;\n            height: 1rem;\n            border: .0625rem solid #ccbeb3;\n            transition: border-color .3s;\n            background-color: #fff;\n            border-radius: 50%;\n        }\n        &:after {\n            content: '';\n            position: absolute;\n            left: .1875rem;\n            top: .5rem;\n            width: .5rem;\n            height: .2rem;\n            border-left: .125rem solid #fff;\n            border-bottom: .125rem solid #fff;\n            opacity: 0;\n            transition: all .3s;\n            transform: rotate(-45deg);\n            border-radius: 50%;\n        }\n    }\n\n    input:focus ~ .radio {\n        &:before {\n            border-color: #49a3a1;\n        }\n    }\n\n    input:checked ~ .radio {\n        &:after {\n            opacity: 1;\n            background-color: #E1842B;\n            border: none;\n            width: .75rem;\n            height: .75rem;\n            left: .125rem;\n            top: .375rem;\n        }\n    }\n}\n"],["\n.fd-input-radio {\n    line-height: 1.5;\n    color: #191919;\n    input {\n        opacity: 0;\n        position: absolute;\n    }\n    .radio {\n        user-select: none;\n        position: relative;\n        z-index: 1;\n        display: inline-block;\n        padding-left: 1.5rem;\n        margin-right: 1rem;\n        margin-bottom: .5rem;\n        cursor: pointer;\n        color: #191919;\n        font-size: 1rem;\n        line-height: 1.5;\n        font-family: 'ProximaNovaRegular', sans-serif;\n        border-radius: 50%;\n        &:before {\n            content: '';\n            position: absolute;\n            box-sizing: border-box;\n            left: 0;\n            top: .25rem;\n            width: 1rem;\n            height: 1rem;\n            border: .0625rem solid #ccbeb3;\n            transition: border-color .3s;\n            background-color: #fff;\n            border-radius: 50%;\n        }\n        &:after {\n            content: '';\n            position: absolute;\n            left: .1875rem;\n            top: .5rem;\n            width: .5rem;\n            height: .2rem;\n            border-left: .125rem solid #fff;\n            border-bottom: .125rem solid #fff;\n            opacity: 0;\n            transition: all .3s;\n            transform: rotate(-45deg);\n            border-radius: 50%;\n        }\n    }\n\n    input:focus ~ .radio {\n        &:before {\n            border-color: #49a3a1;\n        }\n    }\n\n    input:checked ~ .radio {\n        &:after {\n            opacity: 1;\n            background-color: #E1842B;\n            border: none;\n            width: .75rem;\n            height: .75rem;\n            left: .125rem;\n            top: .375rem;\n        }\n    }\n}\n"])));n.RadioStyle=u;var c,d,m=s.createGlobalStyle(d||(d=a(["",""],["",""])),u)},function(e,n,t){"use strict";var r,o=this&&this.__extends||(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),a=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var l=i(t(0)),s=t(1),p=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={errorMessage:n.props.errorMessage||"Voer een geldige waarde in",maxLength:n.props.maxLength||null,minLength:n.props.minLength||null,required:n.props.required||!1,value:""},n.checkValue=function(e){var t=e.target.value;t?(e.currentTarget.setCustomValidity(""),n.setState({value:t})):n.setState({value:""}),n.props.onChange&&n.props.onChange(e),n.props.localStorage&&n.store(t)},n.store=function(e){e?localStorage.setItem("fd-textarea-"+n.props.id,e):localStorage.removeItem("fd-textarea-"+n.props.id)},n.handleInvalid=function(e){e.currentTarget.setCustomValidity(n.state.errorMessage)},n}return o(n,e),n.prototype.componentDidMount=function(){var e=this.props.localStorage?localStorage.getItem("fd-textarea-"+this.props.id):this.props.value||"";e&&this.setState({value:e})},n.prototype.render=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(m,null),l.default.createElement("div",{className:"fd-textarea"+(this.props.className?" "+this.props.className:"")},l.default.createElement("div",{className:"textarea"},l.default.createElement("textarea",{id:this.props.id,name:this.props.name?this.props.name:this.props.id,minLength:this.state.minLength,maxLength:this.state.maxLength,onChange:this.checkValue,value:this.state.value,required:this.state.required,onInvalid:this.handleInvalid,title:this.props.title?this.props.title:this.props.label||"Value",onFocus:this.props.onFocus,onBlur:this.props.onBlur,placeholder:this.props.placeholder?this.props.placeholder:" "}),l.default.createElement("label",{htmlFor:this.props.id},this.props.label||"Value"," ",l.default.createElement("i",{className:"icon-check"})),l.default.createElement("div",{className:"textarea-message error-message"},this.props.errorMessage),l.default.createElement("div",{className:"textarea-message"},this.props.description))))},n}(l.default.PureComponent);n.default=p;var u=s.css(c||(c=a(["\n.fd-textarea {\n    display: inline-block;\n\n    i {\n        transition: .4s opacity ease-out;\n        opacity: 0;\n        position: relative;\n        color: #3CAB87;\n    }\n\n    p {\n        font-size: 12px;\n        color: #677381;\n    }\n\n    .textarea {\n        position: relative;\n        float: left;\n        font-family: 'ProximaNovaRegular',sans-serif;\n        width: 100%;\n        textarea {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            padding: 1.4rem 1rem .6rem 1rem;\n            font-size: 1rem;\n            vertical-align: bottom;\n            border: none;\n            border-bottom: 0.125rem solid #ccbeb3;\n            &:hover {\n                border-color: #99908a;\n            }\n            &:valid {\n                border-color: #49a3a1;\n            }\n            &:focus {\n                border: none;\n                border-bottom: 0.125rem solid #49a3a1;\n            }\n            border-radius: 0.1875rem;\n            box-sizing: border-box;\n            width: 100%;\n            height: unset;\n            outline: none;\n            margin: unset;\n            color: #191919;\n        }\n\n        label {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            position: absolute;\n            top: 1.2rem;\n            left: 1rem;\n            line-height: 1;\n            padding: 0;\n            transition: all .1s ease-out;\n            color: #677381;\n            font-size: 1rem;\n            user-select: none;\n            white-space: nowrap;\n            cursor: text;\n        }\n\n        @supports (-ms-ime-align:auto) {\n            textarea ~ label {\n                font-size: .75rem;\n                top: .5rem;\n            }\n        }\n\n        textarea:not([placeholder=' ']) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n        textarea:not(:placeholder-shown) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n        textarea:not(:-ms-input-placeholder) ~ label,\n        textarea:-ms-input-placeholder:not([placeholder=' ']) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n        textarea:focus ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n\n        .textarea-message {\n            transition: all .3s ease-out;\n            font-size: .75rem;\n            color: #677382;\n            line-height: 1;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            font-weight: normal;\n            margin-left: 1rem;\n            &:not(.error-message):not(:empty) {\n                max-height: 5rem;\n                margin: .5rem 1rem;\n            }\n        }\n        .error-message {\n            opacity: 0;\n            color: #F57268;\n            max-height: 0;\n            font-family: 'ProximaNovaBold', sans-serif;\n        }\n    }\n\n    /**\n     * textarea validation styles\n     */\n    textarea:not(:required):focus ~ label > i,\n    textarea:required:valid ~ label > i,\n    textarea:not(:required):valid:not([placeholder=' ']) ~ label > i {\n        opacity: 1;\n    }\n    textarea:not(:required):not(:placeholder-shown):valid ~ label > i {\n        opacity: 1;\n    }\n    textarea:not(:required):not(:-ms-input-placeholder):valid ~ label > i {\n        opacity: 1;\n    }\n\n    textarea:required:not(:valid):not(:placeholder-shown):not(:focus) {\n        border-color: #F57268;\n    }\n\n    textarea:required:not(:valid):not(:placeholder-shown):not(:focus) ~ .error-message:not(:empty) {\n        max-height: 5rem;\n        opacity: 1;\n        margin: .5rem 1rem;\n    }\n    textarea:required:not(:valid):not(:-ms-input-placeholder):not(:focus) ~ .error-message:not(:empty) {\n        max-height: 5rem;\n        opacity: 1;\n        margin: .5rem 1rem;\n    }\n}\n"],["\n.fd-textarea {\n    display: inline-block;\n\n    i {\n        transition: .4s opacity ease-out;\n        opacity: 0;\n        position: relative;\n        color: #3CAB87;\n    }\n\n    p {\n        font-size: 12px;\n        color: #677381;\n    }\n\n    .textarea {\n        position: relative;\n        float: left;\n        font-family: 'ProximaNovaRegular',sans-serif;\n        width: 100%;\n        textarea {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            padding: 1.4rem 1rem .6rem 1rem;\n            font-size: 1rem;\n            vertical-align: bottom;\n            border: none;\n            border-bottom: 0.125rem solid #ccbeb3;\n            &:hover {\n                border-color: #99908a;\n            }\n            &:valid {\n                border-color: #49a3a1;\n            }\n            &:focus {\n                border: none;\n                border-bottom: 0.125rem solid #49a3a1;\n            }\n            border-radius: 0.1875rem;\n            box-sizing: border-box;\n            width: 100%;\n            height: unset;\n            outline: none;\n            margin: unset;\n            color: #191919;\n        }\n\n        label {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            position: absolute;\n            top: 1.2rem;\n            left: 1rem;\n            line-height: 1;\n            padding: 0;\n            transition: all .1s ease-out;\n            color: #677381;\n            font-size: 1rem;\n            user-select: none;\n            white-space: nowrap;\n            cursor: text;\n        }\n\n        @supports (-ms-ime-align:auto) {\n            textarea ~ label {\n                font-size: .75rem;\n                top: .5rem;\n            }\n        }\n\n        textarea:not([placeholder=' ']) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n        textarea:not(:placeholder-shown) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n        textarea:not(:-ms-input-placeholder) ~ label,\n        textarea:-ms-input-placeholder:not([placeholder=' ']) ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n        textarea:focus ~ label {\n            font-size: .75rem;\n            top: .5rem;\n        }\n\n        .textarea-message {\n            transition: all .3s ease-out;\n            font-size: .75rem;\n            color: #677382;\n            line-height: 1;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            font-weight: normal;\n            margin-left: 1rem;\n            &:not(.error-message):not(:empty) {\n                max-height: 5rem;\n                margin: .5rem 1rem;\n            }\n        }\n        .error-message {\n            opacity: 0;\n            color: #F57268;\n            max-height: 0;\n            font-family: 'ProximaNovaBold', sans-serif;\n        }\n    }\n\n    /**\n     * textarea validation styles\n     */\n    textarea:not(:required):focus ~ label > i,\n    textarea:required:valid ~ label > i,\n    textarea:not(:required):valid:not([placeholder=' ']) ~ label > i {\n        opacity: 1;\n    }\n    textarea:not(:required):not(:placeholder-shown):valid ~ label > i {\n        opacity: 1;\n    }\n    textarea:not(:required):not(:-ms-input-placeholder):valid ~ label > i {\n        opacity: 1;\n    }\n\n    textarea:required:not(:valid):not(:placeholder-shown):not(:focus) {\n        border-color: #F57268;\n    }\n\n    textarea:required:not(:valid):not(:placeholder-shown):not(:focus) ~ .error-message:not(:empty) {\n        max-height: 5rem;\n        opacity: 1;\n        margin: .5rem 1rem;\n    }\n    textarea:required:not(:valid):not(:-ms-input-placeholder):not(:focus) ~ .error-message:not(:empty) {\n        max-height: 5rem;\n        opacity: 1;\n        margin: .5rem 1rem;\n    }\n}\n"])));n.TextAreaStyle=u;var c,d,m=s.createGlobalStyle(d||(d=a(["",""],["",""])),u)}]);