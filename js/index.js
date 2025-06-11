function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );
  
      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  
  window.addEventListener("load", initSwiper);
  
  const icB = [
    {
      delay: "200",
      iconName: "bi-hourglass-split",
      title: "Experiência que inspira",
      text: "Mais de 20 anos no mercado, nossa fundadora lidera uma equipe especializada e comprometida em cada detalhe.",
    },
    {
      delay: "300",
      iconName: "bi-person-lock",
      title: "Proteção personalizada",
      text: "Seguros feitos para você: atendemos pessoas e empresas com soluções personalizadas.",
    },
    {
      delay: "400",
      iconName: "bi-emoji-smile",
      title: "Confiança e transparência",
      text: "Metodologia eficaz e transparente, garantindo confiança em cada etapa do processo.",
    },
    {
      delay: "500",
      iconName: "bi-clipboard-heart",
      title: "Planejamento estratégico",
      text: "Cada necessidade é compreendida com atenção visando alinhar expectativas e realidade de forma estratégica.",
    },
  ];
  
  const iconBoxes = document.querySelector(".icon-boxes");
  
  icB.forEach((ic) => {
    const iconBox = document.createElement("div");
    iconBox.classList.add("col-md-6");
    iconBox.setAttribute("data-aos", "fade-up");
    iconBox.setAttribute("data-aos-delay", ic.delay);
  
    iconBox.innerHTML = `
      <div class="icon-box">
      <i class= "bi ${ic.iconName}"></i>
      <h3>${ic.title}</h3>
      <p>
        ${ic.text}
      </p>
    </div>
      `;
  
    iconBoxes.appendChild(iconBox);
  });
  
  const sIt = [
    {
      delay: "100",
      iconName: "bi-person-add",
      color: "#4233ff",
      title: "SEGURO DE VIDA",
      span: "(INDIVIDUAL | EM GRUPO)",
      spanClass: "",
    },
    {
      delay: "200",
      iconName: "bi-piggy-bank",
      color: "#29cc61",
      title: "PREVIDÊNCIA PRIVADA",
      span: "",
      spanClass: "",
    },
    {
      delay: "600",
      iconName: "bi-house-lock",
      color: "#4233ff",
      title: "SEGURO PATRIMONIAL",
      span: "",
      spanClass: "",
    },
    {
      delay: "300",
      iconName: "bi-shield-lock",
      color: "#29cc61",
      title: "BLINDAGEM PATRIMONIAL",
      span: "",
      spanClass: "",
    },
    {
      delay: "400",
      iconName: "bi-diagram-3",
      color: "#29cc61",
      title: "PLANEJAMENTO SUCESSÓRIO",
      span: "",
      spanClass: "",
    },
    {
      delay: "800",
      iconName: "bi-mortarboard",
      color: "#4233ff",
      title: "SEGURO ESTAGIÁRIO",
      span: `Cote <a href="seguro-estagiario.html" class="pe-auto">aqui</a>`,
      spanClass: "univ",
    },
    {
      delay: "700",
      iconName: "bi-list-check",
      color: "#29cc61",
      title: "CONSÓRCIO",
      span: "",
      spanClass: "",
    },
    {
      delay: "600",
      iconName: "bi-building-fill-lock",
      color: "#4233ff",
      title: "SEGURO EMPRESARIAL",
      span: "",
      spanClass: "",
    },
    {
      delay: "900",
      iconName: "bi-luggage",
      color: "#4233ff",
      title: "SEGURO VIAGEM",
      span: "",
      spanClass: "",
    },
    {
      delay: "500",
      iconName: "bi-heart-pulse",
      color: "#29cc61",
      title: "PLANO DE SAÚDE (PF | PJ)",
      span: "",
      spanClass: "",
    },
    {
      delay: "1000",
      iconName: "bi-ev-front",
      color: "#4233ff",
      title: "SEGURO AUTO",
      span: "",
      spanClass: "",
    },
    {
      delay: "1200",
      iconName: "bi-plus-lg",
      color: "#29cc61",
      title: "E muito mais",
      span: "",
      spanClass: "",
    },
  ];
  
  const servicesItems = document.querySelector(".services-items");
  
  sIt.forEach((si) => {
    const serviceItem = document.createElement("div");
    serviceItem.classList.add("col-lg-3", "col-md-4");
  
    serviceItem.setAttribute("data-aos", "fade-up");
    serviceItem.setAttribute("data-aos-delay", si.delay);
  
    serviceItem.innerHTML = `
      <div class="services-item">
                    <i class="bi ${si.iconName}" style="color: ${si.color}"></i>
                    <h3 class="${si.textClass}">
                        ${si.title}
                        <span class="d-block ${si.spanClass}">${si.span}</span>
                    </h3>
                  </div>
      `;
  
    servicesItems.appendChild(serviceItem);
  });
  
  const partnersSection = document.querySelector(".partners");
const partnersContainer = document.createElement("div");
partnersContainer.classList.add("partners-items", "d-flex", "align-items-center");

let totalImgs = 33;
const imgWidth = 120 + 10;
partnersSection.appendChild(partnersContainer);

const altPartners = [
  "Akad Seguros - Soluções inovadoras em tecnologia para seguros digitais com processos 100% online",
  "Allianz Seguros - Líder global em proteção veicular, residencial e seguro de vida com 130 anos de experiência",
  "Amil Saúde - Planos de saúde com ampla rede credenciada e cobertura nacional para indivíduos e empresas",
  "Axa Seguros - Seguros para automóveis, vida, empresarial e riscos especiais com soluções personalizadas",
  "Azos Seguros - Seguro de vida 100% digital com coberturas flexíveis e preços acessíveis para todos os perfis",
  "Azul Seguros - Seguro auto com franquias reduzidas e assistência 24h para todos os tipos de veículos",
  "BrasilPrev - Planos de previdência privada VGBL e PGBL com diversas opções de contribuição e resgate",
  "Capemisa Seguros - Especialista em seguros de vida em grupo e individual com mais de 75 anos no mercado",
  "Centauro Seguradora - Seguro de vida simples e objetivo com cobertura por morte natural e acidental",
  "Fator Seguradora - Seguros patrimoniais, garantias, responsabilidade civil e riscos empresariais especializados",
  "HDI Seguros - Seguros para automóveis, residências, condomínios e empresas com ampla cobertura",
  "Icatu Seguros - Soluções em capitalização, previdência e seguros de vida com rendimentos competitivos",
  "Itaú Seguros - Seguro auto com desconto para correntistas do banco, assistência 24h e cobertura nacional",
  "Leve Saúde - Planos de saúde econômicos com rede referenciada e atendimento em todo território nacional",
  "MAG Seguros - Seguro de vida tradicional com estabilidade de mais de 185 anos no mercado segurador",
  "Mapfre Seguros - Multinacional espanhola com seguros automóveis, vida, saúde, residência, empresas e riscos especiais",
  "MetLife Seguros - Seguros de vida individuais e em grupo com diversas coberturas",
  "NotreDame Intermédica - Rede de planos de saúde com hospitais próprios e atendimento odontológico integrado",
  "Omint Saúde - Planos de saúde premium com acesso a melhores hospitais e clínicas do país",
  "Porto Seguro - Seguradora completa para automóveis, celulares, vida, residência, viagem e consórcios diversos",
  "Pottencial Seguros - Seguros garantia, fiança locatícia, riscos imobiliários e garantias judiciais",
  "Prevent Senior - Planos de saúde para idosos com cobertura nacional e foco na terceira idade",
  "Prudential Seguros - Seguro de vida e em grupo com proteção financeira em casos de imprevistos",
  "Rodobens Consórcios - Consórcios para veículos, imóveis e serviços com parcelas fixas e sem juros",
  "Sompo Seguros - Seguradora japonesa com produtos para automóveis, vida e riscos empresariais",
  "Suhai Seguros - Seguros para proteção veicular especializada contra roubo e furto com rastreador incluso",
  "SulAmérica Seguros - Seguros de saúde, dental e previdência privada com diversas opções de planos",
  "Sura Seguros - Soluções completas para empresas com seguros coletivos e benefícios para funcionários",
  "Tokio Marine Seguros - Seguradora japonesa com produtos para automóveis, vida e viagens internacionais",
  "Unimed Saúde - Maior operadora de planos de saúde do Brasil com mais de 150 mil médicos credenciados",
  "Seguros Unimed - Seguros de vida, previdência privada, acidentes pessoais e responsabilidade profissional",
  "Yelum Seguros - Seguros de vida, automóveis e residência com contratação",
  "Zurich Seguros - Seguros empresariais, riscos especiais e proteções financeiras personalizadas"
];

for (let j = 0; j < 2; j++) {
  for (let i = 1; i <= totalImgs; i++) {
    const partnersItem = document.createElement("img");
    partnersItem.classList.add("partners-item");
    partnersItem.setAttribute("src", `assets/imgs/partners/${i}.png`);
    partnersItem.setAttribute("alt", altPartners[i - 1] || `Logo da empresa ${i}`);
    partnersContainer.appendChild(partnersItem);
  }
}
  
  const reviews = [
    {
      initial: "L",
      name: "Luiz Eduardo Araujo",
      text: "Clareza e veracidade nas informações com velocidade no fechamento dos contratos.",
    },
    {
      initial: "T",
      name: "Telma Santos",
      text: "Excelente. Faço seguros dos veiculos e residências da família e sempre tenho excelente atendimento!",
    },
    {
      initial: "G",
      name: "Guilherme Luis Bogo",
      text: "Ótimo atendimento, tudo personalizado, com boas explicações, e domínio de assunto, atendimento com respeito tendo sempre como prioridade os interesses do cliente, não visa marcas, e sim benefícios, recomendo.",
    },
    {
      initial: "T",
      name: "Tania Bicchieri",
      text: "Só tenho elogios para essa equipe atenciosa e competente. ANPLA foi a melhor corretora com quem já trabalhei, excelentes e atenciosos desde o primeiro contato. Indico de olhos fechados.",
    },
    {
      initial: "K",
      name: "Klaw Sylva",
      text: "Profissionais atenciosos..assessoria perfeita .. tranquilidade e segurança no controle das finanças... Recomendo",
    },
  ];
  
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  
  reviews.forEach((re) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    swiperSlide.innerHTML = `
     <div class="review-item">
                  <div class="review-initial">${re.initial}</div>
                      <h3>${re.name}</h3>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i>
                      </div>
                   
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        <span
                          >${re.text}</span
                        >
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
      `;
    swiperWrapper.appendChild(swiperSlide);
  });
  
  const clients = [
    {
      delay: "100",
      logo: "cliente1.png",
      name: "Logotipo azul da Teciplast, loja especializada em tecidos de alta qualidade ",
      bgColor: "#ffffff"
    },
    {
      delay: "200",
      logo: "cliente2.png",
      name: "Logotipo dourado e azul da Pereira da Silva Advocacia, escritório de advocacia dos mais diversos ramos",
      bgColor: "#19375d"
    },
    {
      delay: "300",
      logo: "cliente3.png",
      name: "Logotipo preta e cinza da Oxygen Investimentos especialista em crédito",
      bgColor: "#ffffff"
    },
    {
      delay: "400",
      logo: "cliente4.png",
      name: "Logotipo azul da Move Turismo, agência de viagens especializada em roteiros personalizados",
      bgColor: "#efeefd"
    },
    {
      delay: "500",
      logo: "cliente5.png",
      name: "Logotipo colorido e azul da Gráfica Color Print, especializada em impressões e materiais gráficos",
      bgColor: "#2e549d"
    },
    {
      delay: "600",
      logo: "cliente6.png",
      name: "Logotipo da cafeteria Cheirin Bão TopShopping, conhecida por seu excelente café e ambiente aconchegante",
      bgColor: "#744c27"
    },
    {
      delay: "700",
      logo: "cliente7.png",
      name: "Logotipo na cor fúcsia do escritório de advocacia Lilian Santos Ferreira, assistência jurídica",
      bgColor: "#64100e"
    },
    {
      delay: "800",
      logo: "cliente8.png",
      name: "Logotipo preto e branco da KKSports Ensino Desportivo, com uma bola de futebol em chamas, representando sua atuação no treinamento esportivo",
      bgColor: "#060709"
    }
  ];

  const clientsContainer = document.querySelector(".clients-container");

  clients.forEach((client) => {
    const clientBox = document.createElement("div");
    clientBox.classList.add("col-xl-3", "col-lg-4", "col-md-6", "col-sm-6", "col-6");
    clientBox.setAttribute("data-aos", "fade-up");
    clientBox.setAttribute("data-aos-delay", client.delay);
  
    clientBox.innerHTML = `
      <div class="client-logo-box h-100" style="background-color: ${client.bgColor}">
        <img src="assets/imgs/clients/${client.logo}" alt="${client.name}" class="client-logo-img">
      </div>
    `;
  
    clientsContainer.appendChild(clientBox);
  });

  const members = [
    {
      img: "ana",
      name: "Ana Paula Antunes",
      role: "Fundadora",
      alt: "Foto de Ana Paula Antunes, fundadora da corretora de seguros, especializada em soluções personalizadas.",
      text: "Com quase duas décadas de atuação no mercado de seguros, a expertise e o compromisso de Ana garantem que os clientes sempre recebam as melhores opções e soluções para suas demandas.",
    },
    {
      img: "yuri",
      name: "Yuri Ribeiro",
      role: "Sócio",
      alt: "Foto de Yuri Ribeiro, Sócio da Corretora e especialista em inovação.",
      text: "Formado em Sistemas de Informação, atua integrando tecnologias, transformando rotinas, inovando processos e otimizando fluxos para garantir eficiência e qualidade organizacional.",
    },
  ];
  
  const teamSection = document.querySelector(".team .container .row");
  members.forEach((m) => {
    const member = document.createElement("div");
    member.classList.add("col-lg-3", "col-md-6");
    member.setAttribute("data-aos", "fade-up");
    member.setAttribute("data-aos-delay", "100");
    member.innerHTML = `
          <div class="member mx-auto">
                    <div class="pic">
                      <img
                        class="bg-img-member"
                        src="assets/imgs/bg/logotipo.png"
                        alt=""
                      />
                      <img src="assets/imgs/members/${m.img}-alt.png" class="main-img" alt="${m.alt}" />
                    </div>
                    <div class="member-info">
                      <h4>${m.name}</h4>
                      <hr />
                      <span class="mb-2">${m.role}</span>
                      <p>
                        ${m.text}
                      </p>
                    </div>
                  </div>
      `;
    teamSection.appendChild(member);
  });
  
