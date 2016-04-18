var sessions = [
    {id:0 , title:"9:00 AM", isDivider:true},
	{id:1 , title:"Data Security", speaker:"CHRISTOPHE COENRAETS", aboutspeaker:"About speaker.", day:"10", month:"June", year:"2016", hourblock:"9:00 AM", starttime:"9:40am", endtime:"10:00am", room:"Ballroom A", description: "In this session, you'll learn how to build a native-like mobile application using the Ionic Framework, AngularJS, and Cordova."},
    {id:2 , title:"10:00 AM", isDivider:true},
	{id:3 , title:"Introduction to OneOps", speaker:"LISA SMITH", aboutspeaker:"About speaker.", day:"10", month:"June", year:"2016", hourblock:"10:00 AM", starttime:"10:10am", endtime:"10:30am", room:"Ballroom B", description: "In this session, you'll learn everything you need to know to start building next-gen JavaScript applications using AngularJS."},
    {id:4 , title:"DataFabric for Big Data Analytics", speaker:"JOHN SMITH", aboutspeaker:"About speaker.", day:"10", month:"June", year:"2016", hourblock:"10:00 AM", starttime:"10:30am", endtime:"10:50am", room:"Ballroom A", description: "In this session, John will tell you all you need to know to start contributing to Apache Cordova and become an Open Source Rock Star."},
    {id:5 , title:"3:00 PM", isDivider:true},
	{id:6 , title:"Mobile Performance Techniques", speaker:"JESSICA WONG", aboutspeaker:"About speaker.", day:"10", month:"June", year:"2016", hourblock:"3:00 PM", starttime:"3:10pm", endtime:"3:30pm", room:"Ballroom B", description: "In this session, you will learn performance techniques to speed up your mobile application."},
    {id:7 , title:"4:00 PM", isDivider:true},
	{id:8 , title:"Building Modular Applications", speaker:"LAURA TAYLOR", aboutspeaker:"About speaker.", day:"10", month:"June", year:"2016", hourblock:"4:00 PM", starttime:"4:00pm", endtime:"4:20pm", room:"Ballroom A", description: "Join Laura to learn different approaches to build modular JavaScript applications."},
	{id:9 , title:"Data Cafe - A real Analytics experience", speaker:"GERSON MONTIEL", aboutspeaker:"About speaker.", day:"10", month:"June", year:"2016", hourblock:"4:00 PM", starttime:"4:30pm", endtime:"4:50pm", room:"Ballroom C", description: "Learn the capabilities of having a real analitycs platform."}
	];

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};