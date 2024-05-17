node{
    stage('clonar repo'){
        checkout scm
    },
    stage('instalar dependencias'){
        bat 'npm install'
    },
    stage('construir la aplicacion'){
        bat 'npm run build'
    },
    // stage('Mover al servidor'){
    //     bat 'xcopy c:\test C:\nginx-1.25.5\html /s /e /h'
    // },

}