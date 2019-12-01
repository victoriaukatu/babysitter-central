import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="about">
    <div>
      <center><h2>"It takes a village to raise a child."</h2></center>
      <h4>
        It's likely that you are familiar with this traditional African proverb. It describes the fact that a child, in addition to their 
        primary caregiver, has many people in their life who nuture them, shape them, and help them grow. One person can't do it alone.
      </h4> 
      <h4>That is why I'm thankful that I have the privilege of babysitting. When I am not at work or busy coding, I enjoy spending my time 
          taking care of my friends' children. I love thinking up fun activities to do with the kids or simply playing a round of good 'ol
          hide-and-seek with them. I get to contribute to them 
      </h4>
      <h3>
      ... But there's one problem.
      </h3> 
      <h4>
        With so many kids, that's a lot of information to keep straight. I got tired of struggling to remember 
        who I babysat two weeks ago, which child prefers their sandwiches cut diagonally, and which kid needs help getting ready for their 
        afternoon nap. And I <b>definitely</b> did not want to get anyone's allergies confused.
      </h4>
      <h4>
        That's why I created this application. Babysitters can use it as a centralized hub for all the information they need, including
        details on each child they babysit. They can also write and save a report of how babysitting went which parents can logon and view
        anytime. 
      </h4>
      <br/>
      <center>
      <h4>
        I hope that this can be a helpful resource for you! Thanks for visiting!
      </h4>
      </center>
    </div>
  </div>
);

export default AboutPage;
