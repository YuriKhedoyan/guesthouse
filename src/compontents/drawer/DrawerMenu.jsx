import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React, { memo, useContext, lazy, useState } from "react";
import { Grid, Button, Drawer, Box, List } from "@mui/material";

import withSuspense from "../../helpers/withSuspense";
import LanguageContext from "../../contexts/languageContext";

const Img = withSuspense(lazy(() => import("../../compontents/img")));

const DrawerMenu = () => {
  const [state, setState] = useState(false);
  const { currentLanguage } = useContext(LanguageContext);

  const list = () => (
    <Box sx={{ width: "auto" }} role="presentation" onClick={e => setState(true)} onKeyDown={e => setState(true)} >
      <div id="drawerItmes">
        <span>
          <span className="infoSection">
            <p className="info"><FacebookIcon /><InstagramIcon /></p>
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
        </span>
        <br></br>
        <span className="linksDiv">
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
        </span>
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