import { GetStaticProps } from "next"
import Link from "next/link"

export default function Canisters({ canisterIds }: { canisterIds: string[] }) {
  return (
    <div className="container">
      <div className="flex mt-4 flex-wrap gap-2">
        {canisterIds.map((canisterId, index) => (
          <div key={index} className="border mx-auto p-4 w-96">
            <h2>{canisterId}</h2>
            <Link
              href={`/canisters/${canisterId}`}
              shallow
              className="text-blue-500"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const canisterIds = [
    "ss2fx-dyaaa-aaaar-qacoq-cai",
    "s3zol-vqaaa-aaaar-qacpa-cai",
    "xeka7-ryaaa-aaaal-qb57a-cai",
    "xob7s-iqaaa-aaaar-qacra-cai",
  ]

  return {
    props: { canisterIds },
  }
}
