import { useRouter } from "next/router"

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { back } = useRouter()

  return (
    <div className="flex items-center justify-between border-b p-4">
      <button onClick={() => back()} className="text-blue-500 p-2">
        Back
      </button>
      <h1>{title}</h1>
    </div>
  )
}

export default PageHeader
