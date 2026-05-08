export const metadata = {
  title: "My Brand Site",
  description: "Generated with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: 'react';
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
