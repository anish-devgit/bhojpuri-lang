# BhojpuriLang 🚀
> **Programming ab Bhojpuri mein!** (Programming now in Bhojpuri!)

![BhojpuriLang Banner](https://img.shields.io/badge/Made%20in-Bharat-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Stable-green?style=for-the-badge)

**BhojpuriLang** is a fun, toy programming language that lets you write code using **Bhojpuri** keywords. It is purely logic-based, highly customizable, and runs entirely in the browser using [Pyodide](https://pyodide.org/).

**[Try the Playground Live!](http://bhojpurilang.vercel.app)** *(Replace with your actual URL)*

---

## ✨ Features
- **Native Bhojpuri Syntax**: Write `agar`, `jab tak`, `bola` instead of `if`, `while`, `print`.
- **Zero Install**: Runs directly in the browser.
- **Python Compatible**: Built on top of Python, so it has powerful logic capabilities.
- **Fun Error Messages**: Get scolded in Bhojpuri if you make a mistake! (`galat ba bhai...`)

## 📦 Installation

To run BhojpuriLang locally or use the CLI:

```bash
# Clone the repository
git clone https://github.com/anish-devgit/bhojpurilang.git

# Navigate to the directory
cd bhojpurilang

# Install dependencies
pip install -r requirements.txt
```

## 🚀 Usage

### Interactive Shell (Repl)
```bash
python -m bhoj
```

### Run a File
```bash
python -m bhoj examples/01_hello.bhoj
```

## 📝 Syntax Cheat Sheet

| Keyword | English/Python | Example |
|:---|:---|:---|
| `bhai` | Variable | `bhai x = 10` |
| `bola` | Print | `bola "Namaste World"` |
| `agar` | If | `agar x > 5 tab` |
| `nahi ta` | Else | `nahi ta` |
| `jab tak` | While | `jab tak x < 10 tab` |
| `bas kar` | Break | `bas kar` |
| `sahi` | True | `bhai flag = sahi` |
| `galat` | False | `bhai flag = galat` |

## 🛠️ Development

### Project Structure
- `bhoj/` - Core language implementation (Lexer, Parser, Interpreter).
- `playground/` - The React-based web IDE.
- `examples/` - Sample `.bhoj` programs.
- `tests/` - Unit tests.

### Running the Web Playground
```bash
cd playground
npm install
npm run dev
```

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.
1. Fork the repo.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---
Crafted with ❤️ by **[@anish-devgit](https://github.com/anish-devgit)**
