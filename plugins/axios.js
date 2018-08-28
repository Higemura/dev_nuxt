export default function ({ $axios }) {
  $axios.onRequest( (config) => {
    if (config.url.indexOf('api.github.com') +1 ) {
      config.headers.Authorization = `fe4e47dccf45f91903da14e3bac32feb443441b9`
      // XXXX is your access token
    }
  })
}
