import Style from "./about.module.css"

export default function about(){
    return(
      <div className={Style.container}>
      <h1 className={Style.mainH1}>about page</h1>
      <p className={Style.ptag}>its aboutus page</p>
     
    </div>
  )
}