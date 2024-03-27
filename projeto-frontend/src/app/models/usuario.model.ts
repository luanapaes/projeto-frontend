export interface Usuario {
    id?: string; // permite que seja opcional o envio do id
    nome: string;
    login: string;
    email: string;
    senha: string;
}