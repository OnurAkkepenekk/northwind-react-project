import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import ProductService from "../services/productService";
import { toast } from "react-toastify";
export default function productAdd() {
  const initialValues = {
    productName: "",
    unitPrice: 10,
  };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    quantityPerUnit:Yup.number().required("Alanı doldurun"),
    unitsInStock:Yup.number().required("Alanı doldurun"),
    categoryId:Yup.number().required("Alanı doldurun"),
  });

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{
         let productService = new ProductService();
         productService.add(values).then((result)=> toast.success(`${result.data.message}`))
      }}>
        <Form className="ui form">
            <KodlamaIoTextInput name="productName" placeholder="Ürün Adı"></KodlamaIoTextInput>
            <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı"></KodlamaIoTextInput>
            <KodlamaIoTextInput name="quantityPerUnit" placeholder="Birim Başına Miktar"></KodlamaIoTextInput>
            <KodlamaIoTextInput name="unitsInStock" placeholder="Stok adedi"></KodlamaIoTextInput>
            <KodlamaIoTextInput name="categoryId" placeholder="CategoryId"></KodlamaIoTextInput>
            <Button color="green" type="submit">Add</Button>
        </Form>
      </Formik>
    </div>
  );
}
