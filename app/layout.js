import I18nProvider from "./contexts/i18n";
import SiteProvider from "./contexts/site";
import Providers from "./provider/userProvider";
import "./styles/globals.scss";

export const metadata = {
  title: "Mahir Group BD",
  description:
    "Delivering excellence in garment accessories with quality and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <I18nProvider>
          <Providers>
            <SiteProvider>{children}</SiteProvider>
          </Providers>
        </I18nProvider>
      </body>
    </html>
  );
}
