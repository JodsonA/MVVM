// message.model.ts
import { User } from './user.model';

export class Message {
    constructor(
        public id: number,
        public senderId: number,
        public recipientId: number,
        public text: string,
        public content: string,
        public user: User  // Adicione esta linha
    ) {}
}
