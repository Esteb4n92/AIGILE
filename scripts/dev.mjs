/**
 * Starts a single Next.js dev server.
 * Kills stale processes on 3000/3001 and removes .next/dev/lock on Windows/macOS/Linux.
 */
import { execSync, spawn } from "child_process";
import { existsSync, unlinkSync } from "fs";
import { join } from "path";

const PORTS = [3000, 3001];
const LOCK_FILE = join(".next", "dev", "lock");

function killPortWindows(port) {
  try {
    const output = execSync(`netstat -ano | findstr :${port}`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });
    const pids = new Set();
    for (const line of output.split("\n")) {
      if (!line.includes("LISTENING")) continue;
      const pid = line.trim().split(/\s+/).pop();
      if (pid && /^\d+$/.test(pid) && pid !== "0") pids.add(pid);
    }
    for (const pid of pids) {
      try {
        execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
        console.log(`Stopped process ${pid} (port ${port})`);
      } catch {
        /* already gone */
      }
    }
  } catch {
    /* port free */
  }
}

function killPortUnix(port) {
  try {
    const pid = execSync(`lsof -ti :${port}`, { encoding: "utf8" }).trim();
    if (pid) {
      execSync(`kill -9 ${pid}`, { stdio: "ignore" });
      console.log(`Stopped process ${pid} (port ${port})`);
    }
  } catch {
    /* port free */
  }
}

function killPorts() {
  for (const port of PORTS) {
    if (process.platform === "win32") killPortWindows(port);
    else killPortUnix(port);
  }
}

function removeLock() {
  if (existsSync(LOCK_FILE)) {
    unlinkSync(LOCK_FILE);
    console.log("Removed stale .next/dev/lock");
  }
}

const stopOnly = process.argv.includes("--stop-only");

killPorts();
removeLock();

if (stopOnly) {
  console.log("Dev servers stopped. Run pnpm dev to start fresh.");
  process.exit(0);
}

const child = spawn("npx", ["next", "dev", "--webpack"], {
  stdio: "inherit",
  shell: true,
  env: process.env,
});

child.on("exit", (code) => process.exit(code ?? 0));
