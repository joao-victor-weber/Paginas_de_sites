const db=require('./models');
(async (ev,ev_des) => {
    const Eventos=require('./models/eventos')
    const novoEvento=await db.Eventos.create({
        ev_nome:ev,
        ev_desc:ev_des
    })
})()
