import { UserRole } from '@/interfaces/UserRole'

// verifica il ruolo admin
export function checkIsAdmin(user: { role?: string } | null) {
  return (user?.role ?? "") === UserRole.ADMIN;
}