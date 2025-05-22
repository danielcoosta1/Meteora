import BannerCarrossel from "../../components/BannerCarrossel";

import ContainerHome from "../../components/ContainerHome";
import Facilidades from "../../components/Facilidades";
import Novidades from "../../components/Novidades";
import Footer from "../../components/Footer";

import ProdutosBombando from "../../components/ProdutosBombando";

const Home = () => {
  return (
    <>
      <BannerCarrossel />
      <ContainerHome>
        <ProdutosBombando />
      </ContainerHome>
      <Facilidades />
      <Novidades />
      <Footer />
    </>
  );
};

export default Home;
