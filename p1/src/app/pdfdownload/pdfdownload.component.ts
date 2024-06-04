import { Component, Input } from '@angular/core';
import jspdf from 'jspdf';

@Component({
  selector: 'app-pdfdownload',
  standalone: true,
  imports: [],
  templateUrl: './pdfdownload.component.html',
  styleUrl: './pdfdownload.component.css'
})
export class PdfdownloadComponent {
  @Input() pdfData: any;
 

  downloadPDF() {
    const pdf = new jspdf();
    pdf.addImage(this.pdfData, 'PNG', 0, 0,500,500);
    pdf.save('table.pdf');
  }

}
