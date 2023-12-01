// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WebSocketModule } from './web-socket.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, WebSocketModule, RouterModule],
  declarations: [AppComponent]
 
})
export class AppModule {}
