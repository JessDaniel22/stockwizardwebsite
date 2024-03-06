import React, { useState, useEffect } from 'react';
import './StockNews.css';
import NewsArticleComponent from './NewsArticleContainer';
import Table from './Table';


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
                        <Table data={data}/>
                    </div>
                ) : (
                    <div className="news-content">
                        <NewsArticleComponent />
                    </div>
                )}
            </div>
        </div>
    );
};

export default StocksNews;
