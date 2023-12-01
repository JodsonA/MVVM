import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './chat/chat.component';


@Component({
  selector: 'app-root',
  standalone: true, // Certifique-se de que esta linha esteja presente
  imports: [
      CommonModule,
      RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chat - MVVM';
}
