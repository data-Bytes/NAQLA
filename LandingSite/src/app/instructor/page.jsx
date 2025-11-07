import Breadcrumb from "@/components/Breadcrumb";
 
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import InstructorAll from "@/components/InstructorAll";
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
      <Breadcrumb title={"Instructors"} />

      {/* InstructorAll */}
      <InstructorAll />

      {/* CertificateOne */}
      

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
