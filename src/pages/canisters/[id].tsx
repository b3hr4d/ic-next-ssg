import { ActorProvider } from "@ic-reactor/react"
import Methods from "@src/components/methods"
import PageHeader from "@src/components/page-header"
import { adapter } from "@src/service/adapter"

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
    { id: "ss2fx-dyaaa-aaaar-qacoq-cai" },
    { id: "s3zol-vqaaa-aaaar-qacpa-cai" },
    { id: "xeka7-ryaaa-aaaal-qb57a-cai" },
    { id: "xob7s-iqaaa-aaaar-qacra-cai" },
  ].map(({ id }) => ({ params: { id } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const candid = await adapter.getFromMetadata(params.id)

  return {
    props: {
      candid,
      canisterId: params.id,
    },
  }
}
