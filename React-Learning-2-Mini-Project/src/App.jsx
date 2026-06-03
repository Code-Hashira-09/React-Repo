import React from 'react'
import Cards from './components/cards'

const jobDetails = [
  {
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    brandName: "Amazon",
    designation: "Sr. SDE-3",
    salary: "$1,000,000"
  },
  {
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560,c_limit/google-logo.jpg",
    brandName: "Google",
    designation: "Project Manager",
    salary: "$5,000,000"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    brandName: "Apple",
    designation: "Team Lead",
    salary: "$10,000,000"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    brandName: "Microsoft",
    designation: "Software Architect",
    salary: "$2,500,000"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Tesla_logo.png",
    brandName: "Tesla",
    designation: "Engineering Manager",
    salary: "$3,200,000"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Meta_Platforms_Inc._logo.svg",
    brandName: "Meta",
    designation: "Staff Engineer",
    salary: "$4,800,000"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    brandName: "Netflix",
    designation: "Senior Backend Engineer",
    salary: "$3,800,000"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    brandName: "IBM",
    designation: "Technical Consultant",
    salary: "$1,700,000"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Adobe_Corporate_logo.svg",
    brandName: "Adobe",
    designation: "Product Manager",
    salary: "$2,900,000"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Oracle_logo.svg",
    brandName: "Oracle",
    designation: "Principal Engineer",
    salary: "$3,500,000"
  }
];

const App = () => {
  return (
    <div className='parent'>
      {jobDetails.map(function (jobDetails) {
        return <Cards
          logo={jobDetails.logo}
          brandName={jobDetails.brandName}
          designation={jobDetails.designation}
          salary={jobDetails.salary} />
      })}
    </div>
  )
}

export default App