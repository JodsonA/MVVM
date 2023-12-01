// chat.viewmodel.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from './message.model';
import { User } from './user.model'; 
import { ChatService } from './chat.service'; 

@Injectable({ providedIn: 'root' })
export class ChatViewModel {
    private messages = new BehaviorSubject<Message[]>([]);
    private users = new BehaviorSubject<User[]>([]);

    constructor(private chatService: ChatService) {}

    getMessages(): Observable<Message[]> {
        return this.messages.asObservable();
    }

    // Chamada para carregar mensagens do servidor
    loadMessages() {
        // Continua recebendo mensagens do WebSocket através do ChatService
        this.chatService.getMessages().subscribe(message => {
            this.messages.next([...this.messages.value, message]);
        });
    }

    sendMessage(message: Message) {
        this.chatService.sendMessage(message);
    }

    // Métodos para lidar com os usuários
    getUsers(): Observable<User[]> {
        return this.users.asObservable();
    }

    loadUsers(): Observable<User[]> {
        // Assegure-se de que getUsers do ChatService retorne Observable<User[]>
        return this.chatService.getUsers();
    }
}
