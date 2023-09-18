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

export const updateProduct = async (data) => {
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

  const sql = `
    UPDATE products
    SET 
      title = ?,
      parentCategory = ?,
      productCode = ?,
      category = ?,
      product = ?,
      img = ?,
      fabric = ?,
      wash = ?,
      price = ?,
      deliveryTime = ?,
      slug = ?
    WHERE id = ?
  `;

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // Perform the update
    await connection.query(sql, [
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
      id, // Place the id at the end for the WHERE clause
    ]);

    // Fetch the updated row
    const [updatedRow] = await connection.query(
      "SELECT * FROM products WHERE id = ?",
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

// Function to get a product by its ID
export const getProductById = async (productId) => {
  const sql = "SELECT * FROM `products` WHERE id = ?";
  const connection = await pool.getConnection();

  try {
    const [rows] = await connection.query(sql, [productId]);
    if (rows.length === 0) {
      return null; // Return null if no product with the given ID is found
    }
    return rows[0]; // Return the first (and only) row with the matching ID
  } catch (error) {
    throw error;
  } finally {
    connection.release(); // Release the connection back to the pool
  }
};
