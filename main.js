let bars = document.querySelector('.fa-solid')
bars.onclick = ()=>{
        bars.classList.toggle('fa-x')
        bars.classList.toggle('fa-bars')
        document.querySelector('header').classList.toggle('active')
}
let links = document.querySelectorAll('header .links a')

function select(i){
        for(let k = 0 ; k < links.length ; k++)
                links[k].classList.remove('select')
         links[i].classList.add('select')
         bars.click()
}
const skills = ['Html' , 'css' , 'JavaScript' , 'Tailwind Css' , 'Api Testing : Postman']
function createSkill(skill){
        let span = document.createElement('span')
        span.innerHTML = skill;
        span.className = 'skill'
        return span
}
let skkillsEle = document.getElementById('skills')
skills.forEach(skill => skkillsEle.appendChild(createSkill(skill)))

const projects = document.querySelector('.projects')
const projectsItems = [
        {
          projectName : 'Shoes Store',
          projectPic : 'https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/clc87lfgi00mnp6y0uynfby7j_4/public',
          url : 'https://66be53aa9cb5a32c8a653c6c--dazzling-lamington-a808a5.netlify.app/',
          gitUrl : 'https://github.com/Akchiche-Mohamed-Aymen/E-commerce'
        },
        {
          projectName : 'Social Media Website',
          projectPic : 'https://th.bing.com/th/id/OIP.Dgn0XGiWk4K8Yc5NpOgUqAHaEn?w=867&h=540&rs=1&pid=ImgDetMain',
          url : 'https://66b8ca53fdff5862d73d45b8--elaborate-centaur-ce2a86.netlify.app/',
          gitUrl : 'https://github.com/Akchiche-Mohamed-Aymen/social-media-website'
        },
        {
          projectName : 'My Tasks',
          projectPic : 'https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif',
          url : 'https://66bf6a123f837a487ec50f2b--gleeful-griffin-09ff7f.netlify.app/',
          gitUrl : 'https://github.com/Akchiche-Mohamed-Aymen/myTasks'
        },
        {
          projectName : 'Tic-Tac-Toe game',
          projectPic : 'https://play-lh.googleusercontent.com/53GO3FXWzR78OwoEY9fYJU06Pbp9pgc40k6JLMSq9qeJ-4OWZNNbrUru-SzkQY4s1A',
          url :'https://66bfa9514e548995928cee87--brilliant-klepon-3cf69a.netlify.app/',
          gitUrl : 'https://github.com/Akchiche-Mohamed-Aymen/PRODIGY_WD_03'
        },
        {
          projectName : 'Stop Watch',
          projectPic : 'https://th.bing.com/th/id/OIP.xNmNF2olysMh0cA-yaUSagHaE5?rs=1&pid=ImgDetMain',
          url :'https://66c473176a737605061a0979--fluffy-sunflower-893096.netlify.app/',
          gitUrl : 'https://github.com/Akchiche-Mohamed-Aymen/PRODIGY_WD_02.'
        },
]
function createlink(project , className = ''  , content = 'Github Link')
{
        let a = document.createElement('a')
        if(className){
                a.className = className;
                a.style.backgroundImage = `url(${project.projectPic})`;
        }
        a.innerHTML = content;
        a.href = content=== 'Github Link' ?project.gitUrl : project.url;
        return a;
}
function createProject(project){
        let div = document.createElement('div')
        div.className = 'project'
        div.appendChild(createlink(project , 'url',project.projectName))
        div.appendChild(createlink(project))
        return div
}
projectsItems.forEach(project =>projects.appendChild(createProject(project)))