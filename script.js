function verifica(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if(fano.value.lenght == 0 || fano.value > ano){
        alert('[ERRO] Verifiqueos dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var bolIdade = true
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/crianca_homem.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','imagens/jovem_homem.jpg')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src','imagens/adulto_homem.jpg')
            }else if(idade < 120){
                //idoso
                img.setAttribute('src','imagens/idoso_homem.jpg')
            }else{
                alert('[ERRO] Esta idade não existe.')
                bolIdade = false
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/crianca_mulher.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','imagens/jovem_mulher.jpg')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src','imagens/adulto_mulher.jpg')
            }else if(idade < 120){
                //idoso
                img.setAttribute('src','imagens/idosa_mulher.jpg')
            }else{
                alert('[ERRO] Esta idade não existe.')
                bolIdade = false
            }
        }

        res.style.textAlign = 'center'

        if (bolIdade == true){
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        }else{
            res.innerHTML = `Preencha os dados novamente.`
            fano.value = ''
        }

        img.style.padding = '10px'
        res.appendChild(img)


    }
}