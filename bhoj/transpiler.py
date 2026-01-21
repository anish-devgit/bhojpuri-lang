from lark.visitors import Interpreter

class BhojpuriTranspiler(Interpreter):
    def __init__(self):
        self.code = []
        self.indent_level = 0

    def emit(self, line):
        self.code.append("    " * self.indent_level + line)

    def start(self, tree):
        self.emit("def main():")
        self.indent_level += 1
        for child in tree.children:
            self.visit(child)
        self.indent_level -= 1
        self.emit("\nif __name__ == '__main__':")
        self.emit("    main()")
        return "\n".join(self.code)

    def print_stmt(self, tree):
        val = self.transpile_expr(tree.children[0])
        self.emit(f"print({val})")

    def assign_stmt(self, tree):
        name = tree.children[0].value
        val = self.transpile_expr(tree.children[1])
        self.emit(f"{name} = {val}")

    def block(self, tree):
        for stmt in tree.children:
            self.visit(stmt)

    def if_stmt(self, tree):
        cond = self.transpile_expr(tree.children[0])
        self.emit(f"if {cond}:")
        self.indent_level += 1
        self.visit(tree.children[1])
        self.indent_level -= 1
        if len(tree.children) > 2:
            self.emit("else:")
            self.indent_level += 1
            self.visit(tree.children[2])
            self.indent_level -= 1

    def while_stmt(self, tree):
        cond = self.transpile_expr(tree.children[0])
        self.emit(f"while {cond}:")
        self.indent_level += 1
        self.visit(tree.children[1])
        self.indent_level -= 1

    def transpile_expr(self, node):
        if node.data == 'number':
            return node.children[0].value
        if node.data == 'string':
            return node.children[0].value
        if node.data == 'true_val':
            return "True"
        if node.data == 'false_val':
            return "False"
        if node.data == 'var':
            return node.children[0].value
            
        if node.data in ('comparison', 'term', 'product'):
            left = self.transpile_expr(node.children[0])
            check_idx = 1
            result = left
            while check_idx < len(node.children):
                op_node = node.children[check_idx]
                right = self.transpile_expr(node.children[check_idx+1])
                
                op_map = {
                    'gt': '>', 'lt': '<', 'eq': '==', 
                    'ge': '>=', 'le': '<=', 'ne': '!=',
                    'add': '+', 'sub': '-', 'mul': '*', 'div': '/'
                }
                op = op_map.get(op_node.data, '?')
                result = f"({result} {op} {right})"
                check_idx += 2
            return result
        return "None"

def transpile(tree):
    t = BhojpuriTranspiler()
    return t.start(tree)
