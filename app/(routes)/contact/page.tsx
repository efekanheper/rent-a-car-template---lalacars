import React from "react";
import SectionBg from "../_components/SectionBg";
import ContactSection from "../_components/Sections/ContactSection";

const ContactPage = () => {
  return (
    <div>
      <SectionBg source="Home" title="Contact" />
      <div>
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactPage;
