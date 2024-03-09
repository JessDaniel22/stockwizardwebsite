import React, { useState, useEffect } from 'react';
import './StockNews.css';
import NewsArticleComponent from './NewsArticleContainer';
import Table from './Table';
import { getCompanyData } from '../../getCompanyData';
import { useLocation } from 'react-router-dom';


const StocksNews = () => {
    const [activeTab, setActiveTab] = useState('stocks');
    const [companyData, setData] = useState([]);

    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const location = useLocation();
    const ticker = location.pathname.split("/")[2];
    console.log(ticker);

    useEffect(() => {
        getCompanyData(ticker).then(companyData => {
            console.log(companyData);
            setData(companyData); // Set the data when the Promise resolves
        }).catch(error => {
            console.error('An error occurred:', error);
        });
    }, [ticker]); // Re-run this effect when `ticker` changes


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
                        <Table data={companyData}/>
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
