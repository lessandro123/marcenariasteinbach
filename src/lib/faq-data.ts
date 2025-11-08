export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    id: 'processo',
    title: 'Processo de Compra e Fabricação',
    items: [
      {
        id: 'processo-1',
        question: 'Como funciona o processo de compra de móveis planejados?',
        answer:
          'O processo é simples e personalizado: primeiro, você entra em contato conosco para agendar uma visita técnica gratuita. Nossa equipe vai até o local para tirar medidas precisas e entender suas necessidades. Em seguida, criamos um projeto 3D fotorrealista para sua aprovação. Após a aprovação e assinatura do contrato, iniciamos a fabricação dos seus móveis.',
      },
      {
        id: 'processo-2',
        question: 'Quanto tempo leva desde o projeto até a instalação?',
        answer:
          'O prazo médio é de 30 a 45 dias úteis após a aprovação do projeto e confirmação do pedido. Esse período inclui a fabricação artesanal dos móveis e o agendamento da instalação. Prazos podem variar conforme a complexidade e tamanho do projeto. Sempre informamos o cronograma detalhado antes do fechamento.',
      },
      {
        id: 'processo-3',
        question: 'Vocês fazem o projeto em 3D antes da fabricação?',
        answer:
          'Sim! Todos os nossos projetos incluem modelagem 3D fotorrealista sem custo adicional. Você visualiza exatamente como ficará cada ambiente antes de aprovar. Isso permite fazer ajustes e ter total segurança sobre o resultado final. Também fornecemos múltiplas opções de acabamento para você escolher.',
      },
      {
        id: 'processo-4',
        question: 'É possível alterar o projeto após a aprovação?',
        answer:
          'Pequenos ajustes podem ser feitos até o início da produção, mas podem gerar custos adicionais dependendo da alteração. Após o início da fabricação, mudanças estruturais não são mais possíveis. Por isso, trabalhamos com atenção em cada detalhe na fase de projeto para garantir sua total satisfação antes de começar a produzir.',
      },
    ],
  },
  {
    id: 'produtos',
    title: 'Produtos e Materiais',
    items: [
      {
        id: 'produtos-1',
        question: 'Quais tipos de móveis vocês fabricam?',
        answer:
          'Fabricamos móveis planejados para todos os ambientes: cozinhas, dormitórios (guarda-roupas, criados-mudos, penteadeiras), home offices, salas de estar e jantar, banheiros, áreas gourmet, closets, e ambientes corporativos. Cada peça é única e projetada exclusivamente para seu espaço.',
      },
      {
        id: 'produtos-2',
        question: 'Que tipo de materiais vocês utilizam?',
        answer:
          'Trabalhamos com materiais premium: MDF e MDP de alta densidade, madeira maciça selecionada, vidros temperados, ferragens importadas de última geração (Blum, Hettich), e acabamentos especiais. Todos os materiais são de fornecedores certificados, garantindo durabilidade e sofisticação ao seu projeto.',
      },
      {
        id: 'produtos-3',
        question: 'Vocês trabalham com móveis sob medida ou apenas padrões?',
        answer:
          'Todos os nossos móveis são 100% sob medida e planejados exclusivamente para você. Não trabalhamos com projetos padronizados. Cada cliente tem necessidades únicas, e nosso trabalho é criar soluções que aproveitem perfeitamente cada centímetro do seu espaço com o estilo que você deseja.',
      },
      {
        id: 'produtos-4',
        question: 'Quais opções de acabamento estão disponíveis?',
        answer:
          'Oferecemos ampla variedade: laminados em diversas cores e texturas (madeirados, lisos, concreto), laqueados fosco ou brilho, acabamentos em verniz, vidros (fumê, bronze, espelhado), pedras naturais e sintéticas. Tudo pode ser combinado para criar o ambiente dos seus sonhos.',
      },
    ],
  },
  {
    id: 'atendimento',
    title: 'Atendimento e Área de Cobertura',
    items: [
      {
        id: 'atendimento-1',
        question: 'Vocês atendem somente em Palhoça ou em outras regiões?',
        answer:
          'Atendemos Palhoça e toda a Grande Florianópolis (Florianópolis, São José, Biguaçu, Santo Amaro da Imperatriz, e região). Para projetos especiais, também atendemos outras cidades de Santa Catarina. Entre em contato para confirmar se atendemos sua região.',
      },
      {
        id: 'atendimento-2',
        question: 'Como posso solicitar um orçamento?',
        answer:
          'Você pode solicitar orçamento pelo WhatsApp, telefone, e-mail ou através do formulário de contato em nosso site. Agende uma visita técnica gratuita e nossa equipe irá até você para entender suas necessidades, tirar medidas e apresentar soluções personalizadas sem compromisso.',
      },
      {
        id: 'atendimento-3',
        question: 'Qual o horário de atendimento?',
        answer:
          'Nosso atendimento comercial funciona de segunda a sexta-feira, das 8h às 18h. Visitas técnicas e instalações são agendadas conforme disponibilidade e horários de atendimento.',
      },
    ],
  },
  {
    id: 'garantia',
    title: 'Garantia e Pós-venda',
    items: [
      {
        id: 'garantia-1',
        question: 'Qual o prazo de garantia dos móveis?',
        answer:
          'Oferecemos 5 anos de garantia contra defeitos de fabricação em todos os nossos móveis. A garantia cobre estrutura, acabamentos e ferragens, desde que respeitadas as condições de uso e manutenção adequada. Nossa garantia estendida reflete a confiança em nossos 71 anos de experiência e qualidade.',
      },
      {
        id: 'garantia-2',
        question: 'Vocês prestam serviço de manutenção após a instalação?',
        answer:
          'Sim! Oferecemos assistência técnica completa durante e após o período de garantia. Se precisar de ajustes, reparos ou até mesmo expansão do projeto original, nossa equipe está à disposição. Também fornecemos orientações sobre limpeza e conservação para manter seus móveis sempre impecáveis.',
      },
      {
        id: 'garantia-3',
        question: 'O que fazer se houver algum problema após a instalação?',
        answer:
          'Entre em contato imediatamente através dos nossos canais de atendimento (WhatsApp, telefone ou e-mail). Nossa equipe técnica agendará uma visita para avaliar e resolver a questão com máxima agilidade. Seu conforto e satisfação são nossa prioridade, e estamos sempre prontos para atender você.',
      },
    ],
  },
];
