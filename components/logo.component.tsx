import Image from "next/image";
import logoStyles from "../styles/Logo.module.scss";

export const Logo = () => {
  const factor = 1.5;

  const height = 200;

  return (
    <div className={logoStyles.logo}>
      <Image
        src={"/images/logo.jpg"}
        alt="Logo de Albba Accesorios para bebés"
        width={height * factor}
        height={height}
      />
    </div>
  );
};
