// chat.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';

@NgModule({
    declarations: [ChatComponent],
    imports: [CommonModule], // Importe CommonModule aqui
    exports: [ChatComponent]
})
export class ChatModule {}
