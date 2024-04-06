import { query } from '../database/connection.js';

class SelectionRepository {
    // CRUD
    create(selection) {
        const sql = `INSERT INTO selections SET ?`;
        return query(sql, selection, "Unable to create");
    }

    findAll() {
        const sql = `SELECT * FROM selections;`
        return query(sql, "Not located");
    }

    findById(id) {
        const sql = `SELECT * FROM selections WHERE id = ?;`
        return query(sql, id, "Not located");
    }

    update(selection, id) {
        const sql = `UPDATE selections SET ? WHERE id = ?`;
        return query(sql, [selection, id], "Unable to modify");
    }

    delete(id) {
        const sql = `DELETE FROM selections WHERE id = ?`;
        return query(sql, id, "Unable to delete");
    }

}

export default new SelectionRepository;