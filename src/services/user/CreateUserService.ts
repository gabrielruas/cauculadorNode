
interface UserRequest{
                      fullname_sender: string;
                      cpf_sender: string;
                      phone_sender: string;
                      email_sender: string;
                      address_sender: string;
                      cep_sender: string;
                      state_sender: string;
                      uf_sender: string;
                      city_sender: string;
                      neighborhood_sender: string;
                      street_sender: string;
                      number_sender: string;
                      complement_sender: string;
                      fullname_receiver: string;
                      cpf_receiver: string;
                      phone_receiver: string;
                      email_receiver: string;
                      address_receiver: string;
                      cep_receiver: string;
                      state_receiver: string;
                      uf_receiver: string;
                      city_receiver: string;
                      neighborhood_receiver: string;
                      street_receiver: string;
                      number_receiver: string;
                      complement_receiver: string;
                      weight: string;
                      height: string;
                      width: string;
                      length: string;
                      reverse: string;
                      ar: string;
                      own_hands: string;
                      information: string;
                      amount: string;
                      quantity: string;
                      description: string;
                      tracking_code: string;
  }
  
  class CreateUserService{
    async execute({
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
      }: UserRequest){
  
      console.log(fullname_sender);
  
      return { name: fullname_sender }
    }
  }
  
  export { CreateUserService }