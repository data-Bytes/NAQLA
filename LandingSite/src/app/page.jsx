import AboutOne from "@/components/AboutOne";
import BannerOne from "@/components/BannerOne";
import BlogOne from "@/components/BlogOne";

import ChooseUsOne from "@/components/ChooseUsOne";
import CounterOne from "@/components/CounterOne";
import FeaturesOne from "@/components/FeaturesOne";
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
      <HeaderOne />
      <Animation />
      <BannerOne />
      <FeaturesOne />
      <AboutOne />
      <InstructorOne />
      <ChooseUsOne />
      <CounterOne />
      <TestimonialsOne />
      <BlogOne />
      <FooterOne />
    </>
  );
};

export default page;
