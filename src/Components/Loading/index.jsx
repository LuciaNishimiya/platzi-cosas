function LoadingSkeleton() {
    return (
        <div role="status" className="grid w-56 h-60 animate-pulse grid-rows-[85%,15%] p-3">
            <div className="mb-2 flex h-42 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-300"></div>
            <div className="mt-2 flex h-5">
                <div className="mr-2 h-full w-2/3 rounded-xl bg-gray-300"></div>
                <div className="h-full w-1/3 rounded-xl bg-gray-300"></div>
            </div>
        </div>
    )
}
function Loading({ loading }) {
    if (loading) return (
        <>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />

        </>)


}


export default Loading