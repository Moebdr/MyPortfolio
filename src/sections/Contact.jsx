import { AnimateContact } from "../animation/Animate";
import Social from "../Resources/Contact";

export default function Contact() {
  return (
    <section className="  bg-gray-900 p-10" id="CONTACT">
      <h1 className="uppercase text-xl md:text-2xl lg:text-3xl text-white p-6 mb-3 flex items-center justify-center gap-5">
       
        CONTACT
       <button className="animate-bounce text-blue-500 "> <svg className = "rotate-270"stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
       </button>
      </h1>
      <div className="container  text-white bg-blue-950 ">
        <ContactInfo />
      </div>
    </section>
  );
}


function ContactInfo(){
return(
  <ul className="grid  md:grid-cols-3 lg:grid-cols-4 gap-5 place-content-center  p-5">
          {Social.map((account) => (
            <AnimateContact delay={account.id*.2}>
            <li
              key={account.id}
              className="mx-auto md:mx-0 gap-3 w-50 "
            >
              <button
                className=" w-48 text-center cursor-pointer text-sm md:text-lg lg:text-xl rounded-md "
                style={{ color: "white", background: account.color }}
              >
                <a
                  href={account.link}
                  target="_blank"
                  className="flex items-center gap-5 p-3"
                  style={{ width: "100%" }}
                >
                  <account.icon />
                  {account.name}
                </a>
              </button>
            </li>
            </AnimateContact>
          ))}
        </ul>
)
}