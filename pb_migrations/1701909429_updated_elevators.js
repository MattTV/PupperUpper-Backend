/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nt95o0v53idp3k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o6tix115",
    "name": "weights",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1zgoffguq18iqle",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nt95o0v53idp3k")

  // remove
  collection.schema.removeField("o6tix115")

  return dao.saveCollection(collection)
})
