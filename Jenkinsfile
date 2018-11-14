node {
    stage 'Clone sources'
        git url: 'https://github.com/v3rtumnus/flat-finder-frontend.git'

    stage 'Create production build'
        sh 'npm run build'

    stage 'Deploy service'
        sh 'rm -r /var/www/html/flat-finder'
        sh 'cp -r build/* /var/www/html/flat-finder'
}