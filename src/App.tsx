import React, { useState } from 'react';
import style from './App.module.scss';
import { Toggle } from '@fluentui/react';
import LeftNav from './App/LeftNav';
import TopNav from './App/TopNav';
import PageArea from './App/PageArea';

const App = () => {
  const [themeColor, setThemeColor] = useState<string>("#282c34");
  const [fontColor, setFontColor] = useState<string>("whitesmoke");
  const _onChangeTheme = (e: React.MouseEvent<HTMLElement>, checked?: boolean)=>{
      if(checked){
        setThemeColor("#282c34");
        setFontColor("whitesmoke")
      }
      else{
        setThemeColor("white");
        setFontColor("black")
      }
  }
  return (
    <div className={style.fullpageBg} style={{background:`${themeColor}`,color:`${fontColor}`}}>
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
        <LeftNav/>
      </div>
      <div style={{width:"100%"}}>
        {/* <TopNav/> */}
        <PageArea/>
      </div>
    </div>
  )
}

export default App
