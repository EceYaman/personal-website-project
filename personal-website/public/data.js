export const data = {
    en: {
        header:{
            theme:["DARK MODE", "LIGHT MODE" ],
            language:"TÜRKÇE",
            nav: [
                { a: "Skills", link: "#skills" },
                { a: "Projects", link: "#projects" },
                { a: "Hire Me", link: "#hireme" },
              ],
        },
        heroSection: {
            name:"Ece Yaman",
            title:"Creative thinker Minimalism lover",
            intro:"Hi, I'm Ece. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
            socials:[
                {
                    text:"Hire Me",
                    link:""
                },
                {
                    logo:"/public/images/github_image.png",
                    logoDark:"/public/images/github_2_image.png",
                    text:"Github",
                    link:"https://github.com/EceYaman"
                },
                {
                    logo:"/public/images/linkedin_image.png",
                    logoDark:"/public/images/linkedin_2_image.png",
                    text:"Linkedin",
                    link:"https://www.linkedin.com/in/ece-yaman-a7981b21a/"
                },
        ],
            profileImage:"/public/images/profile_image.png",

        },
        skillsSection: {
            title:"Skills",
            skills: [
                {
                    name: "Java Script",
                    info: "JavaScript is a programming language used to create dynamic web pages, running in web browsers. It is a fundamental tool for tasks like user interaction and data processing."
                
                },
                {
                    name: "React.Js",
                    info: "React.js is an open-source JavaScript library developed by Facebook for building user interfaces. Its component-based structure makes it efficient for creating complex applications."
                
                },
                {
                    name: "HTML",
                    info: "HTML is a markup language used to structure web pages, organizing text, images, and other content. It defines the basic structure of a webpage and ensures proper display in browsers."
                
                },
            ]

        },
        profileSection: {
            title:"Profile",
            profile: {
                "Date of Birth": "01.03.2000" ,
                "City": "Izmir" ,
                "Education":"Workintech",
                "Preferred Role": "Frontend" 
            },
            aboutMe: 
                {
                    title: "About Me",
                    info1: "After earning my degree in Architecture, I decided to pursue coding. In November 2024, I joined the Workintech Software Course and completed the frontend track in February 2025. ",
                    info2: "Through hands-on projects during my frontend training, I developed strong technical and problem-solving skills. I’m eager to contribute to tech!"
                }
            
        },
        projectsSection: {
            title: "Projects",
            projects: [
                {
                    img:"/public/images/pizza_image.png",
                    name:"Pizza",
                    info:"This application, developed with React, allows users to place pizza orders. The order form sends data to an API via Axios, and the order summary is displayed with the response. Data is passed between pages using React state lifting, and tests are conducted with Cypress.",
                    programs: ["react", "redux", "axios" ],
                    links:{"Github":"https://github.com/EceYaman/pizza-project" , "View Site":"https://pizza-project-xi-self.vercel.app/"}
                },
                {
                    img:"/public/images/witflix_image.png",
                    name:"WitFlix",
                    info:"Witflix, developed using HTML and CSS, is a video streaming platform design where users can discover movies and TV series. The homepage features content recommendations and clickable movie cards, offering a sleek user experience. ",
                    programs: ["html", "css" ],
                    links:{"Github":"https://github.com/EceYaman/WitFlix" , "View Site":"https://wit-flix-nine.vercel.app/"}
                },
                {
                    img:"/public/images/movielist_image.png",
                    name:"Redux Watchlist",
                    info:"I developed an application using React and Redux that allows users to view movies and add or remove their favorite movies from their list. By using Redux for state management, the movie data is fetched from an API and the list is updated based on the user's preferences.",
                    programs: ["react", "redux", "axios" ],
                    links:{"Github":"https://github.com/Workintech/fsweb-s10g3-redux-watchlist-solution" , "View Site":"https://fsweb-s10g3-redux-watchlist-solution-lac.vercel.app/"}
                },
            ]

        },
        footer: {
            title: "Let's work together on your next product",
            icon:"/public/images/hand_icon_image.png",
            mail:"eceymn35@gmail.com",
            links: [
                { name: "Personal Blog", url: "https://www.example.com", color: "text-textDark", colorDark:"text-primary2" },
                { name: "Github", url: "https://github.com/EceYaman", color: "text-successGreen", colorDark:"text-successGreen2" },
                { name: "Linkedin", url: "https://www.linkedin.com/in/ece-yaman-a7981b21a", color: "text-linkBlue", colorDark: "text-linkBlue2" }
              ]
        }
    },


    tr: {
        header: {
            theme: ["KOYU MOD", "AÇIK MOD"],
            language: "ENGLISH",
            nav: [
                { a: "Yetenekler", link: "#skills" },
                { a: "Projeler", link: "#projects" },
                { a: "Beni İşe Al", link: "#hireme" },
            ],
        },
        heroSection: {
            name: "Ece Yaman",
            title: "Yaratıcı Düşünür Minimalizm Aşığı",
            intro: "Merhaba, ben Ece. Ben bir full-stack geliştiriciyim. Eğer sağlam ve ölçeklenebilir frontend ürünleri geliştirebilen bir geliştirici arıyorsanız, beni işe alın.",
            socials: [
                {
                    text: "Beni İşe Al",
                    link: ""
                },
                {
                    logo:"/public/images/github_image.png",
                    logoDark:"/public/images/github_2_image.png",
                    text:"Github",
                    link:"https://github.com/EceYaman"
                },
                {
                    logo:"/public/images/linkedin_image.png",
                    logoDark:"/public/images/linkedin_2_image.png",
                    text:"Linkedin",
                    link:"https://www.linkedin.com/in/ece-yaman-a7981b21a/"
                },
            ],
            profileImage: "/public/images/profile_image.png",
        },
        skillsSection: {
            title: "Yetenekler",
            skills: [
                {
                    name: "Java Script",
                    info: "Dinamik web sayfaları oluşturmak için kullanılan, web tarayıcılarında çalışan bir programlama dilidir. Kullanıcı etkileşimi ve veri işleme gibi işlemleri gerçekleştirmek için temel araçtır."
                },
                {
                    name: "React.Js",
                    info: "Facebook tarafından geliştirilmiş, kullanıcı arayüzleri oluşturmak için kullanılan açık kaynaklı bir JavaScript kütüphanesidir. Bileşen tabanlı yapısı sayesinde, karmaşık uygulamaları daha verimli ve sürdürülebilir şekilde geliştirmeye olanak tanır."
                },
                {
                    name: "HTML",
                    info: "Web sayfalarını yapılandırmak için kullanılan, metin, görsel, bağlantı gibi içerikleri düzenleyen bir işaretleme dilidir. Web sayfasının temel yapısını belirler ve tarayıcıların içeriği doğru şekilde görüntülemesini sağlar."
                },
            ]
        },
        profileSection: {
            title: "Profil",
            profile: {
                "Doğum Tarihi": "01.03.2000" ,
                "Şehir": "İzmir" ,
                "Eğitim":"Workintech",
                "Tercih Edilen Rol": "Frontend" 
            },
            aboutMe: {
                title: "Hakkımda",
                info1: "Mimarlıktan mezun olduktan sonra kodlamaya yönelmeye karar verdim. Kasım 2024'te Workintech Yazılım Kursuna katıldım ve Şubat 2025'te front-end bölümünü tamamladım.",
                info2: "Front-end eğitimim sırasında uygulamalı projeler aracılığıyla güçlü teknik ve problem çözme becerileri geliştirdim. Teknolojiye katkıda bulunmak için can atıyorum!"
            }
        },
        projectsSection: {
            title: "Projeler",
            projects: [
                {
                    img: "/public/images/pizza_image.png",
                    name: "Pizza",
                    info: "React ile geliştirdiğim bu uygulama, kullanıcıların pizza siparişi verebileceği bir platform sunuyor. Sipariş formu, Axios ile API'ye veri gönderiyor, gelen yanıtla sipariş özeti gösteriliyor. React state lifting yöntemiyle veriler sayfalar arasında aktarılıyor ve Cypress ile testler yapıldı.",
                    programs: ["react", "redux", "axios" ],
                    links:{"Github":"https://github.com/EceYaman/pizza-project" , "Siteyi Gör":"https://pizza-project-xi-self.vercel.app/"}
                },
                {
                    img: "/public/images/witflix_image.png",
                    name: "WitFlix",
                    info: "HTML ve CSS kullanarak geliştirdiğim Witflix, kullanıcıların film ve dizi içeriklerini keşfedebileceği bir video akış platformu tasarımıdır. Ana sayfada içerik önerileri ve tıklanabilir film kartları ile şık bir kullanıcı deneyimi sunulmuştur.",
                    programs: ["html", "css", ],
                    links:{"Github":"https://github.com/EceYaman/WitFlix" , "Siteyi Gör":"https://wit-flix-nine.vercel.app/"}
                },
                {
                    img: "/public/images/movielist_image.png",
                    name: "Redux Watchlist",
                    info: "React ve Redux kullanarak, kullanıcıların filmleri görüntüleyip beğendikleri filmleri listelerine ekleyip çıkarabildikleri bir uygulama geliştirdim. Redux ile merkezi durum yönetimi sağlayarak, film verilerini API’den çekiyor ve kullanıcıların tercihlerine göre listeyi güncelliyorum.",
                    programs: ["react", "redux", "axios" ],
                    links:{"Github":"https://github.com/Workintech/fsweb-s10g3-redux-watchlist-solution" , "Siteyi Gör":"https://fsweb-s10g3-redux-watchlist-solution-lac.vercel.app/"}
                },
            ]
        },
        footer: {
            title: "Bir sonraki ürününüz üzerinde birlikte çalışalım",
            icon:"/public/images/hand_icon_image.png",
            mail: "eceymn35@gmail.com",
            links: [
                { name: "Kişisel Blog", url: "https://www.example.com",},
                { name: "Github", url: "https://github.com/EceYaman",},
                { name: "Linkedin", url: "https://www.linkedin.com/in/ece-yaman-a7981b21a", }
              ]
        }
    },
    
}

