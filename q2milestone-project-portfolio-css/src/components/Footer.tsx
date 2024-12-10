import React from "react";
import style from "@/style/footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
    <div className={style.footerContent}>
      <div className={style.footerName}>MUHAMMAD ANUS AHMED</div>
      <div className={style.footerTitle}>FRONTEND DEVELOPER</div>
    </div>
  
    <div className={style.footerCopyright}>
      <span>
        © [Current Year] MUHAMMAD ANUS AHMED. All rights reserved. The content on this
        website is protected by copyright and may not be reproduced, distributed, or
        transmitted without prior written permission from MUHAMMAD ANUS AHMED.
      </span>
    </div>
  </footer>
  
  );
};

export default Footer;
