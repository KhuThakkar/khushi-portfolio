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

const SHELF: { title: string; author: string; cover: string; note: string }[] = [
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    cover: "fahrenheit-451.jpg",
    note:
      "My favorite book of all time. I love how it shows a world so overstimulated by technology and constant entertainment that people stop noticing, questioning, and really experiencing their own lives. That idea of what it means to actually be awake to the world is what made the book stick with me.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "pride-and-prejudice.jpg",
    note:
      "What I loved most was that both Elizabeth and Darcy had to look inward before they could really understand each other. They were forced to see how much their own pride, assumptions, and biases had shaped the way they saw the other person.",
  },
  {
    title: "Sunrise on the Reaping",
    author: "Suzanne Collins",
    cover: "sunrise-on-the-reaping.jpg",
    note:
      "I loved how much of the book is about who gets to control the story. It made me think about how power is not just controlling what people can do, but controlling what they believe happened in the first place.",
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
            <SectionTitle>Outside of work</SectionTitle>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-5">
              {PLATES.map((p, i) => (
                <PlateFigure key={p.file} index={i} {...p} />
              ))}
            </div>
          </section>
        </Paper>
      </div>

      <div className="mt-8">
        <Paper>
          <section className="mx-auto max-w-[46rem]">
            <SectionTitle>On my shelf</SectionTitle>
            <p className="mt-2 italic text-lichen">A few of my favorites.</p>
            <ol className="mt-8 grid gap-10 sm:grid-cols-3 sm:gap-6">
              {SHELF.map(({ title, author, cover, note }) => (
                <li key={title}>
                  <figure>
                    <div className="relative mx-auto aspect-[2/3] w-full max-w-[11rem]">
                      <Image
                        src={`/now/${cover}`}
                        alt={`Cover of ${title} by ${author}`}
                        fill
                        sizes="(min-width: 640px) 180px, 55vw"
                        className="object-contain mix-blend-multiply"
                      />
                    </div>
                    <figcaption className="mt-4 text-center">
                      <p className="font-display text-[1.2rem] font-medium leading-tight text-parchment">{title}</p>
                      <p className="text-[0.9rem] italic text-lichen">by {author}</p>
                      <p className="mt-3 text-left text-[0.95rem] leading-[1.65] text-parchment/90">{note}</p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ol>
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
        <span className="not-italic text-parchment">{roman(index + 1)}. {label}.</span>{" "}
        {caption}
      </figcaption>
    </figure>
  );
}
