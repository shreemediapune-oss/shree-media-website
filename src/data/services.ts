import {
    Monitor,
    MapPin,
    Truck,
    Store,
    Search,
    Wrench,
    Printer,
    FileText,
    CreditCard,
    Flag,
    Lightbulb
} from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: any;
    image: string;
    features: string[];
    benefits: string[];
    category: 'outdoor' | 'print';
}

export const services: Service[] = [
    // Outdoor Services
    {
        id: 'hoardings-billboards',
        title: 'Hoardings & Billboards',
        shortDescription: 'High-impact outdoor advertising placed at premium, high-traffic locations. Perfect for brand awareness and long-term visibility.',
        fullDescription: 'Dominate the skyline with our premium hoarding and billboard solutions. We offer prime locations across the city to ensure your brand gets maximum exposure. From traditional large-format billboards to innovative gantries, our inventory is curated to deliver high impression counts.',
        icon: MapPin,
        image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=1600',
        features: [
            'Large-format static hoardings',
            'City-entry billboards',
            'Highway advertising',
            'Prime City Locations'
        ],
        benefits: [
            'Massive Brand Awareness',
            'Cost-Effective Reach',
            'Targeted Geographic Coverage',
            'Continuous Exposure'
        ],
        category: 'outdoor'
    },
    {
        id: 'led-screens',
        title: 'LED Screens & Digital Hoardings',
        shortDescription: 'Dynamic digital media solutions with vibrant visuals and motion graphics. Digital hoardings help brands stand out both day and night.',
        fullDescription: 'Step into the future of outdoor advertising with our state-of-the-art LED screens and digital hoardings. These high-definition displays allow for dynamic content, video ads, and real-time updates, making your campaign more engaging and interactive than ever before.',
        icon: Monitor,
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600',
        features: [
            'Product launches',
            'Event promotions',
            'High-engagement campaigns',
            'Day & Night Brightness Control'
        ],
        benefits: [
            'Higher Engagement Rates',
            'Flexible Content Scheduling',
            'Modern Brand Image',
            'Eye-Catching Visuals'
        ],
        category: 'outdoor'
    },
    {
        id: 'transit-ads',
        title: 'Pole Kiosks & Transit Media',
        shortDescription: 'Street-level media that captures attention from pedestrians and daily commuters. Best for local visibility and geo-targeted reach.',
        fullDescription: 'Capture the attention of commuters and pedestrians with our transit advertising and pole kiosk solutions. Whether it\'s bus branding, auto-rickshaw hoods, or strategically placed pole kiosks along major roads, we help you reach people where they move.',
        icon: Truck,
        image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=1600',
        features: [
            'Pole kiosks',
            'Auto-rickshaw branding',
            'Bus stand ads',
            'High-Traffic Routes'
        ],
        benefits: [
            'Hyper-Local Targeting',
            'High Frequency of Views',
            'Reach Commuters Effectively',
            'Cost-Efficient for Local Biz'
        ],
        category: 'outdoor'
    },
    {
        id: 'mall-branding',
        title: 'Mall Branding',
        shortDescription: 'Premium indoor advertising at high-footfall malls. Perfect for retail, lifestyle, education, and service industries.',
        fullDescription: 'Place your brand in the heart of shopping and leisure activities. Our mall branding options offer a captive audience in a relaxed environment, perfect for driving purchase intent and brand recall.',
        icon: Store,
        image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?auto=format&fit=crop&q=80&w=1600',
        features: [
            'Standee displays',
            'Escalator branding',
            'Entry gates & lobby branding',
            'Food Court Branding'
        ],
        benefits: [
            'Target Shoppers with Intent',
            'Long Dwell Times',
            'Premium Environment',
            'Direct Point-of-Sale Influence'
        ],
        category: 'outdoor'
    },
    {
        id: 'site-acquisition',
        title: 'Site Acquisition & Location Survey',
        shortDescription: 'We help brands identify the most effective outdoor media locations. Our team ensures your ad is placed in the right spot to maximize ROI.',
        fullDescription: 'Finding the right spot is half the battle. Our team specializes in site acquisition and location surveys, using data-driven insights to identify high-visibility areas with the best demographic fit for your advertising needs. We handle the legalities and permissions so you don\'t have to.',
        icon: Search,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
        features: [
            'On-site surveys',
            'Traffic & visibility analysis',
            'Government approval assistance',
            'Demographic Profiling'
        ],
        benefits: [
            'Maximize ROI',
            'Strategic Placement',
            'Hassle-Free Process',
            'Data-Backed Decisions'
        ],
        category: 'outdoor'
    },
    {
        id: 'installation-maintenance',
        title: 'Installation & Maintenance',
        shortDescription: 'End-to-end support for installing and managing outdoor media assets. We ensure smooth execution and long-lasting performance.',
        fullDescription: 'We ensure your ads look perfect from day one. Our professional installation team handles everything from printing to mounting, and our maintenance services ensure your hoardings and screens remain in pristine condition throughout the campaign duration.',
        icon: Wrench,
        image: 'https://images.unsplash.com/photo-1581094794329-cd119653243f?auto=format&fit=crop&q=80&w=1600',
        features: [
            'Safe and professional hoarding installation',
            'LED screen setup',
            'Regular maintenance & repairs',
            'Storm/Weather Damage Repair'
        ],
        benefits: [
            'Consistent Brand Presentation',
            'Safety & Compliance',
            'Extended Asset Lifespan',
            'Peace of Mind'
        ],
        category: 'outdoor'
    },

    // Print Media Services
    {
        id: 'flex-vinyl-printing',
        title: 'Flex & Vinyl Printing',
        shortDescription: 'Best for outdoor branding, shop boards, and event backdrops.',
        fullDescription: 'High-quality flex and vinyl printing solutions for all your outdoor and indoor branding needs. We use premium materials and advanced printing technology to ensure vibrant colors and durability against weather elements.',
        icon: Printer,
        image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=1600',
        features: [
            'Frontlit / Backlit Flex',
            'Star Flex',
            'Ecosolvent / Latex Vinyl',
            'One Way Vision'
        ],
        benefits: [
            'Cost-Effective Branding',
            'Versatile Applications',
            'Weather Resistant',
            'Quick Turnaround'
        ],
        category: 'print'
    },
    {
        id: 'pamphlets-brochures',
        title: 'Pamphlets, Flyers & Brochures',
        shortDescription: 'Eye-catching marketing materials designed to communicate your brand effectively.',
        fullDescription: 'Spread your message effectively with our professionally designed and printed pamphlets, flyers, and brochures. Perfect for mass distribution, events, and in-store marketing to provide detailed information about your products or services.',
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=1600',
        features: [
            'Flyers',
            'Trifold brochures',
            'Catalogues',
            'Product sheets'
        ],
        benefits: [
            'Tangible Brand Asset',
            'Detailed Information Delivery',
            'Easy Distribution',
            'Professional Appeal'
        ],
        category: 'print'
    },
    {
        id: 'visiting-cards',
        title: 'Visiting Cards & Corporate Stationery',
        shortDescription: 'Premium business cards and branded office stationery to strengthen your professional identity.',
        fullDescription: 'Make a lasting first impression with our premium visiting cards and corporate stationery. From elegant business cards to branded letterheads and envelopes, we help you maintain a cohesive and professional brand identity across all touchpoints.',
        icon: CreditCard,
        image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=1600',
        features: [
            'Premium business cards',
            'Letterheads',
            'Envelopes',
            'ID Cards & Lanyards'
        ],
        benefits: [
            'Professional Credibility',
            'Brand Consistency',
            'Networking Essential',
            'High-Quality Finish'
        ],
        category: 'print'
    },
    {
        id: 'standees-banners',
        title: 'Standees, Banners & Event Branding',
        shortDescription: 'Perfect for exhibitions, corporate events, college fests, and product promotions.',
        fullDescription: 'Stand out at any event with our range of portable branding solutions. Roll-up standees, banners, and backdrops are easy to set up and highly effective for grabbing attention at exhibitions, conferences, and promotional events.',
        icon: Flag,
        image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=1600',
        features: [
            'Roll-up standees',
            'Stage backdrops',
            'Temporary event setups',
            'Promotional Canopies'
        ],
        benefits: [
            'Portable & Lightweight',
            'Reusable',
            'High Visibility',
            'Quick Setup'
        ],
        category: 'print'
    },
    {
        id: 'glow-sign-boards',
        title: 'Glow Sign Boards, ACP & Acrylic Boards',
        shortDescription: 'High-quality signage solutions for shops, offices, restaurants, and commercial spaces.',
        fullDescription: 'Enhance your storefront or office visibility with our premium glow sign boards, ACP cladding, and acrylic signage. We create durable and attractive signs that ensure your business gets noticed, day or night.',
        icon: Lightbulb,
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600',
        features: [
            'ACP signage',
            '3D acrylic letters',
            'LED glow sign boards',
            'Neon Signs'
        ],
        benefits: [
            '24/7 Brand Visibility',
            'Premium Look & Feel',
            'Durable & Weatherproof',
            'Custom Designs'
        ],
        category: 'print'
    }
];
