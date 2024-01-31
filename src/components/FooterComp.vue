<template>
    <div class="f-item-con">
       <div class="app-info">
           <span class='app-name'>
           |  <span class='app-initial'>R</span>amawoothar.org
           </span>
           <p>We will provide you with <strong>Well organised</strong> and <strong> friendly</strong> News.</p>
       </div>
       <div class="useful-links">
           <div class="footer-title">| Useful Links</div>
           <ul>
               <li>Report a Story</li>
               <li>Sign In</li>
               <li>About Us</li>
               <li>Terms and Conditions</li>
           </ul>
       </div>
       <div class="help-sec">
           <div class="footer-title">| Help</div>
           <ul>
               <li>Help Me</li>
               <li>Feedback</li>
               <li>Report an Issue</li>
           </ul>
       </div>
       <div class="g-i-t">
           <div class="footer-title">| Get in Touch</div>
           <form action="https://formspree.io/f/xdovywrd" method="POST" class="space-y-2">
               <input type="text" name="g-name" class="g-inp" id="g-name" placeholder='Name' />
               <input type="email" name="g-email" class="g-inp" id="g-email" placeholder='Email' />
               <textarea type="text" name="g-msg" class="g-inp h-40 resize-none" id="g-msg"
                   placeholder='Message...'></textarea>
               <button type="submit" class='f-btn'>Submit</button>
           </form>
       </div>
   </div>
   <div class='cr-con'>Copyright &copy; 2022 | Made by Nikita Ramawoothar for BNRY News</div>

</template>

<style scoped>
footer{
 background-color: #252121;
}
.f-item-con{
 box-shadow: 0 0px 10px black;
 padding: 1.5rem 4rem;
 display: grid;
 grid-template-columns: repeat(3, minmax(0, 1fr));
 grid-gap: 2rem;
 position: relative;
 top: 5rem;
 bottom: 1rem;
 background-color: #2a4349;
 color: white;
}
footer .app-name{
 border-left: 4px solid var(--theme-col);
 padding-left: 1.5rem;
 font-size: 1.875rem;
 line-height: 2rem;
 font-weight: 700;
}
.app-name .app-initial{
 color: var(--theme-col);
}
footer .app-info p{
 color: white;
 padding-left: 1.65rem;
}

footer .footer-title{ 
 font-size: 1.25rem;
 line-height: 1.75rem;
 color: white;
 border-left: 4px solid var(--theme-col);
 padding-left: 1.5rem;
 height: fit-content;
}
.useful-links ul{ 
 padding-left: 0.75rem;
 color: white;
 font-size: 0.5rem/* 14px */;
 line-height: 1.25rem;
 margin-top: .5rem;
}
.useful-links ul li{ 
 margin: .2rem 0;
 cursor: pointer;
 color: #d4d4d4;
 width: fit-content;
}
.useful-links ul li:hover{
 color: white;
}
footer .help-sec{
 grid-column-start: 1;
}
footer .cr-con{
 background-color: #232127;
 color: white;
 padding: 1rem 4rem;
 text-align: center;
}
.g-i-t{
 display: grid;
 grid-column-start: 2;
 grid-row-start: 1;
 grid-row-end: 3;
}
.g-i-t form{
 display: flex;
 flex-direction: column;
 margin-top: 1rem;
 --tw-space-y-reverse: 0;
 margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
 margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
form .g-inp{
 padding: .25rem .5rem;
 font-size: 16px;
 border-radius: 10px;
 border: 1px solid darkgrey;
 background-color: rgba(78, 78, 78, 0.507);
 margin-top: 0.2rem;
}
.g-inp textarea{
 height: 150px;
}

-btn .useful-links{
 padding: .25rem 1rem;
 background-color: var(--theme-col);
 border-radius: .25rem;
 font-size: 16px;
 color: white;
 font-weight: 500;
}

.f-btn {
 margin-top: 1rem;
 font-weight: bold;
 background-color: #b8d4db;
 border-radius: 10px;
 border: 1px solid darkgrey;
 font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 padding: 4px;
}

@media only screen and (max-width: 1080px){
.f-item-con {
 width: 57.5rem;
}
}

</style>