1. Install postgres, with pgadmin locally
2. Install globally typeorm cli `npm i -g typeorm`
3. Setup typeorm project
    * a) Initialize empty project with `typeorm init --database postgres`
    * b) Setup manually
        * `npm init`
        * `tsc --init`
            * `"experimentalDecorators": true,`
            * `"emitDecoratorMetadata": true,`
        * `.gitignore` node_modules
        * `npm i pg typeorm reflect-metadata`
        * `npm i @types/node ts-node -D`
        * Create following directory structure

                ├── package-lock.json
                ├── package.json
                ├── src
                │   ├── entities
                │   ├── index.ts
                │   └── migrations
                └── tsconfig.json

        * Create `ormconfig.json` with following contents

                {
                  "type": "postgres",
                  "host": "localhost",
                  "port": 5432,
                  "username": "test",
                  "password": "test",
                  "database": "test",
                  "synchronize": true,
                  "logging": false,
                  "entities": [
                      "src/entities/**/*.ts"
                  ],
                  "migrations": [
                      "src/migrations/**/*.ts"
                  ],
                  "subscribers": [
                      "src/subscribers/**/*.ts"
                  ],
                  "cli": {
                      "entitiesDir": "src/entities",
                      "migrationsDir": "src/migrations",
                      "subscribersDir": "src/subscribers"
                  }
                }

        * create an example entity
                import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
                
                @Entity()
                export class User {
                
                  @PrimaryGeneratedColumn()
                  id!: number;
                
                  @Column()
                  firstName!: string;
                
                  @Column()
                  lastName!: string;
                
                  @Column()
                  age!: number;
                
                }
4. add following command to `package.json`
    * `"orm": "node --require ts-node/register ./node_modules/typeorm/cli.js"`
5. run `npm run orm -- migration:generate -n MyFirstMigration
