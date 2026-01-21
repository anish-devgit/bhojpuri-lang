import click
from bhoj.parser import get_parser
from bhoj.interpreter import execute
from bhoj.transpiler import transpile

@click.group()
def main():
    """BhojpuriLang CLI"""
    pass

@main.command()
@click.argument('script', type=click.File('r'))
def run(script):
    """Run a Bhojpuri script"""
    code = script.read()
    parser = get_parser()
    tree = parser.parse(code)
    execute(tree)

@main.command()
@click.argument('script', type=click.File('r'))
def compile(script):
    """Transpile to Python"""
    code = script.read()
    parser = get_parser()
    tree = parser.parse(code)
    py_code = transpile(tree)
    print(py_code)

@main.command()
def repl():
    """Start REPL"""
    print("BhojpuriLang REPL (Ctrl+C to exit)")
    parser = get_parser()
    while True:
        try:
            text = input(">>> ")
            if not text: continue
            tree = parser.parse(text)
            execute(tree)
        except Exception as e:
            print(f"Error: {e}")

if __name__ == '__main__':
    main()
