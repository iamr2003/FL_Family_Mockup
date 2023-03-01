
export interface BusInfo{
    studentName:string,
    x:number,
    y:number
}

function BusIcon(props:BusInfo){
    // origin is corner, have to reach beyond tailwind for this
    return (
        <div className='w-14 items-center relative z-10' style={{top:props.y+"rem",left:props.x+"rem"}}>
            <img className="object-fill " src='/bus_icon.png'/>
            <p className="font-bold text-neutral-900">{props.studentName}</p>
        </div>
    )
}

export function VehicleMap(props:{buses:Array<BusInfo>}){
    let busComponents = props.buses.map(BusIcon)
    return (
        <div>
            {busComponents}
        </div>
    )
}

