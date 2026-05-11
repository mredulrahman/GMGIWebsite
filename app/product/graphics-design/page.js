import Image from "next/image";

export const metadata = {
    title: "Graphic Design – GMGI Solutions Ltd.",
    description:
        "GMGI Solutions Ltd. graphic design services: brochures, logos, ID cards, visiting cards, certificates, merchandise and more.",
};
const SectionHeading = ({ text }) => (
    <h2 className="text-lg font-bold text-gray-900 mb-3">{text}</h2>
);
const DesignImage = ({ src, alt, className = "", imgClassName = "" }) => (
    <div className={`overflow-hidden ${className}`}>
        {src ? (
            <Image
                src={src}
                alt={alt}
                width={620}
                height={460}
                className={`w-full h-full object-cover ${imgClassName}`}
            />
        ) : (
            <div className="w-full h-full min-h-[200px]" />
        )}
    </div>
);
export default function Page() {
    return (
        <main className="bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
                <section>
                    <DesignImage
                        src="/images/professional-multicolor-concept-map-graph.png"
                        alt="Graphic Design services mind map – UX/UI Design, Logo Design, Info Graphic, Visiting Card, Web Banner, Brochure, Ebook, Products Catalog"
                        className="w-full rounded-sm"
                        imgClassName="object-contain"
                    />
                </section>
                <section>
                    <SectionHeading text="Brochure Design Sample" />
                    <div className="grid grid-cols-2 gap-3">
                        <DesignImage
                            src="/images/Capture.JPGdytdydy.jpg"
                            alt="Brochure design sample – left page"
                            className="min-h-[200px]"
                        />
                        <DesignImage
                            src="/images/tjtfhtrhtr.jpg"
                            alt="Brochure design sample – right page"
                            className="min-h-[200px]"
                        />
                    </div>
                </section>
                <section className="grid grid-cols-2 gap-8 items-start">
                    <div>
                        <SectionHeading text="LOGO Sample" />
                        <DesignImage
                            src="/images/gmgi_logo_trans.png"
                            alt="GMGI Solutions Ltd logo design sample"
                            className="min-h-[260px]"
                            imgClassName="object-contain"
                        />
                    </div>
                    <div>
                        <SectionHeading text="Bag, Pen, Mug Design" />
                        <DesignImage
                            src="/images/gregerger.png"
                            alt="GMGI Solutions Ltd bag, pen and mug merchandise design"
                            className="min-h-[200px]"
                        />
                    </div>
                </section>
                <section className="grid grid-cols-2 gap-8 items-start">
                    <div>
                        <SectionHeading text="ID Card" />
                        <DesignImage
                            src="/images/trherhrh.jpg"
                            alt="GMGI Solutions Ltd employee ID card design sample"
                            className="min-h-[280px]"
                        />
                    </div>

                    <div>
                        <SectionHeading text="Visiting card" />
                        <DesignImage
                            src="/images/fuifigigigi.jpg"
                            alt="GMGI Solutions Ltd visiting card design sample"
                            className="min-h-[280px]"
                        />
                    </div>
                </section>
                <section className="grid grid-cols-2 gap-8 items-start">
                    <div>
                        <SectionHeading text="Training Certificate" />
                        <DesignImage
                            src="/images/2626.jpg"
                            alt="GMGI Solutions Ltd training certificate design sample"
                            className="min-h-[240px]"
                        />
                    </div>
                    <div>
                        <SectionHeading text="T-Shirt" />
                        <DesignImage
                            src="/images/IMG_20230116_121611_edit_286488492412013-978x1024.jpg"
                            alt="GMGI Solutions Ltd branded T-shirt design"
                            className="min-h-[240px]"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}