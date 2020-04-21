/**
 * @fileoverview 智慧园区自定义指令的校验
 * @author wisdom-action-rule
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/wisdom-action-rule"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
    "parser": require.resolve('vue-eslint-parser'),
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017
    }
});


ruleTester.run("wisdom-action-rule", rule, {

    valid: [
        {
            code: '<template><a-button type="primary" icon="diff" style="margin-left: 10px;" v-action:aaa.bbbb.ccc="12">跟进</a-button></template>',
        }
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: '<template><a-button type="primary" icon="diff" style="margin-left: 10px;" v-action:aaa:bbbb:ccc="12">跟进</a-button></template>',
            errors: [{
                message: 'v-action 的指令必须 属于v-action:aaa.bbb 或者v-action:aaa="bbb"格式',
                type: "VAttribute"
            }]
        }
    ]
});
