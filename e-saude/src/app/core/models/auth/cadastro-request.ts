export interface CadastroRequest {
  user: {
    email: string
    password: string
  },
  nome: string
}