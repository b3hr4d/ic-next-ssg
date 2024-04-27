import { ActorProvider } from "@ic-reactor/react"
import Methods from "@src/components/methods"
import PageHeader from "@src/components/page-header"

export default function Canister({
  candid,
  canisterId,
}: {
  candid: string
  canisterId: string
}) {
  return (
    <div className="container relative p-2">
      <PageHeader title={canisterId} />
      <ActorProvider
        withDevtools
        loadingComponent={
          <div className="absolute inset-0 flex items-center justify-center">
            Loading...
          </div>
        }
        canisterId={canisterId}
        candidString={candid}
      >
        <div className="border p-4">
          <h2>Methods</h2>
          <div className="flex flex-col space-y-2 p-4">
            <Methods />
          </div>
        </div>
      </ActorProvider>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: "ss2fx-dyaaa-aaaar-qacoq-cai" } },
    { params: { id: "s3zol-vqaaa-aaaar-qacpa-cai" } },
    { params: { id: "xeka7-ryaaa-aaaal-qb57a-cai" } },
    { params: { id: "xob7s-iqaaa-aaaar-qacra-cai" } },
  ]
  return {
    paths,
    fallback: false,
  }
}

import { fetchCandidDefinition } from "@src/service/adapter"

export async function getStaticProps({ params }: { params: { id: string } }) {
  const candid = await fetchCandidDefinition(params.id)

  return {
    props: {
      candid,
      canisterId: params.id,
    },
  }
}
