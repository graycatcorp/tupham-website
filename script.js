document.addEventListener('DOMContentLoaded',()=>{
  const bar=document.getElementById('progress'),nav=document.getElementById('nav'),mascot=document.getElementById('mascot');
  let tick=false;

  /* Scroll: progress + nav + parallax */
  window.addEventListener('scroll',()=>{if(!tick){requestAnimationFrame(()=>{
    const y=window.scrollY,h=document.documentElement.scrollHeight-window.innerHeight;
    if(bar)bar.style.width=(h>0?(y/h)*100:0)+'%';
    if(nav)nav.classList.toggle('scrolled',y>40);
    if(mascot&&window.innerWidth>959){
      const r=Math.min(y/600,1);
      mascot.style.transform='translateY('+(-12+r*30)+'px) rotate('+(r*3)+'deg)';
    }
    tick=false;
  });tick=true;}},{passive:true});
  if(nav)nav.classList.toggle('scrolled',window.scrollY>40);

  /* Burger */
  const burger=document.getElementById('burger'),mob=document.getElementById('mob-menu');
  if(burger&&mob){
    burger.addEventListener('click',()=>{const o=mob.classList.toggle('open');burger.classList.toggle('active',o)});
    mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mob.classList.remove('open');burger.classList.remove('active')}));
  }

  /* Smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-75,behavior:'smooth'})}});
  });

  /* Reveal */
  const els=document.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window){
    const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');obs.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
    els.forEach(el=>obs.observe(el));
  }else els.forEach(el=>el.classList.add('revealed'));

  /* Counters */
  const ctrs=document.querySelectorAll('[data-counter]');
  if('IntersectionObserver' in window&&ctrs.length){
    const co=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){count(e.target);co.unobserve(e.target)}})},{threshold:.5});
    ctrs.forEach(el=>co.observe(el));
  }
  function count(el){
    const tgt=+el.dataset.counter,dur=1800,st=performance.now();
    (function f(now){
      const p=Math.min((now-st)/dur,1),v=1-Math.pow(1-p,3);
      el.textContent=Math.floor(v*tgt).toLocaleString('pt-BR');
      if(p<1)requestAnimationFrame(f);else el.textContent=tgt.toLocaleString('pt-BR');
    })(st);
  }

  /* FAQ */
  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const it=btn.closest('.faq-item'),op=it.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
      if(!op)it.classList.add('open');
    });
  });

  /* i18n */
  const lb=document.getElementById('lang-toggle');
  let lang='pt';
  const orig=new Map();
  document.querySelectorAll('[data-i18n]').forEach(el=>orig.set(el,el.innerHTML));

  const en={
    'nav.feat':'Features','nav.comp':'Compare','nav.price':'Plans','nav.faq':'FAQ','nav.aud':'Audit','nav.dl':'Download',
    'hero.h':'Brazil\'s AI.','hero.sub':'Does everything. Works offline. Free.',
    'hero.desc':'PDF research, professional resume, study plans, audio creation, live Brasileir\u00e3o with 40 teams, 17 visual cards and native voice. Unlimited. One app.',
    'pill.1':'100% Offline','pill.2':'Free & unlimited','pill.3':'40 live teams','pill.4':'17 visual cards',
    'feat.h':'All in one app.',
    'f.1t':'Chat','f.1d':'Understands accent. Understands slang. Understands football.',
    'f.2t':'Deep Research','f.2d':'Ready PDF. Verified sources. Print and submit.',
    'f.3t':'Resume','f.3d':'BR format. PDF + Word. 3 minutes. Recruiter-ready.',
    'f.4t':'Study Plans','f.4d':'ENEM. Civil exams. Coding. Week by week.',
    'f.5t':'Audio','f.5d':'Brazilian voice. Lo-Fi, Jingle, Ad. Exports MP3.',
    'f.6t':'Brasileir\u00e3o','f.6d':'40 teams. S\u00e9rie A+B. Live scores. Goal push.',
    'f.7t':'17 Cards','f.7d':'Recipe. Bio. Formula. Code. Translation. And 12 more.',
    'f.8t':'Voice','f.8d':'Speak and listen in Brazilian Portuguese.',
    'f.9t':'Offline','f.9d':'No internet. No problem. Runs on your phone.',
    'cmp.h':'They charge R$ 105+. Tupham is free.',
    'cmp.free':'Free',
    'cmp.them':'Foreign AIs','cmp.chat':'Advanced chat','cmp.search':'Web search','cmp.off':'Works offline','cmp.foot':'Live Brasileir\u00e3o','cmp.cv':'BR Resume','cmp.audio':'Audio creation','cmp.cards':'17 visual cards','cmp.env':'Environmental impact','cmp.ctx':'Brazilian context',
    'cmp.kick':'Free and unlimited. Everything they do \u2014 and what none of them offer.',
    'v.h':'Each question is a tree.','v.sub':'Not greenwashing. The Amazon standing.',
    'v.1':'Green Credits','v.2':'Trees planted','v.3':'m\u00b2 preserved','v.4':'Supporters','v.link':'See full audit \u2192',
    'pr.h':'Free and unlimited. Premium for those who want more.','pr.free':'Free',
    'pr.f1':'Full chat','pr.f2':'Web search (10/day)','pr.f3':'5 analyses/month','pr.f4':'Green Credits','pr.f5':'Discreet ads','pr.fc':'Start Free',
    'pr.pop':'MOST POPULAR','pr.mo':'/month','pr.yr':'or R$ 139.90/year (28% off)',
    'pr.p1':'Everything unlimited','pr.p2':'100% Offline','pr.p3':'Zero ads','pr.p4':'Double Credits','pr.p5':'Full history','pr.p6':'Priority support','pr.pc':'Subscribe Premium',
    'faq.h':'FAQ',
    'fq.1q':'What is Tupham?','fq.1a':'Complete AI platform built in Brazil. PDF research, resume, study plans, audio, live Brasileir\u00e3o, 17 visual cards, native voice. All in one app.',
    'fq.2q':'How much?','fq.2a':'Free with ads. Premium R$ 14.90/month or R$ 139.90/year. 7x cheaper than any foreign AI.',
    'fq.3q':'Works without internet?','fq.3a':'Yes. Premium runs 100% offline on your phone. Outback, subway, airplane mode.',
    'fq.4q':'What are Verdis Credits?','fq.4a':'Green economy. Each use generates credits that become Amazon trees. Traceable. Verifiable.',
    'fq.5q':'vs ChatGPT?','fq.5a':'Everything they do + offline, Brasileir\u00e3o, BR resume, audio, 17 cards, Verdis. R$ 14.90. They charge R$ 105+.',
    'fq.6q':'Can I cancel?','fq.6a':'Yes. No penalty. No hassle.',
    'cta.h':'Download. Use. Reforest.',
    'ft.tag':'Brazil\'s AI.','ft.h1':'Product','ft.aud':'Audit','ft.h2':'Company','ft.h3':'Legal','ft.terms':'Terms','ft.priv':'Privacy',
  };

  if(lb)lb.addEventListener('click',()=>{
    lang=lang==='pt'?'en':'pt';
    lb.querySelector('.lang-flag').textContent=lang==='pt'?'\uD83C\uDDE7\uD83C\uDDF7':'\uD83C\uDDFA\uD83C\uDDF8';
    lb.querySelector('.lang-code').textContent=lang==='pt'?'PT':'EN';
    document.documentElement.lang=lang==='pt'?'pt-BR':'en-US';
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k=el.dataset.i18n;el.innerHTML=(lang==='en'&&en[k])?en[k]:orig.get(el);
    });
  });
});
