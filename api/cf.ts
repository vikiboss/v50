import v50 from '../static/v50.json' with { type: 'json' }

export default {
  fetch(req, env, ctx) {
    const u = new URL(req.url)

    switch (u.pathname) {
      case '/favicon.ico': {
        return Response.redirect('https://avatar.viki.moe', 308)
      }

      case '/list': {
        return Response.json(v50)
      }

      case '/random':
      default: {
        return new Response(v50.at(Math.floor(Math.random() * v50.length)))
      }
    }
  },
};
