export default function ({ $axios }) {
  $axios.onRequest( (config) => {
    if (config.url.indexOf('api.github.com') +1 ) {
      config.headers.Authorization = `token f7f72ae5049c904adbd4e120c83a8e0becb5916f`
      // XXXX is your access token
    }
  })
}
