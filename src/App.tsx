import { Envelope } from "phosphor-react";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Logo } from "./Logo";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading className="mt-4" size="lg">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-[400px]">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="Digite seu email" />
          </TextInput.Root>
        </label>
      </form>
    </div>
  );
}
