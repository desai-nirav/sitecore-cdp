<div id="top"></div>
# Sitecore CDP - Decision Model Demo
In this Sitecore CDP demonstration, Walt Rolle and Nirav Desai from EPAM show how to detect a users device and personalize based on their device type. You'll see how they use the Sitecore CDP decision model to accomplish this.

Below are sample files part of Sitecore CDP appilcation demo:

* Web Experiences.
  * Template
    * HTML
    * CSS
    * JavaScript
    * API
* App 
* Decision Models
  * Programable
  * Data


## Web Experiences
Web Experiences folder contains sample code used in Sitecore CDP web experience -> build -> content
We created a template to render the experience, using HTML/CSS/JavaScript and API (Server Side Javascript)
Each folder contains specific files used in this demo to build template for this web experience.

## App
App folder contains code used as application or independent web page.

## Decision Models
Decision Models folder contains code used in Sitecore CDP -> Decisioning -> Decision Models
Decision model was built using input data (session) passing data to [programmable](/Decision%20Models/Programable/programable.js) generating response and passing data to [Decision Table](/Decision%20Models/Decision%20Table.png) which will determine the correct offer and product code to pass for [Data System](/Decision%20Models/Data%20Systems.png) to get data from [JSON Bin](https://jsonbin.io/) - used as an API service to get products.

> *Sample product data used in demo are available in data folder*
