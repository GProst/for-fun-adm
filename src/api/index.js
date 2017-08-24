class API {
  login (email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { // TODO: real request
        resolve()
      }, 4000)
    })
      .catch((err) => {
        throw err
      })
  }
}

export default new API()
