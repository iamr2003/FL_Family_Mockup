import { useState,Fragment } from 'react'
import { Menu,Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export interface StudentData{
    destination: string,
    arrival:string,
    driver:string,
    plate:string
}

export interface Info{
    students:Array<string>,
    lookup:Map<string,StudentData>
}

export function Infobar(props:Info){
    const [student,setStudent] = useState(props.students[0])
    
    function studentMenuItem(student:string){
        return (
        <Menu.Item>
            {({ active }) => (
                <div className='p-3 bg-neutral-50 hover:bg-neutral-200 rounded-sm'>
                    <p className='text-lg text-neutral-900' onClick={()=>setStudent(student)}>{student}</p>
                </div>
              )}
        </Menu.Item>
        )
    }
    // fun ts issues
    let data:StudentData = props.lookup.get(student);
    const dropdownList = props.students.map(studentMenuItem)
    // {
    //     destination:"School",
    //     arrival:"8:30 AM",
    //     driver:"Tim Stewart",
    //     plate:"YXF6S2"
    // }
    
    let loc = data.destination //transition to enum later
    let locData = loc == "School" ? <span className='text-green-600'>School</span>: <span className='text-blue-600'>Home</span>;
    return (
        <div className="m-6 p-4 rounded-xl bg-neutral-50 items-center drop-shadow">
            <div className='columns-2 text-left'>
                <div>
                    <div className='items-start'>
                        <p className='text-sm text-neutral-800'>Est. Arrival at {locData} </p>
                        <p className='text-lg text-neutral-900'>{data.arrival}</p>
                    </div>
                    <div className='items-start'>
                        <p className='text-sm text-neutral-800'>Student</p>
                        <p className='text-lg text-neutral-900 '>
                        <Menu>
                            <Menu.Button>
                               <div className='inline-flex'>
                                {student} <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" color="grey"/>
                               </div>
                            </Menu.Button>
                            <Menu.Items className="absolute">
                            {dropdownList}
                            </Menu.Items>
                        </Menu>
                        
                        </p>
                    </div>
                </div>
                <div>
                    <div className='items-start'>
                        <p className='text-sm text-neutral-800'>Driver </p>
                        <p className='text-xl text-neutral-900'>{data.driver}</p>
                    </div>
                    <div className='items-start'>
                        <p className='text-sm text-neutral-800'>Plate</p>
                        <p className='text-xl text-neutral-900'>{data.plate}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}