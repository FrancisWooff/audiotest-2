# audiotest-2
Template for School of Science, Engineering & the Environment students at the University of Salford to adapt to host comparative audio tests online.

latest update 22/9/20 8:50

To use this template the following additional actions are required as a minimum:

1. An account with Vidyard https://www.vidyard.com to which to upload your video file or files with multiple audio tracks.
2. Follow Vidyard support documentation at https://knowledge.vidyard.com/hc/en-us/articles/360010001713-Embed-your-video-on-a-webpage on enabling embed for the videos you’ve uploaded. Note that a maximum of 5 videos can be enabled for embed on a free Vidyard account. You should choose the “inline” embed option.
3. You will need to edit each page of html (one per test page, see point 6 below) to replace the code there currently (which references a short test video with Vidyard) to the code copied in step 2 above.
4. When the php file(s - one per test page, see point 6 below) are performing their function they e-mail test results to an address “hard written” into the code of the files. Currently placeholder address "you@edu.salford.ac.uk" is used, this will need to be edited to the test owner's e-mail address.
5. The php file(s) need to be hosted on a machine running PHP (e.g. a web server) to perform their function. You could test and develop the function of the html, css & js files hosting these locally, but the functionality that follows pressing “Submit” on the html page(s) will not work. See University Service Portal Knowledge article https://salfordprod.service-now.com/sp?id=search&q=KB0010645 for information on University provided hosting accounts.

The following further steps may be needed to adapt the project for your use:

6. For each additional test page you will need differently named copies of index.html & form2mail.php. One example copy of each is included in this repository, with the copy pages named page2.html & form2mail2.php respectively. In addition to renaming the copied html file(s) & editing them to reference different video files, you will need to edit the "action" on the form included, so the test results are sent to the corresponding php file. You will need to edit the php file so the e-mail it sends has a different subject (p1, p2, p3 etc.) so you can tell which e-mail received relates to which test page. You will need to edit the link on the php page which takes you to the next page of the test (or back to the beginning, on the final page of the test).
7. You may need to create additional "faders" & buttons if you have more than 3 audio tracks per test video/page. Currently this involves:
- Editing the html file(s) by adding (copy & paste insert) more "channel" divs to the "panel" div, adding extra labels & inputs to the form & changing "a", "b" etc. in the copied elements to ""d", "e" etc. (3 places for each added channel & form element pair).
- Editing the php file(s) to receive a greater number of inputs from the html form & mail these.
- It is no longer necessary to edit the .js file (or the .css file, unless you wish to change the look of your test)
8. Consideration should be given to GDPR regulation, despite the very small amount of data being collected (name of subject) in running the test. You might consider removing the text input field for name from the test to anonymise it, removing personal data from the test, but as the page will be hosted on the net & searchable & accessible to anyone this runs the risk of random & possibly unreliable results.

The following item is the only remaining item of a number of planned improvements for this project (others having been developed & incorporated)
12. Randomisation of the placement of audio tracks to "a", "b" etc. faders/buttons (with a key in results mail to show how tracks were placed against "a", "b" etc.). This may be delivered initially as part of this branch or of new "V3" branch described below.

Further developments & other branches of this project.
This repository now has 3 branches:
1. "V1-self-hosted-video" is an updated version of the original "audiotest" repository. It is not recommended to use this unless you need a version without an embedded player due to poor browser support (see the readme for the branch).
2. The main branch is the (V2) version in use by most students using this project.
3. "V3" is a new development branch for a version relying more on PHP, requiring less duplicate pages & sending results out from all pages in a single e-mail. This is likely to be ready in Oct 2020.
After the "V3" above a version 4 with similar functionality, but built using node.js is planned.
