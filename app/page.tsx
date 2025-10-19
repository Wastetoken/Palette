"use client"

import { useState, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Palette, Copy, Check, Sparkles, Zap, Flame, Droplet, Sun, Moon, Star, Cpu, Heart, Eye, Music, ClipboardCopy } from 'lucide-react'

interface ColorPalette {
  name: string
  primary: string
  secondary: string
  tertiary: string
  text: string
  accent: string
  category: string
  icon: any
}

const generateDarkPalettes = (): ColorPalette[] => {
  const palettes: ColorPalette[] = []
  
  const vibrantColors = [
    { name: "Electric Blue", hex: "#00d4ff", cat: "Cool", icon: Zap },
    { name: "Cyber Purple", hex: "#9d4edd", cat: "Cool", icon: Cpu },
    { name: "Neon Magenta", hex: "#ff006e", cat: "Warm", icon: Heart },
    { name: "Plasma Pink", hex: "#ff0080", cat: "Warm", icon: Sparkles },
    { name: "Hot Pink", hex: "#ff1493", cat: "Warm", icon: Flame },
    { name: "Deep Pink", hex: "#ff10f0", cat: "Warm", icon: Star },
    { name: "Violet Pulse", hex: "#8b00ff", cat: "Cool", icon: Zap },
    { name: "Royal Purple", hex: "#7209b7", cat: "Cool", icon: Cpu },
    { name: "Indigo Bright", hex: "#4361ee", cat: "Cool", icon: Eye },
    { name: "Azure Glow", hex: "#4cc9f0", cat: "Cool", icon: Droplet },
    { name: "Cyan Burst", hex: "#00ffff", cat: "Cool", icon: Zap },
    { name: "Aqua Neon", hex: "#00ffc8", cat: "Cool", icon: Droplet },
    { name: "Mint Electric", hex: "#00ff9f", cat: "Cool", icon: Sparkles },
    { name: "Matrix Green", hex: "#00ff41", cat: "Cool", icon: Cpu },
    { name: "Lime Shock", hex: "#39ff14", cat: "Cool", icon: Zap },
    { name: "Chartreuse", hex: "#7fff00", cat: "Cool", icon: Flame },
    { name: "Yellow Flash", hex: "#ffff00", cat: "Warm", icon: Sun },
    { name: "Gold Lux", hex: "#ffd700", cat: "Warm", icon: Star },
    { name: "Amber Bright", hex: "#ffbf00", cat: "Warm", icon: Sun },
    { name: "Orange Burst", hex: "#ff9500", cat: "Warm", icon: Flame },
    { name: "Ember Glow", hex: "#ff6b35", cat: "Warm", icon: Flame },
    { name: "Coral Neon", hex: "#ff7f50", cat: "Warm", icon: Heart },
    { name: "Sunset Orange", hex: "#ff4500", cat: "Warm", icon: Sun },
    { name: "Crimson Pulse", hex: "#dc143c", cat: "Warm", icon: Heart },
    { name: "Ruby Red", hex: "#ff073a", cat: "Warm", icon: Star },
    { name: "Scarlet Bright", hex: "#ff2400", cat: "Warm", icon: Flame },
    { name: "Rose Neon", hex: "#ff007f", cat: "Warm", icon: Heart },
    { name: "Fuchsia Shock", hex: "#ff00ff", cat: "Warm", icon: Sparkles },
  ]

  const blackBases = [
    { black: "#000000", dark: "#0a0a0a", medium: "#1a1a1a", light: "#8a8a8a", name: "Pure Black" },
    { black: "#050505", dark: "#0f0f0f", medium: "#1f1f1f", light: "#8f8f8f", name: "Carbon Black" },
    { black: "#0a0a0a", dark: "#141414", medium: "#242424", light: "#949494", name: "Void Black" },
    { black: "#0d0d0d", dark: "#171717", medium: "#272727", light: "#979797", name: "Obsidian" },
    { black: "#080808", dark: "#121212", medium: "#222222", light: "#929292", name: "Midnight" },
  ]

  const coolBlueTints = [
    { black: "#08080f", dark: "#10101f", medium: "#202030", light: "#8888a0", name: "Blue Shadow" },
    { black: "#0a0a12", dark: "#141424", medium: "#242438", light: "#8a8aa8", name: "Deep Space" },
    { black: "#080a0f", dark: "#10152a", medium: "#1f2640", light: "#888fa8", name: "Navy Depth" },
    { black: "#0a0d14", dark: "#141a28", medium: "#24303c", light: "#8a97a4", name: "Storm Blue" },
    { black: "#08090e", dark: "#0f1420", medium: "#1e2838", light: "#88919c", name: "Twilight" },
  ]

  const warmTints = [
    { black: "#0f0808", dark: "#1f1010", medium: "#301f1f", light: "#a08888", name: "Ember Base" },
    { black: "#120a08", dark: "#241410", medium: "#382820", light: "#a89488", name: "Charcoal Warm" },
    { black: "#0f0a0a", dark: "#1f1414", medium: "#302424", light: "#a08a8a", name: "Warm Shadow" },
    { black: "#140d08", dark: "#281a10", medium: "#3c2a1f", light: "#a89788", name: "Coffee Dark" },
    { black: "#0f080a", dark: "#1f1014", medium: "#301f24", light: "#a0888a", name: "Plum Shadow" },
  ]

  const purpleTints = [
    { black: "#0d080f", dark: "#1a101f", medium: "#2d1f30", light: "#9888a0", name: "Purple Haze" },
    { black: "#0f0a12", dark: "#1f1424", medium: "#2f2438", light: "#a08aa8", name: "Violet Night" },
    { black: "#0a080f", dark: "#14101f", medium: "#281f30", light: "#9488a0", name: "Amethyst" },
    { black: "#100a14", dark: "#201428", medium: "#30243c", light: "#a28aa4", name: "Deep Purple" },
  ]

  const greenTints = [
    { black: "#080f0a", dark: "#0f1f14", medium: "#1f3024", light: "#88a08a", name: "Forest Deep" },
    { black: "#0a120e", dark: "#142418", medium: "#24382c", light: "#8aa894", name: "Jungle Night" },
    { black: "#080f0c", dark: "#101f18", medium: "#1f3028", light: "#88a090", name: "Pine Shadow" },
    { black: "#0a140f", dark: "#14281e", medium: "#243c2d", light: "#8aa89a", name: "Emerald Base" },
  ]

  const allBases = [...blackBases, ...coolBlueTints, ...warmTints, ...purpleTints, ...greenTints]

  vibrantColors.forEach(color => {
    allBases.forEach(base => {
      palettes.push({
        name: `${color.name} on ${base.name}`,
        primary: base.black,
        secondary: base.dark,
        tertiary: base.medium,
        text: base.light,
        accent: color.hex,
        category: color.cat,
        icon: color.icon
      })
    })
  })

  const additionalHighlights = [
    { name: "Peach Glow", hex: "#ff9a76", cat: "Warm", icon: Sun },
    { name: "Lavender Bright", hex: "#b19cd9", cat: "Cool", icon: Sparkles },
    { name: "Sky Blue", hex: "#87ceeb", cat: "Cool", icon: Droplet },
    { name: "Mint Fresh", hex: "#98ff98", cat: "Cool", icon: Droplet },
    { name: "Lemon Bright", hex: "#fff44f", cat: "Warm", icon: Sun },
    { name: "Tangerine", hex: "#ffcc00", cat: "Warm", icon: Sun },
    { name: "Salmon Pink", hex: "#ff91a4", cat: "Warm", icon: Heart },
    { name: "Turquoise", hex: "#40e0d0", cat: "Cool", icon: Droplet },
    { name: "Orchid", hex: "#da70d6", cat: "Cool", icon: Sparkles },
    { name: "Spring Green", hex: "#00ff7f", cat: "Cool", icon: Sparkles },
    { name: "Deep Orange", hex: "#ff8c00", cat: "Warm", icon: Flame },
    { name: "Steel Blue", hex: "#4682b4", cat: "Cool", icon: Eye },
    { name: "Crimson", hex: "#e91e63", cat: "Warm", icon: Heart },
    { name: "Teal Bright", hex: "#00bcd4", cat: "Cool", icon: Droplet },
    { name: "Lime", hex: "#cddc39", cat: "Cool", icon: Zap },
  ]

  additionalHighlights.forEach(color => {
    blackBases.slice(0, 3).forEach(base => {
      palettes.push({
        name: `${color.name} on ${base.name}`,
        primary: base.black,
        secondary: base.dark,
        tertiary: base.medium,
        text: base.light,
        accent: color.hex,
        category: color.cat,
        icon: color.icon
      })
    })
  })

  const pastels = [
    { name: "Soft Coral", hex: "#ff9999", cat: "Warm", icon: Heart },
    { name: "Baby Blue", hex: "#89cff0", cat: "Cool", icon: Droplet },
    { name: "Pale Purple", hex: "#c3b1e1", cat: "Cool", icon: Sparkles },
    { name: "Mint Pastel", hex: "#b2e0d4", cat: "Cool", icon: Droplet },
    { name: "Peach Soft", hex: "#ffdab9", cat: "Warm", icon: Sun },
    { name: "Rose Pastel", hex: "#ffc0cb", cat: "Warm", icon: Heart },
    { name: "Periwinkle", hex: "#ccccff", cat: "Cool", icon: Star },
    { name: "Seafoam", hex: "#93e9be", cat: "Cool", icon: Droplet },
  ]

  pastels.forEach(color => {
    coolBlueTints.slice(0, 2).forEach(base => {
      palettes.push({
        name: `${color.name} on ${base.name}`,
        primary: base.black,
        secondary: base.dark,
        tertiary: base.medium,
        text: base.light,
        accent: color.hex,
        category: color.cat,
        icon: color.icon
      })
    })
  })

  const metallics = [
    { name: "Chrome Silver", hex: "#c0c0c0", cat: "Cool", icon: Star },
    { name: "Platinum", hex: "#e5e4e2", cat: "Cool", icon: Sparkles },
    { name: "Bronze", hex: "#cd7f32", cat: "Warm", icon: Sun },
    { name: "Copper", hex: "#b87333", cat: "Warm", icon: Flame },
    { name: "Steel", hex: "#b0c4de", cat: "Cool", icon: Zap },
  ]

  metallics.forEach(color => {
    allBases.slice(0, 4).forEach(base => {
      palettes.push({
        name: `${color.name} on ${base.name}`,
        primary: base.black,
        secondary: base.dark,
        tertiary: base.medium,
        text: base.light,
        accent: color.hex,
        category: color.cat,
        icon: color.icon
      })
    })
  })

  return palettes
}

const generateLightPalettes = (): ColorPalette[] => {
  const palettes: ColorPalette[] = []
  
  const accentColors = [
    { name: "Ocean Blue", hex: "#0066cc", cat: "Cool", icon: Droplet },
    { name: "Deep Purple", hex: "#6b3fa0", cat: "Cool", icon: Cpu },
    { name: "Ruby Red", hex: "#c41e3a", cat: "Warm", icon: Heart },
    { name: "Rose Pink", hex: "#d946a1", cat: "Warm", icon: Sparkles },
    { name: "Crimson", hex: "#b91c50", cat: "Warm", icon: Flame },
    { name: "Magenta Deep", hex: "#a0208f", cat: "Warm", icon: Star },
    { name: "Violet Deep", hex: "#6b00b3", cat: "Cool", icon: Zap },
    { name: "Royal Indigo", hex: "#4b0082", cat: "Cool", icon: Cpu },
    { name: "Sapphire", hex: "#0f52ba", cat: "Cool", icon: Eye },
    { name: "Teal Deep", hex: "#008b8b", cat: "Cool", icon: Droplet },
    { name: "Cyan Deep", hex: "#008b9c", cat: "Cool", icon: Zap },
    { name: "Aqua Marine", hex: "#00838f", cat: "Cool", icon: Droplet },
    { name: "Forest Green", hex: "#228b22", cat: "Cool", icon: Sparkles },
    { name: "Emerald", hex: "#00863f", cat: "Cool", icon: Cpu },
    { name: "Lime Green", hex: "#65b32e", cat: "Cool", icon: Zap },
    { name: "Olive", hex: "#7c9d3b", cat: "Cool", icon: Flame },
    { name: "Amber Gold", hex: "#d9a21b", cat: "Warm", icon: Sun },
    { name: "Golden", hex: "#c5a028", cat: "Warm", icon: Star },
    { name: "Orange Deep", hex: "#e67e22", cat: "Warm", icon: Flame },
    { name: "Burnt Orange", hex: "#cc5500", cat: "Warm", icon: Flame },
    { name: "Rust", hex: "#b7410e", cat: "Warm", icon: Flame },
    { name: "Coral", hex: "#d95f59", cat: "Warm", icon: Heart },
    { name: "Brick Red", hex: "#b82e2e", cat: "Warm", icon: Sun },
    { name: "Burgundy", hex: "#8b2638", cat: "Warm", icon: Heart },
    { name: "Maroon", hex: "#800020", cat: "Warm", icon: Star },
    { name: "Cherry", hex: "#9e1b32", cat: "Warm", icon: Flame },
    { name: "Plum", hex: "#8b4789", cat: "Warm", icon: Heart },
    { name: "Orchid Deep", hex: "#9e4f99", cat: "Warm", icon: Sparkles },
  ]

  const whiteBases = [
    { white: "#ffffff", light: "#f5f5f5", medium: "#e0e0e0", dark: "#404040", name: "Pure White" },
    { white: "#fafafa", light: "#f0f0f0", medium: "#e5e5e5", dark: "#454545", name: "Snow White" },
    { white: "#f8f8f8", light: "#eeeeee", medium: "#e3e3e3", dark: "#484848", name: "Bright White" },
    { white: "#fcfcfc", light: "#f2f2f2", medium: "#e7e7e7", dark: "#424242", name: "Pearl" },
    { white: "#f9f9f9", light: "#efefef", medium: "#e4e4e4", dark: "#464646", name: "Ivory" },
  ]

  const coolBlueTints = [
    { white: "#f7f8fc", light: "#eef1f9", medium: "#dce2f0", dark: "#3e4a5c", name: "Sky Light" },
    { white: "#f6f7fb", light: "#eceff8", medium: "#dae0f2", dark: "#3c4858", name: "Ice Blue" },
    { white: "#f5f7fa", light: "#ebf0f7", medium: "#d9e3f0", dark: "#3a4654", name: "Frost" },
    { white: "#f7f8fa", light: "#edf0f5", medium: "#dbe2ea", dark: "#3e4a52", name: "Cloud" },
    { white: "#f6f8fb", light: "#ecf1f8", medium: "#dae4f2", dark: "#3c485a", name: "Arctic" },
  ]

  const warmTints = [
    { white: "#fef8f5", light: "#fcf0ea", medium: "#f9e2d5", dark: "#5c4a3e", name: "Cream" },
    { white: "#fef9f6", light: "#fcf2ec", medium: "#f9e5da", dark: "#5a4840", name: "Sand" },
    { white: "#fffaf6", light: "#fef3ec", medium: "#fce7da", dark: "#584638", name: "Wheat" },
    { white: "#fef7f3", light: "#fcefe7", medium: "#f9e0d0", dark: "#5c483c", name: "Beige" },
    { white: "#fff8f5", light: "#fef0ea", medium: "#fce2d5", dark: "#5a463e", name: "Linen" },
  ]

  const purpleTints = [
    { white: "#faf7fc", light: "#f5eef9", medium: "#e8dcf0", dark: "#4a3e5c", name: "Lavender Light" },
    { white: "#f9f6fb", light: "#f3ecf8", medium: "#e6d9f2", dark: "#483c5a", name: "Lilac" },
    { white: "#faf8fc", light: "#f5f0f9", medium: "#e8e0f0", dark: "#4a3e58", name: "Mauve" },
    { white: "#f8f6fb", light: "#f2ecf8", medium: "#e5d9f2", dark: "#463c5a", name: "Orchid Light" },
  ]

  const greenTints = [
    { white: "#f7faf8", light: "#eff5f1", medium: "#dfeae3", dark: "#3e5248", name: "Mint Light" },
    { white: "#f6fbf8", light: "#ecf7f1", medium: "#daeee3", dark: "#3c5446", name: "Sage" },
    { white: "#f7fbf9", light: "#eff6f2", medium: "#dfece5", dark: "#3e524a", name: "Seafoam Light" },
    { white: "#f6faf8", light: "#ecf5f0", medium: "#daeae0", dark: "#3c5048", name: "Eucalyptus" },
  ]

  const allBases = [...whiteBases, ...coolBlueTints, ...warmTints, ...purpleTints, ...greenTints]

  accentColors.forEach(color => {
    allBases.forEach(base => {
      palettes.push({
        name: `${color.name} on ${base.name}`,
        primary: base.white,
        secondary: base.light,
        tertiary: base.medium,
        text: base.dark,
        accent: color.hex,
        category: color.cat,
        icon: color.icon
      })
    })
  })

  const additionalAccents = [
    { name: "Slate Blue", hex: "#5b7c99", cat: "Cool", icon: Eye },
    { name: "Teal", hex: "#14828c", cat: "Cool", icon: Droplet },
    { name: "Pine", hex: "#2d6943", cat: "Cool", icon: Sparkles },
    { name: "Amber", hex: "#c79100", cat: "Warm", icon: Sun },
    { name: "Terracotta", hex: "#b8512e", cat: "Warm", icon: Flame },
    { name: "Rose", hex: "#b84860", cat: "Warm", icon: Heart },
    { name: "Indigo", hex: "#5b4fb3", cat: "Cool", icon: Star },
    { name: "Navy", hex: "#1e3a8a", cat: "Cool", icon: Droplet },
  ]

  additionalAccents.forEach(color => {
    whiteBases.slice(0, 3).forEach(base => {
      palettes.push({
        name: `${color.name} on ${base.name}`,
        primary: base.white,
        secondary: base.light,
        tertiary: base.medium,
        text: base.dark,
        accent: color.hex,
        category: color.cat,
        icon: color.icon
      })
    })
  })

  const earthTones = [
    { name: "Sienna", hex: "#a0522d", cat: "Warm", icon: Flame },
    { name: "Umber", hex: "#6b4423", cat: "Warm", icon: Sun },
    { name: "Moss", hex: "#5a7247", cat: "Cool", icon: Sparkles },
    { name: "Clay", hex: "#9e5b40", cat: "Warm", icon: Flame },
  ]

  earthTones.forEach(color => {
    warmTints.slice(0, 2).forEach(base => {
      palettes.push({
        name: `${color.name} on ${base.name}`,
        primary: base.white,
        secondary: base.light,
        tertiary: base.medium,
        text: base.dark,
        accent: color.hex,
        category: color.cat,
        icon: color.icon
      })
    })
  })

  return palettes
}

export default function Home() {
  const darkPalettes = useMemo(() => generateDarkPalettes(), [])
  const lightPalettes = useMemo(() => generateLightPalettes(), [])
  const [mode, setMode] = useState<"dark" | "light">("dark")
  const allPalettes = mode === "dark" ? darkPalettes : lightPalettes
  const [activePalette, setActivePalette] = useState<ColorPalette>(darkPalettes[0])
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const [copiedPaletteName, setCopiedPaletteName] = useState<string | null>(null)

  const [categoryFilter, setCategoryFilter] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState("")

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark"
    setMode(newMode)
    setActivePalette(newMode === "dark" ? darkPalettes[0] : lightPalettes[0])
    setCategoryFilter("All")
    setSearchTerm("")
  }

  const filteredPalettes = useMemo(() => {
    return allPalettes.filter(palette => {
      const matchesCategory = categoryFilter === "All" || palette.category === categoryFilter
      const matchesSearch = palette.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [allPalettes, categoryFilter, searchTerm])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleCopyPalette = (e: React.MouseEvent, palette: ColorPalette) => {
    e.stopPropagation() // Prevent the Card's onClick from firing
    const formattedPalette = `Primary: ${palette.primary}\nSecondary: ${palette.secondary}\nTertiary: ${palette.tertiary}\nText: ${palette.text}\nAccent: ${palette.accent}`
    copyToClipboard(formattedPalette)
    setCopiedPaletteName(palette.name)
    setTimeout(() => setCopiedPaletteName(null), 2000)
  }

  const IconComponent = activePalette.icon

  return (
    <div 
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: activePalette.primary }}
    >
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconComponent size={48} style={{ color: activePalette.accent }} />
            <h1 
              className="text-6xl font-bold"
              style={{ color: activePalette.text }}
            >
              {mode === "dark" ? "Dark" : "Light"} Palette Studio
            </h1>
          </div>
          <p 
            className="text-xl mb-2"
            style={{ color: mode === "dark" ? activePalette.tertiary : activePalette.text, opacity: 0.7 }}
          >
            {allPalettes.length.toLocaleString()}+ Premium {mode === "dark" ? "Dark" : "Light"} Theme Combinations
          </p>
          <Badge 
            className="text-lg px-4 py-1"
            style={{ 
              backgroundColor: activePalette.accent,
              color: mode === "dark" ? activePalette.primary : "#ffffff",
              boxShadow: `0 0 20px ${activePalette.accent}60`
            }}
          >
            Currently Viewing: {activePalette.name}
          </Badge>
        </header>

        <div 
          className="sticky top-4 z-10 rounded-xl p-6 mb-8 border-2"
          style={{
            backgroundColor: activePalette.secondary,
            borderColor: activePalette.accent,
            boxShadow: `0 0 40px ${activePalette.accent}40, 0 10px 30px ${activePalette.primary}80`
          }}
        >
          <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
            <div className="flex gap-2">
              {["All", "Cool", "Warm"].map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className="px-6 py-2 rounded-lg font-medium transition-all duration-200"
                  style={{
                    backgroundColor: categoryFilter === cat ? activePalette.accent : activePalette.tertiary,
                    color: categoryFilter === cat ? (mode === "dark" ? activePalette.primary : "#ffffff") : activePalette.text,
                    boxShadow: categoryFilter === cat ? `0 0 20px ${activePalette.accent}60` : 'none'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search palettes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 outline-none transition-all duration-200"
              style={{
                backgroundColor: activePalette.primary,
                color: activePalette.text,
                borderColor: activePalette.tertiary,
                minWidth: '300px'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = activePalette.accent
                e.currentTarget.style.boxShadow = `0 0 15px ${activePalette.accent}40`
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = activePalette.tertiary
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
            <p 
              className="text-sm font-medium"
              style={{ color: activePalette.text }}
            >
              Showing {filteredPalettes.length.toLocaleString()} palettes
            </p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={toggleMode}
              className="px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-3"
              style={{
                backgroundColor: activePalette.accent,
                color: mode === "dark" ? activePalette.primary : "#ffffff",
                boxShadow: `0 0 30px ${activePalette.accent}70, 0 4px 15px ${activePalette.primary}80`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px ${activePalette.accent}90, 0 6px 20px ${activePalette.primary}90`
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${activePalette.accent}70, 0 4px 15px ${activePalette.primary}80`
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {mode === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              Switch to {mode === "dark" ? "Light" : "Dark"} Mode
            </button>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-12">
          {filteredPalettes.map((palette, index) => {
            const PaletteIcon = palette.icon
            return (
              <Card
                key={`${palette.name}-${index}`}
                className="cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden border-2"
                style={{
                  backgroundColor: palette.secondary,
                  borderColor: activePalette.name === palette.name ? palette.accent : palette.tertiary,
                  boxShadow: activePalette.name === palette.name 
                    ? `0 0 30px ${palette.accent}50, 0 8px 30px ${palette.primary}80`
                    : `0 4px 15px ${palette.primary}60`
                }}
                // onClick={() => setActivePalette(palette)}
                // Removed onClick from Card to allow copy button to handle click

              >
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <PaletteIcon size={20} style={{ color: palette.accent }} />
                    <h3 
                      className="text-base font-bold"
                      style={{ color: palette.text }}
                    >
                      {palette.name}
                    </h3>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    <div 
                      className="w-full h-10 rounded-l"
                      style={{ backgroundColor: palette.primary }}
                      title={palette.primary}
                    />
                    <div 
                      className="w-full h-10"
                      style={{ backgroundColor: palette.secondary }}
                      title={palette.secondary}
                    />
                    <div 
                      className="w-full h-10"
                      style={{ backgroundColor: palette.tertiary }}
                      title={palette.tertiary}
                    />
                    <div 
                      className="w-full h-10"
                      style={{ backgroundColor: palette.text }}
                      title={palette.text}
                    />
                    <div 
                      className="w-full h-10 rounded-r"
                      style={{ 
                        backgroundColor: palette.accent,
                        boxShadow: `0 0 15px ${palette.accent}70`
                      }}
                      title={palette.accent}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    {activePalette.name === palette.name && (
                      <Badge 
                        className="justify-center text-xs"
                        style={{ 
                          backgroundColor: palette.accent,
                          color: mode === "dark" ? palette.primary : "#ffffff",
                          boxShadow: `0 0 10px ${palette.accent}60`
                        }}
                      >
                        Active
                      </Badge>
                    )}
                    <button
                      onClick={(e) => handleCopyPalette(e, palette)}
                      className="flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium transition-colors duration-200"
                      style={{
                        backgroundColor: copiedPaletteName === palette.name ? palette.accent : palette.tertiary,
                        color: copiedPaletteName === palette.name ? (mode === "dark" ? palette.primary : "#ffffff") : palette.text,
                        boxShadow: copiedPaletteName === palette.name ? `0 0 10px ${palette.accent}60` : 'none'
                      }}
                    >
                      {copiedPaletteName === palette.name ? <Check size={14} /> : <ClipboardCopy size={14} />}
                      {copiedPaletteName === palette.name ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div 
          className="rounded-xl p-8 mb-12 border-2 shadow-2xl"
          style={{
            backgroundColor: activePalette.secondary,
            borderColor: activePalette.tertiary,
            boxShadow: mode === "dark" 
              ? `0 20px 60px ${activePalette.primary}90, inset 0 1px 0 ${activePalette.tertiary}20`
              : `0 20px 60px ${activePalette.primary}40, inset 0 1px 0 ${activePalette.tertiary}60`
          }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ color: activePalette.text }}
          >
            Color Codes - {activePalette.name}
          </h2>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { name: 'Primary', color: activePalette.primary },
              { name: 'Secondary', color: activePalette.secondary },
              { name: 'Tertiary', color: activePalette.tertiary },
              { name: 'Text', color: activePalette.text },
              { name: 'Accent', color: activePalette.accent }
            ].map(({ name, color }) => (
              <div
                key={name}
                className="rounded-lg p-4 border transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: activePalette.primary,
                  borderColor: activePalette.tertiary,
                  boxShadow: name === 'Accent' 
                    ? `0 0 20px ${color}60, 0 4px 10px ${activePalette.primary}80`
                    : `0 4px 10px ${activePalette.primary}80`
                }}
              >
                <div 
                  className="w-full h-20 rounded mb-3 border"
                  style={{ 
                    backgroundColor: color,
                    borderColor: activePalette.tertiary,
                    boxShadow: name === 'Accent' ? `0 0 15px ${color}80` : 'none'
                  }}
                />
                <p 
                  className="text-sm font-medium mb-2"
                  style={{ color: activePalette.text }}
                >
                  {name}
                </p>
                <button
                  onClick={() => copyToClipboard(color)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded text-sm font-mono transition-all duration-200"
                  style={{
                    backgroundColor: activePalette.secondary,
                    color: mode === "dark" ? "#ffffff" : "#000000",
                    border: `1px solid ${activePalette.tertiary}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = activePalette.tertiary
                    e.currentTarget.style.color = mode === "dark" ? "#ffffff" : "#000000"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = activePalette.secondary
                    e.currentTarget.style.color = mode === "dark" ? "#ffffff" : "#000000"
                  }}
                >
                  <span>{color}</span>
                  {copiedColor === color ? (
                    <Check size={14} style={{ color: activePalette.accent }} />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="rounded-xl p-8 border-2"
          style={{
            backgroundColor: activePalette.secondary,
            borderColor: activePalette.tertiary,
            boxShadow: mode === "dark" 
              ? `0 20px 60px ${activePalette.primary}90, inset 0 1px 0 ${activePalette.tertiary}20`
              : `0 20px 60px ${activePalette.primary}40, inset 0 1px 0 ${activePalette.tertiary}60`
          }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ color: activePalette.text }}
          >
            Component Showcase
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div 
              className="rounded-lg p-6 border"
              style={{
                backgroundColor: activePalette.primary,
                borderColor: activePalette.tertiary,
                boxShadow: `0 4px 15px ${activePalette.primary}80`
              }}
            >
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: activePalette.text }}
              >
                Buttons & Actions
              </h3>
              <div className="flex flex-wrap gap-3">
                <button 
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-200"
                  style={{
                    backgroundColor: activePalette.accent,
                    color: mode === "dark" ? activePalette.primary : "#ffffff",
                    boxShadow: `0 0 20px ${activePalette.accent}60, 0 4px 10px ${activePalette.primary}60`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px ${activePalette.accent}80, 0 6px 20px ${activePalette.primary}80`
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${activePalette.accent}60, 0 4px 10px ${activePalette.primary}60`
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Primary Action
                </button>
                <button 
                  className="px-6 py-3 rounded-lg font-medium border-2 transition-all duration-200"
                  style={{
                    backgroundColor: 'transparent',
                    color: activePalette.text,
                    borderColor: activePalette.tertiary
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = activePalette.accent
                    e.currentTarget.style.backgroundColor = `${activePalette.accent}20`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = activePalette.tertiary
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  Secondary
                </button>
              </div>
            </div>

            <div 
              className="rounded-lg p-6 border"
              style={{
                backgroundColor: activePalette.primary,
                borderColor: activePalette.tertiary,
                boxShadow: `0 4px 15px ${activePalette.primary}80`
              }}
            >
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: activePalette.text }}
              >
                Status Badges
              </h3>
              <div className="flex flex-wrap gap-3">
                <span 
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: activePalette.accent,
                    color: mode === "dark" ? activePalette.primary : "#ffffff",
                    boxShadow: `0 0 15px ${activePalette.accent}50`
                  }}
                >
                  Active
                </span>
                <span 
                  className="px-4 py-2 rounded-full text-sm font-medium border"
                  style={{
                    backgroundColor: activePalette.secondary,
                    color: activePalette.text,
                    borderColor: activePalette.tertiary
                  }}
                >
                  Neutral
                </span>
              </div>
            </div>

            <div 
              className="rounded-lg p-6 border md:col-span-2"
              style={{
                backgroundColor: activePalette.primary,
                borderColor: activePalette.tertiary,
                boxShadow: `0 4px 15px ${activePalette.primary}80`
              }}
            >
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: activePalette.text }}
              >
                Layered Card Design
              </h3>
              <div 
                className="rounded-lg p-6 border-2 relative overflow-hidden"
                style={{
                  backgroundColor: activePalette.secondary,
                  borderColor: activePalette.accent,
                  boxShadow: mode === "dark"
                    ? `0 10px 40px ${activePalette.primary}80, 0 0 0 1px ${activePalette.accent}20, inset 0 1px 0 ${activePalette.accent}30`
                    : `0 10px 40px ${activePalette.primary}60, 0 0 0 1px ${activePalette.accent}40, inset 0 2px 0 ${activePalette.accent}20`
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${activePalette.accent}00, ${activePalette.accent}, ${activePalette.accent}00)`,
                    boxShadow: `0 0 20px ${activePalette.accent}80`
                  }}
                />
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center relative"
                    style={{
                      backgroundColor: activePalette.accent,
                      boxShadow: `0 0 20px ${activePalette.accent}60, 0 4px 15px ${activePalette.primary}40`
                    }}
                  >
                    <div 
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${activePalette.accent}00, ${activePalette.accent}40)`,
                      }}
                    />
                    <IconComponent size={24} style={{ color: mode === "dark" ? activePalette.primary : "#ffffff", position: 'relative', zIndex: 1 }} />
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="text-lg font-semibold mb-2"
                      style={{ color: activePalette.text }}
                    >
                      Premium Depth & Visual Hierarchy
                    </h4>
                    <p style={{ color: activePalette.text, opacity: 0.8 }}>
                      Layered shadows, gradient highlights, and accent borders create professional depth. 
                      The glowing top border and icon shadow demonstrate proper elevation and focus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
