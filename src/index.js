import React from 'react';
import ReactDOM  from 'react-dom';
import SimpleCounter from './script';
 
import  './index.css';

function FinalOne() {
  
  return  (
<section>
  <SimpleCounter />
</section>
);
  
}



ReactDOM.render(<FinalOne/>,document.getElementById('root'));
