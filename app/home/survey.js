import styled from 'styled-components';
import Image from 'next/image';

const equipment = [
  { id: 1, name: "Total Station", img: "/images/f.jpg" },
  { id: 2, name: "Total Station", img: "/images/g-rotated.jpg" },
  { id: 3, name: "GNSS RTK", img: "/images/rtx.jpg" },
  { id: 4, name: "Ground Penetrating Rader", img: "/images/j.jpg" },
  { id: 5, name: "Pipe Locator", img: "/images/l-rotated.jpg" },
  { id: 6, name: "Eco Sounder", img: "/images/v-new-2.jpg" },
  { id: 7, name: "Drone", img: "/images/h.jpg" },
  { id: 8, name: "Digital Level", img: "/images/z-1.jpg" },
  { id: 9, name: "Auto Level", img: "/images/stand-new.jpg" },
  { id: 10, name: "Handheld GPS", img: "/images/x-1.jpg" }
];

function ArrowCircleIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-3 opacity-90"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M13 8l4 4-4 4" />
    </svg>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  
  .card {
    width: 100%;
    height: 220px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  .card:hover {
    transform: rotateY(180deg) scale(1.1);
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    
    .card-front {
    transform: rotateY(0deg);
    }
        
    .card-back {
    text-align: left;
    color: #fff;
    transform: rotateY(180deg);
  }`;

function EquipmentCard({ item }) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <div className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] w-full h-full flex flex-col items-center justify-center text-white text-center px-3 cursor-pointer transition-all duration-200">
              <ArrowCircleIcon />
              <p className="font-extrabold text-xl md:text-2xl leading-tight">{item.name}</p>
            </div>
          </div>
          <div className="card-back">
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SurveyEquipment() {
  return (
    <section>
      <h1 className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl md:text-2xl px-6 md:px-18 text-center py-1">Survey Equipment</h1>
      <StyledWrapper>
        <div className="max-w-7xl mx-auto py-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {equipment.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </StyledWrapper>
    </section>
  );
}