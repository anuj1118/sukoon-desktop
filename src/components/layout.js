import React from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql, Link} from "gatsby";
import styled from "styled-components";
import HelpIcon from "../images/helpline/helpline copy 2@3x.jpg"

import Header from "./header";

const HeaderIntro = () => {
    return (
        <section className="w-full">
            <div id="contact-info-container" className="p-2 bg-sukoon flex justify-between">
                <div className="text-white text-5xl my-auto">
                    <span className="font-light mr-2">
                        Book
                    </span>
                        <span className="font-extrabold">
                        Appointment
                    </span>
                </div>
                <div className="mx-4 my-auto">
                    <select name="appointment" id="appointment-type"
                            className="block p-2 bg-sukoon outline-none appointment-type w-full font-medium"
                            value="">
                        <option value="" selected>Appointment Type</option>
                        <option value="">In House</option>
                        <option value="">Online Consulting</option>
                    </select>
                </div>
                <div className="inline-block mx-4 my-auto">
                    <input type="text" placeholder="Email / Phone"
                           className="block bg-transparent outline-none customer-contact-info w-full p-2 text-sukoon"/>
                </div>
                <div className="p-6 book-now-container flex">
                    <div className="book-now-inner-container bg-white  p-1">
                        <button
                            className="block relative outline-none items-center py-2 px-4 bg-sukoon text-white">
                            <span className="text-sm font-normal">Book Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};

const ReachUs = (props) =>{
  return(
      <div className="p-6">
          <span className="text-sukoon text-4xl font-semibold">Reach Us</span>
          <p className="text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
          <div className="my-2 flex flex-wrap">
              <div className="text-sukoon mr-2 my-2 flex px-1">
                  <div className="fit"><img src={HelpIcon} className="w-8" alt="Help Icon"/></div>
                  <span className="ml-4">1800 123 6789</span>
              </div>
              <div className="text-sukoon mr-2 my-2 flex px-1">
                  <div className="fit"><img src={HelpIcon} className="w-8" alt="Help Icon"/></div>
                  <span className="ml-4">1800 123 6789</span>
              </div>
              <div className="text-sukoon mr-2 my-2 flex px-1">
                  <div className="fit"><img src={HelpIcon} className="w-8" alt="Help Icon"/></div>
                  <span className="ml-4">1800 123 6789</span>
              </div>
          </div>
      </div>
  )
};

const FollowUs = (props) =>{
    const Instagram = styled.a`
    background: linear-gradient(to right, #f8ec35, #cf2e8d 67%, #1b31f0);
    margin-right: 1.5rem;
    cursor: pointer;    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `
    return(
        <div className="p-6">
            <h1 className="text-sukoon text-xl mb-2">Follow us on :-</h1>
            <div className="text-lg mr-2 break-words">
                <a href="/" className="mr-2 text-blue-800 cursor-pointer">Facebook</a>
                <a href="/" className="mr-2 text-blue-400 cursor-pointer">Twitter</a>
                <Instagram href="/">Instagram</Instagram>
                <a href="/" className="mr-2 text-blue-600 cursor-pointer">Skype</a>
            </div>
        </div>
    )
};

const CopyRight = (props) =>{
    return(
        <div className="py-2 px-6 bg-sukoon text-center break-words">
            <span className="text-white text-xs">Copyright © 2019 - All Rights Reserved - Design By Praaks</span>
        </div>
    )
}
const QuickLinks = (props) =>{

    return(
        <div className="flex justify-start p-6">
            <div>
                <span className="text-sukoon text-2xl font-semibold block">Sukoon</span>
                <ul className="mt-2">
                    <li className="text-gray-600 text-lg list-none"><Link to="/">Sitemap</Link></li>
                    <li className="text-gray-600 text-lg list-none"><Link to="/">Our Story</Link></li>
                    <li className="text-gray-600 text-lg list-none"><Link to="/">Privacy Policy</Link></li>
                    <li className="text-gray-600 text-lg list-none"><Link to="/">Terms & Conditions</Link></li>
                    <li className="text-gray-600 text-lg list-none"><Link to="/">Careers</Link></li>
                </ul>
            </div>
            <div className="flex flex-col">
                <span className="text-sukoon text-2xl lg:ml-8 font-semibold block">Quick Links</span>
                <div className="flex">
                    <div className="ml-8">
                        <ul className="mt-2">
                            <li className="text-gray-600 text-lg list-none">
                                <Link to="/">About Us</Link></li>
                            <li className="text-gray-600 text-lg list-none">
                                <Link to="/">Services</Link></li>
                            <li className="text-gray-600 text-lg list-none">
                                <Link to="/">Infrastructure</Link></li>
                            <li className="text-gray-600 text-lg list-none">
                                <Link to="/">Amenities</Link></li>
                            <li className="text-gray-600 text-lg list-none">
                                <Link to="/">Doctors</Link></li>
                        </ul>
                    </div>
                    <div className="ml-8">
                        <ul className="mt-2">
                            <li className="text-gray-600 text-lg list-none">
                                <Link to="/">International Patients</Link></li>
                            <li className="text-gray-600 text-lg list-none">
                                <Link to="/">FAQs</Link></li>
                            <li className="text-gray-600 text-lg list-none">
                                <Link to="/">Blogs</Link></li>
                            <li className="text-gray-600 text-lg list-none">
                                <Link to="/">Contacts</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

const Subscribe = (props) =>{

  const Input = styled.input`
        width: 30vw;
    `;
    return(
        <div className="p-6 flex justify-between">
            <div className="my-auto">
                <h3 className="text-sukoon inline font-bold">Subscribe</h3>
                <h3 className="ml-2 inline-block font-bold text-sukoonYellow">Our Newsletter</h3>
            </div>
            <div className="my-auto mx-4  flex self-end">
                <Input id="email-address" type="text" placeholder="Enter Your Email Address" className="outline-none mr-4 bg-transparent"/>
                <button className="text-sukoon text-lg">Click Me</button>
            </div>
        </div>
    )
};

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans sukoon-bg min-h-screen sukoon-bg-1  text-gray-900">
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="flex flex-col flex-1 justify-center mx-auto m-0 w-full">
            {children}
          </main>

          <footer className="">
            <HeaderIntro/>
              <Subscribe/>
              <div className="flex">
                <QuickLinks/>
                <div className="flex flex-col">
                    <ReachUs/>
                    <FollowUs/>
                </div>
            </div>
            <CopyRight/>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
