from bhoj.parser import get_parser
from bhoj.transpiler import transpile

def get_py(code):
    parser = get_parser()
    tree = parser.parse(code)
    return transpile(tree)

def test_transpile_print():
    py = get_py('bola "Hello"')
    assert 'print("Hello")' in py

def test_transpile_if():
    py = get_py('agar x > 5 tab bola "Yes" bas kar')
    assert 'if (x > 5.0):' in py or 'if (x > 5):' in py
