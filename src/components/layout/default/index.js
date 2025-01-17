import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({children}) {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
};
