// Declare portfolio items
const portfolio_data = [
   {
     link: "https://twistedcore.co.uk/photomap", 
     image:"photomap", 
     title: "PhotoMap",
     description: "View your Google Photos on a world map"
    },
    {
      link: "https://chrome.google.com/webstore/detail/mytutor-calendar/gidonccfebhenghahakccknmhjmdfcfi",
      image: "mtc",
      title: "MyTutor Calendar",
      description: "Automatically sync tutor sessions to your calendar"
    },
    {
      link: "https://ysjournal.com",
      image: "optimised/ysj",
      title: "Young Scientists Journal",
      description: "Science journal for young people"
    },
    {
      link: "https://twenty.ysjournal.com",
      image: "optimised/twenty_2",
      title: "Young Scientists Journal: Issue 20",
      description: "Fresh issue format for a journal"
    },
    {
      link: "https://compass-edinburgh.co.uk",
      image: "optimised/compass",
      title: "Compass",
      description: "Edinburgh-based person centered counselling"
    },
    {
      link: "https://googpress.org",
      image: "optimised/googpress",
      title: "GoogPress",
      description: "Build websites using Google Docs"
    }
]

ReactDOM.render(
    <Portfolio 
          items={portfolio_data}
        />
  ,
    
  document.getElementById('images')
)

ReactDOM.render(
<Header
  title="Stewart McGown"
  links={[
    {
      link: '#',
      text: "Portfolio"
    },
    {
      link: "https://github.com/stewartmcgown",
      text: "Open Source"
    }, 
    {
      link: '#',
      text: 'Contact'
    },
    {
      link: "/resumes/Stewart McGown - CV-min.pdf",
      text: "Resume"
    }
  ]}
/>,
document.getElementById('header')
)