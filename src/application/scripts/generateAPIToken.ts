import { AuthService } from "@/domain/services/authService/index.ts"

if (import.meta.main) {
  const service = new AuthService()
  const token = service.generateToken()
  console.log(`Generated API Token: '${token}'`)
}
