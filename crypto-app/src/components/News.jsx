import React, {useState} from 'react';
import {Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';

import {useGetCryptosQuery} from '../services/cryptoApi';
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi';
import Loader from './Loader';

import defaultImage from '../assets/images/default.jpg';

const {Text, Title} = Typography;
const {Option} = Select;

const News = ({simplified}) => {
    const finalCounter = simplified ? 6 : 12;
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const {data} = useGetCryptosQuery(100);
    const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory, count: finalCounter});
    if (!cryptoNews?.totalArticles > 0) return <Loader/>;

    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="Cryptocurency">Cryptocurrency</Option>
                        {data?.data?.coins?.map((currency) => <Option value={currency.name}
                                                                      key={currency.name}>{currency.name}</Option>)}
                    </Select>
                </Col>
            )}
            {cryptoNews.articles.slice(0, finalCounter).map((news, i) => (
                <Col sm={24} lg={8} md={12} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                {/*<Title className="news-title" level={5}>{news.description}</Title>*/}
                                <Title className="news-title" level={5}>{news.title}</Title>
                                <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news.image || defaultImage}
                                     alt={news.description}/>
                            </div>
                            <p>{news?.description?.length > 100 ? `${news.description.substring(0, 100)}...` : news.title}</p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.image || defaultImage} alt={news.description}/>
                                    <Text className="provider-name">{news.source.name}</Text>
                                </div>
                                <Text>{moment(news.publishedAt).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default News;