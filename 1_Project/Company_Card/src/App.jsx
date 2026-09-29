import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
    
    const jobData = [
  {
    "brandLogo": "https://yt3.googleusercontent.com/bAseQlKvNmjdLQrvYWm_q3QDp8C8YKyYI-nYJewgOkPi0JU1_3X9oFgjrEdzkOlXzLGFxFbnsw=s900-c-k-c0x00ffffff-no-rj",
    "nameOfCompany": "Google",
    "datePosted": "3 days ago",
    "post": "Software Engineer III",
    "tag1": "full time",
    "tag2": "senior level",
    "pay": 135,
    "location": "mumbai, india"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmu0Z0sfC-g-EFKBN8Gn8UmHya4FnH_M-Pph29WPW3A&s=10",
    "nameOfCompany": "Microsoft",
    "datePosted": "1 week ago",
    "post": "Frontend Developer",
    "tag1": "full time",
    "tag2": "junior level",
    "pay": 95,
    "location": "mumbai, india"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yQuKUFG8GfKlDK_F5Tfkvh2-TMw77rL5HZ9kDWjUoA&s=10",
    "nameOfCompany": "Amazon",
    "datePosted": "2 weeks ago",
    "post": "Backend Engineer",
    "tag1": "full time",
    "tag2": "senior level",
    "pay": 120,
    "location": "mumbai, india"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmnegaH7GG9MwjMg7MC8E8wh-AWlI7S7fLI-XlrkDDQ&s=10",
    "nameOfCompany": "Meta",
    "datePosted": "4 days ago",
    "post": "React Native Developer",
    "tag1": "full time",
    "tag2": "senior level",
    "pay": 140,
    "location": "mumbai, india"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9Lvpxyijz3ndjPAtM0cIwcWCDVc9L4w7A8o-4_XaIQ&s=10",
    "nameOfCompany": "Apple",
    "datePosted": "5 days ago",
    "post": "iOS Software Engineer",
    "tag1": "full time",
    "tag2": "senior level",
    "pay": 150,
    "location": "mumbai, india"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGk5g00BgxAC8aoPmj1DpGgNqKIqt2F2JPvMS1epIOg&s=10",
    "nameOfCompany": "Netflix",
    "datePosted": "2 weeks ago",
    "post": "UI Engineer",
    "tag1": "full time",
    "tag2": "senior level",
    "pay": 160,
    "location": "mumbai, india"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2F_eA2zHsT64HAOyvdumCc6etevIqHAiBwfds90G-w&s=10://example.com/logos/adobe.png",
    "nameOfCompany": "Adobe",
    "datePosted": "10 weeks ago",
    "post": "Full Stack Developer",
    "tag1": "full time",
    "tag2": "junior level",
    "pay": 90,
    "location": "mumbai, india"
  },
  {
    "brandLogo": "https://images.icon-icons.com/2407/PNG/512/uber_icon_146046.png",
    "nameOfCompany": "Uber",
    "datePosted": "6 days ago",
    "post": "Software Engineer II",
    "tag1": "full time",
    "tag2": "junior level",
    "pay": 110,
    "location": "mumbai, india"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmO3NvxWiCNfNaZtN0GcTPruKG4tjHPfCh3X0wQJAePg&s=10",
    "nameOfCompany": "Salesforce",
    "datePosted": "3 weeks ago",
    "post": "Web Developer",
    "tag1": "full time",
    "tag2": "senior level",
    "pay": 105,
    "location": "mumbai, india"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkF518ZNLagX8wj_LMawvjNcdMEuI8rLSf27CrKR-qmA&s=10",
    "nameOfCompany": "LinkedIn",
    "datePosted": "8 weeks ago",
    "post": "JavaScript Developer",
    "tag1": "full time",
    "tag2": "junior level",
    "pay": 100,
    "location": "mumbai, india"
  }
]


  return (
    <div className='parent'>
      {jobData.map(function(ele,idx){
        return (
          <div>
            <Card 
            key ={idx}
            company={ele.nameOfCompany}
            datePosted={ele.datePosted}
            post={ele.post}
            tag1={ele.tag1}
            tag2={ele.tag2}
            pay={ele.pay}
            location={ele.location}
            brandLogo={ele.brandLogo}
          />
          </div>
        )
      })}
    </div>
  )
}

export default App
