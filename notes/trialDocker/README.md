# TRIAL DOCKER

## Step

1. Clone this repository and make sure your local has already installed docker and docker-compose.
> Check with `docker --version` and `docker-compose --version`

2. Run this command `docker-compose up --build` or `docker-compose up --build -d` if you want to running in background

3. Test server with hit `localhost:3003` in your browser

4. If you want to test your database, open your DB GUI and create a new connecion
  ```
  HOST = localhost
  PORT = 3308   // depend on port mysql in docker-compose 
  Database Name = db_skilvul_ecommerce
  User = root
  Password = 123456
  ```

5. If your db still empty, open your container for be-example, run this command in that's container CLI
  ```
    sequelize-cli db:migrate
    sequelize-cli db:seed:all
  ```