
import { Carousel } from 'antd';
import "./card.css"
import { Card } from 'antd';

const { Meta } = Card;
const ItemCard = (props: any) => {
    return <>
        <Card
            cover={
                <Carousel dotPosition={"bottom"} style={{ color: "red" }}>
                    {
                        props.image?.map((item: any) =>
                            <div>
                                <img src={item} className="img" style={{ width: "100%" }} />

                            </div>
                        )
                    }

                </Carousel>
            }
        >
            <Meta
                description={props.name}
            />
        </Card>
    </>
}
export default ItemCard