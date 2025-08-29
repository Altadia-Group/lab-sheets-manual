import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { 
  Menu, 
  X, 
  Home, 
  LogIn, 
  Settings, 
  Info, 
  FileText, 
  TestTube, 
  CheckCircle, 
  BarChart3,
  Search,
  Moon,
  Sun,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react'
import './App.css'

// Importar componentes personalizados
import ImageGallery from './components/ImageGallery.jsx'
import TableOfContents from './components/TableOfContents.jsx'

// Importar algunas imágenes clave
import loginImage from '/src/assets/pasted_file_3w0wHQ_image.png'
import dashboardImage from '/src/assets/pasted_file_6DOEvc_image.png'
import formulationImage from '/src/assets/pasted_file_XhP7C6_image.png'
import gestorImage from '/src/assets/pasted_file_W8omNS_image.png'
import menuImage from '/src/assets/pasted_file_ZGmTRt_image.png'
import addComponentImage from '/src/assets/pasted_file_ZIYZvf_image.png'
import newGestorImage from '/src/assets/pasted_file_gosm79_image.png'
import iconoLogOut from '/src/assets/iconoLogOut.png'
import iconoExtenso from '/src/assets/iconoExtenso.png'
import gestorExtendidoImage from '/src/assets/pasted_file_e23re0_image.png'
import filtrosImage from '/src/assets/FILTROS.png'
import funcionalidadesImage from '/src/assets/pasted_file_lGc70Q_image.png'
import menuContraidoImage from '/src/assets/pasted_file_tS9HRB_image.png'
import gestorEstudiosImage from '/src/assets/gestorEstudios.png'
import feedbackImage from '/src/assets/feedback.png'
import logOutImage from '/src/assets/logOut.png'
import informacionImage from '/src/assets/pasted_file_Ls7UMO_image.png'
import logoImage from '/src/assets/logo.png'
import gestorButtonsImage from '/src/assets/pasted_file_Gqij4B_image.png'
import botonesFormulaGridImage from '/src/assets/botonesFormulaGrid.png'
import addMaterialButtonImage from '/src/assets/pasted_file_knEV0v_image.png'
import materialTypeImage from '/src/assets/pasted_file_mpiXZ8_image.png'
import materialCreatedImage from '/src/assets/pasted_file_pNXedx_image.png'
import addMaterialSapImage from '/src/assets/pasted_file_JNtLwB_image.png'
import sapSearchImage from '/src/assets/pasted_file_VPxjZb_image.png'
import searchMaterialImage from '/src/assets/pasted_file_X6mKPB_image.png'
import materialFoundImage from '/src/assets/pasted_file_Ghaysw_image.png'
import observacionesButtonImage from '/src/assets/pasted_file_VXdSrV_image.png'
import observacionesModalImage from '/src/assets/pasted_file_iXnX8t_image.png'
import boton3puntosImage from '/src/assets/boton3puntos.png'
import guardarBotonImage from '/src/assets/guardarBoton.png'
import exportarBotonImage from '/src/assets/exportarBoton.png'
import exportPdfModalImage from '/src/assets/pasted_file_330NN6_image.png'
import funcionalidadesMenuImage from '/src/assets/pasted_file_gcDpto_image.png'
import feedbackButtonImage from '/src/assets/pasted_file_xZtP92_image.png'
import logoutButtonImage from '/src/assets/pasted_file_lsWyiQ_image.png'
import esmalteBotonImage from '/src/assets/esmalteBoton.png'
import menuExtendedImage from '/src/assets/pasted_file_zcJDvR_image.png'
import informacionTabImage from '/src/assets/pasted_file_nA9umq_image.png'
import informacionContentImage from '/src/assets/pasted_file_WJpmIa_image.png'
import pruebasTabImage from '/src/assets/pasted_file_wpIr7y_image.png'
import oneImage from '/src/assets/1.png'
import editMaterialNameImage from '/src/assets/pasted_file_JCSgMD_image.png'
import editMaterialNameModalImage from '/src/assets/pasted_file_URVhkM_image.png'
import duplicateColumnImage from '/src/assets/pasted_file_94oDyD_image.png'
import duplicateColumnResultImage from '/src/assets/pasted_file_jQvJvh_image.png'
import deleteColumnImage from '/src/assets/pasted_file_SHua3A_image.png'
import sheetSystemImage from '/src/assets/pasted_file_NOQxpP_image.png'
import sheetFunctionalitiesImage from '/src/assets/pasted_file_4unfen_image.png'
import sheetNavigationImage from '/src/assets/pasted_file_pkrHCO_image.png'
import testApplicationImage from '/src/assets/pasted_file_gcDpto_image.png'
import pieceCodeSelectionImage from '/src/assets/pasted_file_xZtP92_image.png'
import createPieceCodeSapImage from '/src/assets/pasted_file_lsWyiQ_image.png'
import mainButtonsImage from '/src/assets/pasted_file_ZGmTRt_image.png'
import threeDotsOptionsImage from '/src/assets/pasted_file_zcJDvR_image.png'
import testReviewTableImage from '/src/assets/pasted_file_nA9umq_image.png'
import pieceCodeSelectorImage from '/src/assets/pasted_file_WJpmIa_image.png'
import resultsTableImage from '/src/assets/pasted_file_wpIr7y_image.png'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [copiedUrl, setCopiedUrl] = useState('')
  const [addComponentExpanded, setAddComponentExpanded] = useState(false)
  const [addMaterialExpanded, setAddMaterialExpanded] = useState(false)
  const [addMaterialSapExpanded, setAddMaterialSapExpanded] = useState(false)
  const [searchMaterialSapExpanded, setSearchMaterialSapExpanded] = useState(false)
  const [observacionesExpanded, setObservacionesExpanded] = useState(false)
  const [editarNombreExpanded, setEditarNombreExpanded] = useState(false)
  const [duplicarColumnaExpanded, setDuplicarColumnaExpanded] = useState(false)
  const [eliminarColumnaExpanded, setEliminarColumnaExpanded] = useState(false)
  const [sistemaHojasExpanded, setSistemaHojasExpanded] = useState(false)
  const [guardadoExpanded, setGuardadoExpanded] = useState(false)
  const [exportarPdfExpanded, setExportarPdfExpanded] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Scroll to top when section changes
  useEffect(() => {
    console.log('Cambiando a sección:', activeSection)
    
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    
    // Force scroll to absolute top with multiple methods
    const forceScrollToTop = () => {
      // Try multiple scroll methods to ensure it works
      window.scrollTo(0, 0)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      // Also try scrolling all possible containers
      const containers = document.querySelectorAll('.min-h-screen, [data-scroll-container]')
      containers.forEach(container => {
        if (container.scrollTop !== undefined) {
          container.scrollTop = 0
        }
      })
    }
    
    // Execute immediately and with timeout
    forceScrollToTop()
    setTimeout(forceScrollToTop, 0)
    setTimeout(forceScrollToTop, 10)
  }, [activeSection])

  const sections = [
    { 
      id: 'inicio', 
      title: 'Inicio', 
      icon: Home,
      description: 'Página principal del manual',
      content: 'Lab Sheets manual usuario aplicación web desarrollo esmaltes cerámicos'
    },
    { 
      id: 'acceso', 
      title: 'Acceso a la Aplicación', 
      icon: LogIn,
      description: 'Cómo iniciar sesión en Lab Sheets',
      content: 'acceso login google corporativa navegador web https labsheets altadiagroup'
    },
    { 
      id: 'gestor', 
      title: 'Gestor de Estudios', 
      icon: Settings,
      description: 'Administrar y organizar estudios',
      content: 'gestor estudios buscar filtrar cliente fechas administrar organizar'
    },
    { 
      id: 'funcionalidades', 
      title: 'Funcionalidades Generales', 
      icon: Settings,
      description: 'Características generales de la aplicación',
      content: 'funcionalidades generales pestañas menú navegación feedback cerrar sesión'
    },
    { 
      id: 'informacion', 
      title: 'Pantalla de Información', 
      icon: Info,
      description: 'Vista de información del proyecto',
      content: 'información proyecto estudio SAP datos partida entregable características esmalte'
    },
    { 
      id: 'formulacion', 
      title: 'Pantalla de Formulación', 
      icon: FileText,
      description: 'Hoja de cálculo para formulaciones',
      content: 'formulación excel componentes materiales SAP añadir buscar duplicar observaciones'
    },
    { 
      id: 'pruebas', 
      title: 'Aplicación de Pruebas', 
      icon: TestTube,
      description: 'Aplicar y gestionar pruebas',
      content: 'aplicación pruebas testing laboratorio ensayos'
    },
    { 
      id: 'revision', 
      title: 'Revisión de Pruebas', 
      icon: CheckCircle,
      description: 'Revisar resultados de pruebas',
      content: 'revisión pruebas resultados análisis verificación'
    },
    { 
      id: 'resultados', 
      title: 'Pantalla de Resultados', 
      icon: BarChart3,
      description: 'Visualizar y analizar resultados',
      content: 'resultados gráficos análisis datos visualización informes'
    }
  ]

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedUrl(text)
      setTimeout(() => setCopiedUrl(''), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 -m-6 p-6">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Logo Section with enhanced styling */}
              <div className="flex justify-center pt-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-full blur-xl opacity-20 scale-110"></div>
                  <img 
                    src={logoImage} 
                    alt="Logo Lab Sheets" 
                    className="h-40 w-auto relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Hero Section with enhanced design */}
              <div className="relative overflow-hidden rounded-2xl p-12 text-white shadow-2xl" style={{background: 'linear-gradient(135deg, #eb4a4a 0%, #d63939 50%, #c73030 100%)'}}>
                <div className="relative z-10 text-center">
                  <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                    Lab Sheets
                  </h1>
                  <p className="text-2xl mb-8 opacity-95 max-w-4xl mx-auto leading-relaxed">
                    Manual de Usuario - Aplicación Web para Desarrollo de Esmaltes Cerámicos
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <span className="text-sm font-medium">Digitalización Completa</span>
                    </div>
                    <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <span className="text-sm font-medium">Interfaz Avanzada</span>
                    </div>
                    <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <span className="text-sm font-medium">Informes Estructurados</span>
                    </div>
                  </div>
                </div>
                {/* Enhanced background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40 blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-white/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
              </div>

              {/* Enhanced Description Card */}
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                      <Info className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      ¿Qué es Lab Sheets?
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Lab Sheets es una aplicación web que <span className="font-semibold text-red-600">digitaliza el proceso completo</span> de desarrollo de esmaltes cerámicos, 
                      integrando en un único entorno los módulos de datos del proyecto, hoja de formulación, aplicación de pruebas 
                      y revisión técnica, junto con una <span className="font-semibold text-red-600">interfaz avanzada</span> para registrar resultados visuales, táctiles, químicos y opcionales.
                    </p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-red-600 mb-2">📊</div>
                        <div className="text-sm font-medium text-gray-800">Centralizar Información</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-red-600 mb-2">🔍</div>
                        <div className="text-sm font-medium text-gray-800">Mejorar Trazabilidad</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-red-600 mb-2">⚡</div>
                        <div className="text-sm font-medium text-gray-800">Agilizar Trabajo</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

               {/* Navegación rápida */}
               <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                 <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                   Navegación Rápida
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {sections.slice(1).map((section) => {
                     const Icon = section.icon
                     return (
                       <Card 
                         key={section.id} 
                         className="cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 shadow-lg group"
                         onClick={() => setActiveSection(section.id)}
                       >
                         <CardContent className="p-6">
                           <div className="flex items-center gap-4">
                             <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                               <Icon className="h-6 w-6 text-white" />
                             </div>
                             <div className="flex-1">
                               <span className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                                 {section.title}
                               </span>
                               <p className="text-sm text-gray-500 mt-1">{section.description}</p>
                             </div>
                             <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" />
                           </div>
                         </CardContent>
                       </Card>
                     )
                   })}
                 </div>
               </div>
            </div>
          </div>
        )

      case 'acceso':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">¿Cómo acceder a LabSheets?</h1>
            </div>

            {/* Imagen principal prominente */}
            <div className="my-12">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold mb-3">Pantalla de Inicio de Sesión</h2>
              </div>
              
              <div className="-mx-8 lg:-mx-16 xl:-mx-24">
                <div className="bg-white p-8">
                  <img 
                    src={loginImage} 
                    alt="Pantalla de inicio de sesión de LabSheets" 
                    className="w-full h-auto scale-125 mx-auto max-w-4xl rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Pasos de acceso en formato compacto */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    Acceder a la URL
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Navega a una de las siguientes direcciones:
                  </p>
                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm">
                       <a 
                         href="https://labsheets.altadiagroup.com" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="bg-muted px-3 py-2 rounded flex-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors cursor-pointer"
                       >
                         https://labsheets.altadiagroup.com
                       </a>
                       <Button 
                         size="sm" 
                         variant="ghost"
                         onClick={() => copyToClipboard('https://labsheets.altadiagroup.com')}
                       >
                         {copiedUrl === 'https://labsheets.altadiagroup.com' ? 
                           <Check className="h-4 w-4" /> : 
                           <Copy className="h-4 w-4" />
                         }
                       </Button>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <a 
                         href="https://labsheets-c864b.web.app" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="bg-muted px-3 py-2 rounded flex-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors cursor-pointer"
                       >
                         https://labsheets-c864b.web.app
                       </a>
                       <Button 
                         size="sm" 
                         variant="ghost"
                         onClick={() => copyToClipboard('https://labsheets-c864b.web.app')}
                       >
                         {copiedUrl === 'https://labsheets-c864b.web.app' ? 
                           <Check className="h-4 w-4" /> : 
                           <Copy className="h-4 w-4" />
                         }
                       </Button>
                     </div>
                   </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    Iniciar Sesión
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Al entrar, se te pedirá iniciar sesión mediante tu cuenta de Google corporativa. 
                    Este proceso es seguro y garantiza que solo usuarios autorizados accedan a sus datos.
                  </p>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800 font-medium">
                      💡 Usa tu cuenta corporativa de Google para acceder
                    </p>
                  </div>
                </CardContent>
              </Card>
                  </div>
                </div>
        )

      case 'gestor':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">Gestor de Estudios</h1>
            </div>

            {/* Imagen principal prominente */}
            <div className="my-24">
              <div className="text-center mb-32">
                <h2 className="text-2xl font-semibold mb-3">Vista Principal del Gestor</h2>
                <p className="text-muted-foreground mb-12">
                  Tras iniciar sesión, la aplicación cargará automáticamente todos los estudios asociados a tu usuario
                </p>
              </div>
              
              <div className="-mx-8 lg:-mx-16 xl:-mx-24 my-16 mb-40">
                <img 
                  src={newGestorImage} 
                  alt="Vista principal del gestor de estudios" 
                  className="w-full h-auto scale-150 mx-auto max-w-4xl rounded-lg"
                />
              </div>
            </div>

            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Funcionalidades del Gestor</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    En esta pantalla podrás ver todos los estudios asociados a tu usuario. En la esquina superior izquierda encontrarás el icono para cerrar sesión 
                    <img src={iconoLogOut} alt="Icono de cerrar sesión" className="inline-block w-4 h-4 mx-1 align-middle rounded" />, 
                    mientras que en la esquina superior derecha podrás acceder a una versión ampliada del gestor de estudios 
                    <img src={iconoExtenso} alt="Icono de versión ampliada" className="inline-block w-4 h-4 mx-1 align-middle rounded" />.
                  </p>
                  <p className="text-muted-foreground">
                    Desde esta vista podrás consultarlos, editarlos o registrar nuevos resultados de manera inmediata.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-900 mb-2">Características principales:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Visualización de todos los estudios en una interfaz centralizada</li>
                      <li>• Acceso directo a cada estudio con un solo clic</li>
                      <li>• Herramientas de búsqueda y filtrado avanzadas</li>
                      <li>• Gestión completa del flujo de trabajo</li>
                    </ul>
                  </div>
                </div>
                </CardContent>
              </Card>

            <div className="text-center mt-32">
              <h2 className="text-2xl font-semibold mb-2">Gestor de estudios extendido</h2>
              <p className="text-muted-foreground mb-40">
                Una visión del gestor de estudios más completa
              </p>
            </div>

            <div className="-mx-8 lg:-mx-16 xl:-mx-24 my-16">
              <img 
                src={gestorExtendidoImage} 
                alt="Gestor de estudios extendido de Lab Sheets"
                className="w-full h-auto scale-150 mx-auto max-w-4xl rounded-lg"
              />
            </div>

            <div className="mt-48">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <img src={iconoExtenso} alt="Icono" className="w-4 h-4 rounded" />
                    Funcionalidades del Gestor extendido
                  </CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-muted-foreground mb-6">
                  En este gestor de estudios avanzado, disponemos de un buscador que permite localizar estudios por número de estudio o incluso filtrar por título. Debajo del buscador se mostrarán todos los estudios correspondientes, y para abrir uno solo será necesario pulsarlo.
                </p>
                <p className="text-muted-foreground mb-6">
                  Justo debajo del buscador se encuentra el botón de filtros, que permite filtrar por nombre del cliente y por un rango de fechas. Al pulsar Aceptar, la información se filtrará según los criterios seleccionados. Para eliminar los filtros y realizar una nueva búsqueda, solo será necesario pulsar el botón Limpiar filtros.
                </p>
              </CardContent>
            </Card>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-24 text-center">Botón de filtros</h2>
              <div className="-mx-8 lg:-mx-16 xl:-mx-24 my-16 mb-48">
                <img 
                  src={filtrosImage} 
                  alt="Filtros de Lab Sheets"
                  className="w-full h-auto scale-150 mx-auto max-w-4xl rounded-lg"
                />
              </div>
            </div>

            </div>
          </div>
        )

      case 'formulacion':
        return (
          <div className="space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">Pantalla de Formulación</h1>
                <p className="text-lg text-gray-600 mb-8">Crea y gestiona formulaciones de productos.</p>
              </div>

            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Esta es la pantalla con más funcionalidades de la aplicación, diseñada como una pestaña tipo Excel, donde se puede trabajar la formulación del estudio.
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed">
                  Al acceder a "Fórmulas", lo primero que veremos es una pantalla vacía con celdas en gris creadas por defecto.
                </p>
              </CardContent>
            </Card>
              
              <img 
                 src={gestorButtonsImage} 
                 alt="Pantalla de Formulación" 
                 className="w-full h-auto mx-auto max-w-4xl rounded-lg mt-32 scale-150"
               />
               
               <Card className="mt-32">
                 <CardContent className="p-6">
                   <p className="text-gray-700 leading-relaxed">
                     Para interactuar con esta pantalla, contamos con varios botones que permiten realizar distintas acciones.
                   </p>
                 </CardContent>
               </Card>
               
               <div className="my-12">
                 <div className="-mx-8 lg:-mx-16 xl:-mx-24">
                   <img 
                     src={botonesFormulaGridImage} 
                     alt="Botones de la pantalla de formulación" 
                     className="w-full h-auto mx-auto max-w-4xl rounded-lg"
                   />
                 </div>
               </div>
               
               {/* Apartados desplegables */}
               <div className="space-y-16 mt-16">
                 {/* Primera fila - dos apartados */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                   <Card className={`cursor-pointer hover:shadow-md transition-all duration-300 h-auto`}>
                     <CardHeader className={`${addComponentExpanded ? 'pb-8' : 'pb-4'}`}>
                       <CardTitle 
                            className={`text-2xl font-bold rounded-lg flex items-center justify-between cursor-pointer ${addComponentExpanded ? 'p-6' : 'p-4'} text-white`}
                            style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                          onClick={() => setAddComponentExpanded(!addComponentExpanded)}
                        >
                          <span className="flex-1 text-center">AÑADIR COMPONENTE</span>
                          {addComponentExpanded ? 
                            <ChevronUp className="h-6 w-6" /> : 
                            <ChevronDown className="h-6 w-6" />
                          }
                        </CardTitle>
                     </CardHeader>
                     {addComponentExpanded && (
                       <CardContent className="pt-0 px-8 pb-8">
                         <div>
                           <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-8">
                             <p className="font-medium">El botón de añadir componente permite agregar un nuevo componente a la formulación, creando automáticamente una fila en la tabla de componentes.</p>
                             <p>Al pulsar Aceptar con el componente seleccionado, la aplicación lo verifica en SAP, comprobando si existe y está activo, y recupera automáticamente su coste y SCR (Supply Chain Risk).</p>
                           </div>
                           <div className="mb-8">
                             <h3 className="text-lg font-semibold text-center mb-4">Ventana de Añadir Componente</h3>
                             <img 
                               src={addMaterialButtonImage} 
                               alt="Añadir componente" 
                               className="w-1/2 h-auto rounded-lg shadow-sm mx-auto"
                             />
                           </div>
                           <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                             <p>La fila se creará con el componente seleccionado. Como se muestra en la imagen, al pulsar el botón de tres puntos verticales ubicado a la izquierda:</p>
                             <div className="my-6">
                               <img 
                                 src={materialTypeImage} 
                                 alt="Botón de tres puntos verticales" 
                                 className="w-auto h-auto rounded-lg shadow-sm mx-auto"
                               />
                             </div>
                             <p>Se desplegará un menú con dos opciones:</p>
                             <ul className="list-disc list-inside ml-4 space-y-2">
                               <li><strong>Ver detalles:</strong> permite consultar la información del componente, incluyendo coste y SCR; esta función es solo informativa.</li>
                               <li><strong>Eliminar fila:</strong> permite eliminar la fila creada con el componente, aunque solo será posible si la fila no contiene datos adicionales.</li>
                             </ul>
                             <div className="my-6">
                               <img 
                                 src={materialCreatedImage} 
                                 alt="Menú desplegable con opciones" 
                                 className="w-auto h-auto rounded-lg shadow-sm mx-auto"
                               />
                             </div>
                           </div>
                         </div>
                       </CardContent>
                     )}
                   </Card>
                   
                   <Card className={`cursor-pointer hover:shadow-md transition-all duration-300 h-auto`}>
                     <CardHeader className={`${addMaterialExpanded ? 'pb-8' : 'pb-4'}`}>
                       <CardTitle 
                         className={`text-2xl font-bold rounded-lg flex items-center justify-between cursor-pointer ${addMaterialExpanded ? 'p-6' : 'p-4'} text-white`}
                         style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                         onClick={() => setAddMaterialExpanded(!addMaterialExpanded)}
                       >
                         <span className="flex-1 text-center">AÑADIR MATERIAL</span>
                         {addMaterialExpanded ? 
                           <ChevronUp className="h-6 w-6" /> : 
                           <ChevronDown className="h-6 w-6" />
                         }
                       </CardTitle>
                     </CardHeader>
                     {addMaterialExpanded && (
                       <CardContent className="pt-0 px-8 pb-8">
                         <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                            <p className="font-medium">El botón de añadir material permite agregar un material a la formulación. Al ingresar el ID del material y el tipo de material, se creará una columna con esta información. Es importante tener en cuenta que esta función crea un material personalizado, que no existe previamente. La creación de columnas con materiales existentes se explicará más adelante.</p>
                            <div className="my-6">
                              <img 
                                src={addMaterialSapImage} 
                                alt="Añadir material" 
                                className="w-auto h-auto rounded-lg shadow-sm mx-auto"
                              />
                            </div>
                            <p className="font-medium">Una vez creada la columna, se podrán rellenar las cantidades en las filas ya creadas. En este ejemplo, el ID del material es "TEST" y el tipo es "B" (Esmaltes opacos brillantes o cortes).</p>
                            <div className="my-6">
                              <img 
                                src={sapSearchImage} 
                                alt="Ejemplo de material creado" 
                                className="w-auto h-auto rounded-lg shadow-sm mx-auto"
                              />
                            </div>
                          </div>
                       </CardContent>
                     )}
                   </Card>
                 </div>
                 
                 {/* Segunda fila - dos apartados */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                   <Card className={`cursor-pointer hover:shadow-md transition-all duration-300 h-auto`}>
                     <CardHeader className={`${addMaterialSapExpanded ? 'pb-8' : 'pb-4'}`}>
                       <CardTitle 
                         className={`text-2xl font-bold rounded-lg flex items-center justify-between cursor-pointer ${addMaterialSapExpanded ? 'p-6' : 'p-4'} text-white`}
                         style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                         onClick={() => setAddMaterialSapExpanded(!addMaterialSapExpanded)}
                       >
                         <span className="flex-1 text-center">AÑADIR MATERIAL SAP</span>
                         {addMaterialSapExpanded ? 
                           <ChevronUp className="h-6 w-6" /> : 
                           <ChevronDown className="h-6 w-6" />
                         }
                       </CardTitle>
                     </CardHeader>
                     {addMaterialSapExpanded && (
                       <CardContent className="pt-0 px-8 pb-8">
                         <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                            <p className="font-medium">El botón de añadir material permite agregar un material a la formulación. Al ingresar el ID del material y el tipo de material, se creará una columna con esta información. Es importante destacar que en este caso se trata de un material YA EXISTENTE en SAP, el cual ya incluye sus componentes y cantidades.</p>
                            <p>En este ejemplo, se ha seleccionado el material ET40-44465, alternativa 1 y tipo "B". Si no se especifica la alternativa, esta se asignará automáticamente con el valor 1.</p>
                            <div className="my-6">
                              <img 
                                src={searchMaterialImage} 
                                alt="Añadir material SAP" 
                                className="w-auto h-auto rounded-lg shadow-sm mx-auto"
                              />
                            </div>
                            <p className="font-medium">Una vez creada la columna, se observará que se ha rellenado con varios componentes y sus cantidades, los cuales se pueden editar o añadir nuevos componentes según sea necesario.</p>
                            <div className="my-6">
                              <img 
                                src={materialFoundImage} 
                                alt="Columna con componentes" 
                                className="w-auto h-auto rounded-lg shadow-sm mx-auto"
                              />
                            </div>
                          </div>
                       </CardContent>
                   )}
                   </Card>
                   
                   <Card className={`cursor-pointer hover:shadow-md transition-all duration-300 h-auto`}>
                     <CardHeader className={`${searchMaterialSapExpanded ? 'pb-8' : 'pb-4'}`}>
                       <CardTitle 
                         className={`text-2xl font-bold rounded-lg flex items-center justify-between cursor-pointer ${searchMaterialSapExpanded ? 'p-6' : 'p-4'} text-white`}
                         style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                         onClick={() => setSearchMaterialSapExpanded(!searchMaterialSapExpanded)}
                       >
                         <span className="flex-1 text-center">BUSCAR MATERIAL SAP</span>
                         {searchMaterialSapExpanded ? 
                           <ChevronUp className="h-6 w-6" /> : 
                           <ChevronDown className="h-6 w-6" />
                         }
                       </CardTitle>
                     </CardHeader>
                     {searchMaterialSapExpanded && (
                       <CardContent className="pt-0 px-8 pb-8">
                         <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                           <p className="font-medium">El botón de búsqueda de material funciona de manera similar al botón AÑADIR MATERIAL SAP. Se debe rellenar de la misma forma, pero con una variante: al pulsar Aceptar, antes de que la columna se agregue a la formulación, aparecerá una pestaña con la información del material, mostrando sus componentes y cantidades.</p>
                           <div className="my-6">
                             <img 
                               src={observacionesButtonImage} 
                               alt="Búsqueda de material SAP" 
                               className="w-auto h-auto rounded-lg shadow-sm mx-auto"
                             />
                           </div>
                           <p className="font-medium">Una vez revisada la información, al pulsar Añadir material en la parte inferior derecha, el material se incorporará a la formulación.</p>
                           <div className="my-6">
                             <img 
                               src={observacionesModalImage} 
                               alt="Añadir material a la formulación" 
                               className="w-auto h-auto rounded-lg shadow-sm mx-auto"
                             />
                           </div>
                         </div>
                       </CardContent>
                     )}
                   </Card>
                 </div>
               </div>
               
               {/* Sección de funcionalidades de la columna */}
               <div className="mt-16">
                 <h2 className="text-2xl font-bold text-center mb-6">FUNCIONALIDADES DE LA COLUMNA</h2>
                 <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                   <p className="text-gray-700 leading-relaxed mb-4">
                     En la columna, a la derecha del ID del material y del tipo, se encuentra un botón de tres puntos verticales. 
                     Al pulsarlo, se abrirá un pop-up con diferentes funcionalidades disponibles.
                   </p>
                   <div className="text-center">
                     <img 
                       src={boton3puntosImage} 
                       alt="Botón de tres puntos verticales" 
                       className="w-32 h-auto mx-auto rounded-lg shadow-sm"
                     />
                   </div>
                 </div>
               </div>
               
               {/* Nuevas funcionalidades de la columna */}
               <div className="space-y-16 mt-16">
                 {/* Primera fila - dos apartados */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                   <Card className={`cursor-pointer hover:shadow-md transition-all duration-300 h-auto`}>
                     <CardHeader className={`${observacionesExpanded ? 'pb-8' : 'pb-4'}`}>
                       <CardTitle 
                         className={`text-2xl font-bold rounded-lg flex items-center justify-between cursor-pointer ${observacionesExpanded ? 'p-6' : 'p-4'} text-white`}
                         style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                         onClick={() => setObservacionesExpanded(!observacionesExpanded)}
                       >
                         <span className="flex-1 text-center">OBSERVACIONES DE LA COLUMNA</span>
                         {observacionesExpanded ? 
                           <ChevronUp className="h-6 w-6" /> : 
                           <ChevronDown className="h-6 w-6" />
                         }
                       </CardTitle>
                     </CardHeader>
                     {observacionesExpanded && (
                       <CardContent className="pt-0 px-8 pb-8">
                       <p className="text-gray-600 mb-4">
                          En la primera opción, Observaciones columna, se abrirá un cuadro de texto donde se pueden escribir observaciones relacionadas con dicha columna.
                        </p>
                        <div className="flex justify-center mb-4">
                          <img 
                            src={dashboardImage} 
                            alt="Observaciones de la columna" 
                            className="w-64 h-auto rounded-lg shadow-sm"
                          />
                        </div>
                        <p className="text-gray-600 mb-4">
                          Una vez completadas, las observaciones se guardarán en la columna y aparecerá un icono con forma de bookmark de color amarillo. Al colocar el puntero sobre este icono, se podrán visualizar las observaciones correspondientes.
                        </p>
                        <div className="flex justify-center">
                           <img 
                             src={oneImage} 
                             alt="Icono bookmark observaciones" 
                             className="w-64 h-auto rounded-lg shadow-sm"
                           />
                         </div>
                       </CardContent>
                     )}
                   </Card>
                   
                   <Card className={`cursor-pointer hover:shadow-md transition-all duration-300 h-auto`}>
                     <CardHeader className={`${editarNombreExpanded ? 'pb-8' : 'pb-4'}`}>
                       <CardTitle 
                       className={`text-2xl font-bold rounded-lg flex items-center justify-between cursor-pointer ${editarNombreExpanded ? 'p-6' : 'p-4'} text-white`}
                       style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                       onClick={() => setEditarNombreExpanded(!editarNombreExpanded)}
                     >
                         <span className="flex-1 text-center">EDITAR NOMBRE DEL MATERIAL</span>
                         {editarNombreExpanded ? 
                           <ChevronUp className="h-6 w-6" /> : 
                           <ChevronDown className="h-6 w-6" />
                         }
                       </CardTitle>
                     </CardHeader>
                     {editarNombreExpanded && (
                       <CardContent className="pt-0 px-8 pb-8">
                       <p className="text-gray-600 mb-4">
                         En el botón de editar nombre del material se puede modificar el nombre que aparece para dicho material en la columna. Una vez pulsado Guardar, el nombre se actualizará automáticamente.
                       </p>
                       <div className="flex justify-center mb-4">
                         <img 
                           src={editMaterialNameImage} 
                           alt="Editar nombre del material" 
                           className="w-64 h-auto rounded-lg shadow-sm"
                         />
                       </div>
                       <p className="text-gray-600 mb-4">
                         Como se muestra en el ejemplo, el nombre se ha cambiado de ET40-44465 a "TEST".
                       </p>
                       <div className="flex justify-center">
                         <img 
                           src={editMaterialNameModalImage} 
                           alt="Ejemplo cambio de nombre" 
                           className="w-64 h-auto rounded-lg shadow-sm"
                         />
                       </div>
                       </CardContent>
                     )}
                   </Card>
                 </div>
                 
                 {/* Segunda fila - dos apartados */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                   <Card className={`cursor-pointer hover:shadow-md transition-all duration-300 h-auto`}>
                     <CardHeader className={`${duplicarColumnaExpanded ? 'pb-8' : 'pb-4'}`}>
                       <CardTitle 
                          className={`text-2xl font-bold rounded-lg flex items-center justify-between cursor-pointer ${duplicarColumnaExpanded ? 'p-6' : 'p-4'} text-white`}
                          style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                         onClick={() => setDuplicarColumnaExpanded(!duplicarColumnaExpanded)}
                       >
                         <span className="flex-1 text-center">DUPLICAR COLUMNA</span>
                         {duplicarColumnaExpanded ? 
                           <ChevronUp className="h-6 w-6" /> : 
                           <ChevronDown className="h-6 w-6" />
                         }
                       </CardTitle>
                     </CardHeader>
                     {duplicarColumnaExpanded && (
                       <CardContent className="pt-0 px-8 pb-8">
                       <p className="text-gray-600 mb-4">
                         En esta opción se puede duplicar la columna seleccionada, pudiendo modificar su nombre y tipo durante el proceso. Además, se puede elegir si la columna duplicada se insertará en la hoja actual o en otra hoja; el funcionamiento del sistema de hojas se explicará con más detalle más adelante.
                       </p>
                       <div className="flex justify-center mb-4">
                         <img 
                           src={duplicateColumnImage} 
                           alt="Duplicar columna" 
                           className="w-64 h-auto rounded-lg shadow-sm"
                         />
                       </div>
                       <p className="text-gray-600 mb-4">
                         Al pulsar Aceptar, se creará una nueva columna con los datos seleccionados. Es importante tener en cuenta que, al duplicarse en la misma hoja, el valor de PRUEBA ANTERIOR se actualizará al tipo de la columna duplicada (en este caso, "B1").
                       </p>
                       <div className="flex justify-center">
                         <img 
                           src={duplicateColumnResultImage} 
                           alt="Resultado duplicar columna" 
                           className="w-64 h-auto rounded-lg shadow-sm"
                         />
                       </div>
                       </CardContent>
                     )}
                   </Card>
                   
                   <Card className={`cursor-pointer hover:shadow-md transition-all duration-300 h-auto`}>
                     <CardHeader className={`${eliminarColumnaExpanded ? 'pb-8' : 'pb-4'}`}>
                       <CardTitle 
                       className={`text-2xl font-bold rounded-lg flex items-center justify-between cursor-pointer ${eliminarColumnaExpanded ? 'p-6' : 'p-4'} text-white`}
                       style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                       onClick={() => setEliminarColumnaExpanded(!eliminarColumnaExpanded)}
                     >
                         <span className="flex-1 text-center">ELIMINAR COLUMNA</span>
                         {eliminarColumnaExpanded ? 
                           <ChevronUp className="h-6 w-6" /> : 
                           <ChevronDown className="h-6 w-6" />
                         }
                       </CardTitle>
                     </CardHeader>
                     {eliminarColumnaExpanded && (
                       <CardContent className="pt-0 px-8 pb-8">
                         <p className="text-gray-600 mb-4">
                            En esta opción se puede eliminar la columna seleccionada. Es importante tener en cuenta que, al proceder, se eliminarán todos los datos y cantidades contenidos en dicha columna.
                          </p>
                          <div className="flex justify-center mb-4">
                            <img 
                              src={deleteColumnImage} 
                              alt="Eliminar columna" 
                              className="w-64 h-auto rounded-lg shadow-sm"
                            />
                          </div>
                       </CardContent>
                     )}
                   </Card>
                 </div>
               </div>
               
               {/* Sección del Sistema de Hojas */}
               <div className="mt-16">
                 <Card className={`cursor-pointer hover:shadow-md transition-all duration-300 h-auto`}>
                   <CardHeader className={`${sistemaHojasExpanded ? 'pb-8' : 'pb-4'}`}>
                     <CardTitle 
                       className={`text-3xl font-bold rounded-lg flex items-center justify-between cursor-pointer ${sistemaHojasExpanded ? 'p-6' : 'p-4'} text-white`} 
                       style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                       onClick={() => setSistemaHojasExpanded(!sistemaHojasExpanded)}
                     >
                       <span className="flex-1 text-center">SISTEMA DE HOJAS</span>
                       {sistemaHojasExpanded ? 
                         <ChevronUp className="h-6 w-6" /> : 
                         <ChevronDown className="h-6 w-6" />
                       }
                     </CardTitle>
                   </CardHeader>
                   {sistemaHojasExpanded && (
                     <CardContent className="pt-0 px-8 pb-8">
                     <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                       <p className="font-medium">
                         Al acceder a Fórmulas, se puede observar, encima de las celdas, un sistema de hojas, con al menos una hoja creada. Cada hoja contiene su propia formulación, independiente de las demás, lo que permite trabajar con varias hojas de formulación dentro del mismo estudio.
                       </p>
                       <p className="font-medium">
                         Para crear una nueva hoja, se debe pulsar el icono + e indicar el nombre de la hoja.
                       </p>
                       <div className="flex justify-center my-6">
                         <img 
                           src={sheetSystemImage} 
                           alt="Sistema de hojas" 
                           className="w-auto h-auto rounded-lg shadow-sm mx-auto"
                         />
                       </div>
                       <p className="font-medium">
                         Dentro de cada hoja, hay una flecha hacia abajo que despliega varias funcionalidades:
                       </p>
                       <ul className="list-disc list-inside space-y-2 ml-4">
                         <li><strong>Renombrar:</strong> abre un pop-up para cambiar el nombre de la hoja.</li>
                         <li><strong>Duplicar:</strong> crea una nueva hoja con los datos de la hoja seleccionada.</li>
                       </ul>
                       <div className="flex justify-center my-6">
                          <img 
                            src={sheetFunctionalitiesImage} 
                            alt="Funcionalidades de hojas" 
                            className="w-auto h-auto rounded-lg shadow-sm mx-auto"
                          />
                        </div>
                        <p className="font-medium">
                          Se puede navegar entre las hojas pulsando directamente sobre su nombre o utilizando el botón de las tres rayas, que muestra todas las hojas disponibles.
                        </p>
                        <div className="flex justify-center my-6">
                          <img 
                            src={sheetNavigationImage} 
                            alt="Navegación entre hojas" 
                            className="w-auto h-auto rounded-lg shadow-sm mx-auto"
                          />
                        </div>
                      </div>
                      </CardContent>
                    )}
                  </Card>
                </div>

                {/* GUARDADO y EXPORTAR PDF Cards */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                   {/* GUARDADO Card */}
                   <Card className={`cursor-pointer hover:shadow-md transition-all duration-300 h-auto`}>
                     <CardHeader className={`${guardadoExpanded ? 'pb-8' : 'pb-4'}`}>
                       <CardTitle 
                         className={`text-2xl font-bold rounded-lg flex items-center justify-between cursor-pointer ${guardadoExpanded ? 'p-6' : 'p-4'} text-white`}
                         style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                         onClick={() => setGuardadoExpanded(!guardadoExpanded)}
                       >
                         <span className="flex-1 text-center">GUARDADO</span>
                         {guardadoExpanded ? 
                           <ChevronUp className="h-6 w-6" /> : 
                           <ChevronDown className="h-6 w-6" />
                         }
                       </CardTitle>
                     </CardHeader>
                     {guardadoExpanded && (
                       <CardContent className="pt-0 px-8 pb-8">
                         <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                           <p className="font-medium">
                             Al pulsar GUARDAR, se almacenará el contenido de todas las hojas en SAP, lo que permite salir de la aplicación y, al volver a entrar, cargar toda la información tal como estaba.
                           </p>
                           <div className="flex justify-center">
                             <img 
                               src={guardarBotonImage} 
                               alt="Botón Guardar" 
                               className="max-w-full h-auto rounded-lg shadow-md"
                             />
                           </div>
                         </div>
                       </CardContent>
                     )}
                   </Card>
 
                   {/* EXPORTAR PDF Card */}
                   <Card className={`cursor-pointer hover:shadow-md transition-all duration-300 h-auto`}>
                     <CardHeader className={`${exportarPdfExpanded ? 'pb-8' : 'pb-4'}`}>
                       <CardTitle 
                         className={`text-2xl font-bold rounded-lg flex items-center justify-between cursor-pointer ${exportarPdfExpanded ? 'p-6' : 'p-4'} text-white`}
                         style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                         onClick={() => setExportarPdfExpanded(!exportarPdfExpanded)}
                       >
                         <span className="flex-1 text-center">EXPORTAR PDF</span>
                         {exportarPdfExpanded ? 
                           <ChevronUp className="h-6 w-6" /> : 
                           <ChevronDown className="h-6 w-6" />
                         }
                       </CardTitle>
                     </CardHeader>
                     {exportarPdfExpanded && (
                       <CardContent className="pt-0 px-8 pb-8">
                         <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                           <div className="flex justify-center">
                             <img 
                               src={exportarBotonImage} 
                               alt="Botón Exportar PDF" 
                               className="max-w-full h-auto rounded-lg shadow-md"
                             />
                           </div>
                           <p className="font-medium">
                             Al seleccionar EXPORTAR PDF, se abrirá una ventana para seleccionar la hoja o las hojas que se desean exportar y descargar. Es posible elegir una, varias o todas las hojas.
                           </p>
                           <div className="flex justify-center">
                             <img 
                               src={exportPdfModalImage} 
                               alt="Ventana de exportación PDF" 
                               className="max-w-full h-auto rounded-lg shadow-md"
                             />
                           </div>
                         </div>
                       </CardContent>
                     )}
                   </Card>
                 </div>
          </div>
        )

      case 'funcionalidades':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Funcionalidades Generales</h1>
              <p className="text-muted-foreground">
                Características y funcionalidades principales de la aplicación
              </p>
            </div>

            {/* Descripción de funcionalidades */}
             <Card>
               <CardContent className="p-6">
                 <p className="text-muted-foreground leading-relaxed">
                   Una vez dentro de la aplicación, contamos con cinco pestañas. Al pulsar sobre cada icono, se podrá acceder a la pestaña correspondiente. En la parte superior derecha se encuentra una flecha hacia arriba, que permite contraer el menú. Para volver a desplegarlo, solo será necesario pulsar la flecha nuevamente.
                 </p>
               </CardContent>
             </Card>

             {/* Imagen principal prominente */}
               <div className="my-12">
                 <div className="flex justify-center">
                   <img 
                     src={funcionalidadesImage} 
                     alt="Funcionalidades generales de Lab Sheets"
                     className="w-full h-auto max-w-4xl rounded-lg"
                   />
                 </div>
               </div>

               {/* Descripción debajo de la imagen */}
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed text-center">
                      Aquí podemos ver el menú contraído, diseñado para ocupar menos espacio en la pantalla.
                    </p>
                  </CardContent>
                </Card>

                {/* Segunda imagen - menú contraído */}
                <div className="my-12">
                  <div className="flex justify-center">
                    <img 
                      src={menuContraidoImage} 
                      alt="Menú contraído de Lab Sheets"
                      className="w-full h-auto max-w-4xl rounded-lg"
                    />
                  </div>
                </div>

                <Card className="mb-8">
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      Si desplazamos la vista hacia abajo, encontraremos tres botones principales:
                    </p>
                    
                    {/* Tres botones en fila */}
                    <div className="flex justify-center items-center gap-8 my-8">
                      <div className="text-center">
                        <img 
                          src={gestorEstudiosImage} 
                          alt="Gestor de estudios" 
                          className="w-32 h-auto rounded-lg mx-auto mb-2"
                        />
                        <p className="text-sm font-medium text-gray-700">Gestor de estudios</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src={feedbackImage} 
                          alt="Feedback" 
                          className="w-24 h-auto rounded-lg mx-auto mb-2"
                        />
                        <p className="text-sm font-medium text-gray-700">Feedback</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src={logOutImage} 
                          alt="Cerrar sesión" 
                          className="w-12 h-auto rounded-lg mx-auto mb-2"
                        />
                        <p className="text-sm font-medium text-gray-700">Cerrar sesión</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mt-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Gestor de estudios:</strong> permite volver a la selección de estudios previamente explicada.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Feedback:</strong> ubicado a la derecha, junto a la versión de la aplicación, para enviar comentarios. Al pulsar el botón de feedback, se accederá a un modo de captura. Debajo, se encuentra un campo de texto donde se puede escribir cualquier sugerencia o incidencia detectada en la aplicación. La información enviada llegará directamente al equipo de IT.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Cerrar sesión:</strong> situado en la parte inferior, junto a nuestro nombre, para salir de la aplicación.
                      </p>
                    </div>
                  </CardContent>
                </Card>
          </div>
        )

      case 'informacion':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Pantalla de Información</h1>
              <p className="text-muted-foreground">
                Vista detallada de la información del proyecto o estudio
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Al entrar en un estudio, la primera pestaña que se cargará es "Info". Esta pantalla muestra la información del proyecto o estudio seleccionado, toda extraída de SAP. En ella se pueden consultar tanto los datos de partida, como los datos del entregable y las características del esmalte.
                </p>
                <br />
                <p className="text-muted-foreground leading-relaxed">
                  La pantalla cuenta con un único botón en la cabecera gris, denominado "Exportar PDF", que permite exportar toda la información a un archivo PDF.
                </p>
              </CardContent>
            </Card>

            <img 
              src={informacionImage} 
              alt="Pantalla de Información" 
              className="w-full h-auto mx-auto max-w-4xl rounded-lg mt-32 scale-150"
            />

          </div>
        )

      case 'pruebas':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Aplicación de Pruebas</h1>
            </div>

            {/* Card con información principal */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    En la pestaña "Aplicación de pruebas" se encuentra una hoja con una tabla que contiene datos a completar y varias funcionalidades.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    En esta tabla es posible modificar los datos directamente en las celdas y utilizar las herramientas disponibles para agilizar el trabajo en múltiples campos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Imagen principal */}
             <div className="flex justify-center my-8">
               <img 
                 src={testApplicationImage} 
                 alt="Aplicación de Pruebas" 
                 className="max-w-full h-auto rounded-lg shadow-md"
               />
             </div>

             {/* Información sobre código de pieza */}
             <div className="space-y-6">
               <Card>
                 <CardContent className="p-6">
                   <p className="text-gray-700 leading-relaxed">
                     En el campo Código pieza, al pulsar la flecha, se pueden seleccionar códigos de pieza existentes dentro del estudio. Es posible elegir uno o varios códigos según sea necesario.
                   </p>
                 </CardContent>
               </Card>

               <div className="flex justify-center my-6">
                 <img 
                   src={pieceCodeSelectionImage} 
                   alt="Selección de código de pieza" 
                   className="max-w-full h-auto rounded-lg shadow-md"
                 />
               </div>

               <Card>
                 <CardContent className="p-6">
                   <p className="text-gray-700 leading-relaxed">
                     Encima de estos, se encuentra el botón "Crear código de pieza SAP". Al pulsarlo, aparecerá un pop-up solicitando la cantidad de piezas que se desean crear. Una vez pulsado Crear, las piezas se generarán en SAP dentro del estudio.
                   </p>
                 </CardContent>
               </Card>

               <div className="flex justify-center my-6">
                 <img 
                   src={createPieceCodeSapImage} 
                   alt="Crear código de pieza SAP" 
                   className="max-w-full h-auto rounded-lg shadow-md"
                 />
               </div>

               {/* Información sobre funcionalidad del esmalte */}
               <Card>
                 <CardContent className="p-6">
                   <div className="space-y-4">
                     <p className="text-gray-700 leading-relaxed">
                       En la celda de Esmalte, se encuentra otra flecha hacia abajo. Al pulsarla, se desplegará un menú. Si hay información registrada en la hoja de formulación, se mostrarán las hojas disponibles y sus fórmulas.
                     </p>
                     <p className="text-gray-700 leading-relaxed">
                       Se debe seleccionar las fórmulas que se quieran comparar y, en la parte inferior, indicar el material a comparar. Al pulsar Aceptar, la celda se rellenará automáticamente. Esta funcionalidad sirve únicamente como ayuda, y es posible seguir escribiendo manualmente en la celda si se desea.
                     </p>
                   </div>
                 </CardContent>
               </Card>

               <div className="flex justify-center my-6">
                 <img 
                   src={esmalteBotonImage} 
                   alt="Funcionalidad del esmalte" 
                   className="max-w-full h-auto rounded-lg shadow-md"
                 />
               </div>

               {/* Información sobre botones principales */}
               <Card className="cursor-pointer hover:shadow-md transition-all duration-300 h-auto">
                 <CardHeader className="pb-8">
                   <CardTitle 
                     className="text-2xl font-bold rounded-lg p-6 text-white text-center"
                     style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                   >
                     BOTONES PRINCIPALES
                   </CardTitle>
                 </CardHeader>
                 <CardContent className="pt-0 px-8 pb-8">
                   <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                     <p className="font-medium">
                       En la misma pestaña, se encuentran tres botones principales:
                     </p>
                     <div className="space-y-3 ml-4">
                       <p>
                         <strong>Guardar:</strong> permite almacenar toda la información que se ha rellenado en las tablas.
                       </p>
                       <p>
                         <strong>Añadir tabla:</strong> genera una nueva tabla para completar con datos.
                       </p>
                       <p>
                         <strong>Exportar PDF:</strong> permite generar un PDF con el contenido de las tablas completadas.
                       </p>
                     </div>
                     <div className="flex justify-center mt-6">
                       <img 
                         src={mainButtonsImage} 
                         alt="Botones principales" 
                         className="max-w-full h-auto rounded-lg shadow-md"
                       />
                     </div>
                     
                     <p className="text-gray-700 mt-6">
                       En la esquina superior izquierda de la tabla se encuentra un botón con un icono de tres puntos verticales. Al pulsarlo, se despliegan dos opciones:
                     </p>
                     
                     <div className="space-y-3 ml-4 mt-4">
                       <p className="text-gray-700">
                         <strong>Duplicar tabla:</strong> genera una nueva tabla con los datos de la tabla seleccionada.
                       </p>
                       <p className="text-gray-700">
                         <strong>Eliminar tabla:</strong> permite borrar la tabla que se ha seleccionado.
                       </p>
                     </div>
                     
                     <div className="flex justify-center mt-6">
                       <img 
                         src={threeDotsOptionsImage} 
                         alt="Opciones del botón de tres puntos" 
                         className="max-w-full h-auto rounded-lg shadow-md"
                       />
                     </div>
                   </div>
                 </CardContent>
               </Card>
             </div>
           </div>
        )

      case 'revision':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Revisión de Pruebas</h1>
            </div>

            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  En la pestaña "Revisión de pruebas" se encuentra una hoja con una tabla que contiene datos a completar y varias funcionalidades.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  En esta tabla, es posible rellenar los datos de forma sencilla, de manera similar a como se haría en papel.
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center my-8">
              <img 
                src={testReviewTableImage} 
                alt="Tabla de revisión de pruebas" 
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  En esta tabla, el campo Código de pieza cuenta con una flecha hacia abajo. Al pulsarla, se desplegará una lista con los códigos de pieza existentes en el estudio. Es posible seleccionar uno o varios códigos, que se insertarán automáticamente en el campo.
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center my-8">
               <img 
                 src={pieceCodeSelectorImage} 
                 alt="Selector de código de pieza" 
                 className="max-w-full h-auto rounded-lg shadow-md"
               />
             </div>

             <Card className="cursor-pointer hover:shadow-md transition-all duration-300 h-auto">
               <CardHeader className="pb-8">
                 <CardTitle 
                   className="text-2xl font-bold rounded-lg p-6 text-white text-center"
                   style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                 >
                   BOTONES PRINCIPALES
                 </CardTitle>
               </CardHeader>
               <CardContent className="pt-0 px-8 pb-8">
                 <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                   <p className="font-medium">
                     En la cabecera gris se encuentran tres botones:
                   </p>
                   <div className="space-y-3 ml-4">
                     <p>
                       <strong>Guardar:</strong> al pulsarlo, se guardará toda la información de la tabla en SAP.
                     </p>
                     <p>
                       <strong>Añadir tabla:</strong> permite añadir una nueva tabla para completar más datos.
                     </p>
                     <p>
                       <strong>Exportar PDF:</strong> genera un PDF con todas las tablas de la pantalla.
                     </p>
                   </div>
                   <div className="flex justify-center mt-6">
                     <img 
                       src={mainButtonsImage} 
                       alt="Botones de la cabecera" 
                       className="max-w-full h-auto rounded-lg shadow-md"
                     />
                   </div>
                   
                   <p className="font-medium mt-8">
                     En la esquina superior izquierda de la tabla se encuentra un botón con tres puntos, que ofrece dos funcionalidades:
                   </p>
                   <div className="space-y-3 ml-4">
                     <p>
                       <strong>Duplicar tabla:</strong> crea una tabla idéntica a la seleccionada, conservando los mismos datos.
                     </p>
                     <p>
                       <strong>Eliminar tabla:</strong> permite borrar la tabla que se ha seleccionado.
                     </p>
                   </div>
                   <div className="flex justify-center mt-6">
                     <img 
                       src={threeDotsOptionsImage} 
                       alt="Opciones del botón de tres puntos" 
                       className="max-w-full h-auto rounded-lg shadow-md"
                     />
                   </div>
                 </div>
               </CardContent>
             </Card>
           </div>
         )

      case 'resultados':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Pantalla de Resultados</h1>
            </div>

            {/* Card con información principal */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    En la pestaña "Resultados" se encuentra una hoja con una tabla que contiene datos a completar y varias funcionalidades.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    En esta tabla, es posible rellenar los datos de forma sencilla, de manera similar a como se haría en papel.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Imagen principal */}
            <div className="flex justify-center my-8">
              <img 
                src={resultsTableImage} 
                alt="Tabla de resultados" 
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Card de botones principales */}
            <Card className="cursor-pointer hover:shadow-md transition-all duration-300 h-auto">
              <CardHeader className="pb-8">
                <CardTitle 
                  className="text-2xl font-bold rounded-lg p-6 text-white text-center"
                  style={{background: 'linear-gradient(to right, #eb4a4a, #d63939)'}}
                >
                  BOTONES PRINCIPALES
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-8 pb-8">
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                  <p className="font-medium">
                    En la misma pestaña, se encuentran tres botones principales:
                  </p>
                  <div className="space-y-3 ml-4">
                    <p>
                      <strong>Guardar:</strong> permite almacenar toda la información que se ha rellenado en las tablas.
                    </p>
                    <p>
                      <strong>Añadir tabla:</strong> genera una nueva tabla para completar con datos.
                    </p>
                    <p>
                      <strong>Exportar PDF:</strong> permite generar un PDF con el contenido de las tablas completadas.
                    </p>
                  </div>
                  <div className="flex justify-center mt-6">
                    <img 
                      src={mainButtonsImage} 
                      alt="Botones principales" 
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  
                  <p className="text-gray-700 mt-6">
                    En la esquina superior izquierda de la tabla se encuentra un botón con un icono de tres puntos verticales. Al pulsarlo, se despliegan dos opciones:
                  </p>
                  
                  <div className="space-y-3 ml-4 mt-4">
                    <p className="text-gray-700">
                      <strong>Duplicar tabla:</strong> genera una nueva tabla con los datos de la tabla seleccionada.
                    </p>
                    <p className="text-gray-700">
                      <strong>Eliminar tabla:</strong> permite borrar la tabla que se ha seleccionado.
                    </p>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <img 
                      src={threeDotsOptionsImage} 
                      alt="Opciones del botón de tres puntos" 
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{sections.find(s => s.id === activeSection)?.title}</h1>
              <p className="text-muted-foreground">
                Contenido en desarrollo para esta sección
              </p>
            </div>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-muted-foreground">
                  Esta sección está siendo desarrollada. 
                  Pronto tendrás acceso a toda la información detallada.
                </div>
              </CardContent>
            </Card>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 border-r bg-card`}>
        <div className="p-4">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <h2 className="text-lg font-semibold">Lab Sheets</h2>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-5rem)]">
          <nav className="p-2 space-y-1">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "secondary" : "ghost"}
                  className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <Icon className="h-4 w-4" />
                  {sidebarOpen && <span className="ml-2">{section.title}</span>}
                </Button>
              )
            })}
          </nav>
        </ScrollArea>

        {sidebarOpen && (
          <div className="p-4 border-t">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
              {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </Button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-screen">
          <main className="p-6">
            {renderContent()}
          </main>
        </ScrollArea>
      </div>

      {/* Tabla de contenidos flotante */}
      <TableOfContents 
        sections={sections}
        activeSection={activeSection}
        onSectionSelect={setActiveSection}
      />
    </div>
  )
}

export default App

