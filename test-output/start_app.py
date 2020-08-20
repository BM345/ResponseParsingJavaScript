from bottle import route, run, template, static_file, request, response


@route("/<fileName:path>")
def get_static_file(fileName):
    return static_file(fileName, root="")


run(host="localhost", port="8080")
