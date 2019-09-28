import React from "react";
import styled from "styled-components";

// Components
import Para from "../../elements/Para/desktop";
import Banner from "../../components/Banner/desktop";
import BookBtn from "../../elements/BookNowBtn/desktop";
import PageIntro from "../../components/Intro/desktop";
import MeetExperts from "../../components/MeetExperts/desktop";
import Input from "../../elements/Input/desktop";

// Images
import HeaderImg from "../../images/Desktop-Header/HomeBanner.jpg";
import SukoonBgLogo from "../../images/sukoon-bg-logo/logo@2x.jpg";
import VirtualFormBg from "../../images/internationalpatient/form_bg.png";
import PartnerHotel from "../../images/internationalpatient/partner_hotel.png";
import SukoonBullets from "../../images/internationalpatient/sukoon_bullet.svg";

// Meet Experts and Blog and faq wrapper
const MFBWrapper = styled.section`
  background-image: url(${SukoonBgLogo});
  background-repeat: no-repeat;
  background-position: left -23vw top 16vw;
  background-size: 48vw;
`;

const MainForm = styled.form`
  background-image: url(${VirtualFormBg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  
  
  input::placeholder, textarea::placeholder{
    opacity: 1;
    font-family: gilroy-regular;
  }
  textarea{
    min-height: 100px;
    max-height: 200px;
    overflow: auto;
  }
`;

const PartnerHotelContent = styled.div`
  background: white;
  padding: 25px;
`;

const PartnerHotelInfo = styled.div`
  min-height: 525px;
  background-image: url(${PartnerHotel});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const IntroContent = {
  Heading: { titleLight: 'Plan', titleBold: 'Trip'},
  Caption: [
    {
      heading: "Consult best doctors",
      para: "Get expert advice from our team of experienced doctors, led by Dr. Sameer Parikh"
    }, {
      heading: "Get personalised care",
      para: "Receive customised and holistic care because of our incredible 1:1 nurse to patient ratio"
    },
    { heading: "Experience premium facilities", para: "Enhance your recovery in a calming, positive, and comfortable environment" }
  ]
};


function InternationalPatient(props) {

  return (
    <>
      <Banner  captionLight={`Feel like`}
               captionBold={`Yourself Again`} booking inner texture HeaderImg={HeaderImg} />
      <PageIntro content={IntroContent}/>
      <div className="flex px-20 py-8">
        <div className="w-3/5 pr-6">
          <section className="text-v3xl" id="InternationalPatientInfo">
            <h2 className="text-sukoon text-v3xl font-gilroyBold">
              Facilities For International Patient
            </h2>
            <h3 className="py-4 pr-16 text-gray-600 font-gilroyMedium text-vlg block" >
              Sukoon's International Team will compassionately ensure that you and your loved ones medical journey is smooth, hassle free, and comfortable. We will hand hold you at every step to provide a world-class experience.
            </h3>
            <ul className="text-xl font-gilroyMedium text-gray-600">
              <li className="mt-6">
                1. Providing detailed medical opinion and video- consultation with our team of doctors before arrival
              </li>
              <li className="mt-2">
                2. Assistance with Visa Services
              </li>
              <li className="mt-2">
                3. A dedicated relationship manager is assigned to each patient to take care of all you needs inside the hospital and to assist you with hospital administrative processes
              </li>
              <li className="mt-2">
                4. International Concierge Desk at dedicated International lounge will help to arrange for a hotel/ guest house as per your preference.
              </li>
              <li className="mt-2">
                5. Complimentary two way airport transfers
              </li>
              <li className="mt-2">
                6. Dedicated Relationship manager to take care of all you needs inside the hospital.
              </li>
              <li className="mt-2">
                7. Payments can be done either via cash, credit card or Wire Transfer.
              </li>
              <li className="mt-2">
                8. International Concierge Desk available at the hospital will facilitate travel within the city as well as for local sight-seeing
              </li>
              <li className="mt-2">
                9. Interpreters available at the hospital
              </li>
            </ul>
          </section>
        </div>
        <div className="w-2/5 pl-6">
          <MainForm className="px-8 py-6 text-white font-gilroyMedium">
            <div className="bg-transparent pb-4 ">
              <h2 className="text-white text-vxl">Free Virtual Consultation</h2>
            </div>
            <div className="font-gilroyMedium">
              <Input type="name" required={true} defaultValue={``} label="Patient Name"/>
              <Input type="name" required={true} label="Age" defaultValue={``}/>
              <Input type="name" required={true} label="Contact Number" defaultValue={``}/>
              <Input type="select" label="Select Country"/>
              <Input type="select" label="Select"/>
              <Input type="name" defaultValue={``} label="Comments" textarea/>
              <BookBtn theme="green" buttonPadding="5px 10px" wrapperClass="">
                Get An Estimate
              </BookBtn>
            </div>
          </MainForm>
          <span className={`text-Para text-sm`}>
            Disclaimer :
          </span>
        </div>
      </div>
      <PartnerHotelInfo className="my-16 p-16 mb-0" id="">
        <PartnerHotelContent className="shadow-lg w-1/3">
          <span className="text-sukoon">Patient Care</span>
          <h2 className="text-sukoon text-2xl font-gilroyBold">
            Partners Hotels / Guest Houses
          </h2>
          <Para width="100%">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            cum dicta facilis, iure mollitia numquam quae quis tenetur voluptate
            voluptatibus! Distinctio minima non pariatur.
          </Para>
        </PartnerHotelContent>
      </PartnerHotelInfo>
      <section className="w-full flex Stats pt-0">
        <div className="Steps mb-5 w-1/3 p-16 bg-paleMintLight">
          <h2 className="text-sukoon font-gilroyBold text-3xl">Process</h2>
          <ul className="mt-2">
            <li className="flex">
              <img width="12px" className="mr-2" alt={`Checklist icon`} src={SukoonBullets} /> General Enquiry
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" alt={`Checklist icon`} src={SukoonBullets} />Medical opinion by psychiatrist
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" alt={`Checklist icon`} src={SukoonBullets} />Visa assistance
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" alt={`Checklist icon`} src={SukoonBullets} /> Booking, Arrival
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" alt={`Checklist icon`} src={SukoonBullets} />Consultation with doctors
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" alt={`Checklist icon`} src={SukoonBullets} />Treatment
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" alt={`Checklist icon`} src={SukoonBullets} />Sight seeing if medically allowed
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" alt={`Checklist icon`} src={SukoonBullets} />Follow-up via video appointments
            </li>
          </ul>
        </div>
        <div className="Steps mb-5 w-1/3 p-16 bg-paleMintDark">
          <h2 className="text-sukoon font-gilroyBold text-3xl">Checklist</h2>
          <ul className="mt-2">
            <li className="flex">
              <img width="12px" className="mr-2" alt={`check list icon`} src={SukoonBullets} />Quotation provided by Sukoon
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" alt={`check list icon`} src={SukoonBullets} />Treatment plan provided by Sukoon
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" alt={`check list icon`} src={SukoonBullets} />Photographs (passport size)
            </li>
          </ul>
        </div>
        <div className="Steps mb-5 w-1/3 p-16 bg-paleMintLight">
          <h2 className="text-sukoon font-gilroyBold text-3xl">
            Document Needed
          </h2>
          <ul className="mt-2">
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />Old Medical Reports
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />Visa
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />Passport
            </li>
          </ul>
        </div>
      </section>
      <MFBWrapper>
        <MeetExperts />
      </MFBWrapper>
    </>
  );
}

export default InternationalPatient;
