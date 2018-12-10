function describe(def, func) {
    func();
}

const it = (def, func) => describe(" " + def, func)

const matchers = (exp) => ({
  toEqual: (value) =>  {
    if (exp === value) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

const expect = (exp) => matchers(exp)
