export const createTheme = (name) => ({ addVariant, e }) {
      addVariant(`${name}`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `body.${name} .${e(`${name}${separator}${className}`)}`
        })
      })
    }
