import { Component, signal } from '@angular/core';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { InfoPanelComponent } from '@dashboard/components/info-panel/info-panel.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardListComponent, InfoPanelComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  public cardInfo = signal([
    { title: "Card 1", content: "Content 1", action: "Action 1"},
    { title: "Card 2", content: "Content 2", action: "Action 2"},
    { title: "Card 3", content: "Content 3", action: "Action 3"},
    { title: "Card 4", content: "Content 4", action: "Action 4"},
  ]);

}
