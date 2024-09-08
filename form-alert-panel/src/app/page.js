import Container from "@/components/Container";
import InputWithLabel from "@/components/InputWithLabel";
import RoundedButton from "@/components/RoundedButton";

export default function Home() {
  return (
    <Container>
          <h1 className="text-3xl font-bold text-white">Unicode</h1>
          <InputWithLabel label="Email" type="email" />
          <InputWithLabel label="Senha" type="password" />
          <RoundedButton text="Entrar" routeLink="/form-page" />
    </Container>
  );
}
