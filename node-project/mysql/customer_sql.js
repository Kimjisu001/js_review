const sql = {
    customerInsert : `insert into customer set ?`,
    customerUpdate : `update customer set ? where ?`,
    customerDelete : `delete from customer where ?`,
    customerList : `select * from customer`,
    customerGet : `select * from customer where ?`,
};

module.exports = sql;