import { Container } from "react-bootstrap";
import { BodyContentArea, TopMenuArea } from "../components/styled.component";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import OffcanvasMenu from "../components/OffcanvasMenu";

const Home = () => {
  const [showOffcanvasMenu, setShowOffcanvasMenu] = useState(false);

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <OffcanvasMenu show={showOffcanvasMenu} onHide={() => setShowOffcanvasMenu(false)} />
      <TopMenuArea>
        <Container>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <MenuIcon
              size={24}
              style={{ cursor: "pointer" }}
              onClick={() => setShowOffcanvasMenu(true)}
            />
            <div>Home</div>
          </div>
          <div>Hello Witch Doctor !!!</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
        </Container>
      </TopMenuArea>
      <BodyContentArea>
        <Container>
          <p style={{ textAlign: "justify" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sint
            laboriosam officiis vero velit, aut perferendis inventore sunt
            provident impedit earum unde ipsum consequuntur quasi expedita
            repellendus! Ratione, rerum soluta! Quisquam saepe at reiciendis
            nulla ullam rerum, architecto sit nostrum. Alias iure nihil ea
            magnam ut omnis quam totam. Culpa illo autem voluptatum atque
            aliquid perspiciatis eligendi cum placeat reiciendis. Fugit cum sunt
            labore, est quia atque ipsam beatae quos modi earum repudiandae
            animi praesentium veritatis? Quis accusantium a cumque aut, tenetur
            vero, tempore nulla fuga rerum expedita maxime itaque. Animi
            repellendus officiis maiores blanditiis ipsa ad quos fuga. Harum,
            perspiciatis consequatur! Minima hic fugit molestias nulla dolores
            ut, provident illum esse illo ullam at placeat quae impedit adipisci
            obcaecati! Praesentium optio in sint recusandae itaque magnam.
            Nostrum est voluptates ea blanditiis, asperiores eum neque laborum
            doloribus praesentium eveniet dignissimos amet autem incidunt sequi
            numquam perferendis quis ducimus reprehenderit! Inventore? Dolore
            explicabo expedita officiis similique, voluptate ullam tenetur fuga
            laboriosam, veritatis incidunt perferendis molestias repudiandae
            perspiciatis. Debitis, mollitia sapiente? Quibusdam, nihil ipsam.
            Commodi laudantium suscipit porro eum dolore laborum ratione. Earum,
            ut, exercitationem illo, est recusandae dolores voluptates doloribus
            quod incidunt mollitia officiis. Asperiores illum doloribus
            accusantium necessitatibus itaque ipsum est, et maxime sapiente,
            ipsa ducimus velit. Ea, quidem commodi. Ab porro doloribus
            repudiandae beatae rerum accusamus atque quos in dolor
            exercitationem, blanditiis id sit asperiores magnam ducimus corrupti
            iure autem inventore perferendis suscipit ut maxime? Quos numquam
            nesciunt minima? At nihil quia qui corporis praesentium quo alias,
            ex unde, reprehenderit fugiat, autem distinctio debitis voluptas
            corrupti accusamus excepturi enim sequi quaerat cumque dolorum.
            Blanditiis possimus placeat quis dolorum velit? Repellendus
            consequatur nulla, velit quisquam eos nostrum ea optio porro ducimus
            commodi totam, nam reiciendis rerum, a cumque dolore! Maiores
            adipisci distinctio odit consequatur sequi beatae ipsum eos
            cupiditate doloremque. Tenetur pariatur blanditiis et a dolore
            deserunt quam at molestiae ratione accusamus sapiente tempore
            eveniet iste numquam adipisci exercitationem vitae, expedita, aut
            placeat aliquid laborum quaerat repellat esse voluptatibus.
            Provident. Corrupti amet, nam animi ratione facilis et iure
            reprehenderit tempora optio quibusdam beatae excepturi aliquam
            distinctio a mollitia? Distinctio quas asperiores dolorem porro
            harum cum eos accusantium velit autem facere! Corrupti nobis enim
            esse, commodi earum minima tenetur cum quam adipisci ullam beatae
            itaque aspernatur nihil quia quibusdam, soluta voluptatem dolores
            ducimus non voluptatum laudantium. Sapiente cum rerum nostrum
            tempora. Excepturi quas vero officia ipsa perferendis exercitationem
            voluptates? Necessitatibus autem nemo numquam impedit itaque, eum
            quidem tempora id ipsa minima, dolorum exercitationem mollitia
            consequuntur laudantium debitis neque sapiente aliquid tempore.
            Quisquam sit laudantium, aliquam fugiat mollitia voluptates enim
            quia vero adipisci ipsa eius ad ipsam iure possimus excepturi magni
            maiores eum ab. Ab repellat quod, nam dolorem eos id iste. At ea
            doloribus, quisquam facere inventore atque vel vero facilis itaque,
            officiis saepe natus officia modi omnis. Quos illo numquam autem?
            Totam dolor inventore alias repellendus nemo eligendi porro nostrum.
            Vel assumenda tempore, quia laboriosam dolorum quos. Illum
            cupiditate veritatis voluptates dignissimos, sit voluptatem minima
            obcaecati dolore quis, veniam excepturi laborum laudantium.
            Asperiores labore est ex consectetur atque illum dicta. Officia ut
            culpa consectetur esse quaerat tempora deleniti tempore saepe
            voluptatum eum, aperiam ipsa placeat error quae cupiditate rerum
            voluptate, laboriosam fuga quos natus? Voluptas modi ex voluptatum?
            Libero, explicabo. Accusamus quae nihil explicabo tenetur veritatis
            sit, molestias architecto natus, nobis itaque saepe reprehenderit
            doloremque consequatur corporis cumque quis. Cupiditate illo ipsam
            minima laboriosam alias modi cum ex hic. Deserunt? Mollitia
            voluptates asperiores possimus enim cum natus hic dolor. Repellat,
            consequatur libero, sit itaque esse placeat quam dolor architecto
            consequuntur provident dolores, atque non quibusdam numquam
            voluptatibus doloremque facere! Perferendis? Delectus, voluptatibus?
            Voluptate veritatis dolorem sequi, vero dignissimos cumque veniam
            vitae eos quos pariatur aperiam? Debitis iste quam accusantium
            soluta fugit atque. Omnis ullam alias soluta quos magni, quis
            temporibus! Minus corporis ex fuga molestiae placeat velit, dolor
            optio totam amet aliquam neque sunt, consectetur vel minima
            perferendis officia reiciendis eveniet ipsa, tempore itaque repellat
            voluptas suscipit! Sequi, alias suscipit. Assumenda sint,
            temporibus, id consequatur, reiciendis sequi hic ipsa ratione beatae
            aliquid voluptatibus eaque quam repudiandae dicta corrupti neque
            modi necessitatibus? Quisquam doloribus placeat alias soluta fuga,
            facere velit nemo. Assumenda non illum harum cum nisi, vero
            perferendis. Accusamus, asperiores laborum neque voluptate
            architecto inventore rerum dolorum, id, eius iste nostrum! Quos
            ratione vitae quis similique asperiores perspiciatis ex sit.
            Doloremque quis nam eligendi amet earum ratione nemo tempore ullam
            voluptatibus magnam, fugit a illo hic debitis nisi, asperiores
            nesciunt magni? Earum doloremque perspiciatis provident repellat.
            Animi illo odio vel! Quod veniam accusantium magnam ratione
            delectus, eligendi praesentium placeat natus enim doloremque debitis
            eaque, qui minus, ad illo nihil maxime explicabo. Odit, quibusdam
            voluptas accusantium laborum temporibus fugit deserunt earum. Natus
            quasi vitae cumque est modi dicta amet veniam illum sed praesentium
            inventore fugit eius dolore, porro quibusdam assumenda voluptates
            expedita consequatur. Nihil libero quos mollitia quisquam unde quasi
            fuga. Nemo voluptates voluptatem odio minus ullam. Ad necessitatibus
            vero iusto cumque, deserunt quo provident repudiandae nemo.
            Consectetur sint, sapiente odio aperiam doloribus voluptas id minus
            fuga quod atque esse accusamus! Voluptate quos animi omnis
            necessitatibus, quae sequi a facere quam debitis distinctio quaerat
            culpa ea iusto, asperiores tempora quidem accusantium! Cum
            repudiandae eligendi totam sint ab fugit, velit fugiat atque!
            Voluptatum dignissimos libero soluta ratione ab, quo earum qui
            provident perspiciatis non molestias itaque harum. Ipsa inventore
            illo exercitationem perspiciatis impedit fugiat, animi minima vitae
            tempore
          </p>
        </Container>
      </BodyContentArea>
    </div>
  );
};

export default Home;
