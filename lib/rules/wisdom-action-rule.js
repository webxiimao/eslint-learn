/**
 * @fileoverview 智慧园区自定义指令的校验
 * @author wisdom-action-rule
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "智慧园区自定义指令的校验",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        const sourceCode = context.getSourceCode()
        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return context.parserServices.defineTemplateBodyVisitor({
            VAttribute(node){
                if(node.key.type === 'VDirectiveKey'){
                    if(node.key.name.name === 'action') {
                        const name = node.key.argument.name
                        if(!/^\w+$/.test(name)){
                            context.report({
                                node,
                                message: `v-action 的指令必须 属于v-action:aaa.bbb 或者v-action:aaa="bbb"格式`
                            })
                        }
                    }
                }
            }
        })
    }
};
