import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product.component.html',
})
export class ProductComponent {

}
