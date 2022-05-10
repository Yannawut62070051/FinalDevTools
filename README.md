# FinalDevTools

[(ระบบรับสมัครนักศึกษาระดับปริญญาโท)](https://new.reg.kmitl.ac.th/admission/#/master/explore)
<img src="https://media.discordapp.net/attachments/359264738695446532/973479186851332116/unknown.png?width=1204&height=670" alt=""/>
<img src="https://media.discordapp.net/attachments/359264738695446532/973480698822418462/unknown.png?width=1315&height=670" alt=""/>
เป็บเว็บไซต์รับสมัครนักศึกษาระดับปริญญาโท โดยในส่วนของ features จะประกอบไปด้วย
* ค้นหาจากการ filter ซึ่่งประกอบไปด้วย dropdown ค้นหาด้วย คณะ, รอบรับสมัคร, โครงการ, หลักสูตรไทย/นานาชาติ
* ค้นหาเพิ่มเติมจากการพิมพ์ชื่อโดยทำการหาจากชื่อคณะหรือหลักสูตร
* แสดงผล
เว็บไซต์ต้อน
## Userflow
<img src="https://media.discordapp.net/attachments/359264738695446532/973477217864667136/unknown.png?width=1440&height=389" alt=""/>

เมื่อผู้ใช้เปิดมาจะพบกับหน้า


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
