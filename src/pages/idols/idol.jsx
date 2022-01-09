import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Row, Image, Card, PageHeader, Statistic, Descriptions, Typography,Anchor} from "antd"
import idolUrl from "../../assets/md/idols.md"
import styles from "./styles.module.less"
import {Routes,Route} from "react-router-dom"
import {Link as Link1}  from "react-router-dom" 
import Blackpink from "./picture"



const { Link } = Anchor;

// console.log(Blackpink);


const { Paragraph, Text, Title } = Typography;

const Idol = () => {
    const [idolData, setIdolData] = useState("");
    const idolInfo = [["BLACKPINK", "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20114%2F796%2Fw1440h956%2F20200621%2Fc2a1-ivffpct1918594.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644233325&t=39d0e2fd9e8a30d3baee42c9177270af", "​​	粉上BlackPINK（粉墨）是追星的开始，粉墨的四名成员都很有自己的特点。最开始是通过lisa的入坑的。想当时大一的时候，还问过一个先入坑的blink为啥会喜欢粉墨，后来听完她的介绍只觉得不过如此，现在只能说，啊，真香。\n​	粉墨出圈的不仅是他们的实力，还有他们相互扶持成长，成员们之间情同姐妹的感情，舞台前后的反差萌，还有他各不相同各具特色的性格，还有她们都太美丽辣，原谅我不要脸的各种拿女儿们的照片当头像，嘿嘿"],
    ["jennie", "https://img2.baidu.com/it/u=4172341618,190282960&fm=26&fmt=auto", "​​	最喜欢的成员，jennie长得像饺子一样好可爱，好希望她是我的女儿，这么会有这么可爱的姑娘呢。舞台上很carry，舞台下很kiyoumi。反转魅力最高的就是她啦，她值得世间最好的东西。"],
    ["jisoo", "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F25%2F20200425000705_uodej.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644243968&t=13bf7841d82cfe88a17d22f756685942", "​​	jisoo也超可爱，她的新剧雪滴花也要播啦，希望剧情对得起jisoo的颜值，不过不好看我还会看的，因为jisoo太美啦。"],
    ["rose", "https://img1.baidu.com/it/u=3310743715,4009264367&fm=253&fmt=auto&app=138&f=JPEG?w=743&h=500", "​​	嗓音无敌，努力，靠实力圈粉，紫发好美，全能，努力，Gone好好听。"],
    [" lisa", "https://img0.baidu.com/it/u=4082748182,1206273881&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333", "​​	辣丽萨一跳起舞来，就是全场的焦点，她就是top dancer in the whole world，辣丽萨跳舞太美啦。被AI识别为全世界最美（虽然没啥权威，但是lisa真的好好看"],
    ["Taylor swift", "https://img0.baidu.com/it/u=329135910,716244225&fm=253&fmt=auto&app=138&f=JPEG?w=890&h=500", "​​​	从14岁开始喜欢霉霉，一步步看着她从被称为少女，美国甜心，到今天的霉妈妈哈哈哈哈。还是很爱她，从1989开始，之后的专辑都买啦，不知道为霉霉花过多少钱了，哭泣。\n    霉霉是真正的偶像，有自己的想法，又很努力的实现。她的事业心很强，也靠着这自己的野心走到了很多歌手无法抵达的高度。她会为自己争取应得的权利，也会冒着音乐被下架的风险为整个音乐行业发声；她是我见过最爱粉丝的人，会在专辑正式发布之前邀请自己的粉丝到她家里提前给她们透露新专辑；也会为因癌症失去孩子的母亲写歌。也是因为霉霉让我喜欢上了英语，她真的好棒。"],
    ["无畏", "http://qungz.photo.store.qq.com/qun-qungz/V50JFZZv2EqVMI3oj5Pg3UgKmT0PNEHf/V5bCQA2MzY1NDkyMTdca8RhVZ2RHw!!/800?w5=1620&h5=1080&rf=viewer_421", "​​​	就是一个帅帅可可爱爱的职业选手，他说如果没去打kpl就会被父母安排学习修锁，当个修锁匠哈哈哈。他和队友的cp、他的呆萌的性格都好圈粉。"],

    ["菅田将晖", "https://img1.baidu.com/it/u=3605121147,3092410475&fm=253&fmt=auto&app=138&f=JPEG?w=741&h=500", "​​​​	男神和女神真的结婚了。之前喜欢的明星都是妹子，我曾经一度怀疑自己是不是哪里有什么毛病。但看《溺水小刀》，感觉苏打好有魅力，才发现我还是有救的。虽然是烂俗的言情小说剧情，但是还是看进去了，可能因为主角是他们俩吧，苏打算是我喜欢上的第一个男明星了。​	\n后来和我姐一起看他们俩第二部电影《线》的时候，结尾他们终于要在一起又仿佛在最后还是要错过的时候，还是哭的稀里哗啦的。就离谱。虽然是这种俗套的剧情，被他们演出来却像是真实的事。\n  苏打除了颜值，最有魅力的还是他的努力和不放弃，以及他心底的善良和对朋友的珍视，哈哈哈，我的对立面。\n    ​	苏打18岁时，为了不拖累团队，从零基础开始学习打民俗鼓，两个手都磨出了水泡，但他依旧还在敲，直到把皮都磨破了，只剩下红红肉与鼓棒直接接触，他还是在继续敲；苏打说送给准备的礼物都该是最珍贵的，所以他会在听到自己朋友的孩子喜欢一个玩具的时候，会亲自花一个星期裁出来作为礼物送给他。他可以看到每个人身上的优点，他值得世界上最好的东西。\n ​	听到他们结婚时，还是有稍微一点点的难过，可能我太爱苏打了哈哈希望男神和女神幸福一辈子，我会一直磕你们的"],

    ["小松菜奈", "https://img0.baidu.com/it/u=255543935,769552879&fm=253&fmt=auto&app=138&f=JPEG?w=1191&h=500", "	小松菜奈也好好看🥰，主要是模特，也会努力学习表演。厌世脸却笑起来那么甜，会在拍摄结束帮助工作人员收拾道具，会捉小虫子玩，超可爱又好看的小女生"],

    ["机智的党妹", "https://img2.baidu.com/it/u=3784198639,1277246278&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500", "​​​	因为做错了一些事情，被骂也是应该的，但是我她的颜值好高呀。"]
]

    useEffect(() => {
        fetch(idolUrl).then((res) => res.text()).then((res) => {
            // console.log(res);
            setIdolData(res)
        })
        // return () 
    }, [])


    return (
        <div>
                 <Routes>
            <Route  path="/BLACKPINK" element={<Blackpink></Blackpink>}/>

            </Routes>
            <Card title="人物推荐">

                <div className={styles.siteHeader}>
                    <PageHeader
                        ghost={false}
                        // onBack={() => window.history.back()}
                        //   title="游戏"
                        subTitle=" 欢迎大家来看爱豆安利站🥰"
                        extra={[
                        ]}
                    >
                        <Descriptions size="small" column={2}>
                            <Descriptions.Item >
                                我以为自己是霉霉死忠粉，后来发现自己是一棵墙头。喜欢过好多爱豆，有的喜欢是因为颜值，有的是因为个性。但是除了从初一开始喜欢的霉霉，其他的都是三分钟热度哈哈哈，希望我喜欢的明星永远也不要塌房，我是墙头，我是墙头，我是墙头。

                                对了，之前听过一句话，说：在了解一个人缺点之后还喜欢，而且坦然面对他的喜欢才是真的喜欢，我觉得说的很对，（虽然放在这里没什么意义。

                            </Descriptions.Item>

                        </Descriptions>
                    </PageHeader>


                </div>


                <Row justify="space-around">
                    <Col span={3}>
                    <Anchor style={{marginTop:60}}>
                        {
                            idolInfo.map((data,index)=>{
                                return(
                    <Link href={"#"+data[0]} title={data[0]} key={index}/>


                                )

                            })
                        }

                    </Anchor>
                    </Col>

                    <Col span={21}>
                        {idolInfo.map((data, index) => {

                            return (
                                <div className={styles.idolBorder} id={data[0]} key={index} >
                                    <Title level={2} style={{ margin: "30px",marginTop:15 }}>
                                        {data[0]}

                                    </Title>
                                    <div style={{ whiteSpace: "pre-wrap", margin: "20px 100px" ,lineHeight:"26px" }}>
                                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                                            <Image src={data[1]} width={800} />
                                        </div>
                                        {data[2]}
                                    </div>

                                    <div style={{ textAlign: "center" }}>
                                              <Link1 className={styles.button}  to={'/idol/'+data[0]} >See More</Link1>
                                    </div>


                                </div>


                            )

                        })}
                        {/* <ReactMarkdown children={idolData}/> */}


                    </Col>






                </Row>


            </Card>
       



        </div>









    )

}



export default Idol;