import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfviewingComponent } from './pdfviewing.component';

describe('PdfviewingComponent', () => {
  let component: PdfviewingComponent;
  let fixture: ComponentFixture<PdfviewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfviewingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfviewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
