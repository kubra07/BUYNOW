import Header from "../componenets/layouts/Header";
import "./globals.css";

export default function RootLayout({ children }) {
    return ( <html lang = "en" >
        <head/>
        <body>
        <Header/> { children } 
        </body> 
        </html>
    );
}