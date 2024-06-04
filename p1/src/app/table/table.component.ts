import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
//import * as jsPDF from 'jspdf';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import jspdf, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { NgxExtendedPdfViewerComponent, NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  
  @Input() users: any[] = [];

  pdfcurrentUrl!: SafeResourceUrl;
 
  pdfUrl:any;
 // pdfUrl: SafeResourceUrl;

 
 

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { 
    
  }

  editUser(user: any) {
    // Handle edit action
  }

  deleteUser(user: any) {
    // Handle delete action
  }
  generatePDF() {
    const element:any = document.getElementById('tableToPDF');
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf();
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save('table.pdf');

    });
  }
  downloadPdf() {
    this.http.post('http://localhost:3000/pdfactions', this.users, { responseType: 'blob' })
      .subscribe(response => {
        console.log("all user data send to backend")
        console.log(this.users)
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        console.log(url);
        // this.pdfUrl=url;
       
       // this.currentfileurl=url
        const a = document.createElement('a');
        a.href = url;
        a.download = 'generated-pdf.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        this.pdfUrl=url;
      });
  }
  viewTopmostserverPDF(): void {
    this.http.get<string>('http://localhost:3000/pdfactions/pdf-url').subscribe({
      next: (url) => {
        this.pdfUrl = url;
        console.log(this.pdfUrl);
        // Now you can use this.pdfUrl to view the PDF
        console.log('PDF URL:', this.pdfUrl);
      },
      error: (error) => {
        console.error('Error fetching PDF URL:', error);
      }
    });
  }
  
 viewPDF(){
   // this.pdfcurrentUrl=this.pdfUrl;
    this.pdfcurrentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);

  



    }
  }
 
  
  
