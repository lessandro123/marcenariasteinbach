import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjetoById } from '@/lib/projetos-data';
import { ProjetoDetalhesSection } from '@/components/sections/projeto-detalhes';
import { Header, Footer } from '@/components/layout';

interface ProjetoPageProps {
  params: Promise<{
    categoria: string;
  }>;
}

// Geração estática de páginas para todas as categorias
export async function generateStaticParams() {
  return [
    { categoria: 'cozinha-premium' },
    { categoria: 'dormitorio-sob-medida' },
    { categoria: 'sala-estar' },
    { categoria: 'home-office' },
    { categoria: 'banheiro-premium' },
    { categoria: 'lavanderia-planejada' },
    { categoria: 'varanda-gourmet' },
    { categoria: 'adega-climatizada' }
  ];
}

// Metadata dinâmica para SEO
export async function generateMetadata({ params }: ProjetoPageProps): Promise<Metadata> {
  const { categoria } = await params;
  const projeto = getProjetoById(categoria);

  if (!projeto) {
    return {
      title: 'Projeto não encontrado - Marcenaria Steinbach',
    };
  }

  return {
    title: `${projeto.title} - Projetos Steinbach`,
    description: projeto.heroDescription,
    openGraph: {
      title: `${projeto.title} - Marcenaria Steinbach`,
      description: projeto.heroDescription,
      images: [projeto.imagemPrincipal],
    },
  };
}

export default async function ProjetoPage({ params }: ProjetoPageProps) {
  const { categoria } = await params;
  const projeto = getProjetoById(categoria);

  // Se não encontrar o projeto, retorna 404
  if (!projeto) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 lg:pt-20">
        <ProjetoDetalhesSection projeto={projeto} />
      </main>
      <Footer />
    </>
  );
}
