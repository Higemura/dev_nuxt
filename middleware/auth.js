// store/index.js のnuxtServerInitを使わない場合はミドルウェアの middleware/auth.js を使う（実装したいページにのみりようしたい場合など）
import Cookies from 'universal-cookie'

export default function ({ req, route, redirect, store }) {
  if (!process.server || ['/login'].includes(route.path)) {
    return
  }
  const cookies = new Cookies(req.headers.cookie)
  const credential = cookies.get('credential')
  if (credential) {

  } else {
    return redirect('/login')
  }
}
