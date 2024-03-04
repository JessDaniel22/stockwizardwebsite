import React, { createContext, useContext, useState, useEffect } from 'react';

const CompaniesContext = createContext();

export const useCompanies = () => useContext(CompaniesContext);

export const CompaniesProvider = ({ children }) => {
    const articleData = {
        id: 1,
        title: "Tech Industry Trends",
        summary: "An overview of the latest trends in the tech industry, including AI advancements and blockchain technology.",
        companies: [
          {
            id: 1,
            name: "TechCorp",
            prediction: "Positive",
            stock: "↑ 5%",
          },
          {
            id: 2,
            name: "InnovateX",
            prediction: "Stable",
            stock: "↑ 1%",
          },
          {
            id: 3,
            name: "FutureTech",
            prediction: "Negative",
            stock: "↓ 3%",
          }
        ]
      };
  const initialCompanies = articleData.companies.map(company => ({
    ...company,
    isFollowing: false, // Initialize all companies as not followed
  }));

  const [companies, setCompanies] = useState(initialCompanies);

  const toggleFollow = (companyId) => {
    setCompanies(prevCompanies =>
      prevCompanies.map(company =>
        company.id === companyId ? { ...company, isFollowing: !company.isFollowing } : company,
      ),
    );
  };

  return (
    <CompaniesContext.Provider value={{ companies, toggleFollow }}>
      {children}
    </CompaniesContext.Provider>
  );
};