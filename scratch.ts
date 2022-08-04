let org = 'myFancyOrg', project = 'philbo baggins';

let prodEnvironments = ListEnvironments({organizationName: org, projectName: project, filter: {type: production}});
for (let env of prodEnvironments) {
   let promise = ListDeployments({org, project, env)
}
