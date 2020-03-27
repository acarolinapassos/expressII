const homeController ={
    index:(req,res) => {
        let servicos = [{nome: 'Desenvolvimento Web', imagem: '/imagens/undraw_dev_focus.svg'},
        {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'},
        {nome: 'Consultoria UX', imagem: '/imagens/undraw_mobile_apps.svg'}
    ];
        res.render('index',{title: "home", listaServicos: servicos});
        
    
    },
    newsletter:(req,res) =>{
    let {nome,email}=req.body;
    res.render("newsletter",{nome,email,title:"newsletter"})

    }
};

module.exports = homeController;