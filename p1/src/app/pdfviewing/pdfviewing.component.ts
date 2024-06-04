import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdfviewing',
  standalone: true,
  imports: [],
  templateUrl: './pdfviewing.component.html',
  styleUrl: './pdfviewing.component.css'
})
export class PdfviewingComponent {
  @Input() pdfSource: string | undefined;

  constructor() { }

}
