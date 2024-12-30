import db from './db'
import { hash } from 'bcrypt'

export async function createUser(name: string, email: string, password: string) {
  const hashedPassword = await hash(password, 10)
  const result = await db.query(
    'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING id, name, email',
    [name, email, hashedPassword]
  )
  return result.rows[0]
}

export async function getUserByEmail(email: string) {
  const result = await db.query('SELECT * FROM users WHERE email = $1', [email])
  return result.rows[0]
}

