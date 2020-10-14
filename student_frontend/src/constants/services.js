import React from "react"
import { FaCode, FaDatabase, FaHtml5 } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaHtml5 className="service-icon" />,
    title: "Webbutveckling",
    text: `Jag har ett intresse för och kunskaper inom webbutveckling bl.a. HTML, CSS och JavaScript`,
  },
  {
    id: 2,
    icon: <FaCode className="service-icon" />,
    title: "Backend",
    text: `Jag har kunskaper inom C# och .NET och erbjuder applikationsutveckling med exempelvis MVC och Blazor.`,
  },
  {
    id: 3,
    icon: <FaDatabase className="service-icon" />,
    title: "Databas",
    text: `Jag designar även och underhåller MSSQL, MySQL och MongoDb databaser.`,
  },
]
