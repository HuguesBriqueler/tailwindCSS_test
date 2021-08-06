import React from 'react'

function Welcome() {
  const technoData = [
    {id: 1,
    techno_name: "Html / CSS"},
    {id: 2,
    techno_name: "Javascript"},
    {id: 3,
    techno_name: "React"},
    {id: 4,
    techno_name: "Node.js"}            
  ]

  return (
      <div className="default-page bg-yellow-200">
          <h1>Hugues Briqueler</h1>
          <p>
            <ul>
              <li>Développeur web</li>
              <li>et web mobile</li>
            </ul>
          </p>
          <>
            <ul>
            {technoData.map((item, index) => { return (
              <li key={index}>{item.techno_name}</li>)})}
            </ul>
          </>
      </div>
  )
}

export default Welcome
