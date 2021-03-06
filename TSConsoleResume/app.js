"use strict";
var name = "Daesy";
var allCapsName = name.toUpperCase();
console.log("Name: " + allCapsName);
var career = "Creative / Photographer / Student";
console.log("Career: " + career);
var description = "I like pickles(:";
console.log("Description: " + description);
var interests = ["Art", "Cooking", "Space", "Mother Earth", "Physics"];
console.log("\nMy Interests:");
function displayInterests(str) {
    console.log("* " + str);
}
displayInterests("Art");
displayInterests("Cooking");
displayInterests("Space");
displayInterests("Mother Earth");
displayInterests("Physics");
var positions = [
    "Agent Assist at WellsFargo - Assisted with special projects and offered credible alternative options regarding process initiation, work structuring, utilization of resources to new hires ",
    "Claims Specialist at WellsFargo - Handled and resolved cardholder inquiries about fraud or merchant disputes in a friendly and courteous manner ",
    "Partner Support at Insight - Worked directly with partners via chat, phone, and email to ensure high quality customer service for cardholders "
];
console.log("\nMy Previous Experience: ");
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("* " + jobTitle + " at " + companyName + " - " + jobDescription);
}
displayPosition("WellsFargo", "Agent Assist", "Assisted with special projects and offered credible alternative options regarding process initiation, work structuring, utilization of resources to new hires");
displayPosition("WellsFargo", "Claims Specialist", "Handled and resolved cardholder inquiries about fraud or merchant disputes in a friendly and courteous manner");
displayPosition("Insight", "Partner Support", "Worked directly with partners via chat, phone, and email to ensure high quality customer service for cardholders");
var skills = ["Bilingual", "Strong Work Ethic", "Swift", "Creative", "Quick Learner", "First Aid", "Certified Foodie"];
console.log("\nMy Skills: ");
function displaySkill(mySkill, bam) {
    if (bam == true) {
        console.log("*  BAM: " + mySkill);
    }
    else if (bam == false) {
        console.log("*  " + mySkill);
    }
    ;
}
;
displaySkill("Bilingual", true);
displaySkill("Strong Work Ethic", false);
displaySkill("Swift", true);
displaySkill("Creative", true);
displaySkill("Quick Learner", false);
displaySkill("First Aid", false);
displaySkill("Certified Foodie", true);
/***************************************************************/
console.log("\n");