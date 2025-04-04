// app/layout.tsx

export const metadata = {
  title: 'Clasificador de Basura',
  description: 'Una aplicación Next.js 13 para clasificar residuos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
