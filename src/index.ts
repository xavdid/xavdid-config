import { readFileSync } from 'fs'
import { join } from 'path'

const FILEPATH = join(process.env.DROPBOX!, 'Apps', 'config.json')

export type zaps = 'movie' | 'tv' | 'book' | 'status' | 'game'
export type apps = 'airtable' | 'tmdb' | 'igdb'

interface ConfigFile {
  zap_urls: { [x in zaps]: string }
  creds: { [x in apps]: string }
}

const loadConfig = () => {
  if (!process.env.DROPBOX) {
    throw new Error('DROPBOX env var not defined, unable to find config file')
  }
  const rawConf = readFileSync(FILEPATH, 'utf-8')
  const conf = JSON.parse(rawConf) as ConfigFile
  return conf
}

export const readToken = (app: apps) => {
  const conf = loadConfig()
  return conf.creds[app]
}

export const readZapUrl = (zap: zaps) => {
  const conf = loadConfig()
  return conf.zap_urls[zap]
}
