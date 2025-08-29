import { useState, useEffect } from 'react'
import { ChevronRight, List } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'

const TableOfContents = ({ sections, activeSection, onSectionSelect, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      {/* Botón flotante para mostrar/ocultar */}
      <Button
        variant="secondary"
        size="sm"
        className={`fixed bottom-6 right-6 z-40 shadow-lg ${className}`}
        onClick={toggleVisibility}
      >
        <List className="h-4 w-4 mr-2" />
        Índice
      </Button>

      {/* Barra de progreso de lectura */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Panel de tabla de contenidos */}
      {isVisible && (
        <div className="fixed inset-0 z-50 bg-black/20" onClick={toggleVisibility}>
          <Card 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Tabla de Contenidos</span>
                <Button variant="ghost" size="sm" onClick={toggleVisibility}>
                  ×
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-96">
                <div className="p-4 space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon
                    const isActive = activeSection === section.id
                    
                    return (
                      <Button
                        key={section.id}
                        variant={isActive ? "secondary" : "ghost"}
                        className="w-full justify-start text-left h-auto p-3"
                        onClick={() => {
                          onSectionSelect(section.id)
                          setIsVisible(false)
                        }}
                      >
                        <div className="flex items-center gap-3 w-full">
                          <Icon className="h-4 w-4 flex-shrink-0" />
                          <span className="flex-1">{section.title}</span>
                          {isActive && <ChevronRight className="h-4 w-4" />}
                        </div>
                      </Button>
                    )
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

export default TableOfContents

