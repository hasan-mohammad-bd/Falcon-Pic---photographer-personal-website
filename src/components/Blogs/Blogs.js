import React from 'react';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='py-5 text-center'>Questions and Answers</h1>
            <h2>What is the difference between authorization and authentication?</h2>
            <p><span>Answers: </span> Authentication verifies who is the user, on the other hand, which option is a user can access. 
                Authentication is checked by password, OTM, biometric authentication any many more but authorization works setting up option for a particular user for an organization. authentication is considered is the first step identifying a user. for authorization comes always after authentication.
                Authentication is controlled by user, a user can changed is password any time. but authorization is set by the organization.

                </p>

            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p><span>Answers: </span>there are huge benefit using firebase, those are described as below: 
            <br />
            1. As firebase is from google. thats way google provide powerful database for web and movile application development. 
            <br />
            2. firebase offer realtime database which allows applications to approach cross-platform data which allows joining noSQL cloud-storage.
            <br />
            3. firebase gives realtime updates with the helps of cloud firestore.
            <br />
            4. firebase is very fast and safe hosting. programmer can relay on that easily.
            5. firebase is free for new user which helps he new learner and small business owner very well.
            <br />
            Other options of authentication:
            <br />
            1. Stytch
            <br />
            2. Ory
            <br />
            3. Supabase 
            <br />
            4. Okta 
            <br />
            5. Pingldentity 
            <br />
            6. Keycloak 
            <br />
            7. Fonttegg
            <br />

            </p>
            <h2>What other services does firebase provide other than authentication?</h2>
            <p><span>Answers: </span> 
            There are some services firebase provide other than authentication: 
            <br />
            Cloud messaging: Firebase is a great tool implementing notifications because firebase is scalable, fast, reliable handling requests. on the top its free to use.
            <br />
            Dynamic Links: this service is to generate deep links that redirect user traffic. for the dynamic domain name, the service can be integrated with the domain name.
            <br />
            Predictions: With the help of machine learning capability, this service helps making predictions about product decisions.
            <br />
            Google Analytics: The service gives visualization of all information on click of a button.
            <br />
            Hosting: Google gives hosting service which is very helpful for many users.
            <br />
            Remote Config: You can change any content with a single click. it helps the game application significantly 


            </p>
        </div>
    );
};

export default Blogs;