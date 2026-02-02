/**
 * TUPHAM AI - Institutional Website
 * A IA brasileira amiga da Amazônia
 *
 * JavaScript functionality including:
 * - Navbar scroll effects
 * - Mobile menu toggle
 * - Scroll animations (Intersection Observer)
 * - Counter animations
 * - FAQ accordion
 * - Floating particles
 * - Language toggle (PT-BR / EN-US)
 */

// ========================================
// TRANSLATIONS
// ========================================
const translations = {
    'pt-BR': {
        // Navbar
        'nav.features': 'Funcionalidades',
        'nav.impact': 'Impacto',
        'nav.plans': 'Planos',
        'nav.team': 'Equipe',
        'nav.faq': 'FAQ',
        'nav.download': 'Baixar App',

        // Hero
        'hero.title1': 'Inteligência que transforma.',
        'hero.title2': 'Tecnologia que refloresta.',
        'hero.subtitle': 'O Tupham AI é seu assistente inteligente pessoal. Cada conversa que você tem ajuda a reflorestar a Amazônia.',
        'hero.downloadIOS': 'Baixar para iOS',
        'hero.downloadAndroid': 'Baixar para Android',
        'hero.treesPlanted': 'árvores plantadas pela comunidade Tupham',

        // Mockup
        'mockup.online': 'Online',
        'mockup.greeting': 'Olá! Sou o Tupham, sua IA amiga da Amazônia. Como posso ajudar?',
        'mockup.question': 'Como funciona o reflorestamento?',
        'mockup.answer': '10% da sua assinatura vai direto para plantar árvores na Amazônia! 🌱',
        'mockup.placeholder': 'Digite sua mensagem...',

        // Features
        'features.title': 'Tudo que você precisa, em um só lugar',
        'features.subtitle': 'Recursos poderosos com impacto positivo para o planeta',
        'features.chat.title': 'Chat Inteligente',
        'features.chat.desc': 'Converse naturalmente e receba respostas precisas para qualquer pergunta',
        'features.search.title': 'Pesquisa Web',
        'features.search.desc': 'Informações atualizadas da internet em tempo real',
        'features.impact.title': 'Painel de Impacto',
        'features.impact.desc': 'Acompanhe sua contribuição ambiental em tempo real',
        'features.local.title': 'IA Local',
        'features.local.desc': 'IA roda no seu dispositivo, impactando menos o meio ambiente',
        'features.gamification.title': 'Gamificação',
        'features.gamification.desc': 'Conquiste badges e acompanhe seu impacto ambiental',
        'features.reforestation.title': 'Reflorestamento',
        'features.reforestation.desc': '10% da receita vai para plantar árvores na Amazônia',

        // How it works
        'howItWorks.title': 'Simples de usar, poderoso de verdade',
        'howItWorks.subtitle': 'Três passos para transformar o mundo',
        'howItWorks.step1.title': 'Baixe o app',
        'howItWorks.step1.desc': 'Disponível gratuitamente para iOS e Android',
        'howItWorks.step2.title': 'Converse com o Tupham',
        'howItWorks.step2.desc': 'Pergunte qualquer coisa e receba respostas inteligentes',
        'howItWorks.step3.title': 'Ajude a Amazônia',
        'howItWorks.step3.desc': 'Parte da receita vai para reflorestamento',

        // Impact
        'impact.title': 'Cada conversa planta uma semente',
        'impact.subtitle': '10% de toda a receita Premium e de anúncios é destinada ao reflorestamento da Amazônia',
        'impact.trees': 'Árvores Plantadas',
        'impact.co2': 'CO₂ Compensado',
        'impact.area': 'Área Preservada',
        'impact.supporters': 'Apoiadores Ativos',
        'impact.mapLegend': 'Áreas de reflorestamento',

        // Pricing
        'pricing.title': 'Escolha seu plano',
        'pricing.subtitle': 'Comece gratuitamente ou apoie a Amazônia com o Premium',
        'pricing.free.name': 'Gratuito',
        'pricing.free.feature1': 'Chat básico com IA',
        'pricing.free.feature2': '5 análises de documentos/mês',
        'pricing.free.feature3': '5 análises de imagens/mês',
        'pricing.free.feature4': 'Anúncios discretos',
        'pricing.free.cta': 'Começar Grátis',
        'pricing.premium.badge': 'Mais Popular',
        'pricing.premium.name': 'Premium',
        'pricing.premium.period': '/mês',
        'pricing.premium.feature1': 'Chat ilimitado com IA avançada',
        'pricing.premium.feature2': 'Análises ilimitadas',
        'pricing.premium.feature3': 'Sem anúncios',
        'pricing.premium.feature4': 'Histórico completo',
        'pricing.premium.feature5': 'Suporte prioritário',
        'pricing.premium.feature6': 'Badge "Apoiador da Amazônia"',
        'pricing.premium.feature7': '10% vai para reflorestamento',
        'pricing.premium.cta': 'Assinar Premium',

        // Team
        'team.title': 'Quem está por trás do Tupham',
        'team.subtitle': 'Conheça a empresa que criou o Tupham AI',
        'team.description': 'A Gray Cat Corporation é uma empresa brasileira de tecnologia focada em criar soluções inovadoras com impacto positivo. Nossa missão é desenvolver produtos que unam tecnologia de ponta com responsabilidade ambiental e social.',
        'team.description2': 'Com o Tupham AI, unimos inteligência artificial e consciência ambiental para criar um assistente que não apenas ajuda você no dia a dia, mas também contribui ativamente para a preservação da Amazônia.',
        'team.visitWebsite': 'Visitar site',

        // FAQ
        'faq.title': 'Perguntas Frequentes',
        'faq.subtitle': 'Tire suas dúvidas sobre o Tupham AI',
        'faq.q1': 'O Tupham é gratuito?',
        'faq.a1': 'Sim! O Tupham oferece um plano gratuito com funcionalidades básicas. Para recursos ilimitados e para apoiar o reflorestamento da Amazônia, você pode assinar o plano Premium por R$ 14,90/mês.',
        'faq.q2': 'Como funciona o reflorestamento?',
        'faq.a2': '10% de toda receita Premium e de anúncios é doada para fundos de reflorestamento da Amazônia com parceiros verificados. Trabalhamos com organizações certificadas para garantir que cada real investido resulte em árvores plantadas de verdade.',
        'faq.q3': 'O app funciona offline?',
        'faq.a3': 'O Tupham requer conexão com a internet para funcionar. Precisamos de sincronia com nossos servidores para garantir a melhor qualidade na experiência do usuário e manter os dados de impacto ambiental atualizados.',
        'faq.q4': 'Posso cancelar a assinatura a qualquer momento?',
        'faq.a4': 'Sim, você pode cancelar sua assinatura a qualquer momento, sem multa ou burocracia. O acesso Premium continua até o fim do período já pago.',

        // CTA
        'cta.title': 'Pronto para fazer a diferença?',
        'cta.subtitle': 'Baixe o Tupham AI e transforme cada conversa em impacto real para a Amazônia',
        'cta.ios': 'Baixar para iOS',
        'cta.android': 'Baixar para Android',

        // Footer
        'footer.tagline': 'A IA brasileira amiga da Amazônia',
        'footer.product': 'Produto',
        'footer.company': 'Empresa',
        'footer.legal': 'Legal',
        'footer.terms': 'Termos de Uso',
        'footer.privacy': 'Política de Privacidade',
        'footer.social': 'Redes Sociais',
        'footer.madeWith': 'Feito com',
        'footer.forAmazon': 'para a Amazônia'
    },
    'en-US': {
        // Navbar
        'nav.features': 'Features',
        'nav.impact': 'Impact',
        'nav.plans': 'Plans',
        'nav.team': 'Team',
        'nav.faq': 'FAQ',
        'nav.download': 'Download App',

        // Hero
        'hero.title1': 'Intelligence that transforms.',
        'hero.title2': 'Technology that reforests.',
        'hero.subtitle': 'Tupham AI is your personal intelligent assistant. Every conversation you have helps reforest the Amazon.',
        'hero.downloadIOS': 'Download for iOS',
        'hero.downloadAndroid': 'Download for Android',
        'hero.treesPlanted': 'trees planted by the Tupham community',

        // Mockup
        'mockup.online': 'Online',
        'mockup.greeting': "Hi! I'm Tupham, your AI friend of the Amazon. How can I help?",
        'mockup.question': 'How does reforestation work?',
        'mockup.answer': '10% of your subscription goes directly to planting trees in the Amazon! 🌱',
        'mockup.placeholder': 'Type your message...',

        // Features
        'features.title': 'Everything you need, in one place',
        'features.subtitle': 'Powerful features with positive impact for the planet',
        'features.chat.title': 'Smart Chat',
        'features.chat.desc': 'Chat naturally and get accurate answers to any question',
        'features.search.title': 'Web Search',
        'features.search.desc': 'Up-to-date information from the internet in real time',
        'features.impact.title': 'Impact Dashboard',
        'features.impact.desc': 'Track your environmental contribution in real time',
        'features.local.title': 'Local AI',
        'features.local.desc': 'AI runs on your device, having less impact on the environment',
        'features.gamification.title': 'Gamification',
        'features.gamification.desc': 'Earn badges and track your environmental impact',
        'features.reforestation.title': 'Reforestation',
        'features.reforestation.desc': '10% of revenue goes to planting trees in the Amazon',

        // How it works
        'howItWorks.title': 'Simple to use, truly powerful',
        'howItWorks.subtitle': 'Three steps to transform the world',
        'howItWorks.step1.title': 'Download the app',
        'howItWorks.step1.desc': 'Available for free on iOS and Android',
        'howItWorks.step2.title': 'Chat with Tupham',
        'howItWorks.step2.desc': 'Ask anything and get intelligent answers',
        'howItWorks.step3.title': 'Help the Amazon',
        'howItWorks.step3.desc': 'Part of the revenue goes to reforestation',

        // Impact
        'impact.title': 'Every conversation plants a seed',
        'impact.subtitle': '10% of all Premium and ad revenue is donated to Amazon reforestation',
        'impact.trees': 'Trees Planted',
        'impact.co2': 'CO₂ Offset',
        'impact.area': 'Area Preserved',
        'impact.supporters': 'Active Supporters',
        'impact.mapLegend': 'Reforestation areas',

        // Pricing
        'pricing.title': 'Choose your plan',
        'pricing.subtitle': 'Start for free or support the Amazon with Premium',
        'pricing.free.name': 'Free',
        'pricing.free.feature1': 'Basic AI chat',
        'pricing.free.feature2': '5 document analyses/month',
        'pricing.free.feature3': '5 image analyses/month',
        'pricing.free.feature4': 'Discreet ads',
        'pricing.free.cta': 'Start Free',
        'pricing.premium.badge': 'Most Popular',
        'pricing.premium.name': 'Premium',
        'pricing.premium.period': '/month',
        'pricing.premium.feature1': 'Unlimited chat with advanced AI',
        'pricing.premium.feature2': 'Unlimited analyses',
        'pricing.premium.feature3': 'No ads',
        'pricing.premium.feature4': 'Complete history',
        'pricing.premium.feature5': 'Priority support',
        'pricing.premium.feature6': '"Amazon Supporter" badge',
        'pricing.premium.feature7': '10% goes to reforestation',
        'pricing.premium.cta': 'Subscribe Premium',

        // Team
        'team.title': 'Who is behind Tupham',
        'team.subtitle': 'Meet the company that created Tupham AI',
        'team.description': 'Gray Cat Corporation is a Brazilian technology company focused on creating innovative solutions with positive impact. Our mission is to develop products that combine cutting-edge technology with environmental and social responsibility.',
        'team.description2': 'With Tupham AI, we combine artificial intelligence and environmental awareness to create an assistant that not only helps you in your daily life, but also actively contributes to the preservation of the Amazon.',
        'team.visitWebsite': 'Visit website',

        // FAQ
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle': 'Get your questions about Tupham AI answered',
        'faq.q1': 'Is Tupham free?',
        'faq.a1': 'Yes! Tupham offers a free plan with basic features. For unlimited features and to support Amazon reforestation, you can subscribe to the Premium plan for R$ 14.90/month.',
        'faq.q2': 'How does reforestation work?',
        'faq.a2': '10% of all Premium and ad revenue is donated to Amazon reforestation funds with verified partners. We work with certified organizations to ensure every dollar invested results in real trees being planted.',
        'faq.q3': 'Does the app work offline?',
        'faq.a3': 'Tupham requires an internet connection to work. We need synchronization with our servers to ensure the best quality user experience and keep environmental impact data up to date.',
        'faq.q4': 'Can I cancel my subscription at any time?',
        'faq.a4': 'Yes, you can cancel your subscription at any time, without penalty or hassle. Premium access continues until the end of the already paid period.',

        // CTA
        'cta.title': 'Ready to make a difference?',
        'cta.subtitle': 'Download Tupham AI and turn every conversation into real impact for the Amazon',
        'cta.ios': 'Download for iOS',
        'cta.android': 'Download for Android',

        // Footer
        'footer.tagline': "Brazil's AI friend of the Amazon",
        'footer.product': 'Product',
        'footer.company': 'Company',
        'footer.legal': 'Legal',
        'footer.terms': 'Terms of Use',
        'footer.privacy': 'Privacy Policy',
        'footer.social': 'Social Media',
        'footer.madeWith': 'Made with',
        'footer.forAmazon': 'for the Amazon'
    }
};

// ========================================
// LANGUAGE MANAGEMENT
// ========================================
let currentLanguage = 'pt-BR';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('tupham-language', lang);

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update language toggle button
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

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt-BR' ? 'pt-BR' : 'en';
}

function toggleLanguage() {
    const newLang = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
    setLanguage(newLang);
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
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
    handleScroll(); // Initial check
}

// ========================================
// MOBILE MENU
// ========================================
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

    // Close menu when clicking a link
    mobileLinks?.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        }
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// SCROLL ANIMATIONS (Intersection Observer)
// ========================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Start counter animation if it's a counter element
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

// ========================================
// COUNTER ANIMATION
// ========================================
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

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

// Hero tree counter animation
function initHeroTreeCounter() {
    const heroCounter = document.getElementById('hero-tree-count');

    if (!heroCounter) return;

    const target = 12847;
    const duration = 2500;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    // Delay start for visual effect
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

// ========================================
// FAQ ACCORDION
// ========================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question?.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// ========================================
// FLOATING PARTICLES
// ========================================
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

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation delay and duration
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.animationDuration = `${15 + Math.random() * 10}s`;

    // Random size for non-leaf particles
    if (!isLeaf) {
        const size = 5 + Math.random() * 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
    }

    container.appendChild(particle);
}

// ========================================
// LANGUAGE TOGGLE EVENT
// ========================================
function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');

    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // Load saved language preference
    const savedLang = localStorage.getItem('tupham-language');
    if (savedLang && (savedLang === 'pt-BR' || savedLang === 'en-US')) {
        setLanguage(savedLang);
    } else {
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('pt')) {
            setLanguage('pt-BR');
        } else {
            setLanguage('pt-BR'); // Default to Portuguese
        }
    }
}

// ========================================
// TYPING ANIMATION IN MOCKUP
// ========================================
function initTypingAnimation() {
    const typingIndicator = document.querySelector('.message-typing');

    if (!typingIndicator) return;

    // Randomly show/hide typing indicator
    setInterval(() => {
        if (Math.random() > 0.5) {
            typingIndicator.style.display = 'flex';
            setTimeout(() => {
                typingIndicator.style.display = 'none';
            }, 2000 + Math.random() * 2000);
        }
    }, 5000);
}

// ========================================
// PREFERS REDUCED MOTION
// ========================================
function checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            element.classList.add('visible');
        });
    }
}

// ========================================
// INITIALIZE EVERYTHING
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Check for reduced motion preference first
    checkReducedMotion();

    // Initialize all features
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initHeroTreeCounter();
    initFAQ();
    initParticles();
    initLanguageToggle();
    initTypingAnimation();

    // Add loading complete class for any initial animations
    document.body.classList.add('loaded');
});

// ========================================
// LAZY LOADING FOR IMAGES (if any are added later)
// ========================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support native lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if (lazyImages.length) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
}
