import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'

const SearchBar = ({ sections, onSectionSelect, className = "" }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    
    // Simular búsqueda con delay
    const searchTimeout = setTimeout(() => {
      const results = sections.filter(section =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.content?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSearchResults(results)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(searchTimeout)
  }, [searchTerm, sections])

  const handleSelectResult = (section) => {
    onSectionSelect(section.id)
    setSearchTerm('')
    setSearchResults([])
  }

  const clearSearch = () => {
    setSearchTerm('')
    setSearchResults([])
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar en el manual..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            onClick={clearSearch}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Resultados de búsqueda */}
      {searchResults.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-80 overflow-y-auto">
          <CardContent className="p-2">
            <div className="space-y-1">
              {searchResults.map((result) => (
                <Button
                  key={result.id}
                  variant="ghost"
                  className="w-full justify-start text-left h-auto p-3"
                  onClick={() => handleSelectResult(result)}
                >
                  <div>
                    <div className="font-medium">{result.title}</div>
                    {result.description && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {result.description}
                      </div>
                    )}
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Estado de búsqueda */}
      {isSearching && searchTerm && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50">
          <CardContent className="p-4 text-center">
            <div className="text-sm text-muted-foreground">Buscando...</div>
          </CardContent>
        </Card>
      )}

      {/* Sin resultados */}
      {!isSearching && searchTerm && searchResults.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50">
          <CardContent className="p-4 text-center">
            <div className="text-sm text-muted-foreground">
              No se encontraron resultados para "{searchTerm}"
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default SearchBar

