import {rest} from 'msw'

export const posts = [
    {
        "id": 1,
        "title": "lowdb is awesome",
        "text": "Hello c'est mon post"
    }
]

export const handlers = [
    rest.get('http://localhost:3000/posts', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(posts))
    })
]
