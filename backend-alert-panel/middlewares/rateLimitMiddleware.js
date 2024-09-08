import { rateLimit } from 'express-rate-limit'

const rateLimitMiddleware = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    message: {
        message: 'Você atingiu o limite de requisições, tente novamente em 15 minutos'
    }
})

export default rateLimitMiddleware