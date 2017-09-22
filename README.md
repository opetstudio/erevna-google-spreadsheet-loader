Erevna Dictionary Location Data Loader

Nodejs application for loading data from gdoc to json file


####Docker run

  docker build -t  opetstudio/erevna-google-spreadsheet-loader:version1.0.0 .

####Docker pull command

  docker pull opetstudio/erevna-google-spreadsheet-loader

####Docker compose build and run
  docker-compose up --build

####Docker compose build

  docker-compose build

####Docker compose run/stop

  docker-compose up

  docker-compose stop

####Docker start/stop

  docker run -d -p 4000:8080 opetstudio/erevna-google-spreadsheet-loader:version1.0.0

  docker container stop <hash>           # Gracefully stop the specified container

  docker container kill <hash>         # Force shutdown of the specified container

####Get container ID

  $ docker ps

####Print app output

  $ docker logs <container id>

####Example

  Running on http://localhost:4000

####Enter the container

  $ docker exec -it <container id> /bin/bash

#### join swarm testbed

  docker swarm join --token SWMTKN-1-4dyah0opw3pes2sti57vew6o5xoca6l7zb94fyjpchbsrxb517-b3ahpcq8w9x678dr9son3sbtq 45.76.187.22:2377
