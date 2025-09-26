
import MainLayout from "../components/MainLayout"

export default function Root({ children }) {
  return <MainLayout>{children}</MainLayout>
}

export const metadata = {
  title: "Liza Zabarsky",
  description: "Liza Zabarasky",
  openGraph: {
    title: "Liza Zabarsky",
    description: "Liza Zabarasky",
    url: "https://lizabar.art",
    images: [
      {
        url: "https://lizabar.art/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Liza Zabarsky banner",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
