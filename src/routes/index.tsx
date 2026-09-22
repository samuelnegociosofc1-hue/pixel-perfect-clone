import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, FileText, GraduationCap, MonitorUp, Sparkles, X } from "lucide-react";
import kitImage from "../assets/kit-completo.jpg";
import activityImage from "../assets/amostra-atividade.jpg";
import mapImage from "../assets/amostra-mapa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Completo do Professor de Português" },
      { name: "description", content: "Mais de 1.500 atividades, provas, slides e materiais de Português do 6º ano ao Ensino Médio." },
      { property: "og:title", content: "Kit Completo do Professor de Português" },
      { property: "og:description", content: "Materiais prontos e editáveis para suas aulas de Português durante o ano inteiro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  [FileText, "+1.500 ATIVIDADES", "Atividades e Provas Prontas", "Exercícios e avaliações editáveis com gabarito, alinhados à BNCC."],
  [MonitorUp, "SLIDES PRONTOS", "Slides de Aula", "Apresentações organizadas por conteúdo, prontas para usar e alinhadas à BNCC."],
  [Sparkles, "MAPAS MENTAIS", "Mapas Mentais", "Esquemas visuais para revisar e fixar os conteúdos conforme a BNCC."],
  [Clock3, "KIT EMERGÊNCIA", "Kit Aula de Emergência", "Materiais coringa para aulas de última hora, alinhados à BNCC."],
  [GraduationCap, "SIMULADOS", "Simulados estilo ENEM", "Questões no padrão ENEM para preparar suas turmas, alinhadas à BNCC."],
] as const;

const topics = [
  ["Gramática", "Classes de palavras", "Predicado e sintaxe", "Concordância verbal e nominal", "Regência e crase", "Orações coordenadas e subordinadas", "Verbos e tempos verbais"],
  ["Leitura e interpretação", "Gêneros textuais", "Coesão e coerência", "Sentido figurado", "Figuras de linguagem", "Inferência textual"],
  ["Produção de texto", "Tipos de texto", "Dissertação argumentativa", "Redação nota 1000", "Argumentação e persuasão", "Elementos de coesão textual"],
  ["Preparação para o ENEM", "Simulados estilo ENEM", "Interpretação avançada", "Escolas literárias", "Variação linguística", "Funções da linguagem"],
];

const faqs = [
  ["Para quais turmas os materiais servem?", "Os materiais foram organizados para professores que trabalham do 6º ao 9º ano e no Ensino Médio."],
  ["Os materiais são alinhados à BNCC?", "Sim. As atividades, provas e sequências foram preparadas considerando as habilidades previstas pela BNCC."],
  ["As atividades e provas possuem gabarito?", "Sim. Os materiais avaliativos acompanham gabaritos para facilitar a correção."],
  ["Posso editar os materiais?", "Sim. Você recebe arquivos editáveis para adaptar textos, questões e cabeçalhos às suas turmas."],
  ["Como receberei o acesso?", "O acesso é enviado ao seu e-mail após a confirmação da compra."],
  ["Posso utilizar os materiais no celular?", "Sim. Os arquivos podem ser acessados no celular, tablet ou computador."],
  ["Existe alguma mensalidade?", "Não. O pagamento é único, sem cobranças mensais."],
  ["Por quanto tempo terei acesso?", "O acesso ao kit é vitalício."],
  ["Tenho garantia?", "Sim. Você tem 7 dias para conhecer o material e solicitar o reembolso."],
];

function Cta({ children }: { children: React.ReactNode }) {
  return <a href="#planos" className="cta">{children}<ArrowRight size={16} /></a>;
}

function Index() {
  return (
    <main className="overflow-hidden bg-paper font-sans text-ink">
      <div className="promo">⚡ A promoção encerra hoje <span>•</span> <Clock3 size={14} /> Condição especial por tempo limitado</div>

      <section className="chalk-grid bg-chalk px-5 pb-16 pt-12 text-paper md:pt-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="stamp">EXCLUSIVO PARA PROFESSORES DE PORTUGUÊS, REDAÇÃO E LITERATURA</span>
          <h1 className="mt-5 max-w-[17ch] font-serif text-4xl leading-tight md:text-6xl">Sua próxima aula já está <em className="marker">pronta.</em></h1>
          <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-paper/85 md:text-base">+1.500 atividades, provas, slides e simulados ENEM prontos, editáveis e alinhados à BNCC. Do 6º ano ao Ensino Médio.</p>
          <img src={kitImage} alt="Kit completo com cadernos, atividades e aula digital de Português" width={1200} height={800} className="mt-7 w-full max-w-3xl object-contain" />
          <Cta>QUERO MEU KIT COMPLETO</Cta>
          <small className="mt-4 text-paper/60">Acesso imediato no seu e-mail • Pagamento único</small>
          <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            {[['+1.500','ATIVIDADES E PROVAS'],['6º ao 9º','FUNDAMENTAL II'],['1º ao 3º','ENSINO MÉDIO'],['BNCC','ALINHADO AO CURRÍCULO']].map(([big,small]) => <div className="stat" key={big}><strong>{big}</strong><span>{small}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section bg-paper text-center">
        <h2>Você não precisa perder seu tempo livre<br/><span className="text-rust">criando tudo do zero</span></h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-left md:grid-cols-2">
          {["Passar horas procurando atividades na internet", "Criar provas, questões e gabaritos do zero", "Gastar o final de semana montando slides e planos de aula", "Improvisar quando surge uma aula ou um imprevisto"].map(item => <div className="pain" key={item}><span><X size={15}/></span>{item}</div>)}
        </div>
        <div className="chalkboard mx-auto mt-10 max-w-2xl">Agora você pode encontrar <b className="text-highlight">tudo pronto e organizado em um único lugar</b>, para você recuperar seu tempo de planejamento.</div>
        <div className="mt-7 flex justify-center"><Cta>QUERO ECONOMIZAR HORAS DE PLANEJAMENTO</Cta></div>
      </section>

      <section className="section bg-paper-soft text-center">
        <span className="stamp">CONHEÇA O KIT COMPLETO</span>
        <h2 className="mt-5">O que você vai receber:</h2>
        <p className="subcopy">Uma biblioteca completa para ensinar, revisar, avaliar, recuperar alunos e preparar as turmas para o ENEM, do 6º ano ao Ensino Médio.</p>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {benefits.map(([Icon, label, title, copy]) => <article className="benefit" key={title}><div className="benefit-icon"><Icon size={22}/></div><span>{label}</span><h3>{title}</h3><p>{copy}</p></article>)}
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
      </section>

      <section className="section bg-paper-soft text-center">
        <span className="stamp">TRILHA COMPLETA</span>
        <h2 className="mt-5">Do 6º ano ao Ensino Médio</h2>
        <p className="subcopy">Os assuntos que mais caem em prova, prontos para suas turmas.</p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-7 text-left md:grid-cols-2">
          {topics.map(([title,...items], index) => <article className={`note ${index % 2 ? 'note-alt' : ''}`} key={title}><i/><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
        </div>
        <p className="mt-10 font-serif italic">E tudo isso, <span className="marker">organizado por série.</span></p>
      </section>

      <section id="planos" className="chalk-grid section bg-chalk text-paper">
        <span className="stamp">INVESTIMENTO</span>
        <h2 className="mt-5">Suas aulas prontas <span className="text-rust">o ano inteiro</span></h2>
        <p className="mt-4 text-sm text-paper/70">Acesso imediato após a compra. Pagamento único, sem mensalidades.</p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 text-left md:grid-cols-2 md:items-start">
          <Price title="PLANO BÁSICO" old="R$ 27,90" price="12,00" items={["100 atividades e provas", "100 dinâmicas", "Planos de aula", "Suporte por e-mail", "Acesso vitalício"]} />
          <Price featured title="KIT COMPLETO" old="R$ 67,90" price="25,90" items={["Mais de 1.500 atividades e provas", "Mais de 800 dinâmicas", "Mapas mentais", "Kit Aula de Emergência", "Simulados estilo ENEM", "Planos de aula", "Flashcards prontos", "Slides prontos de Português", "Materiais do 6º ano ao Ensino Médio", "Atualizações semanais", "Suporte prioritário VIP", "Garantia de 7 dias", "Acesso vitalício"]} />
        </div>
      </section>

      <section className="chalk-grid section bg-chalk text-center text-paper">
        <span className="stamp">QUEM JÁ USA APROVA</span>
        <h2 className="mt-5">O que professores estão <span className="text-rust">dizendo</span></h2>
        <blockquote className="testimonial"><div className="avatar">MS</div><div><b>Márcia Souza</b><small>Professora de Português</small></div><p>“Nunca vi um material organizado por bimestre desse jeito. Sou professora há 12 anos e isso realmente economizou muito do meu final de semana.”</p></blockquote>
      </section>

      <section className="chalk-grid section bg-chalk text-paper">
        <div className="mx-auto max-w-2xl text-center"><span className="stamp">PERGUNTAS FREQUENTES</span><h2 className="mt-5">Ainda tem dúvidas?</h2></div>
        <div className="mx-auto mt-10 max-w-2xl space-y-3">{faqs.map(([q,a],i) => <details className="faq" key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="bg-chalk px-5 py-20 text-center text-paper"><h2 className="mx-auto max-w-3xl">Professor, tenha tudo o que precisa para suas aulas de <span className="text-rust">Português</span> em um único lugar</h2><p className="subcopy !text-paper/70">Economize horas de planejamento com atividades, avaliações, aulas, revisões e materiais prontos para suas turmas o ano inteiro.</p><div className="mt-8 flex justify-center"><Cta>QUERO MEU KIT COMPLETO AGORA</Cta></div><p className="mt-4 text-xs text-paper/60">◷ Pagamento único • Acesso vitalício • Garantia de 7 dias</p></section>
      <footer className="bg-footer px-5 py-8 text-center text-paper"><strong className="font-serif">Kit Completo do Professor de Português</strong><p className="mt-1 text-xs">© 2026 • Todos os direitos reservados.</p><p className="mt-2 text-[10px] text-paper/60">Este produto oferece recursos pedagógicos e não garante resultados específicos de aprendizagem.</p></footer>
    </main>
  );
}

function Price({title,old,price,items,featured=false}:{title:string;old:string;price:string;items:string[];featured?:boolean}) {
  return <article className={`price ${featured ? 'price-featured' : ''}`}>{featured && <span className="popular">MAIS ESCOLHIDO</span>}<span className="price-title">{title}</span><s>de {old}</s><small>por apenas</small><div className="price-number"><sup>R$</sup>{price}</div><small>Pagamento único</small><ul>{items.map(item => <li key={item}><Check size={14}/>{item}</li>)}</ul><a href="#planos" className="cta w-full justify-center">QUERO O {featured ? 'KIT COMPLETO' : 'PLANO BÁSICO'}<ArrowRight size={16}/></a><small className="mt-4 text-center text-paper/55">Compra segura • Acesso por e-mail</small></article>
}