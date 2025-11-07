import BlogDetailsInner from "@/components/BlogDetailsInner";
import Breadcrumb from "@/components/Breadcrumb";
 
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
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
      <Breadcrumb title={"Blog Details"} />

      {/* BlogDetailsInner */}
      <BlogDetailsInner />

      {/* CertificateOne */}
      

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
