import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check, FileText, GraduationCap, ShoppingCart, X } from "lucide-react";
import kitImageAsset from "../assets/kit-redacao-mockup-v2.png.asset.json";
import activityImage from "../assets/amostra-atividade.jpg";
import mapImage from "../assets/amostra-mapa.jpg";
import benefitActivities from "../assets/beneficio-atividades-real.jpg";
import benefitSlides from "../assets/beneficio-slides-real.jpg";
import benefitSpelling from "../assets/beneficio-ortografia-real.jpg";
import benefitLanguage from "../assets/beneficio-linguistica-real.jpg";
import benefitWriting from "../assets/beneficio-producao-real.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Completo de Redação e Produção Textual" },
      { name: "description", content: "Mais de 2.000 atividades, propostas de redação, slides e recursos pedagógicos do 6º ano ao Ensino Médio." },
      { property: "og:title", content: "Kit Completo de Redação e Produção Textual" },
      { property: "og:description", content: "Materiais prontos para ensinar redação, escrita, ortografia e comunicação durante o ano inteiro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  [benefitActivities, "+2.000 ATIVIDADES", "Atividades de Redação e Escrita", "Exercícios práticos para desenvolver escrita, interpretação, construção de textos, argumentação e organização das ideias."],
  [benefitSlides, "SLIDES PRONTOS", "Slides de Aula", "Apresentações organizadas para facilitar suas explicações e tornar suas aulas mais dinâmicas e práticas."],
  [benefitSpelling, "ORTOGRAFIA", "Aprendendo Português na Prática", "Materiais e atividades para trabalhar ortografia, acentuação, pontuação, construção de frases e uso correto da língua portuguesa."],
  [benefitLanguage, "LINGUÍSTICA", "Linguagem e Comunicação", "Conteúdos para trabalhar linguagem, variação linguística, comunicação, gêneros textuais e diferentes formas de utilização da língua."],
  [benefitWriting, "PRODUÇÃO TEXTUAL", "Redação e Produção de Textos", "Propostas e atividades para desenvolver escrita, criatividade, argumentação, estrutura textual, coesão e coerência."],
] as const;

const topics = [
  ["Ortografia e escrita", "Acentuação", "Pontuação", "Uso correto das palavras", "Ortografia", "Formação de palavras", "Construção de frases", "Erros comuns de escrita", "Regras ortográficas"],
  ["Produção textual", "Estrutura do texto", "Introdução, desenvolvimento e conclusão", "Coesão e coerência", "Organização das ideias", "Argumentação", "Construção de parágrafos", "Tipos de texto", "Produção de textos na prática"],
  ["Linguística e comunicação", "Variação linguística", "Linguagem formal e informal", "Funções da linguagem", "Comunicação", "Gêneros textuais", "Linguagem verbal e não verbal", "Figuras de linguagem", "Uso da língua na prática"],
  ["Redação e preparação para provas", "Dissertação argumentativa", "Construção de argumentos", "Repertório", "Estratégias de escrita", "Interpretação de propostas", "Desenvolvimento de temas", "Redação para vestibulares", "Redação estilo ENEM"],
];

const faqs = [
  ["Para quais turmas os materiais servem?", "Os materiais foram organizados para professores que trabalham com alunos do 6º ao 9º ano do Ensino Fundamental e do 1º ao 3º ano do Ensino Médio."],
  ["Os materiais trabalham quais conteúdos?", "O kit reúne materiais de redação, produção textual, ortografia, linguística, interpretação, escrita, comunicação e Língua Portuguesa na prática."],
  ["As atividades possuem gabarito?", "Os materiais que possuem questões com respostas contam com seus respectivos gabaritos ou orientações para aplicação."],
  ["Posso editar os materiais?", "Sim. Os materiais editáveis podem ser adaptados de acordo com a necessidade da sua turma."],
  ["Como receberei o acesso?", "Após a confirmação do pagamento, você receberá as instruções de acesso ao material."],
  ["Posso utilizar os materiais no celular?", "Sim. Os materiais podem ser acessados por dispositivos compatíveis, como computador, tablet e celular."],
  ["Existe alguma mensalidade?", "Não. O pagamento é único, sem cobranças mensais."],
  ["Por quanto tempo terei acesso?", "O acesso é vitalício, conforme as condições apresentadas no momento da compra."],
  ["Tenho garantia?", "Sim. Você conta com 7 dias de garantia, conforme as condições da oferta."],
];

function Cta({ children }: { children: React.ReactNode }) {
  return <a href="#planos" className="cta">{children}<ArrowRight size={16} /></a>;
}

function Index() {
  useEffect(() => {
    const els = document.querySelectorAll("main section h2, main .stamp, main .subcopy, .stat, .pain, .chalkboard, .benefit, figure, .sample-label, .note, .price, .testimonial, .faq");
    els.forEach((el, i) => { el.classList.add("reveal"); (el as HTMLElement).style.transitionDelay = `${(i % 4) * 80}ms`; });
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <main className="overflow-hidden bg-paper font-sans text-ink">


      <section className="chalk-grid bg-chalk px-5 pb-16 pt-12 text-ink md:pt-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="stamp">EXCLUSIVO PARA PROFESSORES DE REDAÇÃO, PRODUÇÃO TEXTUAL E LÍNGUA PORTUGUESA</span>
          <h1 className="mt-5 max-w-[19ch] font-serif text-4xl leading-tight md:text-6xl">Sua próxima aula de redação já está <em className="marker">pronta.</em></h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-relaxed text-ink/80 md:text-base">+2.000 atividades, exercícios, propostas de redação, slides, materiais práticos e recursos pedagógicos para ensinar redação, escrita, ortografia e comunicação de forma simples, prática e organizada.</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">Do Ensino Fundamental ao Ensino Médio. Materiais pensados para professores que querem economizar horas de planejamento e ter conteúdo pronto para aplicar em sala de aula.</p>
          <img src={kitImageAsset.url} alt="Kit completo de Redação e Produção Textual com cadernos, slides e atividades" width={1143} height={758} className="hero-mockup mt-7 w-full max-w-5xl object-contain" />
          <Cta>QUERO MEU KIT COMPLETO</Cta>
          <small className="mt-4 text-ink/60">Acesso imediato no seu e-mail • Pagamento único</small>
          <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            {[['+2.000','ATIVIDADES E MATERIAIS'],['6º ao 9º ano','FUNDAMENTAL II'],['1º ao 3º ano','ENSINO MÉDIO'],['PRÁTICO','MATERIAIS PRONTOS PARA APLICAÇÃO']].map(([big,small]) => <div className="stat" key={big}><strong>{big}</strong><span>{small}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section bg-paper text-center">
        <h2>Você não precisa perder seu tempo livre<br/><span className="text-rust">criando tudo do zero</span></h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-left md:grid-cols-2">
          {["Passar horas procurando atividades de escrita e redação na internet", "Criar exercícios, propostas de redação e atividades do zero", "Gastar o final de semana preparando slides e materiais para suas aulas", "Improvisar quando surge uma aula ou quando você precisa de uma atividade rapidamente"].map(item => <div className="pain" key={item}><span><X size={15}/></span>{item}</div>)}
        </div>
        <div className="chalkboard mx-auto mt-10 max-w-2xl">Agora você pode encontrar <b className="text-rust">milhares de materiais organizados em um único lugar</b>, para facilitar sua rotina e recuperar seu tempo de planejamento.</div>
        <div className="mt-7 flex justify-center"><Cta>QUERO ECONOMIZAR HORAS DE PLANEJAMENTO</Cta></div>
      </section>

      <section className="section bg-paper-soft text-center">
        <span className="stamp">CONHEÇA O KIT COMPLETO</span>
        <h2 className="mt-5">O que você vai receber:</h2>
        <p className="subcopy">Uma biblioteca completa de materiais para trabalhar redação, produção textual, ortografia, linguística, interpretação e comunicação, ajudando seus alunos a desenvolverem a escrita e utilizarem a língua portuguesa na prática.</p>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {benefits.map(([image, label, title, copy]) => <article className="benefit benefit-with-image" key={title}><img src={image} alt={`Material de ${title}`} loading="lazy" width={900} height={650}/><div className="benefit-copy"><span>{label}</span><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
        <div className="mt-8 flex justify-center"><Cta>QUERO ACESSAR TODOS OS MATERIAIS</Cta></div>
      </section>

      <section className="section bg-paper text-center">
        <span className="stamp">AMOSTRAS REAIS</span>
        <h2 className="mt-5">Conheça o material <em className="marker">por dentro</em></h2>
        <div className="mx-auto mt-10 grid max-w-5xl items-center gap-8 md:grid-cols-2">
          <figure><img src={activityImage} alt="Amostra de atividade de Língua Portuguesa" loading="lazy" width={768} height={1024}/><figcaption>ATIVIDADES E PROVAS</figcaption></figure>
          <figure className="md:translate-y-8"><img src={mapImage} alt="Amostra de mapa mental sobre figuras de linguagem" loading="lazy" width={768} height={1024}/><figcaption>MAPAS MENTAIS</figcaption></figure>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl gap-3 md:grid-cols-3"><div className="sample-label">ATIVIDADES E EXERCÍCIOS</div><div className="sample-label">SLIDES PRONTOS</div><div className="sample-label">PROPOSTAS DE REDAÇÃO</div></div>
      </section>

      <section className="section bg-paper-soft text-center">
        <span className="stamp">TRILHA COMPLETA</span>
        <h2 className="mt-5">Do 6º ano ao Ensino Médio</h2>
        <p className="subcopy">Conteúdos organizados para trabalhar as principais habilidades de Português, redação, escrita e comunicação durante o ano letivo.</p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-7 text-left md:grid-cols-2">
          {topics.map(([title,...items], index) => <article className={`note ${index % 2 ? 'note-alt' : ''}`} key={title}><i/><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
        </div>
        <p className="mt-10 font-serif italic">E tudo isso, <span className="marker">organizado por série.</span></p>
        <p className="mt-5 text-xs font-semibold">6º ao 9º ano — Fundamental II &nbsp; • &nbsp; 1º ao 3º ano — Ensino Médio</p>
      </section>

      <section id="planos" className="chalk-grid section bg-chalk text-ink">
        <span className="stamp">INVESTIMENTO</span>
        <h2 className="mt-5">Suas aulas prontas <span className="text-rust">o ano inteiro</span></h2>
        <p className="mt-4 text-sm text-ink/70">Acesso imediato após a compra. Pagamento único, sem mensalidades.</p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 text-left md:grid-cols-2 md:items-start">
          <Price title="PLANO BÁSICO" old="R$ 27,90" price="12,00" href="https://pay.cakto.com.br/iqg5wxe" items={["100 atividades de escrita", "100 exercícios", "Propostas de redação", "Materiais de apoio", "Suporte por e-mail", "Acesso vitalício"]} />
          <Price featured title="KIT COMPLETO" old="R$ 67,90" price="25,90" href="https://pay.cakto.com.br/33cyvhw_1134156" items={["+2.000 atividades e exercícios", "Atividades de ortografia", "Materiais de linguística", "Produção textual", "Redação e argumentação", "Aprendendo Português na prática", "Slides prontos", "Propostas de redação", "Mapas mentais", "Atividades de interpretação", "Materiais do 6º ano ao Ensino Médio", "Conteúdos para revisão", "Materiais para aulas de emergência", "Atualizações", "Suporte prioritário", "Garantia de 7 dias", "Acesso vitalício"]} />
        </div>
      </section>

      <section className="section bg-paper-soft text-center">
        <span className="stamp">COMO FUNCIONA</span>
        <h2 className="mt-5">Entrega rápida, direto para você</h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
          <article className="benefit"><div className="benefit-icon"><ShoppingCart size={22}/></div><h3>Compra</h3><p>Faça sua compra de forma rápida e segura.</p></article>
          <article className="benefit"><div className="benefit-icon"><FileText size={22}/></div><h3>Acesso</h3><p>Após a confirmação do pagamento, você recebe as instruções para acessar seus materiais.</p></article>
          <article className="benefit"><div className="benefit-icon"><GraduationCap size={22}/></div><h3>Use em suas aulas</h3><p>Escolha o material que precisa, adapte quando quiser e utilize em suas aulas.</p></article>
        </div>
      </section>

      <section className="chalk-grid section bg-chalk text-center text-ink">
        <span className="stamp">QUEM JÁ USA APROVA</span>
        <h2 className="mt-5">O que professores estão <span className="text-rust">dizendo</span></h2>
        <blockquote className="testimonial"><div className="avatar">MS</div><div><b>Márcia Souza</b><small>Professora de Português</small></div><p>“Nunca vi um material organizado por bimestre desse jeito. Sou professora há 12 anos e isso realmente economizou muito do meu final de semana.”</p></blockquote>
      </section>

      <section className="chalk-grid section bg-chalk text-ink">
        <div className="mx-auto max-w-2xl text-center"><span className="stamp">PERGUNTAS FREQUENTES</span><h2 className="mt-5">Ainda tem dúvidas?</h2></div>
        <div className="mx-auto mt-10 max-w-2xl space-y-3">{faqs.map(([q,a],i) => <details className="faq" key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="bg-chalk px-5 py-20 text-center text-ink"><h2 className="mx-auto max-w-3xl">Professor, tenha tudo o que precisa para suas aulas de <span className="text-rust">escrita</span> em um único lugar</h2><p className="subcopy !text-ink/70">Economize horas de planejamento com +2.000 atividades, exercícios, propostas de redação, slides, materiais de ortografia, linguística, interpretação e recursos para ensinar Português na prática.</p><div className="mt-8 flex justify-center"><Cta>QUERO MEU KIT COMPLETO AGORA</Cta></div><p className="mt-4 text-xs text-ink/60">◷ Pagamento único • Acesso vitalício • Garantia de 7 dias</p></section>
      <footer className="bg-footer px-5 py-8 text-center text-paper"><strong className="font-serif">Kit Completo de Redação e Produção Textual</strong><p className="mt-1 text-xs">© 2026 • Todos os direitos reservados.</p><p className="mt-2 text-[10px] text-paper/60">Este produto oferece recursos pedagógicos e não garante resultados específicos de aprendizagem.</p></footer>
    </main>
  );
}

function Price({title,old,price,items,featured=false,href}:{title:string;old:string;price:string;items:string[];featured?:boolean;href:string}) {
  return <article className={`price ${featured ? 'price-featured' : ''}`}>{featured && <span className="popular">MAIS ESCOLHIDO</span>}<span className="price-title">{title}</span><s>de {old}</s><small>por apenas</small><div className="price-number"><sup>R$</sup>{price}</div><small>Pagamento único</small><ul>{items.map(item => <li key={item}><Check size={14}/>{item}</li>)}</ul><a href={href} className="cta w-full justify-center" target="_blank" rel="noopener">QUERO O {featured ? 'KIT COMPLETO' : 'PLANO BÁSICO'}<ArrowRight size={16}/></a><small className="mt-4 text-center text-ink/55">Compra segura • Acesso por e-mail</small></article>
}