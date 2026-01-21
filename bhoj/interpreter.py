from lark.visitors import Interpreter
from lark import Token

class BhojpuriExec(Interpreter):
    def __init__(self):
        self.vars = {}

    def start(self, tree):
        for child in tree.children:
            self.visit(child)

    def print_stmt(self, tree):
        val = self.evaluate(tree.children[0])
        print(val)

    def assign_stmt(self, tree):
        name = tree.children[0].value
        val = self.evaluate(tree.children[1])
        self.vars[name] = val

    def block(self, tree):
        for stmt in tree.children:
            self.visit(stmt)

    def if_stmt(self, tree):
        condition = self.evaluate(tree.children[0])
        if condition:
            self.visit(tree.children[1]) # True block
        elif len(tree.children) > 2:
            self.visit(tree.children[2]) # False block

    def while_stmt(self, tree):
        condition_node = tree.children[0]
        body_node = tree.children[1]
        while self.evaluate(condition_node):
            self.visit(body_node)

    def evaluate(self, node):
        if isinstance(node, Token):
            return node.value

        if node.data == 'number':
            return float(node.children[0].value)
        if node.data == 'string':
            return node.children[0].value[1:-1]
        if node.data == 'true_val':
            return True
        if node.data == 'false_val':
            return False
        if node.data == 'var':
            name = node.children[0].value
            if name not in self.vars:
                raise ValueError(f"Unknown bhai: {name}")
            return self.vars[name]
        
        if node.data in ('comparison', 'term', 'product'):
            left = self.evaluate(node.children[0])
            for i in range(1, len(node.children), 2):
                op_node = node.children[i]
                right = self.evaluate(node.children[i+1])
                
                op_type = op_node.data
                
                if op_type == 'gt': left = left > right
                elif op_type == 'eq': left = left == right
                elif op_type == 'ge': left = left >= right
                elif op_type == 'le': left = left <= right
                elif op_type == 'ne': left = left != right
                elif op_type == 'lt': left = left < right
                elif op_type == 'add': left = left + right
                elif op_type == 'sub': left = left - right
                elif op_type == 'mul': left = left * right
                elif op_type == 'div': left = left / right
                
            return left
        
        return 0

def execute(tree):
    interpreter = BhojpuriExec()
    interpreter.visit(tree)
