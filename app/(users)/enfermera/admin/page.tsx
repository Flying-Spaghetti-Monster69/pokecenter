"use server";

import { redirect } from "next/navigation";
const page = () => {
  return redirect("/enfermera/admin/1");
};

export default page;
