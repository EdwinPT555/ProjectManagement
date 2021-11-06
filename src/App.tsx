import React, { useEffect, useState } from 'react';
import style from './App.module.scss';
// import { Toggle } from '@fluentui/react';
import LeftNav from './App/LeftNav';
import PageArea from './App/PageArea';
import ClipLoader from "react-spinners/PuffLoader";

const App = () => {
  const themeColor = "#282c34";
  const fontColor = "whitesmoke";
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])
  // const [themeColor, setThemeColor] = useState<string>("#282c34");
  // const [fontColor, setFontColor] = useState<string>("whitesmoke");
  // const _onChangeTheme = (e: React.MouseEvent<HTMLElement>, checked?: boolean)=>{
  //     if(checked){
  //       setThemeColor("#282c34");
  //       setFontColor("whitesmoke")
  //     }
  //     else{
  //       setThemeColor("white");
  //       setFontColor("black")
  //     }
  // }
  return (
    <div className={style.fullpageBg} style={{ background: `${themeColor}`, color: `${fontColor}` }}>
      {
        loading ? (
          <div style={{display:"flex",flexDirection:"column", justifyContent:"space-evenly", alignItems:"center",width:"100%"}}>
          <span style={{fontSize:"30px",fontWeight:"bolder"}}>PROJECT MANAGEMENT SOLUTION</span>
            <ClipLoader color={"dodgerblue"} loading={loading} size={250} />
          </div>
        )
          : (
            <>
              {/* <Toggle
        label={
          <div>
            Custom label
          </div>
        }
        onText="On"
        offText="Off"
        onChange={_onChangeTheme}
      /> */}
              <div>
                <LeftNav />
              </div>
              <div style={{ width: "100%" }}>
                {/* <TopNav/> */}
                <PageArea />
              </div>
            </>
          )
      }
    </div >
  )
}

export default App
