// Define interfaces for our navigation structure
import type { HTMLAnchorAttributes } from 'svelte/elements';


export interface NavDatum extends HTMLAnchorAttributes {
  column?: number | null;
  handle?: string | null;
  items?: NavDatum[] | null;
  text?: string | null;
  heading?: string | null;
  icon?: string | null;
  listType?: string | null;
  menuType?: string | null;
}

interface NavData {
  announcementBar?: NavDatum;
  mainNav: NavDatum[];
}

export const siteNavData: NavData = {
  announcementBar: {
    heading: "Announcement: ",
    text: "Lorem ipsum dolor sit amet.",
    href: "/covid-19"
  },
  mainNav: [
    {
      handle: "training",
      heading: "Find Training",
      items: [
        // upstream
        {
          heading: "Upstream",
          items: [
            { text: "Data Management, Science and Analytics", href: "/training/data-management-science-and-analytics" },
            { text: "Energy Business", href: "/training/energy-business" },
            { text: "Geology", href: "/training/geology" },
            { text: "Geophysics", href: "/training/geophysics" },
            { text: "Health, Safety, Environment", href: "/training/health-safety-environment" },
            { text: "Instrumentation, Controls & Electrical", href: "/training/instrumentation-controls-and-electrical" },
            { text: "Multi-Discipline Training", href: "/training/multi-discipline-training" },
            { text: "Offshore & Subsea", href: "/training/offshore-subsea" },
            { text: "Operations & Maintenance", href: "/training/operations-maintenance" },
            { text: "Petrophysics", href: "/training/petrophysics" },
            { text: "Production and Completions Engineering", href: "/training/production-and-completions-engineering" },
            { text: "Project Management", href: "/training/project-management" },
            { text: "Reservoir Engineering", href: "/training/reservoir-engineering" },
            { text: "Unconventional Resources", href: "/training/unconventional-resources" },
            { text: "Well Construction/Drilling", href: "/training/well-construction-drilling" }
          ]
        },
        // midstream
        {
          heading: "Midstream",
          items: [
            { text: "Energy Business", href: "/training/energy-business" },
            { text: "Gas Processing", href: "/training/gas-processing" },
            { text: "Health, Safety, Environment", href: "/training/health-safety-environment" },
            { text: "Instrumentation, Controls & Electrical", href: "/training/instrumentation-controls-and-electrical" },
            { text: "Mechanical Engineering", href: "/training/mechanical-engineering" },
            { text: "Multi-Discipline Training", href: "/training/multi-discipline-training" },
            { text: "Offshore & Subsea", href: "/training/offshore-subsea" },
            { text: "Operations & Maintenance", href: "/training/operations-maintenance" },
            { text: "Pipeline Engineering", href: "/training/pipeline-engineering" },
            { text: "Process Facilities", href: "/training/process-facilities" },
            { text: "Project Management", href: "/training/project-management" }
          ]
        },
        //downstream
        {
          heading: "Downstream",
          items: [
            { text: "Health, Safety, Environment", href: "/training/health-safety-environment" },
            { text: "Instrumentation, Controls & Electrical", href: "/training/instrumentation-controls-and-electrical" },
            { text: "Mechanical Engineering", href: "/training/mechanical-engineering" },
            { text: "Operations & Maintenance", href: "/training/operations-maintenance" },
            { text: "Project Management", href: "/training/project-management" },
            { text: "Refining", href: "/training/refining" }
          ]
        },
        // energy transition
        {
          heading: "Energy Transition",
          items: [
            { text: "Carbon Capture, Storage, and Sequestration", href: "/training/carbon-capture-storage-and-sequestration" },
            { text: "eStorage", href: "/training/eStorage" },
            { text: "Geothermal", href: "/training/geothermal" },
            { text: "Greenhouse Gas", href: "/training/greenhouse-gas" },
            { text: "Hydrogen", href: "/training/hydrogen" },
            { text: "Solar", href: "/training/solar" },
            { text: "Wind", href: "/training/wind" }
          ]
        },
        // operator training
        {
          heading: "Operator Training",
          items: [
              { text: "Electrical Maintenance", href: "/training/electrical-maintenance" },
              { text: "Gas Processing Operations", href: "/training/gas-processing-operations" },
              { text: "General Maintenance", href: "/training/general-maintenance" },
              { text: "Instrumentation and Control", href: "/training/instrumentation-and-control" },
              { text: "Mechanical Maintenance", href: "/training/mechanical-maintenance" },
              { text: "Operations & Maintenance", href: "/training/operations-maintenance" },
              { text: "Pipeline Operations", href: "/training/pipeline-operations" },
              { text: "Process Safety", href: "/training/process-safety" },
              { text: "Production Operations", href: "/training/production-operations" },
              { text: "Refinery Operations", href: "/training/refinery-operations" }
            ]
        },
        // business management
        {
          heading: "Business Management",
          items: [
            { text: "Energy Business", href: "/training/energy-business" },
            { text: "Procurement/Supply Chain Management", href: "/training/procurement-supply-chain-management" },
            { text: "Project Management", href: "/training/project-management" }
          ]
        },
        // health safety:
        {
          heading: "Health, Safety & Environment",
          items: [
            { text: "Emergency Planning & Response", href: "/training/emergency-planning-and-response" },
            { text: "Environmental", href: "/training/environmental" },
            { text: "Hazard Communication", href: "/training/hazard-communication" },
            { text: "HazMat Transportation", href: "/training/hazmat-transportation" },
            { text: "Health, Safety, Environment", href: "/training/health-safety-environment" },
            { text: "Industrial Hygiene", href: "/training/industrial-hygiene" },
            { text: "Safe Work Practices", href: "/training/safe-work-practices" },
            { text: "Security", href: "/training/security" }
          ]
        },
        // by loacations
        {
          heading: "By Locations",
          items: [
            { heading: "Cities A-Z",
              items: [
                { text: "Aberdeen", href: "/training/scheduled?city=Aberdeen" },
                { text: "Bakersfield", href: "/training/scheduled?city=Bakersfield" },
                { text: "Calgary", href: "/training/scheduled?city=Calgary" },
                { text: "Dallas", href: "/training/scheduled?city=Dallas" },
                { text: "Denver", href: "/training/scheduled?city=Denver" },
                { text: "Dubai", href: "/training/scheduled?city=Dubai" },
                { text: "Houston", href: "/training/scheduled?city=Houston" },
                { text: "London", href: "/training/scheduled?city=London" },
                { text: "Singapore", href: "/training/scheduled?city=Singapore" },
              ]
            },
            { heading: "Regions",
              items: [
                { text: "Asia Pacific", href: "/training/scheduled?region=Asia Pacific" },
                { text: "Australia / Oceana", href: "/training/scheduled?region=Australia / Oceana" },
                { text: "Canada", href: "/training/scheduled?region=Canada" },
                { text: "Europe", href: "/training/scheduled?region=Europe" },
                { text: "Middle East / Africa", href: "/training/scheduled?region=Middle East / Africa" },
                { text: "United States", href: "/training/scheduled?region=United States" }
              ]
            },
            {type: "tout", heading: "Virtual / Remote Courses", text: "Live instructor-led sessions that participants attend remotely at scheduled dates and times"},
            {type: "tout", heading: "On-demand Courses", text: "100% online. Digest courses at your own pace from the comfort of your own home or office"}
          ]
        },
        // disciplines A-Z
        {
          heading: "Disciplines A-Z",
          items: [
            // First column A-O
            {
              heading: "A - O",
              items: [
                {
                  href: "/training/carbon-capture-storage-and-sequestration",
                  text: "Carbon Capture, Storage, and Sequestration"
                },
                {
                  href: "/training/data-management-science-and-analytics",
                  text: "Data Management, Science and Analytics"
                },
                {
                  href: "/training/electrical-maintenance",
                  text: "Electrical Maintenance"
                },
                {
                  href: "/training/emergency-planning-and-response",
                  text: "Emergency Planning & Response"
                },
                {
                  href: "/training/energy-business",
                  text: "Energy Business"
                },
                {
                  href: "/training/environmental",
                  text: "Environmental"
                },
                {
                  href: "/training/eStorage",
                  text: "eStorage"
                },
                {
                  href: "/training/gas-processing",
                  text: "Gas Processing"
                },
                {
                  href: "/training/gas-processing-operations",
                  text: "Gas Processing Operations"
                },
                {
                  href: "/training/general-maintenance",
                  text: "General Maintenance"
                },
                {
                  href: "/training/geology",
                  text: "Geology"
                },
                {
                  href: "/training/geology-petrophysics-and-reservoirs",
                  text: "Geology, Petrophysics and Reservoirs"
                },
                {
                  href: "/training/geophysics",
                  text: "Geophysics"
                },
                {
                  href: "/training/geothermal",
                  text: "Geothermal"
                },
                {
                  href: "/training/greenhouse-gas",
                  text: "Greenhouse Gas"
                },
                {
                  href: "/training/hand-tools-and-equipment",
                  text: "Hand Tools and Equipment"
                },
                {
                  href: "/training/hazard-communication",
                  text: "Hazard Communication"
                },
                {
                  href: "/training/hazmat-transportation",
                  text: "HazMat Transportation"
                },
                {
                  href: "/training/health-safety-environment",
                  text: "Health, Safety, Environment"
                },
                {
                  href: "/training/hydrocarbon-storage-and-loading",
                  text: "Hydrocarbon Storage and Loading"
                },
                {
                  href: "/training/hydrogen",
                  text: "Hydrogen"
                },
                {
                  href: "/training/industrial-hygiene",
                  text: "Industrial Hygiene"
                },
                {
                  href: "/training/instrumentation-and-control",
                  text: "Instrumentation and Control"
                },
                {
                  href: "/training/instrumentation-controls-and-electrical",
                  text: "Instrumentation, Controls & Electrical"
                },
                {
                  href: "/training/math-and-science-fundamentals",
                  text: "Math and Science Fundamentals"
                },
                {
                  href: "/training/mechanical-engineering",
                  text: "Mechanical Engineering"
                },
                {
                  href: "/training/mechanical-maintenance",
                  text: "Mechanical Maintenance"
                },
                {
                  href: "/training/multi-discipline-training",
                  text: "Multi-Discipline Training"
                },
                {
                  href: "/training/offshore-subsea",
                  text: "Offshore & Subsea"
                },
                {
                  href: "/training/offshore-and-subsea-systems",
                  text: "Offshore and Subsea Systems"
                },
                {
                  href: "/training/operations-maintenance",
                  text: "Operations & Maintenance"
                },
                {
                  href: "/training/operator-plant-administration",
                  text: "Operator/Plant Administration"
                }
              ]
            },
            // Second column P-Z
            {
              heading: "P - Z",
              items: [
                {
                  href: "/training/petrochemical-process-equipment",
                  text: "Petrochemical Process Equipment"
                },
                {
                  href: "/training/petroleum-industry-overview",
                  text: "Petroleum Industry Overview"
                },
                {
                  href: "/training/petrophysics",
                  text: "Petrophysics"
                },
                {
                  href: "/training/pipeline-engineering",
                  text: "Pipeline Engineering"
                },
                {
                  href: "/training/pipeline-operations",
                  text: "Pipeline Operations"
                },
                {
                  href: "/training/powered-industrial-equipment",
                  text: "Powered Industrial Equipment"
                },
                {
                  href: "/training/process-facilities",
                  text: "Process Facilities"
                },
                {
                  href: "/training/process-safety",
                  text: "Process Safety"
                },
                {
                  href: "/training/procurement-supply-chain-management",
                  text: "Procurement/Supply Chain Management"
                },
                {
                  href: "/training/production-and-completions-engineering",
                  text: "Production and Completions Engineering"
                },
                {
                  href: "/training/production-operations",
                  text: "Production Operations"
                },
                {
                  href: "/training/project-management",
                  text: "Project Management"
                },
                {
                  href: "/training/quality-assurance-and-control",
                  text: "Quality Assurance & Control"
                },
                {
                  href: "/training/rcra-hazardous-waste-management",
                  text: "RCRA / Hazardous Waste Management"
                },
                {
                  href: "/training/refinery-operations",
                  text: "Refinery Operations"
                },
                {
                  href: "/training/refining",
                  text: "Refining"
                },
                {
                  href: "/training/reservoir-engineering",
                  text: "Reservoir Engineering"
                },
                {
                  href: "/training/safe-work-practices",
                  text: "Safe Work Practices"
                },
                {
                  href: "/training/security",
                  text: "Security"
                },
                {
                  href: "/training/solar",
                  text: "Solar"
                },
                {
                  href: "/training/stationary-equipment",
                  text: "Stationary Equipment"
                },
                {
                  href: "/training/uk-health-safety-and-environment",
                  text: "U.K. Health, Safety & Environment"
                },
                {
                  href: "/training/unconventional-resources",
                  text: "Unconventional Resources"
                },
                {
                  href: "/training/utility-safety-and-facility-systems",
                  text: "Utility, Safety and Facility Systems"
                },
                {
                  href: "/training/well-construction-completions-and-workovers",
                  text: "Well Construction, Completions and Workovers"
                },
                {
                  href: "/training/well-construction-drilling",
                  text: "Well Construction/Drilling"
                },
                {
                  href: "/training/wind",
                  text: "Wind"
                }
              ]
            },
            // More Options column
            {
              heading: "More Options",
              items: [
                {
                  href: "/schedule",
                  text: "All Scheduled Courses"
                },
                {
                  href: "/training/eLearning%20Courses",
                  text: "All eLearning Courses"
                },
                {
                  href: "/training/eLearning%20Series",
                  text: "All Courses"
                },
                {
                  href: "/training/categories",
                  text: "All Categories"
                },
                {
                  href: "/training",
                  text: "All Training"
                },
                {
                  href: "/training/textbooks",
                  text: "All Textbooks"
                }
              ]
            }
          ]
        },
        // progression maps
        {
          heading: "Progression Maps",
          items: [
            // First column
            {
              heading: "Progression Maps",
              items: [
                {
                  href: "/training/progression-maps/energy-business",
                  text: "Energy Business"
                },
                {
                  href: "/training/progression-maps/gas-processing",
                  text: "Gas Processing"
                },
                {
                  href: "/training/progression-maps/geology",
                  text: "Geology"
                },
                {
                  href: "/training/progression-maps/geophysics",
                  text: "Geophysics"
                },
                {
                  href: "/training/progression-maps/health-safety-environment",
                  text: "Health, Safety, Environment"
                },
                {
                  href: "/training/progression-maps/instrumentation-controls-electrical",
                  text: "Instrumentation, Controls, & Electrical"
                },
                {
                  href: "/training/progression-maps/mechanical-engineering",
                  text: "Mechanical Engineering"
                },
                {
                  href: "/training/progression-maps/multidiscipline",
                  text: "Multi-Discipline"
                },
                {
                  href: "/training/progression-maps/offshore-subsea",
                  text: "Offshore & Subsea"
                },
                {
                  href: "/training/progression-maps/operations-maintenance",
                  text: "Operations & Maintenance"
                }
              ]
            },
            // Second column
            {
              heading: null, // Empty heading as shown in the HTML
              items: [
                {
                  href: "/training/progression-maps/data-management-science-and-analytics",
                  text: "Petroleum Data Management"
                },
                {
                  href: "/training/progression-maps/petrophysics",
                  text: "Petrophysics"
                },
                {
                  href: "/training/progression-maps/pipeline-engineering",
                  text: "Pipeline Engineering"
                },
                {
                  href: "/training/progression-maps/process-facilities",
                  text: "Process Facilities"
                },
                {
                  href: "/training/progression-maps/procurement-supply-chain-management",
                  text: "Procurement Supply Chain Management"
                },
                {
                  href: "/training/progression-maps/production-completions-engineering",
                  text: "Production & Completions Engineering"
                },
                {
                  href: "/training/progression-maps/project-management",
                  text: "Project Management"
                },
                {
                  href: "/training/progression-maps/reservoir-engineering",
                  text: "Reservoir Engineering"
                },
                {
                  href: "/training/progression-maps/unconventional-resources",
                  text: "Unconventional Resources"
                },
                {
                  href: "/training/progression-maps/well-construction-drilling",
                  text: "Well Construction Drilling"
                }
              ]
            }
          ]
        }
      ],
    },
    {
      handle: "about",
      heading: "About Us",
      listType: "link",
      menuType: "dropdown",
      items: [
      { text: "About PetroSkills", href: "/about/about-petroskills" },
      { text: "The Alliance", href: "/about/the-alliance" },
      { text: "Our History", href: "/about/our-history" },
      { text: "Our Leadership", href: "/about/our-leadership" },
      { text: "Our Instructors", href: "/about/our-instructors" },
      { text: "Careers", href: "/careers/open-positions" }
    ]},
    // {
    //   handle: "products_solutions",
    //   heading: "Products & Solutions",
    //   type: "dropdown-mega",
    //   items: [
    //   // {
    //   //   column: 1,
    //   //   handle: "training-products",
    //   //   heading: "Training Products",
    //   //   items: [
    //   //     {
    //   //       heading: "Courses",
    //   //       icon: "ci-edit",
    //   //       href: "/training?productType%5B%5D=Course",
    //   //       text: "Classroom, Virtual, or On-Demand"
    //   //     },
    //   //     {
    //   //       heading: "eLearning for Engineers",
    //   //       icon: "ci-idea",
    //   //       href: "/blended",
    //   //       text: "for Engineers & Technical Professionals"
    //   //     },
    //   //     {
    //   //       heading: "eLearning for Operations",
    //   //       icon: "ci-rocket",
    //   //       href: "/about/solutions/epilot-elearning-libraries",
    //   //       text: "for Operations & Maintenance"
    //   //     },
    //   //     {
    //   //       heading: "Simulators",
    //   //       icon: "ci-lightning",
    //   //       href: "/about/solutions/console-operator-training",
    //   //       text: "Operator Training Simulations"
    //   //     }
    //   //   ]
    //   // },
    //   {
    //     column: 2,
    //     heading: "Training Solutions",
    //     items: [
    //     { text: "In-house Training", href: "/solutions/in-house-training" },
    //     { text: "Learning Management & Compliance", href: "/ability" },
    //     { text: "Guided Work Experiences", href: "/solutions/guided-work-experiences" }
    //     ]},
    //   {
    //     column: 2,
    //     heading: "Competency Consulting",
    //     items: [
    //     { text: "Competency Management & Consulting", href: "/about/solutions/competency-consulting" },
    //     { text: "Competency Maps & Toolkits", href: "/competency-maps" },
    //     { text: "Rapid Program Deployment", href: "/rapid-program-deployment" },
    //     { text: "Competency Program Management", href: "/competency-program-management" }
    //   ]},
    //   {
    //     column: 3,
    //     handle: "tout-1",
    //     href: "/ability",
    //     heading: "Ability™",
    //     text: "Ability™ is the flagship organizational management tool, combining a powerful learning and compliance management engine with a competency development and assurance engine.",
    //     type: "tout"
    //   },
    //   {
    //     column: 3,
    //     handle: "tout-2",
    //     href: "/blended",
    //     heading: "eLearning for Engineers & Technical Professionals",
    //     text: "The Competency Alliance’s eLearning solutions combine industry knowledge, expertise, content, and technology to develop workforce competency. Online learning accelerates time to competency while eliminating travel expenses.",
    //     type: "tout"
    //   },
    //   {
    //     column: 3,
    //     handle: "tout-3",
    //     href: "/blended",
    //     heading: "eLearning for Operations and Maintenance",
    //     text: "Identify and bridge knowledge gaps in your workforce with our comprehensive eLearning courses in Health, Safety, Environment, and Technical Skills. Tailored for Operations and Maintenance Personnel, our programs support new hires, technicians, operators, and craftspeople at every stage of their careers.",
    //     type: "tout"
    //   }
    // ]},
    {
      handle: "solutions",
      heading: "Solutions",
      listType: "link",
      menuType: "dropdown",
      items: [
        { heading: "Training Solutions",
          menuType: "nested",
          listType: "link",
          items: [
            { text: "Competency Management & Consulting", href: "/about/solutions/competency-consulting" },
            { text: "Competency Maps & Toolkits", href: "/competency-maps" },
            { text: "Rapid Program Deployment", href: "/rapid-program-deployment" },
            { text: "Competency Program Management", href: "/competency-program-management" }
            ]
        },
        { heading: "Competency Consulting",
          menuType: "nested",
          listType: "link",
          items: [
            { text: "Competency Management & Consulting", href: "/about/solutions/competency-consulting" },
            { text: "Competency Maps & Toolkits", href: "/competency-maps" },
            { text: "Rapid Program Deployment", href: "/rapid-program-deployment" },
            { text: "Competency Program Management", href: "/competency-program-management" }
            ]
        },

    ]},
    {
      handle: "products",
      heading: "Products",
      listType: "icon",
      menuType: "dropdown",
      items: [
      {
        heading: "Courses",
        icon: "ci-edit",
        href: "/training?productType%5B%5D=Course",
      },
      {
        heading: "eLearning for Engineers",
        icon: "ci-idea",
        href: "/blended",
      },
      {
        heading: "eLearning for Operations",
        icon: "ci-rocket",
        href: "/about/solutions/epilot-elearning-libraries",
      },
      {
        heading: "Simulators",
        icon: "ci-lightning",
        href: "/about/solutions/console-operator-training",
      }
    ]},
    {
      handle: "resources",
      heading: "Resources",
      listType: "icon",
      menuType: "dropdown",
      items: [
      {
        heading: "Blog",
        href: "/blog",
        icon: "ci-edit"
      },
      {
        heading: "Catalogs",
        href: "/resources/catalogs",
        icon: "ci-view-grid"
      },
      {
        heading: "Webinars",
        href: "/resources/webinars",
        icon: "ci-video"
      },
      {
        heading: "FAQ",
        href: "/certification-faq",
        icon: "ci-edit"
      },
      {
        heading: "Contact us",
        href: "/contact",
        icon: "ci-mail"
      },
      {
        heading: "Registration Policies",
        href: "/registration-policies",
        icon: "ci-edit"
      }
    ]}
  ]
};