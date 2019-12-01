import React from 'react';
import './Resources.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Resources = () => (
  <div class="resources">
    <h2>The links below can serve as helpful resources for you!</h2>
    <h2>Food</h2>
   <ul>
     <li><a href="https://parade.com/844057/kristanroland/20-fun-snacks-for-kids/">20 Fun Snacks for Kids</a></li>
     <li><a href="https://www.popsugar.com/family/photo-gallery/23675925/image/41203374/Rainbow-Popsicles">Homemade Popsicles</a></li>
     <li><a href="https://www.delish.com/cooking/g4150/easy-dessert-recipes-for-kids/">Kid-Friendly Baking Ideas</a></li>
   </ul>
   <h2>Games and Activities</h2>
   <ul>
     <li><a href="https://mcm.org/">Minnesota Children's Museum</a></li>
     <li><a href="https://www.parents.com/fun/activities/outdoor/">Fun Backyard Games</a></li>
     <li><a href="https://www.thespruce.com/indoor-treasure-hunt-for-children-1695332">Indoor Treasure Hunt (Clues Included!)</a></li>
   </ul>
   <h2>In Case of Emergency</h2>
   <ul>
     <li><a href="https://mnpoison.org/">Poison Control Center</a></li>
     <li><a href="https://www.childrensmn.org/">Children's Hospital</a></li>
     <li><a href="https://www.childrens.com/health-wellness/treating-bug-bites-and-stings-in-children">
       How to Treat Insect Bites and Stings</a></li>
   </ul>

  </div>
);

export default Resources;
