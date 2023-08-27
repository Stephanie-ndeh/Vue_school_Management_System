const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
},
{
  "vue/multi-word-component-names": ["error", {
    "ignores": []
  }]
}
)

