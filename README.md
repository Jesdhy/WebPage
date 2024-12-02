# 🖥️🌐 Workflow for Deployment on EC2 
## 📘 About The Project
This repository contains an automated workflow using GitHub Actions to deploy a Docker application to an AWS EC2 instance (Amazon/Linux).

## 📑 Table of Contents

- [📘 About The Project](#about-the-project)
- [🚀 Getting Started](#getting-started)
  - [🔧 Prerequisites](#prerequisites)
  - [📥 Installation](#installation)
  - [⚙️ Running](#running)
  - [☁️ AWS Deployment](#running-with-docker)
- [🔗 Marketplace Links](#contributing)
- [🤝 Contributing](#contributing)

## 🚀 Getting Started
## 🔧 Prerequisites
1. **Docker Hub account**:
    Generate username and password credentials.
2. **EC2 instance on AWS**:
    Set up SSH access with a private key (.pem). 
3. **GitHub Secrets**:
Add the following secrets to the repository:
    - `DOCKER_USERNAME`: Your Docker Hub user.
    - `DOCKER_PASSWORD`: Your Docker Hub password.
    - `EC2_HOST`: IP address of your EC2 instance.
    - `EC2_USERNAME`: SSH user (for Amazon Linux).
    - `EC2_PRIVATE_KEY`: SSH private key to access the EC2 instance.

## 📥 Installation
1.- Clone the repository

   ```sh
   git clone https://github.com/Jesdhy/WebPage.git
  ```
2.- Initial setup
- Go to Settings > Secrets and variables > Actions.
- Add the secrets previously said

## ⚙️ Running
Perform a commit or push to trigger the workflow automatically.
```sh
git add .
```
```sh
git commit -m "Automatic deployment"
 ```
```sh
git push
```

## ☁️ AWS Deployment

1. Docker image (Generated automatically)
![image](https://github.com/user-attachments/assets/1382ace7-24c0-4495-a391-a49d674c95bb)

2. AWS Deployment

![image](https://github.com/user-attachments/assets/8d6e3d30-4ff6-4ae6-bac4-a3261c89c4cf)

### Now, the application will be available on the EC2 server.🎉

## 🔗 Marketplace Links
https://github.com/marketplace/actions/docker-login
https://github.com/marketplace/actions/build-and-push-docker-images
https://github.com/marketplace/actions/deploy-docker-to-aws-ec2

## 🤝 Contributing
Thank you for your interest in contributing to this project! Here are some guidelines for doing so:
1. **Fork the repository** and clone the project to your local machine.
2. **Create a new branch** for your changes.
3. **Commit your changes** with a clear, descriptive message.
4. **Submit a Pull Request** with a description of your changes.

Thank you for helping improve this project!

