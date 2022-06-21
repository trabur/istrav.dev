#!/usr/bin/env node
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv)).argv

// workflow
import gulp from 'gulp';
const { series, parallel } = gulp;

// database collection
import loki from 'lokijs'
let db = new loki('istrav');
let collection = db.addCollection('documents', { indices: ['language', 'utterance', 'intent'] });

// perform
import { load, save } from '../lib/database.js'
async function addDocument () {
  let key = `nlp/documents/${argv.container}`
  await load(key, collection)
  let value = {
    language: argv.container,
    utterance: argv.utterance,
    intent: argv.intent
  }
  console.log('inserting: ', value)

  // do not create duplicate records
  if (!collection.findOne(value)) {
    collection.insert(value)
    await save(key, collection)
  } else {
    console.log('No need to insert document because it already exists.')
  }
}

// tasks
export default series(
  addDocument,
)