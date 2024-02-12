import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { Experience } from "@/components/page-components/Experience";
import { Education } from "@/components/page-components/Education";
import { Skills } from "@/components/page-components/Skills";
import { Projects } from "@/components/page-components/Projects";
import { About } from "@/components/page-components/About";
import { SectionSpacing } from "@/components/page-components/SectionSpacing";
import { Container } from "@/components/page-components/Container";
import { Header } from "@/components/page-components/Header";
import { Contact } from "@/components/page-components/Contact";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <Container>

      <Header />
      <SectionSpacing>
        <Contact />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </SectionSpacing>
    </Container>
  );
}
