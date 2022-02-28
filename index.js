module.exports = {
  createTheme: function (name) {
    return function ({ addVariant, e }) {
      addVariant(name, function ({ modifySelectors, separator }) {
        modifySelectors(function ({ className }) {
          return 'body.' + name + ' ' + '.' + e(name + separator + className)
        })
      })
    }
  },
}
