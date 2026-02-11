import Image from "next/image";
import BankSelection from "./Components/BankSelection";
import GoogleTranslate from "./Components/GoogleTranslate";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <BankSelection />
      <Footer/>
    </>
  );
}
