const contentful = require('contentful')

module.exports = {
    createClient() {
        return contentful.createClient({
          accessToken: process.env.NUXT_ENV_CONTENTFUL_ACCESS_TOKEN,
          space: process.env.NUXT_ENV_CONTENTFUL_SPACE_ID
        })
    }
}