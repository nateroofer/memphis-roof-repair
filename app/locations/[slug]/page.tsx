// Dynamic location landing pages for Memphis neighborhoods
// Optimized for local SEO with location-specific content and keywords

import { generateMetadata as generateSEOMetadata, SITE_CONFIG, generateBreadcrumbSchema } from '@/lib/seoConfig';
import { LocalBusinessSchema, FAQSchema, ServiceSchema } from '@/components/StructuredData';
import LeadForm from '@/components/LeadForm';
import { Phone, MapPin, Award, Clock, Shield } from 'lucide-react';
import { notFound } from 'next/navigation';

// Define all Memphis service areas with comprehensive SEO content
export const locations = {
  'east-memphis': {
    name: 'East Memphis',
    zip: '38117',
    metaTitle: 'East Memphis Roofers | Roof Repair & Replacement | Zion Roof',
    metaDescription: 'Need a roofer in East Memphis? Zion Roof provides free inspections, storm-damage claims help, and fast roof repairs across East Memphis. Call (901) 304-9466.',
    h1: 'Roof Repair & Replacement — East Memphis',
    answerFirst: 'If you need a fast, reliable roof inspection or repair in East Memphis, Zion Roof offers same-week inspections, insurance-claim assistance, and proven replacements — typical asphalt shingle replacements average $8k–$18k depending on size and materials.',
    description:
      'East Memphis homes face intense summer storms and occasional hail — leaving homeowners with missing shingles, leaks, and hidden water damage. Zion Roof is a local, licensed team specializing in inspections, storm repairs, and full replacements across East Memphis.',
    fullContent: `East Memphis homes face intense summer storms and occasional hail — leaving homeowners with missing shingles, leaks, and hidden water damage. Zion Roof is a local, licensed team specializing in inspections, storm repairs, and full replacements across East Memphis. We start every job with a thorough inspection, photographic documentation suited for insurance adjusters, and a transparent estimate that lists materials, labor, and timeline.

We handle insurance claims from start to finish: we document damage, create adjuster-ready estimates, and communicate with carriers so you don't have to. For replacements we typically use high-grade architectural asphalt shingles backed by a workmanship warranty; metal roofing and premium systems are available for homeowners seeking longer lifespans.

**Why East Memphis homeowners choose Zion Roof:**
- Local crew who know neighborhood roofing styles and permit requirements
- Clear pricing and financing options  
- Fast emergency tarping & leak mitigation after storms
- Insurance claim assistance from documentation to approval

**Homeowner Checklist:** Inspect your attic for water stains, check ceilings for new brown spots, look for visible shingle loss on roofline, and call for a professional inspection if you suspect damage.`,
    neighborhoods: [
      'Chickasaw Gardens',
      'White Station', 
      'Colonial Acres',
      'High Point Terrace'
    ],
    quickFacts: {
      avgProjectCost: '$8,000–$18,000',
      avgCompletionTime: '2–5 days (weather permitting)',
      commonIssues: 'Storm damage, aging shingles',
      serviceArea: 'East Memphis neighborhoods + ZIP 38117'
    },
    caseStudy: {
      title: 'East Memphis Hail Claim',
      description: 'Replaced 1,800 sq ft asphalt shingle roof. Insurance paid full replacement after documentation. Completed in 3 days.',
      details: 'Project type: Storm damage claim | Materials: Architectural shingles | Timeline: 3 days'
    },
    keywords: ['roof repair east memphis', 'roofers east memphis', 'roof inspection 38117', 'east memphis storm damage roof']
  },
  'germantown': {
    name: 'Germantown',
    zip: '38138',
    metaTitle: 'Germantown Roofers | Roofing & Leak Repair | Zion Roof',
    metaDescription: 'Premium roofing in Germantown, TN. Zion Roof delivers detailed inspections, replacements, and insurance claim support for residential & commercial roofs.',
    h1: 'Roof Repair & Replacement for Germantown Homes',
    answerFirst: 'Zion Roof specializes in high-end residential roofing in Germantown — delivering energy-efficient shingles, metal roofing upgrades, and detailed leak repairs for luxury homes.',
    description:
      'Germantown homes deserve roofing work that matches their quality. Zion Roof offers premium systems from top manufacturers, energy-efficient underlayments, and detailed flashing solutions.',
    fullContent: `Germantown homes deserve roofing work that matches their quality. Zion Roof offers premium systems from top manufacturers, energy-efficient underlayments, and detailed flashing solutions. We understand local HOA guidelines, coordinate permits, and offer tailored recommendations for property longevity.

Our Germantown inspections include drone imagery, attic thermal scans (if requested), and a detailed repair report. We provide financing for full replacements and fast response for storm or hail damage.

**Premium Services for Germantown:**
- Energy-efficient roofing systems
- Metal roofing upgrades
- HOA-compliant installations
- Thermal imaging inspections
- Premium manufacturer warranties

Whether you're maintaining a luxury property or upgrading to increase home value, Zion Roof delivers craftsmanship that matches Germantown's high standards.`,
    neighborhoods: ['Forest Hill', 'Dogwood Grove', 'Cameron Brown', 'Kimbrough Farms'],
    quickFacts: {
      avgProjectCost: '$12,000–$20,000',
      avgCompletionTime: '3–5 days',
      commonIssues: 'Premium upgrades, energy efficiency',
      serviceArea: 'Germantown + ZIP 38138'
    },
    caseStudy: {
      title: 'Germantown Metal Roof Upgrade',
      description: 'Upgraded luxury home from architectural shingles to standing seam metal roof. Enhanced energy efficiency by 25%.',
      details: 'Project type: Premium upgrade | Materials: Standing seam metal | Timeline: 5 days'
    },
    keywords: ['germantown roofing', 'roof replacement germantown tn', 'metal roofing germantown', 'premium roofers germantown']
  },
  'collierville': {
    name: 'Collierville',
    zip: '38017',
    metaTitle: 'Collierville Roofing Contractors | Roof Inspection & Repair | Zion Roof',
    metaDescription: 'Collierville roof inspection, storm damage repair, and replacements. Trust the local pros at Zion Roof.',
    h1: 'Roofing Professionals Serving Collierville, TN',
    answerFirst: 'Collierville\'s upscale communities need dependable, long-lasting roofing systems. Zion Roof installs high-performance shingles and metal roofs built for Tennessee\'s climate.',
    description:
      'Collierville\'s top-rated roofing company. Specializing in residential roof replacement, storm damage repair, and new construction roofing.',
    fullContent: `Collierville families trust Zion Roof for reliable, high-quality roofing that stands up to Tennessee weather. We serve all Collierville neighborhoods with comprehensive services including inspections, repairs, replacements, and new construction roofing.

Our team understands Collierville's mix of established and new-build homes, providing tailored solutions for each property type. From architectural shingles to metal roofing systems, we help homeowners choose materials that balance aesthetics, durability, and budget.

**Collierville Roofing Services:**
- Residential roof replacement
- Storm damage assessment and repair
- New construction roofing
- Insurance claim documentation
- Lifetime warranty options`,
    neighborhoods: ['Bailey Station', 'Schilling Farms', 'Forest Creek', 'Johnson Farms'],
    quickFacts: {
      avgProjectCost: '$10,000–$18,000',
      avgCompletionTime: '2–4 days',
      commonIssues: 'New construction, upgrades',
      serviceArea: 'Collierville + ZIP 38017'
    },
    caseStudy: {
      title: 'Collierville New Construction',
      description: 'Installed premium architectural shingles on new 3,200 sq ft home in Schilling Farms. Completed before closing.',
      details: 'Project type: New construction | Materials: Premium architectural | Timeline: 4 days'
    },
    keywords: ['collierville roofers', 'roof replacement collierville', 'roofing company collierville tn']
  },
  'bartlett': {
    name: 'Bartlett',
    zip: '38133',
    metaTitle: 'Bartlett Roof Repair | Roof Replacement Experts | Zion Roof',
    metaDescription: 'Bartlett TN roof repair and replacement done right. Local professionals offering free inspections and fast response times.',
    h1: 'Your Trusted Bartlett Roofing Contractors',
    answerFirst: 'Zion Roof helps Bartlett families protect their homes from storm damage, leaks, and age-related wear. With full replacements, partial repairs, and emergency services — we\'re your all-in-one roofing partner.',
    description:
      'Expert roofing services in Bartlett, TN. Licensed & insured contractors serving Bartlett with quality roof repair and replacement.',
    fullContent: `From Stage Road to Davies Plantation, Bartlett homes rely on durable, weather-tested roofing. Zion Roof's experienced technicians perform shingle replacements, flashing upgrades, and underlayment fixes to extend roof life.

We also work directly with insurance adjusters, helping homeowners navigate claims paperwork and photographic proof submission. Bartlett residents often face spring storm damage, so we maintain a rapid-response team for emergency tarping and repair scheduling.

**Why Bartlett Trusts Zion Roof:**
- Same-week inspection scheduling
- Direct insurance adjuster coordination
- Emergency tarping within 24 hours
- Transparent pricing with financing available
- Local team familiar with Bartlett neighborhoods`,
    neighborhoods: ['Wynridge', 'Country Trace', 'Brunswick', 'Twin Lakes'],
    quickFacts: {
      avgProjectCost: '$8,000–$14,000',
      avgCompletionTime: '2–3 days',
      commonIssues: 'Storm damage, wind-lifted shingles',
      serviceArea: 'Bartlett + ZIP 38133'
    },
    caseStudy: {
      title: 'Bartlett Storm Damage Repair',
      description: 'Repaired wind damage and replaced 800 sq ft of shingles after spring storms. Insurance covered full cost.',
      details: 'Project type: Storm repair | Materials: 3-tab shingles | Timeline: 2 days'
    },
    keywords: ['bartlett roof repair', 'roofers in bartlett tn', 'storm damage bartlett roof']
  },
  'cordova': {
    name: 'Cordova',
    zip: '38016',
    metaTitle: 'Cordova TN Roofers | Roof Repair & Replacement | Zion Roof',
    metaDescription: 'Local Cordova roof repair & replacement experts. Free inspections, insurance claims help, and same-day emergency service by Zion Roof.',
    h1: 'Cordova Roof Repair and Replacement You Can Trust',
    answerFirst: 'Zion Roof helps Cordova homeowners recover from hail, storm, and leak damage fast. We specialize in quick-response inspections, insurance assistance, and long-lasting roof systems that stand up to Tennessee weather.',
    description:
      'Reliable roofing contractor in Cordova, TN. Serving Shelby Farms area with expert roof installation and emergency repairs.',
    fullContent: `Cordova's mix of newer developments and aging subdivisions means roof issues can show up unexpectedly after storms. Zion Roof's team knows the area well — from Riverwood Farms to Berryhill — and we deliver precise inspections, insurance-ready documentation, and reliable replacements.

We handle all major roofing types: asphalt, architectural, and metal. Every job starts with a drone-assisted inspection to identify hidden damage. We then create a digital estimate for transparency and coordinate directly with insurers when applicable.

**Cordova Roofing Expertise:**
- Drone-assisted damage assessment
- Digital estimation and documentation
- All major roofing material types
- Emergency 24-hour tarping service
- Lifetime workmanship warranty

Homeowners appreciate that we treat each roof as an investment, not an expense.`,
    neighborhoods: ['Cordova Gardens', 'Forest Hill', 'Farmington', 'Hickory Ridge'],
    quickFacts: {
      avgProjectCost: '$9,000–$16,000',
      avgCompletionTime: '2–4 days',
      commonIssues: 'Wind damage, hail dents',
      serviceArea: 'Cordova + ZIP 38016'
    },
    caseStudy: {
      title: 'Cordova Windstorm Replacement',
      description: 'Replaced 2,100 sq ft roof in Cordova after windstorm (April 2024). Insurance approved full replacement. Completed in 3 days.',
      details: 'Project type: Storm replacement | Materials: Architectural shingles | Timeline: 3 days'
    },
    keywords: ['roof repair cordova tn', 'cordova roofing company', 'emergency roof repair cordova']
  },
  'midtown': {
    name: 'Midtown Memphis',
    zip: '38104',
    metaTitle: 'Midtown Memphis Roofers | Emergency Roof Repair | Zion Roof',
    metaDescription: 'Midtown Memphis roof inspections, tarping, and replacements. Zion Roof: local craftsmen experienced with historic homes and modern replacements.',
    h1: 'Roofing Services for Midtown Memphis Homes',
    answerFirst: 'Zion Roof provides tailored roof repairs and replacements for Midtown\'s varied housing stock — from craftsman bungalows to townhomes — offering fast leak mitigation and insurance claim support.',
    description:
      'Historic Midtown roofing specialists. Expert repairs for older homes, flat roofs, and commercial properties along Cooper-Young and Overton Square.',
    fullContent: `Midtown Memphis features older roofs and unique architectural details that require careful inspection and sympathetic repairs. Zion Roof's team understands historic roofing details — we match shingle styles, handle complex flashing, and secure appropriate permits for work in historic zones when needed.

Our Midtown service package includes attic moisture inspection, flashing and valley repair, shingle replacement, and optional gutter upgrades. For older homes, we prioritize diagnosing underlying rot or substrate damage before replacement.

**Midtown Specializations:**
- Historic home roofing expertise
- Architectural detail preservation
- Flashing and valley repairs
- Flat roof and TPO systems
- Emergency leak mitigation

For homeowners concerned about cost, we provide transparent estimates with line-item pricing and discuss financing options to help spread replacement costs.`,
    neighborhoods: ['Cooper-Young', 'Overton Square', 'Vollintine-Evergreen', 'Evergreen'],
    quickFacts: {
      avgProjectCost: '$7,000–$15,000',
      avgCompletionTime: '3–5 days',
      commonIssues: 'Historic repairs, flashing failures',
      serviceArea: 'Midtown + ZIP 38104'
    },
    caseStudy: {
      title: 'Midtown Bungalow Restoration',
      description: 'Repaired flashing and replaced 200 sq ft of shingles on historic craftsman bungalow; prevented interior water damage.',
      details: 'Project type: Historic repair | Materials: Matched original shingles | Timeline: 4 days'
    },
    keywords: ['midtown memphis roofer', 'historic roof repair memphis', 'roof inspection midtown memphis']
  },
  'downtown': {
    name: 'Downtown Memphis',
    zip: '38103',
    metaTitle: 'Downtown Memphis Commercial Roofing | Flat Roof Experts | Zion Roof',
    metaDescription: 'Commercial and multifamily roofing in Downtown Memphis. TPO, EPDM, and flat roof specialists. Licensed commercial contractors.',
    h1: 'Commercial Roofing Services — Downtown Memphis',
    answerFirst: 'Zion Roof provides expert commercial and multifamily roofing solutions for Downtown Memphis properties, specializing in flat roofs, TPO systems, and emergency commercial repairs.',
    description:
      'Downtown Memphis commercial roofing specialists. Serving office buildings, multifamily properties, and mixed-use developments.',
    fullContent: `Downtown Memphis commercial properties require specialized roofing expertise. Zion Roof delivers professional flat roof installations, TPO and EPDM systems, and ongoing maintenance programs for office buildings, apartments, and mixed-use developments.

Our commercial team understands the unique challenges of urban roofing: access constraints, business continuity requirements, and building code compliance. We work efficiently to minimize disruption while delivering long-lasting commercial roofing solutions.

**Commercial Services:**
- TPO and EPDM flat roofing
- Modified bitumen systems
- Emergency commercial repairs
- Roof maintenance programs
- Building code compliance

We coordinate with property managers and building owners to schedule work during off-hours when needed.`,
    neighborhoods: ['CBD', 'South Main', 'Medical District', 'Pinch District'],
    quickFacts: {
      avgProjectCost: '$15,000–$50,000',
      avgCompletionTime: '5–10 days',
      commonIssues: 'Flat roof leaks, membrane damage',
      serviceArea: 'Downtown Memphis + ZIP 38103'
    },
    caseStudy: {
      title: 'Downtown Office Building Roof',
      description: 'Installed 8,000 sq ft TPO roof system on 3-story office building. Completed over 3 weekends to minimize business disruption.',
      details: 'Project type: Commercial TPO | Materials: 60-mil TPO membrane | Timeline: 8 days'
    },
    keywords: ['commercial roofing memphis', 'flat roof repair downtown memphis', 'tpo roof replacement memphis']
  },
  'southaven': {
    name: 'Southaven',
    zip: '38671',
    metaTitle: 'Southaven MS Roofers | Roof Repair & Replacement | Zion Roof',
    metaDescription: 'Southaven Mississippi roofing contractors. Cross-state service from Memphis-based Zion Roof. Free inspections and insurance assistance.',
    h1: 'Professional Roofing Services in Southaven, MS',
    answerFirst: 'Zion Roof extends professional roofing services across state lines to Southaven, Mississippi, offering the same quality inspections, repairs, and replacements that Memphis homeowners trust.',
    description:
      'Southaven MS roofing contractor. Memphis-based team serving DeSoto County with expert residential roofing.',
    fullContent: `Southaven families deserve the same high-quality roofing service as our Memphis customers. Zion Roof brings experienced, licensed contractors across state lines to serve DeSoto County with comprehensive roofing solutions.

We understand Mississippi building codes and insurance requirements, ensuring smooth project completion whether you need storm damage repairs or a complete roof replacement.

**Southaven Services:**
- Cross-state licensed contractors
- Mississippi insurance claim experience
- Free inspections and estimates
- Emergency storm response
- Residential and light commercial

From Brookhaven to Bridgewater, Zion Roof delivers reliable roofing throughout Southaven.`,
    neighborhoods: ['Bridgewater', 'Brookhaven', 'Crosstown', 'Greenbrook'],
    quickFacts: {
      avgProjectCost: '$8,500–$16,000',
      avgCompletionTime: '2–4 days',
      commonIssues: 'Storm damage, shingle replacement',
      serviceArea: 'Southaven MS + ZIP 38671'
    },
    caseStudy: {
      title: 'Southaven Storm Recovery',
      description: 'Replaced hail-damaged roof for Southaven family. Worked with Mississippi insurance adjuster for full claim approval.',
      details: 'Project type: Hail damage | Materials: Impact-resistant shingles | Timeline: 3 days'
    },
    keywords: ['southaven roofing', 'roofers southaven ms', 'roof repair desoto county']
  },
  'lakeland': {
    name: 'Lakeland',
    zip: '38002',
    metaTitle: 'Lakeland & Arlington Roofing | Family Roofing Contractors | Zion Roof',
    metaDescription: 'Lakeland and Arlington TN roofing specialists. Family residential experts with storm repair experience.',
    h1: 'Lakeland & Arlington Roofing Contractors',
    answerFirst: 'Zion Roof serves Lakeland and Arlington families with personalized roofing service, storm damage expertise, and quality installations built for growing communities.',
    description:
      'Lakeland and Arlington roofing contractor. Serving family residential properties with quality repairs and replacements.',
    fullContent: `Lakeland and Arlington represent some of the fastest-growing communities in the Memphis metro area. Zion Roof serves these family-oriented neighborhoods with dependable roofing that protects new and established homes alike.

Our team specializes in family residential roofing, understanding the needs of homeowners who value quality, clear communication, and fair pricing. We treat every home as if it were our own.

**Family Roofing Services:**
- New home roofing warranties
- Storm damage assessment
- Family-friendly scheduling
- Detailed explanations and education
- Play-area safety protocols during work

We're proud to be the roofing company Lakeland and Arlington families recommend to their neighbors.`,
    neighborhoods: ['Canada Road area', 'Arlington', 'Lakeland Proper', 'Paul Barret area'],
    quickFacts: {
      avgProjectCost: '$10,000–$17,000',
      avgCompletionTime: '2–4 days',
      commonIssues: 'New construction, storm repairs',
      serviceArea: 'Lakeland & Arlington + ZIP 38002'
    },
    caseStudy: {
      title: 'Lakeland Family Home',
      description: 'Replaced aging roof for growing family in Lakeland. Completed efficiently with children-safe work protocols.',
      details: 'Project type: Full replacement | Materials: Architectural shingles | Timeline: 3 days'
    },
    keywords: ['lakeland roofing', 'arlington tn roofers', 'roof repair lakeland tn']
  },
  'frayser': {
    name: 'Frayser',
    zip: '38127',
    metaTitle: 'Frayser Roof Repair | Affordable Roofing Services | Zion Roof',
    metaDescription: 'Affordable, quality roofing in Frayser and Raleigh. Fast service, fair pricing, and financing available. Zion Roof serves all of North Memphis.',
    h1: 'Affordable Quality Roofing for Frayser & Raleigh',
    answerFirst: 'Zion Roof provides affordable, high-quality roofing services throughout Frayser and Raleigh with fast response times, fair pricing, and flexible financing options for all families.',
    description:
      'Frayser and Raleigh roofing contractor. Affordable repairs and replacements with financing options available.',
    fullContent: `Every Memphis neighborhood deserves quality roofing service. Zion Roof serves Frayser and Raleigh with the same professional standards as any other area — skilled installation, quality materials, and fair pricing.

We understand budget constraints and offer flexible financing options to help families protect their homes without financial stress. Our team provides honest assessments and never recommends unnecessary work.

**Frayser & Raleigh Services:**
- Affordable repair solutions
- Flexible financing available
- Fast emergency response
- Quality materials at fair prices
- Honest, no-pressure estimates

We're committed to serving all Memphis communities with integrity and excellence.`,
    neighborhoods: ['Frayser', 'Raleigh', 'Northaven', 'Scenic Hills'],
    quickFacts: {
      avgProjectCost: '$6,000–$12,000',
      avgCompletionTime: '2–3 days',
      commonIssues: 'Aging roofs, storm damage',
      serviceArea: 'Frayser & Raleigh + ZIP 38127'
    },
    caseStudy: {
      title: 'Frayser Storm Repair',
      description: 'Repaired storm-damaged roof with financing assistance. Restored family\'s peace of mind with quality work at fair price.',
      details: 'Project type: Storm repair | Materials: 3-tab shingles | Timeline: 2 days'
    },
    keywords: ['frayser roofing', 'raleigh roofers', 'affordable roof repair memphis']
  }
};

export async function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const location = locations[params.slug as keyof typeof locations];

  if (!location) {
    return {};
  }

  return generateSEOMetadata({
    title: location.metaTitle || `Roofing Contractor ${location.name} TN`,
    description: location.metaDescription || location.description,
    keywords: location.keywords || [
      `roofing contractor ${location.name}`,
      `roof repair ${location.name} TN`,
      `roof replacement ${location.name}`,
      `roofing services ${location.zip}`
    ],
    path: `/locations/${params.slug}`
  });
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = locations[params.slug as keyof typeof locations];

  if (!location) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/locations' },
    { name: location.name, url: `/locations/${params.slug}` }
  ]);

  const faqs = [
    {
      question: `How much does roof replacement cost in ${location.name}?`,
      answer: `Roof replacement in ${location.name} typically costs ${location.quickFacts.avgProjectCost}. The exact cost depends on your roof size, material choice, and any underlying damage. Zion Roof offers free estimates.`
    },
    {
      question: `Do you provide emergency roof repair in ${location.name}?`,
      answer: `Yes! Zion Roof offers 24/7 emergency roof repair throughout ${location.name} and surrounding areas. Call ${SITE_CONFIG.phone} for immediate service.`
    },
    {
      question: `How long does roof installation take in ${location.name}?`,
      answer: `Most residential roof installations in ${location.name} take ${location.quickFacts.avgCompletionTime}. We'll provide a detailed timeline during your free inspection.`
    },
    {
      question: `Are you licensed and insured in ${location.name}, TN?`,
      answer: `Absolutely. Zion Roof is fully licensed, bonded, and insured to work throughout ${location.name}, Memphis, and all of Shelby County.`
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          name: `Roofing Services in ${location.name}`,
          description: location.description,
          url: `${SITE_CONFIG.url}/locations/${params.slug}`
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-zion-green" />
              <span className="text-zion-green font-semibold">
                {location.name}, {location.zip}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {location.h1 || `Professional Roofing Services in ${location.name}`}
            </h1>
            {/* Answer-first lead paragraph (LLM-optimized) */}
            {location.answerFirst && (
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                {location.answerFirst}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`} className="cta-button inline-flex items-center gap-2 justify-center">
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href="#contact-form"
                className="bg-white text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-container bg-white dark:bg-gray-900">
        <h2 className="font-heading text-3xl font-bold text-center mb-8">
          Roofing in {location.name}: Quick Facts
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-zion-green/20">
            <div className="text-zion-blue dark:text-zion-green font-bold text-xl mb-2">
              {location.quickFacts.avgProjectCost}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Typical Project Cost</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-zion-green/20">
            <div className="text-zion-blue dark:text-zion-green font-bold text-xl mb-2">
              {location.quickFacts.avgCompletionTime}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Completion Time</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-zion-green/20">
            <div className="text-zion-blue dark:text-zion-green font-bold text-xl mb-2">
              {location.quickFacts.commonIssues}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Common Issues</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-zion-green/20">
            <div className="text-zion-blue dark:text-zion-green font-bold text-xl mb-2">
              {location.quickFacts.serviceArea}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Service Area</div>
          </div>
        </div>
      </section>

      {/* Full Content Section */}
      {location.fullContent && (
        <section className="section-container bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {location.fullContent.split('\n\n').map((paragraph, index) => {
                // Check if this is a markdown heading
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="font-heading text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                // Check if this is a list
                if (paragraph.includes('\n-')) {
                  const items = paragraph.split('\n-').filter(item => item.trim());
                  return (
                    <ul key={index} className="space-y-2 mb-6">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-zion-green mt-1.5">✓</span>
                          <span>{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Regular paragraph
                return (
                  <p key={index} className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Case Study */}
      {location.caseStudy && (
        <section className="section-container bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-zion-blue to-zion-blue-light p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-zion-green" />
                <h2 className="font-heading text-2xl font-bold">Case Study: {location.caseStudy.title}</h2>
              </div>
              <p className="text-xl mb-4">{location.caseStudy.description}</p>
              <p className="text-gray-200 text-sm">{location.caseStudy.details}</p>
            </div>
          </div>
        </section>
      )}

      {/* Neighborhoods Served */}
      <section className="section-container bg-gray-50">
        <h2 className="font-heading text-3xl font-bold text-center mb-8">
          Neighborhoods We Serve in {location.name}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {location.neighborhoods.map((neighborhood, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
              <MapPin className="w-5 h-5 text-zion-green mx-auto mb-2" />
              <p className="font-semibold">{neighborhood}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Zion Roof */}
      <section className="section-container">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Why {location.name} Trusts Zion Roof
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-zion-blue" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">Licensed & Insured</h3>
            <p className="text-gray-600">
              Fully licensed, bonded, and insured to work throughout {location.name} and Shelby County.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-zion-blue" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">15+ Years Experience</h3>
            <p className="text-gray-600">
              Serving {location.name} families since 2009 with quality roofing solutions.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-zion-blue" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">24/7 Emergency Service</h3>
            <p className="text-gray-600">
              Available round-the-clock for emergency repairs in {location.name}.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container bg-gray-50">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-heading text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-container bg-gradient-to-br from-zion-blue to-zion-blue-light text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-4">
            Request Your Free {location.name} Roof Inspection
          </h2>
          <p className="text-xl text-center text-gray-200 mb-8">
            Serving {location.name} and ZIP code {location.zip}
          </p>
          <div className="bg-white rounded-2xl p-8">
            <LeadForm source={`location-${params.slug}`} />
          </div>
        </div>
      </section>
    </>
  );
}

