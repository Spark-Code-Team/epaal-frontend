import Carousel from "../elements/carousel";
import Search from "../elements/search";

export default function HomePage() {
  return (
    <>
      <Search />
      <div className="container">
        <Carousel />
      </div>
    </>
  );
}
