import test from 'node:test';
import assert from 'node:assert/strict';
import { PAGE_SIZE, findProduct, getMeta, queryProducts } from './catalog.js';

const products = [
  { id: '1', name: 'Leche entera', category: 'Lácteos > Leche', format: 'Brick' },
  { id: '2', name: 'Café molido', category: 'Café > Molido', format: 'Paquete' },
  { id: '3', name: 'Leche sin lactosa', category: 'Lácteos > Leche', format: 'Brick' },
];

test('queryProducts filtra por nombre, categoría y formato', () => {
  const result = queryProducts(products, { q: 'LECHE', category: 'Lácteos', format: 'Brick' });

  assert.equal(result.total, 2);
  assert.deepEqual(result.items.map((product) => product.id), ['1', '3']);
});

test('queryProducts limita páginas inválidas y conserva el tamaño de página', () => {
  const result = queryProducts(products, { page: Number.NaN });

  assert.equal(result.page, 1);
  assert.equal(result.pageSize, PAGE_SIZE);
  assert.equal(result.totalPages, 1);
});

test('getMeta entrega valores únicos y ordenados', () => {
  assert.deepEqual(getMeta(products), {
    categories: ['Café', 'Lácteos'],
    formats: ['Brick', 'Paquete'],
  });
});

test('findProduct devuelve null cuando el identificador no existe', () => {
  assert.equal(findProduct(products, 'missing'), null);
});