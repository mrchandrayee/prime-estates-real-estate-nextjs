'use client';

import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X, MapPin, BedDouble, Bath, Maximize2, Phone, Mail, ChevronDown, Play, Search, Building2, ShieldCheck, Trees, KeyRound, Facebook, Instagram, Linkedin, Youtube, CheckCircle2, Send } from "lucide-react";

const properties = [
  { id: 1, name: "Prime Extravaganza", type: "Apartments", location: "Khanda Colony, Panvel", price: "₹ 1.36 Cr onwards", beds: "Spacious 2 & 3 BHK", area: "1,150 – 1,650 sq.ft.", image: "/images/tower.jpg", tag: "Ready to Move" },
  { id: 2, name: "Prime Sky Residences", type: "Apartments", location: "East Bengaluru", price: "₹ 1.15 Cr onwards", beds: "3 & 4 BHK", area: "1,680 – 2,450 sq.ft.", image: "/images/aerial.jpg", tag: "New Launch" },
  { id: 3, name: "Prime Garden Homes", type: "Villas", location: "Whitefield", price: "₹ 1.85 Cr onwards", beds: "3 & 4 BHK", area: "2,100 – 3,000 sq.ft.", image: "/images/project.jpg", tag: "Limited Units" }
];

const nav = ["Home", "About Us", "Projects", "Why Prime", "Contact"];
const features = [
  { icon: Building2, title: "Thoughtful Design", desc: "Homes shaped around the way you live, with space, light and detail in balance." },
  { icon: ShieldCheck, title: "Trusted Quality", desc: "A commitment to dependable materials, clear processes and lasting construction." },
  { icon: Trees, title: "Better Communities", desc: "Landscaped open spaces and amenities that bring neighbours closer." },
  { icon: KeyRound, title: "A Smarter Investment", desc: "Locations and layouts selected with long-term value in mind." }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState(0);
  const [sent, setSent] = useState(false);
  const filtered = useMemo(() => properties.filter(p => (filter === "All" || p.type === filter) && (p.name + p.location).toLowerCase().includes(query.toLowerCase())), [filter, query]);
  const faqs = [
    ["How do I schedule a site visit?", "Share your details through the enquiry form or call our property team. Our representative will coordinate a convenient date and time."],
    ["Can I get help with home loans?", "Our team can connect you with lending partners and guide you through the documents generally required for a home loan."],
    ["Are the listed prices final?", "Prices shown are indicative starting prices. Final pricing, taxes, statutory charges and availability are confirmed by our sales team."],
    ["Where can I find project approvals?", "Project-specific approvals and legal documents can be requested from our team during your enquiry or site visit."]
  ];
  const goTo = (label: string) => { document.getElementById(label.toLowerCase().replaceAll(" ", "-"))?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  return <main>
    <header className="header">
      <a className="brand" href="#"><span className="brand-mark">P</span><span><b>PRIME</b><small>SAHYADRI</small></span></a>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>{nav.map(item => <button key={item} onClick={() => goTo(item)}>{item}</button>)}</nav>
      <a className="header-call" href="tel:+919876543210"><Phone size={15}/> <span>+91 98765 43210</span></a>
      <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero" id="home">
      <div className="hero-image" />
      <div className="hero-shade"/>
      <div className="hero-content">
        <span className="eyebrow light"><i/> YOUR PLACE. YOUR STORY.</span>
        <p className="hero-kicker">A premium address in Panvel</p>
        <h1>Prime<br/><em>Extravaganza.</em></h1>
        <p className="hero-copy">Where you indulge in ultimate leisure and relaxation. Discover spacious 2 & 3 BHK residences at Khanda Colony, Panvel.</p>
        <div className="hero-actions"><button className="btn-primary" onClick={() => goTo("Projects")}>Explore Projects <ArrowRight size={17}/></button><button className="play-link" onClick={() => document.getElementById("showreel")?.scrollIntoView({behavior:"smooth"})}><span><Play size={14} fill="currentColor"/></span> Watch our story</button></div>
      </div>
      <div className="hero-side">BUILT AROUND YOU <b> / </b> SINCE 2008</div>
      <div className="hero-bottom"><span>01 <i/> 03</span><span>SCROLL TO EXPLORE ↓</span><span>BENGALURU · INDIA</span></div>
    </section>

    <section className="intro section" id="about-us">
      <div className="intro-image"><img src="/images/lifestyle.jpg" alt="A modern residential neighbourhood"/><div className="image-note"><b>15+</b><span>Years of building<br/>better beginnings</span></div></div>
      <div className="intro-copy"><span className="eyebrow">WHO WE ARE</span><h2>More than a home.<br/><em>A feeling.</em></h2><p className="lead">At Prime, we believe the right home is where your next chapter begins.</p><p>We bring together considered architecture, quality craftsmanship and locations that make everyday life easier. From the first conversation to the day you receive your keys, we put people at the centre of every decision.</p><button className="text-link" onClick={() => goTo("Why Prime")}>Discover the Prime difference <ArrowUpRight size={17}/></button></div>
    </section>

    <section className="projects section" id="projects">
      <div className="section-head"><div><span className="eyebrow">FIND YOUR SPACE</span><h2>Featured <em>projects.</em></h2></div><p>Explore homes created for different ways of living, in places with room to grow.</p></div>
      <div className="project-tools"><div className="filters">{["All","Apartments","Villas"].map(f=><button className={filter===f?"active":""} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div><label className="search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects or location"/></label></div>
      <div className="property-grid">{filtered.map(p=><article className="property-card" key={p.id}><div className="property-image"><img src={p.image} alt={p.name}/><span className="tag">{p.tag}</span><button className="image-arrow" aria-label={`View ${p.name}`} onClick={()=>goTo("Contact")}><ArrowUpRight/></button></div><div className="property-info"><span className="property-location"><MapPin size={13}/>{p.location}</span><h3>{p.name}</h3><div className="property-meta"><span><BedDouble size={15}/>{p.beds}</span><span><Maximize2 size={14}/>{p.area}</span></div><div className="property-price"><b>{p.price}</b><button onClick={()=>goTo("Contact")}>Enquire <ArrowRight size={15}/></button></div></div></article>)}</div>
      {filtered.length===0&&<p className="empty">No projects match your search. Try another keyword.</p>}
      <div className="center"><button className="btn-outline" onClick={()=>{setFilter("All");setQuery("");}}>View all projects <ArrowRight size={16}/></button></div>
    </section>

    <section className="showreel" id="showreel"><video autoPlay muted loop playsInline poster="/images/hero.jpg"><source src="/prime-project-showreel.mp4" type="video/mp4"/></video><div className="showreel-overlay"><span className="eyebrow light">A GLIMPSE OF PRIME</span><h2>Spaces that inspire.<br/><em>Places that connect.</em></h2><p>Take a closer look at the details that make a house feel like home.</p></div></section>

    <section className="why section" id="why-prime"><div className="section-head"><div><span className="eyebrow">THE PRIME PROMISE</span><h2>Good homes.<br/><em>Good living.</em></h2></div><p>We think beyond four walls. Every detail is an opportunity to make life a little better.</p></div><div className="feature-grid">{features.map(({icon:Icon,title,desc},i)=><div className="feature" key={title}><span className="feature-no">0{i+1}</span><div className="feature-icon"><Icon size={23}/></div><h3>{title}</h3><p>{desc}</p><ArrowUpRight className="feature-arrow"/></div>)}</div></section>

    <section className="location section"><div className="location-copy"><span className="eyebrow light">LOCATION MATTERS</span><h2>Where every possibility<br/>comes closer to <em>you.</em></h2><p>Connected neighbourhoods. Everyday conveniences. Room to grow. Find a home that puts more of your city within reach.</p><button className="btn-primary" onClick={()=>goTo("Projects")}>Explore locations <ArrowRight size={17}/></button></div><div className="map-image"><img src="/images/location-map.jpg" alt="Bengaluru connectivity map"/></div></section>

    <section className="plans section"><div className="section-head"><div><span className="eyebrow">DESIGNED FOR YOU</span><h2>Find your <em>fit.</em></h2></div><p>Choose a layout that fits your rhythm, your people and your plans for the future.</p></div><div className="plan-grid">{["2 BHK Type A","3 BHK Type B","3 BHK Type C"].map((x,i)=><div className="plan-card" key={x}><img src="/images/floorplans.jpg" alt={`${x} floor plan`}/><div><h3>{x}</h3><p>{i===0?"Efficient, considered spaces":i===1?"Room for everyone":"An open, spacious layout"}</p><button onClick={()=>goTo("Contact")}>Request floor plan <ArrowUpRight size={15}/></button></div></div>)}</div></section>

    <section className="testimonial"><span className="eyebrow light">A WORD FROM OUR HOMEOWNERS</span><div className="quote-mark">“</div><blockquote>We were looking for a home that felt right for our family. The team made the entire journey simple, transparent and reassuring.</blockquote><div className="quote-author"><span className="avatar">A</span><span><b>A happy homeowner</b><small>Prime resident · Bengaluru</small></span></div></section>

    <section className="faq section"><div><span className="eyebrow">GOOD TO KNOW</span><h2>Questions, <em>answered.</em></h2><p>Need a little more clarity? Here are a few things people often ask us.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setActiveFaq(activeFaq===i?-1:i)}><span>0{i+1}</span>{q}<ChevronDown className={activeFaq===i?"rotated":""}/></button>{activeFaq===i&&<p>{a}</p>}</div>)}</div></section>

    <section className="contact section" id="contact"><div className="contact-copy"><span className="eyebrow light">LET'S FIND YOUR HOME</span><h2>Your next chapter<br/>starts <em>here.</em></h2><p>Tell us what you're looking for. Our team will help you take the next step.</p><div className="contact-detail"><Phone size={17}/><span><small>CALL US</small><b>+91 98765 43210</b></span></div><div className="contact-detail"><Mail size={17}/><span><small>WRITE TO US</small><b>sales@tulsisahyadri.com</b></span></div></div><form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true);}}><h3>Get in touch</h3><p>We'd love to hear from you.</p><input required placeholder="Your full name"/><input required type="email" placeholder="Your email address"/><input required type="tel" placeholder="Phone number"/><select defaultValue=""><option value="" disabled>I'm interested in...</option><option>2 BHK Apartment</option><option>3 BHK Apartment</option><option>Villa</option><option>Site visit</option></select><textarea placeholder="Tell us a little more (optional)" rows={3}/><button className="btn-primary" type="submit">{sent?"Enquiry received":"Send enquiry"} {sent?<CheckCircle2 size={16}/>:<Send size={16}/>}</button>{sent&&<p className="success">Thank you! This demo form has captured your submission locally.</p>}</form></section>

    <footer className="footer"><div className="footer-top"><a className="brand footer-brand" href="#"><span className="brand-mark">P</span><span><b>PRIME</b><small>SAHYADRI</small></span></a><p>Prime Extravaganza · Khanda Colony, Panvel<br/>Making every day feel more like home.</p><div className="socials"><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="LinkedIn"><Linkedin/></a><a href="#" aria-label="YouTube"><Youtube/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tulsi Sahyadri. All rights reserved.</span><span>Privacy · Terms</span><span>Designed with purpose.</span></div></footer>
  </main>;
}
