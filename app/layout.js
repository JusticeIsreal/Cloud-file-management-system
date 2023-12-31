import { Inter } from "next/font/google";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import "./globals.css";
import SideNavBar from "./components/SideNavBar";
import CreateFolderModal from "./components/Folder/CreateFolderModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  // console.log(session);
  return (
    <html lang="en" style={{ background: "white" }}>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="flex">
            <SideNavBar />
            <div className="grid grid-cols-1 md:grid-cols-3 w-full">
              <main className="col-span-2 bg-blue-100 p-2">{children}</main>
              <div className="bg-white p-2">storage</div>
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
