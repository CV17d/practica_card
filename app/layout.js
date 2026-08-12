import './globals.css';

export const metadata = {
  title: 'Nike Air Force 1 Premium',
  description: 'Nike Air Force product card',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
