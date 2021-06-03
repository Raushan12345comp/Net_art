import React from 'react';
import {FaFacebook, FaGlobe, FaPhoneAlt} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
      <div className="flex-container2">
        <div className="item">CHEMICALS & PROCESS</div>
        <div className="item">POWER</div>
        <div className="item">WATER & WASTE WATER</div>
        <div className="item">OILS & GAS</div>
        <div className="item">PHARMA</div>
        <div className="item">SUGARS & DISTILLERIES</div>
        <div className="item">PAPER & PULP</div>
        <div className="item">MARINE & DEFENCE</div>
        <div className="item">METAL & MINING</div>
        <div className="item">FOOD & BEVERAGE </div>
        <div className="item">PETROCHEMICAL & REFINERIES</div>
        <div className="item"> SOLAR</div>
        <div className="item">BUILDING</div>
        <div className="item">HVAC</div>
        <div className="item">FIRE FIGHTING</div>
        <div className="item" id="item-1"> AGRICULTURE & RESIDENTIAL</div>
      </div>
      <div className="flex-icons">
        <div className="icons"><FaPhoneAlt/> Toll Free 1800 200 1234</div>
        <div className="icons"><FaFacebook/> www.facebook.com/cripumps</div>
        <div className="icons"><FaGlobe/> www.crigroups.com</div>
      </div>
    </div>
  );
};

export default Footer;
