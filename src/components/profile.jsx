import React, { useState } from "react"

export default function Profile() {
  const [profileName, setProfileName] = useState("Chairul")
  const skills = [
    {
      image: "/images/2.png",
      title: "Bootstrap",
      description: "Saya pernah pakai Bootstrap",
    },
    {
      image: "/images/3.png",
      title: "CSS Vanilla",
      description: "Saya pernah pakai CSS Vanilla",
    },
    {
      image: "/images/4.png",
      title: "HTML",
      description: "Saya pernah pakai HTML",
    },
  ]

  return (
    <div id="profile" className="section">
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        <div
          className="font-secondary text-center font-bold mb-12"
          data-aos="zoom-in-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h4 className="text-secondary mb-3">Awesome Skill</h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
            Berikut ini tools dasar yang pernah saya pelajari
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div
            className="text-center w-full max-w-[400px] mx-auto mb-[50px]"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden">
              <img src="/images/profile.png" alt="Profile" />
            </div>
            <h2 className="text-gradient text-[50px] mt-[20px]">
              {profileName}
            </h2>
          </div>

          <div>
            <div
              className="w-full lg:pt-[50px] lg:ml-[50px]"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {skills.map((skill, index) => (
                  <div key={index} className="w-full">
                    <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                      <img src={skill.image} alt={skill.title} />
                      <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                        <div className="text-center w-full text-white">
                          <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                            <h4 className="text-gradient">{skill.title}</h4>
                          </div>
                          <p>{skill.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
