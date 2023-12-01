// Importações necessárias para o componente, incluindo módulos do Angular, ViewModel, e modelos de dados
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { Message } from './message.model';
import { User } from './user.model';

// Decorador @Component que define metadados para o componente ChatComponent
@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [CommonModule], 
    templateUrl: './chat.component.html', // Caminho para o arquivo de template HTML do componente
    styleUrls: ['./chat.component.css'],   // Caminho para o arquivo de estilos CSS do componente
})
export class ChatComponent implements OnInit {
    messages: Message[] = []; // Array para armazenar as mensagens do chat
    users: User[] = [];      // Array para armazenar os usuários do chat

    // Construtor para injetar o webSocketService
    constructor(private webSocketService: WebSocketService) {}

    // Método ngOnInit é chamado após a criação do componente
    ngOnInit() {
        this.loadMessages();
        this.loadUsers();
    }

    loadUsers() {
        this.webSocketService.getUsers().subscribe((users: User[]) => {
            this.users = users; // Atribui os usuários recebidos ao array de usuários
        });
    }


    // Método para carregar mensagens usando o ChatViewModel
    loadMessages() {
        this.webSocketService.getMessages().subscribe(message => {
            this.messages.push(message); // Adicione mensagens recebidas ao array
        });
    }

    // Método para enviar uma mensagem
    sendMessage(content: string) {
        // Define IDs de exemplo para remetente e destinatário
        const senderId = 1;
        const recipientId = 2;
        // Busca o usuário remetente com base no senderId ou cria um novo usuário "Desconhecido"
        const senderUser = this.users.find(u => u.id === senderId) || new User(senderId, 'Desconhecido');
    
        // Cria uma nova instância de Message
        const newMessage = new Message(
            0, // ID  gerenciado pelo servidor
            senderId,
            recipientId,
            content,
            content,
            senderUser
        );

        // Envia a mensagem usando o ChatViewModel
        this.webSocketService.sendMessage(newMessage);
    }

    // Método para obter o nome do usuário com base no ID
    getUserName(senderId: number): string {
        const user = this.users.find(u => u.id === senderId);
        return user ? user.name : 'Desconhecido';
    }
    
}
