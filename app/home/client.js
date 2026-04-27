import Image from "next/image";

const clients = [
  {
    id: 1,
    name: "DGHS",
    image: "/images/DGHS-logo-1-600x337.jpg",
  },
  {
    id: 2,
    name: "UNDP",
    image: "/images/undp-logo-5682674D5C-seeklogo.com_.png",
  },
  {
    id: 3,
    name: "British Red Cross",
    image: "/images/British_Red_Cross_logo.svg-600x138.png",
  },
  {
    id: 4,
    name: "Swedish Red Cross",
    image: "/images/screenshot-tec.alnap_.org-2022.07.01-12_03_55.png",
  },
  {
    id: 5,
    name: "eGeneration",
    image: "/images/egeneration-logo.png",
  },
  {
    id: 6,
    name: "Chattogram City Corporation",
    image: "/images/chittagong-city-corporation-logo-582058BF49-seeklogo.com_.png",
  },
  {
    id: 7,
    name: "Bangladesh Government",
    image: "/images/logo-600x600.jpg",
  },
  {
    id: 8,
    name: "UNOPS",
    image: "/images/unops.png",
  },
  {
    id: 9,
    name: "Roads and Highways",
    image: "/images/8859359_New-Project-1-600x315.jpg",
  },
  {
    id: 10,
    name: "Highways Department",
    image: "/images/logoRHD.jpg",
  },
  {
    id: 11,
    name: "HKMC",
    image: "/images/1599994437172.jpg",
  },
  {
    id: 12,
    name: "Ministry of Defence Bangladesh",
    image: "/images/download-1.jpg",
  },
  {
    id: 13,
    name: "Center for Geoservices & Research",
    image: "/images/Logo_CGR-600x167.png",
  },
  {
    id: 14,
    name: "CMED",
    image: "/images/download.png",
  },
  {
    id: 15,
    name: "Client 15",
    image: "/images/image_2022_09_19T06_50_55_068Z-1.png",
  },
];

function ClientLogo({ client }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full h-28">
        <Image
          src={client.image}
          alt={client.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>
    </div>
  );
}

export default function OurClients() {
  return (
    <section>
        <h1 className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl md:text-2xl px-6 md:px-18 text-center py-1">Our Clients</h1>
      <div className="py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12">
          {clients.map((client) => (
            <ClientLogo key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}