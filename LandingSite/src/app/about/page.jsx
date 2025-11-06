import AboutOne from "@/components/AboutOne";
import Breadcrumb from "@/components/Breadcrumb";
 
import ChooseUsOne from "@/components/ChooseUsOne";
import CounterOne from "@/components/CounterOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import InstructorOne from "@/components/InstructorOne";
import TestimonialsOne from "@/components/TestimonialsOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Naqla Education Platform",
  description:
    "Naqla Education Platform.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* AboutOne */}
      <AboutOne />

      {/* InstructorOne */}
      <InstructorOne />

      {/* ChooseUsOne */}
      <ChooseUsOne />

      {/* CounterOne */}
      <CounterOne />

      {/* TestimonialsOne */}
      <TestimonialsOne />


      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
