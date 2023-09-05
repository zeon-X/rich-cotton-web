import pool from "./poolConnection";

export const postProduct = async (data) => {
  const {
    id,
    title,
    parentCategory,
    productCode,
    category,
    product,
    img,
    fabric,
    wash,
    price,
    deliveryTime,
    slug,
  } = data;

  const sql = `INSERT INTO products (id, title, parentCategory, productCode, category, product, img, fabric, wash, price, deliveryTime, slug) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [result] = await connection.query(sql, [
      id,
      title,
      parentCategory,
      productCode,
      category,
      product,
      img,
      fabric,
      wash,
      price,
      deliveryTime,
      slug,
    ]);

    await connection.commit();

    return result.insertId;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

export const getProduct = async () => {
  const sql = "SELECT * FROM `products`";
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

export async function deleteProduct(productId) {
  const sql = "DELETE FROM products WHERE id = ?";

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [productId]);
    await connection.commit();
    return result.affectedRows > 0; // Return true if a row was deleted
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}
