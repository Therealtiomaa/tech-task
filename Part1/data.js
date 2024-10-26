class Data {
    constructor(database) {
        console.log("Connecting to database");
    }

    beginTran() {
        console.log("Beginning a transaction");
    }

    commit() {
        console.log("Committing transaction");
    }

    rollback() {
        console.log("Rolling back transaction");
    }

    insert(table, object) {
        console.log(`Inserting ${object.getName()} into table ${table}`);
    }
}