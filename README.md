# 🚀 DevOps CI/CD Project

This project was built as part of a **2-day hands-on workshop** to understand the basics of DevOps, including CI/CD pipelines and containerization.

---

## 📌 Overview

The project demonstrates how to:

* Use GitHub for version control
* Build a CI/CD pipeline using Jenkins
* Containerize a Node.js application using Docker
* Deploy the application using Docker containers

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Jenkins
* Docker
* Git & GitHub

---

## 📂 Project Structure

```
devops_project/
│── app.js
│── package.json
│── package-lock.json
│── Dockerfile
│── Jenkinsfile
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/Aryantiwari02/devops_project.git
cd devops_project
```

### 2. Install dependencies

```
npm install
```

### 3. Run locally

```
node app.js
```

Open in browser:
http://localhost:3000

---

## 🐳 Docker Usage

### Build image

```
docker build -t devops_app .
```

### Run container

```
docker run -d -p 3000:3000 --name devops_container devops_app
```

---

## 🔁 Jenkins Pipeline

The pipeline includes the following stages:

* Clone code from GitHub
* Build Docker image
* Remove existing container (if any)
* Run a new container

---

## 📊 Workflow

```
GitHub → Jenkins → Docker → Application
```

---

## 🎯 Learning Outcomes

* Basic understanding of CI/CD pipelines
* Working with Docker for application deployment
* Integrating Jenkins with GitHub
* Handling common errors during setup and deployment

---

## 🚀 Future Improvements

* Add automated triggers using webhooks
* Push Docker images to Docker Hub
* Explore container orchestration tools like Kubernetes

---

## 👨‍💻 Author

Aryan Tiwari
GitHub: https://github.com/Aryantiwari02

---
