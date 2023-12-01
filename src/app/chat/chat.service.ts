// chat.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Message } from './message.model';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class ChatService {
    private socket: Socket;
    private users: User[] = [
        new User(1, 'Alice'),
        new User(2, 'Bob')
    ];

    constructor() {
        this.socket = io('http://localhost:3000');
    }

    sendMessage(message: Message) {
        this.socket.emit('send-message', message);
    }

    getMessages(): Observable<Message> {
        return new Observable(observer => {
            this.socket.on('receive-message', (message: Message) => {
                observer.next(message);
            });
        });
    }

    getUsers(): Observable<User[]> {
        return of(this.users); // Retorna a lista de usuários como um Observable
    }
}
