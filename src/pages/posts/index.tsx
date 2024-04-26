"use client"
import { AppView } from "@src/service/b3forge/b3forge.did"
import { queryCall } from "@src/service/forge"
import { GetStaticProps } from "next"
import Link from "next/link"

export default function Posts({ apps }: { apps: AppView[] }) {
  console.log("🚀 ~ Posts ~ apps:", apps)
  return (
    <div className="container">
      <div className="flex mt-4">
        {apps.map((app, index) => (
          <div key={index} className="col-md-4 border p-4">
            <h2>{app.name}</h2>
            <p>{app.description}</p>
            <Link href={`/posts/${app.app_id}`} shallow>
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

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
