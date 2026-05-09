import Image from "next/image";

export default function Page() {
    return (
        <main className="bg-white min-h-screen font-serif">
            <section className="max-w-5xl mx-auto px-6 pt-12 pb-8">
                <p className="text-gray-800 text-base leading-relaxed mb-5">
                    When we work on material, we often notice that we are missing a small
                    feature that, if added, could take our work to another level. This
                    simple yet technical feature requires a skill that is not beneficial
                    for you to learn in the long run. Imagine getting that feature a few
                    hours after you first contacted them. It seems practical, doesn't it?
                </p>
                <p className="text-gray-800 text-base leading-relaxed">
                    These kinds of solutions to your problems are what we at{" "}
                    <strong>GMGI Solutions Ltd.</strong> work to offer. We can help you
                    with anything you need, including maps, research, reviews, assistance,
                    surveys, dashboards, creative design, videography, and equipment
                    rentals. The GMGI solution is{" "}
                    <strong>Your Worries' One-Stop Solution.</strong>
                </p>
            </section>
            <section className="max-w-5xl mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative w-full overflow-hidden rounded-sm shadow-md">
                        <Image
                            src="/images/egwrgr-724x1024.png"
                            alt="GMGI Solutions Ltd – 1 Stop Solution poster showing core service areas"
                            width={560}
                            height={560}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                    <div className="relative w-full overflow-hidden rounded-sm shadow-md">
                        <Image
                            src="/images/egrehe-724x1024.png"
                            alt="GMGI Core Services – Dashboard, GIS, Remote Sensing, Survey, Software Development and more"
                            width={560}
                            height={560}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}