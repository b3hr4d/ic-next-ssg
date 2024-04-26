import { createReactorCore } from "@ic-reactor/core"
import { b3forge, idlFactory } from "./b3forge"

export const { queryCall, agentManager } = createReactorCore<typeof b3forge>({
  canisterId: "o4znw-vqaaa-aaaap-aha6q-cai",
  idlFactory,
})
