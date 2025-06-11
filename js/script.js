(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.querySelector("#footer").innerHTML = data;
      })
      .catch((error) => console.error("Erro ao carregar o footer:", error));
  });

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

  document.addEventListener("DOMContentLoaded", function () {
    fetch("contact.html")
      .then((response) => response.text())
      .then((data) => {
        document.querySelector("#contact").innerHTML = data;
      })
      .catch((error) => console.error("Erro ao carregar o contact:", error));
  });

  function toggleScrolled() {
    const selectBody = document.querySelector("body");

    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  let fixedWhats = document.querySelector(".fixed-whats");

  function toggleFixedWhats() {
    window.scrollY > 100
      ? fixedWhats.classList.add("active")
      : fixedWhats.classList.remove("active");
  }

  window.addEventListener("load", toggleFixedWhats);
  document.addEventListener("scroll", toggleFixedWhats);

  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  const stepsItems = [
    {
      icon: "bi-stack",
      title: "1. Defina a Cobertura Ideal",
      description:
        "Escolha o valor de capital segurado que melhor atende às necessidades de proteção do seu estagiário, garantindo tranquilidade para ambos.",
      delay: "100",
    },
    {
      icon: "bi-person-lines-fill",
      title: "2. Informe os Dados do Estagiário",
      description:
        "Preencha os campos com as informações necessárias do estudante para a emissão da apólice.",
      delay: "200",
    },
    {
      icon: "bi-cash",
      title: "3. Ative a Proteção com o Pagamento",
      description:
        "Assim que o pagamento for confirmado (instantaneamente com PIX ou após compensação do boleto), o seguro será ativado e a apólice ficará disponível para download.",
      delay: "400",
    },
    {
      icon: "bi-file-earmark-text",
      title: "4. Receba Sua Apólice",
      description:
        "Em poucos instantes, você receberá o comprovante de contratação (apólice ou bilhete de seguro) e o boleto (caso se aplique) diretamente no seu e-mail.",
      delay: "300",
    },
  ];

  const stepsSection = document.querySelector(".steps .container .row");

  stepsItems.forEach((step) => {
    const stepContainer = document.createElement("div");
    stepContainer.classList.add("col-lg-3", "col-md-6");
    stepContainer.setAttribute("data-aos", "fade-up");
    stepContainer.setAttribute("data-aos-delay", step.delay);
    stepContainer.innerHTML = `
        <div class="step-item position-relative">
              <div class="icon">
                <i class="bi ${step.icon}"></i>
              </div>
              <h3>${step.title}</h3>
              <p>${step.description}</p>
            </div>
      `;
    stepsSection.appendChild(stepContainer);
  });

  const prices = [
    {
      number: "1",
      capital: "10.000",
      price: "29,90",
      featured: "",
      span: "",
    },
    {
      number: "2",
      capital: "15.000",
      price: "44,85",
      featured: "featured",
      span: "",
    },
    {
      number: "3",
      capital: "20.000",
      price: "59,80",
      featured: "featured",
      span: "",
    },
    {
      number: "4",
      capital: "25.000",
      price: "74,75",
      featured: "",
      span: "<span class='advanced'>+ indicado</span>",
    },
    {
      number: "5",
      capital: "35.000",
      price: "104,65",
      featured: "",
      span: "",
    },
    {
      number: "6",
      capital: "50.000",
      price: "149,50",
      featured: "",
      span: "",
    },
  ];

  const swiperWrapper = document.querySelector(".prices .swiper-wrapper");

  prices.forEach((price) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide", "pricing");
    swiperSlide.innerHTML = `
    <div  data-aos="fade-up" data-aos-delay="100">
                <div class="pricing-item ${price.featured}">
                ${price.span}
                  <h3>Plano ${price.number}</h3>
                  <h4><sup>R$</sup>${price.capital}<span>,00</span></h4>
                  <ul>
                    <li><small>Cobertura para Morte Acidental e Invalidez Permanente Total ou Parcial por Acidente</small></li>
                    <li>Quantidade de números da sorte: ${price.number}</li>
                    <li>
                      Valor total do seguro:
                      <strong>R$ ${price.price}</strong>
                      <p>(pagamento único)</p>
                    </li>
                  </ul>
                  <div class="btn-wrap">
                    <a
                      href="https://bpc.capemisa.com.br/pages/index.aspx?token=dkxtcr3vb3DJPj0Y9qjjCMJlUxE%3d"
                      target="_blank"
                      class="btn-buy"
                      >Contratar</a
                    >
                  </div>
                </div>
              </div>
      `;
    swiperWrapper.appendChild(swiperSlide);
  });

  const questions = [
    {
      number: "1",
      question: "Quais as coberturas mínimas?",
      answer:
        "Todos os planos oferecem cobertura para Invalidez por Acidente (Indenização no caso de perda, redução ou incapacidade funcional definitiva total ou parcial de um dos seus membros) e Morte Acidental (Os beneficiários legais recebem uma indenização no caso de falecimento em decorrência de acidente pessoal).",
      show: "show",
    },
    {
      number: "2",
      question:
        "O seguro cobre acidentes ocorridos fora do horário ou local de estágio?",
      answer:
        "A cobertura de acidentes pessoais geralmente é 24h/7d, em qualquer lugar.",
    },
    {
      number: "3",
      question: "Qual o valor mínimo de cobertura exigido por lei?",
      answer:
        "A lei não especifica valor. Recomenda-se que a empresa avalie riscos.",
    },
    {
      number: "4",
      question: "O seguro estagiário cobre doenças?",
      answer: "Não, é para acidentes pessoais, não para doenças.",
    },
    {
      number: "5",
      question: "É possível contratar para um grupo grande de estagiários?",
      answer: "Sim, há planos e condições especiais para grupos.",
    },
    {
      number: "6",
      question: "Como acionar o seguro em caso de sinistro?",
      answer:
        "Contatar a seguradora para fazer o aviso de sinistro e solicitar a indenização entrando em contato com os telefones da seguradora, indicados na apólice.",
    },
    {
      number: "7",
      question: "Quem são os beneficiários da apólice?",
      answer:
        "São os beneficiários legais, de acordo com a lei, no caso de morte acidental. No caso de invalidez por acidente, o próprio segurado da apólice.",
    },
    {
      number: "8",
      question: "Boleto vencido, ainda posso pagar?",
      answer:
        "Caso o boleto tenha vencido e o pagamento não tenha sido feito, é preciso realizar uma nova contratação. O boleto vencido e não pago é automaticamente cancelado.",
    },
  ];

  const customAccordion = document.querySelector(".custom-accordion");

  questions.forEach((question) => {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");
    accordionItem.innerHTML = `
    <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-faq-${question.number}"
                  >
                    ${question.question}
                  </button>
                </h2>

                <div
                  id="collapse-faq-${question.number}"
                  class="collapse ${question.show}"
                  aria-labelledby="heading-${question.number}"
                  data-parent="#accordion-faq"
                >
                  <div class="accordion-body">
                    ${question.answer}
                  </div>
                </div>
      `;
    customAccordion.appendChild(accordionItem);
  });

  const tags = document.querySelector(".seo-tags");
  tags.innerHTML =
    "seguro obrigatorio para estagiário preço; seguro para estagiário obrigatório; seguro estágio obrigatório; seguro estagiário preço; seguro obrigatório para estágio; seguro para estágio cotação; seguro estágio valor; seguro de vida para estagiário; seguro para estagiário cotação online; seguro para estagiário empresas; seguro estágio corretora; como fazer seguro para estagiário; seguro estágio contratação; seguro estágio lei; seguro estágio online; onde contratar seguro para estagiário; seguro obrigatório estágio 2024; seguro estágio mais barato; seguro estágio simples; seguro estágio obrigatório valor; seguro estágio obrigatório como contratar; seguro estágio cobertura; seguro estágio estudante; seguro estágio obrigatório como funciona; seguro estágio como funciona; seguro estágio obrigatório legislação; seguro estágio lei do estágio; seguro estágio obrigatório contrato; seguro estágio estagiário; seguro estágio individual; seguro estágio coletivo; seguro estágio para empresa; seguro estágio para escola; seguro estágio para universidade; seguro estágio estudante universitário; seguro estágio técnico; seguro estágio obrigatório ensino médio; seguro estágio obrigatório faculdade; seguro estágio obrigatório profissionalizante; seguro estágio obrigatório requisitos; seguro estágio obrigatório mercado; seguro estágio obrigatório corretora confiável; seguro estágio obrigatório rápida contratação; seguro estágio obrigatório sem burocracia; seguro estágio obrigatório documentação necessária; seguro estágio obrigatório preço baixo; seguro estágio obrigatório melhor custo-benefício; seguro estágio obrigatório pagamento online; seguro estágio obrigatório parcelado; seguro estágio obrigatório boleto ou cartão; seguro estágio obrigatório renovação fácil; seguro estágio obrigatório suporte especializado; seguro estágio obrigatório cobertura ampla; seguro estágio obrigatório benefícios; seguro estágio obrigatório proteção completa; seguro estágio obrigatório para jovens; seguro estágio obrigatório para estudantes; seguro estágio Porto Seguro; seguro estágio Bradesco Seguros; seguro estágio Mapfre; seguro estágio Tokio Marine; seguro estágio Icatu Seguros; seguro estágio SulAmérica; seguro estágio Allianz; seguro estágio HDI Seguros; seguro estágio Sompo Seguros; seguro estágio Zurich Seguros; seguro estágio Liberty Seguros; seguro estágio Generali Seguros; seguro estágio Berkley Seguros; seguro estágio Chubb Seguros; seguro estágio Sancor Seguros";
})();
