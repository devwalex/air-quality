import 'dotenv/config';
import knexfile from '../knexfile.js'
import knex from 'knex'

const environment = process.env.NODE_ENV || 'development';   
const configuration = knexfile[environment];   
const db = knex(configuration);

export default db