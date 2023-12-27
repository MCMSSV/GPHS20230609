import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>김포호수초 2023학년도 6학년 9반</Title>
      <h1>영상</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://www.youtube.com/watch?v=uGf3HZkqMHA" target="_blank">
          10월2주차 우리반 뉴스
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
