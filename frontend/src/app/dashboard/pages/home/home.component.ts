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
    { title: "Sales", content: "$45.000.000", action: "View Sales"},
    { title: "Models", content: "10 models", action: "View all models"},
    { title: "Task for done", content: "0", action: "Add more task"},
    { title: "Docs", content: "You do need help?", action: "Go to the document section"},
  ]);

}
