/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1zgoffguq18iqle")

  collection.name = "weightrecord"

  // remove
  collection.schema.removeField("6khrtxkd")

  // remove
  collection.schema.removeField("jimgpvks")

  // remove
  collection.schema.removeField("nmqstewr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d7x0w1gx",
    "name": "weight",
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
    "id": "wjckki8a",
    "name": "when",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1zgoffguq18iqle")

  collection.name = "weight"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6khrtxkd",
    "name": "text",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jimgpvks",
    "name": "list",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7nt95o0v53idp3k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmqstewr",
    "name": "done",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("d7x0w1gx")

  // remove
  collection.schema.removeField("wjckki8a")

  return dao.saveCollection(collection)
})
