import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { cn } from "@/lib/utils";

const Contact = () => {
  console.log(contactSrc);
  return (
    <div className="w-full">
      <HeroSection />
      <ContactField />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen isolate flex justify-end items-center p-7">
      <div className="absolute w-full h-screen top-0 left-0 -z-30">
      </div>
      <div className="sm:w-[20rem] md:w-[30rem] xl:w-[50rem] z-50">
        <p className="bg-black text-white bg-opacity-50 shadow-2xl shadow-black  lg:shadow-transparent lg:bg-transparent lg:text-black text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl p-2">
          Nous sommes là pour vous aider ! Que vous ayez des questions sur nos
          services, besoin d&apos;aide pour une commande, ou simplement pour
          nous faire part de vos commentaires, nous serions ravis d&apos;avoir
          de vos nouvelles. N&apos;hésitez pas à nous contacter en utilisant les
          informations de contact ci-dessous
        </p>
      </div>
    </div>
  );
};

const validationSchema = Yup.object({
  nom: Yup.string().required("Le nom est requis"),
  prenom: Yup.string().required("Le prénom est requis"),
  tel: Yup.string()
    .matches(/^[0-9]+$/, "Entrez un numéro valide")
    .required("Le numéro est requis"),
  email: Yup.string()
    .email("Entrez une adresse e-mail valide")
    .required("L'e-mail est requis"),
  message: Yup.string().required("Le message est requis"),
});

const ContactField = () => {
  const formik = useFormik({
    initialValues: {
      nom: "",
      prenom: "",
      tel: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Do whatever you want with the form values here
      console.log(values);
    },
  });
  return (
    <div className="w-full flex flex-col gap-16 p-7 shadow-xl xl:flex-row sm:p-16 md:p-32 xl:p-16">
      <div className="w-full p-8">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-y-11">
            {/* nom input */}
            <div>
              <input
                className={cn(
                  "w-full px-8 py-4 border-2 border-black rounded-md text-xl",
                  {
                    "text-red-500 border-red-500": formik.errors.nom,
                  },
                )}
                name="nom"
                type="text"
                placeholder="Nom"
                onChange={formik.handleChange}
                value={formik.values.nom}
              />
              {formik.errors.nom ? (
                <div className="text-red-500 text-xl">{formik.errors.nom}</div>
              ) : null}
            </div>

            {/* prenom input */}
            <div>
              <input
                className={cn(
                  "w-full px-8 py-4 border-2 border-black rounded-md text-xl",
                  {
                    "text-red-500 border-red-500": formik.errors.prenom,
                  },
                )}
                name="prenom"
                type="text"
                placeholder="Prénom"
                onChange={formik.handleChange}
                value={formik.values.prenom}
              />
              {formik.errors.prenom ? (
                <div className="text-red-500 text-xl">
                  {formik.errors.prenom}
                </div>
              ) : null}
            </div>

            {/* tel input */}
            <div>
              <input
                className={cn(
                  "w-full px-8 py-4 border-2 border-black rounded-md text-xl",
                  {
                    "text-red-500 border-red-500": formik.errors.tel,
                  },
                )}
                name="tel"
                type="text"
                placeholder="Tél"
                inputMode="numeric"
                onChange={formik.handleChange}
                value={formik.values.tel}
              />
              {formik.errors.tel ? (
                <div className="text-red-500 text-xl">{formik.errors.tel}</div>
              ) : null}
            </div>

            {/* email input */}
            <div>
              <input
                className={cn(
                  "w-full px-8 py-4 border-2 border-black rounded-md text-xl",
                  {
                    "text-red-500 border-red-500": formik.errors.email,
                  },
                )}
                name="email"
                type="text"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="text-red-500 text-xl">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            {/* message textArea */}
            <div>
              <textarea
                className={cn(
                  "w-full px-8 py-4 border-2 border-black rounded-md text-xl resize-none",
                  {
                    "text-red-500 border-red-500": formik.errors.message,
                  },
                )}
                name="message"
                rows={4}
                placeholder="Message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              {formik.errors.message ? (
                <div className="text-red-500 text-xl">
                  {formik.errors.message}
                </div>
              ) : null}
            </div>
            <div className="flex justify-center">
              <button className="w-full bg-primary py-4 text-center text-white text-3xl font-semibold rounded-lg cursor-pointer active:scale-[1.01] transition-transform select-none">
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full bg-primary text-white p-4 sm:p-8 font-semibold rounded-md">
        <div>
          <h1 className="relative text-3xl md:text-4xl font-bold after:absolute after:w-32 after:h-2 md:after:w-32 md:after:h-1 after:content-['']  after:bg-white after:-bottom-8 after:left-2 after:rounded-md">
            contacte vous !
          </h1>
        </div>
        <div className="mt-16 flex flex-col gap-y-8">
          <div className="flex gap-x-4 items-center">
            <div className="w-8 h-8">
              <Phone size={30} />
            </div>

            <span className="text-lg xl:text-3xl">0542 97 22 85</span>
          </div>

          <div className="flex gap-x-4 items-center">
            <div className="w-8 h-8">
              <Mail size={30} />
            </div>

            <span className="text-lg xl:text-3xl">pressingtop04@gmail.com</span>
          </div>

          <div className="flex gap-x-4 items-center">
            <div className="w-8 h-8">
              <MapPin size={30} />
            </div>

            <span className="text-lg xl:text-3xl">
              Bir el djir mostakbal 3 oran , Oran, Algeria
            </span>
          </div>

          <div className="flex gap-x-4 items-center">
            <div className="w-8 h-8">
              <Facebook size={30} />
            </div>

            <span className="text-lg xl:text-3xl">TOP Pressing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
