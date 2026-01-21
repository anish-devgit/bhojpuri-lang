import React, { useState, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { motion } from 'framer-motion'
import { Play, Trash2 } from 'lucide-react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Documentation from './components/Documentation';

function App() {
  const [code, setCode] = useState(`bola "Namaste Anish Raj! BhojpuriLang mein raua swagat ba!"

bhai a = 10
bhai b = 20

agar a < b tab
    bola "a chota ba b se"
nahi ta
    bola "a bada ba b se"
bas kar

bola "Ginti shuru karat bani:"
bhai i = 1
jab tak i < 6 tab
    bola i
    bhai i = i + 1
bas kar`)
  const [output, setOutput] = useState('Initializing Runtime...')
  const [pyodide, setPyodide] = useState(null)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    async function init() {
      try {
        const py = await window.loadPyodide()
        await py.loadPackage("micropip")
        const micropip = py.pyimport("micropip")
        await micropip.install("lark")
        
        // Load source from zip
        const response = await fetch("/bhoj.zip")
        const buffer = await response.arrayBuffer()
        await py.unpackArchive(buffer, "zip")
        
        py.runPython(`
import bhoj.interpreter
import bhoj.parser
from bhoj.interpreter import execute
from bhoj.parser import get_parser
import sys
from io import StringIO

def run_bhojpuri(code):
    old_stdout = sys.stdout
    sys.stdout = mystdout = StringIO()
    try:
        parser = get_parser()
        tree = parser.parse(code)
        execute(tree)
        result = mystdout.getvalue()
    except Exception as e:
        result = "galat ba bhai, cheat sheet me se keyword dekh l phele.\\n" + str(e)
    finally:
        sys.stdout = old_stdout
    return result
        `)
        
        setPyodide(py)
        setOutput('Ready! Click Run to execute.')
      } catch (err) {
        setOutput('Global Error: ' + err.message)
      }
    }
    init()
  }, [])

  const runCode = async () => {
    if (!pyodide) return
    setIsRunning(true)
    setOutput("Running...")
    
    setTimeout(() => {
        try {
            const runner = pyodide.globals.get('run_bhojpuri')
            const result = runner(code)
            setOutput(result)
            
            if (!result.includes('Error')) {
                // Success - simplified (no confetti)
            }
        } catch (err) {
            setOutput("Runtime Error: " + err.message)
        }
        setIsRunning(false)
    }, 100)
  }

  const clearOutput = () => setOutput("");

  return (
    <div className="bg-bhoj-darker min-h-screen text-white font-body selection:bg-bhoj-saffron selection:text-black">
      <ToastContainer position="bottom-right" theme="dark" />
      <Navbar />
      <Hero />
      
      {/* Playground Section */}
      <section id="playground" className="container mx-auto px-4 py-12 relative z-10">
        <div className="glass-panel border-0 ring-1 ring-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[80vh] min-h-[600px]">
            
            {/* Editor Pane */}
            <div className="flex-1 flex flex-col border-r border-white/10">
                <div className="bg-black/40 px-6 py-4 flex justify-between items-center border-b border-white/5">
                    <span className="font-mono text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        main.bhoj
                    </span>
                    <div className="flex gap-4">
                        {/* Examples Dropdown */}
                         <div className="relative group">
                            <select 
                                onChange={(e) => setCode(e.target.value)} 
                                className="appearance-none bg-white/5 border border-white/10 text-gray-300 text-sm rounded-lg px-4 py-2 pr-8 focus:outline-none focus:border-bhoj-saffron cursor-pointer hover:bg-white/10 transition-colors"
                                defaultValue=""
                            >
                                <option value="" disabled>Load Example...</option>
                                <option value='bola "Namaste Anish Raj! BhojpuriLang mein raua swagat ba!"'>Namaste (Hello)</option>
                                <option value={`bhai a = 10\nbhai b = 20\nbola a + b`}>Variables (Jod)</option>
                                <option value={`bhai a = 10\nagar a > 5 tab\n    bola "Bada ba"\nnahi ta\n    bola "Chota ba"`}>Condition (Agar/Ta)</option>
                                <option value={`bhai x = 0\njab tak x < 5 tab\n    bola x\n    bhai x = x + 1`}>Loop (Jab Tak)</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>

                        <motion.button 
                            whileTap={{ scale: 0.95 }}
                            onClick={runCode}
                            disabled={!pyodide || isRunning}
                            className={`flex items-center gap-2 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-lg ${
                                !pyodide ? 'bg-gray-700 text-gray-500 cursor-not-allowed' :
                                isRunning ? 'bg-yellow-600 text-white' : 'bg-gradient-to-r from-bhoj-saffron to-orange-500 text-white hover:shadow-orange-500/30'
                            }`}
                        >
                           <Play size={16} fill="currentColor" /> {isRunning ? 'Running...' : 'le beta (run)'}
                        </motion.button>
                     </div>
                </div>
                <div className="flex-1 relative bg-black/20 backdrop-blur-sm">
                    <Editor 
                        height="100%" 
                        defaultLanguage="python" 
                        value={code} 
                        onChange={(val) => setCode(val)}
                        theme="vs-dark"
                        options={{
                            minimap: { enabled: false },
                            fontSize: 16,
                            padding: { top: 24, bottom: 24 },
                            fontFamily: '"Fira Code", monospace',
                            smoothScrolling: true,
                            cursorBlinking: 'smooth',
                            lineNumbers: 'on',
                            renderLineHighlight: 'all',
                            scrollBeyondLastLine: false
                        }}
                    />
                </div>
            </div>

            {/* Output Pane */}
            <div className="flex-1 flex flex-col bg-[#0d1117]/90 backdrop-blur-md">
                <div className="bg-black/40 px-6 py-4 flex justify-between items-center border-b border-white/5">
                    <span className="font-mono text-sm text-gray-400 flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Output Terminal
                    </span>
                    <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={clearOutput}
                        className="text-gray-500 hover:text-red-400 transition-colors p-2 hover:bg-white/5 rounded-lg"
                        title="Clear Output"
                    >
                        <Trash2 size={16} />
                    </motion.button>
                </div>
                <div className="flex-1 p-6 overflow-auto font-mono scrollbar-thin">
                    <pre className={`text-lg leading-relaxed ${output.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
                        {output || <span className="text-gray-600 italic opacity-50">Result will appear here...</span>}
                    </pre>
                </div>
            </div>
        </div>
      </section>

      <Documentation />
      <Features />
      <Footer />
    </div>
  )
}

export default App
