import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Bike,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Fuel,
  Gauge,
  Menu,
  MessageCircle,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "5521965069442";
const WHATSAPP_MESSAGE = "Olá! Quero saber mais sobre o Moto Fi.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const avatarA =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%230b6562'/%3E%3Cstop offset='1' stop-color='%2315d8b1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' rx='60' fill='url(%23g)'/%3E%3Ccircle cx='60' cy='48' r='23' fill='%23a95f42'/%3E%3Cpath d='M35 44c2-25 47-34 53 1-9-11-20-12-29-5-8 7-16 7-24 4Z' fill='%231c2527'/%3E%3Cpath d='M27 116c3-28 18-42 33-42s31 14 34 42' fill='%23f0a142'/%3E%3C/svg%3E";
const avatarB =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%231d3040'/%3E%3Cstop offset='1' stop-color='%2305c9e8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' rx='60' fill='url(%23g)'/%3E%3Ccircle cx='60' cy='49' r='22' fill='%236f412e'/%3E%3Cpath d='M35 48c-3-30 45-39 53-2l-8 3-7-17-29 17Z' fill='%2329292c'/%3E%3Cpath d='M27 120c3-29 17-43 33-43s31 14 34 43' fill='%23e3e8e7'/%3E%3C/svg%3E";
const avatarC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23ec9a38'/%3E%3Cstop offset='1' stop-color='%23fae0a3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' rx='60' fill='url(%23g)'/%3E%3Ccircle cx='60' cy='48' r='22' fill='%23b97050'/%3E%3Cpath d='M35 48c0-29 52-33 52 3-9-13-18-17-31-12-8 3-13 8-21 9Z' fill='%23462c25'/%3E%3Cpath d='M26 119c3-26 18-42 34-42s31 16 34 42' fill='%23db3f47'/%3E%3C/svg%3E";

const benefits = [
  { icon: CircleDollarSign, number: "01", title: "Veja o que sobra", body: "Ganhos, taxas e despesas no mesmo lugar. Saiba o valor real de cada dia." },
  { icon: Fuel, number: "02", title: "Abasteça com estratégia", body: "Registre cada tanque e entenda quanto sua rota está custando de verdade." },
  { icon: Wrench, number: "03", title: "Cuide antes de parar", body: "Manutenções organizadas para sua moto continuar sendo sua ferramenta." },
  { icon: Target, number: "04", title: "Dê destino ao dinheiro", body: "Crie metas que cabem na rotina e acompanhe o progresso sem complicação." },
];

const testimonials = [
  { quote: "Antes eu via o dinheiro entrar e sumir. Agora sei exatamente quanto minha moto me deixou no fim do dia.", name: "Rafael Nunes", role: "Mototaxista", city: "Niterói, RJ", avatar: avatarA },
  { quote: "O Moto Fi me ajudou a separar combustível de lucro. Parece simples, mas mudou a forma como eu escolho minhas corridas.", name: "Camila Alves", role: "Entregadora", city: "São Paulo, SP", avatar: avatarB },
  { quote: "Minha meta de trocar os pneus deixou de ser promessa. Eu acompanho toda semana e não sou pego de surpresa.", name: "João Victor", role: "Entregador autônomo", city: "Belo Horizonte, MG", avatar: avatarC },
];

export function MotoFiLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const navItems = [
    ["Como funciona", "#como-funciona"],
    ["Para sua rotina", "#beneficios"],
    ["Histórias reais", "#historias"],
    ["Dúvidas", "#duvidas"],
  ];

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#101718] text-[#ecf4ef] selection:bg-[#24dfb2] selection:text-[#0e1718]">
      <style>{`
        @keyframes moto-float { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-10px) rotate(1deg); } }
        @keyframes moto-pulse { 0%,100% { opacity:.35; transform:scale(.92); } 50% { opacity:.8; transform:scale(1); } }
        .moto-float { animation: moto-float 7s ease-in-out infinite; }
        .moto-pulse { animation: moto-pulse 4s ease-in-out infinite; }
        .moto-grid { background-image: linear-gradient(rgba(60,120,115,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(60,120,115,.09) 1px, transparent 1px); background-size: 44px 44px; }
        .moto-noise:after { content:""; position:fixed; inset:0; pointer-events:none; opacity:.025; z-index:20; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E"); }
      `}</style>
      <div className="moto-noise">
        <nav className="relative z-30 border-b border-[#263536] bg-[#101718]/85 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
            <a href="#inicio" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
              <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-[#b9f23e] text-[#101718]"><Gauge size={21} strokeWidth={2.8} /></span>
              <span className="text-xl font-black tracking-[-0.06em]">Moto <span className="text-[#b9f23e]">Fi</span></span>
            </a>
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-[#9cacaa] transition-colors hover:text-[#b9f23e]">{label}</a>)}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full bg-[#b9f23e] px-5 py-3 text-sm font-extrabold text-[#101718] transition-transform hover:-translate-y-0.5 sm:flex">
              <MessageCircle size={17} /> Falar com a gente
            </a>
            <button type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-[#d6e5df] sm:hidden">{menuOpen ? <X /> : <Menu />}</button>
          </div>
          {menuOpen && <div className="border-t border-[#263536] px-5 pb-5 pt-3 sm:hidden">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-[#263536] py-4 text-sm text-[#d6e5df]">{label}</a>)}<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#b9f23e] py-3 font-bold text-[#101718]"><MessageCircle size={17} /> Falar com a gente</a></div>}
        </nav>

        <section id="inicio" className="relative isolate">
          <div className="absolute inset-0 -z-10 moto-grid opacity-60" />
          <div className="absolute -right-40 top-24 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#08abc3]/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28 lg:pt-24">
            <div className="max-w-2xl">
              <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-[#71ddd0]"><span className="h-px w-8 bg-[#71ddd0]" /> Controle a sua rota</div>
              <h1 className="text-[clamp(3.2rem,7vw,6.7rem)] font-black leading-[.91] tracking-[-.075em]">Seu corre.<br /><span className="text-[#b9f23e]">Sob controle.</span></h1>
              <p className="mt-8 max-w-lg text-lg leading-8 text-[#a9bab5]">O Moto Fi transforma corridas, combustível e manutenção em uma visão simples do seu dinheiro. Para você rodar mais leve e decidir melhor.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b9f23e] px-7 py-4 font-extrabold text-[#101718] shadow-[0_10px_40px_rgba(185,242,62,.14)] transition-transform hover:-translate-y-1">Saber Mais no WhatsApp <ArrowRight size={18} /></a>
                <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 px-3 py-4 text-sm font-bold text-[#c8d4d0] transition-colors hover:text-[#b9f23e]">Ver como funciona <ArrowDownRight size={17} /></a>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#2a3b3a] pt-6 text-xs font-semibold uppercase tracking-[.12em] text-[#708682]"><span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#b9f23e]" /> Feito para quem roda</span><span className="flex items-center gap-2"><Sparkles size={16} className="text-[#efad4b]" /> Simples de usar</span></div>
            </div>
            <div className="relative mx-auto min-h-[470px] w-full max-w-[530px] lg:min-h-[620px]">
              <div className="absolute left-0 top-20 z-10 h-[370px] w-[190px] rotate-[-10deg] overflow-hidden rounded-[28px] border-[6px] border-[#293d3c] bg-[#172425] shadow-[0_30px_70px_rgba(0,0,0,.35)] sm:h-[440px] sm:w-[225px] lg:top-24"><img src="/__mockup/images/motofi-rider.png" alt="Tela do Moto Fi para acompanhar a rotina de quem roda" className="h-full w-full object-cover object-top" /></div>
              <div className="moto-float absolute right-0 top-2 z-20 h-[420px] w-[215px] rotate-[7deg] overflow-hidden rounded-[31px] border-[6px] border-[#314342] bg-[#172425] shadow-[0_35px_80px_rgba(0,0,0,.5)] sm:h-[520px] sm:w-[270px] lg:right-8 lg:h-[590px] lg:w-[305px]"><img src="/__mockup/images/motofi-control.png" alt="Tela de controle financeiro do Moto Fi" className="h-full w-full object-cover object-top" /></div>
              <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-[#41615c] bg-[#1b2a29]/90 px-4 py-3 backdrop-blur-md"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#b9f23e] text-[#172425]"><TrendingUp size={19} /></span><span><strong className="block text-sm text-[#eff8ef]">R$ 187,40</strong><small className="text-[10px] uppercase tracking-wider text-[#8ba19a]">líquido hoje</small></span></div>
              <div className="moto-pulse absolute -bottom-6 left-16 h-36 w-36 rounded-full bg-[#b9f23e]/10 blur-2xl" />
            </div>
          </div>
        </section>

        <section className="border-y border-[#263536] bg-[#152121]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:grid-cols-3 sm:divide-x sm:divide-[#30413f] lg:px-8"><div><p className="font-mono text-2xl font-bold text-[#b9f23e]">+ clareza</p><p className="mt-1 text-sm text-[#8fa39d]">para cada decisão</p></div><div className="sm:pl-8"><p className="font-mono text-2xl font-bold text-[#5fe0d0]">1 só lugar</p><p className="mt-1 text-sm text-[#8fa39d]">para a sua vida na rua</p></div><div className="sm:pl-8"><p className="font-mono text-2xl font-bold text-[#efad4b]">zero chute</p><p className="mt-1 text-sm text-[#8fa39d]">sobre o que sobrou</p></div></div>
        </section>

        <section id="como-funciona" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-[#71ddd0]">A lógica é sua</p><h2 className="max-w-md text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl">Rodar já é difícil. <span className="text-[#b9f23e]">Organizar não precisa ser.</span></h2><p className="mt-6 max-w-md leading-7 text-[#93a7a0]">Em poucos toques, você registra o que aconteceu e enxerga o próximo passo. Sem planilha, sem conta de cabeça.</p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#b9f23e] hover:text-[#d2ff83]">Quero conhecer o Moto Fi <ChevronRight size={17} /></a></div>
            <div className="grid gap-4 sm:grid-cols-2">{benefits.map(({ icon: Icon, number, title, body }) => <article key={number} className="group rounded-[22px] border border-[#2c403e] bg-[#152121] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#76cfc1]/60"><div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#223938] text-[#b9f23e]"><Icon size={21} /></span><span className="font-mono text-xs text-[#66827b]">{number}</span></div><h3 className="mt-10 text-lg font-bold text-[#eaf2ec]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#8fa39d]">{body}</p></article>)}</div>
          </div>
        </section>

        <section id="beneficios" className="relative overflow-hidden bg-[#b9f23e] text-[#142020]"><div className="absolute right-0 top-0 h-full w-1/3 bg-[#e7f9b3]/30 [clip-path:polygon(45%_0,100%_0,100%_100%,0_100%)]" /><div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8 lg:py-28"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#3e6c34]">O painel que faltava</p><h2 className="mt-5 max-w-xl text-4xl font-black leading-[.96] tracking-[-.06em] sm:text-6xl">Não é só sobre ganhar. É sobre <span className="text-[#237477]">ficar com o que é seu.</span></h2><p className="mt-7 max-w-md text-lg leading-7 text-[#3f5d4c]">O Moto Fi coloca o lucro no centro — depois de combustível, manutenção e todos os pequenos custos que a rua esconde.</p><div className="mt-10 grid max-w-md grid-cols-2 gap-3">{["Resumo do dia", "Custos por km", "Alertas de revisão", "Metas visíveis"].map((item) => <div key={item} className="flex items-center gap-2 rounded-xl bg-[#d5fa74] px-3 py-3 text-sm font-bold"><Check size={16} className="text-[#237477]" />{item}</div>)}</div></div><div className="relative mx-auto w-full max-w-md rounded-[30px] border border-[#dfff8e] bg-[#aeea3d] p-4 shadow-[20px_25px_0_#83ba2d]"><div className="rounded-[23px] bg-[#152121] p-6 text-[#eaf2ec]"><div className="flex items-center justify-between"><span className="text-sm text-[#8fa39d]">Resumo de hoje</span><span className="rounded-full bg-[#213b35] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#b9f23e]">Em andamento</span></div><p className="mt-8 font-mono text-4xl font-bold">R$ 248,60</p><p className="mt-2 text-sm text-[#8fa39d]">ganho líquido estimado</p><div className="mt-8 h-2 rounded-full bg-[#2a3d3b]"><div className="h-2 w-[72%] rounded-full bg-[#5fe0d0]" /></div><div className="mt-3 flex justify-between text-xs text-[#8fa39d]"><span>Meta diária</span><span className="font-mono text-[#b9f23e]">72%</span></div><div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-xl bg-[#1c2c2b] p-4"><Fuel size={17} className="text-[#efad4b]" /><p className="mt-3 font-mono text-lg">R$ 61,20</p><small className="text-[#8fa39d]">combustível</small></div><div className="rounded-xl bg-[#1c2c2b] p-4"><Route size={17} className="text-[#5fe0d0]" /><p className="mt-3 font-mono text-lg">86,4 km</p><small className="text-[#8fa39d]">na rua hoje</small></div></div></div></div></div></section>

        <section id="historias" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="flex flex-col justify-between gap-6 border-b border-[#2a3b3a] pb-10 sm:flex-row sm:items-end"><div><p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-[#71ddd0]">Quem já está rodando</p><h2 className="max-w-xl text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl">Menos aperto no fim do mês. <span className="text-[#b9f23e]">Mais caminho pela frente.</span></h2></div><p className="max-w-xs text-sm leading-6 text-[#8fa39d]">Gente que trabalha em movimento e escolheu parar de adivinhar.</p></div><div className="mt-10 grid gap-5 lg:grid-cols-3">{testimonials.map((item) => <article key={item.name} className="flex min-h-[320px] flex-col justify-between rounded-[22px] border border-[#2c403e] bg-[#152121] p-6 transition-transform duration-300 hover:-translate-y-1"><div><div className="flex gap-1 text-[#efad4b]">{Array.from({ length: 5 }).map((_, i) => <span key={i} aria-label="5 estrelas">★</span>)}</div><p className="mt-7 text-lg leading-7 text-[#dbe8e1]">“{item.quote}”</p></div><div className="mt-9 flex items-center justify-between gap-3 border-t border-[#2b3d3c] pt-5"><div className="flex items-center gap-3"><img src={item.avatar} alt={`Foto de ${item.name}`} className="h-11 w-11 rounded-full" /><div><p className="text-sm font-bold">{item.name}</p><p className="mt-0.5 text-xs text-[#8fa39d]">{item.role} · {item.city}</p></div></div><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={`Falar com o Moto Fi, ${item.name}`} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#b9f23e] text-[#101718] transition-transform hover:scale-105"><MessageCircle size={18} /></a></div><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-[#506460] py-3 text-sm font-bold text-[#d7e5de] transition-colors hover:border-[#b9f23e] hover:text-[#b9f23e]">Quero Saber Mais <ArrowRight size={15} /></a></article>)}</div></section>

        <section id="duvidas" className="border-t border-[#263536] bg-[#152121]"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28"><div><p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-[#71ddd0]">Sem letra miúda</p><h2 className="text-4xl font-black leading-none tracking-[-.055em] sm:text-5xl">Dúvidas de quem <span className="text-[#b9f23e]">não para.</span></h2><p className="mt-6 max-w-sm leading-7 text-[#8fa39d]">Ainda quer entender se o Moto Fi combina com o seu corre? A gente responde no WhatsApp.</p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#b9f23e] px-5 py-3 text-sm font-extrabold text-[#101718]">Tirar uma dúvida <MessageCircle size={17} /></a></div><div>{[{ q: "Preciso entender de finanças para usar?", a: "Não. O Moto Fi foi pensado para ser preenchido em segundos, com palavras simples e uma visão direta do que entrou, saiu e sobrou." }, { q: "Posso usar para moto-táxi e entregas?", a: "Sim. Você registra qualquer tipo de corrida ou entrega e acompanha os custos que fazem parte da sua rotina." }, { q: "O aplicativo serve só para controlar gastos?", a: "Não. Além dos gastos, você acompanha ganhos, metas e lembretes de manutenção para cuidar do seu veículo e do seu próximo mês." }].map((faq, i) => <div key={faq.q} className="border-b border-[#30413f]"><button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-bold text-[#dbe8e1]"><span>{faq.q}</span><ChevronDown size={19} className={`shrink-0 text-[#b9f23e] transition-transform ${openFaq === i ? "rotate-180" : ""}`} /></button>{openFaq === i && <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-[#8fa39d]">{faq.a}</p>}</div>)}</div></div></section>

        <section className="relative overflow-hidden bg-[#0e1516]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(8,171,195,.14),transparent_32%)]" /><div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-5 py-20 sm:flex-row sm:items-center lg:px-8 lg:py-24"><div><div className="mb-5 flex items-center gap-2 text-sm font-bold text-[#b9f23e]"><Bike size={19} /> Sua próxima decisão começa aqui</div><h2 className="max-w-2xl text-4xl font-black leading-[.96] tracking-[-.06em] sm:text-6xl">Chega de terminar o dia sem saber onde foi parar.</h2></div><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#b9f23e] px-7 py-4 font-extrabold text-[#101718] transition-transform hover:-translate-y-1">Saber Mais no WhatsApp <ArrowRight size={18} /></a></div></section>

        <footer className="border-t border-[#263536] bg-[#101718]"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8"><div><a href="#inicio" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-[11px] bg-[#b9f23e] text-[#101718]"><Gauge size={21} strokeWidth={2.8} /></span><span className="text-xl font-black tracking-[-.06em]">Moto <span className="text-[#b9f23e]">Fi</span></span></a><p className="mt-5 max-w-xs text-sm leading-6 text-[#829691]">Mais clareza para quem faz a cidade continuar em movimento.</p></div><div><p className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-[#d7e5de]">Navegue</p><div className="space-y-3 text-sm text-[#829691]">{navItems.map(([label, href]) => <a key={href} href={href} className="block transition-colors hover:text-[#b9f23e]">{label}</a>)}</div></div><div><p className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-[#d7e5de]">Converse</p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#829691] transition-colors hover:text-[#b9f23e]"><MessageCircle size={16} /> WhatsApp do Moto Fi</a><p className="mt-3 text-xs text-[#829691]">Rio de Janeiro · Brasil</p></div></div><div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#263536] px-5 py-6 text-xs text-[#657b75] sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2024 Moto Fi. Todos os direitos reservados.</span><span>Feito para quem vive na rua.</span></div></footer>
      </div>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Saber mais no WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#b9f23e] text-[#101718] shadow-[0_10px_35px_rgba(0,0,0,.4)] transition-transform hover:scale-105"><MessageCircle size={23} /></a>
    </main>
  );
}