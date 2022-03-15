interface LayoutProps {
    children: React.ReactNode;
}

import Header from "./components/header";
import Footer from "./components/footer";
import SideBar from "./components/side-bar";

export default function DefaultLayout({children}: LayoutProps) {
    return (
        <div className="flex flex-col bg-neutral-200 h-screen w-screen py-16 px-20">
            <Header />
            <div className="flex flex-row h-available w-full">
                <SideBar />
                {children}
            </div>
            <Footer />
        </div>
    )
}