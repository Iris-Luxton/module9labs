# Programming task - CI/CD with GitHub Actions

## Assignments
Assignment is to be completed by successfully completing the following tasks:

**If your lab work folder is in the dev or main branch follow these instructions**:
1. In the root of the branch, if there is not already a .github folder, create one.
2. If there is not already a workflows folder inside of the .github folder, create one.
3. Inside of the workflows folder, create a your_name-CICD.yml file. (Replace your_name with your name)

**If your lab work is in a branch with your name follow these instructions**:
1. In the root of the branch, create a .github folder.
2. Inside the .github folder, create a workflows folder.
3. Create a cicd.yml file.

**Everyone follow these instructions after completing the ones above**:
1. Create a GitHub Actions workflow inside of the .yml file you just created. The name of the workflow must be your_name-CICD-run (replace your_name with your name)

The GitHub Actions workflow must create a Docker image from the Node application you made in labTen exercise one, and then automatically push it to Docker Hub.