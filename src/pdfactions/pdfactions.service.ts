import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as PDFDocument from 'pdfkit';



@Injectable()
export class PdfactionsService {
 
  async generatePdf(userdata: any[]): Promise<string> {
  
    const doc = new PDFDocument();
    const dirname = 'C:/Users/Pragya Tiwari/p1bck/src/public/pdfs'; // Absolute path
    const fileName = `pdf_${Date.now()}.pdf`;
    const filePath = path.join(dirname, fileName);
  
    doc.fontSize(12);
    doc.text('User Data', { align: 'center' });
    doc.moveDown();

    // Table headers
    const headers = ['Name', 'Email', 'PhoneNumber', 'Address'];
    const columnWidths = [150, 200, 150, 250];
    const headerY = doc.y;
    doc.font('Helvetica-Bold');
    headers.forEach((header, i) => {
      doc.text(header, 95 + i * 150, headerY, { width: columnWidths[i], align: 'left' });
    });

    // Table rows
    const startY = headerY + 20;
    const rowHeight = 20;
    const cellPadding = 10;
    const rowSpacing = 15;
    let currentY = startY;
    doc.font('Helvetica');
    userdata.forEach(user => {
      doc.text(user.name, 100, currentY, { width: columnWidths[0], align: 'left' });
      doc.text(user.email, 250, currentY, { width: columnWidths[1], align: 'left' });
      doc.text(user.phoneNumber, 350, currentY, { width: columnWidths[2], align: 'left' });
      doc.text(user.address, 450, currentY, { width: columnWidths[3], align: 'left' });
      currentY += rowHeight + rowSpacing;
    });

    // Save PDF
    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);
    doc.end();

    await new Promise<void>((resolve, reject) => {
      writeStream.on('finish', () => resolve());
      writeStream.on('error', (error) => reject(error));
    });

    return filePath;
  }
  async generatePdfstring(userData: any): Promise<string> {
    const doc = new PDFDocument();
    const dirname = 'C:/Users/Pragya Tiwari/p1bck/src/public/pdfs'; // Absolute path
    const fileName = `pdf_${Date.now()}.pdf`;
    const filePath = path.join(dirname, fileName);
  
    doc.text(`User Data: ${JSON.stringify(userData)}`);
    
    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);
    doc.end();

    await new Promise<void>((resolve, reject) => {
      writeStream.on('finish', () => resolve());
      writeStream.on('error', (error) => reject(error));
    });

    return filePath;
  }
  getTopmostPdfUrl(): string {
    const dirname = 'C:/Users/Pragya Tiwari/p1bck/src/public/pdfs';
   // const publicFolderPath = path.join(__dirname, '..', 'public');
    const pdfFiles = fs.readdirSync(dirname).filter(file => file.endsWith('.pdf'));
    console.log("pdf urls")
    if (pdfFiles.length > 0) {
      // Assuming the first file is the topmost file
      const topmostPdfFile = pdfFiles[0];
      // Construct the URL of the PDF file
      const pdfUrl = `${process.env.BASE_URL || 'http://localhost:3000'}/${topmostPdfFile}`;
      console.log(pdfUrl)
      return pdfUrl;
    } else {
      throw new Error('No PDF files found in the public folder.');
    }
  }
}


// C:\Users\Pragya Tiwari\p1bck\src\public\pdfs\pdf_1717480546866.pdf