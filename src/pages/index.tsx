import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça nossos proficionais"}
        subtitle={"Preencha seu endereço e veja os proximos de você"}
      />

      <UserInformation
        name={"César Azambuja"}
        picture={"http://github.com/CesarAzambuja.png"}
        rating={4}
        description={"São Paulo"}
      />

      <UserInformation
        name={"César Azambuja"}
        picture={"http://github.com/CesarAzambuja.png"}
        rating={4}
        description={"São Paulo"}
      />

      <UserInformation
        name={"César Azambuja"}
        picture={"http://github.com/CesarAzambuja.png"}
        rating={4}
        description={"São Paulo"}
      />
    </div>
  );
}
