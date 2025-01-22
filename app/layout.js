import "./globals.css";

export const metadata = {
  title: "Web Dev 2 Assignments",
  description: "Web Dev 2 Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
