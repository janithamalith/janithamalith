// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/janithamalith/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/janithamalith/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/janithamalith/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Here, you can explore my academic background, research interests, teaching experience, and professional achievements. I hold a Master&#39;s degree from the University of Hawai’i, where I had the privilege of working under the guidance of Professor David Ross. For a detailed overview of my qualifications, please feel free to click on the PDF button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/janithamalith/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/janithamalith/teaching/";
          },
        },{id: "post-natural-sums-of-ordinals",
      
        title: "Natural Sums of Ordinals",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/janithamalith/blog/2025/math/";
        
      },
    },{id: "post-a-problem-of-skolem-part-01",
      
        title: "A Problem of Skolem - Part 01",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/janithamalith/blog/2025/math/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/janithamalith/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-a-monadic-logic-for-capacity-quantifiers",
          title: 'A Monadic Logic for Capacity Quantifiers',
          description: "Master&#39;s Project",
          section: "Projects",handler: () => {
              window.location.href = "/janithamalith/projects/1_project/";
            },},{id: "projects-formalizing-some-results-related-to-ordered-and-unordered-pairs",
          title: 'Formalizing Some Results Related to Ordered and Unordered Pairs',
          description: "Class Project",
          section: "Projects",handler: () => {
              window.location.href = "/janithamalith/projects/2_project/";
            },},{id: "projects-parking-functions-and-labelled-trees",
          title: 'Parking Functions and Labelled Trees',
          description: "Class Project",
          section: "Projects",handler: () => {
              window.location.href = "/janithamalith/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/janithamalith//feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
