// chat.repository.ts
import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { Observable, of } from 'rxjs';
import {User} from './user.model'

@Injectable({ providedIn: 'root' })
export class ChatRepository {
    // Supondo que você tenha alguma forma de armazenar as mensagens
    private messages: Message[] = [];
    private users: User[] = []; 

    getUsers(): Observable<User[]> {
        // Converte a lista de usuários em um Observable
        return of(this.users);
    }

    getMessages(): Message[] {
        // Retorna as mensagens armazenadas
        return this.messages;
    }

    sendMessage(message: Message) {
        // Adiciona a mensagem à lista de mensagens
        this.messages.push(message);

        // Aqui, você pode adicionar lógica para enviar a mensagem ao servidor
    }
}
