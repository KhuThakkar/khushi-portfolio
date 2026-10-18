import { BookPage, ChapterOpening, PageTurn, Placeholder, RunningHead, SectionTitle } from "@/components/book/Book";
import { roman } from "@/components/ui/Ornaments";

// Photos go in public/about/ and replace the placeholder frames below.
const PLATES = ["Scuba diving", "Art", "Nature", "Baking"];

export default function AboutPage() {
  return (
    <BookPage>
      <RunningHead>Chapter I · About</RunningHead>
      <ChapterOpening label="Chapter I" title="About" />

      <div className="mx-auto mt-12 grid max-w-[46rem] items-start gap-8 sm:grid-cols-[1fr_12rem]">
        <Placeholder>
          a short bio, 150 to 200 words. Who you are, how you went from computer science to product and business work,
          and what you care about. Teaching fits here as a sentence or two.
        </Placeholder>
        <PhotoFrame caption="A photo of you, in natural light" />
      </div>

      <section className="mx-auto mt-20 max-w-[46rem]">
        <SectionTitle>Plates</SectionTitle>
        <p className="mt-2 italic text-lichen">Outside of work.</p>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-5">
          {PLATES.map((name, i) => (
            <PhotoFrame key={name} caption={`Plate ${roman(i + 1)}. ${name}`} />
          ))}
        </div>
        <Placeholder className="mt-8">a one-line caption under each photo, such as where you dove or what you painted.</Placeholder>
      </section>

      <PageTurn href="/about" />
    </BookPage>
  );
}

function PhotoFrame({ caption }: { caption: string }) {
  return (
    <figure>
      <div className="cover-frame flex aspect-[4/5] items-center justify-center bg-board/60">
        <span className="text-[0.9rem] italic text-lichen">Photo</span>
      </div>
      <figcaption className="mt-3 text-center text-[0.92rem] italic text-lichen">{caption}</figcaption>
    </figure>
  );
}
