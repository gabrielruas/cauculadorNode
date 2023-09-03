import {Request, response, Response} from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController{
  async handle(req: Request, res: Response){
    const { fullname_sender ,
      cpf_sender ,
     phone_sender ,
     email_sender ,
     address_sender ,
     cep_sender ,
     state_sender ,
     uf_sender ,
     city_sender ,
     neighborhood_sender ,
     street_sender ,
     number_sender ,
     complement_sender ,
     fullname_receiver ,
     cpf_receiver ,
     phone_receiver ,
     email_receiver ,
     address_receiver ,
     cep_receiver ,
     state_receiver ,
     uf_receiver ,
     city_receiver ,
     neighborhood_receiver,
     street_receiver ,
     number_receiver ,
     complement_receiver ,
     weight ,
     height ,
     width ,
     length ,
     reverse,
     ar ,
     own_hands ,
     information ,
     amount ,
     quantity ,
     description,
     tracking_code } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      fullname_sender ,
         cpf_sender ,
        phone_sender ,
        email_sender ,
        address_sender ,
        cep_sender ,
        state_sender ,
        uf_sender ,
        city_sender ,
        neighborhood_sender ,
        street_sender ,
        number_sender ,
        complement_sender ,
        fullname_receiver ,
        cpf_receiver ,
        phone_receiver ,
        email_receiver ,
        address_receiver ,
        cep_receiver ,
        state_receiver ,
        uf_receiver ,
        city_receiver ,
        neighborhood_receiver,
        street_receiver ,
        number_receiver ,
        complement_receiver ,
        weight ,
        height ,
        width ,
        length ,
        reverse,
        ar ,
        own_hands ,
        information ,
        amount ,
        quantity ,
        description,
        tracking_code

    });

    return res.json(user)
  }
}

export { CreateUserController }