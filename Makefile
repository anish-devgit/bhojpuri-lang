.PHONY: install test run docker clean

install:
	pip install -r requirements.txt
	pip install -e .

test:
	pytest -v

run:
	bhoj run examples/01_hello.bhoj

docker:
	docker build -t bhojpurilang .

clean:
	rm -rf build dist *.egg-info __pycache__ .pytest_cache
