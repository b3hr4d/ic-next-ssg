import { createCandidAdapter } from "@ic-reactor/core"
import { agentManager } from "./agent"

export const adapter = createCandidAdapter({
  agentManager,
})
