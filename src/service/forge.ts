import { createReactorCore } from "@ic-reactor/core"
import { b3forge, idlFactory } from "./b3forge"
import { agentManager } from "./agent"

export const { queryCall } = createReactorCore<typeof b3forge>({
  canisterId: "o4znw-vqaaa-aaaap-aha6q-cai",
  agentManager,
  idlFactory,
})
