import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>김포호수초 2023학년도 6학년 9반</Title>
      <h1>김포호수초 2023학년도 6학년 9반 영상</h1>
      <p>
        {" "}
        <a href="https://www.youtube.com/watch?v=uGf3HZkqMHA" target="_blank">
          10월2주차 우리반 뉴스
        </a>{" "}            /
        {" "}
        <a href="https://youtu.be/asRW4bwZnz8" target="_blank">
          11월2주차 우리반 뉴스
        </a>{" "}            /
        {" "}
        <a href="https://youtu.be/Ys9d6qjpKSY" target="_blank">
          12월2주차 우리반 뉴스
        </a>{" "}            /
        {" "}
        <a href="https://youtu.be/JdkX_hDIhmc" target="_blank">
          졸업영상
        </a>{" "}            /
        
      </p>
    </main>
  );
}
