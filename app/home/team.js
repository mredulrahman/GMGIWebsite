import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profilesFile from '@/app/data/profiles.json';


const teamMembers = profilesFile.teammembersprofilesData.slice(0, 6);

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MemberCard({ member }) {
  return (
    <div className="relative pt-28">
      <div className="absolute top-0 inset-x-0 flex items-center">
        <div className="flex-1 h-[4.5px] bg-gray-800" />
        <div className="relative w-56 h-56 shrink-0 rounded-t-full rounded-b-full overflow-hidden border-6 border-gray-100 shadow-md bg-gray-100 z-10">
          <Image
            src={member.image}
            alt={member.name}
            // fill
            width={100}
            height={100}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          />
        </div>
        <div className="flex-1 h-[4.5px] bg-gray-800" />
      </div>
 
      <div className="bg-white shadow-md px-6 pt-35 pb-5 flex flex-col items-center text-center">
        <p className="font-normal text-gray-900 text-lg">{member.name}</p>
        <p className="text-gray-500 text-md mt-1 leading-snug">{member.role}</p>
 
        {(member.linkedin || member.email) && (
          <div className="flex items-center gap-3 mt-4">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center rounded bg-[#5285BF] text-white transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} size="md" />
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="w-6 h-6 flex items-center justify-center rounded bg-gray-500 text-white hover:bg-gray-600 transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} size="md" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ExpertTeam() {
  return (
    <section className="">
        <h1 className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl md:text-2xl px-6 md:px-18 text-center py-1">Our Expert Team</h1>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/expert-team">
            <button className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-normal text-sm md:text-md px-6 md:px-10 text-center py-1 cursor-pointer hover:opacity-90 transition-opacity">
              show All Members
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}