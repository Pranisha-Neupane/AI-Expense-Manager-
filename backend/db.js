import dotenv from 'dotenv'; //to load env variables
import pkg from 'pg';

dotenv.config();
const {Pool,types} = pkg;

//Return DATE columns (OID 1082) as plain 'YYYY-MM-DD' strings instead of JS Date,
// so JSON serialization doesn't UTC-shift the date for clients in non-UTC timezones

types.setTypeParser(1082, (val) => val);

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false},
});

pool.on('error',(err) => {
    console.error('Unexected Postgres error:',err);
    process.exit(-1);
}

);

export default pool;