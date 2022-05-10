# FinalDevTools
 
## Frontend [(team-13-frontend)](http://128.199.188.21:8080/job/team-13-frontend/)
<img src="https://cdn.discordapp.com/attachments/936914602225172501/955081252539617280/unknown.png" alt="" width="1000" height="272"/>



### Pull Code
```
pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                git branch: 'main', url: 'https://github.com/konlawatit/SWDEV-BBP-PLUS'
            }
        }
```
 * Stage 1 ทำการดึง Code มาจาก Branch `main` ของโปรเจค

### Download dependency
```
     stage('Download dependency') {
            steps {
                sh 'cd frontend && npm install'
            }
        }
```
 * Stage 2 ทำการดาวน์โหลดและติดตั้ง Dependency ต่าง ๆ ของตัวโปรเจค โดยใช้คำสั่ง `cd frontend && npm install`

### Unit testing
```
     stage('Unit Testing') {
            steps {
                sh 'cd frontend && npm run unit-test'
            }
        }
```
 * Stage 3 ทำการทดสอบในรูปแบบของ Unit Test โดยใช้คำสั่ง `cd frontend && npm run unit-test`

### Unit testing Report
```
     stage('Unit Testing Report') {
            steps {
                sh 'cd frontend && npm run unit-test-report'
                publishHTML target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: "./frontend/coverage/lcov-report",
                        reportFiles: "index.html",
                        reportName: 'Unit Test Coverage Report'
                    ]

                    publishHTML target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: "./frontend/coverage",
                        reportFiles: "report.html",
                        reportName: 'Unit Test Report'
                    ]
            }
        }
```
 * Stage 4 ทำการสร้าง Coverage report

### Component testing
```
     stage('Component Testing') {
            steps {
                sh 'cd frontend && npm run component-test'
            }
        }
```
 * Stage 5 ทำการทดสอบในรูปแบบของ Component Test โดยใช้คำสั่ง `cd frontend && npm run component-test`

### Component testing Report
```
     stage('Component Testing Report') {
            steps {
                sh 'cd frontend && npm run component-test-report'
                publishHTML target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: './frontend/coverage/lcov-report',
                        reportFiles: 'index.html',
                        reportName: 'Component Test Coverage Report'
                    ]
            }
        }
```
 * Stage 6 ทำการสร้าง Coverage report

### End-to-End Testing
```
     stage('End-To-End Testing') {
            steps {
                sh 'cd frontend && npm run e2e-test || exit 0'
            }
        }
```
 * Stage 7 ทำการทดสอบในรูปแบบของ End-to-End Testing โดยใช้คำสั่ง `cd frontend && npm run e2e-test || exit 0`
### Build
```
     stage('Build') {
            steps {
                sh 'cd frontend && npm run build'
            }
        }
```
 * Stage 8 ทำการ Build โปรเจคโดยใช้คำสั่ง `cd frontend && npm run build`
### Deployment
```
      stage('Deployment') {
            steps {
                echo '---------------------------- Deployment ----------------------------'
                // sh ''
            }
        }
    }
}
```
 * Stage 9 ทำการ Deploy โปรเจค
