export const data = {
    en: {
        header:{
            theme:"Dark Mode",
            language:"Switch to Turkish",
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
                    logo:"/images/github_image.png",
                    text:"Github",
                    link:""
                },
                {
                    logo:"/images/linkedin_image.png",
                    text:"Linkedin",
                    link:""
                },
        ],
            profileImage:"/images/profile_image.png",

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
                "Preferred Role": "Frontend, UI" 
            },
            aboutMe: 
                {
                    title: "About Me",
                    info: "I'm Ece, a graduate of the Department of Architecture at İzmir Institute of Technology. In November 2024, I transitioned to software development by joining the Workintech Software Course. I successfully completed the frontend track of their Full Stack Program, gaining practical experience with JavaScript, HTML, CSS, and React. The projects I worked on enhanced both my technical skills and my problem-solving abilities."
                }
            
        },
        projectsSection: {
            title: "Projects",
            projects: [
                {
                    img:"/images/pizza_image.png",
                    name:"Pizza",
                    info:"This application, developed with React, allows users to place pizza orders. The order form sends data to an API via Axios, and the order summary is displayed with the response. Data is passed between pages using React state lifting, and tests are conducted with Cypress.",
                    programs: ["react", "redux", "axios" ],
                    links:{"Github":"https://github.com/EceYaman/pizza-project" , "View Site":"https://pizza-project-xi-self.vercel.app/"}
                },
                {
                    img:"/images/witflix_image.png",
                    name:"WitFlix",
                    info:"Witflix, developed using HTML and CSS, is a video streaming platform design where users can discover movies and TV series. The homepage features content recommendations and clickable movie cards, offering a sleek user experience. ",
                    programs: ["html", "css" ],
                    links:{"Github":"https://github.com/EceYaman/WitFlix" , "View Site":"https://wit-flix-nine.vercel.app/"}
                },
                {
                    img:"/images/reduxFilm_image.png",
                    name:"Redux Film",
                    info:"I developed an application using React and Redux that allows users to view a list of movies and add or remove their favorite films. With centralized state management using Redux, movie data is fetched from an API, and favorite films are updated based on user preferences.",
                    programs: ["react", "redux", "axios" ],
                    links:{"Github":"https://github.com/EceYaman/fsweb-s10g2-redux-filmler-solution" , "View Site":"https://fsweb-s10g2-redux-filmler-solution-gamma-pied.vercel.app/movies"}
                },
            ]

        },
        footer: {
            text: "Let's work together on your next product",
            mail:"eceymn35@gmail.com",
            link1:"Personal Blog",
            link2:"Github",
            lin3:"Linkedin"
        }
    },


    tr: {
        header: {
            theme: "Karanlık Mod",
            language: "İngilizceye Geç",
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
                    logo:"/images/github_image.png",
                    text:"Github",
                    link:""
                },
                {
                    logo:"/images/linkedin_image.png",
                    text:"Linkedin",
                    link:""
                },
            ],
            profileImage: "/images/profile_image.png",
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
                "Tercih Edilen Rol": "Frontend, UI" 
            },
            aboutMe: {
                title: "Hakkımda",
                info: "Ben Ece, İzmir Yüksek Teknoloji Enstitüsü Mimarlık Bölümü mezunuyum. Kasım 2024'te yazılım geliştirme alanına geçiş yaparak Workintech Yazılım Kursu'na katıldım. Full Stack Programı'nın frontend kısmını başarıyla tamamlayarak JavaScript, HTML, CSS ve React gibi teknolojilerle pratik deneyim kazandım. Üzerinde çalıştığım projeler, hem teknik becerilerimi hem de problem çözme yeteneklerimi geliştirdi."
            }
        },
        projectsSection: {
            title: "Projeler",
            projects: [
                {
                    img: "/images/pizza_image.png",
                    name: "Pizza",
                    info: "React ile geliştirdiğim bu uygulama, kullanıcıların pizza siparişi verebileceği bir platform sunuyor. Sipariş formu, Axios ile API'ye veri gönderiyor, gelen yanıtla sipariş özeti gösteriliyor. React state lifting yöntemiyle veriler sayfalar arasında aktarılıyor ve Cypress ile testler yapıldı.",
                    programs: ["react", "redux", "axios" ],
                    links:{"Github":"https://github.com/EceYaman/pizza-project" , "View Site":"https://pizza-project-xi-self.vercel.app/"}
                },
                {
                    img: "/images/witflix_image.png",
                    name: "WitFlix",
                    info: "HTML ve CSS kullanarak geliştirdiğim Witflix, kullanıcıların film ve dizi içeriklerini keşfedebileceği bir video akış platformu tasarımıdır. Ana sayfada içerik önerileri ve tıklanabilir film kartları ile şık bir kullanıcı deneyimi sunulmuştur.",
                    programs: ["html", "css", ],
                    links:{"Github":"https://github.com/EceYaman/WitFlix" , "View Site":"https://wit-flix-nine.vercel.app/"}
                },
                {
                    img: "/images/reduxFilm_image.png",
                    name: "Redux Film",
                    info: "React ve redux kullanarak, kullanıcıların film listelerini görüntüleyip favori filmlerini ekleyip çıkarabileceği bir uygulama geliştirdim. Redux ile merkezi durum yönetimi sağlanarak, film verileri API’den çekilmekte ve favori filmler kullanıcının tercihlerine göre güncellenmektedir. ",
                    programs: ["react", "redux", "axios" ],
                    links:{"Github":"https://github.com/EceYaman/fsweb-s10g2-redux-filmler-solution" , "View Site":"https://fsweb-s10g2-redux-filmler-solution-gamma-pied.vercel.app/movies/"}
                },
            ]
        },
        footer: {
            text: "Bir sonraki ürününüz üzerinde birlikte çalışalım",
            mail: "eceymn35@gmail.com",
            link1: "Kişisel Blog",
            link2: "Github",
            lin3: "Linkedin"
        }
    },
    
}

