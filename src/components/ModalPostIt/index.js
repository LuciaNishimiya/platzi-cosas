
function ModalPostIt({ children }) {
    return (<div id="post-it" className="post-it">
        {children}
    </div>,
        document.getElementById('post-it')
    )
}

export { ModalPostIt }