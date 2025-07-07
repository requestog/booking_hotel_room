import express from 'express'
import chalk from 'chalk'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

async function start() {
  try {
    await app.listen(PORT, () =>
      console.log(chalk.green(`[app] Server is running on port ${PORT}`))
    )
  } catch (error) {
    console.log(chalk.red(`[app] error: ${error.message}`))
  }
}

start()
