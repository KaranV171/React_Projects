import { Section } from 'lucide-react'
import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag : "Underserved"
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag : "Underbanked"
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1673976275849-986056b83cae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag : "Unbox",
    }
  ]

  return (
    <div>
        <Section1 users={users}/>
        <Section2 />
    </div>
  )
}

export default App