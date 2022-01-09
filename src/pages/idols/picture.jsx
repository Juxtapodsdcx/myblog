import React, { useEffect, useState } from 'react'
// import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import { Col, Row, Image, Card } from "antd"


const Picture = () => {

    return (
        <div>
            <Card title="人物推荐">

                <Row justify="space-around">

                    <Col span={7}>
                        <div>
                            <Image
                                src="/img/Game/sanguo.webp"
                            // height={250}
                            // width={440}
                            />
                        </div>

                    </Col>
                    <Col span={7}>
                        <div>

                            <div>
                                <Image
                                    src="/img/Game/sanguo.webp"
                                // height={250}
                                // width={440}

                                />
                            </div>

                        </div>



                    </Col>
                    <Col span={7}>

                        <div>

                            <div>
                                <Image
                                    src="/img/Game/sanguo.webp"
                                // height={250}
                                // width={440}
                                />
                            </div>

                            <div>
                                <Image
                                    src="/img/Game/1.webp"
                                // height={250}
                                // width={440}
                                />
                            </div>

                        </div>

                    </Col>

             

                </Row>


            </Card>


        </div>









    )

}



export default Picture;