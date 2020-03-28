// then install the npm modules using
     
    npm install

node server.js
To check running port:-
    $ sudo lsof -i -P -n
kill running port:-
    $ fuser -k PORT-NUMBER/tcp


Step 1 — Installing Docker
First, update your existing list of packages:
    $ sudo apt update
Next, install a few prerequisite packages which let apt use packages over HTTPS:
    $ sudo apt install apt-transport-https ca-certificates curl software-properties-common
Then add the GPG key for the official Docker repository to your system:
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
Add the Docker repository to APT sources:
    $ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
Next, update the package database with the Docker packages from the newly added repo:
    $ sudo apt update
Make sure you are about to install from the Docker repo instead of the default Ubuntu repo:
    $ apt-cache policy docker-ce
Finally install docker
    $ sudo apt install docker-ce
Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it’s running:
    $ sudo systemctl status docker



Step 2 — Executing the Docker Command Without Sudo
If you want to avoid typing sudo whenever you run the docker command, add your username to the docker group:
    $ sudo usermod -aG docker ${USER}
If you want to avoid typing sudo whenever you run the docker command, add your username to the docker group:

    $ sudo usermod -aG docker ${USER}
To apply the new group membership, you can log out of the server and back in, or you can type the following:

    $ su - ${USER}
You will be prompted to enter your user’s password to continue. Afterwards, you can confirm that your user is now added to the docker group by typing:

    $ id -nG


>>>>To install docker compose for the steps
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose

OR
 
$ apt-get install docker-compose


>>>>to check the versions of the docker and docker-compose
    $ docker --version
    $ docker-compose --version


>>>>first start the docker service by using command
    $ service docker start


docker build -t <imagename:version> .
    example :-  docker build -t testing_pwa_node:latest


    // 9005 port is given since the docker file contains 9005 port
    docker run -it -d -p <outside-port-of-your-choice>:9005 <imagename:version>

    example: - docker run -it -d -p 5000:9005 testing_pwa_node:latest



