export interface ProjetoDetalhes {
  id: string;
  categoria: string;
  title: string;
  description: string;
  heroDescription: string;
  features: {
    iconName: string;
    title: string;
    description: string;
  }[];
  galeria: string[];
  imagemPrincipal: string;
  color: string;
  whatsappMessage: string;
}

export const projetos: ProjetoDetalhes[] = [
  {
    id: 'cozinha-premium',
    categoria: 'cozinha',
    title: 'Cozinha Premium',
    description: 'Funcionalidade e elegância em cada detalhe',
    heroDescription: 'Transforme sua cozinha em um espaço sofisticado e funcional. Nossos projetos de cozinha premium combinam design contemporâneo com praticidade, utilizando materiais nobres e acabamentos impecáveis.',
    features: [
      {
        iconName: 'ChefHat',
        title: 'Ilha Central',
        description: 'Design moderno com bancada em quartzo ou granito, perfeita para preparo de alimentos e momentos de convívio.'
      },
      {
        iconName: 'ChefHat',
        title: 'Marcenaria Sob Medida',
        description: 'Armários planejados com sistemas de gavetas telescópicas, nichos iluminados e divisórias inteligentes.'
      },
      {
        iconName: 'ChefHat',
        title: 'Acabamentos Premium',
        description: 'Puxadores de alta qualidade, ferragens importadas e iluminação LED integrada para realçar cada detalhe.'
      }
    ],
    galeria: [
      '/images/cozinha-premium.jpg',
      '/images/cozinha-premium-polaroid.jpg',
      '/images/cozinha-premium-3.jpg'
    ],
    imagemPrincipal: '/images/cozinha-premium-hero.png',
    color: 'from-red-600 to-red-800',
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para um projeto de Cozinha Premium. Pode me enviar mais informações?'
  },
  {
    id: 'dormitorio-sob-medida',
    categoria: 'dormitorio',
    title: 'Dormitório Sob Medida',
    description: 'Conforto e organização em perfeita harmonia',
    heroDescription: 'Crie o dormitório dos seus sonhos com móveis planejados que otimizam cada centímetro do espaço. Design elegante, funcionalidade e conforto para seu descanso perfeito.',
    features: [
      {
        iconName: 'Shirt',
        title: 'Guarda-Roupas Planejado',
        description: 'Closets e armários com divisórias inteligentes, gaveteiros e araras ajustáveis às suas necessidades.'
      },
      {
        iconName: 'Bed',
        title: 'Cabeceira Customizada',
        description: 'Design exclusivo com iluminação integrada, criados-mudos e painéis que valorizam o ambiente.'
      },
      {
        iconName: 'Sparkles',
        title: 'Acabamentos Sofisticados',
        description: 'Materiais nobres, espelhos bisotados e detalhes em marcenaria fina para um quarto elegante.'
      }
    ],
    galeria: [
      '/images/dormitorio-sob-medida.jpg'
    ],
    imagemPrincipal: '/images/dormitorio-sob-medida.jpg',
    color: 'from-amber-600 to-amber-800',
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para um projeto de Dormitório Sob Medida. Pode me enviar mais informações?'
  },
  {
    id: 'sala-estar',
    categoria: 'sala',
    title: 'Sala de Estar',
    description: 'Elegância e aconchego para momentos especiais',
    heroDescription: 'Uma sala de estar que reflete seu estilo de vida. Painéis decorativos, estantes planejadas e móveis que transformam seu espaço em um ambiente acolhedor e sofisticado.',
    features: [
      {
        iconName: 'Monitor',
        title: 'Painel TV Planejado',
        description: 'Design moderno com nichos, iluminação LED e suporte para equipamentos integrado.'
      },
      {
        iconName: 'BookOpen',
        title: 'Estantes e Prateleiras',
        description: 'Soluções personalizadas para livros, objetos decorativos e sistemas de som.'
      },
      {
        iconName: 'Sparkles',
        title: 'Marcenaria Decorativa',
        description: 'Detalhes em madeira nobre, acabamentos especiais e elementos que agregam valor ao ambiente.'
      }
    ],
    galeria: [
      '/images/sala-estar.webp'
    ],
    imagemPrincipal: '/images/sala-estar.webp',
    color: 'from-emerald-600 to-emerald-800',
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para um projeto de Sala de Estar. Pode me enviar mais informações?'
  },
  {
    id: 'home-office',
    categoria: 'escritorio',
    title: 'Home Office',
    description: 'Produtividade e estilo em seu espaço de trabalho',
    heroDescription: 'Trabalhe com conforto e eficiência em um home office planejado especialmente para você. Móveis ergonômicos, organização inteligente e design que inspira produtividade.',
    features: [
      {
        iconName: 'MonitorCheck',
        title: 'Bancada Ergonômica',
        description: 'Mesa planejada com altura ideal, passagem de cabos organizada e espaço otimizado.'
      },
      {
        iconName: 'BookOpen',
        title: 'Estante Multifuncional',
        description: 'Prateleiras ajustáveis, nichos para equipamentos e gavetas para documentos.'
      },
      {
        iconName: 'Lightbulb',
        title: 'Iluminação Focada',
        description: 'Sistema de iluminação LED integrado que favorece a concentração e reduz fadiga visual.'
      }
    ],
    galeria: [
      '/images/home-office.webp'
    ],
    imagemPrincipal: '/images/home-office.webp',
    color: 'from-blue-600 to-blue-800',
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para um projeto de Home Office. Pode me enviar mais informações?'
  },
  {
    id: 'banheiro-premium',
    categoria: 'banheiro',
    title: 'Banheiro Premium',
    description: 'Luxo e funcionalidade no seu dia a dia',
    heroDescription: 'Banheiros que são verdadeiros spas particulares. Marcenaria planejada com materiais resistentes à umidade, design sofisticado e organização perfeita.',
    features: [
      {
        iconName: 'Bath',
        title: 'Gabinetes Planejados',
        description: 'Móveis sob medida com tratamento anti-umidade, gavetas organizadoras e cubas integradas.'
      },
      {
        iconName: 'Frame',
        title: 'Espelheiras e Nichos',
        description: 'Espelhos com LED, nichos para produtos e prateleiras em vidro temperado.'
      },
      {
        iconName: 'Droplets',
        title: 'Acabamentos Impermeáveis',
        description: 'Materiais de alta qualidade, resistentes à água e ao vapor, com design atemporal.'
      }
    ],
    galeria: [
      '/images/banheiro-premium.jpg'
    ],
    imagemPrincipal: '/images/banheiro-premium.jpg',
    color: 'from-teal-600 to-teal-800',
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para um projeto de Banheiro Premium. Pode me enviar mais informações?'
  },
  {
    id: 'lavanderia-planejada',
    categoria: 'lavanderia',
    title: 'Lavanderia Planejada',
    description: 'Organização e praticidade para o dia a dia',
    heroDescription: 'Transforme sua área de serviço em um espaço funcional e organizado. Soluções inteligentes que otimizam o espaço e facilitam sua rotina.',
    features: [
      {
        iconName: 'Archive',
        title: 'Armários Multiuso',
        description: 'Espaço para máquinas, produtos de limpeza, vassouras e organização de roupas.'
      },
      {
        iconName: 'Table',
        title: 'Bancada de Trabalho',
        description: 'Superfície resistente para dobrar roupas, com tanque integrado e torneiras práticas.'
      },
      {
        iconName: 'Wind',
        title: 'Varal Embutido',
        description: 'Soluções retráteis e suspensas que economizam espaço e facilitam a secagem.'
      }
    ],
    galeria: [
      '/images/lavanderia-premium.jpg'
    ],
    imagemPrincipal: '/images/lavanderia-premium.jpg',
    color: 'from-purple-600 to-purple-800',
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para um projeto de Lavanderia Planejada. Pode me enviar mais informações?'
  },
  {
    id: 'varanda-gourmet',
    categoria: 'varanda',
    title: 'Varanda Gourmet',
    description: 'O melhor espaço para receber amigos e família',
    heroDescription: 'Crie momentos inesquecíveis em uma varanda gourmet planejada. Churrasqueira, bancadas, adega e área de convivência em perfeita harmonia.',
    features: [
      {
        iconName: 'Flame',
        title: 'Área de Churrasco',
        description: 'Churrasqueira de alta performance com coifa, bancada de apoio e armários para utensílios.'
      },
      {
        iconName: 'Wine',
        title: 'Bar Integrado',
        description: 'Bancada para drinks, adega climatizada e prateleiras para taças e garrafas.'
      },
      {
        iconName: 'Sparkles',
        title: 'Marcenaria Externa',
        description: 'Materiais resistentes às intempéries, design elegante e funcionalidade para área externa.'
      }
    ],
    galeria: [
      '/images/varanda-gourmet-renan.webp'
    ],
    imagemPrincipal: '/images/varanda-gourmet-renan.webp',
    color: 'from-orange-600 to-orange-800',
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para um projeto de Varanda Gourmet. Pode me enviar mais informações?'
  },
  {
    id: 'adega-climatizada',
    categoria: 'adega',
    title: 'Adega Climatizada',
    description: 'Armazene suas melhores garrafas com elegância',
    heroDescription: 'Uma adega climatizada que preserva seus vinhos com perfeição. Design sofisticado com temperatura controlada, iluminação LED e marcenaria exclusiva.',
    features: [
      {
        iconName: 'Thermometer',
        title: 'Sistema de Climatização',
        description: 'Temperatura e umidade controladas para conservação ideal dos vinhos.'
      },
      {
        iconName: 'Wine',
        title: 'Porta-Garrafas Exclusivo',
        description: 'Design personalizado para organizar e expor sua coleção de forma elegante.'
      },
      {
        iconName: 'Lightbulb',
        title: 'Iluminação Especial',
        description: 'LED com baixa emissão de calor que valoriza as garrafas sem comprometer o vinho.'
      }
    ],
    galeria: [
      '/images/adega-climatizada-renan.webp'
    ],
    imagemPrincipal: '/images/adega-climatizada-renan.webp',
    color: 'from-red-800 to-red-900',
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para um projeto de Adega Climatizada. Pode me enviar mais informações?'
  }
];

// Função helper para buscar projeto por ID
export function getProjetoById(id: string): ProjetoDetalhes | undefined {
  return projetos.find(projeto => projeto.id === id);
}

// Função helper para buscar projeto por categoria
export function getProjetoByCategoria(categoria: string): ProjetoDetalhes | undefined {
  return projetos.find(projeto => projeto.categoria === categoria);
}
