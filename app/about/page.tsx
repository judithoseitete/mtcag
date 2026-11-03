import BeliefItem from "@/components/about/BeliefItem";
import PersonCard from "@/components/about/PersonCard";
import { beliefs } from "@/constants/beliefs";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Page Title */}
      <section className="bg-brand-neutral py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray text-center">
            Get to know our congregation
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-8 md:mb-12">
            Our story
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 lg:divide-x-2 lg:divide-brand-gray/20">
            <div className="lg:pr-8">
              <p className="text-lg text-brand-gray/80 mb-4">
                More Than Conquerors (MTC) was founded in November 2001 in a
                primary school in Sowutuom by a small group of believers who
                wanted to begin an Assemblies of God church in the area. In
                2004, the church grew out of the school and began putting up its
                own buildings and structure.
              </p>
              <p className="text-lg text-brand-gray/80 mb-4">
                In 2026, we are celebrating 25 years.
              </p>
            </div>
            <div className="lg:pl-8">
              <p className="text-lg text-brand-gray/80 mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p className="text-lg text-brand-gray/80 mb-4">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-neutral rounded-3xl px-4 py-8 md:px-16 md:py-20 lg:px-24 lg:py-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-8 md:mb-12">
              What we believe
            </h2>
            <div className="space-y-8">
              {beliefs.map((belief) => (
                <BeliefItem key={belief.number} {...belief} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Pastors */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-8 md:mb-12">
            Meet our pastors
          </h2>

          {/* Senior Pastor */}
          <div className="mb-12">
            <PersonCard
              title="Senior Pastor"
              name="Rev. Dr. Freeman & Mrs. Enid Osei-Tete"
              size="large"
            />
          </div>

          {/* Associate Pastors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PersonCard
              title="Senior Associate Pastor"
              name="Rev. Abraham Tengey"
              layout="vertical"
            />
            <PersonCard
              title="Associate Pastor"
              name="Pastor Benjamin Larbi Asamoah"
              layout="vertical"
            />
            <PersonCard
              title="Associate Pastor"
              name="Pastor Solomon Koli"
              layout="vertical"
            />
          </div>
        </div>
      </section>

      {/* Board Chairs */}
      <section className="py-16 md:py-20 bg-brand-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-8 md:mb-12">
            Board chairs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <PersonCard
              title=""
              name="Deaconness Mrs. Ernestina Appiah"
              size="small"
              variant="secondary"
            />
            <PersonCard
              title=""
              name="Deacon Mr. Mike Agyei-Owusu"
              size="small"
              variant="secondary"
            />
            <PersonCard
              title=""
              name="Deaconness Mrs. Juliet Osei-Antwi"
              size="small"
              variant="secondary"
            />
            <PersonCard
              title=""
              name="Deacon Mr. Aaron Ayiku"
              size="small"
              variant="secondary"
            />
            <PersonCard
              title=""
              name="Deaconness Mrs. Patricia Gayitor"
              size="small"
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* Department Leaders */}
      {/* Department Leaders */}
      <section className="py-16 md:py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-8 md:mb-12">
            Department leaders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PersonCard
              title="Men Ministry President"
              name="Mr. Isaac Kobbie"
              size="small"
              layout="vertical"
            />
            <PersonCard
              title="Women Ministry President"
              name="Mrs. Enid Osei-Tete"
              size="small"
              layout="vertical"
            />
            <PersonCard
              title="Youth President"
              name="Burke Eduah"
              size="small"
              layout="vertical"
            />
            <PersonCard
              title="Sunday School Superintendent"
              name="Pastor Benjamin Larbie Asamoah"
              size="small"
              layout="vertical"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
