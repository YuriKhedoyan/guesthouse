import React, { memo, useContext, lazy, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Button, Drawer, Box, ButtonGroup } from "@mui/material";

import eng from '../../locales/eng.json'
import rus from '../../locales/rus.json'
import arm from '../../locales/arm.json'
import images from "../../locales/images.js";
import withSuspense from "../../helpers/withSuspense";
import ThemeContext from "../../contexts/themeContext";
import LanguageContext from "../../contexts/languageContext";

import './Drawer.scss'

const Img = withSuspense(lazy(() => import("../../compontents/img")));

const DrawerMenu = () => {
  const { otherPictures } = images;
  const [state, setState] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);

  const switchThemeToDark = () => setTheme("dark");
  const switchThemeToLight = () => setTheme("light");

  const setLanguageAm = () => { setCurrentLanguage(arm) }
  const setLanguageRu = () => { setCurrentLanguage(rus) }
  const setLanguageEng = () => { setCurrentLanguage(eng) }

  const list = () => (
    <Box sx={{ width: "auto" }} role="presentation" onClick={e => setState(true)} onKeyDown={e => setState(true)} className={theme} id="box">
      <div id="drawerItems">
        <div id="informations">
          <div id="secondPart">
            <div>
              <span className="infoSection">
                <div className="info">
                  <span className="icons">
                    <Link to="https://www.facebook.com/">
                      <FacebookIcon />
                    </Link>
                  </span>
                  <span className="icons">
                    <Link to="https://www.instagram.com/">
                      <InstagramIcon />
                    </Link>
                  </span>
                </div>
              </span>
              <span className="infoSection">
                <p className="info"><PlaceIcon /></p><p className="info txt">{currentLanguage.informationAboutHouse.place}</p>
              </span>
              <span className="infoSection">
                <p className="info"><LocalPhoneIcon /></p><p className="info txt">{currentLanguage.informationAboutHouse.phoneNumber}</p>
              </span>
              <span className="infoSection">
                <p className="info"><EmailIcon /></p><p className="info txt">{currentLanguage.informationAboutHouse.email}</p>
              </span>
            </div>
          </div>
          <div className="linksDiv">
            <span className="linksSection">
              <h4>
                <Link to="/rooms" className="links">
                  {currentLanguage.links.rooms}
                </Link>
              </h4>
            </span>
            <span className="linksSection">
              <h4>
                <Link to="/gallery" className="links">
                  {currentLanguage.links.gallery}
                </Link>
              </h4>
            </span>
            <span className="linksSection">
              <h4>
                <Link to="/restaurant" className="links">
                  {currentLanguage.links.restaurant}
                </Link>
              </h4>
            </span>
            <span className="linksSection">
              <h4>
                <Link to="/contactUs" className="links">
                  {currentLanguage.links.contactUs}
                </Link>
              </h4>
            </span>
            <span className="buttonGroup">
              <span className="languageSelector">
                <ButtonGroup variant="contained" id="languageButtons">
                  <Button ><Img src={otherPictures.languages.am.src} alt={otherPictures.languages.am.alt} className="langPhotos" onClick={setLanguageAm} /></Button>
                  <Button ><Img src={otherPictures.languages.ru.src} alt={otherPictures.languages.ru.alt} className="langPhotos" onClick={setLanguageRu} /></Button>
                  <Button ><Img src={otherPictures.languages.en.src} alt={otherPictures.languages.en.alt} className="langPhotos" onClick={setLanguageEng} /></Button>
                </ButtonGroup>
              </span>
              <span className="darkAndLight">
                <Button onClick={switchThemeToDark} variant="contained" ><Brightness4Icon /></Button>
                <Button onClick={switchThemeToLight} variant="contained" ><Brightness7Icon /></Button>
              </span>

            </span>
          </div>
        </div>
      </div>
    </Box >
  );

  return (
    <div className='drawer'>
      <Button onClick={e => setState(true)}><MenuIcon /></Button>
      <Drawer anchor="top" open={state} onClose={e => setState(false)}>
        {list()}
      </Drawer>
    </div>
  );
}


export default memo(DrawerMenu);