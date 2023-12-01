// web-socket.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Message } from './chat/message.model';
import { User } from './chat/user.model'; // Certifique-se de importar o modelo User corretamente

@Injectable({
    providedIn: 'any'
})
export class WebSocketService {
    private socket: Socket;
    private messageSubject = new Subject<Message>();
    private users: User[] = [
        new User(1, 'Alice'),
        new User(2, 'Bob')
    ];

    constructor() {
        this.socket = io('http://localhost:4200');
        this.socket.on('receive-message', (message: Message) => {
            this.messageSubject.next(message);
        });
    }

    sendMessage(message: Message): void {
        this.socket.emit('send-message', message);
    }

    getMessages(): Observable<Message> {
        return this.messageSubject.asObservable();
    }

    getUsers(): Observable<User[]> {
        return of(this.users); // Retorna a lista estática de usuários como um Observable
    }
}
