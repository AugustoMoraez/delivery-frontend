import { BannerBox, ContainerBanner } from ".";
import { Container } from "../../AppStyle";
import  pizza  from "../../assets/images/pizza.png";
import  pizza2  from "../../assets/images/pizza2.png";
import  pizza3  from "../../assets/images/pizza3.png";
import  pizza4 from "../../assets/images/pizza4.png";



export const Banner = () => {
    return(
        <ContainerBanner>
            <Container>
                <BannerBox>
                <div className="logo">PizzariaKing</div>
                <div className="banner">
                    <div>
                        <img src={pizza} alt="Banner" />
                    </div>
                    <div>
                        <img src={pizza2} alt="Banner" />
                    </div>
                    <div>
                        <img src={pizza3} alt="Banner" />
                    </div>
                    <div>
                        <img src={pizza4} alt="Banner" />
                    </div>
                </div>
                </BannerBox>
            </Container>
        </ContainerBanner>
    )
}