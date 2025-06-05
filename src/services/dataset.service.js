import { pool } from '../db.js';

export const DatasetsService = {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM `Datasets` ORDER BY id');
    return rows;
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM `Datasets` WHERE id = ?', [id]);
    return rows[0] ?? null;
  },

  async create(data) {
    const { title, description, rating, datafile_id, category_id } = data;
    const [result] = await pool.query(
      `INSERT INTO \`Datasets\`
           (title, description, rating, datafile_id, category_id)
       VALUES (?, ?, ?, ?, ?)`,
      [title, description, rating, datafile_id, category_id],
    );
    return { id: result.insertId, ...data };
  },

  async update(id, data) {
    const { title, description, rating, datafile_id, category_id } = data;
    const [result] = await pool.query(
      `UPDATE \`Datasets\`
       SET title = ?, description = ?, rating = ?,
           datafile_id = ?, category_id = ?
       WHERE id = ?`,
      [title, description, rating, datafile_id, category_id, id],
    );
    return result.affectedRows ? { id: Number(id), ...data } : null;
  },

  async remove(id) {
    const [result] = await pool.query('DELETE FROM `Datasets` WHERE id = ?', [id]);
    return Boolean(result.affectedRows);
  },
};
