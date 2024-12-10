"use client";
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";
import Style from "@/app/resume/resume.module.css";


const JPGToPDFConverter: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleDownloadPDF = async () => {
    if (!imageRef.current) return;

    const canvas = await html2canvas(imageRef.current);
    const imgData = canvas.toDataURL("image/jpeg");

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("download.pdf");
  };

  return (
    <div className={Style.container}>
      <div className={Style.textContainer}>
        <h1 className={Style.title}>UPDATED RESUME</h1>
        <h2 className={Style.subtitle}>
          RESUME SETUP BY MUHAMMAD ANUS AHMED
        </h2>
        <p className={Style.description}>
          If you want to download my resume, click on the button
        </p>
        <button className={Style.downloadBtn} onClick={handleDownloadPDF}>
          Download as PDF
        </button>
      </div>
      <div className={Style.imageContainer}>
        <Image
          ref={imageRef}
          src="/resume.jpg"
          alt="Convert this JPG to PDF"
          width={300}
          height={500}
          className={Style.resumeImage}
        />
      </div>
    </div>
  );
};

export default JPGToPDFConverter;
