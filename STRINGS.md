# Strings do site Tupham — para refino de copy

> **Como usar:** edite **apenas o texto à direita do `]`**. **Não altere os `[ids]`** (são a chave pra remapear no HTML). Me devolve o arquivo que eu aplico tudo nas páginas.
>
> **Esta versão (v2):** peguei o tom que você adotou nas suas edições e repliquei pra TODO o resto. Cortes seus = readequados no tom (ou removidos, ver abaixo). Suas notas de refatoração = executadas. As partes de Verdis/impacto (que você curtiu) ficaram quase intactas. Corrigi acentos/typos dos seus textos, mantendo as suas palavras e a sua voz.

> **🎙️ Guia de tom (o que apliquei):**
> 1. Voz coletiva e nacional: "nossa IA", "comemoramos juntos", "Do Brasil para os brasileiros".
> 2. "Grátis e ilimitado" é mantra; "De graça." como fecho.
> 3. Marca = **Tupham** (sem "AI", sem "local"). Copyright legal mantém "Tupham AI".
> 4. **Zero jargão.** Nada de Metal/Vulkan/llama.cpp/GPU/inferência. "datacenter" → "grandes centros de processamento de dados". O offline é **"funciona com e sem internet"**.
> 5. Casual, caloroso, divertido; imperativo convidativo; menos travessões (—), mais vírgula/ponto.
> 6. Benefício > especificação (sem contagens tipo "12 modelos", "9 vibes").

> **🔧 Decisões estruturais (mudei além do texto — confirma se concorda):**
> - **index:** removida a seção "Teaser Pesquisa / Notícias" (sua nota "(remover)").
> - **Habilidades · Conversa:** refeita sem citar os "8 cards" (você disse que não é diferencial). Pills viraram usos do dia a dia.
> - **Habilidades · Esportes:** pills agora Brasileirão / Libertadores / Copa do Mundo; bolão reescrito como "começa na Copa, em breve todos os campeonatos". ⚠️ *Ver nota de precisão no fim.*
> - **Habilidades · Criação:** removidas as pills de "9 vibes" e a nota técnica.
> - **Habilidades · seção 05:** refatorada pra **dedicada ao Tupham Estuda** (era "Pesquisa & Estudos"). Label no menu/rodapé/TOC → "Estudos". Âncora segue `#pesquisa` por ora (renomeável pra `#estuda` depois).
> - **Habilidades · "IA no aparelho":** reescrita inteira como "funciona com e sem internet", sem nenhum jargão.
> - **planos:** propaguei o tom que faltava — tirei "local", removi jargão do FAQ (Metal/GPU/llama.cpp), "Tupham" no lugar de "Tupham AI". Preços mantidos (R$ 14,90 / R$ 139,90).

---

## 🔁 Compartilhado (nav + rodapé — iguais em todas as páginas)

### Navegação (desktop)
- [shared.nav.habilidades] Habilidades
- [shared.nav.planeta] Conheça nossa missão
- [shared.nav.auditoria] Auditoria
- [shared.nav.planos] Planos
- [shared.nav.cta] Baixar app

### Navegação (menu mobile)
- [shared.mob.habilidades] Habilidades
- [shared.mob.planeta] Conheça nossa missão
- [shared.mob.auditoria] Auditoria
- [shared.mob.planos] Planos
- [shared.mob.cta] Baixar app

### Botões de loja (aparecem no rodapé e em vários CTAs)
- [shared.store.apple.small] Baixe na
- [shared.store.apple.big] App Store
- [shared.store.google.small] Baixe no
- [shared.store.google.big] Google Play

### Rodapé — marca
- [shared.foot.tagline] A IA do Brasil.

### Rodapé — coluna Produto
- [shared.foot.produto.titulo] Produto
- [shared.foot.produto.habilidades] Habilidades
- [shared.foot.produto.esportes] Esportes &amp; Bolões
- [shared.foot.produto.documentos] Documentos
- [shared.foot.produto.criacao] Criação
- [shared.foot.produto.pesquisa] Estudos
- [shared.foot.produto.planos] Planos

### Rodapé — coluna Planeta
- [shared.foot.planeta.titulo] Planeta
- [shared.foot.planeta.comosalvamos] Como salvamos o mundo
- [shared.foot.planeta.auditoria] Auditoria &amp; transparência
- [shared.foot.planeta.creditos] Créditos Verdes

### Rodapé — coluna Empresa
- [shared.foot.empresa.titulo] Empresa
- [shared.foot.empresa.graycat] Graycat Corp
- [shared.foot.empresa.suporte] suporte@tupham.com.br
- [shared.foot.empresa.termos] Termos de Uso
- [shared.foot.empresa.privacidade] Privacidade

### Rodapé — base
- [shared.foot.copyright] © 2026 Tupham AI · Graycat Corp · Salvador, BA 🌴

---

## 🏠 index.html — Home

### Meta / SEO
- [index.meta.title] Tupham — A IA do Brasil.
- [index.meta.description] Tupham: converse no chat e pesquise, gere e edite documentos, esportes ao vivo, faça bolões com amigos, gere áudios e aprenda com a nossa plataforma de estudos personalizada. Grátis e ilimitado.
- [index.meta.og_title] Tupham — A IA do Brasil
- [index.meta.og_description] Feita para o nosso ritmo, para a nossa cultura, para o nosso jeito de falar.

### Hero
- [index.hero.eyebrow] Do Brasil para os brasileiros
- [index.hero.h1] A IA do<br>Brasil.
- [index.hero.lead] Converse no chat e pesquise, gere e edite documentos, esportes ao vivo, faça bolões com amigos, gere áudios e aprenda com a nossa plataforma de estudos personalizada. Grátis e ilimitado.
- [index.hero.pill1] Comece grátis
- [index.hero.pill2] Entende você e o Brasil inteiro
- [index.hero.pill3] Cada uso salva o mundo

### Marquee (faixa rolante)
- [index.marquee.1] Chat com IA
- [index.marquee.2] Currículo &amp; edição de PDF
- [index.marquee.3] Brasileirão ao vivo
- [index.marquee.4] Bolão da Copa com amigos
- [index.marquee.5] Pesquisa estruturada
- [index.marquee.6] Plataforma de estudos
- [index.marquee.7] Áudios divertidos
- [index.marquee.8] Notícias
- [index.marquee.9] Convites &amp; folders

### Pilares ("Um app. Tudo dentro.")
- [index.pillars.eyebrow] Um app. IA, Pesquisa, Designs, Documentos, Futebol, Bolão com amigos, Áudios e muito mais!
- [index.pillars.h2] Não é + uma IA.<br>É a nossa IA.
- [index.pillars.lead] Tudo que você precisa no dia a dia, sem precisar de cinco assinaturas de IAs gringas. Grátis e ilimitado.
- [index.pillars.chat.titulo] Chat que entende o Brasil
- [index.pillars.chat.texto] Pergunta do seu jeito, Tupham responde.
- [index.pillars.chat.link] Ver como funciona
- [index.pillars.documentos.titulo] Documentos
- [index.pillars.documentos.texto] Faça currículos pra aquela vaga dos sonhos, contratos, procurações e recibos, sem marca-d'água. Edite e converta PDFs. De graça.
- [index.pillars.documentos.link] Abrir
- [index.pillars.esportes.titulo] Esportes &amp; Bolão
- [index.pillars.esportes.texto] Jogos do Brasileirão ao vivo, lance a lance, comemora os gols junto com você. Faça bolões com a turma do trabalho, com os amigos, com gato, cachorro... as possibilidades são infinitas!
- [index.pillars.esportes.link] Abrir
- [index.pillars.criacao.titulo] Criação
- [index.pillars.criacao.texto] Crie um áudio hilário com voz cantada em diversos estilos, ou um convite de aniversário, panfletos, cartões de visita e muito mais!
- [index.pillars.criacao.link] Abrir
- [index.pillars.pesquisa.titulo] Pesquisa de verdade.
- [index.pillars.pesquisa.texto] Um dossiê navegável sobre qualquer tema, que reúne notícias de várias fontes brasileiras e deixa tudo clicável. Exporta em PDF pra mandar no WhatsApp.
- [index.pillars.pesquisa.link] Ver pesquisa e estudos

### On-device ("A IA que funciona com e sem internet")
- [index.ondevice.eyebrow] A diferença que ninguém tem
- [index.ondevice.h2] A IA que funciona<br>com e sem internet.
- [index.ondevice.lead] O Tupham funciona dentro do seu celular, com ou sem internet.
- [index.ondevice.check1] **Privacidade:** a IA raciocina no aparelho, coletamos dados apenas para melhorias, suas conversas não vão para terceiros.
- [index.ondevice.check2] **Modo offline no Premium:** a única IA do mundo que funciona até sem internet: no metrô, no avião, no sítio sem sinal. (apenas no Premium)
- [index.ondevice.check3] **Leve e rápido:** roda bem em qualquer celular, sem travar.
- [index.ondevice.check4] **Com internet, fica melhor ainda:** sem internet, te ajuda com cálculos, definições, traduções e conceitos básicos. Com internet, faz pesquisas e traz dados atualizados de clima, cotações e notícias.
- [index.ondevice.link] Conhecer a tecnologia

### Teaser Esportes
- [index.esportes.eyebrow] Esportes &amp; Bolões
- [index.esportes.h2] Seu time ao vivo,<br>lance a lance.
- [index.esportes.lead] Escolha seu time do coração e acompanhe os jogos em tempo real: placar, gols, cartões e estatísticas. Comemoramos juntos.
- [index.esportes.pill1] Brasileirão e Copa
- [index.esportes.pill2] Bolão com amigos
- [index.esportes.pill3] Alertas de gols e cartões
- [index.esportes.pill4] Classificação
- [index.esportes.lead2] E na Copa do Mundo 2026, a tradição do **bolão** vira app: crie o seu, convide a turma por um link e dispute um ranking ao vivo. Premiamos com Verdis, a moeda verde do Tupham, mas você pode combinar outras premiações por fora do app com os amigos!
- [index.esportes.btn] Ver esportes e bolões

> 🗑️ **Seção "Teaser Pesquisa / Notícias" removida** (sua nota "(remover)"). Ids `index.pesquisa.*` saíram do doc e o bloco sai do index.html.

### Teaser Planeta
- [index.planeta.eyebrow] Como salvamos o mundo
- [index.planeta.h2] Usar IA aqui não custa<br>pro planeta. Devolve.
- [index.planeta.lead] Cada conversa gera **Verdis**, a moeda verde do Tupham. E uma parte da nossa receita vira reflorestamento de verdade. Auditado, transparente e rastreável.
- [index.planeta.equiv1.num] Árvores
- [index.planeta.equiv1.eq] plantadas de verdade
- [index.planeta.equiv2.num] CO₂
- [index.planeta.equiv2.eq] compensado da atmosfera
- [index.planeta.equiv3.num] Mata
- [index.planeta.equiv3.eq] nativa preservada em pé
- [index.planeta.btn] Ver o passo a passo

### Comparativo (vs IAs gringas)
- [index.compare.eyebrow] A conta não fecha
- [index.compare.h2] Elas cobram muito.<br>O Tupham é grátis e ilimitado.
- [index.compare.them.who] IAs gringas
- [index.compare.them.price] R$ 105+/mês
- [index.compare.us.who] Tupham
- [index.compare.us.price] Grátis, ou R$ 14,90/mês no Premium.
- [index.compare.row1] Chat avançado
- [index.compare.row3] Roda no seu celular
- [index.compare.row4] Brasileirão &amp; bolão
- [index.compare.row5] Currículo &amp; PDFs
- [index.compare.row6] Parte da receita pro planeta
- [index.compare.footer] Muito mais barato. E faz o que nenhuma delas faz.

### Planos (resumo)
- [index.pricing.eyebrow] Planos
- [index.pricing.h2] Comece grátis.<br>Premium quando quiser.
- [index.pricing.free.nome] Grátis
- [index.pricing.free.preco] R$ 0
- [index.pricing.free.sub] Pra sempre, sustentado por anúncios discretos.
- [index.pricing.free.feat1] Chat completo com IA
- [index.pricing.free.feat2] Esportes ao vivo &amp; bolão
- [index.pricing.free.feat3] Notícias e cards visuais
- [index.pricing.free.feat4] Gera Verdis e planta floresta
- [index.pricing.free.btn] Começar grátis
- [index.pricing.pro.badge] MAIS POPULAR
- [index.pricing.pro.nome] Premium
- [index.pricing.pro.preco] R$ 14,90/mês
- [index.pricing.pro.sub] ou R$ 139,90/ano. Você economiza.
- [index.pricing.pro.feat1] Tudo ilimitado
- [index.pricing.pro.feat2] Modo offline completo
- [index.pricing.pro.feat3] Zero anúncios
- [index.pricing.pro.feat4] Verdis todo mês
- [index.pricing.pro.btn] Assinar Premium
- [index.pricing.nota] Cancele quando quiser, sem multa.
- [index.pricing.nota_link] Ver tudo sobre os planos

### FAQ
- [index.faq.eyebrow] Perguntas
- [index.faq.h2] Tira a dúvida.
- [index.faq.q1] O que é o Tupham?
- [index.faq.a1] É a IA do Brasil, num app só: chat, currículo e documentos, esportes ao vivo, bolão com amigos, pesquisa com fontes, áudios, plano de estudos e muito mais. Tudo em português de verdade, grátis e ilimitado.
- [index.faq.q2] Precisa de internet?
- [index.faq.a2] O Tupham funciona com e sem internet. Sem conexão, ele resolve contas, definições, traduções e conceitos direto no seu celular. Com internet, faz pesquisas e traz notícias, esportes e cotações na hora. O modo 100% offline é um recurso Premium.
- [index.faq.q3] Quanto custa?
- [index.faq.a3] O Tupham é grátis e ilimitado, sustentado por anúncios discretos. Quem quiser mais tem o Premium por R$ 14,90/mês ou R$ 139,90/ano, com offline completo e zero anúncios.
- [index.faq.q4] Como o Tupham ajuda o planeta?
- [index.faq.a4] Cada uso gera Verdis, a nossa moeda verde, e uma parte da nossa receita vira preservação ambiental auditada por terceiros. No app você acompanha seu impacto em árvores, CO₂ e mata preservada.
- [index.faq.a4_link] Ver o passo a passo
- [index.faq.q5] Meus dados ficam seguros?
- [index.faq.a5] A IA raciocina dentro do seu celular, suas conversas não precisam sair do aparelho pra serem respondidas. Coletamos dados apenas para melhorias e nada vai para terceiros.

### CTA final
- [index.cta.eyebrow] Disponível em breve nas lojas
- [index.cta.h2] Baixe. Use.<br>Refloreste.
- [index.cta.lead] A IA do Brasil. Comece grátis hoje.

### Imagens (alt)
- [index.alt.hero_back] Tupham funcionando offline
- [index.alt.hero_front] Tela inicial do Tupham
- [index.alt.ondevice] Tupham gerando uma legenda offline, em modo avião
- [index.alt.esportes] Jogo ao vivo no Tupham, lance a lance
- [index.alt.pesquisa] Card de notícias com fontes no Tupham

---

## 🧠 habilidades.html — Habilidades

### Meta / SEO
- [hab.meta.title] Habilidades — Tupham · Para você, de graça e ilimitado.
- [hab.meta.description] Tudo o que o Tupham faz num lugar só: conversa, documentos, esportes e bolão, criação e estudos. Grátis e ilimitado, feito por brasileiros.
- [hab.meta.og_title] Habilidades — Tupham
- [hab.meta.og_description] Tudo o que o Tupham faz, num lugar só: conversa, documentos, esportes & bolão, criação e estudos.

### Hero
- [hab.hero.eyebrow] Tudo num app só
- [hab.hero.h1] As habilidades<br>do Tupham.
- [hab.hero.lead] Conversa, documentos, esportes, criação e estudos, com um modelo de IA criado por brasileiros. Aqui está cada coisa que o Tupham faz, organizada por área.
- [hab.hero.btn] Baixar o app
- [hab.hero.toc1] Conversa
- [hab.hero.toc2] Documentos
- [hab.hero.toc3] Esportes &amp; Bolões
- [hab.hero.toc4] Criação
- [hab.hero.toc5] Estudos

### 01 · Conversa & Inteligência (refeita — sem citar cards)
- [hab.conversa.eyebrow] Conversa &amp; Inteligência
- [hab.conversa.h2] Um chat que entende<br>o jeito brasileiro.
- [hab.conversa.lead] O coração do Tupham: você pergunta do seu jeito, com gíria, sotaque e tudo, e ele responde como um amigo que manja de tudo.
- [hab.conversa.skill1] **Entende o Brasil:** gíria, sotaque, futebol e o nosso jeito de falar, sem precisar explicar.
- [hab.conversa.skill2] **Resolve o dia a dia:** tira dúvidas, faz contas, escreve textos, dá ideias e ajuda no que você precisar.
- [hab.conversa.skill3] **Responde do seu jeito:** vai direto ao ponto ou se aprofunda, do jeito que você pediu.
- [hab.conversa.pills_titulo] Pra que serve
- [hab.conversa.pill1] Tira dúvidas
- [hab.conversa.pill2] Faz contas
- [hab.conversa.pill3] Escreve textos
- [hab.conversa.pill4] Dá ideias

> 🗑️ Pills `pill5`–`pill8` removidas (eram tipos de card). `pills_titulo` deixou de ser "8 tipos de card".

### 02 · Documentos
- [hab.documentos.eyebrow] Documentos
- [hab.documentos.h2] Toda a papelada,<br>pronta no celular.
- [hab.documentos.lead] Criar, editar e converter documentos direto no aparelho, em PDF e Word, sem marca-d'água, e sem mandar nada pra nuvem.
- [hab.documentos.skill1] **Currículo:** assistente inteligente, diversos layouts.
- [hab.documentos.skill2] **Modelos prontos:** contrato, recibo, procuração, declaração e mais.
- [hab.documentos.skill3] **Editar PDF:** reorganizar, girar, dividir, apagar e adicionar páginas.
- [hab.documentos.skill4] **Converter:** Word → PDF, PDF → Word editável e várias imagens num PDF.
- [hab.documentos.skill6] **Privacidade &amp; biblioteca:** nada do conteúdo vai pra nuvem; seus arquivos ficam guardados no seu celular.
- [hab.documentos.pill1] PDF + Word
- [hab.documentos.pill2] Sem marca-d'água
- [hab.documentos.pill3] De graça

### 03 · Esportes & Bolões
- [hab.esportes.eyebrow] Esportes &amp; Bolões
- [hab.esportes.h2] Seu time ao vivo,<br>e o bolão com a turma.
- [hab.esportes.lead] Os jogos ao vivo, lance a lance, com alerta de gol no bolso. E a tradição do bolão integra toda a experiência.
- [hab.esportes.skill1] **Ao vivo:** placar, gols, cartões, posse e chutes em tempo real, com notificações que te deixam sempre antenado.
- [hab.esportes.skill2] **Seus campeonatos:** Brasileirão, Libertadores, Copa do Mundo e mais, com próximos jogos, resultados e tabela.
- [hab.esportes.skill3] **Classificação:** a tabela inteira com as zonas coloridas, V / E / D, pontos e saldo.
- [hab.esportes.skill4] **Raio-X + Palpite da Torcida:** os números da temporada do time e a votação ao vivo da galera.
- [hab.esportes.skill5] **Bolões com a turma:** começa na Copa do Mundo 2026 e, em breve, todos os campeonatos. Crie o seu, convide por link e dispute o ranking ao vivo.
- [hab.esportes.pill1] Brasileirão
- [hab.esportes.pill2] Libertadores
- [hab.esportes.pill3] Copa do Mundo

### 04 · Criação
- [hab.criacao.eyebrow] Criação
- [hab.criacao.h2] Música cantada e artes<br>prontas pra postar.
- [hab.criacao.lead] Descreva a ideia e o Tupham tira do papel: uma música completa com voz cantada em português, ou uma arte pronta pra publicar.
- [hab.criacao.skill1] **Áudio Studio:** título, letra, melodia, arranjo e voz cantada com vários estilos.
- [hab.criacao.skill2] **Modo Design:** Convite, Cartão de Visita, Panfleto, Frase e Banner de LinkedIn, gere criativos para diversos propósitos.
- [hab.criacao.card1.titulo] Áudio Studio
- [hab.criacao.card1.texto] Música completa com voz cantada em português.
- [hab.criacao.card2.titulo] Modo Design
- [hab.criacao.card2.texto] Vários tipos de arte, com editor integrado.

> 🗑️ Pills de "9 vibes" (`pills_titulo`, `pill1`–`pill9`) e a `nota` técnica removidas.

### 05 · Estudos (refatorada — dedicada ao Tupham Estuda)
- [hab.pesquisa.eyebrow] Tupham Estuda
- [hab.pesquisa.h2] Um plano de estudos<br>que muda com você.
- [hab.pesquisa.lead] O Tupham monta um plano diário pro seu objetivo (ENEM, vestibular ou concurso) e recalcula todo dia, focando no que você mais precisa.
- [hab.pesquisa.skill1] **Plano diário:** até 3 passos por dia, recalculados pra mirar a sua maior dificuldade.
- [hab.pesquisa.skill2] **Revisão na hora certa:** flashcards que voltam quando você precisa fixar.
- [hab.pesquisa.skill3] **Questões no estilo da prova:** blocos pra treinar de verdade e medir o seu avanço.
- [hab.pesquisa.skill4] **Pesquisa com fontes:** quando precisa ir fundo num tema, o Tupham monta um dossiê com as fontes pra você conferir.
- [hab.pesquisa.pill1] ENEM e vestibular
- [hab.pesquisa.pill2] Plano diário
- [hab.pesquisa.pill3] Estuda offline

### A IA que funciona com e sem internet (fecho — reescrito sem jargão)
- [hab.ialocal.eyebrow] A diferença que ninguém tem
- [hab.ialocal.h2] A IA que funciona<br>com e sem internet.
- [hab.ialocal.lead] Sem internet, o Tupham resolve cálculos, definições, traduções e conceitos direto no seu celular. Com internet, faz pesquisas e traz clima, cotações e notícias na hora.
- [hab.ialocal.check1] **Privacidade:** a IA pensa no seu celular; coletamos dados só pra melhorias e suas conversas não vão pra terceiros.
- [hab.ialocal.check2] **Offline no Premium:** a única IA que funciona até sem conexão: no metrô, no avião, no sítio sem sinal.
- [hab.ialocal.check3] **Leve e rápido:** roda bem em qualquer celular, sem travar.
- [hab.ialocal.check4] **Sempre do seu lado:** com internet fica ainda melhor, mas nunca depende dela pra te ajudar.

### CTA final
- [hab.cta.eyebrow] Uma habilidade pra cada dia
- [hab.cta.h2] Tudo isso<br>num app só.
- [hab.cta.lead] A IA do Brasil no seu bolso: faz tudo, em português, e cada uso ainda ajuda o planeta. Grátis e ilimitado.

### Imagens (alt)
- [hab.alt.hero_back] Smart Chips do Tupham
- [hab.alt.hero_front] Tela inicial do Tupham
- [hab.alt.conversa_back] Resposta formatada no Tupham
- [hab.alt.conversa_front] Card de notícias com fontes no Tupham
- [hab.alt.documentos] Assistente de currículo do Tupham
- [hab.alt.esportes] Jogo ao vivo no Tupham, lance a lance
- [hab.alt.pesquisa_back] Plano de estudos do Tupham
- [hab.alt.pesquisa_front] Notícias agrupadas por evento no Tupham
- [hab.alt.ialocal] Tupham funcionando offline no Premium

---

## 🌳 como-salvamos-o-mundo.html — Planeta

### Meta / SEO
- [planeta.meta.title] Como salvamos o mundo — Tupham
- [planeta.meta.description] Usar IA aqui não custa pro planeta, devolve. Cada uso do Tupham gera Verdis, a moeda verde, e vira impacto ambiental rastreável e auditável. Veja o passo a passo.
- [planeta.meta.og_title] Como salvamos o mundo — Tupham
- [planeta.meta.og_description] Enquanto as IAs gringas queimam energia em grandes centros de processamento de dados, o Tupham roda no seu celular e transforma cada uso em impacto ambiental real.

### Hero
- [planeta.hero.eyebrow] Como salvamos o mundo
- [planeta.hero.h1] Usar IA aqui não custa<br>pro planeta. Devolve.
- [planeta.hero.lead] Enquanto as IAs gringas queimam energia em grandes centros de processamento de dados, o Tupham roda no seu celular e transforma cada uso em impacto ambiental real, rastreável e auditável.
- [planeta.hero.btn1] Ver o passo a passo
- [planeta.hero.btn2] Ver a auditoria

### Passo a passo
- [planeta.passo.eyebrow] O passo a passo
- [planeta.passo.h2] Do toque na tela<br>à floresta em pé.
- [planeta.passo.lead] Cinco passos simples. Você só usa o app do seu jeito, o impacto acontece junto, sem esforço extra.
- [planeta.passo.1.titulo] 1 · Você usa o Tupham
- [planeta.passo.1.texto] Cada conversa, pesquisa e interação gera Verdis automaticamente.
- [planeta.passo.2.titulo] 2 · Acompanhe seu impacto
- [planeta.passo.2.texto] Na tela "Seu Impacto" você vê seus Verdis, seu nível verde e quanto falta pro próximo marco.
- [planeta.passo.3.titulo] 3 · Acelere se quiser
- [planeta.passo.3.texto] Sequência diária, quiz ambiental, compartilhar e convidar amigos rendem Verdis extras. Quanto mais você se envolve, mais a floresta agradece.
- [planeta.passo.4.titulo] 4 · Verdis viram floresta
- [planeta.passo.4.texto] Seus Verdis equivalem a impacto: árvores plantadas, CO₂ compensado e m² de mata preservada. É a camada que traduz o uso do app em algo que dá pra enxergar.
- [planeta.passo.5.titulo] 5 · Nos bastidores
- [planeta.passo.5.texto] Uma parte da nossa receita é sempre destinada a ONGs ambientais parceiras, consolidada e auditada por terceiros independentes.
- [planeta.passo.5.link] Ver a auditoria
- [planeta.passo.equiv.eyebrow] A que seus Verdis equivalem
- [planeta.passo.equiv.h3] Cada Verdi tem peso no mundo real.
- [planeta.passo.equiv1.num] Árvores
- [planeta.passo.equiv1.eq] plantadas de verdade
- [planeta.passo.equiv2.num] CO₂
- [planeta.passo.equiv2.eq] compensado da atmosfera
- [planeta.passo.equiv3.num] Mata
- [planeta.passo.equiv3.eq] nativa preservada em pé
- [planeta.passo.equiv.nota] Somando o uso de todo mundo, a comunidade ajuda a plantar, compensar e preservar, é o impacto coletivo, não um ato individual literal.

### Verdis explicado
- [planeta.verdis.eyebrow] Verdis explicado
- [planeta.verdis.h2] A moeda verde<br>do Tupham.
- [planeta.verdis.lead] Verdis são gerados automaticamente com o uso do app, e também desbloqueiam funções premium pra quem é gratuito. Quanto mais você usa, mais Verdis acumula.
- [planeta.verdis.check1] **Vale de verdade:** pequeno por unidade, grande no acumulado da comunidade.
- [planeta.verdis.check2] **Boas-vindas:** novos usuários já começam com um bônus de Verdis.
- [planeta.verdis.check3] **Premium acumula mais:** um bom bônus de Verdis todo mês pra quem assina.
- [planeta.verdis.check4] **Dupla função:** medem seu impacto verde e ainda destravam recursos dentro do app.
- [planeta.verdis.pill1] Gera com o uso
- [planeta.verdis.pill2] Desbloqueia premium
- [planeta.verdis.pill3] Mede seu impacto
- [planeta.verdis.btn] Ver os planos

### Níveis verdes
- [planeta.niveis.eyebrow] Níveis verdes
- [planeta.niveis.h2] Quanto mais você usa,<br>mais sua floresta cresce.
- [planeta.niveis.lead] Você começa como uma Semente e evolui a cada marco. Cada nível é um pedaço a mais de floresta que você ajudou a manter de pé.
- [planeta.niveis.lv1] Semente
- [planeta.niveis.lv2] Broto
- [planeta.niveis.lv3] Muda
- [planeta.niveis.lv4] Árvore
- [planeta.niveis.lv5] Floresta
- [planeta.niveis.lv6] Bioma
- [planeta.niveis.lv7] Amazônia

### Transparência (teaser)
- [planeta.transp.eyebrow] Transparência
- [planeta.transp.h2] Não é greenwashing.<br>É pra ser auditado.
- [planeta.transp.lead] Nosso compromisso é simples: destinar uma parte da nossa receita a ONGs ambientais parceiras, consolidar tudo e abrir pra auditoria por terceiros independentes. O painel público de doações e a auditoria são compromissos declarados, e vão estar abertos pra você conferir.
- [planeta.transp.btn] Ver a auditoria &amp; transparência

### CTA final
- [planeta.cta.eyebrow] Cada uso ajuda a floresta a ficar de pé
- [planeta.cta.h2] Baixe. Use.<br>Refloreste.
- [planeta.cta.lead] A IA do Brasil, cada conversa vira impacto verde. Comece grátis hoje.

### Imagens (alt)
- [planeta.alt.impacto] Tela Seu Impacto no Tupham, com Verdis e nível verde
- [planeta.alt.mascote] Mascote do Tupham

---

## 🔍 auditoria.html — Auditoria & Transparência

### Meta / SEO
- [audit.meta.title] Auditoria &amp; Transparência — Tupham
- [audit.meta.description] Transparência total: acompanhe como o compromisso ambiental do Tupham vira preservação real, com método, repasses auditados por terceiros independentes e prestação de contas pública.
- [audit.meta.og_title] Auditoria &amp; Transparência — Tupham
- [audit.meta.og_description] Acompanhe como o compromisso ambiental do Tupham vira preservação real, com método e prestação de contas pública.

### Hero
- [audit.hero.backlink] ← Voltar
- [audit.hero.eyebrow] Auditoria &amp; Transparência
- [audit.hero.h1] Transparência<br>total.
- [audit.hero.lead] Acompanhe como o compromisso ambiental do Tupham vira preservação real, com método, repasses auditados por terceiros independentes e prestação de contas pública.
- [audit.hero.pill1] Repasses auditados
- [audit.hero.pill2] Registro público
- [audit.hero.pill3] Métricas verificadas

### Como funciona (Créditos Verdes)
- [audit.como.eyebrow] Como funciona
- [audit.como.h2] Do seu uso à floresta<br>em pé, em três passos.
- [audit.como.lead] Os **Créditos Verdes** conectam cada conversa no app a preservação ambiental concreta. Sem mistério, sem letra miúda.
- [audit.como.1.tag] PASSO 1
- [audit.como.1.titulo] Você usa o Tupham
- [audit.como.1.texto] Cada conversa, pesquisa ou criação no app gera Créditos Verdes, sem esforço extra da sua parte.
- [audit.como.2.tag] PASSO 2
- [audit.como.2.titulo] Os créditos se acumulam na comunidade
- [audit.como.2.texto] O uso de toda a base de usuários se soma e é consolidado em lote, formando um fundo coletivo destinado a causas ambientais.
- [audit.como.3.tag] PASSO 3
- [audit.como.3.titulo] Viram preservação real
- [audit.como.3.texto] O lote é repassado a organizações verificadas e auditado por terceiros, virando árvores, mata preservada e CO₂ compensado.

### Nosso compromisso
- [audit.compromisso.eyebrow] Nosso compromisso
- [audit.compromisso.h2] Uma parcela<br>da receita vai pro planeta.
- [audit.compromisso.lead] Assumimos publicamente o compromisso de destinar **parte da nossa receita** a causas ambientais, sempre. Esse valor é consolidado em lote e auditado por terceiros independentes, e os resultados serão publicados aqui.
- [audit.compromisso.nota] O app está em fase de lançamento. Este é um compromisso público: à medida que os primeiros repasses acontecerem, eles passam a aparecer no registro abaixo, com data, valor, destinatário e comprovante.
- [audit.compromisso.pill1] Consolidado em lote
- [audit.compromisso.pill2] Auditado por terceiros
- [audit.compromisso.pill3] Publicado aqui

### Registro de doações
- [audit.registro.eyebrow] Prestação de contas
- [audit.registro.h2] Registro de doações.
- [audit.registro.lead] Cada repasse aparece aqui com data, valor, destinatário e comprovante, público e conferível por qualquer pessoa.
- [audit.registro.col1] Data
- [audit.registro.col2] Valor
- [audit.registro.col3] Destinatário
- [audit.registro.col4] Comprovante
- [audit.registro.empty.titulo] Em breve
- [audit.registro.empty.texto] As primeiras doações serão publicadas aqui assim que o app for lançado e os primeiros repasses forem feitos. Volte para acompanhar, cada linha virá com comprovante.

### Metodologia
- [audit.metodologia.eyebrow] Metodologia
- [audit.metodologia.h2] Como a gente garante<br>que vira impacto.
- [audit.metodologia.lead] Da escolha do parceiro à métrica final, cada etapa tem regra clara e verificação de fora.
- [audit.metodologia.1.tag] ETAPA 01
- [audit.metodologia.1.titulo] Seleção de parceiros
- [audit.metodologia.1.texto] Organizações ambientais avaliadas por impacto comprovado, transparência financeira e certificações reconhecidas. Só entra quem passa por esse crivo.
- [audit.metodologia.2.tag] ETAPA 02
- [audit.metodologia.2.titulo] Alocação de recursos
- [audit.metodologia.2.texto] Repasses trimestrais aos parceiros verificados, a partir do lote consolidado da comunidade. Ciclo regular, valores rastreáveis.
- [audit.metodologia.3.tag] ETAPA 03
- [audit.metodologia.3.titulo] Auditoria e relatórios
- [audit.metodologia.3.texto] Cada repasse é auditado por terceiros independentes e publicado aqui, com comprovante, para que qualquer pessoa possa conferir.
- [audit.metodologia.4.tag] ETAPA 04
- [audit.metodologia.4.titulo] Impacto mensurável
- [audit.metodologia.4.texto] Cada parceiro reporta métricas (árvores plantadas, área preservada e CO₂), verificadas de forma independente e publicadas para acompanhamento.

### Parceiros de preservação
- [audit.parceiros.eyebrow] Parceiros de preservação
- [audit.parceiros.h2] Quem recebe os repasses<br>é escolhido a dedo.
- [audit.parceiros.lead] Trabalhamos apenas com organizações ambientais certificadas. Os parceiros escolhidos e o status de cada um serão listados aqui, publicamente, conforme forem confirmados.
- [audit.parceiros.1.titulo] Certificação obrigatória
- [audit.parceiros.1.texto] Só consideramos organizações com certificações ambientais reconhecidas e histórico documentado de atuação na preservação.
- [audit.parceiros.2.titulo] Transparência financeira
- [audit.parceiros.2.texto] O parceiro precisa prestar contas dos recursos que recebe, com relatórios abertos e rastreáveis, mesmo padrão que aplicamos a nós.
- [audit.parceiros.3.titulo] Impacto comprovado
- [audit.parceiros.3.texto] Avaliamos resultados reais e mensuráveis em campo. Boas intenções não bastam: precisa de métrica e verificação.
- [audit.parceiros.4.titulo] Parceiro em definição
- [audit.parceiros.4.texto] Os parceiros estão sendo selecionados sob esses critérios. Cada organização confirmada aparecerá nesta página, com seu status, sem nomes antes da hora.
- [audit.parceiros.5.titulo] Status público
- [audit.parceiros.5.texto] Em avaliação, confirmado ou ativo: o status de cada parceiro fica visível aqui, atualizado conforme os repasses avançam.

### CTA final
- [audit.cta.eyebrow] Transparência de verdade
- [audit.cta.h2] Usar IA aqui devolve<br>pro planeta.
- [audit.cta.lead] Entenda o passo a passo dos Créditos Verdes e comece a reflorestar a cada conversa.
- [audit.cta.btn] Como salvamos o mundo

---

## 💳 planos.html — Planos

### Meta / SEO
- [planos.meta.title] Planos — Tupham · Grátis pra sempre ou Premium por R$ 14,90/mês
- [planos.meta.description] A IA do Brasil cabe no seu bolso: plano gratuito completo e ilimitado, sustentado por anúncios, e Premium por R$ 14,90/mês ou R$ 139,90/ano. Cancele quando quiser.
- [planos.meta.og_title] Planos — Tupham
- [planos.meta.og_description] Comece grátis. Premium quando quiser, por R$ 14,90/mês. A IA do Brasil que cabe no seu bolso.

### Hero
- [planos.hero.eyebrow] Planos
- [planos.hero.h1] Comece grátis.<br>Premium quando<br>quiser.
- [planos.hero.lead] A IA do Brasil é grátis e ilimitada. Quem quiser mais tem o Premium por **R$ 14,90/mês**.
- [planos.hero.btn1] Ver os planos
- [planos.hero.btn2] O que está incluso
- [planos.hero.pill1] Grátis pra sempre
- [planos.hero.pill2] Cancele quando quiser
- [planos.hero.pill3] Cada uso planta floresta

### Os dois planos
- [planos.pricing.eyebrow] Os dois planos
- [planos.pricing.h2] Escolha como quiser.<br>Comece sem cartão.
- [planos.pricing.lead] O plano gratuito faz muita coisa, grátis e ilimitado. O Premium tira todos os limites e libera o modo offline completo.
- [planos.pricing.free.nome] Grátis
- [planos.pricing.free.preco] R$ 0
- [planos.pricing.free.sub] Pra sempre, sustentado por anúncios discretos.
- [planos.pricing.free.feat1] Chat completo com IA
- [planos.pricing.free.feat2] Esportes ao vivo &amp; bolão
- [planos.pricing.free.feat3] Notícias e cards visuais
- [planos.pricing.free.feat4] Gera Verdis e planta floresta
- [planos.pricing.free.feat5] 1ª pesquisa profunda grátis
- [planos.pricing.free.btn] Começar grátis
- [planos.pricing.pro.badge] MAIS POPULAR
- [planos.pricing.pro.nome] Premium
- [planos.pricing.pro.preco] R$ 14,90/mês
- [planos.pricing.pro.sub] ou R$ 139,90/ano. Você economiza.
- [planos.pricing.pro.feat1] Tudo ilimitado
- [planos.pricing.pro.feat2] Modo offline completo
- [planos.pricing.pro.feat3] Zero anúncios
- [planos.pricing.pro.feat4] Verdis todo mês
- [planos.pricing.pro.feat5] Pesquisas e criações sem limite
- [planos.pricing.pro.feat6] Suporte prioritário
- [planos.pricing.pro.btn] Assinar Premium
- [planos.pricing.nota] Trial grátis quando a conta é elegível. Restaure compras a qualquer momento. **Cancele quando quiser**, sem multa.

### Comparativo (vs gringas)
- [planos.compare.eyebrow] A conta não fecha
- [planos.compare.h2] Elas cobram muito.<br>O Tupham é grátis e ilimitado.
- [planos.compare.lead] Muito mais barato, e faz o que nenhuma delas faz.
- [planos.compare.them.who] IAs gringas
- [planos.compare.them.price] R$ 105+/mês
- [planos.compare.us.who] Tupham
- [planos.compare.us.price] Grátis, ou R$ 14,90/mês no Premium.
- [planos.compare.row1] Chat avançado
- [planos.compare.row3] Roda no seu celular
- [planos.compare.row4] Brasileirão &amp; bolão
- [planos.compare.row5] Currículo &amp; PDFs
- [planos.compare.row6] Parte da receita pro planeta
- [planos.compare.footer] O ChatGPT Plus custa cerca de **7% do salário mínimo**. O Tupham Premium, cerca de **1%**.

### O que está incluso (tabela)
- [planos.incluso.eyebrow] O que está incluso
- [planos.incluso.h2] Tudo do Grátis.<br>Sem limites no Premium.
- [planos.incluso.lead] O essencial já vem no plano gratuito. O Premium tira os limites e libera o que mais pesa: offline, zero anúncios e Verdis garantidos.
- [planos.incluso.col.recurso] Recurso
- [planos.incluso.col.gratis] Grátis
- [planos.incluso.col.premium] Premium
- [planos.incluso.r1.nome] Chat com IA
- [planos.incluso.r1.gratis] Incluso
- [planos.incluso.r1.premium] Incluso
- [planos.incluso.r2.nome] Esportes &amp; bolão
- [planos.incluso.r2.gratis] Incluso
- [planos.incluso.r2.premium] Incluso
- [planos.incluso.r3.nome] Notícias &amp; cards visuais
- [planos.incluso.r3.gratis] Incluso
- [planos.incluso.r3.premium] Incluso
- [planos.incluso.r4.nome] Pesquisa profunda
- [planos.incluso.r4.gratis] 1ª grátis
- [planos.incluso.r4.premium] Ilimitada
- [planos.incluso.r5.nome] Criação de áudio &amp; design
- [planos.incluso.r5.gratis] Via Verdis / anúncios
- [planos.incluso.r5.premium] Livre
- [planos.incluso.r6.nome] Modo offline (PIN/biometria)
- [planos.incluso.r6.gratis] —
- [planos.incluso.r6.premium] Completo
- [planos.incluso.r7.nome] Anúncios
- [planos.incluso.r7.gratis] Discretos
- [planos.incluso.r7.premium] Zero
- [planos.incluso.r8.nome] Verdis por mês
- [planos.incluso.r8.gratis] Gera usando
- [planos.incluso.r8.premium] Bônus garantido
- [planos.incluso.r9.nome] Suporte prioritário
- [planos.incluso.r9.gratis] —
- [planos.incluso.r9.premium] Incluso
- [planos.incluso.nota] Tanto no Grátis quanto no Premium, a IA funciona com e sem internet.
- [planos.incluso.nota_link] Como funciona a tecnologia

### FAQ
- [planos.faq.eyebrow] Perguntas
- [planos.faq.h2] Tira a dúvida.
- [planos.faq.q1] O que é o Tupham?
- [planos.faq.a1] É a IA do Brasil, num app só: chat, currículo e documentos, esportes ao vivo, bolão com amigos, pesquisa com fontes, áudios, plano de estudos e muito mais. Tudo em português de verdade, grátis e ilimitado.
- [planos.faq.q2] Precisa de internet?
- [planos.faq.a2] O Tupham funciona com e sem internet. Sem conexão, ele resolve contas, definições, traduções e conceitos direto no seu celular. O modo 100% offline é um recurso Premium, desbloqueado com PIN ou biometria. Funções que dependem de dados em tempo real (notícias, esportes, busca) usam internet quando disponível.
- [planos.faq.q3] Quanto custa?
- [planos.faq.a3] O Tupham é grátis e ilimitado, sustentado por anúncios. O Premium custa R$ 14,90/mês ou R$ 139,90/ano, com offline completo, zero anúncios e Verdis todo mês.
- [planos.faq.q4] Como funciona o plano gratuito?
- [planos.faq.a4] O plano Grátis é completo e ilimitado, sustentado por anúncios discretos e pela economia de Verdis, a nossa moeda verde. Você gera Verdis usando o Tupham e aplica em recursos como criação de áudio e design. Chat, esportes, bolão e notícias estão liberados. Sua primeira pesquisa profunda também é gratuita.
- [planos.faq.q5] O que é o modo offline?
- [planos.faq.a5] É o recurso Premium que deixa a IA funcionar 100% sem internet: no metrô, no avião ou no sítio sem sinal. Você desbloqueia com PIN ou biometria e a IA responde direto no seu celular.
- [planos.faq.q6] Posso cancelar quando quiser?
- [planos.faq.a6] Pode, sem multa. A assinatura é gerenciada pela App Store ou pelo Google Play, e você cancela direto na sua conta da loja quando quiser. Também dá pra restaurar compras a qualquer momento se trocar de aparelho.
- [planos.faq.q7] Como o Tupham ajuda o planeta?
- [planos.faq.a7] Cada uso gera Verdis, a nossa moeda verde, e uma parte da nossa receita é destinada a causas ambientais auditadas por terceiros. No app você acompanha seu impacto em árvores, CO₂ e mata preservada.
- [planos.faq.a7_link] Ver o passo a passo
- [planos.faq.q8] Meus dados ficam seguros?
- [planos.faq.a8] A IA raciocina dentro do seu celular, suas conversas não precisam sair do aparelho pra serem respondidas. Coletamos dados apenas para melhorias. Em caso de dúvida, fale com privacidade@tupham.com.br.
- [planos.faq.q9] Em quais aparelhos funciona?
- [planos.faq.a9] Funciona em iPhone e Android. O Tupham se ajusta sozinho ao seu celular, do mais simples ao top de linha, pra rodar bem em qualquer aparelho.

### Empresa & contato
- [planos.empresa.eyebrow] Empresa &amp; contato
- [planos.empresa.h2] Gente de verdade,<br>aqui no Brasil.
- [planos.empresa.lead] O Tupham é feito pela Graycat Corp, em Salvador. Precisou falar com a gente? É só escrever.
- [planos.empresa.1.titulo] Quem faz
- [planos.empresa.1.texto] Graycat Corp · Salvador, Bahia 🌴 — a empresa por trás do Tupham.
- [planos.empresa.1.link] graycatcorp.com
- [planos.empresa.2.titulo] Suporte
- [planos.empresa.2.texto] Dúvidas, sugestões ou um problema no app? Fale direto com o time.
- [planos.empresa.2.link] suporte@tupham.com.br
- [planos.empresa.3.titulo] Privacidade &amp; dados
- [planos.empresa.3.texto] Encarregado de dados (DPO) para assuntos de privacidade e LGPD.
- [planos.empresa.3.link] privacidade@tupham.com.br

### CTA final
- [planos.cta.eyebrow] Disponível em breve nas lojas
- [planos.cta.h2] Comece grátis.<br>Refloreste usando.
- [planos.cta.lead] A IA do Brasil, no seu bolso, de graça pra sempre ou R$ 14,90 por mês.

### Imagens (alt)
- [planos.alt.hero] Tela inicial do Tupham
