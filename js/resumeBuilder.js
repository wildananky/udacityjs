/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
 "name" : "Wildan Anky Putra",
 "role" : "Web UI Developer",
 "contacts" : {
 	"mobile" : "085320679933",
 	"twitter" : "wildananky",
 	"email" : "wildan.anky@icloud.com"
 	"github" : "wildananky",
 	"location" : "Wisma Ladika, Kukusan Beji Depok",
 	"blog" : "wildananky.wordpress.com"
 }
 "picUrl" : "images/wildan.jpg",
 "welcomeMsg" : "Hello! I'm Wildan. Professional Web UI Developer.",
 "skills" : ["Programming", "Design", "Public Speaking"]
} 

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.re place("%data%", bio.role);
 var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
 var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
 var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
 var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
 var formattedPicUrl = HTMLbiopic.replace("%data%", picUrl);


 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $('#topContacts').append(formattedMobile);
 $('#topContacts').append(formattedEmail);
 $('#topContacts').append(formattedTwitter);
 $('#topContacts').append(formattedBlog);
