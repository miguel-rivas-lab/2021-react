export const user = {
    name: "Miguel",
    lastName: "Rivas",
    location: "Washington DC",
    position: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/jesus-rivas-b43936184/",
    github: "https://github.com/jmiguelrivas",
    website: 'https://miguel-rivas.github.io',
  };
  
  const today = new Date();
  
  export const fullName = `${user.name} ${user.lastName}`;
  
  export const letter = [
    `I am <strong>${fullName}</strong> a ${user.position} living in ${user.location}.`,
    `I have 4 years in Dominican Republic working with <strong>Capital DBG</strong> (one of the most prestigious agency in Santo Domingo) and <strong>Pixel Perfect Tree</strong> building landing pages, animations and single page apps.`,
    `I have other ${today.getFullYear() - 2017} years working in the United States with clients like the Government of Maryland using <strong>Ruby on Rails</strong> and <strong>Vue</strong> as the main frameworks meeting <strong>508 compliance</strong>.`,
    `You can see some of my projects at <a href="https://miguel-rivas.github.io/">miguel-rivas.github.io</a>`,
    `Please do not hesitate to send me an email and ask me questions for any reason. looking forward to hearing from you. <strong>:)</strong>`,
  ];
  
  const tool = {
    html: "HTML",
    pug: "Pug",
    jade: "Pug",
    haml: "Haml",
    slim: "Slim",
    css: "CSS",
    sass: "SCSS",
    scss: "SCSS",
    less: "Less",
    unity: "Unity",
    rails: "Ruby on Rails",
    php: "PHP",
    python: "Python",
    javascript: "Javascript",
    vue: "Vue",
    angular: "Angular",
    react: "React",
    grunt: "GruntJs",
    three: "ThreeJS",
    jQuery: "jQuery",
    json: "JSON",
    miva: "Miva",
    bootstrap: "Bootstrap",
    git: "Git",
    flash: "Adobe Flash",
    illustrator: "Adobe Illustrator",
    photoshop: "Adobe Photoshop",
    indesign: "Adobe Indesign",
    afterEffects: "Adobe After Effects",
    premiere: "Adobe Premiere",
    inkscape: "Inkscape",
  };
  
  const role = {
    design: "Designer",
    frontend: "Frontend Developer",
    animation: "Animator",
  };
  
  const mode = {
    userFlow: "User Flow",
    wireFrame: "Wireframe",
    app: "Application",
    prototype: "Prototype",
    landingPage: "Landing Page",
    motionGraphics: "Motion Graphics",
    animation3D: "3D Animation",
    document: "Documentation",
    module: "Module",
  }
  
  const client = {
    presidente: "Cerveza Presidente",
    drLogic: "DrLogic",
    descubria: "Descubria",
    capitalDBG: "Capital DBG",
    miguelRivas: "Miguel Rivas",
    pepsi: "Pepsi",
    redRock: "Red Rock",
    itla: "ITLA",
    pixelPerfectTree: "Pixel Perfect Tree",
    bprBank: "BPR Bank",
    voxel: "Voxel Cube Games",
    orange: "Orange",
    apap: "APAP",
    enovational: "Enovational",
    socialNetwork: "Social Network",
  };
  
  const linkWeb = (item) => {
    return `https://miguel-rivas.github.io/${item}`;
  };

  const linkGithub = (item) => {
    return `https://github.com/miguel-rivas/${item}`;
  };

  const linkGithubDev = (item) => {
    return `https://github.com/miguel-rivas-lab/${item}-dev`;
  };

  const linkCodepen = (item) => {
    return `https://codepen.io/planetwurlex/pen/${item}`;
  };

  export const projects = [
    {
        date: "2014/06/16",
        title: "Destapa el Coro",
        type: mode.app,
        role: [
            role.frontend
        ],
        client: client.presidente,
        tools: [
            tool.html,
            tool.jQuery,
            tool.grunt,
            tool.css
        ],
        links: {
            web: [
                {url: linkWeb("presidente-destapa-coro"), text: "App"},
            ],
            github: linkGithub("presidente-destapa-coro"),
        },
    },
    {
        date: "2015/03/24",
        title: "BigPapi Selfie",
        type: mode.motionGraphics,
        role: [
            role.animation
        ],
        client: client.pepsi,
        tools: [
            tool.flash
        ],
        links: {
            vimeo: "https://vimeo.com/175240184",
        },
    },
    {
        date: "2015/04/18",
        title: "Carnaval Presidente 2015",
        linkDirect: false,
        type: mode.landingPage,
        role: [
            role.frontend
        ],
        client: client.presidente,
        tools: [
            tool.html,
            tool.jQuery,
            tool.grunt,
            tool.css,
            tool.php
        ],
        links: {
            web: [
                {url: linkWeb("presidente-carnaval-2015/filter.html"), text: "Filter"},
                {url: linkWeb("presidente-carnaval-2015/home.html"), text: "Home"},
            ],
            github: linkGithubDev("presidente-carnaval-2015"),
        },
    },
    {
        date: "2015/05/20",
        title: "Recarga Con RedRock",
        type: mode.motionGraphics,
        role: [
            role.animation
        ],
        client: client.redRock,
        tools: [
            tool.flash
        ],
        links: {
            vimeo: "https://vimeo.com/175240186",
        },
    },
    {
        date: "2015/10/23",
        title: "Retrobrindis",
        type: mode.app,
        role: [
            role.frontend
        ],
        client: client.presidente,
        tools: [
            tool.html,
            tool.css,
            tool.jQuery,
            tool.php
        ],
        links: {
            web: [
                {url: linkWeb("presidente-retro-brindis"), text: "App"},
            ],
            github: linkGithubDev("presidente-retro-brindis"),
        },
    },
    {
        date: "2015/11/12",
        title: "Mineriza a tu Familia",
        linkDirect: false,
        type: mode.app,
        role: [
            role.frontend
        ],
        client: client.apap,
        tools: [
            tool.pug,
            tool.jQuery,
            tool.css,
            tool.afterEffects,
            tool.premiere,
        ],
        links: {
            web: [
                {url: linkWeb("apap-mineriza-familia"), text: "App"},
            ],
            github: linkGithubDev("apap-mineriza-familia"),
            vimeo: "https://vimeo.com/211801157",
        },
    },
    {
        date: "2015/12/16",
        title: "Verano Presidente 2015",
        linkDirect: false,
        type: mode.prototype,
        role: [
            role.frontend
        ],
        client: client.presidente,
        tools: [
            tool.html,
            tool.jQuery,
            tool.css
        ],
        links: {
            web: [
                {url: linkWeb("presidente-verano-2015"), text: "Filter"},
                {url: linkWeb("presidente-loader"), text: "Loader"},
            ],
            github: linkGithubDev("presidente-verano-2015"),
        },
    },
    {
        date: "2016/02/22",
        title: "Website",
        linkDirect: false,
        type: mode.app,
        role: [
            role.frontend
        ],
        client: client.drLogic,
        tools: [
            tool.haml,
            tool.css,
            tool.jQuery,
            tool.bootstrap,
            tool.git,
            tool.rails
        ],
        links: {
            web: [
                {url: linkWeb("drlogic/home.html"), text: "Home"},
                {url: linkWeb("drlogic/about-us.html"), text: "About Us"},
                {url: linkWeb("drlogic/contact-us.html"), text: "Contact Us"},
                {url: linkWeb("drlogic/portfolio.html"), text: "Portfolio"},
                {url: linkWeb("drlogic/404.html"), text: "404"},
            ],
            vimeo: "https://vimeo.com/207152756",
            github: linkGithubDev("drlogic"),
        },
    },
    {
        date: "2016/06/16",
        title: "Server Prompt",
        type: mode.prototype,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.pixelPerfectTree,
        tools: [
            tool.haml,
            tool.css,
            tool.git,
            tool.illustrator,
            tool.rails
        ],
        links: {
            web: [
                {url: linkWeb("pixel-server-prompt/404"), text: "404"},
                {url: linkWeb("pixel-server-prompt/500"), text: "500"},
            ],
            github: linkGithubDev("pixel-server-prompt"),
        },
    },
    {
        date: "2016/06/30",
        title: "Voxel Cube Games",
        type: mode.prototype,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.voxel,
        tools: [
            tool.haml,
            tool.css,
            tool.git,
            tool.photoshop,
            tool.rails
        ],
        links: {
            web: [
                {url: linkWeb("voxel-animation"), text: "Animated Header"},
            ],
            github: linkGithubDev("voxel-animation"),
        },
    },
    {
        date: "2015/05/27",
        title: "Orange Reel",
        type: mode.motionGraphics,
        role: [
            role.animation,
        ],
        client: client.orange,
        tools: [
            tool.flash,
            tool.premiere,
        ],
        links: {
            vimeo: "https://vimeo.com/212177083",
        }
    },
    {
        date: "2014/01/14",
        title: "Website",
        type: client.app,
        role: [
            role.frontend,
        ],
        client: client.descubria,
        tools: [
            tool.html,
            tool.css,
            tool.jQuery,
        ],
        links: {
            web: [
                {url: linkWeb("descubria"), text: "Home"},
            ],
            github: linkGithubDev("descubria"),
        },
    },
    {
        date: "2014/08/06",
        title: "Bloqueo",
        type: mode.prototype,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.capitalDBG,
        tools: [
            tool.html,
            tool.css,
            tool.illustrator
        ],
        links: {
            web: [
                {url: linkWeb("capital-dbg-server-prompt"), text: "Prototype"},
            ],
            github: linkGithub("capital-dbg-server-prompt"),
        },
    },
    {
        date: "2015/01/03",
        title: "Mainfront",
        type: mode.app,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            tool.pug,
            tool.json,
            tool.jQuery,
            tool.grunt,
            tool.css,
            tool.illustrator,
        ],
        links: {
            web: [
                {url: linkWeb("main-front"), text: "App"},
            ],
            github: linkGithubDev("main-front"),
        },
    },
    {
        date: "2015/04/19",
        title: "CSS Study",
        type: mode.app,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            tool.angular,
            "Sweetalert",
            tool.json,
            tool.illustrator,
            tool.css,
            tool.pug,
        ],
        links: {
            web: [
                {url: linkWeb("css-study"), text: "App"},
            ],
            github: linkGithubDev("css-study"),
        },
    },
    {
        date: "2015/04/26",
        title: "Evolution Of The Web",
        type: mode.app,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            "stellarJS",
            "jQueryMouseWheel",
            "CSS's SVG Animations",
            "CSS's Keyframes",
            "Horizontal Layout",
            tool.inkscape,
            tool.pug,
            tool.markdown,
            tool.wordpress,
        ],
        links: {
            web: [
                {url: linkWeb("evolution-web"), text: "App"},
            ],
            github: linkGithubDev("evolution-web"),
        },
    },
    {
        date: "2015/05/14",
        title: "Screen",
        type: mode.prototype,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            "HTML's Bones Structure",
            "CSS's Hover Animations",
            "CSS's Keyframes",
            "SASS's Variables",
            "SASS's Mixings",
            tool.pug,
            tool.css,
            tool.illustrator,
        ],
        links: {
            codepen: linkCodepen("oXxPvw"),
        },
    },
    {
        date: "2015/05/23",
        title: "Mini Van",
        type: mode.prototype,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            tool.pug,
            tool.sass,
            "CSS's Drawings",
            "CSS's Hover Animations",
            "CSS's Keyframes",
            "SASS's Variables",
            "SASS's Mixings",
        ],
        links: {
            codepen: linkCodepen("VLKNBz"),
        },
    },
    {
        date: "2015/05/25",
        title: "Windows Form",
        type: mode.prototype,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            "CSS's 3d Transforms",
            "CSS's 3d Perspective",
            "CSS's Hover Animations",
            "CSS's Drawings",
            "SASS's Variables",
            "SASS's Mixings",
            "Jade's Variables",
            "Jade's Mixings",
            tool.illustrator,
        ],
        links: {
            codepen: linkCodepen("PqbqpL"),
        },
    },
    {
        date: "2015/05/28",
        title: "Gear",
        type: mode.prototype,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            "Canvas",
            tool.pug,
            tool.css,
        ],
        links: {
            codepen: linkCodepen("yNJJpG"),
        },
    },
    {
        date: "2015/12/07",
        title: "SVG 101",
        type: mode.prototype,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            "jQueryMouseWheel",
            "stellarJS",
            "snapSVG",
            "SVG Animations",
            "Horizontal Layout",
            tool.pug,
            tool.css,
            tool.illustrator,
        ],
        links: {
            web: [
                {url: linkWeb("svg-101"), text: "Prototype"},
            ],
            github: linkGithubDev("svg-101"),
        },
    },
    {
        date: "2015/12/22",
        title: "Tetravex",
        type: mode.app,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            tool.javascript,
            tool.pug,
            tool.css,
            "Modular Javascript",
            "Sizzle",
            "Lodash",
            "Velocity.js",
            tool.illustrator,
            tool.inkscape,
        ],
        links: {
            web: [
                {url: linkWeb("tetravex"), text: "App"},
            ],
            github: linkGithubDev("tetravex"),
        },
    },
    {
        date: "2017/01/01",
        title: "FlatCSS",
        type: mode.landingPage,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            tool.pug,
            tool.css,
            tool.git,
        ],
        links: {
            web: [
                {url: linkWeb("flat-css"), text: "App"},
            ],
            github: linkGithubDev("flat-css"),
        },
    },
    {
        date: "2017/02/20",
        title: "Pills",
        type: mode.prototype,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            tool.slim,
            tool.css,
            "CSS's Drawings",
            "CSS's Hover Animations",
            "CSS's Keyframes",
        ],
        links: {
            codepen: linkCodepen("qRzzmz"),
        },
    },
    {
        date: "2010/07/07",
        title: "Walking",
        type: mode.motionGraphics,
        role: [
            role.animation,
            role.design,
        ],
        client: client.itla,
        tools: [
            tool.flash,
        ],
        links: {
            vimeo: "https://vimeo.com/224945169",
        }
    },
    {
        date: "2012/07/22",
        title: "La Guerra de Vectores",
        type: mode.motionGraphics,
        role: [
            role.animation,
        ],
        client: client.itla,
        tools: [
            tool.flash,
        ],
        links: {
            vimeo: "https://vimeo.com/175240185",
        }
    },
    {
        date: "2016/11/21",
        title: "Wurlex",
        type: mode.animation3D,
        role: [
            role.animation,role.design
        ],
        client: client.miguelRivas,
        tools: [
            tool.unity,
            tool.premiere
        ],
        links: {
            vimeo: "https://vimeo.com/224977703",
        }
    },
    {
        date: "2014/03/22",
        title: "Screens Portfolio",
        type: mode.app,
        role: [
            role.design,
            role.frontend,
        ],
        client: client.miguelRivas,
        tools: [
            tool.pug,
            tool.sass,
            tool.jQuery,
            tool.php,
        ],
        links: {
            web: [
                {url: linkWeb("miguel-rivas-2014"), text: "App"},
            ],
            github: linkGithubDev("miguel-rivas-2014"),
        },
    },
    {
        date: "2016/08/11",
        title: "Monster Portfolio",
        type: mode.app,
        role: [
            role.design,
            role.frontend,
        ],
        client: client.miguelRivas,
        tools: [
            tool.pug,
            tool.sass,
            tool.jQuery,
            tool.php,
        ],
        links: {
            web: [
                {url: linkWeb("miguel-rivas-2016"), text: "App"},
            ],
            github: linkGithubDev("miguel-rivas-2016"),
        },
    },
    {
        date: "2021/03/26",
        title: "Gallery Portfolio",
        type: mode.app,
        role: [
            role.design,
            role.frontend,
        ],
        client: client.miguelRivas,
        tools: [
            tool.react,
            tool.sass,
        ],
        links: {
            web: [
                {url: linkWeb("miguel-rivas-2021"), text: "App"},
            ],
            github: linkGithubDev("miguel-rivas-2021"),
        },
    },
    {
        date: "2018/01/01",
        title: "Grid Portfolio",
        type: mode.app,
        role: [
            role.design,
            role.frontend,
        ],
        client: client.miguelRivas,
        tools: [
            tool.angular,
            tool.sass,
        ],
        links: {
            web: [
                {url: linkWeb("miguel-rivas-2018"), text: "Home"},
                {url: linkWeb("miguel-rivas-2018/drlogic.html"), text: "DrLogic"},
                {url: linkWeb("miguel-rivas-2018/apap.html"), text: "Apap"},
                {url: linkWeb("miguel-rivas-2018/bpr.html"), text: "BPR Bank"},
                {url: linkWeb("miguel-rivas-2018/presidente.html"), text: "Presidente"},
                {url: linkWeb("miguel-rivas-2018/tests.html"), text: "Tests"},
            ],
            vimeo: "https://vimeo.com/260621089",
            github: linkGithubDev("miguel-rivas-2018"),
        },
    },
    {
    	date: "2016/01/11",
    	title: "HTML/LOVE",
    	type: mode.landingPage,
    	role: [
            role.frontend,
            role.design,
        ],
    	client: client.miguelRivas,
    	tools: [
    		tool.haml,
    		tool.css,
    		"Animate.css",
    		"CSS's Hover Animations",
    		"CSS's Keyframes",
    		"SASS's Variables",
    		"SASS's Mixings",
    		tool.illustrator
        ],
        links: {
            web: [
                {url: linkWeb("html-love"), text: "App"},
            ],
            github: linkGithubDev("html-love"),
        },
    },
    {
        date: "2015/10/28",
        title: "Pixel PT Test",
        type: mode.landingPage,
        role: [
            role.frontend,
            role.design,
        ],
        client: client.pixelPerfectTree,
        tools: [
            tool.pug,
            tool.sass,
            tool.jQuery,
            tool.illustrator
        ],
        links: {
            web: [
                {url: linkWeb("test-pixel-perfect-tree"), text: "Test"},
            ],
            github: linkGithub("test-pixel-perfect-tree"),
        },
    },
    {
        client: client.presidente,
        title: "Destapa el Coro",
        date: "2014/06/02",
        links: {
            web: [
                {url: linkWeb("presidente-destapa-coro"), text: "App"},
            ],
            github: linkGithub("presidente-destapa-coro"),
        },
        tools: [
            tool.illustrator,
        ],
        type: mode.userFlow,
        role: [
            role.design,
        ],
    },
    {
        date: "2021/03/22",
        title: "Nano Grid",
        type: mode.module,
        role: [
            role.frontend,
        ],
        client: client.miguelRivas,
        tools: [
            tool.vue,
            tool.sass,
        ],
        links: {
            web: [
                {url: "https://www.npmjs.com/package/nano-grid", text: "Node Module"},
            ],
            github: "https://github.com/jmiguelrivas/nano-grid-module",
        },
    },
    {
        date: "2021/02/27",
        title: "3D Graph Colors",
        type: mode.prototype,
        role: [
            role.frontend,
        ],
        client: client.enovational,
        tools: [
            tool.javascript,
            tool.three,
        ],
        links: {
            codepen: linkCodepen("dyOmXWO"),
        },
    },
    {
        date: "2014/02/09",
        title: "Print Portfolio",
        type: mode.document,
        role: [
            role.design,
        ],
        client: client.miguelRivas,
        tools: [
            tool.indesign,
        ],
        links: {
            web: [
                {url: "https://issuu.com/jemiguelrivas/docs/ptf3_005", text: "Portfolio 3"},
                {url: "https://issuu.com/jemiguelrivas/docs/ptf2_000", text: "Portfolio 2"},
                {url: "https://issuu.com/jemiguelrivas/docs/ptf1_000", text: "Portfolio 1"},
            ],
        },
    },
  ].sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });

/*
    {
    	date: "2021/03/22",
    	title: "Nano Grid",
    	type: mode.app,
    	role: [
        role.frontend,
        role.design,
    ],
    	client: client.miguelRivas,
    	tools: [
            tool.vue,
            tool.sass,
        ],
        links: {
            web: [
                {url: linkWeb("nano-grid"), text: "App"},
            ],
            github: linkGithubDev("nano-grid"),
        },
    },

    {
        date: "2021/03/28",
        title: "Gallery Portfolio",
        type: mode.app,
        role: [
            role.design,
            role.frontend,
        ],
        client: client.miguelRivas,
        tools: [
            tool.react,
            tool.sass,
        ],
        links: {
            web: [
                {url: linkWeb("miguel-rivas-2021"), text: "App"},
            ],
            github: linkGithubDev("miguel-rivas-2021"),
        },
    },
    {
    	date: "2020/05/05",
    	title: "Popkern",
    	type: mode.app,
    	role: [
        role.frontend,
        role.design,
    ],
    	client: client.enovational,
    	tools: [
            tool.vue,
            tool.rails,
            tool.slim,
            tool.sass,
    	]
    },
*/


  /*
    {
    	date: "2012/09/26",
    	title: "Tips of Design",
    	type: "Book",
    	role: [
        role.design,
    ],
    	client: client.miguelRivas,
    	tools: [
    		tool.indesign,
    	]
    },
    {
    	date: "2017/03/05",
    	title: "Art Direction",
    	type: "Portfolio",
    	role: [
        role.design,
    ],
    	client: client.miguelRivas,
    	tools: [
    		tool.indesign,
    		tool.illustrator,
    		tool.photoshop
    	]
    },
        {
    	date: "2015/05/10",
    	title: "Bootstrap Prototype",
    	type: mode.landingPage,
    	role: [
        role.frontend,
        role.design,
    ],
    	client: client.miguelRivas,
    	tools: [
    		"Bootstrap",
    		"Responsive Design",
    		tool.pug,
    		tool.illustrator
    	]
    },
        {
    	date: "2017/09/20",
    	title: "Lemon Deal",
    	type: mode.landingPage,
    	role: [
        role.frontend,
        role.design
    ],
    	client: "Plant Therapy",
    	tools: [
    		tool.html,
    		tool.miva,
    		tool.css,
    		tool.jQuery,
    		tool.illustrator
    	]
    },
    {
    	date: "2015/08/03",
    	title: "SIP",
    	type: "Website",
    	role: [
        role.frontend,
    ],
    	client: "SIP",
    	tools: [
    		tool.pug,
    		tool.css,
    		tool.jQuery,
    	]
    },
    {
        date: "2014/10/18",
        title: "Photo Assignmet",
        type: mode.app,
        role: [
            role.frontend
        ],
        client: client.presidente,
        tools: [
            tool.html,
            tool.jQuery,
            tool.grunt,
            tool.css
        ]
    },
    {
        date: "2014/11/05",
        title: "Pronosticos",
        type: mode.wireframe,
        role: [
            role.design
        ],
        client: client.presidente,
        tools: [
            tool.illustrator
        ]
    },
    ,{
        date: "2016/03/08",
        title: "DrLogic",
        type: "Terms and Conditions",
        role: [
            role.design
        ],
        client: client.drLogic,
        tools: [
            tool.indesign
        ]
    }
    ,{
        date: "2016/01/29",
        title: "Shop.pr",
        type: mode.document,
        role: [
            role.design,
        ],
        client: "Shop.pr",
        tools: [
            tool.illustrator
        ]
    },
    
    {
        date: "2017/08/04",
        title: "Chakras",
        type: mode.wireframe,
        role: [
            role.frontend,
            role.design,
        ],
        client: "Plant Therapy",
        tools: [
            tool.illustrator,
        ]
    },
    ,{
        date: "2016/02/18",
        title: "BPR Bank",
        linkDirect: false,
        type: mode.app,
        role: [
            role.frontend
        ],
        client: client.bprBank,
        tools: [
            tool.haml,
            tool.css,
            tool.jQuery,
            tool.bootstrap,
            tool.git,
            tool.rails
        ],
    }
    {
        date: "2016/06/24",
        title: "Voxel Cube Games",
        type: "Social Media",
        role: [
            role.design,
        ],
        client: client.voxel,
        tools: [
            tool.photoshop,
            tool.illustrator,
        ]
    },
  */