const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app ={
    navList:[
        {
            name: 'Home',
            link:'home',
            iconClass:'uil-estate'
        },
        {
            name: 'About',
            link:'about',
            iconClass:'uil-airplay'
        },
        {
            name: 'Skills',
            link:'skills',
            iconClass:'uil-emoji'
        },
        {
            name: 'Services',
            link:'services',
            iconClass:'uil-bag-alt'
        },
        {
            name: 'Portfolio',
            link:'portlofio',
            iconClass:'uil-capture'
        },
        {
            name: 'Contact',
            link:'contact',
            iconClass:'uil-comment-alt-heart'
        },
        
    ],
    HomeSocial:[
        {
            name: '',
            iconClass:'uil-facebook-f',
            link:'https://www.facebook.com/ooothinhooo.io/',
        },
        {
            name: '',
            iconClass:'uil-instagram',
            link:'https://www.instagram.com/ooo.thinh.ooo/',
        },
        {
            name: 'https://github.com/ooothinhooo',
            iconClass:'uil-github',
            link:'',
        },
        {
            name: '',
            iconClass:'uil-phone',
            link:'./asset/html/phone.html',
        },
    ],
    aboutme:[
        {
            description:'Web developer, mới nhú đang học hỏi và phát triển bản thân.',
            image:'/assets/img/perfil.png',
            cv:'/assets/pdf/TranVanThinh_CV.pdf',


        }
    ],
    skills:[
        {
            SkillName: 'Frontend Developer',
            experience:'Remote',
            skill1:'HTML',
            num1:'90',
            skillsBar:'html',
            skill2:'CSS',
            num2:'90',
            skill3:'JavaScripts',
            num3:'80',
            skill4:'JQuery',
            num4:'80',
        },
        {
            SkillName: 'Other',
            experience:'Remote',
            skill1:'Git',
            num1:'60',
            skill2:'Java Swing',
            num2:'60',
            skill3:'MongoDB',
            num3:'60',
            skill4:'RESTful API',
            num4:'60',
        }
    ],
    // id = services-render
    services:[
        {
            name: 'Frontend Developer',
            modal1:'HTML',
            modal2:'CSS/SCSS',
            modal3:'JavaScipts/ReactJS',
        },
        {
            name: 'UI/UX',
            modal1:'CanVa',
            modal2:'Figma',
            modal3:'...'
        }
    ],
    project:[
        {
            title: 'You Have A New Project',
            description: ' Contact me now and get a 30% discount on your new project.',
            image: './assets/img/project.png',
            link: '#contact'
        }
    ],
    portfolio: [
        {
            nameProject:'Red List API',
            description:'Dự án xây dựng bằng Node Exprees Vue and MongoDB, dự án call API từ bên ngoài hiện thị danh sách động vật thuộc danh sách đỏ và có thể thêm động vật mới vào danh sách',
            image:'./assets/img/portfolio/redlist.png',
            linkDemo:'https://iucnredlist.herokuapp.com/'
        },
        {
            nameProject:'Sneakers Shop Web',
            description:'Sữ dụng HTML CSS and JavaScript, dữ án làm lúc học môn nhập môn web nên chưa cải tiến. Dự án tạo mô hình như một website bán hàng nhưng chưa đầy đủ chức năng',
            image:'./assets/img/portfolio/sneakershop.png',
            linkDemo:'https://ooothinhooo.github.io/sneakers-shop/'
        },
        {
            nameProject:'Find Color Game',
            description:'Game Find Color bạn sẽ bắt đầu đi tiềm kiếm 1 ô màu khác với các ô còn lại các bạn chỉ có 1phút 30 để có thể tiềm kiếm điểm số. Dự án làm với HTML CSS và JavaScript, dự án sẽ cố gắng phát triển thêm hii....',
            image:'./assets/img/portfolio/findColor.png',
            linkDemo:'https://ooothinhooo.github.io/colorGame/'
        },
        {
            nameProject:'Máy Tính App Application',
            description:'Thì App này cũn giống cái máy tính vậy á',
            image:'./assets/img/portfolio/maytinh.png',
            linkDemo:'https://ooothinhooo.github.io/maytinhbotrongquan/'
        },
        {
            nameProject:'Pressed Any Key',
            description:'Còn App này thì để kiểm tra mã ASCII của từng phím và cũng có thể kiểm tra các phím bấm của bạn vẫn còn hoạt động ổn không',
            image:'./assets/img/portfolio/keyLocation.png',
            linkDemo:'https://ooothinhooo.github.io/Detect-Pressed-Key/'
        },
        {
            nameProject:'Ramdom Color Web Application',
            description:'Nếu bạn bí màu trong thiết kế của bạn thì nó sẽ tự động Random ra 2 màu và hoà trộn lại với nhau. Đây là app nền tảng mà tui đã build lên cái game find color ở trên.',
            image:'./assets/img/portfolio/randomColor.png',
            linkDemo:'https://ooothinhooo.github.io/Ramdom-Color/'
        },
    ],
    footer:[
        {
            link:'https://www.facebook.com/ooothinhooo.io/',
            iconClass:'uil-facebook-f'
        },
        {
            link:'https://www.instagram.com/ooo.thinh.ooo/',
            iconClass:'uil-instagram-alt'
        },
        {
            link:'https://github.com/ooothinhooo',
            iconClass:'uil-github-alt'
        },
        {
            link:'ooothinhooo154@gmail.com',
            iconClass:'uil-envelope-check'
        },
        {
            link:'#phone',
            iconClass:'uil-phone'
        }
    ]
}