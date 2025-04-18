# Install winget packages
Write-Host "Installing software using winget - 1/4" -ForegroundColor yellow

winget install --id=Microsoft.VisualStudioCode -e
winget install --id=Git.Git -e
winget install --id=GitHub.cli -e
winget install --id=curl.curl -e
winget install --id=OpenJS.NodeJS.LTS -e --version=22.13.0

# Refresh Path Env
Write-Host "Refresh Path Env - 2/4" -ForegroundColor yellow

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Install VS Code Extensions
Write-Host "VS Code Extensions - 3/4" -ForegroundColor yellow

code --install-extension angular.ng-template
code --install-extension ms-azuretools.vscode-docker
code --install-extension GitHub.vscode-pull-request-github
code --install-extension 1tontech.angular-material
code --install-extension mdickin.markdown-shortcuts
code --install-extension mhutchie.git-graph 
code --install-extension hbenl.vscode-test-explorer
code --install-extension lucono.karma-test-explorer
code --install-extension xabikos.jasminesnippets
code --install-extension github.copilot
code --install-extension redhat.vscode-yaml
code --install-extension alex-pattison.theme-cobalt3
code --install-extension esbenp.prettier-vscode
code --install-extension humao.rest-client

# Install NVM
Write-Host "Installing Angular CLI & json-server - 4/4" -ForegroundColor yellow

# Install Angular
npm i -g @angular/cli

# Install Json-server
npm install -g json-server@0.17.4

# Finished Msg
Write-Host "Finished Software installation" -ForegroundColor yellow
