#!groovy
@Library(['rialto_pipeline_lib']) _

pipeline {

// 	agent {
// 		dockerfile {
// 			filename 'Build_Dockerfile'
// 			args '-u 0 -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker -v /var/lib/jenkins/.ssh:/home/jenkins/key-files -v ${WORKSPACE}'
// 			//label 'cpbx'
// 			label 'docker'
// 		}
// 	}

	stages {
		stage(‘Init’) {
			steps {
				script {
					setGlobal()
				}
			}
		}
// 		stage('Adding key for git access') {
// 			steps {
// 				sh '''
// 				   mkdir /root/.ssh
// 				   chmod 700 /root/.ssh
// 				   #cp /home/jenkins/key-files/* /root/.ssh/
//                     		   cp /home/jenkins/key-files/id_rsa /root/.ssh
// 				   cp /home/jenkins/key-files/id_rsa.pub /root/.ssh
//                     		   cp /home/jenkins/key-files/authorized_keys /root/.ssh
//                     		   cp /home/jenkins/key-files/known_hosts /root/.ssh
// 				   chmod 600 /root/.ssh/id_rsa
// 				   ssh-keyscan wwwin-github.cisco.com >> /root/.ssh/known_hosts 
// 				'''
// 			}
// 		}
		// stage ('User-input') {
		// 	steps {
		// 		script {
		// 			timeout(time: 300, unit: 'SECONDS') {
		// 				echo "Warning.! this job will timeout if the user-input is not set in 5 minutes"
		// 				sh "git ls-remote -t -h git@wwwin-github.cisco.com:CloudCalling/ocischemas.git | sed -n -e '/22.*.x/p' -e '/master/p' | cut -f2- | sed -e 's#refs/heads/##g' > ${WORKSPACE}/branch_list.txt "
		// 				env.Branches = readFile (file: "${WORKSPACE}/branch_list.txt")
		// 				env.Branch = input message: 'Choose the branch from list to build', ok: 'Proceed!',
  //                          			parameters: [choice(name: 'Branch', choices: env.Branches, description: 'Choose the branch to build')]
  //               			echo "Branch selected: ${env.Branch}"
		// 			}
		// 		}
		// 	}
		// }
		
// 		stage('Get Version') {
// 			steps {
// 				echo '==> Checking out the source code <=='
// 				checkout([$class: 'GitSCM', branches: [[name: "*/neersin3-CI-1"]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'jenkins-rialto-github', url: 'git@wwwin-github.cisco.com:neersin3/rialto-deploy.git']]])
// 				/*echo '==>Get Version<=='
// 				script {
// 					env.VERSION = readMavenPom().getVersion()
// 					echo "Version is ${env.VERSION}"
// 				}*/	
// 			}
// 		}
		stage('Echo Message'){
			steps{
				sh 'echo "=======>Hello World<========"'
			}
		}
		// stage('Install') {
		// 	steps {
		// 		echo '==>Building Code<=='
		// 		withMaven(globalMavenSettingsConfig: 'c3e4f412-4f7c-4cca-9360-98930b4a3c6a', maven: 'maven_default_3.5.4', options: [ dependenciesFingerprintPublisher(disabled: true),artifactsPublisher(disabled: true), junitPublisher(disabled: true) ]) {
		// 			sh '''
		// 			   cd /opt/ocischemas_src
		// 			   mvn --settings settings.xml clean install -DskipTests=True
		// 			   ls -larth target
		// 			'''
		// 		}
		// 	}
		// }
		// stage('Publish Artifact to rialto-deploy-cdn') {
		// 	steps {
		// 		script {
		// 			echo '==>Transferring OCISchemas artifact to Artifactory<=='
		// 			rialtoArtifactory.put(src: "target/OCISchemas-${env.VERSION}.jar", dest: "artifacts/apps/ocischemas/${env.VERSION}/", flat: true, recursive: false)
		// 			sh """
		// 				curl -u bsft-deployer:AP7tYkXfiN1X4vjRdDoHxfdEpZw9T9sEA6PZi3 -X PUT https://engci-maven-master.cisco.com/artifactory/list/bsft-snapshot/com/broadsoft/rialto/bwclient/OCISchemas/${env.VERSION}/OCISchemas-${env.VERSION}.pom -T /opt/ocischemas_src/pom.xml
		// 				curl -u bsft-deployer:AP7tYkXfiN1X4vjRdDoHxfdEpZw9T9sEA6PZi3 -X PUT https://engci-maven-master.cisco.com/artifactory/list/bsft-snapshot/com/broadsoft/rialto/bwclient/OCISchemas/${env.VERSION}/OCISchemas-${env.VERSION}.jar -T /opt/ocischemas_src/target/OCISchemas-${env.VERSION}.jar
		// 			"""
		// 		}
		// 	}
		// }
		        
	}
	// post {
	// 	always {
	// 		archiveArtifacts allowEmptyArchive: true, artifacts: 'target/*.jar', caseSensitive: false, defaultExcludes: false, fingerprint: true
	// 		cleanWs()
	// 	}
	// }
}
