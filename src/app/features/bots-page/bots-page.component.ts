import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from '../../shared/components/side-menu/side-menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
interface Message {
  type: 'request' | 'answer';
  text: string;
}

@Component({
  selector: 'app-bots-page',
  standalone: true,
  imports: [
    FormsModule,
    SideMenuComponent,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './bots-page.component.html',
  styleUrl: './bots-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotsPageComponent {
  messages: Message[] = [
    {
      type: 'request',
      text: 'напиши стих',
    },
    {
      type: 'answer',
      text: 'В сумраке ночном, под лунным светом, <br/> Звезды в небесах таинственно светят. <br/> Мысли текут рекой, словно вечный поток, <br/> Сердце таит тайны, как в глубинах океана. <br/> Среди молчания и тишины ночной, <br/> В душе звучит мелодия нежных слов. <br/> Тянется вечность касаний взглядов, <br/> Любовь расцветает в нежных облаках. <br/> Под звездным покровом, в мире мечтаний, <br/> Сердца стучат в унисон, словно вздох. <br/> Тянется нитью судьбы вечной счастья, <br/> Сияют глаза, словно звездный луч. <br/> И в этой тишине, под светом луны, <br/> Душа плывет, словно птица в небеса. <br/> Летит к тебе, мой друг и возлюбленный, <br/> Сквозь пространство, словно капля дождя. <br/> Пусть мир течет, как река времени, <br/> С тобой рядом, вечно буду я. <br/> Сплетая стихи, в этой ночной тишине, <br/> Любовь моя, как звезда на небе.',
    },
  ];
  input: string = '';
  send() {
    this.messages.push({
      type: 'request',
      text: this.input,
    });
    this.messages.push({
      type: 'answer',
      text: this.input,
    });
    this.input = '';
  }
}
