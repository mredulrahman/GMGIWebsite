
import data from "@/app/data/history.json";
import Image from "next/image";
const { servicesData } = data;

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: String(service.id) }));
}


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => String(s.id) === slug) ?? null;
  if (!service) return { title: "Service Not Found" };
  return { title: service.title };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => String(s.id) === slug) ?? null;

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <p className="text-6xl mb-4">404</p>
          <p className="text-xl text-slate-400">Service not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-2 py-14 space-y-16">
        {service.sections.map((section, idx) =>
          section.type === "text" ? (
            <TextSection key={idx} section={section} />
          ) : (
            <TextImageSection key={idx} section={section} />
          )
        )}
      </div>

      {/* Footer */}
      {/* <div className="border-t border-gray-100 py-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-800 transition-colors font-medium"
        >
          ← Back to all services
        </Link>
      </div> */}
    </main>
  );
}

function TextSection({ section }) {
  const { title, intro, bullets = [], numbered = false } = section;

  return (
    <section className="space-y-5">
      {intro && (
        <p className="text-gray-700 text-base leading-relaxed font-normal">
          {intro}
        </p>
      )}

      <h2 className="text-xl md:text-4xl font-extrabold text-gray-900 leading-snug">
        {title}
      </h2>

      {numbered ? (
        <ol className="space-y-2 pt-1">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center shadow-sm">
                {i + 1}
              </span>
              <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2 pt-1">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 shrink-0 w-2 h-2 rotate-45 bg-teal-400 rounded-xs" />
              <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}


function TextImageSection({ section }) {
  const { title, body, images = [], bullets = [], numbered = false } = section;
  const multi = images.length >= 2;

  return (
    <section className="space-y-5">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
          {title}
        </h2>
      )}

      {body && (
        <p className="text-black text-sm md:text-xl leading-relaxed whitespace-pre-line">
          {body}
        </p>
      )}

      {numbered ? (
        <ol className="space-y-2 pt-1">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center shadow-sm">
                {i + 1}
              </span>
              <span className="text-black text-sm md:text-xl leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2 pt-1">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 shrink-0 w-2 h-2 rotate-45 bg-teal-400 rounded-xs" />
              <span className="text-black text-sm md:text-xl leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {images.length > 0 && (
        <div
          className={
            multi
              ? "grid grid-cols-2 gap-8"
              : "block"
          }
        >
          {images.map((img, i) => (
            <figure
              key={i}
              className="overflow-hidden"
            >
              <div
                className={`relative w-full ${multi ? "h-56 md:h-180" : "h-72 md:h-200"
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                  sizes={multi ? "50vw" : "100vw"}
                />
              </div>
              {/* {img.caption && (
                <figcaption className="px-4 py-2 text-xs text-gray-500 border-t border-gray-100 whitespace-pre-line">
                  {img.caption}
                </figcaption>
              )} */}
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}