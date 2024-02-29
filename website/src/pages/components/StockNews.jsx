import React, { useState } from 'react';
import './StocksNews.css';
import NewsArticleComponent from './NewsArticleContainer';
import Table from './Table';


const StocksNews = () => {
    const [activeTab, setActiveTab] = useState('stocks');

    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
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
                        <Table/>
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
