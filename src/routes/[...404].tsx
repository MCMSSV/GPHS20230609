import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>얘들아 여길 찾은거 맞니?</Title>
      <HttpStatusCode code={404} />
      <h1>얘들아 여길 찾은거 맞니? [페이지를 찾을 수 없음]</h1>
      <p>
      </p>
    </main>
  );
}
