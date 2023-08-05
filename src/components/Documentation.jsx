//Thi file consists of the documentation of the site 
//X0X0
//Right now its dummy data it will be upated soon 
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Documentation = () => {
  const navigate = useNavigate();

  return (
    <div>
   
   
    <div >
      <div>
        <h2 >Table of Contents</h2>
        <ul >
          <li><a href="#Overview">1 Overview</a></li>
          <li><a href="#background">1.2 Background</a></li>
          <li><a href="#objectives">1.3 Objective(s)/Aim(s)/Target(s)</a></li>
          <li><a href="#scope">1.4 Scope</a></li>
          <li><a href="#goals">1.5 Business Goals</a></li>
        </ul>
      </div>

      <div >
        <h1>Documentation</h1>

        <section >
          <h2 >1.1 Product</h2>
          <p>
            Whenever we want to track past transaction history, it requires a lot of time because going through the Ethereum ledger block by block, starting from the Genesis Block, which is very time-consuming and slow in order to find relevant information.
          </p>
          <p>
            The protocol saves developers tremendous amounts of storage and hours by creating reliable and efficient data feeds from the blockchain.
          </p>
          <p>
            Also, many dApps (Decentralized applications) require a listening/indexing service, so they have to make one from scratch and run a custom server for it or use another service by paying in their native token. For end-users and web3 developers, if they require some data to be fetched, it is very convenient to write a desirable query to fetch data.
          </p>
          <p>
            So undeniably, a better approach is needed to overcome this issue.
          </p>
        </section>

        <section >
          <h2>1.2 Background</h2>
          <p>
            In the early days of the internet after the emergence of WWW (World Wide Web), suddenly, the public had easy access to an extensive amount of data. People soon realized they needed a mechanism to find their way through this flood of data. Due to this, search engines were created, e.g., Google. Now, after 20 years, the web3 space faces a similar issue that cannot be tackled using the traditional search engine and requires a trustless way to extract required information.
          </p>
          <p>
            The Graph is one of the leading providers, preparing the data for users and making it available to them. It provides a middle layer between various blockchains and decentralized applications. When creating decentralized applications, there needs to be a way to securely communicate data between the blockchain and the user-friendly front-end, plus the web of smart contracts structuring the application. This maintains the integrity of the web3 space and user's data.
          </p>
        </section>

        <section >
          <h2 >1.3 Objective(s)/Aim(s)/Target(s)</h2>
          <p>
            Display query results in a usable format that can be used by end-users, allowing them to use the data on their front-ends if they wish to create dApps and require a source for their data feed. Keep the indexer live to fetch data from new blocks and append them for future queries. Indexers should work in a decentralized manner, so users are sure the data is not altered or corrupted.
          </p>
          <p>
            Create a responsive website that lets users create multiple subgraphs on EVM chains, indexing events from different smart contracts. Users can choose which events they want to subscribe to. These different subgraphs can be interacted with once they are live to write queries. The website also provides a GraphQL endpoint to fetch queries.
          </p>
        </section>
        <section >
          <h2 >1.4 Scope</h2>
          <p>
          When it comes to storing a large amount of data it is always a hassle. Therefore, storing it on the blockchain ensures that it can’t be altered and it provides consensus algorithm that ensures the data integrity. But when it comes to organize this data, it is quite difficult for example in books, when we want to read a specific page, we have to go through the whole book, reading all its pages one by one. Which takes a lot of time. Instead, we use indexes to retrieve the exact information. 
          </p>
          <p>
          That’s what indexing protocol provides to the end-users. They can retrieve exact information without wasting the time and can query their respective information regarding a blockchain. Our protocol will provide the functionality of “indexers” to index the respective blockchain data. And delegators that will delegate some amount to indexers to index a subgraph. They will be the individuals that maintain the decentralization of the protocol.

          </p>
        </section>

        <section >
          <h2>1.5 Business Goals</h2>
          <p>
          Google of blockchain directly targets developers. As we aim to provide a decentralized indexing platform for developers to query their data and later use that in their dapps and other decentralized projects.
          </p>
        
        </section>

     
      </div>
    </div>
    
    <div>
        <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
    </div>
  )
}
