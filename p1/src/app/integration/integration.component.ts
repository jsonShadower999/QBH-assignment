import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';
import { PdfviewComponent } from '../pdfview/pdfview.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-integration',
  standalone: true,
  imports: [FormComponent,TableComponent,PdfviewComponent,CommonModule,PdfviewComponent],
  templateUrl: './integration.component.html',
  styleUrl: './integration.component.css'
})
export class IntegrationComponent {
  users: any[] = [];

  pdfUrl: any;
  showPdfView!: boolean;

  

  constructor() { }


  receivePdfUrl(url: string) {
    this.pdfUrl = url;
  }

  addUser(userData: any) {
    this.users.push(userData);
  }
  onPdfGenerated(url: string) {
    this.pdfUrl = url;
  }

}
