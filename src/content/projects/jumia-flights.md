---
name: "Jumia Flights"
description: "Jumia Flights is a travel booking platform by Jumia that allows users to search, compare, and book flights across Africa. It aims to provide easy access to competitive fares and travel options."
startDate: 2017-08-01
endDate: 2018-05-31
category: "application"
technologies:
  - "Golang"
  - "Java"
  - "Phalcon"
  - "Play Framework"
  - "MySQL"
  - "Jenkins"
  - "Amazon Web Services"
  - "JIRA"
  - "Git"
  - "GitHub"
  - "NewRelic"
coverImage: "jflights/cover.jpg"
images: []
role: "Developer"
company: "Jumia"
isPrivate: true
sortOrder: 3
---

Jumia Flights is a travel booking service provided by Jumia that enables users to search, compare, and book flights within Africa. It offers a user-friendly interface for finding competitive fares, and provides access to a wide range of airlines and travel options, helping travelers find the best deals and plan their trips more efficiently. The platform aims to simplify the flight booking process and enhance travel convenience across the continent.

- **Architecture Planning:** Worked closely with the Head of Flights, Tech Lead, and CTO to define the initial architecture and tech stack, ensuring the project met business requirements.
- **Core Features Implementation:** Contributed to the development of the project MVP, including the search engine, booking and payment process, using a microservices oriented architecture and a diverse tech stack, including Java, PHP and Golang.
- **Search Engine and Flight providers integration:**  Developed a high-performance search engine with Java Play Framework, integrating data from thrid party providers like Amadeus and Kiwi. Implemented parallel data fetching using Java async features and used WebSockets to deliver the results to the frontend as they became available,to enhance user experience.
- **Performance Optimization:** Developed a caching strategy using ScyllaDB to store complete search responses, reducing response times for users and the load on provider APIs.
- **Search Rules Engine:** Developed a rules engine in Golang that allowed the operations team to set business rules for search results, including provider preferences, specific airlines, and routes, in order to increase the conversion rate and revenue.
