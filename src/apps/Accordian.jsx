import { useState } from "react"

const sections = [
  { id: 1, title: "Section 1", content: "Content 1" },
  { id: 2, title: "Section 2", content: "Content 2" },
  { id: 3, title: "Section 3", content: "Content 3" }
]

const Accordian = () => {
    const [open, setOpen] = useState(0);

  return (
    <div>
        {sections.map(slide => (
            <div key={slide.id}
            className="w-100 bg-black border-b text-center overflow-hidden">

                <div className="py-6"
                onClick={() => setOpen(prev => prev === slide.id ? 0 : slide.id)}>
                    {slide.title}
                </div>

                <div className={`bg-gray-900 transition-all duration-300 ${open === slide.id ? 'h-15' : 'h-0'}`}>
                    {slide.content}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Accordian