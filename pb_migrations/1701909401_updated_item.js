/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1zgoffguq18iqle")

  collection.name = "weight"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1zgoffguq18iqle")

  collection.name = "item"

  return dao.saveCollection(collection)
})
