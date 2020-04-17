/**
 * @fileoverview 用于定义vuex async 的命名
 * @author xii
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/vuex-dispatch-name"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
    "parserOptions": {
        "ecmaVersion": 2017
    }
});

ruleTester.run("vuex-dispatch-name", rule, {

    valid: [
        {
            code: 'let mudules = {actions: {SubmitData: function(context, params){}}}'
        },
        // {
        //     code: 'setTimeout(()=>{ console.log(11) },someNumber)'
        // }
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: 'let mudules = {actions: {GetData(context, params){}}}',
            errors: [{
                message: "action 方法的key 必须是属于规范中的", // 与rule抛出的错误保持一致
                type: "Property" // rule监听的对应钩子
            }]
        }
    ]
});

