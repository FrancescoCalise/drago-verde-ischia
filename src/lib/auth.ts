import bcrypt from 'bcrypt'

// Hash password
export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10)
}

// Verifica password
export async function verifyPassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash)
}