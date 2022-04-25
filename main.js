const generateTeam = require("./gen/Htmlpage");
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./library/intern");
const Engineer = require("./library/engineer");
const Manager = require("./library/manager");

const employees = [];

function runMain() {
  function generateTeam() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter team member name?",
          name: "name",
        },
        {
          type: "list",
          message: "Select team members role",
          choices: ["Engineer", "Intern", "Manager"],
          name: "role",
        },
        {
          type: "input",
          message: "Enter team member ID",
          name: "id",
        },
        {
          type: "input",
          message: "Enter team member email",
          name: "email",
        },
      ])
      .then(function ({ name, role, id, email }) {
        let roleInfo = "";
        if (role === "Engineer") {
          roleInfo = "GitHub username";
        } else if (role === "intern") {
          roleInfo = "school Name";
        } else {
          roleInfo = "office phone number";
        }
        inquirer
          .prompt([
            {
              message: `Enter team member ${roleInfo}`,
              name: "roleInfo",
            },
            {
              type: "List",
              message: "Would you like to have more team member?",
              choices: ["yes", "no"],
              name: "moreMember",
            },
          ])
          .then(function ({ roleInfo, moreMember }) {
            let newMember;
            if (role === "Manager") {
              newMember = new Manager(name, id, email, roleInfo);
            } else if (role === "Engineer") {
              newMember = new Engineer(name, id, email, roleInfo);
            } else {
              newMember = new Intern(name, id, email, roleInfo);
            }
            employees.push(newMember);
            generateTeam(newMember).then(function () {
              if (moreMember === "yes") {
                addMember();
              } else {
                generateTeam();
              }
            });
          });
      });
  }
}
runMain ();