import os
from lark import Lark

def get_parser():
    grammar_path = os.path.join(os.path.dirname(__file__), 'grammar.lark')
    with open(grammar_path, 'r') as f:
        grammar = f.read()
    return Lark(grammar, parser='lalr', propagate_positions=True)
