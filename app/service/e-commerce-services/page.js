const features = [
    {
        title: "Custom Websites",
        detail: "Designed to boost product visibility and conversions.",
    },
    {
        title: "Mobile Optimization",
        detail: "Designed for seamless, mobile-friendly shopping experiences.",
    },
    {
        title: "Payment Gateway Integration",
        detail: "Secure, multi-option payment setups.",
    },
    {
        title: "Analytics & Insights",
        detail: "Data-driven insights to fuel growth.",
    },
    {
        title: "Inventory & Order Management",
        detail: "Real-time tracking and automated order management.",
    },
    {
        title: "SEO & Digital Marketing",
        detail: "Built-in SEO and marketing integrations for broader reach.",
    },
];

export default function Page() {
    return (
        <main className="min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-black">
                    E-Commerce Solutions
                </h1>
                <p className="text-black text-base leading-relaxed">
                    Our e-commerce solutions are designed to support your business growth and improve customer experiences:
                </p>
                <div className="space-y-2">
                    <p className="text-black text-base leading-relaxed">
                        <strong>Platform Support</strong>: Customized solutions using WooCommerce, Shopify, Magento, and our own customized e-commerce platform for advanced flexibility and scalability.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 pt-2">
                        {features.map((f, i) => (
                            <p key={i} className="text-black text-base leading-relaxed">
                                <strong>{f.title}</strong>: {f.detail}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}