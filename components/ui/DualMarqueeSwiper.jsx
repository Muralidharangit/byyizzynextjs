"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const logos = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(1).jpg?alt=media&token=e606d1c8-1272-48bf-95a3-38ee8272213a",
    alt: "Brand 1",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(2).jpg?alt=media&token=cf7337f6-a9d2-44fe-8afa-aca85b5ad1f0",
    alt: "Brand 2",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(4).jpg?alt=media&token=0428dd84-bb50-4a12-9da4-4faa79f0a3d5",
    alt: "Brand 4",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(5).jpg?alt=media&token=24fe65e9-45de-40dd-b01f-0624d8949398",
    alt: "Brand 5",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(6).jpg?alt=media&token=8061f230-3409-423c-9aa5-ede2b5ecb233",
    alt: "Brand 6",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(10).jpg?alt=media&token=9d4ab1f6-156f-4430-9fee-75a2f4f03197",
    alt: "Brand 10",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(11).jpg?alt=media&token=72ee8751-5327-4385-9788-5571d7fa2772",
    alt: "Brand 11",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(12).jpg?alt=media&token=bf1d302f-2b1c-427f-8bd1-ae4e49f6f1bd",
    alt: "Brand 12",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(13).jpg?alt=media&token=73199bf0-903c-4482-af22-6877708fe192",
    alt: "Brand 13",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(14).jpg?alt=media&token=5611062a-a1d6-45c1-b0f2-4e6bd2167c29",
    alt: "Brand 14",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(15).jpg?alt=media&token=b14effa7-1d5c-429b-84bf-42c472c8ef35",
    alt: "Brand 15",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(16).jpg?alt=media&token=d3af59e1-6c83-4c21-bcd5-75016db2417b",
    alt: "Brand 16",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(17).jpg?alt=media&token=17e3d0a4-cddc-454c-a089-4dd5548070e8",
    alt: "Brand 17",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(18).jpg?alt=media&token=a066b527-0c92-4cba-9186-18c1489c9231",
    alt: "Brand 18",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(19).jpg?alt=media&token=a5310d9e-5b1b-4894-b129-6ab5c01d635c",
    alt: "Brand 19",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(20).jpg?alt=media&token=eba7e84f-6eac-4d4b-85f3-21aeaf31e569",
    alt: "Brand 20",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(21).jpg?alt=media&token=3b332498-2393-4f39-8129-864748c0234e",
    alt: "Brand 21",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(1).jpg?alt=media&token=e606d1c8-1272-48bf-95a3-38ee8272213a",
    alt: "Brand 1",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(2).jpg?alt=media&token=cf7337f6-a9d2-44fe-8afa-aca85b5ad1f0",
    alt: "Brand 2",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(4).jpg?alt=media&token=0428dd84-bb50-4a12-9da4-4faa79f0a3d5",
    alt: "Brand 4",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(5).jpg?alt=media&token=24fe65e9-45de-40dd-b01f-0624d8949398",
    alt: "Brand 5",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(6).jpg?alt=media&token=8061f230-3409-423c-9aa5-ede2b5ecb233",
    alt: "Brand 6",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(10).jpg?alt=media&token=9d4ab1f6-156f-4430-9fee-75a2f4f03197",
    alt: "Brand 10",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(11).jpg?alt=media&token=72ee8751-5327-4385-9788-5571d7fa2772",
    alt: "Brand 11",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(12).jpg?alt=media&token=bf1d302f-2b1c-427f-8bd1-ae4e49f6f1bd",
    alt: "Brand 12",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(13).jpg?alt=media&token=73199bf0-903c-4482-af22-6877708fe192",
    alt: "Brand 13",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(14).jpg?alt=media&token=5611062a-a1d6-45c1-b0f2-4e6bd2167c29",
    alt: "Brand 14",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(15).jpg?alt=media&token=b14effa7-1d5c-429b-84bf-42c472c8ef35",
    alt: "Brand 15",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(16).jpg?alt=media&token=d3af59e1-6c83-4c21-bcd5-75016db2417b",
    alt: "Brand 16",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(17).jpg?alt=media&token=17e3d0a4-cddc-454c-a089-4dd5548070e8",
    alt: "Brand 17",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(18).jpg?alt=media&token=a066b527-0c92-4cba-9186-18c1489c9231",
    alt: "Brand 18",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(19).jpg?alt=media&token=a5310d9e-5b1b-4894-b129-6ab5c01d635c",
    alt: "Brand 19",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(20).jpg?alt=media&token=eba7e84f-6eac-4d4b-85f3-21aeaf31e569",
    alt: "Brand 20",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(21).jpg?alt=media&token=3b332498-2393-4f39-8129-864748c0234e",
    alt: "Brand 21",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(1).jpg?alt=media&token=e606d1c8-1272-48bf-95a3-38ee8272213a",
    alt: "Brand 1",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(2).jpg?alt=media&token=cf7337f6-a9d2-44fe-8afa-aca85b5ad1f0",
    alt: "Brand 2",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(4).jpg?alt=media&token=0428dd84-bb50-4a12-9da4-4faa79f0a3d5",
    alt: "Brand 4",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(5).jpg?alt=media&token=24fe65e9-45de-40dd-b01f-0624d8949398",
    alt: "Brand 5",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(6).jpg?alt=media&token=8061f230-3409-423c-9aa5-ede2b5ecb233",
    alt: "Brand 6",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(10).jpg?alt=media&token=9d4ab1f6-156f-4430-9fee-75a2f4f03197",
    alt: "Brand 10",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(11).jpg?alt=media&token=72ee8751-5327-4385-9788-5571d7fa2772",
    alt: "Brand 11",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(12).jpg?alt=media&token=bf1d302f-2b1c-427f-8bd1-ae4e49f6f1bd",
    alt: "Brand 12",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(13).jpg?alt=media&token=73199bf0-903c-4482-af22-6877708fe192",
    alt: "Brand 13",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(14).jpg?alt=media&token=5611062a-a1d6-45c1-b0f2-4e6bd2167c29",
    alt: "Brand 14",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(15).jpg?alt=media&token=b14effa7-1d5c-429b-84bf-42c472c8ef35",
    alt: "Brand 15",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(16).jpg?alt=media&token=d3af59e1-6c83-4c21-bcd5-75016db2417b",
    alt: "Brand 16",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(17).jpg?alt=media&token=17e3d0a4-cddc-454c-a089-4dd5548070e8",
    alt: "Brand 17",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(18).jpg?alt=media&token=a066b527-0c92-4cba-9186-18c1489c9231",
    alt: "Brand 18",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(19).jpg?alt=media&token=a5310d9e-5b1b-4894-b129-6ab5c01d635c",
    alt: "Brand 19",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(20).jpg?alt=media&token=eba7e84f-6eac-4d4b-85f3-21aeaf31e569",
    alt: "Brand 20",
    w: 200,
    h: 100,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(21).jpg?alt=media&token=3b332498-2393-4f39-8129-864748c0234e",
    alt: "Brand 21",
    w: 200,
    h: 100,
  },
];

const logos_img2 = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-500x200%20(1).jpg?alt=media&token=5a0bcb1c-cce7-447e-a1ce-9bcb3bc6b638",
    alt: "cl_logo",
    w: 500,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-500x200.jpg?alt=media&token=f8a611ae-0ffe-4011-866f-d8b4f6eb3054",
    alt: "cl_logo",
    w: 500,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-530x200.jpg?alt=media&token=9f504de5-7fc4-4854-af53-f2df358f9b23",
    alt: "cl_logo",
    w: 530,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-550x200.jpg?alt=media&token=61070019-103d-4d14-8745-d09c9f004b39",
    alt: "cl_logo",
    w: 550,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg1.jpg?alt=media&token=dfba517d-20b3-45a3-8967-aa3703aea7ef",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg2.jpg?alt=media&token=63f9251e-f900-4675-b9ca-47ea30755cb9",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg3.jpg?alt=media&token=9e4ba32d-b61c-4b88-9e04-00d4b1a35e6c",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg.png?alt=media&token=6b4e8195-e182-45de-8d95-988d797ac37a",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(7).jpg?alt=media&token=4438a0be-6a64-474c-ac7d-da5d52f25b34",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(8).jpg?alt=media&token=933b763d-4c40-4dd6-9382-8b8ac148b174",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(9).jpg?alt=media&token=d8bdafb8-660a-4de4-afe9-6442c86ac5de",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200.jpg?alt=media&token=ee3f6e6b-7a43-4dcc-87c0-de03ec7232ec",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-410x200.jpg?alt=media&token=0c96a2f4-ece8-4fd3-9768-ba31ae85a5e6",
    alt: "cl_logo",
    w: 410,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-470x200.jpg?alt=media&token=051f8f76-2ccc-49ef-8113-777abfdfbfee",
    alt: "cl_logo",
    w: 470,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-480x200%20(1).jpg?alt=media&token=e2f1935a-d545-4828-ae8b-3f93e286187f",
    alt: "cl_logo",
    w: 480,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-480x200.jpg?alt=media&token=3522c761-ddfd-4bb1-b143-9f355fae556c",
    alt: "cl_logo",
    w: 480,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-500x200%20(1).jpg?alt=media&token=5a0bcb1c-cce7-447e-a1ce-9bcb3bc6b638",
    alt: "cl_logo",
    w: 500,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-500x200.jpg?alt=media&token=f8a611ae-0ffe-4011-866f-d8b4f6eb3054",
    alt: "cl_logo",
    w: 500,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-530x200.jpg?alt=media&token=9f504de5-7fc4-4854-af53-f2df358f9b23",
    alt: "cl_logo",
    w: 530,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-550x200.jpg?alt=media&token=61070019-103d-4d14-8745-d09c9f004b39",
    alt: "cl_logo",
    w: 550,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg1.jpg?alt=media&token=dfba517d-20b3-45a3-8967-aa3703aea7ef",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg2.jpg?alt=media&token=63f9251e-f900-4675-b9ca-47ea30755cb9",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg3.jpg?alt=media&token=9e4ba32d-b61c-4b88-9e04-00d4b1a35e6c",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg.png?alt=media&token=6b4e8195-e182-45de-8d95-988d797ac37a",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(7).jpg?alt=media&token=4438a0be-6a64-474c-ac7d-da5d52f25b34",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(8).jpg?alt=media&token=933b763d-4c40-4dd6-9382-8b8ac148b174",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(9).jpg?alt=media&token=d8bdafb8-660a-4de4-afe9-6442c86ac5de",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200.jpg?alt=media&token=ee3f6e6b-7a43-4dcc-87c0-de03ec7232ec",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-410x200.jpg?alt=media&token=0c96a2f4-ece8-4fd3-9768-ba31ae85a5e6",
    alt: "cl_logo",
    w: 410,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-470x200.jpg?alt=media&token=051f8f76-2ccc-49ef-8113-777abfdfbfee",
    alt: "cl_logo",
    w: 470,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-480x200%20(1).jpg?alt=media&token=e2f1935a-d545-4828-ae8b-3f93e286187f",
    alt: "cl_logo",
    w: 480,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-480x200.jpg?alt=media&token=3522c761-ddfd-4bb1-b143-9f355fae556c",
    alt: "cl_logo",
    w: 480,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-500x200%20(1).jpg?alt=media&token=5a0bcb1c-cce7-447e-a1ce-9bcb3bc6b638",
    alt: "cl_logo",
    w: 500,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-500x200.jpg?alt=media&token=f8a611ae-0ffe-4011-866f-d8b4f6eb3054",
    alt: "cl_logo",
    w: 500,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-530x200.jpg?alt=media&token=9f504de5-7fc4-4854-af53-f2df358f9b23",
    alt: "cl_logo",
    w: 530,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-550x200.jpg?alt=media&token=61070019-103d-4d14-8745-d09c9f004b39",
    alt: "cl_logo",
    w: 550,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg1.jpg?alt=media&token=dfba517d-20b3-45a3-8967-aa3703aea7ef",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg2.jpg?alt=media&token=63f9251e-f900-4675-b9ca-47ea30755cb9",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg3.jpg?alt=media&token=9e4ba32d-b61c-4b88-9e04-00d4b1a35e6c",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg.png?alt=media&token=6b4e8195-e182-45de-8d95-988d797ac37a",
    alt: "cl_logo",
    w: null,
    h: null,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(7).jpg?alt=media&token=4438a0be-6a64-474c-ac7d-da5d52f25b34",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(8).jpg?alt=media&token=933b763d-4c40-4dd6-9382-8b8ac148b174",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(9).jpg?alt=media&token=d8bdafb8-660a-4de4-afe9-6442c86ac5de",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200.jpg?alt=media&token=ee3f6e6b-7a43-4dcc-87c0-de03ec7232ec",
    alt: "cl_logo",
    w: 400,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-410x200.jpg?alt=media&token=0c96a2f4-ece8-4fd3-9768-ba31ae85a5e6",
    alt: "cl_logo",
    w: 410,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-470x200.jpg?alt=media&token=051f8f76-2ccc-49ef-8113-777abfdfbfee",
    alt: "cl_logo",
    w: 470,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-480x200%20(1).jpg?alt=media&token=e2f1935a-d545-4828-ae8b-3f93e286187f",
    alt: "cl_logo",
    w: 480,
    h: 200,
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-480x200.jpg?alt=media&token=3522c761-ddfd-4bb1-b143-9f355fae556c",
    alt: "cl_logo",
    w: 480,
    h: 200,
  },
];

/** @typedef {{src:string, alt:string, w?:number|null, h?:number|null}} Logo */

/**
 * @param {{items: Logo[], reverse?: boolean, speedMs?: number}} props
 */
function Row({ items, reverse = false, speedMs = 2000 }) {
  return (
    <div
      className={`marquee-mask ${
        reverse ? "marquee-left" : "marquee-right"
      } ticker w-full max-w-[100vw] overflow-hidden`}
    >
      <Swiper
        key={reverse ? "ticker-rev" : "ticker-fwd"}
        modules={[Autoplay]}
        className="w-full select-none"
        slidesPerView="auto"
        spaceBetween={10}
        loop
        loopAdditionalSlides={Math.max(24, items.length * 2)}
        allowTouchMove={false}
        speed={speedMs}
        autoplay={{
          delay: 1,
          reverseDirection: reverse,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: false,
        }}
        onAutoplayStop={(s) => s.autoplay.start()}
        observer
        observeParents
        updateOnWindowResize
      >
        {items.map((logo, idx) => (
          <SwiperSlide key={idx} className="!w-auto">
            <div className="rounded-xl bg-white px-6 py-3 shadow border flex items-center">
              <Image
                unoptimized
                src={logo.src}
                alt={logo.alt}
                width={logo.w ?? 200}
                height={logo.h ?? 100}
                className="h-10 w-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function DualMarqueeSwiper() {
  const SPEED = 2000;
  return (
    <div className="space-y-6">
      {/* TOP: left → right */}
      <Row items={logos} reverse speedMs={SPEED} />
      {/* BOTTOM: right → left */}
      <Row items={logos_img2} speedMs={SPEED} />
    </div>
  );
}
