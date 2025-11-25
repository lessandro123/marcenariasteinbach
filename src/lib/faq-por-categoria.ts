import { FAQCategory, faqData } from './faq-data';

// Mapeamento de FAQs específicas por categoria de projeto
export const faqPorCategoria: Record<string, FAQCategory[]> = {
  cozinha: [
    {
      id: 'planejamento-cozinha',
      title: 'Planejamento de Cozinha',
      items: [
        {
          id: 'cozinha-1',
          question: 'Qual o tamanho ideal para uma ilha central de cozinha?',
          answer:
            'O tamanho ideal da ilha depende do espaço disponível. Recomendamos no mínimo 1,20m de largura e pelo menos 90cm de circulação ao redor. Nossa equipe faz um estudo personalizado do seu espaço para determinar as dimensões perfeitas, garantindo funcionalidade e conforto.',
        },
        {
          id: 'cozinha-2',
          question: 'Quais são as melhores pedras para bancada de cozinha?',
          answer:
            'Trabalhamos com quartzo, granito e porcelanato de alta qualidade. O quartzo é nossa recomendação premium por ser resistente a manchas e arranhões, além de não exigir impermeabilização. O granito oferece beleza natural e durabilidade. Apresentamos amostras reais para você escolher.',
        },
        {
          id: 'cozinha-3',
          question: 'Como funciona a iluminação em cozinhas planejadas?',
          answer:
            'Projetamos iluminação em camadas: LED embutido nos armários superiores para iluminar a bancada, spots direcionados para a ilha, e fitas LED nos nichos. Tudo controlado por dimmers para criar diferentes ambientes. A iluminação é fundamental tanto para funcionalidade quanto para destacar os acabamentos premium.',
        },
        {
          id: 'cozinha-4',
          question: 'Vocês instalam eletrodomésticos embutidos?',
          answer:
            'Sim! Nossos projetos contemplam todos os espaços para eletrodomésticos embutidos (forno, micro-ondas, coifa, lava-louças, frigobar). Trabalhamos com as principais marcas e garantimos que os nichos sejam perfeitamente dimensionados com acabamento impecável.',
        },
      ],
    },
    {
      id: 'materiais-cozinha',
      title: 'Materiais e Acabamentos',
      items: [
        {
          id: 'cozinha-5',
          question: 'Qual material é melhor para armários de cozinha: MDF ou MDP?',
          answer:
            'Para cozinhas premium, recomendamos MDF por sua maior resistência à umidade e melhor acabamento. O MDF permite detalhes mais refinados, aceita melhor pintura e laqueamento. Todos nossos armários têm tratamento impermeável e ferragens importadas de alta durabilidade.',
        },
        {
          id: 'cozinha-6',
          question: 'As portas dos armários têm sistema amortecido?',
          answer:
            'Sim! Todas as nossas cozinhas premium incluem dobradiças e corrediças com sistema de fechamento suave (soft close) da Blum ou Hettich. Isso garante silêncio, durabilidade e sofisticação. As gavetas telescópicas suportam até 40kg e abrem completamente.',
        },
        {
          id: 'cozinha-7',
          question: 'Vocês trabalham com portas de vidro na cozinha?',
          answer:
            'Sim! Oferecemos diversas opções: vidro fumê, bronze, serigrafado, ou transparente com moldura de alumínio. O vidro agrega elegância e permite criar vitrines para louças especiais. Todo vidro é temperado para máxima segurança.',
        },
      ],
    },
    {
      id: 'instalacao-cozinha',
      title: 'Instalação e Manutenção',
      items: [
        {
          id: 'cozinha-8',
          question: 'Quanto tempo leva a instalação de uma cozinha completa?',
          answer:
            'A instalação de uma cozinha planejada geralmente leva de 3 a 7 dias úteis, dependendo do tamanho e complexidade. Isso inclui montagem de armários, instalação de bancadas, ajustes finais e limpeza. Nossa equipe trabalha com máxima organização para minimizar transtornos.',
        },
        {
          id: 'cozinha-9',
          question: 'Como fazer a limpeza e manutenção da cozinha planejada?',
          answer:
            'Para limpeza diária, use apenas pano úmido com detergente neutro. Evite produtos abrasivos, palha de aço ou álcool. Em superfícies de pedra, utilize limpa-pedras específico. Fornecemos um manual completo de cuidados e fazemos revisão gratuita após 30 dias da instalação.',
        },
        {
          id: 'cozinha-10',
          question: 'É possível adicionar mais armários depois da instalação?',
          answer:
            'Sim! Guardamos as especificações exatas do seu projeto (cores, acabamentos, medidas). Você pode solicitar expansão ou módulos adicionais a qualquer momento. Mantemos relacionamento com os mesmos fornecedores para garantir continuidade perfeita de acabamentos.',
        },
      ],
    },
  ],

  dormitorio: [
    {
      id: 'planejamento-dormitorio',
      title: 'Planejamento de Dormitório',
      items: [
        {
          id: 'dormitorio-1',
          question: 'Como calcular o tamanho ideal do guarda-roupa?',
          answer:
            'Consideramos o espaço disponível e suas necessidades de armazenamento. Um casal geralmente precisa de 2,5m a 4m de largura. Fazemos um estudo do seu volume de roupas, sapatos e acessórios para dimensionar gavetas, prateleiras e cabideiros na proporção ideal.',
        },
        {
          id: 'dormitorio-2',
          question: 'É possível ter closet em quarto pequeno?',
          answer:
            'Sim! Criamos soluções de closet compacto a partir de 2m². Usamos portas de correr, espelhos estratégicos e organização inteligente para otimizar cada centímetro. Projetos 3D permitem visualizar o melhor aproveitamento antes da execução.',
        },
        {
          id: 'dormitorio-3',
          question: 'Vocês fazem cabeceira planejada de cama?',
          answer:
            'Sim! Criamos cabeceiras planejadas com nichos, iluminação embutida, tomadas integradas e muito mais. Podemos incorporar mesas laterais suspensas, painéis estofados e soluções de armazenamento discreto, sempre alinhado ao estilo do ambiente.',
        },
      ],
    },
    {
      id: 'organizacao-dormitorio',
      title: 'Organização e Funcionalidade',
      items: [
        {
          id: 'dormitorio-4',
          question: 'Como organizar sapatos no guarda-roupa?',
          answer:
            'Oferecemos diversas soluções: sapateiras giratórias, prateleiras inclinadas, gavetas específicas ou nichos com iluminação LED. Podemos criar um módulo exclusivo para calçados que comporta de 30 a 80 pares, dependendo do projeto.',
        },
        {
          id: 'dormitorio-5',
          question: 'Vocês incluem sistema de iluminação interna?',
          answer:
            'Sim! Recomendamos iluminação LED interna com sensor de presença. A luz acende automaticamente ao abrir as portas, facilitando visualizar suas roupas e acessórios. O sistema é econômico e valoriza os acabamentos internos.',
        },
        {
          id: 'dormitorio-6',
          question: 'É melhor porta de abrir ou de correr?',
          answer:
            'Porta de correr economiza espaço e é ideal para quartos menores. Porta de abrir permite visão total do interior e melhor acesso. Analisamos seu espaço e rotina para recomendar a melhor solução. Ambas podem ter espelhos e acabamentos personalizados.',
        },
      ],
    },
  ],

  sala: [
    {
      id: 'planejamento-sala',
      title: 'Planejamento de Sala',
      items: [
        {
          id: 'sala-1',
          question: 'Como escolher o painel de TV ideal?',
          answer:
            'O painel deve ter largura 15-20cm maior que a TV, com altura que permita a tela ficar na altura dos olhos quando sentado (cerca de 1,2m do chão). Incluímos espaço para equipamentos, gerenciamento de cabos e iluminação LED de destaque.',
        },
        {
          id: 'sala-2',
          question: 'Vocês fazem estante para livros sob medida?',
          answer:
            'Sim! Criamos bibliotecas personalizadas com prateleiras reguláveis, nichos para decoração, iluminação direcionada e até escadas para modelos mais altos. Cada prateleira é dimensionada para suportar o peso dos livros com segurança.',
        },
        {
          id: 'sala-3',
          question: 'É possível integrar home theater no planejamento?',
          answer:
            'Perfeitamente! Projetamos nichos para caixas de som, suporte para soundbar, painel acústico e todo cabeamento embutido. Trabalhamos junto com instaladores de áudio para garantir resultado profissional e estética impecável.',
        },
      ],
    },
    {
      id: 'acabamentos-sala',
      title: 'Acabamentos e Estilo',
      items: [
        {
          id: 'sala-4',
          question: 'Quais acabamentos são tendência para sala de estar?',
          answer:
            'Atuais tendências incluem: madeiras naturais com veios marcantes, laqueados foscos em tons neutros, detalhes em metal dourado ou preto, pedras naturais e iluminação LED integrada. Combinamos elementos para criar ambientes sofisticados e atemporais.',
        },
        {
          id: 'sala-5',
          question: 'Vocês trabalham com espelhos nos móveis de sala?',
          answer:
            'Sim! Espelhos agregam amplitude e sofisticação. Usamos espelhos bronze, fumê ou bisotados em painéis, portas de cristaleiras e detalhes decorativos. Todo espelho é fixado com segurança e tratamento anti-corrosão.',
        },
      ],
    },
  ],

  escritorio: [
    {
      id: 'planejamento-escritorio',
      title: 'Planejamento de Home Office',
      items: [
        {
          id: 'escritorio-1',
          question: 'Qual a altura ideal da bancada de trabalho?',
          answer:
            'A altura padrão é 75cm, mas personalizamos conforme sua altura e cadeira. Para múltiplos usuários, oferecemos bancadas reguláveis. Também consideramos espaço para as pernas (mín. 60cm), profundidade adequada (60-80cm) e ergonomia para jornadas longas.',
        },
        {
          id: 'escritorio-2',
          question: 'Como organizar cabos e equipamentos eletrônicos?',
          answer:
            'Criamos sistema de gerenciamento de cabos com calhas, passagens estratégicas e múltiplas tomadas em pontos acessíveis. Nichos ventilados para CPU, suportes para roteador e espaço para filtro de linha, tudo organizado e invisível.',
        },
        {
          id: 'escritorio-3',
          question: 'É possível ter estante e mesa integradas?',
          answer:
            'Sim! Projetamos módulos integrados com prateleiras para livros, nichos para decoração, arquivos e materiais de trabalho, tudo harmonizado. A integração otimiza espaço e cria ambiente profissional e aconchegante.',
        },
      ],
    },
    {
      id: 'funcionalidade-escritorio',
      title: 'Funcionalidade e Conforto',
      items: [
        {
          id: 'escritorio-4',
          question: 'Vocês fazem home office para dois usuários?',
          answer:
            'Sim! Criamos bancadas em L, paralelas ou frente a frente, com espaço individualizado para cada usuário. Cada posição tem suas tomadas, iluminação e armazenamento próprio, mantendo funcionalidade e harmonia visual.',
        },
        {
          id: 'escritorio-5',
          question: 'Como incluir espaço para impressora e documentos?',
          answer:
            'Projetamos nichos específicos com ventilação para impressora, gavetas para papel, pastas suspensas para documentos e prateleiras para materiais. Tudo acessível e organizado para máxima produtividade.',
        },
      ],
    },
  ],

  banheiro: [
    {
      id: 'planejamento-banheiro',
      title: 'Planejamento de Banheiro',
      items: [
        {
          id: 'banheiro-1',
          question: 'Móveis planejados são resistentes à umidade do banheiro?',
          answer:
            'Sim! Utilizamos MDF naval com tratamento especial contra umidade, ferragens em aço inox ou cromadas, pés em alumínio reguláveis e acabamentos impermeabilizados. Todos os materiais são específicos para áreas molhadas, garantindo durabilidade.',
        },
        {
          id: 'banheiro-2',
          question: 'Como escolher o tamanho da bancada do banheiro?',
          answer:
            'Consideramos a cuba escolhida, espaço para itens do dia a dia e circulação adequada. A profundidade ideal é 50-60cm. Criamos gavetas organizadoras, nichos e até torres laterais para maximizar armazenamento em banheiros pequenos.',
        },
        {
          id: 'banheiro-3',
          question: 'Vocês fazem nichos para o box?',
          answer:
            'Sim! Criamos nichos em alvenaria ou com prateleiras de vidro temperado, com iluminação LED e impermeabilização total. Os nichos são posicionados estrategicamente para facilitar o uso de produtos durante o banho.',
        },
      ],
    },
    {
      id: 'acabamentos-banheiro',
      title: 'Acabamentos e Detalhes',
      items: [
        {
          id: 'banheiro-4',
          question: 'Vocês trabalham com espelho com iluminação?',
          answer:
            'Sim! Oferecemos espelhos com LED integrado, seja em moldura completa ou apenas na parte superior. A iluminação pode ser branca fria ou quente, com ou sem dimmer. Também instalamos tomadas próximas para secador e chapinha.',
        },
        {
          id: 'banheiro-5',
          question: 'É possível ter torre de armazenamento no banheiro?',
          answer:
            'Perfeitamente! Torres verticais aproveitam a altura do ambiente e oferecem muito armazenamento em pouco espaço. Incluem prateleiras, gavetas e nichos para toalhas, produtos e itens de limpeza, sempre com acabamento premium.',
        },
      ],
    },
  ],

  lavanderia: [
    {
      id: 'planejamento-lavanderia',
      title: 'Planejamento de Lavanderia',
      items: [
        {
          id: 'lavanderia-1',
          question: 'Qual o tamanho mínimo para uma lavanderia funcional?',
          answer:
            'Uma lavanderia funcional pode ser criada a partir de 1,5m². Otimizamos cada centímetro com armários verticais, prateleiras suspensas e soluções retráteis. Mesmo em espaços compactos, garantimos lugar para máquina de lavar, tanque, produtos de limpeza e área para dobrar roupas.',
        },
        {
          id: 'lavanderia-2',
          question: 'Vocês integram espaço para máquina de lavar e secar?',
          answer:
            'Sim! Criamos nichos perfeitos para máquina de lavar e secadora, seja empilhadas (economizando espaço) ou lado a lado. Incluímos tomadas específicas, espaço para mangueiras e ventilação adequada. Tudo escondido atrás de portas planejadas para manter a estética.',
        },
        {
          id: 'lavanderia-3',
          question: 'Como aproveitar lavanderia pequena de apartamento?',
          answer:
            'Para apartamentos, nossa especialidade é otimização vertical. Criamos torres com armários até o teto, tanque suspenso com gabinete embaixo, varal retrátil, prateleiras deslizantes e nichos para produtos. Cada centímetro é aproveitado com inteligência e beleza.',
        },
        {
          id: 'lavanderia-4',
          question: 'É possível ter área de passar roupa integrada?',
          answer:
            'Perfeitamente! Projetamos tábuas de passar embutidas que se fecham em um painel ou armário quando não estão em uso. Também criamos bancadas rebaixáveis e suportes para ferro com tomada próxima. Tudo prático e invisível quando guardado.',
        },
      ],
    },
    {
      id: 'materiais-lavanderia',
      title: 'Materiais e Acabamentos',
      items: [
        {
          id: 'lavanderia-5',
          question: 'Que materiais usar em lavanderia para resistir à umidade?',
          answer:
            'Utilizamos MDF naval com tratamento impermeável, ferragens em aço inox ou cromadas, pés reguláveis em alumínio e acabamentos à prova d\'água. Todos os armários têm ventilação adequada e selantes especiais que resistem perfeitamente ao ambiente úmido da lavanderia.',
        },
        {
          id: 'lavanderia-6',
          question: 'Qual a melhor bancada para lavanderia?',
          answer:
            'Recomendamos bancadas em quartzo, porcelanato ou granito. Esses materiais não mancham, são fáceis de limpar e resistem a produtos químicos de limpeza. Se preferir custo mais acessível, oferecemos MDF naval impermeabilizado de alta qualidade com acabamento impecável.',
        },
        {
          id: 'lavanderia-7',
          question: 'Vocês fazem tanque de embutir?',
          answer:
            'Sim! Trabalhamos com tanques de fibra, mármore sintético ou inox embutidos na bancada. O gabinete embaixo oferece espaço para sabões, baldes e itens de limpeza. Incluímos torneiras modernas e misturadores de alta qualidade.',
        },
      ],
    },
    {
      id: 'organizacao-lavanderia',
      title: 'Organização e Funcionalidade',
      items: [
        {
          id: 'lavanderia-8',
          question: 'Como organizar produtos de limpeza na lavanderia?',
          answer:
            'Criamos armários específicos com prateleiras ajustáveis em diferentes alturas para acomodar frascos altos e baixos. Gaveteiros para panos e esponjas, nichos para vassouras e rodos, tudo etiquetável e de fácil acesso. Nada fica espalhado.',
        },
        {
          id: 'lavanderia-9',
          question: 'Vocês incluem varal na lavanderia planejada?',
          answer:
            'Sim! Oferecemos várias soluções: varais retráteis de parede ou teto, varais suspensos com acionamento por manivela (para aproveitar altura), ou varais em sanfona embutidos. Escolhemos a melhor opção de acordo com seu espaço e preferência.',
        },
        {
          id: 'lavanderia-10',
          question: 'É possível ter despensa integrada na lavanderia?',
          answer:
            'Sim! Muitos clientes aproveitam a lavanderia para criar área de despensa. Projetamos armários altos com prateleiras para alimentos não perecíveis, nichos ventilados e organização separada para itens de limpeza e comida, sempre com identificação clara e acesso prático.',
        },
      ],
    },
  ],

  varanda: [
    {
      id: 'churrasqueira-preparo',
      title: 'Churrasqueira e Área de Preparo',
      items: [
        {
          id: 'varanda-1',
          question: 'Qual o tamanho ideal para uma área de churrasqueira em varanda gourmet?',
          answer:
            'Recomendamos no mínimo 1,5m a 2m de largura para uma churrasqueira funcional, incluindo bancada lateral de apoio. O ideal é ter 60-80cm de espaço livre ao redor para circulação confortável. Nossa equipe faz estudo personalizado do seu espaço, considerando coifa, pia e armazenamento integrado.',
        },
        {
          id: 'varanda-2',
          question: 'Que materiais são resistentes ao calor próximo à churrasqueira?',
          answer:
            'Utilizamos pedras naturais como granito e ardósia, porcelanato de alta resistência térmica, e revestimentos específicos para áreas de calor. As bancadas próximas são em granito ou quartzo. Madeiras recebem tratamento ignífugo e seladores especiais. Todas as ferragens são em aço inox resistente.',
        },
        {
          id: 'varanda-3',
          question: 'Vocês instalam coifa na churrasqueira? Como funciona?',
          answer:
            'Sim! Instalamos coifas de alto desempenho em inox ou com pintura eletrostática. O sistema de exaustão é dimensionado para capturar toda a fumaça eficientemente. Oferecemos modelos com iluminação LED integrada e motores silenciosos. A manutenção é simples com filtros removíveis.',
        },
        {
          id: 'varanda-4',
          question: 'É possível ter pia e bancada de apoio integradas à churrasqueira?',
          answer:
            'Perfeitamente! Criamos projetos integrados com pia em inox ou granito, bancada ampla para preparo, nichos para utensílios, prateleiras para temperos e espaço para lixeira. Tudo planejado em harmonia visual e funcional, otimizando cada centímetro da sua varanda gourmet.',
        },
      ],
    },
    {
      id: 'moveis-resistencia',
      title: 'Móveis e Resistência Externa',
      items: [
        {
          id: 'varanda-5',
          question: 'Os móveis de varanda gourmet resistem ao sol e chuva?',
          answer:
            'Sim! Trabalhamos com madeiras nobres tratadas (cumaru, ipê, teca), MDF naval com tratamento UV e impermeabilização total, e ferragens em aço inox. Aplicamos vernizes e selantes especiais de alta resistência. Todos os materiais são específicos para área externa e garantem durabilidade por muitos anos.',
        },
        {
          id: 'varanda-6',
          question: 'Como funciona a adega climatizada em varanda gourmet?',
          answer:
            'Projetamos adegas com sistema de refrigeração específico para área externa, isolamento térmico reforçado, porta de vidro temperado e controle preciso de temperatura (12-18°C) e umidade. Capacidade de 30 a 200 garrafas, iluminação LED que não aquece, e design sofisticado que valoriza seu espaço.',
        },
        {
          id: 'varanda-7',
          question: 'Vocês fazem armários externos para guardar utensílios de churrasco?',
          answer:
            'Sim! Criamos armários planejados com tratamento anti-umidade, espaço específico para espetos, grelhas, carvão, acendedores e todos os acessórios. As portas protegem contra chuva e sol. Incluímos gavetas organizadoras, prateleiras ajustáveis e puxadores em inox.',
        },
      ],
    },
    {
      id: 'bar-integracao',
      title: 'Bar, Integração e Iluminação',
      items: [
        {
          id: 'varanda-8',
          question: 'Como projetar o bar integrado em varanda gourmet?',
          answer:
            'Criamos bancada específica para drinks, nichos para garrafas organizadas, prateleiras com iluminação LED para taças, espaço para frigobar embutido, máquina de gelo ou chopeira. O design harmoniza com a churrasqueira, mantendo funcionalidade e sofisticação para receber seus convidados.',
        },
        {
          id: 'varanda-9',
          question: 'É possível integrar a varanda gourmet com a cozinha interna?',
          answer:
            'Perfeitamente! Projetamos portas de correr ou camarão que integram os ambientes, passa-pratos planejados, bancadas que se comunicam visualmente, e continuidade de materiais e cores. Essa integração valoriza festas e facilita o fluxo entre cozinha e área gourmet.',
        },
        {
          id: 'varanda-10',
          question: 'Qual iluminação é ideal para varanda gourmet?',
          answer:
            'Recomendamos iluminação em camadas: LED embutido na coifa, spots direcionados para bancadas de preparo, fitas LED decorativas em nichos e bar, pendentes estilosos sobre áreas sociais, e iluminação ambiente com dimmer. Todos os componentes têm proteção IP65 para área externa, garantindo segurança e durabilidade.',
        },
      ],
    },
  ],

  adega: [
    {
      id: 'climatizacao-conservacao',
      title: 'Sistema de Climatização e Conservação',
      items: [
        {
          id: 'adega-1',
          question: 'Qual a temperatura ideal para conservar vinhos em uma adega climatizada?',
          answer:
            'A temperatura ideal varia entre 12°C e 18°C, dependendo do tipo de vinho. Vinhos tintos ficam perfeitos entre 16-18°C, brancos e rosés entre 8-12°C. Nossas adegas climatizadas possuem controle digital preciso de temperatura com variação máxima de ±1°C, garantindo conservação ideal para sua coleção.',
        },
        {
          id: 'adega-2',
          question: 'Como funciona o controle de umidade na adega climatizada?',
          answer:
            'Mantemos a umidade ideal entre 60-70% para prevenir o ressecamento das rolhas e oxidação do vinho. O sistema possui controle automático de umidade, evaporadores especiais e circulação de ar filtrado. Isso garante que suas garrafas sejam conservadas em condições perfeitas por anos.',
        },
        {
          id: 'adega-3',
          question: 'A adega climatizada consome muita energia elétrica?',
          answer:
            'Nossas adegas são projetadas com alta eficiência energética. Com isolamento térmico de qualidade superior e compressores modernos, o consumo mensal é baixo, similar a uma geladeira pequena. O investimento em climatização adequada preserva vinhos que valem muito mais que o custo de energia.',
        },
        {
          id: 'adega-4',
          question: 'É possível instalar adega climatizada em área externa/varanda gourmet?',
          answer:
            'Sim! Para áreas externas, utilizamos isolamento térmico reforçado, vedação especial e sistema de climatização mais potente para compensar variações de temperatura ambiente. O projeto considera exposição ao sol e calor, garantindo temperatura interna estável mesmo em dias quentes.',
        },
      ],
    },
    {
      id: 'capacidade-design',
      title: 'Capacidade, Design e Organização',
      items: [
        {
          id: 'adega-5',
          question: 'Quantas garrafas cabem em uma adega climatizada sob medida?',
          answer:
            'Criamos adegas de 30 até mais de 200 garrafas, totalmente personalizadas para seu espaço. Fazemos estudo dimensional considerando altura, largura e profundidade disponíveis. Otimizamos cada centímetro com prateleiras inteligentes para você ter a capacidade ideal.',
        },
        {
          id: 'adega-6',
          question: 'Como são organizadas as garrafas na adega? Posso separar por tipo de vinho?',
          answer:
            'As prateleiras são projetadas com inclinação de 5-10° para manter o vinho em contato com a rolha. Você pode personalizar seções por tipo (tinto, branco, espumante), região ou produtor. Oferecemos etiquetas elegantes e iluminação para facilitar a identificação da sua coleção.',
        },
        {
          id: 'adega-7',
          question: 'Vocês trabalham com porta de vidro na adega climatizada?',
          answer:
            'Sim! Utilizamos vidro temperado duplo com proteção anti-UV que bloqueia 99% dos raios prejudiciais ao vinho. O vidro tem isolamento térmico de alta performance e permite visualizar sua coleção com sofisticação. Também oferecemos moldura em alumínio, inox ou madeira nobre.',
        },
        {
          id: 'adega-8',
          question: 'A iluminação LED da adega prejudica o vinho?',
          answer:
            'Não! Utilizamos LED especial de baixa emissão de calor e sem radiação UV, que não prejudica o vinho. A iluminação valoriza sua coleção de forma elegante e pode ser controlada por sensor de presença ou dimmer. Liga apenas quando você abre a porta.',
        },
      ],
    },
    {
      id: 'integracao-personalizacao',
      title: 'Integração e Personalização',
      items: [
        {
          id: 'adega-9',
          question: 'É possível integrar a adega climatizada com o bar ou varanda gourmet?',
          answer:
            'Perfeitamente! Criamos projetos integrados onde a adega se harmoniza com móveis do bar, churrasqueira ou sala. Pode ser embutida em painéis, incorporada em ilhas ou como destaque decorativo. O design é personalizado para criar um ambiente sofisticado e funcional.',
        },
        {
          id: 'adega-10',
          question: 'Qual o espaço mínimo necessário para instalar uma adega climatizada?',
          answer:
            'Trabalhamos com adegas compactas a partir de 80cm de largura para 30-50 garrafas. Para otimizar espaços pequenos, utilizamos altura (modelos de até 2m) e profundidade reduzida. Fazemos projetos verticais, embutidos ou sob medida para aproveitar qualquer espaço disponível.',
        },
      ],
    },
  ],
};

/**
 * Retorna as FAQs específicas de uma categoria.
 * Se a categoria não tiver FAQs específicas, retorna as FAQs genéricas como fallback.
 */
export function getFAQByCategoria(categoria: string): FAQCategory[] {
  return faqPorCategoria[categoria] || faqData;
}
