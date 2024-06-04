import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() formData = new EventEmitter<any>();
  form: FormGroup;
  
  constructor(private fb: FormBuilder,private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }


  submitForm() {
    if (this.form.valid) {
      this.formData.emit(this.form.value);
      this.http.post('http://localhost:3000/userdata', this.form.value)
      .subscribe(
        {
          next: (response) => {
            console.log('User data saved successfully:', response);
          },
          error: (error) => {
            console.error('Error saving user data:', error);
          }
        }
      );
      }
      this.form.reset();
    }
  }


