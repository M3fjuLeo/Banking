import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";
import React from "react";
import RightSidebar from "@/components/ui/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Mateusz",
    lastName: "Ropek",
    email: "mateuszropek@onet.pl",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500 }]}
      />
    </section>
  );
};

export default Home;
