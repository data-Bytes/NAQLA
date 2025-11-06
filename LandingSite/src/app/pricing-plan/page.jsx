import Breadcrumb from "@/components/Breadcrumb";
 
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import SubscriptionPlanOne from "@/components/SubscriptionPlanOne";
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
      <Breadcrumb title={"Subscription Plans"} />

      {/* SubscriptionPlanOne */}
      <SubscriptionPlanOne />

      {/* CertificateOne */}
      

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
