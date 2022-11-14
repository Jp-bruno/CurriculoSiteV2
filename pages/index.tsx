import Main from "../components/Main";
import Section1 from '../components/Sections/Section1';
import Section2 from "../components/Sections/Section2";
import Section3 from "../components/Sections/Section3";
import Section4 from "../components/Sections/Section4";
import Section5 from "../components/Sections/Section5";
import Section6 from "../components/Sections/Section6";

export default function Home() {
    return (
        <Main>
            <Section1 />
            <Section5 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section6 />
        </Main>
    )
}