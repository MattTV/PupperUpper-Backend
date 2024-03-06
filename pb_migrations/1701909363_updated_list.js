/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nt95o0v53idp3k")

  collection.name = "elevator"

  // remove
  collection.schema.removeField("wwddo8sk")

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fvfgizbn",
    "name": "baseline",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nt95o0v53idp3k")

  collection.name = "list"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwddo8sk",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("ildmdvwk")

  // remove
  collection.schema.removeField("fvfgizbn")

  return dao.saveCollection(collection)
})
