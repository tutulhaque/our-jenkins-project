pipeline {
    agent any
 
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/tutulhaque/our-jenkins-project/'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project...'
                // example: sh 'npm install' or mvn clean install
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // example: sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // example: sh './deploy.sh'
            }
        }
    }
}