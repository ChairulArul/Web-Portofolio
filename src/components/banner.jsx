import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center justify-center text-center"
    >
      <div className="w-full" data-aos="zoom-in">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello I am
          <div>
            <TypeAnimation
              sequence={[
                "CHAIRUL 😁",
                3000,
                "Information Technology Students 👨‍💻",
                3000,
                "Beginner Front-End Web 🚀",
                3000,
                "Lets Sharing 🌍",
                3000,
              ]}
              wrapper="span"
              speed={50}
              className="ml-3 text-secondary"
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="max-w-[550px] mx-auto mt-5">
          Hallo, saya Chairul, saya seorang mahasiswa Teknologi informasi yang
          sedang menempuh pendidikan di Universitas Mikroskil. Saya memiliki
          minat dalam bidang teknologi dan pengembangan web. Dan ini adalah
          website porfolio saya
        </div>
      </div>
    </div>
  )
}
