// web-socket.module.ts
import { NgModule } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@NgModule({
    providers: [WebSocketService]
})
export class WebSocketModule {}
