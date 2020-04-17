/**
 * @fileoverview 用于定义vuex async 的命名
 * @author xii
 */
"use strict";
const _ = require('lodash')

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "用于定义vuex async 的命名",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        const code = context.getSourceCode()
        
        
        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
        const names = ['Fetch', 'Submit', 'Save']
        return {
            'Property': (node) => {
                if(_.get(node, 'parent.parent.key.name') !== 'actions')return
                const isMustName = names.some(n => _.get(node, 'key.name','').startsWith(n))
                if(!isMustName){
                    context.report({
                        node,
                        message: `action 方法的key 必须是属于规范中的`
                    })
                }
            }
            // give me methods

        };
    }
};
