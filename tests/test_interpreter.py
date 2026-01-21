from bhoj.parser import get_parser
from bhoj.interpreter import execute
import sys
from io import StringIO
import pytest

def run_code(code):
    parser = get_parser()
    tree = parser.parse(code)
    
    # Capture stdout
    capturedOutput = StringIO()
    sys.stdout = capturedOutput
    execute(tree)
    sys.stdout = sys.__stdout__
    return capturedOutput.getvalue().strip()

def test_hello():
    assert run_code('bola "Hi"') == 'Hi'

def test_math():
    assert run_code('bola 5 + 5') == '10.0'

def test_logic():
    code = """
    bhai x = 10
    agar x bada bate 5 tab
        bola "Big"
    bas kar
    """
    assert run_code(code) == 'Big'

def test_loop():
    code = """
    bhai i = 0
    jab tak i < 3 tab
        bola i
        bhai i = i + 1
    bas kar
    """
    # math logic floats: 0.0\n1.0\n2.0
    output = run_code(code).split('\n')
    assert len(output) == 3
    assert output[0] == '0.0'
