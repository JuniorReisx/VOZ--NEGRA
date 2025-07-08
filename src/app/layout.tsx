import "./globals.css";

export const metadata: { title: string; description: string } = {
  title: "Voz Negra - Conscientização e Combate ao Racismo",
  description: "Plataforma de educação antirracista, valorização da cultura negra e combate ao racismo estrutural.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}
