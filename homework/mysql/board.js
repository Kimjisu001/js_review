/**
 * SQL문(board)
 */

const sql = {
    boardList : `select * from board`,
    boardGet : `select * from board where ?`,
    boardInsert : `insert into board set ?`,
    boardUpdate : `update board set ? where ?`,
    boardDelete : `delete from board where ?`
};

module.exports = sql;