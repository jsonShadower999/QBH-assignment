import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdfview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdfview.component.html',
  styleUrl: './pdfview.component.css'
})
export class PdfviewComponent {
  @Input() pdfUrl: any;
 

}
