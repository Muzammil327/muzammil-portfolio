import { Portfolio } from "@/types/page";
import Container from "../../elements/container/page";
import PortfolioItem from "../item/page";

interface IProps {
  datas: Portfolio[];
}

export function PortfolioList({ datas }: IProps) {
  return (
    <>
    <Container>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-6 gap-4">
        {datas.map((data:Portfolio) => (
          <>
          <PortfolioItem datas={data} />
          </>
        ))}
      </div>
    </Container>
    </>
  );
}
export function PortfolioHList({ datas }: IProps) {
  return (
    <>
    <Container>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-6 gap-4">
        {datas.slice(0,3).map((data:Portfolio) => (
          <>
          <PortfolioItem datas={data} />
          </>
        ))}
      </div>
    </Container>
    </>
  );
}
