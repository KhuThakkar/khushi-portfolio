import Image from "next/image";
import { BookPage, ChapterOpening, PageTurn, Paper, RunningHead, SectionTitle } from "@/components/book/Book";
import { roman } from "@/components/ui/Ornaments";

const PLATES: { file: string; label: string; caption: string }[] = [
  {
    file: "scuba.jpg",
    label: "Scuba diving",
    caption: "Inside a shipwreck, where I met two sleeping nurse sharks.",
  },
  {
    file: "rangoli.jpg",
    label: "Rangoli",
    caption: "Rangoli, an art style with colored sand, in celebration of Diwali.",
  },
  {
    file: "iceland.jpg",
    label: "Traveling",
    caption: "Hiking in Iceland.",
  },
  {
    file: "teaching.jpg",
    label: "Teaching",
    caption: "FoodPrints: a program where I taught elementary schoolers to garden and cook.",
  },
];

export default function AboutPage() {
  return (
    <BookPage>
      <RunningHead>Chapter I · About</RunningHead>
      <Paper>
        <ChapterOpening label="Chapter I" title="About" />
      </Paper>

      <div className="mt-8">
        <Paper>
          <div className="mx-auto grid max-w-[46rem] items-start gap-10 sm:grid-cols-[1fr_11rem]">
            <div className="flex flex-col gap-5 text-[1.0625rem] leading-[1.75] text-parchment">
              <p>
                I grew up in a house full of stories: the ones from Hindu mythology my parents told me, the ones in
                books, the ones I&apos;d tell my sister when I was supposed to be sleeping. It&apos;s also why I love
                product work. Both are about noticing a human problem and telling the truth about it. Stories are how
                we learn, decide, and remember.
              </p>
              <p>
                I studied computer science at GW. These days I&apos;m Product Lead at Premo Ventures, where I replaced
                a manual Excel reconciliation across QuickBooks, AeroPay, POS, and banking with automated integrations,
                cutting about four hours of weekly work down to one. Debtera grew out of that work and placed 2nd of
                200+ teams in the GW New Venture Competition. I also built Aajera, a calendar with natural-language
                quick add, and shipped it to about 30 beta users. Along the way I&apos;ve done roughly 300 customer
                interviews.
              </p>
              <p>
                Outside of work you can find me reading (mostly fiction), scuba diving, being a plant mom, baking, or
                doing arts and crafts.
              </p>
            </div>
            <Portrait />
          </div>
        </Paper>
      </div>

      <div className="mt-8">
        <Paper>
          <section className="mx-auto max-w-[46rem]">
            <SectionTitle>Plates</SectionTitle>
            <p className="mt-2 italic text-lichen">Outside of work.</p>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-5">
              {PLATES.map((p, i) => (
                <PlateFigure key={p.file} index={i} {...p} />
              ))}
            </div>
          </section>
        </Paper>
      </div>

      <PageTurn href="/about" />
    </BookPage>
  );
}

function Portrait() {
  return (
    <figure>
      <div className="relative aspect-[4/5] overflow-hidden border border-gilt/40">
        <Image
          src="/about/portrait.jpg"
          alt="A photo of Khushi"
          fill
          sizes="(min-width: 640px) 176px, 50vw"
          className="object-cover"
          priority
        />
      </div>
    </figure>
  );
}

function PlateFigure({ file, label, caption, index }: { file: string; label: string; caption: string; index: number }) {
  return (
    <figure>
      <div className="relative aspect-[4/5] overflow-hidden border border-gilt/40">
        <Image
          src={`/about/${file}`}
          alt={caption}
          fill
          sizes="(min-width: 768px) 170px, 45vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-center text-[0.92rem] italic text-lichen">
        <span className="not-italic text-parchment">Plate {roman(index + 1)}. {label}.</span>{" "}
        {caption}
      </figcaption>
    </figure>
  );
}
