import React from 'react'
import ModeChangeIcon from '../UI/ModeChangeIcon/ModeChangeIcon';
import Classes from "./Header.module.css";

const Header = (props) => {

    return (
        <div className={Classes.header}>
            <div className={Classes.heading}>
                <h2>devfinder</h2>
            </div>
            <div className={Classes.bgbtn}>
                <button onClick={props.changeMode} className={Classes.button}>{props.changeLang}
                    <ModeChangeIcon isLightMode={props.isLightMode} />
                </button>
            </div>
        </div>
    )
}

export default Header
