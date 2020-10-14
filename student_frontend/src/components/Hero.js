import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { FaUserNurse } from "react-icons/fa"
// ...GatsbyImageSharpFluid

// const query = graphql`
//   {
//     file(relativePath: { eq: "hero-img.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const query = graphql`
  {
    file(relativePath: { eq: "Mitt ansikte.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>Sureerat</h1>
            <div className="underline"></div>
            {/* <h4>Utbildningsledare inom YH och utbildare inom IT</h4> */}
            - <FaUserNurse className="hero-icon" />Jag utbildad som undersköterska.
            <br />
            - 🧑‍🎓 Jag studerar till systemutvecklare inom .NET.
            <br />
            - 😎 Modersmål:Thailändska men pratar flytande svenska.
            <br />
            - ❤ Jag älskar allt som handlar om web.
            <br />
            -💪 Fritider: träna,läsa en bok
            <br />
           
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.htmldog.com/guides/html/beginner/"
            >
              Html
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.htmldog.com/guides/css/beginner/"
            >
              Css
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
            >
              Javascript
            </a>{" "}
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://websitesetup.org/bootstrap-tutorial-for-beginners/"
            >
              Bootstrap
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tutorialrepublic.com/sql-tutorial/"
            >
              SQL
              </a>
              ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dotnet.microsoft.com/learn/aspnet/blazor-tutorial/intro"
            >
              Blazor
              </a>
            <br />
            - 📫 Du kan nå mig via länken. :)
            <br />
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}
export default Hero
