import React from 'react';

const Blog = () => {
  return (
    <div className='container mt-5 mb-5'>
      <h3>Queation</h3>
      <h6>1 Difference between `javascript` and `nodejs`</h6>
      <p>ans: NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
      <p>ans: Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
      <hr />
      <h6>2 When should you use `nodejs` and when should you use `mongodb`</h6>
      <p>ans: Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
      <p>ans: MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.

      MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...

      These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.</p>
      <hr />
      <h6>3 Differences between `sql` and `nosql` databases.</h6>
      <p>ans: SQL databases are relational, SQL databases use structured query language and have a predefined schema, SQL databases are vertically scalable, SQL databases are table-based, SQL databases are better for multi-row transactions,</p>
      <p>ans: NoSQL databases are non-relational. NoSQL databases have dynamic schemas for unstructured data. while NoSQL databases are horizontally scalable. while NoSQL databases are document, key-value, graph, or wide-column stores. while NoSQL is better for unstructured data like documents or JSON.</p>
      <hr />
      <h6>4. What is the purpose of `jwt` and how does it work</h6>
      <p>ans: For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML. Now that you understand JSON as a data text format, you may be wondering What are tokens? To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
    </div>
  );
};

export default Blog;