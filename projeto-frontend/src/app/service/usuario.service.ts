import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private url = environment.api;

    constructor(private httpClient: HttpClient) {
    }

    obterUsuarios(){
        return this.httpClient.get<Usuario[]>(this.url);
    }

    obterUmUsuario(id: string | number) {
        return this.httpClient.get<Usuario[]>(`${this.url}/${id}`)
    }

    cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
        console.log('chegou', usuario);
        return this.httpClient.post<Usuario>(this.url, usuario);
    }

    editarUsuario(id: string, usuario: Usuario) {
        return this.httpClient.put<Usuario>(`${this.url}/${id}`, usuario); // Inclua 'Usuario' como segundo argumento
    }

    excluirUsuario(id: string) {
        return this.httpClient.delete<void>(`${this.url}/${id}`);
    }

}