# Pool DB With Sequelize

## Step

1. npm init / npm init -y
2. npm install --save mysql2
3. npm install --save sequelize
4. npm install --save-dev sequelize-cli
5. npx sequelize-cli init
6. ubah value pada config/config.json pada bagian development, sesuaikan dengan configuration MySQL pada lokal kalian 
7. npx sequelize-cli db:create
8. npx sequelize-cli model:generate --name User --attributes name:string,password:string,email:string
9. npx sequelize-cli model:generate --name Singer --attributes name:string
10. npx sequelize-cli model:generate --name Album --attributes name:string,singerId:integer
11. npx sequelize-cli db:migrate
12. npx sequelize-cli migration:generate --name add_fk_singerId_in_album
13. ubah isi file `<timestamp>-add_fk_singerId_in_album.js` yang ada di migrations dengan mengacu pada [dokumentasi berikut](https://sequelize.org/master/class/lib/dialects/abstract/query-interface.js~QueryInterface.html#instance-method-addConstraint) 
14. npx sequelize-cli db:migrate

## Default
- nama model berupa `singular` dan nama table berupa `plural`
- setiap model akan berasumsi bahwa setiap table yang merepresentasikannya mempunyai:
    1. 'id' sebagai primary key
    2. 'createdAt' dan 'updatedAt'


## Aturan
- Ketika membuat sebuah model menggunakan CLI, pada bagian `--attributes` :
    - value pertama merepresentasikan column 
    - value kedua merepresentasikan type data yang bisa dilihat di [link ini](https://sequelize.org/master/manual/model-basics.html#data-types)
    - setiap column / attribute yang ingin diassign dipisahkan dengan comma (,)
    - setiap value / column / attribute tidak boleh ada space / spasi
    ```
    (benar) npx sequelize-cli model:generate --name Album --attributes name:string,singerId:integer

    (salah) npx sequelize-cli model:generate --name Album --attributes name: string,singerId:integer
    (salah) npx sequelize-cli model:generate --name Album --attributes name:string, singerId:integer
    ```


## Notes
- Dokumentasi [Sequelize](https://sequelize.org/master/manual/getting-started.html)
- Dokumentasi [Migrations with Sequelize CLI](https://sequelize.org/master/manual/migrations.html)
- jika ingin tahu command apa aja yang ada di sequelize-cli, maka bisa lakukan
```
  npx sequelize-cli --help
```