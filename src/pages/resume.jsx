import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import resume from '../TapanResume.pdf'

import Header from '../components/header'
import MyButton from "../components/button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function ResumeDisplay() {
  const pdf = resume;
  return (
      <div>
          <Header/>
          <div style={{paddingTop: "90px",textAlign:"center"}}> <MyButton to="/TapanResume.pdf" value={"Download"} color={"#000000"} icon={faDownload}/></div>
          <div className="resume">
         
          <>
    <div className="displayPDF">      
      <Document
        file={pdf}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
    </> 

      </div>   
      </div>  
  );
}

export default ResumeDisplay