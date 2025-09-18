import { AppUser } from '@/generated/prisma';
import { UserRole } from '@/interfaces/UserRole'

// verifica il ruolo admin
export function checkIsAdmin(user : AppUser | null) {
  return (user?.role ?? "") === UserRole.ADMIN;
}
