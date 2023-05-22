import NavBar from "../Shared/NavBar/NavBar";

const Blogs = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="w-full  bg-blue-400 h-full">
        <div className="pt-5 pb-5 text-start mx-4">
          <p className="font-bold text-2xl mb-2">What are an access token and a refresh token? How do they work, and where should we store them on the client side?</p>
          <p>
            An access token serves as a permission slip allowing a user or client to access specific resources on a server. It has a limited lifespan and is used to verify the authenticity of requests made to protected endpoints. On the other hand, a refresh token is used to acquire a fresh access token once the current one expires. It has a longer lifespan and helps maintain the user's session without requiring them to go through the authentication process again. When making requests, the access token is included to authenticate the user, while the refresh token is securely stored on the client side and used when a new access token is required. Typically, access tokens are stored in memory or local storage on the client side, while refresh tokens should be stored securely, such as in an HTTP-only cookie or a secure storage mechanism.</p>
        </div>


        <div className="pt-5 pb-5 text-start mx-4">
          <p className="font-bold text-2xl mb-2">Compare SQL and NoSQL databases.</p>
          <p>
            SQL databases are relational databases that organize data into tables with predetermined structures. They rely on the structured query language to manipulate and retrieve data. In contrast, NoSQL databases are non-relational and offer more flexible schemas, allowing for the storage of unstructured or semi-structured data. NoSQL databases employ various data models like key-value, document, columnar, or graph.

            While SQL databases prioritize data integrity through ACID transactions (Atomicity, Consistency, Isolation, Durability), NoSQL databases prioritize scalability and flexibility over strict consistency. SQL databases are well-suited for managing complex data relationships and transactional operations. On the other hand, NoSQL databases excel at handling large volumes of unstructured data and distributed systems.
          </p>
        </div>


        <div className="pt-5 pb-5 text-start mx-4">
          <p className="font-bold text-2xl mb-2">What is express js? What is Nest JS?</p>
          <p>
            Express.js is a widely used framework for building web applications and APIs in Node.js. It offers a comprehensive set of features and tools that simplify tasks such as handling HTTP requests, managing routes, integrating with databases, and utilizing middleware. Express.js is well-regarded for its minimalist and adaptable nature, enabling developers to efficiently create server-side applications.

            NestJS, on the other hand, is a progressive Node.js framework that builds upon Express.js. It is specifically designed to construct scalable and maintainable server-side applications. NestJS follows a modular architecture pattern and employs TypeScript as its primary language. It incorporates features like dependency injection, decorators, modules, and middleware, among others, which greatly aid developers in organizing and structuring their codebase effectively. NestJS aims to provide a sturdy and scalable foundation for building enterprise-grade applications.
          </p>
        </div>


        <div className="pt-5 pb-5 text-start mx-4">
          <p className="font-bold text-2xl mb-2">What is MongoDB aggregate, and how does it work?</p>
          <p>
            MongoDB's Aggregation Framework is a robust feature that enables sophisticated data analysis and manipulation directly within the database.
            It empowers users to execute advanced operations like filtering, grouping, sorting, joining, and transforming data in a flexible and efficient manner.
            Aggregation pipelines in MongoDB are composed of multiple stages, including $match, $group, $sort, $project, and more.
            Each stage performs a specific operation on the data, and the output of one stage seamlessly flows into the next stage as input.
            Aggregation pipelines in MongoDB are capable of handling intricate queries, aggregating data across multiple collections, and providing powerful data transformation capabilities.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;