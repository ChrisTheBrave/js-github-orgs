
let promiseOrgs = fetch(
 'https://api.github.com/users/addyosmani/orgs',
 {
   method: 'GET',
   header: {
     Authorization: 'token ' + ''
   }
 }
);


promiseOrgs.then( function getOrg(response) {
    if (response.status > 199 && response.status < 300) {
      response.json().then( function extractOrg(orgData) {
        // loop over the Org object and extract the Logo urls
        orgData.forEach(function buildListItem(organization){
          console.log(organization.avatar_url, organization.login);

          // build an LI, put an img in there, add the LI to page
          // let newLi = document.createElement('li');
          // document.querySelector('#organizations ul').appendChild(newLi);
          // let newP = document.createElement('p');
          // newP.innerText = organization.login;
          // document.querySelector('#organizations ul li:last-child').appendChild(newP);
          // let newImage = document.createElement('img');
          // newImage.src = organization.avatar_url;
          // document.querySelector('#organizations ul li:last-child p').appendChild(newImage);

          let newLi = document.createElement('li');
          document.querySelector('#organizations ul').appendChild(newLi);
          let newImage = document.createElement('img');
          newImage.src = organization.avatar_url;
          newImage.style.height = '4em';
          document.querySelector('#organizations ul li:last-child').appendChild(newImage);
          let newH = document.createElement('h2');
          newH.innerText = organization.login;
          newH.style.display = 'inline-block';
          document.querySelector('#organizations ul li:last-child').appendChild(newH);

          //document.getElementById(id).style. = new style




        });
    });


    } else {
      console.log('Initial fetch of organizations failed. Error code:', org.status );
      return;
    }

    //console.log("Debug:  the logins are: ", orgNames);

  });
