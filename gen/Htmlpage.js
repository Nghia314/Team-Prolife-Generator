const generateManager = function (manager) {
  return `
    <div class="container">
    <div class="row">
    <div class="col-4">
    <div class="card h-100">
    <div class="card-header".
    <h3>${manager.name}</h3>
    <h4>Manager</h4>
    </div>

    <div class="card-body">
    <p class="id">ID: ${manager.id}</p>
    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="office">Office Number: ${manager.officeNumber}</p>
    </div>
    </div>
    </div>
    `;
};
const generateIntern = function (intern) {
    return `
      <div class="container">
      <div class="row">
      <div class="col-4">
      <div class="card h-100">
      <div class="card-header".
      <h3>${intern.name}</h3>
      <h4>Manager</h4>
      </div>
  
      <div class="card-body">
      <p class="id">ID: ${intern.id}</p>
      <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
      <p class="school">School: ${intern.school}</p>
      </div>
      </div>
      </div>
      `;
  };

  const generateEngineer = function (engineer) {
    return `
      <div class="container">
      <div class="row">
      <div class="col-4">
      <div class="card h-100">
      <div class="card-header".
      <h3>${engineer.name}</h3>
      <h4>Manager</h4>
      </div>
  
      <div class="card-body">
      <p class="id">ID: ${engineer.id}</p>
      <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
      </div>
      </div>
      </div>
      `;
  };

  generateHtml = (data) => {
      cardInfo= [];
      for (let i = 0; i < data.length; i++) {
          const employee = data[i];
          const role = employee.roleSet();

          if (role === 'Intern'){
              const internCard = generateIntern(employee);

              cardInfo.push(internCard)
          }
          if (role === 'Engineer'){
              const engineerCard = generateEngineer(employee);

              cardInfo.push(engineerCard)
          }
          if (role === 'Manager'){
              const managerCard = generateManager(employee);

              cardInfo.push(managerCard)
          }
      }
      const employeeCard = cardInfo.join('')

      const generateTeam = generateTeamCards(employeeCard);
      return generateTeam;
  };


  const generateTeamCards = function (employeeCard) {
      return `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Card Prolife</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header id="header">
        <navbar class="navbar" id="navbar">
            <p class="navbar-brand">Team Card Prolife</p>
        </navbar>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="teamCard">
                ${employeeCard}
            </div>
        </div>
    </main>
    
</body>
<script
  src="https://code.jquery.com/jquery-3.6.0.slim.js"
  integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY="
  crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>
      `;
  }

  
