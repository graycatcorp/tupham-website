/* ========================================
   TUPHAM AI - WEBSITE SCRIPTS
   ======================================== */

const translations = {
    'pt-BR': {
        // Navigation
        'nav.features': 'Funcionalidades',
        'nav.whyTupham': 'Por que Tupham?',
        'nav.impact': 'Impacto',
        'nav.plans': 'Planos',
        'nav.team': 'Equipe',
        'nav.audit': 'Auditoria',
        'nav.faq': 'FAQ',
        'nav.download': 'Baixar App',

        // Hero
        'hero.badge1': '🌿 Créditos Verdes',
        'hero.badge2': '📶 Funciona Offline',
        'hero.badge3': '🇧🇷 IA Brasileira',
        'hero.title1': 'A primeira IA do mundo',
        'hero.title2': 'que preserva o planeta.',
        'hero.subtitle': 'Tupham é um assistente de inteligência artificial completo — pesquisa, estuda, cria e resolve por você. E cada uso gera Créditos Verdes que se transformam em preservação ambiental real.',
        'hero.downloadIOS': 'Baixar para iOS',
        'hero.downloadAndroid': 'Baixar para Android',
        'hero.creditsGenerated': 'créditos verdes gerados pela comunidade Tupham',

        // Mockup
        'mockup.online': 'Online',
        'mockup.greeting': 'Olá! Sou o Tupham, sua IA completa e amiga do planeta. Como posso ajudar?',
        'mockup.question': 'Preciso de ajuda com um trabalho escolar',
        'mockup.answer': 'Claro! Me conte o tema e vou te ajudar com pesquisa, redação e referências. E você ainda ganha Créditos Verdes! 🌿',

        // Features
        'features.title': 'Tudo que você precisa. Tudo em um só app.',
        'features.subtitle': 'Um assistente de IA completo que faz tudo — e ainda gera impacto positivo para o planeta',
        'features.chat.title': 'Chat Inteligente',
        'features.chat.desc': 'Converse naturalmente sobre qualquer assunto. Respostas precisas, contextuais e em português.',
        'features.search.title': 'Pesquisa Web',
        'features.search.desc': 'Busque informações atualizadas na internet em tempo real. Notícias, dados, cotações e muito mais.',
        'features.school.title': 'Trabalhos Escolares',
        'features.school.desc': 'Ajuda completa em redações, resumos, exercícios, TCC e trabalhos acadêmicos de qualquer área.',
        'features.travel.title': 'Pesquisa de Viagens',
        'features.travel.desc': 'Encontre passagens aéreas, hotéis, roteiros e dicas de viagem personalizadas para qualquer destino.',
        'features.translation.title': 'Tradução Inteligente',
        'features.translation.desc': 'Traduza textos, documentos e conversas entre dezenas de idiomas com precisão nativa.',
        'features.textAnalysis.title': 'Análise de Textos',
        'features.textAnalysis.desc': 'Resuma artigos, corrija redações, interprete textos complexos e extraia informações-chave em segundos.',
        'features.content.title': 'Criação de Conteúdo',
        'features.content.desc': 'Crie textos, posts para redes sociais, e-mails profissionais e roteiros criativos sob medida.',
        'features.offline.title': 'Modo Offline',
        'features.offline.desc': 'Use a IA sem internet. Perfeito para viagens, áreas rurais e quando você mais precisa. Exclusivo Premium.',
        'features.offline.badge': 'Premium',
        'features.impact.title': 'Painel de Impacto',
        'features.impact.desc': 'Acompanhe em tempo real seus Créditos Verdes e o impacto ambiental que você está gerando.',
        'features.gamification.title': 'Gamificação Verde',
        'features.gamification.desc': 'Conquiste badges, acumule Créditos Verdes e compare seu impacto ambiental com amigos.',
        'features.greenCredits.title': 'Créditos Verdes',
        'features.greenCredits.desc': 'Ao usar o Tupham, você acumula Créditos Verdes que se transformam em ações reais de preservação ambiental.',

        // How It Works
        'howItWorks.title': 'Simples de usar, poderoso de verdade',
        'howItWorks.subtitle': 'Três passos para transformar o seu dia — e o planeta',
        'howItWorks.step1.title': 'Baixe o app',
        'howItWorks.step1.desc': 'Disponível gratuitamente para iOS e Android',
        'howItWorks.step2.title': 'Use no seu dia a dia',
        'howItWorks.step2.desc': 'Pesquise, estude, crie e resolva qualquer tarefa com IA',
        'howItWorks.step3.title': 'Ganhe Créditos Verdes',
        'howItWorks.step3.desc': 'Cada uso gera Créditos Verdes que viram ações reais de preservação',

        // Why Tupham
        'whyTupham.title': 'Tudo que as grandes IAs fazem — e mais.',
        'whyTupham.subtitle': 'Tupham reúne o poder de um assistente de IA completo com um propósito real: preservar o planeta',
        'whyTupham.item1.title': 'Chat inteligente avançado',
        'whyTupham.item1.desc': 'Respostas precisas e contextuais como as melhores IAs do mercado',
        'whyTupham.item2.title': 'Pesquisa web em tempo real',
        'whyTupham.item2.desc': 'Informações atualizadas direto da internet, sempre',
        'whyTupham.item3.title': 'Análise de textos e imagens',
        'whyTupham.item3.desc': 'Interprete, resuma e extraia dados de qualquer conteúdo',
        'whyTupham.item4.title': 'Modo offline completo',
        'whyTupham.item4.desc': 'Use sem internet — exclusivo Tupham Premium',
        'whyTupham.item5.title': 'Créditos Verdes',
        'whyTupham.item5.desc': 'Cada uso gera impacto ambiental positivo real',
        'whyTupham.item6.title': 'IA brasileira, feita para você',
        'whyTupham.item6.desc': 'Otimizada para português com entendimento cultural local',
        'whyTupham.item7.title': 'Privacidade — IA local no dispositivo',
        'whyTupham.item7.desc': 'Seus dados ficam seguros, processados direto no seu celular',
        'whyTupham.exclusive': 'Exclusivo Tupham',

        // Impact
        'impact.title': 'Cada uso gera impacto real',
        'impact.subtitle': 'Seus Créditos Verdes se transformam em ações concretas de preservação ambiental',
        'impact.credits': 'Créditos Verdes Gerados',
        'impact.trees': 'Árvores Plantadas',
        'impact.area': 'Área Preservada',
        'impact.supporters': 'Apoiadores Ativos',
        'impact.mapLegend': 'Áreas de preservação e reflorestamento',

        // Pricing
        'pricing.title': 'Escolha seu plano',
        'pricing.subtitle': 'Comece gratuitamente ou desbloqueie todo o poder do Tupham com o Premium',
        'pricing.free.name': 'Gratuito',
        'pricing.free.feature1': 'Chat básico com IA',
        'pricing.free.feature2': 'Pesquisa web limitada (10/dia)',
        'pricing.free.feature3': '5 análises de textos/mês',
        'pricing.free.feature4': 'Acumule Créditos Verdes a cada uso',
        'pricing.free.feature5': 'Anúncios discretos',
        'pricing.free.cta': 'Começar Grátis',
        'pricing.premium.badge': 'Mais Popular',
        'pricing.premium.name': 'Premium',
        'pricing.premium.period': '/mês',
        'pricing.premium.feature1': 'Chat ilimitado com IA avançada',
        'pricing.premium.feature2': 'Pesquisa web ilimitada',
        'pricing.premium.feature3': 'Análises ilimitadas',
        'pricing.premium.feature4': 'Modo Offline completo',
        'pricing.premium.feature5': 'Sem anúncios',
        'pricing.premium.feature6': 'Histórico completo',
        'pricing.premium.feature7': 'Suporte prioritário',
        'pricing.premium.feature8': 'Créditos Verdes em dobro',
        'pricing.premium.cta': 'Assinar Premium',

        // Team
        'team.title': 'Quem está por trás do Tupham',
        'team.subtitle': 'Conheça a empresa que criou o Tupham AI',
        'team.description': 'A Gray Cat Corporation é uma empresa brasileira de tecnologia focada em criar soluções inovadoras com impacto positivo. Nossa missão é desenvolver produtos que unam tecnologia de ponta com responsabilidade ambiental e social.',
        'team.description2': 'Com o Tupham AI, criamos a primeira inteligência artificial do mundo que gera Créditos Verdes — transformando cada interação em preservação ambiental real.',
        'team.visitWebsite': 'Visitar site',

        // FAQ
        'faq.title': 'Perguntas Frequentes',
        'faq.subtitle': 'Tire suas dúvidas sobre o Tupham AI',
        'faq.q1': 'O Tupham é gratuito?',
        'faq.a1': 'Sim! O Tupham oferece um plano gratuito com chat básico, pesquisa web limitada e acúmulo de Créditos Verdes. Para recursos ilimitados, modo offline e Créditos Verdes em dobro, assine o Premium por R$ 14,90/mês.',
        'faq.q2': 'O que o Tupham pode fazer?',
        'faq.a2': 'Tupham é um assistente de IA completo. Ele pesquisa na web, ajuda em trabalhos escolares e acadêmicos, encontra passagens aéreas e hotéis, traduz textos, analisa documentos, cria conteúdo para redes sociais, redige e-mails profissionais, e muito mais. Tudo que você espera das melhores IAs do mercado — e ainda gera Créditos Verdes para preservação ambiental.',
        'faq.q3': 'O app funciona offline?',
        'faq.a3': 'O plano gratuito requer conexão com a internet. Já o plano Premium inclui modo offline completo — a IA roda diretamente no seu dispositivo, permitindo uso em qualquer lugar, mesmo sem conexão. Perfeito para viagens, áreas rurais ou quando você simplesmente não tem internet.',
        'faq.q4': 'O que são Créditos Verdes?',
        'faq.a4': 'Créditos Verdes são gerados automaticamente cada vez que você usa o Tupham. Eles representam sua contribuição para a preservação ambiental. Seus créditos se transformam em ações reais como plantio de árvores, preservação de áreas naturais e apoio a projetos ambientais verificados. Acompanhe seu impacto no Painel de Impacto dentro do app.',
        'faq.q5': 'Como o Tupham se compara a outras IAs?',
        'faq.a5': 'Tupham oferece todas as funcionalidades das principais IAs do mercado — chat inteligente, pesquisa web, análise de textos, tradução, criação de conteúdo — com três diferenciais exclusivos: é a única IA que gera Créditos Verdes para preservação ambiental, é brasileira e otimizada para português, e possui modo offline completo no plano Premium.',
        'faq.q6': 'Para onde vão os recursos de preservação?',
        'faq.a6': 'Todos os recursos gerados pelos Créditos Verdes são direcionados para fundos e organizações de preservação ambiental verificados. Trabalhamos com parceiros certificados para garantir que cada crédito resulte em impacto real. Confira todos os detalhes na nossa página de Auditoria.',
        'faq.q7': 'Posso cancelar a assinatura a qualquer momento?',
        'faq.a7': 'Sim, você pode cancelar sua assinatura a qualquer momento, sem multa ou burocracia. O acesso Premium continua até o fim do período já pago.',

        // CTA
        'cta.title': 'Use IA de verdade. Preserve o planeta de verdade.',
        'cta.subtitle': 'Baixe o Tupham AI e transforme cada uso em impacto ambiental real com Créditos Verdes',
        'cta.ios': 'Baixar para iOS',
        'cta.android': 'Baixar para Android',

        // Footer
        'footer.tagline': 'A primeira IA do mundo que preserva o planeta',
        'footer.product': 'Produto',
        'footer.company': 'Empresa',
        'footer.legal': 'Legal',
        'footer.terms': 'Termos de Uso',
        'footer.privacy': 'Política de Privacidade',
        'footer.social': 'Redes Sociais',
        'footer.madeWith': 'Feito com',
        'footer.forPlanet': 'para o planeta',

        // Auditoria page
        'audit.title': 'Transparência Total',
        'audit.subtitle': 'Acompanhe em detalhes como os Créditos Verdes da comunidade Tupham se transformam em preservação ambiental real',
        'audit.backHome': 'Voltar ao início',
        'audit.creditsTitle': 'Como funcionam os Créditos Verdes',
        'audit.creditsIntro': 'Os Créditos Verdes são o coração do compromisso ambiental do Tupham. Cada interação com a IA gera créditos que são convertidos em ações concretas de preservação.',
        'audit.step1.title': 'Você usa o Tupham',
        'audit.step1.desc': 'Cada conversa, pesquisa ou tarefa gera Créditos Verdes automaticamente',
        'audit.step2.title': 'Créditos se acumulam',
        'audit.step2.desc': 'Seus créditos são somados aos da comunidade para criar impacto em escala',
        'audit.step3.title': 'Preservação real',
        'audit.step3.desc': 'Os créditos são convertidos em doações para projetos ambientais verificados',
        'audit.donationsTitle': 'Registro de Doações',
        'audit.donationsIntro': 'Todas as doações realizadas com os recursos dos Créditos Verdes são publicadas aqui com total transparência.',
        'audit.table.date': 'Data',
        'audit.table.value': 'Valor',
        'audit.table.recipient': 'Destinatário',
        'audit.table.proof': 'Comprovante',
        'audit.table.placeholder': 'Em breve — As primeiras doações serão publicadas aqui assim que o app for lançado.',
        'audit.partnersTitle': 'Parceiros de Preservação',
        'audit.partnersIntro': 'Trabalhamos com organizações certificadas para garantir que cada Crédito Verde gere impacto ambiental real e mensurável.',
        'audit.partner1.name': 'Fundo Amazônia',
        'audit.partner1.desc': 'Fundo dedicado à preservação e recuperação da floresta amazônica brasileira.',
        'audit.partner2.name': 'Instituto Preserva',
        'audit.partner2.desc': 'Organização focada em projetos de reflorestamento e educação ambiental.',
        'audit.partner3.name': 'ONG Verde Vivo',
        'audit.partner3.desc': 'Iniciativa comunitária de preservação de biomas nativos e biodiversidade.',
        'audit.partnerStatus': 'Em negociação',
        'audit.methodTitle': 'Metodologia',
        'audit.methodIntro': 'Nosso processo de seleção de parceiros e alocação de recursos segue critérios rigorosos.',
        'audit.method1.title': 'Seleção de Parceiros',
        'audit.method1.desc': 'Avaliamos organizações por impacto comprovado, transparência financeira, certificações ambientais e histórico de resultados mensuráveis.',
        'audit.method2.title': 'Alocação de Recursos',
        'audit.method2.desc': 'Os Créditos Verdes acumulados pela comunidade são convertidos em recursos financeiros e distribuídos trimestralmente entre os parceiros verificados.',
        'audit.method3.title': 'Auditoria e Relatórios',
        'audit.method3.desc': 'Todos os repasses são auditados por terceiros independentes. Relatórios detalhados são publicados nesta página trimestralmente.',
        'audit.method4.title': 'Impacto Mensurável',
        'audit.method4.desc': 'Cada parceiro reporta métricas de impacto (árvores plantadas, área preservada, CO₂ compensado) que são verificadas e publicadas no Painel de Impacto do app.'
    },
    'en-US': {
        // Navigation
        'nav.features': 'Features',
        'nav.whyTupham': 'Why Tupham?',
        'nav.impact': 'Impact',
        'nav.plans': 'Plans',
        'nav.team': 'Team',
        'nav.audit': 'Audit',
        'nav.faq': 'FAQ',
        'nav.download': 'Download App',

        // Hero
        'hero.badge1': '🌿 Green Credits',
        'hero.badge2': '📶 Works Offline',
        'hero.badge3': '🇧🇷 Brazilian AI',
        'hero.title1': "The world's first AI",
        'hero.title2': 'that preserves the planet.',
        'hero.subtitle': "Tupham is a complete AI assistant — it searches, studies, creates and solves for you. And every use generates Green Credits that become real environmental preservation.",
        'hero.downloadIOS': 'Download for iOS',
        'hero.downloadAndroid': 'Download for Android',
        'hero.creditsGenerated': 'green credits generated by the Tupham community',

        // Mockup
        'mockup.online': 'Online',
        'mockup.greeting': "Hi! I'm Tupham, your complete AI and friend of the planet. How can I help?",
        'mockup.question': 'I need help with a school assignment',
        'mockup.answer': "Of course! Tell me the topic and I'll help with research, writing and references. Plus you earn Green Credits! 🌿",

        // Features
        'features.title': 'Everything you need. All in one app.',
        'features.subtitle': 'A complete AI assistant that does it all — and still creates positive impact for the planet',
        'features.chat.title': 'Smart Chat',
        'features.chat.desc': 'Chat naturally about any topic. Accurate, contextual answers in your language.',
        'features.search.title': 'Web Search',
        'features.search.desc': 'Search for up-to-date information on the internet in real time. News, data, quotes and much more.',
        'features.school.title': 'School Work',
        'features.school.desc': 'Complete help with essays, summaries, exercises, thesis and academic work in any field.',
        'features.travel.title': 'Travel Search',
        'features.travel.desc': 'Find flights, hotels, itineraries and personalized travel tips for any destination.',
        'features.translation.title': 'Smart Translation',
        'features.translation.desc': 'Translate texts, documents and conversations between dozens of languages with native precision.',
        'features.textAnalysis.title': 'Text Analysis',
        'features.textAnalysis.desc': 'Summarize articles, correct essays, interpret complex texts and extract key information in seconds.',
        'features.content.title': 'Content Creation',
        'features.content.desc': 'Create custom texts, social media posts, professional emails and creative scripts.',
        'features.offline.title': 'Offline Mode',
        'features.offline.desc': 'Use AI without internet. Perfect for travel, rural areas and when you need it most. Premium exclusive.',
        'features.offline.badge': 'Premium',
        'features.impact.title': 'Impact Dashboard',
        'features.impact.desc': 'Track your Green Credits and the environmental impact you are generating in real time.',
        'features.gamification.title': 'Green Gamification',
        'features.gamification.desc': 'Earn badges, accumulate Green Credits and compare your environmental impact with friends.',
        'features.greenCredits.title': 'Green Credits',
        'features.greenCredits.desc': 'By using Tupham, you accumulate Green Credits that become real environmental preservation actions.',

        // How It Works
        'howItWorks.title': 'Simple to use, truly powerful',
        'howItWorks.subtitle': 'Three steps to transform your day — and the planet',
        'howItWorks.step1.title': 'Download the app',
        'howItWorks.step1.desc': 'Available for free on iOS and Android',
        'howItWorks.step2.title': 'Use it daily',
        'howItWorks.step2.desc': 'Search, study, create and solve any task with AI',
        'howItWorks.step3.title': 'Earn Green Credits',
        'howItWorks.step3.desc': 'Every use generates Green Credits that become real preservation actions',

        // Why Tupham
        'whyTupham.title': 'Everything the big AIs do — and more.',
        'whyTupham.subtitle': 'Tupham combines the power of a complete AI assistant with a real purpose: preserving the planet',
        'whyTupham.item1.title': 'Advanced smart chat',
        'whyTupham.item1.desc': 'Accurate and contextual answers like the best AIs on the market',
        'whyTupham.item2.title': 'Real-time web search',
        'whyTupham.item2.desc': 'Up-to-date information straight from the internet, always',
        'whyTupham.item3.title': 'Text and image analysis',
        'whyTupham.item3.desc': 'Interpret, summarize and extract data from any content',
        'whyTupham.item4.title': 'Complete offline mode',
        'whyTupham.item4.desc': 'Use without internet — Tupham Premium exclusive',
        'whyTupham.item5.title': 'Green Credits',
        'whyTupham.item5.desc': 'Every use generates real positive environmental impact',
        'whyTupham.item6.title': 'Brazilian AI, made for you',
        'whyTupham.item6.desc': 'Optimized for Portuguese with local cultural understanding',
        'whyTupham.item7.title': 'Privacy — on-device AI',
        'whyTupham.item7.desc': 'Your data stays safe, processed right on your phone',
        'whyTupham.exclusive': 'Tupham Exclusive',

        // Impact
        'impact.title': 'Every use creates real impact',
        'impact.subtitle': 'Your Green Credits become concrete environmental preservation actions',
        'impact.credits': 'Green Credits Generated',
        'impact.trees': 'Trees Planted',
        'impact.area': 'Area Preserved',
        'impact.supporters': 'Active Supporters',
        'impact.mapLegend': 'Preservation and reforestation areas',

        // Pricing
        'pricing.title': 'Choose your plan',
        'pricing.subtitle': 'Start for free or unlock the full power of Tupham with Premium',
        'pricing.free.name': 'Free',
        'pricing.free.feature1': 'Basic AI chat',
        'pricing.free.feature2': 'Limited web search (10/day)',
        'pricing.free.feature3': '5 text analyses/month',
        'pricing.free.feature4': 'Earn Green Credits with every use',
        'pricing.free.feature5': 'Discreet ads',
        'pricing.free.cta': 'Start Free',
        'pricing.premium.badge': 'Most Popular',
        'pricing.premium.name': 'Premium',
        'pricing.premium.period': '/month',
        'pricing.premium.feature1': 'Unlimited advanced AI chat',
        'pricing.premium.feature2': 'Unlimited web search',
        'pricing.premium.feature3': 'Unlimited analyses',
        'pricing.premium.feature4': 'Complete Offline Mode',
        'pricing.premium.feature5': 'No ads',
        'pricing.premium.feature6': 'Complete history',
        'pricing.premium.feature7': 'Priority support',
        'pricing.premium.feature8': 'Double Green Credits',
        'pricing.premium.cta': 'Subscribe Premium',

        // Team
        'team.title': 'Who is behind Tupham',
        'team.subtitle': 'Meet the company that created Tupham AI',
        'team.description': 'Gray Cat Corporation is a Brazilian technology company focused on creating innovative solutions with positive impact. Our mission is to develop products that combine cutting-edge technology with environmental and social responsibility.',
        'team.description2': "With Tupham AI, we created the world's first artificial intelligence that generates Green Credits — transforming every interaction into real environmental preservation.",
        'team.visitWebsite': 'Visit website',

        // FAQ
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle': 'Get your questions about Tupham AI answered',
        'faq.q1': 'Is Tupham free?',
        'faq.a1': 'Yes! Tupham offers a free plan with basic chat, limited web search and Green Credits accumulation. For unlimited features, offline mode and double Green Credits, subscribe to Premium for R$ 14.90/month.',
        'faq.q2': 'What can Tupham do?',
        'faq.a2': "Tupham is a complete AI assistant. It searches the web, helps with school and academic work, finds flights and hotels, translates texts, analyzes documents, creates social media content, writes professional emails, and much more. Everything you'd expect from the best AIs on the market — plus it generates Green Credits for environmental preservation.",
        'faq.q3': 'Does the app work offline?',
        'faq.a3': "The free plan requires an internet connection. The Premium plan includes complete offline mode — the AI runs directly on your device, allowing use anywhere, even without a connection. Perfect for travel, rural areas, or when you simply don't have internet.",
        'faq.q4': 'What are Green Credits?',
        'faq.a4': 'Green Credits are automatically generated every time you use Tupham. They represent your contribution to environmental preservation. Your credits become real actions like tree planting, natural area preservation and support for verified environmental projects. Track your impact in the Impact Dashboard within the app.',
        'faq.q5': 'How does Tupham compare to other AIs?',
        'faq.a5': "Tupham offers all the features of the leading AIs on the market — smart chat, web search, text analysis, translation, content creation — with three exclusive differentiators: it's the only AI that generates Green Credits for environmental preservation, it's Brazilian and optimized for Portuguese, and it has complete offline mode in the Premium plan.",
        'faq.q6': 'Where do preservation resources go?',
        'faq.a6': 'All resources generated by Green Credits are directed to verified environmental preservation funds and organizations. We work with certified partners to ensure every credit results in real impact. Check all the details on our Audit page.',
        'faq.q7': 'Can I cancel my subscription at any time?',
        'faq.a7': 'Yes, you can cancel your subscription at any time, without penalty or hassle. Premium access continues until the end of the already paid period.',

        // CTA
        'cta.title': 'Use real AI. Preserve the planet for real.',
        'cta.subtitle': 'Download Tupham AI and turn every use into real environmental impact with Green Credits',
        'cta.ios': 'Download for iOS',
        'cta.android': 'Download for Android',

        // Footer
        'footer.tagline': "The world's first AI that preserves the planet",
        'footer.product': 'Product',
        'footer.company': 'Company',
        'footer.legal': 'Legal',
        'footer.terms': 'Terms of Use',
        'footer.privacy': 'Privacy Policy',
        'footer.social': 'Social Media',
        'footer.madeWith': 'Made with',
        'footer.forPlanet': 'for the planet',

        // Auditoria page
        'audit.title': 'Total Transparency',
        'audit.subtitle': "Track in detail how the Tupham community's Green Credits become real environmental preservation",
        'audit.backHome': 'Back to home',
        'audit.creditsTitle': 'How Green Credits Work',
        'audit.creditsIntro': "Green Credits are the heart of Tupham's environmental commitment. Every interaction with the AI generates credits that are converted into concrete preservation actions.",
        'audit.step1.title': 'You use Tupham',
        'audit.step1.desc': 'Every conversation, search or task automatically generates Green Credits',
        'audit.step2.title': 'Credits accumulate',
        'audit.step2.desc': 'Your credits are combined with the community to create impact at scale',
        'audit.step3.title': 'Real preservation',
        'audit.step3.desc': 'Credits are converted into donations to verified environmental projects',
        'audit.donationsTitle': 'Donation Records',
        'audit.donationsIntro': 'All donations made with Green Credits resources are published here with full transparency.',
        'audit.table.date': 'Date',
        'audit.table.value': 'Amount',
        'audit.table.recipient': 'Recipient',
        'audit.table.proof': 'Proof',
        'audit.table.placeholder': 'Coming soon — First donations will be published here once the app is launched.',
        'audit.partnersTitle': 'Preservation Partners',
        'audit.partnersIntro': 'We work with certified organizations to ensure every Green Credit generates real, measurable environmental impact.',
        'audit.partner1.name': 'Amazon Fund',
        'audit.partner1.desc': 'Fund dedicated to the preservation and recovery of the Brazilian Amazon rainforest.',
        'audit.partner2.name': 'Preserva Institute',
        'audit.partner2.desc': 'Organization focused on reforestation and environmental education projects.',
        'audit.partner3.name': 'Verde Vivo NGO',
        'audit.partner3.desc': 'Community initiative for preservation of native biomes and biodiversity.',
        'audit.partnerStatus': 'In negotiation',
        'audit.methodTitle': 'Methodology',
        'audit.methodIntro': 'Our partner selection and resource allocation process follows strict criteria.',
        'audit.method1.title': 'Partner Selection',
        'audit.method1.desc': 'We evaluate organizations by proven impact, financial transparency, environmental certifications and track record of measurable results.',
        'audit.method2.title': 'Resource Allocation',
        'audit.method2.desc': 'Green Credits accumulated by the community are converted into financial resources and distributed quarterly among verified partners.',
        'audit.method3.title': 'Audit & Reports',
        'audit.method3.desc': 'All transfers are audited by independent third parties. Detailed reports are published on this page quarterly.',
        'audit.method4.title': 'Measurable Impact',
        'audit.method4.desc': 'Each partner reports impact metrics (trees planted, area preserved, CO₂ offset) that are verified and published in the Impact Dashboard within the app.'
    }
};

let currentLanguage = 'pt-BR';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('tupham-language', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        const flagSpan = langToggle.querySelector('.lang-flag');
        const codeSpan = langToggle.querySelector('.lang-code');
        if (lang === 'pt-BR') {
            flagSpan.textContent = '🇧🇷';
            codeSpan.textContent = 'PT';
        } else {
            flagSpan.textContent = '🇺🇸';
            codeSpan.textContent = 'EN';
        }
    }

    document.documentElement.lang = lang === 'pt-BR' ? 'pt-BR' : 'en';
}

function toggleLanguage() {
    const newLang = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
    setLanguage(newLang);
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu?.querySelectorAll('a');

    if (!hamburger || !mobileMenu) return;

    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        const isExpanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
        mobileMenu.setAttribute('aria-hidden', !isExpanded);
    }

    hamburger.addEventListener('click', toggleMenu);

    mobileLinks?.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const counter = entry.target.querySelector('.counter');
                if (counter && !counter.dataset.animated) {
                    animateCounter(counter);
                    counter.dataset.animated = 'true';
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    function updateCounter() {
        current += increment;
        if (current < target) {
            element.textContent = formatNumber(Math.floor(current));
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = formatNumber(target);
        }
    }

    requestAnimationFrame(updateCounter);
}

function formatNumber(num) {
    return num.toLocaleString('pt-BR');
}

function initHeroTreeCounter() {
    const heroCounter = document.getElementById('hero-tree-count');
    if (!heroCounter) return;

    const target = 127450;
    const duration = 2500;
    const increment = target / (duration / 16);
    let current = 0;

    setTimeout(() => {
        function updateCounter() {
            current += increment;
            if (current < target) {
                heroCounter.textContent = formatNumber(Math.floor(current));
                requestAnimationFrame(updateCounter);
            } else {
                heroCounter.textContent = formatNumber(target);
            }
        }
        requestAnimationFrame(updateCounter);
    }, 500);
}

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question?.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
            });
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const particleCount = 15;
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    const isLeaf = Math.random() > 0.5;
    particle.className = `particle${isLeaf ? ' leaf' : ''}`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.animationDuration = `${15 + Math.random() * 10}s`;

    if (!isLeaf) {
        const size = 5 + Math.random() * 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
    }

    container.appendChild(particle);
}

function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    const savedLang = localStorage.getItem('tupham-language');
    if (savedLang && (savedLang === 'pt-BR' || savedLang === 'en-US')) {
        setLanguage(savedLang);
    } else {
        setLanguage('pt-BR');
    }
}

function initTypingAnimation() {
    const typingIndicator = document.querySelector('.message-typing');
    if (!typingIndicator) return;

    setInterval(() => {
        if (Math.random() > 0.5) {
            typingIndicator.style.display = 'flex';
            setTimeout(() => {
                typingIndicator.style.display = 'none';
            }, 2000 + Math.random() * 2000);
        }
    }, 5000);
}

/* Initialize */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate-on-scroll').forEach(el => el.classList.add('visible'));
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initHeroTreeCounter();
    initFAQ();
    initParticles();
    initLanguageToggle();
    initTypingAnimation();
    document.body.classList.add('loaded');
});
