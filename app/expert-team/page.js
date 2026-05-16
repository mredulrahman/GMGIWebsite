"use client";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profilesFile from '@/app/data/profiles.json';

const allTeamMembers = profilesFile.teammembersprofilesData;

function MemberCard({ member }) {
  return (
    <div className="relative pt-28">
      <div className="absolute top-0 inset-x-0 flex items-center">
        <div className="flex-1 h-[4.5px] bg-gray-800" />
        <div className="relative w-56 h-56 shrink-0 rounded-t-full rounded-b-full overflow-hidden border-6 border-gray-100 shadow-md bg-gray-100 z-10">
          <Image
            src={member.image}
            alt={member.name}
            width={224}
            height={224}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          />
        </div>
        <div className="flex-1 h-[4.5px] bg-gray-800" />
      </div>

      <div className="bg-white shadow-md px-6 pt-35 pb-5 flex flex-col items-center text-center h-full min-h-50">
        <p className="font-normal text-gray-900 text-lg">{member.name}</p>
        <p className="text-gray-500 text-md mt-1 leading-snug">{member.role}</p>

        {(member.linkedin || member.email) && (
          <div className="flex items-center gap-3 mt-4">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center rounded bg-[#5285BF] text-white transition-colors hover:bg-[#436d9d]"
              >
                <FontAwesomeIcon icon={faLinkedin} size="sm" />
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="w-6 h-6 flex items-center justify-center rounded bg-gray-500 text-white hover:bg-gray-600 transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} size="sm" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main>
      <div className="relative z-10">
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {allTeamMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}