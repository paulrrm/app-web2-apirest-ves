
node{
    stage('clonar repo'){
        checkout scm
    }
    stage('instalar dependencias'){
        bat 'npm install'
    }
    stage('construir la aplicacion'){
        bat 'npm run build'
    }
    stage('Mover al servidor'){
        bat 'xcopy \"C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\pipelines fork repo\\dist\" \"C:\\nginx-1.26.0\\html\" /q /y /s /e /h'
    }

}
