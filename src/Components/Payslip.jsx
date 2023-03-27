import React from "react";
import "./CSS/payslip.css";
import { BsTelephone, BsPerson } from "react-icons/bs";
import { AiOutlineMail, AiOutlineCalendar, AiOutlineArrowRight } from "react-icons/ai"
import { BiHomeAlt } from "react-icons/bi"

export const Payslip = () => {
  return (
    <div className="payslipHolder">
      <div className="MonthIndicator">
        <h5>Payslip for the period of April 2023 </h5>
      </div>
      <div className="StaffIndicator">
        <div className="ImgHolder">
          <img src="/images/userProfile.png" width="80" />
        </div>
        <div className="NameHolder">
          <div className="employeeName">
            <h5>Nasiru Iyidemilade Halim, 110245</h5>
          </div>
          <div className="employeePosition">
            <h5>Developer</h5>
          </div>
          <div className="employeeTags">
            <h5>Developer</h5>
          </div>
        </div>
      </div>
      <div className="TagIndicator">
        <div className="infoTags"></div>
        <div className="infoTags1"></div>
        <div className="infoTags"></div>
        <div className="infoTags2"></div>
        <div className="infoTags"></div>
        <div className="infoTags3"></div>
        <div className="infoTags"></div>
      </div>
      <div>
        <div className="paySlipPage">
          <div className="PaySlipInfo">
          <h4>Pay Slip</h4>
          <hr/>

          </div>
        <div className='info-holder2'>
          <h4>Personal Info</h4>
          <hr/>
            <div className='mini-info'>
            
              <div> <BsTelephone className='icon-pos2' /> Phone</div>
              <p className='info-style'>08188102756</p>
            </div>
            <div className='mini-info'>
            <div> <AiOutlineMail className='icon-pos2' /> Email </div>
                <p className='info-style'>Ladenas202@gmail.com</p>
             

            </div>
            <div className='mini-info'>
            <div><AiOutlineCalendar className='icon-pos2' /> Start Date</div>
                <p className='info-style'>June 27, 2022</p>
              
            </div>
            <div className='mini-info'>
            <div><BsPerson className='icon-pos2' />Position</div>
                <p className='info-style'>Lead Developer</p>
              
            </div>
            <div className='mini-info'>
            <div><BiHomeAlt className='icon-pos2' />Address </div>
                <p className='info-style'> Magodo brooks estate, Lagos Nigeria</p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
