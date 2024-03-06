/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nt95o0v53idp3k")

  collection.name = "elevators"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nt95o0v53idp3k")

  collection.name = "elevator"

  return dao.saveCollection(collection)
})
