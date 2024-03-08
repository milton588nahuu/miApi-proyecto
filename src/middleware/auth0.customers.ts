import { auth } from 'express-oauth2-jwt-bearer'

const authorization = auth({
    audience: 'http://localhost:3000/api-customer',
    issuerBaseURL: 'https://dev-6kheafszlnh3mean.us.auth0.com/',
    tokenSigningAlg: 'RS256'
})


export {authorization}