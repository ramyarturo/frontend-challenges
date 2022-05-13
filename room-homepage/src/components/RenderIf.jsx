

export default function RenderIf({ children, render = true }) {
    return render ? children : null
}