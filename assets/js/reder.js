

const renderHeader = ()=>{
    const header = `
    <nav class="nav container">
            <a href="#" class="nav__logo">Thinhne<span class="red">.io</span></a>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list grid" id="nav-list">
                    #Render to list
                </ul>
                <i class="uil uil-times-circle nav__close nav-icon" id="nav-close"></i>
            </div>

            <div class="nav__btns">
                <!-- Theme changes ButtonIcon -->
                <i class="uil uil-moonset change-theme" id="theme-button"></i>
                <div class="nav__toggle" id="nav-toggle">
                    <i class="uil uil-apps"></i>
                </div>
            </div>
        </nav>
    `
    $('#header').innerHTML= header;
}

const renderHeaderNavList = () =>{
    const navList = app.navList.map((nav,index) =>{
        return `
        <li class="nav__item">
        <a href="#${nav.link}" class="nav__link active-link">
            <i class="uil ${nav.iconClass} nav-icon"></i>
           ${nav.name}
        </a>
    </li>
        `;
    })
    $('#nav-list').innerHTML=navList.join('');

}

const renderHome = () =>{
    const home = `
    <div class="home_container container grid">
    <div class="home__content grid">
        <div class="home__social" id="home-social">
           
        </div>

        <div class="home_img">
            <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                </mask>
                <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                    
                    <image class="home__blob-img" x='12' y='18' xlink:href="assets/img/perfil.png"/>
                </g>
            </svg>
        </div>

        <div class="home__data">
            <h1 class="home__title"><span class="home__title-text">Hi, my name is</span><br> <strong class="vanthinhtran">Van Thinh Tran</strong> </h1>
            <h3 class="home__subtitle">And I'am a <span class="type_home home__subtitle"></span></h3>
            <p class="home__description">
                <span class="type_home_description home__description"></span>
            </p>
            <a href="" class="button button--flex button__shadow">                            
                Follow Me 
                <i class="uil uil-message button__icon"></i>
            </a>
        </div>
    </div>

    <div class="home__scroll">
        <a href="" class="home__scroll-button button--flex">
            <i class="uil uil-mouse-alt home__scroll-mouse"></i>
            <span class="home__scroll-name">
                Scroll down
            </span>
            <i class="uil uil-angle-double-down home__scroll-arrow"></i>
        </a>
    </div>
</div>
    `
    
    $('#home').innerHTML= home;
}

const renderHomeHomeSocial = () =>{
    const Social = app.HomeSocial.map((social,index) =>{
        return `
        <a href="${social.link}" target="_blank" class="home__social-icon">
        <i class="uil ${social.iconClass}"></i>
        </a>
        `;
    })
    $('#home-social').innerHTML= Social.join('');
}

 const renderAboutMe = () =>{
    const about= app.aboutme.map((a,index)=>{
        return `
        <img src="${a.image}" alt="" class="about__img">
                <div class="about__data">
                    <p class="about__description">
                        ${a.description}
                    </p>
                    <div class="about__info">
                        <div>
                            <span class="about__info-title">
                                0+
                            </span>
                            <span class="about__info-name">
                                Years <br> experience
                            </span>
                        </div>
                        <div>
                            <span class="about__info-title">
                                10+
                            </span>
                            <span class="about__info-name">
                            Personal <br> project
                            </span>
                        </div>
                        <div>
                            <span class="about__info-title">
                                0+
                            </span>
                            <span class="about__info-name">
                                Companies <br> worked
                            </span>
                        </div>
                    </div>
                    <div class="about__buttons">
                        <a href="${a.cv}" download="" class="button button--flex button__shadow">
                          Download CV  <i class="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
        `;
    });

 $('#about_container').innerHTML = about.join('');
}

const renderSkills = () =>{
    const skill = app.skills.map((s,index) =>{
        
        return `
        <div class="skills__content skills__close">
            <div class="skills__header">
                <i class="uil uil-brackets-curly skills__icon"></i>

                <div>
                    <h1 class="skills__title">${s.SkillName}</h1>
                    <span class="skills__subtitle">${s.SkillName}</span>
                </div>

                <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">
                <div class="skills__data">
                    <div class="skills__title">
                        <h3 class="skills__name">${s.skill1}</h3>
                        <span class="skills__number">${s.num1}</span>
                    </div>
                    <div class="skills__bar">
                        <div class="skills__percentage skills__html">
                        </div>
                    </div>
                    <div class="skills__data">
                        <div class="skills__title">
                            <h3 class="skills__name">${s.skill2}</h3>
                            <span class="skills__number">${s.num2}</span>
                        </div>
                        <div class="skills__bar">
                            <div class="skills__percentage skills__css">
                                
                            </div>
                        </div>
                    </div>
                    <div class="skills__data">
                        <div class="skills__title">
                            <h3 class="skills__name">${s.skill3}</h3>
                            <span class="skills__number">${s.num3}</span>
                        </div>
                        <div class="skills__bar">
                            <div class="skills__percentage skills__js">
                                
                            </div>
                        </div>
                    </div>
                    <div class="skills__data">
                        <div class="skills__title">
                            <h3 class="skills__name">${s.skill4}</h3>
                            <span class="skills__number">${s.num4}</span>
                        </div>
                        <div class="skills__bar">
                            <div class="skills__percentage skills__react">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    })
    $('#skills-tabs').innerHTML = skill.join('');
    console.log(skill)
}

const renderServer = () =>{
    const services = app.services.map(service =>{
        return`
        <div class="services__content">
                    <div>
                        <i class="uil uil-window-grid services__icon"></i>
                        <h3 class="services__title">
                        ${service.name}
                        </h3>
                    </div>
                    <span class="button button--flex button--small button--link services__button">
                        View More
                        <i class="uil uil-arrow-right"></i>
                    </span>

                    <div class="services__modal">
                        <div class="services__modal-content">
                            <h4 class="services__modal-title">${service.name}</h4>
                            <i class="uil uil-times-circle services__modal-close"></i>
                            
                            <ul class="servires__modal-services grid" id="services-ul">
                                <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>${service.modal1}</p>
                                </li>
                                <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>${service.modal2}</p>
                                </li>
                                <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>${service.modal3}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        `;
    })



    $('#services-render').innerHTML = services.join('');
}

const renderqualification = () =>{
    const quality =`
    <h2 class="section__title"> Qualification</h2>
    <span class="section__subtitle">My personal journey</span>

    <div class="qualification__container container">
        <div class="qualification__tabs">
            <div class="qualification__button button--flex qualification__active" data-target="#education">
                <i class="uil uil-graduation-cap  qualification__icon"></i>
                Education
            </div>
            <div class="qualification__button button--flex" data-target='#work'>
                <i class="uil uil-wall qualification__icon"></i>
                Work
            </div>
        </div>
        <div class="qualification__sections">
            <!--==================== QUALIFICATION CONTENT EDUCATION====================-->
            <div id="education" class="qualification__content qualification__active " data-content>
            </div>
            <!--==================== QUALIFICATION CONTENT  WORK====================-->
            <div id="work" class="qualification__content " data-content>
            </div>
        </div>
    </div>
    `;
    $('#qualification').innerHTML = quality;
}
const renderqualificationData_Education = () =>{
    const education = `
    <div class="qualification__data">
                            <div>
                                <h3 class="qualification__title">Software Engineering</h3>
                                <span class="qualification__subtitle">CTU University</span>
                                <div class="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i>
                                    2019 - 2023
                                </div>
                            </div>
                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>
                        </div>
                        <!--====================================-->
                        <div class="qualification__data">
                            <div></div>
                            <div>
                                <span class="qualification__rounder"></span>
                                <!-- <span class="qualification__line"></span> -->
                            </div>
                            <div>
                                <h3 class="qualification__title">Frontend developer </h3>
                                <span class="qualification__subtitle">F8 Web</span>
                                <div class="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i>
                                        Now
                                </div>
                            </div>
                        </div>
    `;
    $('#education').innerHTML= education;
}

const renderqualificationData_Word = () =>{
    const work =`
    <div class="qualification__data">
    <div>
        <h3 class="qualification__title">NULL</h3>
        <span class="qualification__subtitle">NULL</span>
        <div class="qualification__calender">
            <i class="uil uil-calendar-alt"></i>
            2019 - 2023
        </div>
    </div>

    <div>
        <span class="qualification__rounder"></span>
        <span class="qualification__line"></span>
    </div>
</div>
    `;
$('#work').innerHTML= work;
}

const renderPortfolio = () =>{
    const portHTML = `
    <h2 class="section__title">Portfolio</h2>
    <span class="section__subtitle">Most Recent Portfolio</span>

    <div class="portfolio__container container swiper-container">
        <div class="swiper-wrapper" id="render-portfolio">
            <!--==================== PORTFOLIO 1====================-->
        </div>
        <div class="swiper-button-next">
            <i class="uil uil-angle-right  swiper-portfolio-icon"></i>
        </div>
        <div class="swiper-button-prev">
            <i class="uil uil-angle-left swiper-portfolio-icon"></i>
        </div>
        <div class="swiper-pagination">
        </div>
    </div>
    `;

    $('#portfolio').innerHTML = portHTML;
}
const renderPortfolioSwiper = () =>{
    const port = app.portfolio.map((p,index)=>{
        return`
        <!--==================== PORTFOLIO 3====================-->
        <div class="portfolio__content grid swiper-slide">
            <img src="${p.image}" alt="" class="portfolio__img">

            <div class="portfolio__data">
                <h3 class="portfolio__title">${p.nameProject}</h3>
                <p class="portfolio__description">
                    ${p.description}
                </p>
                <a href="${p.linkDemo}" target="_blank"  class="button button--flex button--small portfolio__button">
                    DEMO
                    <i class="uil uil-location-arrow button__icon"></i>
                </a>
            </div>
        </div>
        `;
    });
    $('#render-portfolio').innerHTML= port.join('');

}

const renderProject = () =>{
    const project = app.project.map((pro,index)=>{
        return `
        <div class="project__bg">
        <div class="project__container container grid">
            <div class="project__data">
                <h2 class="project__title">${pro.title}</h2>
                <p class="project__description">
                ${pro.description}
                </p>
                <a href="${pro.link}" target="_blank" class="button button--flex button--white">
                    Contact me
                    <i class="uil uil-navigator project__icon button__icon"></i>
                </a>
            </div>
            <img src="${pro.image}" alt="" class="project__img">
        </div>
    </div>
        `;
    })
    $('#project').innerHTML = project.join('');
}

const renderFooter = ()=>{
  const footer = `
  <div class="footer__container ">
  <ul class="footer__list" id="footer-list">
  </ul>
</div>
<div class="footer__container">
<p class="footer__copyright">Copyright &copy; 2022 Thinhne.io</p>
</div>
  `
  $('#footer').innerHTML=footer;
}

const renderFooterList = () =>{
    const footerList = app.footer.map((f, index)=>{
        return `
        <li class="footer__tag">
          <a href="${f.link}" target="_blank" class=" footer__button">
                <i class="uil ${f.iconClass} button__icon"></i>
          </a>
      </li>
        `;
    })
    $('#footer-list').innerHTML= footerList.join('');
}



function main(){
    //load interface header and menu
    renderHeader();
    renderHeaderNavList();

    //home page
    renderHome();
    renderHomeHomeSocial();
    //about
    renderAboutMe();

    renderSkills();

    // services
    renderServer();
    //renderServerModal();

    renderPortfolio();
    renderPortfolioSwiper();

    renderqualification();
    renderqualificationData_Education();
    renderqualificationData_Word()
    // PROJECT IN MIND
    renderProject();

    //load UI Footer
    renderFooter();
    renderFooterList();
 }
 main()

 var typed = new Typed(".type_home", {
    strings: ["Frontend Developer", "Blogger", "..."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".type_home_description", {
    strings: [" High level experience in web design and development knowledge, producing quality work."
    ],
    typeSpeed: 15,
    backSpeed: 15,
    loop: false
});

setInterval(()=>{
$('.project__container').classList.toggle('box__shadow');
},1000);

setInterval(()=>{
$('.vanthinhtran').classList.toggle('blue');
setInterval(()=>{
    $('.vanthinhtran').classList.toggle('red');
    setInterval(()=>{
        $('.vanthinhtran').classList.toggle('green');
        },1000)
    },1000)
},1000)
