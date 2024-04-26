import { AppView } from "@src/service/b3forge/b3forge.did"
import { GetStaticProps } from "next"
import Link from "next/link"

export default function Apps({ apps }: { apps: AppView[] }) {
  console.log("🚀 ~ Apps :", apps)
  return (
    <div className="container">
      <div className="flex mt-4 flex-wrap gap-2">
        {apps.map((app, index) => (
          <div key={index} className="border mx-auto p-4 w-96">
            <h2>{app.name}</h2>
            <p>{app.description}</p>
            <Link
              href={`/apps/${app.app_id}`}
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

import { queryCall } from "@src/service/forge"

export const getStaticProps: GetStaticProps = async () => {
  const { dataPromise } = queryCall({
    functionName: "get_apps",
  })

  const apps = await dataPromise.then((data) =>
    data.map(({ app_id, name, description }) => ({
      app_id,
      name,
      description,
    }))
  )

  return {
    props: { apps },
  }
}
