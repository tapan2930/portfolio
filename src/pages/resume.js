import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import resume from '../TapanResume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




export default function SinglePage() {


  const pdf = resume;
  return (
      <>
    <div>
      <Document
        file={pdf}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
    </> 
  );
}