import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '@dashboard/services/product-service.service';

@Component({
  selector: 'app-add-model-form',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-model-form.component.html',
  styleUrl: './add-model-form.component.css'
})
export class AddModelFormComponent {
  private _fb = inject( FormBuilder )
  private _productService = inject( ProductService );

  public addModelForm: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: [0, [Validators.required]],
    stock: [0, [Validators.required]],
    userId: [0, [Validators.required]],
    categoryId: [0, [Validators.required]]
  })

  addModel(){
    if(this.addModelForm.invalid) return;
    const product = this.addModelForm.value;
    return this._productService
      .createProduct(product)
      .subscribe({ 
        complete: () => console.log('Product created(complete)'),
        next: () => console.log('Product created(next)'),
        error: () => console.log('Product created(error)')
      });
  }

}
