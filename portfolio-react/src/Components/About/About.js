import React from 'react'

export const About = () => {
    return (
        <section className="about-me" id="about">
           <h2 className="section__title section__title--about">Who I am</h2>
           <p className="section__subtitle section__subtitle--about">Web developer based in Italy</p>
           
           <div className="about-me__body">
               <p>
                    Hello, I am Franklin Macias. Nice to meet you.
                    I experience in front-end developer and have good knowledge of HTML, CSS, JavaScript (ES6), React.js, Node.js, MongoDB and Express.js.
                </p>
               <p>
                    On a personal level, I am highly motivated, result oriented, self-driven, hardworking, a fast learner and constantly seeking to improve my skills, 
                    and I am an avid user of the latest front-end development tools. 
                </p>
                <p>
                    I adapt well to different cultures and environments.  I  am independent as an individual contributor but I am team oriented and get along well with 
                    others when working in a group.
                </p>
           </div>
           
           <img src="/img/dev-frank-02.jpg" alt="profile" className="about-me__img" />
        </section>
    )
}
