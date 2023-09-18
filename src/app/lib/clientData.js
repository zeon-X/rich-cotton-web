import pool from "./poolConnection";

export const postClient = async (data) => {
  const { title, img, id } = data;

  const sql = `INSERT INTO clients (id, title, img) VALUES (?, ?, ?)`;
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [result] = await connection.query(sql, [id, title, img]);

    await connection.commit();

    return result.insertId;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

export const updateClient = async (data) => {
  const { id, title, img } = data;

  const sql = `
    UPDATE clients
    SET 
      title = ?,
      img = ?
    WHERE id = ?
  `;

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // Perform the update
    await connection.query(sql, [title, img, id]);

    // Fetch the updated row
    const [updatedRow] = await connection.query(
      "SELECT * FROM clients WHERE id = ?",
      [id]
    );

    await connection.commit();

    return updatedRow[0]; // Return the updated row
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

export const getClient = async () => {
  const sql = "SELECT * FROM `clients`";
  const connection = await pool.getConnection();

  try {
    const [rows] = await connection.query(sql);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release(); // Release the connection back to the pool
  }
};

export async function deleteClient(clientId) {
  const sql = "DELETE FROM clients WHERE id = ?";

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [clientId]);
    await connection.commit();
    return result.affectedRows > 0; // Return true if a row was deleted
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}
