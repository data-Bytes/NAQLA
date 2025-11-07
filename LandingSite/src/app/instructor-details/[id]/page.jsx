"use client";
import { useParams } from "next/navigation";
import instructors from "../../../../public/data/instructors";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";
import Breadcrumb from "@/components/Breadcrumb";
import InstructorDetails from "@/components/InstructorDetails";

const InstructorDetailsPage = () => {
  const { id } = useParams();
  const instructor = instructors.find((inst) => inst.id.toString() === id);

  if (!instructor) {
    return <p className="text-center py-40">Instructor not found.</p>;
  }

  return (
    <>
      <Animation />
      <HeaderOne />
      <Breadcrumb title={instructor.name} />
      <InstructorDetails instructor={instructor} />
      <FooterOne />
    </>
  );
};

export default InstructorDetailsPage;
