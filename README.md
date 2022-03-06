# tailwind-create-theme

**定义一个Tailwind 主题**

## **Usage**

### step first

`npm install -D tailwind-create-theme`

### step second

`//tailwind.config.js`

`const { createTheme } = require('tailwind-create-theme')`

`const plugin = require('tailwindcss/plugin')`

`module.exports={`

`mode:'jit',`

​	`plugins:[plugin(createTheme ('dark'))]`

`}`

## Then



接下来你就可以在CSS中使用`dark:w-4`这样的tailwind语法了；

如果需要切换主题，那么你只需要：

`onClick(()=>{`

​	`document.body.setAttribute('class','dark')`

`})`
