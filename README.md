# PASO: catálogo de supermercado

Aplicación full stack para explorar 4.032 productos del catálogo de Mercadona. El backend Express carga `data/catalog.csv` en memoria y sirve la interfaz estática junto con una API de búsqueda.

## Requisitos

- Node.js 18 o superior
- npm

## Ejecutar

```bash
cd server
npm install
npm start
```

Abrir `http://localhost:3000`.

## API

- `GET /api/health`: estado del servidor y cantidad de productos cargados.
- `GET /api/products/filters`: categorías y formatos disponibles.
- `GET /api/meta`: alias de compatibilidad para los metadatos.
- `GET /api/products?q=&category=&format=&page=`: búsqueda, filtros y paginación de ocho productos.
- `GET /api/products/:id`: detalle de un producto.

## Pruebas

```bash
cd server
npm test
```

Las pruebas cubren búsqueda combinada, filtros, paginación, metadatos y búsqueda de identificadores inexistentes.

## Estructura

- `data/`: catálogo CSV y documentación de origen.
- `server/`: API Express, carga y consultas del catálogo.
- `mockup/`: interfaz web, estilos y fotografías locales de referencia.

Las imágenes del catálogo se sirven desde las URLs incluidas en el CSV. Las imágenes de `mockup/assets/` corresponden a ejemplos locales de la entrega original.
