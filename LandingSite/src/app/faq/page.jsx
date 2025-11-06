import Breadcrumb from "@/components/Breadcrumb";
 
import FAQInnerOne from "@/components/FAQInnerOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import TestimonialsThree from "@/components/TestimonialsThree";
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
      <Breadcrumb title={"FAQ"} />

      {/* FAQInnerOne */}
      <FAQInnerOne />

      {/* TestimonialsThree */}
      {/* <TestimonialsThree /> */}

      {/* BrandTwo */}
      {/* <BrandTwo /> */}

      {/* CertificateOne */}
      

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
