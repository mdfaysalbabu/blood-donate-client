"use client";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }
  return (
    <>
      <Navbar></Navbar>
      <DashboardDrawer>{children} </DashboardDrawer>
      <Footer></Footer>
    </>
  );
};

export default DashboardLayout;
