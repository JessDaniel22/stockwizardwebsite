import React, { useState, useEffect } from 'react';
import './StockNews.css';
import NewsArticleComponent from './NewsArticleContainer';
import Table from './Table';



const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 7);
let start_time = yesterday.toISOString();
let end_time = today.toISOString();
let use_following_companies = true;
let companies_list = []


const StocksNews = () => {
    const [activeTab, setActiveTab] = useState('stocks');
    const [data, setData] = useState([]);

    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
    try {
      const response = await fetch("");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
  const recommendedCompaniesData = [
    { ticker: "FB", company_name: "Meta Platforms Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: 0.4, wms_2D: 0.3, wms_3D: 0.2 } },
    { ticker: "NVDA", company_name: "NVIDIA Corporation", industry: "Technology", location: "California", sentiment: { wms_1D: 0.3, wms_2D: 0.2, wms_3D: 0.1 } },
    { ticker: "JPM", company_name: "JPMorgan Chase & Co.", industry: "Finance", location: "New York", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "NFLX", company_name: "Netflix Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: -0.1, wms_2D: 0.0, wms_3D: -0.2 } },
    { ticker: "PYPL", company_name: "PayPal Holdings Inc.", industry: "Finance", location: "California", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "FB", company_name: "Meta Platforms Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: 0.4, wms_2D: 0.3, wms_3D: 0.2 } },
    { ticker: "NVDA", company_name: "NVIDIA Corporation", industry: "Technology", location: "California", sentiment: { wms_1D: 0.3, wms_2D: 0.2, wms_3D: 0.1 } },
    { ticker: "JPM", company_name: "JPMorgan Chase & Co.", industry: "Finance", location: "New York", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "NFLX", company_name: "Netflix Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: -0.1, wms_2D: 0.0, wms_3D: -0.2 } },
    { ticker: "PYPL", company_name: "PayPal Holdings Inc.", industry: "Finance", location: "California", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "FB", company_name: "Meta Platforms Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: 0.4, wms_2D: 0.3, wms_3D: 0.2 } },
    { ticker: "NVDA", company_name: "NVIDIA Corporation", industry: "Technology", location: "California", sentiment: { wms_1D: 0.3, wms_2D: 0.2, wms_3D: 0.1 } },
    { ticker: "JPM", company_name: "JPMorgan Chase & Co.", industry: "Finance", location: "New York", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "NFLX", company_name: "Netflix Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: -0.1, wms_2D: 0.0, wms_3D: -0.2 } },
    { ticker: "PYPL", company_name: "PayPal Holdings Inc.", industry: "Finance", location: "California", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "FB", company_name: "Meta Platforms Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: 0.4, wms_2D: 0.3, wms_3D: 0.2 } },
    { ticker: "NVDA", company_name: "NVIDIA Corporation", industry: "Technology", location: "California", sentiment: { wms_1D: 0.3, wms_2D: 0.2, wms_3D: 0.1 } },
    { ticker: "JPM", company_name: "JPMorgan Chase & Co.", industry: "Finance", location: "New York", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "NFLX", company_name: "Netflix Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: -0.1, wms_2D: 0.0, wms_3D: -0.2 } },
    { ticker: "PYPL", company_name: "PayPal Holdings Inc.", industry: "Finance", location: "California", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
  ];

  const followedCompaniesData = [
    { ticker: "AAPL", company_name: "Apple Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: 0.2, wms_2D: -0.1, wms_3D: 0.3 } },
    { ticker: "GOOGL", company_name: "Alphabet Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: 0.1, wms_2D: 0.2, wms_3D: -0.1 } },
    { ticker: "MSFT", company_name: "Microsoft Corporation", industry: "Technology", location: "Washington", sentiment: { wms_1D: -0.1, wms_2D: 0.1, wms_3D: 0.0 } },
    { ticker: "AMZN", company_name: "Amazon.com Inc.", industry: "Technology", location: "Washington", sentiment: { wms_1D: 0.3, wms_2D: 0.2, wms_3D: 0.4 } },
    { ticker: "TSLA", company_name: "Tesla, Inc.", industry: "Automotive", location: "California", sentiment: { wms_1D: 0.5, wms_2D: 0.4, wms_3D: 0.6 } },
    { ticker: "FB", company_name: "Meta Platforms Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: 0.4, wms_2D: 0.3, wms_3D: 0.2 } },
    { ticker: "NVDA", company_name: "NVIDIA Corporation", industry: "Technology", location: "California", sentiment: { wms_1D: 0.3, wms_2D: 0.2, wms_3D: 0.1 } },
    { ticker: "JPM", company_name: "JPMorgan Chase & Co.", industry: "Finance", location: "New York", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "NFLX", company_name: "Netflix Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: -0.1, wms_2D: 0.0, wms_3D: -0.2 } },
    { ticker: "PYPL", company_name: "PayPal Holdings Inc.", industry: "Finance", location: "California", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "FB", company_name: "Meta Platforms Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: 0.4, wms_2D: 0.3, wms_3D: 0.2 } },
    { ticker: "NVDA", company_name: "NVIDIA Corporation", industry: "Technology", location: "California", sentiment: { wms_1D: 0.3, wms_2D: 0.2, wms_3D: 0.1 } },
    { ticker: "JPM", company_name: "JPMorgan Chase & Co.", industry: "Finance", location: "New York", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "NFLX", company_name: "Netflix Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: -0.1, wms_2D: 0.0, wms_3D: -0.2 } },
    { ticker: "PYPL", company_name: "PayPal Holdings Inc.", industry: "Finance", location: "California", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "FB", company_name: "Meta Platforms Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: 0.4, wms_2D: 0.3, wms_3D: 0.2 } },
    { ticker: "NVDA", company_name: "NVIDIA Corporation", industry: "Technology", location: "California", sentiment: { wms_1D: 0.3, wms_2D: 0.2, wms_3D: 0.1 } },
    { ticker: "JPM", company_name: "JPMorgan Chase & Co.", industry: "Finance", location: "New York", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
    { ticker: "NFLX", company_name: "Netflix Inc.", industry: "Technology", location: "California", sentiment: { wms_1D: -0.1, wms_2D: 0.0, wms_3D: -0.2 } },
    { ticker: "PYPL", company_name: "PayPal Holdings Inc.", industry: "Finance", location: "California", sentiment: { wms_1D: 0.2, wms_2D: 0.1, wms_3D: 0.3 } },
  ];
  
    return (
        <div className="container">
            <div className="tabs">
                <div
                    className={`tab1 ${activeTab === 'stocks' ? 'active' : ''}`}
                    onClick={() => handleTabClick('stocks')}
                >
                    Stocks
                </div>
                <div
                    className={`tab2 ${activeTab === 'news' ? 'active' : ''}`}
                    onClick={() => handleTabClick('news')}
                >
                    News
                </div>
            </div>
            <div className="content">
                {activeTab === 'stocks' ? (
                    <div className="stocks-content">
                        <h2 className='followed-companies'>Followed Companies</h2>
                            <Table data={followedCompaniesData} />
                            <h2 className='wishlist'>Based on your wishlist</h2>
                            <Table data={recommendedCompaniesData} />
                    </div>
                ) : (
                    <div className="news-content">
                        <NewsArticleComponent start_time={start_time} end_time={end_time} use_following_companies={use_following_companies}  companies_list={companies_list}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StocksNews;
