/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nt95o0v53idp3k")

  // remove
  collection.schema.removeField("ildmdvwk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nt95o0v53idp3k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ildmdvwk",
    "name": "serial",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
