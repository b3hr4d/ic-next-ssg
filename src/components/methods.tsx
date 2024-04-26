import { useMethodNames } from "@ic-reactor/react"
interface MethodsProps {}

const Methods: React.FC<MethodsProps> = ({}) => {
  const methods = useMethodNames()

  return methods.map((method) => {
    return (
      <div className="border p-4" key={method}>
        {method}
      </div>
    )
  })
}

export default Methods
