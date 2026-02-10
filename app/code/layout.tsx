import Footer from "../Components/Footer";
import Header from "../Components/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
