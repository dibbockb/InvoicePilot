import { Spinner } from '../spinner'

const Loading = () => {
    return (
        <div className="flex items-center gap-6">
            <Spinner className="size-6" />
        </div>
    )
}

export default Loading