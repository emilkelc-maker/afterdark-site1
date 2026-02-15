
export const metadata = {
  title: "AFTERDARK",
  description: "Built After Dark."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "black", color: "white", fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
