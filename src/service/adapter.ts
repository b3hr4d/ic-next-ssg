import { createCandidAdapter } from "@ic-reactor/core"
import { agentManager } from "./agent"

export const adapter = createCandidAdapter({
  agentManager,
})

export async function fetchCandidDefinition(canisterId: string) {
  return adapter.fetchCandidDefinition(canisterId)
}
