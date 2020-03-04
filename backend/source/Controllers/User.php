<?php

namespace Source\Controllers;

use Source\Models\User;
use Source\Models\Validations;

require "../../vendor/autoload.php";
require "../Config.php";

switch ($_SERVER["REQUEST_METHOD"]) {
    case "POST":
        $data = json_decode(file_get_contents("php://input", false));

        if (!$data) {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array("response" => "Nenhum dado informado!"));
            exit;
        }

        $erros = array();

        if (!Validations::validationString($data->first_name)) {
            array_push($erros, "Nome informado inválido");
        }
        if (!Validations::validationString($data->last_name)) {
            array_push($erros, "Sobrenome informado inválido");
        }
        if (!Validations::validationEmail($data->email)) {
            array_push($erros, "Email informado inválido");
        }

        if (count($erros) > 0) {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array("response" => "Há campos inválidos no formulário", "fields" => $erros));
            exit;
        }

        $user = new User();
        $user->first_name = $data->first_name;
        $user->last_name = $data->last_name;
        $user->email = $data->email;
        $user->save();

        if ($user->fail()) {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("response" => "Falha na persistência do usuário no banco de dados"));
            exit;
        }

        header("HTTP/1.1 201 Created");
        echo json_encode(array("response" => "Usuário criado com sucesso!"));

        break;
    default;
        header("HTTP/1.1 401 Unauthorized");
        echo json_encode(array("response" => "Método não previsto na API"));
        break;
}
