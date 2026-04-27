// components/ContactSection.tsx
// Next.js + Tailwind CSS — GMGI Solutions Ltd. Contact Section
// Usage: import ContactSection from "@/components/ContactSection"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
    label: "Office Address",
    value: (
      <>
        House : 6/20 (1st floor), Block- E,<br />
        Lalmatia, Mohammadpur,<br />
        Dhaka, Bangladesh.
      </>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.35.02.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    label: "Phone",
    value: (
      <a href="" className="hover:text-white transition-colors">
        01711588142
      </a>
    ),
    valueClass: "text-cyan-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    label: "Email",
    value: (
      <a
        href="mailto:info@gmgisolutionsltd.com"
        className="hover:underline text-[#34D2CF] transition-colors break-all"
      >
        info@gmgisolutionsltd.com
      </a>
    ),
    // valueClass: "text-cyan-400",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    value: (
      <a
        href="mailto:info@gmgisolutionsltd.com"
        // className="hover:text-white transition-colors break-all"
      >
        https://www.facebook.com/gmgisolutions
      </a>
    ),
    // valueClass: "text-cyan-400",
    icon: (
      <FontAwesomeIcon icon={faFacebookF} className="text-md bg-white text-blue-950 hover:bg-blue-900 rounded-full hover:text-white p-2 transition duration-400" />
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com/gmgisolutions",
    icon: (
      <FontAwesomeIcon icon={faXTwitter} className="text-md bg-white text-blue-950 hover:bg-black rounded-full hover:text-white p-2 transition duration-400" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/gmgi-solutions-limited",
    icon: (
      <FontAwesomeIcon icon={faLinkedinIn} className="text-md bg-white text-blue-950 hover:bg-[#0077B5] rounded-full hover:text-white p-2 transition duration-400" />
    ),
  },
  {
    label: "Google+",
    href: "https://gmgisolutionsltd.com/",
    icon: (
      <FontAwesomeIcon icon={faGooglePlusG} className="text-md bg-white text-blue-950 hover:bg-[#DB4437] rounded-full hover:text-white p-2 transition duration-400" />
    ),
  },
];

export default function ContactSection() {
  return (
    <section className="md:py-10 md:px-25 p-5 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/dashboard/abstract-geometric-white-background-free-vector.jpg')" }}>
        <div className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden gap-5 md:mb-46 mb-2">
          <div className="lg:col-span-3 flex flex-col md:flex-row min-h-50">
            <div className="flex items-center justify-center p-8">
              <div className="relative w-32 h-32">
                <Image
                  src="/hero/gmgi_logo_trans_w10.png"
                  alt="GMGI Solutions Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="relative flex-1 min-h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8000876385695!2d90.36533999999999!3d23.7545073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bff02d460cc1%3A0x8b93c0e7e1ca8da0!2sGMGI%20Solutions%20Ltd.!5e0!3m2!1sen!2sbd!4v1776831870025!5m2!1sen!2sbd"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GMGI Solutions Ltd. Location"
              />
            </div>
          </div>
          <div className="lg:col-span-2 bg-[#0d1b3e] px-8 py-10 flex flex-col gap-7">
            <h3 className="text-white text-3xl font-extrabold leading-none">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              {contactDetails.map(({ icon, label, value, valueClass }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center shrink-0 text-[#34D2CF]">
                    {icon}
                  </div>
                  <div>
                    <p className={`text-md font-medium leading-relaxed text-white`}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-5">
              <div className="flex gap-2">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}