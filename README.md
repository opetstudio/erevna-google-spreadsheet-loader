Erevna Dictionary Location Data Loader

Nodejs application for loading data from gdoc to json file


####Docker run

  docker build -t  opetstudio/erevna_dictionary_locationdata_loader:version1.0.0 .

####Docker pull command

  docker pull opetstudio/erevna_dictionary_locationdata_loader

####Docker start/stop

  docker run -d -p 4000:8080 opetstudio/erevna_dictionary_locationdata_loader:version1.0.0

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
