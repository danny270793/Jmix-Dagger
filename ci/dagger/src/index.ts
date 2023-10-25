import { connect, Client, Directory } from '@dagger.io/dagger'
import ChildProcess from 'node:child_process'
import Path from 'node:path'
import Fs from 'node:fs'

function bash(command: string): string {
  const buffer: Buffer = ChildProcess.execSync(command)
  return buffer.toString()
}

const dockerName: string = `jmixdagger`
const version: string = '1.0.0'

connect(async (client: Client) => {
  const jmixPath: string = Path.join(process.cwd(), '..', '..', 'code', 'jmix')
  const jmixContextDir: Directory = client.host().directory(jmixPath)
  const path: string = `${dockerName}:${version}.tar`
  await jmixContextDir.dockerBuild().export(path)
  bash(`docker load < ${path}`)
  Fs.unlinkSync(path)
}, { LogOutput: process.stderr })
