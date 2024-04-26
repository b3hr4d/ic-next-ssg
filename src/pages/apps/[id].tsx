"use client"
import { AppView } from "@src/service/b3forge/b3forge.did"
import { queryCall } from "@src/service/forge"

export default function Post(app: AppView) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>{app.name}</h1>
          <p>{app.description}</p>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const { dataPromise } = queryCall({
    functionName: "get_apps",
  })

  const paths = await dataPromise.then((data) =>
    data.map(({ app_id, name, description }) => ({
      params: { id: app_id, name, description },
    }))
  )
  console.log("🚀 ~ getStaticPaths ~ paths:", paths)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { dataPromise } = queryCall({
    functionName: "get_app",
    args: [params.id],
  })

  const props = await dataPromise

  if ("Ok" in props) {
    return {
      props: {
        name: props.Ok.name,
        description: props.Ok.description,
      },
    }
  } else {
    return {
      notFound: true,
    }
  }
}
