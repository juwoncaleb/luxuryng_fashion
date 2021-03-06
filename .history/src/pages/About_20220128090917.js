import React from 'react';
import Header from "../components/Header"

function About() {
  return <div>
    <Header/>
    <div class="wrap">
    <h2>Simple</h2>
    <p><a href="#" class="underlined underlined--thin">I'm a very long text and it was a pain in the ass to animate an underline effect - but jeez it's such a simple snippet at the end.</a></p>
  
  <h2>Let's play with the thickness of this underline</h2>
 <p><a href="#" class="underlined underlined--thick">I'm an other very long highlighted link.</a></p>
  
  <h2>But I want it a bit higher compared to the baseline</h2>
 <p><a href="#" class="underlined underlined--offset">I'm an other very long link and I'm an artist you know.</a></p>
  
  <h2>Let's play with the gradient</h2>
  <a href="#" class="underlined underlined--gradient">PICKLE RIIIICK</a>
  
  <h2>Oooh fancy</h2>
 <p><a href="#" class="underlined underlined--reverse">I'm an other long link and I don't like lorem.</a></p>
</div>  
</div>
}

export default About;
