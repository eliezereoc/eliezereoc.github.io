# eliezereoc.github.io
Meu Portifólio 

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Portfólio - Eliézer</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <!-- <nav>
            <a href=#about>Sobre mim</a>
            <a href=#job-exp>Experiência de trabalho</a>
            <a href=#education>Início</a>
            <a href=#footer>Contato</a>
        </nav> -->
        <div class="topnav" id="myTopnav">
            <a href="#" class="active">Início</a>
            <a href=#about>Sobre mim</a>
            <a href=#job-exp>Experiência de trabalho</a>
            <a href=#education>Formação</a>
            <a href=#footer>Contato</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    </header>
    <main>
        <h1 id="main-title">Meu Portfólio</h1>
        <section id="about">
            <img alt="Foto de perfil de Rafaela" id="about__photo" src="/src/img/minhafoto.png">
            <div id="about__text-cnt">
                <h2>Sobre mim</h2>
                <p>Sempre tive aptidão para tecnologia, estou na área a 12 anos.
                    Sou formado em Análise e Desenvolvimento de Sistemas e Técnico em Eletrônica.
                    Ao longo da minha carreira realizei vários cursos para expandir e atualizar meus conhecimentos.
                    Sou desenvolvedor Full stack e projetista de hardware e software para dispositivos micro
                    controlados.
                    Atualmente sou projetista de hardware e software na Healt Safe.
                </p>
            </div>
        </section>
        <section id="quote">
            <cite id="quote__cite">"Os ideais que iluminaram o meu caminho são a bondade, a beleza e a verdade."</cite>
            <p id="quote__author">- Albert Einstein</p>
        </section>
        <section id="job-exp">
            <h2 id="job-exp__title">Experiência de Trabalho</h2>
            <div id="job-exp__experience">
                <div class="job-exp__jobs" id="job-exp__job1">
                    <img src="/src/img/hs.png" class="job-exp__company-logo" alt="logo da empresa Health Safe" />
                    <div>
                        <h3>Health Safe</h3>
                        <p> Projetista de Hardware e Softwares. <br>
                            Cofecção de documentação. <br>
                            Treinamento para implantação e manutenção.
                        </p>
                    </div>
                </div>
                <div class="job-exp__jobs" id="job-exp__job2">
                    <img src="/src/img/prisma.png" class="job-exp__company-logo"
                        alt="logo da Prisma Softwares de Gestão" />
                    <div>
                        <h3>Prisma Softwares de Gestão</h3>
                        <p> Analista de Suporte de Sistemas. <br>
                            Atendimento a clientes no apoio aos Softwares da Senior. <br>
                            Manutenção em customizações desenvolvidas em linugem Senior. <br>
                            Intalação e atualização do sistema Senior. <br>
                            Desenvolvimento de API utilizando NodeJs para integração de mensagens WhatsApp. <br>
                            Desenvolvimento de Front-End em Angular e versionamento.
                        </p>
                    </div>
                </div>
                <div class="job-exp__jobs" id="job-exp__job3">
                    <img src="/src/img/fortron.png" class="job-exp__company-logo" alt="logo da Fortron Agriculture" />
                    <div>
                        <h3>Fortron Agriculture</h3>
                        <p> Projetista de Hardware e Software. <br>
                            Desenvolvimento de aplicações Web e desktop. <br>
                            Desenvolvimento de gigas, manutenção e documentação. <br>
                        </p>
                    </div>
                </div>
                <div class="job-exp__jobs" id="job-exp__job4">
                    <img src="/src/img/coamo.png" class="job-exp__company-logo" alt="logo da Coamo" />
                    <div>
                        <h3>COAMO Agroindustrial Cooperativa</h3>
                        <p> Manutenção em equipamentos eletrônicos como termometrias,
                            analisadores de umidade e impureza, sistema de segurança e monitoramento,
                            controle de carga e fibra ótica.
                        </p>
                    </div>
                </div>
                <div class="job-exp__jobs" id="job-exp__job5">
                    <img src="/src/img/evolutec.png" class="job-exp__company-logo"
                        alt="logo da Evolutec Ind. e Com. de Eletrônicos" />
                    <div>
                        <h3>Evolutec Ind. e Com. de Eletrônicos</h3>
                        <p> Projetista de Hardware e Software. <br>
                            Prototipagem, manutenção, gigas, documentações. <br>
                            Aplicações desktop.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="skills">
            <h2>Habilidades</h2>
            <h3>Programação</h3>
            <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Angular</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>NodeJs</li>
                <li>C</li>
                <li>PHP</li>
                <li>SQL</li>
            </ul>
            <h3>Softwares</h3>
            <ul>
                <li>VSCode</li>
                <li>MPLab IDE/IPE</li>
                <li>Altium Designer</li>
                <li>CodeWarrior</li>
            </ul>
            <h3>Linguas Estrangeiras</h3>
            <ul>
                <li>Inglês - Básico</li>
            </ul>
        </section>
        <section id="education">
            <h2>Formação Acadêmica</h2>
            <h3>Unicesumar</h3>
            <ul>
                <li>Analise e Desenvolvimento de Sistemas</li>
            </ul>
            <h2>Formação Tecnica</h2>
            <h3>SENAI/PR</h3>
            <ul>
                <li>Tecnico em Eletrônica</li>
            </ul>
        </section>
        <section id="extracurricular">
            <h2>Atividades Complementares</h2>
            <h3>Cursos Extracurriculares</h3>
            <ul>
                <li>Angular 9</li>
                <li>Produtividade com VSCode</li>
                <li>Lorem Ipsun</li>
                <li>API Restful com NodeJs, Restify e MongoDB</li>
                <li>NodeJs</li>
                <li>TypeScript</li>
                <li>Web Moderno com JavaScript</li>
                <li>STM32CubeMX</li>
                <li>Gerenciamento de Projétos</li>
            </ul>
            <!-- <h3>Palestras e Eventos</h3>
            <ul>
                <li>Lorem Ipsun</li>
                <li>Lorem Ipsun</li>
                <li>Lorem Ipsun</li>
            </ul>
            <h3>Certificações</h3>
            <ul>
                <li>Lorem Ipsun</li>
                <li>Lorem Ipsun</li>
                <li>Lorem Ipsun</li>
            </ul> -->
        </section>
    </main>
    <footer id="footer">
        <div id="footer__social-medias">
            <a href="http://github.com/eliezereoc" target="_blank" rel="noopener noreferrer">
                <img class="footer__social-medias_icons" src="/src/img/github.png">
            </a>
            <a href="https://linkedin.com/in/eliezer-oliveira-cardoso-260354165" target="_blank"
                rel="noopener noreferrer">
                <img class="footer__social-medias_icons" src="/src/img/linkedin.png">
            </a>
            <a href="https://www.facebook.com/eliezer.oliveira.7731247" target="_blank" rel="noopener noreferrer">
                <img class="footer__social-medias_icons" src="/src/img/facebook.png">
            </a>
            <a href="https://www.instagram.com/eliezer_oc/" target="_blank" rel="noopener noreferrer">
                <img class="footer__social-medias_icons" src="/src/img/instagram.png">
            </a>
        </div>
        <div id="footer__email-phone">
            <p>Email: eliezeroc@gmail.com</p>
            <p>Telefone: +55 44 99933-2887</p>
        </div>
        <div id="footer__copyrights">
            <p>Eliezer
                <script>
                    document.write(new Date().getFullYear());
                </script>
                &copy; Todos os direitos reservados
            </p>
        </div>
    </footer>

    <script>
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    </script>
</body>

</html>
