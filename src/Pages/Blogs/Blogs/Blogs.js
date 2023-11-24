import React from 'react';
import cors from '../../../Assets/blogs/cors.png'
import firebase from '../../../Assets/blogs/firebase.png'
import privateRoute from '../../../Assets/blogs/private_route.png'
import node from '../../../Assets/blogs/node-js.png'

const Blogs = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                <figure className='md:w-1/3'><img src={cors} alt="Album" /></figure>
                <div className="card-body md:w-2/3">
                    <h2 className="card-title text-4xl">What is cors?</h2>
                    <p> <strong>Cross-Origin Resource Sharing (CORS)</strong> is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                        <br />

                        The Cross-Origin Resource Sharing standard works by adding new HTTP headers that let servers describe which origins are permitted to read that information from a web browser. Additionally, for HTTP request methods that can cause side-effects on server data (in particular, HTTP methods other than GET, or POST with certain MIME types), the specification mandates that browsers "preflight" the request, soliciting supported methods from the server with the HTTP OPTIONS request method, and then, upon "approval" from the server, sending the actual request. Servers can also inform clients whether "credentials" (such as Cookies and HTTP Authentication) should be sent with requests.
                    </p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                <figure className='md:w-1/3'><img src={firebase} alt="Album" /></figure>
                <div className="card-body md:w-2/3">
                    <h2 className="card-title text-4xl">Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>
                        I don't have preferences or the ability to use specific technologies like Firebase. However, I can provide information on why someone might choose Firebase for authentication and what other options are available.

                        Firebase, a product of Google, is a popular platform that offers a range of services, including authentication. Here are some reasons why developers might choose Firebase Authentication:

                        Ease of Use: Firebase provides a simple and easy-to-use authentication system with SDKs for various platforms, making it convenient for developers.

                        Scalability: Firebase is designed to scale automatically, handling authentication for apps of all sizes.
                    </p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                <figure className='md:w-1/3'><img src={privateRoute} alt="Album" /></figure>
                <div className="card-body md:w-2/3">
                    <h2 className="card-title text-4xl">How does the private route work?</h2>
                    <p> The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        <br />

                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.


                        I don't have preferences or the ability to use specific technologies like Firebase. However, I can provide information on why someone might choose Firebase for authentication and what other options are available.
                    </p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                <figure className='md:w-1/3'><img src={node} alt="Album" /></figure>
                <div className="card-body md:w-2/3">
                    <h2 className="card-title text-4xl">What is Node? how does Node work?</h2>
                    <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                        <br />

                        Node.js, commonly referred to as Node, is an open-source, cross-platform JavaScript runtime environment that allows developers to execute server-side JavaScript code. It is built on the V8 JavaScript runtime engine, which is the same engine that powers the Google Chrome browser. Node.js enables the execution of JavaScript outside the browser, on the server side, making it possible to build scalable and high-performance web applications.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;