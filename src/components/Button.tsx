export const Button = (props: React.PropsWithChildren) => {
    return (
        <button className="relative py-2 px-3 rounded-lg text-sm font-medium bg-gradient-to-b from-[#190d2e] to-[#4a208a] to-transparent text-white">
            <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to bottom, black, transparent)]"></div>
                <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to bottom, black, transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,225,.7)_inset] rounded-lg"></div>
            </div>
            <span>{props.children}</span>
        </button>
    )
}