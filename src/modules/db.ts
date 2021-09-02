import { toolEnum } from "../enums/tools";
import { roleEnum } from "../enums/roles";
import { typeEnum } from "../enums/types";
import { clientEnum } from "../enums/clients";
import { categoryEnum } from "../enums/categories";

// import h from "./helpers";
// import { db } from "./firebase-db";

const users = {
  "name": "Jesus",
  "middleName": "Miguel",
  "lastName": "Rivas",
  "title": "Frontend Developer",
  "website": "miguel-rivas.github.io",
  "location": {
    "city": "Washington",
    "state": "DC"
  },
  "media": {
    "codepen": {
      "user": "planetwurlex"
    },
    "issuu": {
      "user": "jemiguelrivas"
    },
    "linkedin": {
      "user": "jemiguelrivas"
    },
    "github": {
      "user": "jemiguelrivas",
      "development": "miguel-rivas-lab",
      "production": "miguel-rivas"
    }
  }
};

const linkWeb = (item) => `https://${users.media.github.production}.github.io/${item}`;
const linkGithub = (item) => `https://github.com/${users.media.github.production}/${item}`;
const linkGithubDev = (item) => `https://github.com/${users.media.github.development}/${item}-dev`;
const linkCodepen = (item) => `https://codepen.io/${users.media.codepen.user}/pen/${item}`;

const experiments = [
  {
    date: "2015/01/03",
    title: "Mainfront",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("main-front"), text: "App" },
      ],
      github: linkGithubDev("main-front"),
    },
  },
  {
    date: "2015/04/19",
    title: "CSS Study",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.angular,
      toolEnum.sweetAlert,
      toolEnum.illustrator,
      toolEnum.scss,
      toolEnum.pug,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("css-study"), text: "App" },
      ],
      github: linkGithubDev("css-study"),
    },
  },
  {
    date: "2021/03/24",
    title: "Hello",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.vue,
      toolEnum.illustrator,
      toolEnum.scss,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: `${linkWeb("hello")}`, text: "berlin", params: ["city=berlin"] },
        { url: `${linkWeb("hello")}`, text: "dusseldorf", params: ["city=dusseldorf"] },
        { url: `${linkWeb("hello")}`, text: "melbourne", params: ["city=melbourne"] },
        { url: `${linkWeb("hello")}`, text: "schwangau", params: ["city=schwangau"] },
        { url: `${linkWeb("hello")}`, text: "texas", params: ["city=texas"] },
      ],
      github: linkGithubDev("hello"),
    },
  },
  {
    date: "2015/04/26",
    title: "Evolution of The Web",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.stellar,
      toolEnum.inkscape,
      toolEnum.pug,
      toolEnum.git,
      toolEnum.scss,
    ],
    links: {
      web: [
        { url: linkWeb("evolution-web"), text: "App" },
      ],
      github: linkGithubDev("evolution-web"),
    },
  },
  {
    date: "2015/05/14",
    title: "Robotic Screen",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.illustrator,
    ],
    links: {
      web: [
        { url: linkCodepen("oXxPvw"), text: "Codepen Prototype" },
      ],
    },
  },
  {
    date: "2015/05/23",
    title: "Mini Van",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
    ],
    links: {
      web: [
        { url: linkCodepen("VLKNBz"), text: "Codepen Prototype" },
      ],
    },
  },
  {
    date: "2015/05/25",
    title: "Windows Form",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.scss,
      toolEnum.jade,
      toolEnum.illustrator,
    ],
    links: {
      web: [
        { url: linkCodepen("PqbqpL"), text: "Codepen Prototype" },
      ],
    },
  },
  {
    date: "2015/05/28",
    title: "Gear Builder",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.canvas,
      toolEnum.pug,
      toolEnum.scss,
    ],
    links: {
      web: [
        { url: linkCodepen("yNJJpG"), text: "Codepen Prototype" },
      ],
    },
  },
  {
    date: "2015/12/07",
    title: "SVG 101",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.stellar,
      toolEnum.snapSVG,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("svg-101"), text: "Prototype" },
      ],
      github: linkGithubDev("svg-101"),
    },
  },
  {
    date: "2015/12/22",
    title: "Tetravex",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.javascript,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.sizzle,
      toolEnum.lodash,
      toolEnum.velocity,
      toolEnum.illustrator,
      toolEnum.inkscape,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("tetravex"), text: "App" },
      ],
      github: linkGithubDev("tetravex"),
    },
  },
  {
    date: "2017/02/20",
    title: "Pills",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.slim,
      toolEnum.scss,
    ],
    links: {
      web: [
        { url: linkCodepen("qRzzmz"), text: "Codepen Prototype" },
      ],
    },
  },
  {
    date: "2010/07/07",
    title: "Walking",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation,
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.flash,
    ],
    links: {
      web: [
        { url: "https://vimeo.com/224945169", text: "Video" },
      ],
    }
  },
  {
    date: "2012/07/22",
    title: "La Guerra de Vectores",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.flash,
    ],
    links: {
      web: [
        { url: "https://vimeo.com/175240185", text: "Video" },
      ],
    }
  },
  {
    date: "2016/11/21",
    title: "Wurlex",
    type: typeEnum.animation3D,
    role: [
      roleEnum.animation, roleEnum.design
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.unity,
      toolEnum.premiere,
    ],
    links: {
      web: [
        { url: "https://vimeo.com/224977703", text: "Video" },
      ],
    }
  },
  {
    date: "2014/03/22",
    title: "Screens Portfolio",
    type: typeEnum.app,
    role: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.php,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("miguel-rivas-2014"), text: "App" },
      ],
      github: linkGithubDev("miguel-rivas-2014"),
    },
  },
  {
    date: "2016/08/11",
    title: "Monster Portfolio",
    type: typeEnum.app,
    role: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.php,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("miguel-rivas-2016"), text: "App" },
      ],
      github: linkGithubDev("miguel-rivas-2016"),
    },
  },
  {
    date: "2021/08/12",
    title: "3D Portfolio",
    type: typeEnum.app,
    role: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.vue,
      toolEnum.vuex,
      toolEnum.vueRouter,
      toolEnum.typescript,
      toolEnum.three,
      toolEnum.scss,
      toolEnum.blender,
      toolEnum.git,
      toolEnum.chartJS,
      toolEnum.firebase,
      toolEnum.highlight,
    ],
    links: {
      web: [
        { url: linkWeb("miguel-rivas-2021"), text: "App" },
      ],
      github: linkGithubDev("miguel-rivas-2021"),
    },
  },
  {
    date: "2018/01/01",
    title: "Grid Portfolio",
    type: typeEnum.app,
    role: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.angular,
      toolEnum.scss,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("miguel-rivas-2018"), text: "Home" },
        { url: linkWeb("miguel-rivas-2018/drlogic.html"), text: "DrLogic" },
        { url: linkWeb("miguel-rivas-2018/apap.html"), text: "Apap" },
        { url: linkWeb("miguel-rivas-2018/bpr.html"), text: "BPR Bank" },
        { url: linkWeb("miguel-rivas-2018/presidente.html"), text: "Presidente" },
        { url: linkWeb("miguel-rivas-2018/tests.html"), text: "Tests" },
        { url: "https://vimeo.com/260621089", text: "Video" },
      ],
      github: linkGithubDev("miguel-rivas-2018"),
    },
  },
  {
    date: "2016/01/11",
    title: "HTML/LOVE",
    type: typeEnum.landingPage,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.animate,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("html-love"), text: "App" },
      ],
      github: linkGithubDev("html-love"),
    },
  },
  {
    date: "2021/03/22",
    title: "Nano Grid",
    type: typeEnum.module,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.vue,
      toolEnum.scss,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: "https://www.npmjs.com/package/nano-grid", text: "Node Module" },
      ],
      github: "https://github.com/jmiguelrivas/nano-grid-module",
    },
  },
  {
    date: "2014/02/09",
    title: "Print Portfolio",
    type: typeEnum.document,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.indesign,
    ],
    links: {
      web: [
        { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005", text: "Portfolio 3" },
        { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000", text: "Portfolio 2" },
        { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000", text: "Portfolio 1" },
      ],
    },
  },
  {
    date: "2012/09/26",
    title: "Tips of Design",
    type: typeEnum.document,
    role: [
      roleEnum.design,
    ],
    disabled: true,
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.indesign,
    ]
  },
  {
    date: "2017/03/05",
    title: "Art Direction",
    type: typeEnum.document,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.indesign,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    disabled: true,
  },
  {
    date: "2015/05/10",
    title: "Bootstrap Prototype",
    type: typeEnum.landingPage,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.bootstrap,
      toolEnum.pug,
      toolEnum.illustrator,
      toolEnum.scss,
    ]
  },
  {
    date: "2021/03/26",
    title: "Letters Portfolio",
    type: typeEnum.app,
    role: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.react,
      toolEnum.scss,
      toolEnum.git,
    ],
    disabled: true,
  },
  {
    date: "2017/01/01",
    title: "FlatCSS",
    type: typeEnum.module,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.css,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("flat-css"), text: "App" },
      ],
      github: linkGithubDev("flat-css"),
    },
  },
  {
    date: "2020/10/04",
    title: "Fake Audience",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.kotlin,
      toolEnum.git,
    ],
    disabled: true,
  },
  {
    date: "2021/02/27",
    title: "3D Graph Colors",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.three,
    ],
    links: {
      web: [
        { url: linkCodepen("dyOmXWO"), text: "Codepen Prototype" },
      ]
    },
  },
  {
    date: "2020/05/09",
    title: "Animated SVG Header",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.tweenMax,
      toolEnum.html,
      toolEnum.scss,
    ],
    links: {
      web: [
        { url: linkCodepen("zYvjwEM"), text: "Codepen Prototype" },
      ]
    },
  },
  {
    date: "2020/03/23",
    title: "Xpinner",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.svg,
      toolEnum.scss,
    ],
    links: {
      web: [
        { url: linkCodepen("VwLGgYv"), text: "Codepen Prototype" },
      ]
    },
  },
  {
    date: "2018/06/27",
    title: "Color Wheel Creation",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.javascript,
      toolEnum.scss,
    ],
    links: {
      web: [
        { url: linkCodepen("ERdMLO"), text: "Codepen Prototype" },
      ]
    },
  },
  {
    date: "2018/09/11",
    title: "Movie projector",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.svg,
      toolEnum.scss,
    ],
    links: {
      web: [
        { url: linkCodepen("rZdMYj"), text: "Codepen Prototype" },
      ]
    },
  },
  {
    date: "2018/05/31",
    title: "Check Animation",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.svg,
      toolEnum.scss,
    ],
    links: {
      web: [
        { url: linkCodepen("ZRGpbQ"), text: "Codepen Prototype" },
      ]
    },
  },
  {
    date: "2018/03/28",
    title: "Bounce Animation",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.canvas,
    ],
    links: {
      web: [
        { url: linkCodepen("GxyMMz"), text: "Codepen Prototype" },
      ]
    },
  },
  {
    date: "2015/05/29",
    title: "Spinners",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
    ],
    links: {
      web: [
        { url: linkCodepen("eNgRRe"), text: "Codepen Prototype" },
      ]
    },
  },
  {
    date: "2012/11/06",
    title: "Drakkar",
    type: typeEnum.animation3D,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.blender,
    ],
    links: {
      web: [
        { url: "https://sketchfab.com/3d-models/drakkar-d0f14c73155e460cb848a3db80e1cb07", text: "3D Model" },
      ]
    },
  },
  {
    date: "2011/12/05",
    title: "Reloj",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
  },
  {
    date: "2011/11/15",
    title: "Pencil Sharpener",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
  },
  {
    date: "2011/11/18",
    title: "Batteries: depth of field",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
  },
  {
    date: "2011/07/04",
    title: "Audi",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
  },
  {
    date: "2011/07/03",
    title: "Mackbook Pro",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
  },
  {
    date: "2011/07/02",
    title: "Backpack",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
  },
  {
    date: "2011/07/01",
    title: "X-wing",
    type: typeEnum.animation3D,
    disabled: false,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
  },
].map(item => {
  item["category"] = categoryEnum.experiment;
  return item;
});

const projects = [
  {
    date: "2014/06/16",
    title: "Destapa el Coro",
    type: typeEnum.app,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.css,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("presidente-destapa-coro"), text: "App" },
      ],
      github: linkGithub("presidente-destapa-coro"),
    },
  },
  {
    date: "2015/03/24",
    title: "BigPapi Selfie",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation
    ],
    client: clientEnum.pepsi,
    tools: [
      toolEnum.flash,
    ],
    links: {
      web: [
        { url: "https://vimeo.com/175240184", text: "Video" },
      ],
    },
  },
  {
    date: "2015/04/18",
    title: "Carnaval Presidente 2015",
    linkDirect: false,
    type: typeEnum.landingPage,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.scss,
      toolEnum.php,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("presidente-carnaval-2015/filter.html"), text: "Filter" },
        { url: linkWeb("presidente-carnaval-2015/home.html"), text: "Home" },
      ],
      github: linkGithubDev("presidente-carnaval-2015"),
    },
  },
  {
    date: "2015/05/20",
    title: "Recarga Con RedRock",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation
    ],
    client: clientEnum.redRock,
    tools: [
      toolEnum.flash,
    ],
    links: {
      web: [
        { url: "https://vimeo.com/175240186", text: "Video" },
      ],
    },
  },
  {
    date: "2015/10/23",
    title: "Retrobrindis",
    type: typeEnum.app,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.php,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("presidente-retro-brindis"), text: "App" },
      ],
      github: linkGithubDev("presidente-retro-brindis"),
    },
  },
  {
    date: "2015/11/12",
    title: "Mineriza a tu Familia",
    linkDirect: false,
    type: typeEnum.app,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.apap,
    tools: [
      toolEnum.pug,
      toolEnum.jQuery,
      toolEnum.css,
      toolEnum.afterEffects,
      toolEnum.premiere,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("apap-mineriza-familia"), text: "App" },
        { url: "https://vimeo.com/211801157", text: "Video" },
      ],
      github: linkGithubDev("apap-mineriza-familia"),
    },
  },
  {
    date: "2015/12/16",
    title: "Verano Presidente 2015",
    linkDirect: false,
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.css,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("presidente-verano-2015"), text: "Filter" },
        { url: linkWeb("presidente-loader"), text: "Loader" },
      ],
      github: linkGithubDev("presidente-verano-2015"),
    },
  },
  {
    date: "2016/02/22",
    title: "DrLogic: Website",
    linkDirect: false,
    type: typeEnum.app,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.drLogic,
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.bootstrap,
      toolEnum.rails,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("drlogic/home.html"), text: "Home" },
        { url: linkWeb("drlogic/about-us.html"), text: "About Us" },
        { url: linkWeb("drlogic/contact-us.html"), text: "Contact Us" },
        { url: linkWeb("drlogic/portfolio.html"), text: "Portfolio" },
        { url: linkWeb("drlogic/404.html"), text: "404" },
        { url: "https://vimeo.com/207152756", text: "Video" },
      ],
      github: linkGithubDev("drlogic"),
    },
  },
  {
    date: "2016/06/16",
    title: "Pixel Perfect Tree: Server Prompt",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.pixelPerfectTree,
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.rails,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("pixel-server-prompt/404"), text: "404" },
        { url: linkWeb("pixel-server-prompt/500"), text: "500" },
      ],
      github: linkGithubDev("pixel-server-prompt"),
    },
  },
  {
    date: "2016/06/30",
    title: "Voxel Cube Games: Header",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.voxel,
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.photoshop,
      toolEnum.rails,
      toolEnum.git,
    ],
    disabled: true,
    links: {
      web: [
        { url: linkWeb("voxel-animation"), text: "Animated Header" },
      ],
      github: linkGithubDev("voxel-animation"),
    },
  },
  {
    date: "2015/05/27",
    title: "Orange Reel",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation,
    ],
    client: clientEnum.orange,
    tools: [
      toolEnum.flash,
      toolEnum.premiere,
    ],
    links: {
      web: [
        { url: "https://vimeo.com/212177083", text: "Video" },
      ],
    }
  },
  {
    date: "2014/01/14",
    title: "Descubria Website",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.descubria,
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("descubria"), text: "Home" },
      ],
      github: linkGithubDev("descubria"),
    },
  },
  {
    date: "2014/08/06",
    title: "Capital DBG: Server Prompt",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.capitalDBG,
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("capital-dbg-server-prompt"), text: "Prototype" },
      ],
      github: linkGithub("capital-dbg-server-prompt"),
    },
  },
  {
    date: "2015/10/28",
    title: "Pixel Perfect Tree: Test",
    type: typeEnum.landingPage,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.pixelPerfectTree,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    links: {
      web: [
        { url: linkWeb("test-pixel-perfect-tree"), text: "Test" },
      ],
      github: linkGithub("test-pixel-perfect-tree"),
    },
  },
  {
    client: clientEnum.presidente,
    title: "Destapa el Coro: User Flow",
    date: "2014/06/02",
    tools: [
      toolEnum.illustrator,
    ],
    type: typeEnum.userFlow,
    role: [
      roleEnum.design,
    ],
    disabled: true,
  },
  {
    date: "2020/05/05",
    title: "Popkern",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.enovational,
    tools: [
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.rails,
      toolEnum.slim,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.three,
      toolEnum.tweenMax,
    ],
    disabled: false,
  },
  {
    date: "2017/09/20",
    title: "Lemon Deal",
    type: typeEnum.landingPage,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.plantTherapy,
    tools: [
      toolEnum.html,
      toolEnum.miva,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2015/08/03",
    title: "SIP",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.capitalDBG,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
    ],
    disabled: true,
  },
  {
    date: "2014/10/18",
    title: "Presidente Photo Assignmet",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.php,
      toolEnum.scss,
    ],
    disabled: true,
  },
  {
    date: "2014/11/05",
    title: "Pronosticos",
    type: typeEnum.wireFrame,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2016/03/08",
    title: "DrLogic: Terms And Conditions",
    type: typeEnum.document,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.drLogic,
    tools: [
      toolEnum.indesign,
    ],
    disabled: true,
  },
  {
    date: "2016/01/29",
    title: "Shop.pr",
    type: typeEnum.document,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.pixelPerfectTree,
    tools: [
      toolEnum.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2017/08/04",
    title: "Chakras",
    disabled: true,
    type: typeEnum.wireFrame,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.plantTherapy,
    tools: [
      toolEnum.illustrator,
    ]
  },
  {
    date: "2016/02/18",
    title: "BPR Bank",
    linkDirect: false,
    type: typeEnum.app,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.bprBank,
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.bootstrap,
      toolEnum.rails,
      toolEnum.git,
    ],
    disabled: true,
  },
  {
    date: "2016/06/24",
    title: "Voxel Cube Games: Social Media Posts",
    type: typeEnum.socialMedia,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.voxel,
    tools: [
      toolEnum.photoshop,
      toolEnum.illustrator,
    ]
  },
  {
    date: "2019/01/01",
    title: "Maryland State Ethics Commision Financial Disclosures Portal",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    disabled: true,
    client: clientEnum.enovational,
    tools: [
      toolEnum.html,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    links: {
      web: [
        { url: "https://efds.ethics.maryland.gov/", text: "Website" },
      ],
    },
  },
  {
    date: "2018/01/01",
    title: "Maryland Department of Agriculture Vetboard Portal",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.enovational,
    tools: [
      toolEnum.html,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    links: {
      web: [
        { url: "https://portal.mda.maryland.gov/", text: "Website" },
      ],
    },
    disabled: true,
  },
  {
    date: "2019/01/01",
    title: "Maryland Onestop",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    disabled: true,
    client: clientEnum.enovational,
    tools: [
      toolEnum.vue,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
  },
  {
    date: "2019/01/02",
    title: "Formability",
    type: typeEnum.app,
    disabled: false,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.enovational,
    tools: [
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.vuex,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.cucumber,
      toolEnum.bootstrap,
    ],
  },
  {
    date: "2021/06/21",
    title: "Connections Academy",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    disabled: true,
    client: clientEnum.jellyfish,
    tools: [
      toolEnum.php,
      toolEnum.wordpress,
      toolEnum.html,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.grunt,
    ]
  },
].map(item => {
  item["category"] = categoryEnum.project;
  return item;
});

// const all = experiments.concat(projects).sort((a, b) => {
//   return h.dateToNumber(b.date) - h.dateToNumber(a.date);
// }).map(item => {

//   let links = [];
//   if (item["links"]) {
//     if (item["links"]["web"]) {
//       links = item["links"]["web"].map(
//         link => {
//           const params = link["params"] ? link["params"] : [];
//           return {
//             "url": link["url"],
//             "text": link["text"],
//             "params": params,
//           }
//         }
//       );
//     }
//     if (item["links"]["github"]) {
//       links.push({
//         "url": item["links"]["github"],
//         "text": "Github",
//         "params": [],
//       });
//     }
//   }

//   const roles = item["role"].sort();
//   const tools = item["tools"].sort();
//   const disabled = item.disabled ? true : false;

//   return {
//     "title": item.title,
//     "category": item.category,
//     "client": item.client,
//     "date": item.date,
//     "type": item.type,
//     "disabled": disabled,
//     "links": links,
//     "roles": roles,
//     "tools": tools,
//   }
// });

// console.table(users);
// console.table(all);

// db.collection('users')
//   .doc("main")
//   .set(users);

// all.forEach(
//   (item, index) => {
//     const i = index < 10 ? `P0${index}` : `P${index}`;
//     db.collection("projects").doc(i).set(item);
//   }
// );

export {users, experiments, projects};