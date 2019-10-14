Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1 - [x] Explain what a token is used for.
    > A token is a component in handshake authentication, where the client hands off login credentials to the server, and the server confirms by sending back a token allowing access to the user from the backend, typically after confirming the submitted password matches the stored hash

2 - [x] What steps can you take in your web apps to keep your data secure? 
    > Use private routes to obfuscate certain paths to validated users, as well as keep code clean, concise, DRY. Keep all interests separated in your app modularly to keep cross contamination of private data and public data at a minimum

3 - [x] Describe how web servers work.
    > Web servers are sort of like central command, they store the root information and serve it to the user via web requests or api requests, depending on desired application and throughput, and serve either a set of static files, or in the case of JS/Node and some other web instances, render it on the fly. Typically User A sends a request to server B, server B says let me check if this file C you're requesting exists, and I, server B, will be glad to render it to you, if it does.

4 - [x] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    > Create - Post
    > Read - Get
    > Update - Put
    > Delete - Delete
