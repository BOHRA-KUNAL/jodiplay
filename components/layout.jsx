import { useRouter } from 'next/router';
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "./common/footer/footer";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  const router = useRouter();

  // Define the pages where the navbar should be hidden
  const hideNavbarPages = ['/sridevi', '/karnataka-day', '/kalyan-matka', '/milan-morning', '/rudraksh-morning', '/main-bazaar', '/time-bazaar', '/main-mumbai', '/rajdhani-matka', '/galidisawarpage', '/madhur-morning'];

  return (
    <>
      {!hideNavbarPages.includes(router.pathname) && <Navbar />}
      <Toaster position="top-right" />
      <main>{children}</main>
      {/* {shouldShowFooter && <Footer />} */}
    </>
  );
}