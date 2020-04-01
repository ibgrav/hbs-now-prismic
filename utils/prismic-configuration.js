
import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://hbs-now.cdn.prismic.io/api/v2'
export const accessToken = 'MC5Yb1RkNVJBQUFCOEFfb00t.77-977-977-977-9Z--_ve-_ve-_vQnvv73vv70c77-9J1vvv73vv70QShYmZkwf77-977-977-977-977-977-9R30';

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const hrefResolver = (doc) => {
  if (doc.type === 'post') {
    return '/post/[uid]'
  }
  return '/'
}