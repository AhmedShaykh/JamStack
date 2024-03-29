"use client";
import React, { FC } from 'react';
import { urlForImage } from '@/sanity/lib/image';
import Image from "next/image";
import { Image as IImage } from 'sanity';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
    index: number;
    title: string;
    image: IImage;
    price: number;
    category: string;
};

const notify = () => toast.success("Add New Product");

const ProductCart: FC<Props> = ({ index, image, title, price, category }) => {
    return (
        <div
            key={index}
            className="border border-gray-500 py-4 px-6 rounded-md"
        >
            <Image
                src={urlForImage(image).url()}
                alt="product"
                width={300}
                height={300}
                className="my-4 object-cover max-h-[300px]"
            />

            <h2 className="text-xl my-1 font-bold">
                {title}
            </h2>

            <h3 className="text-lg my-1 font-bold">
                $ {price}
            </h3>

            <div className="flex flex-col">
                <h3 className="uppercase text-gray-400 font-bold text-lg">
                    Category:
                </h3>

                <h3 className="font-bold text-lg">
                    {category}
                </h3>
            </div>

            <button
                className="my-2 py-2 px-6 rounded bg-blue-700 text-white font-semibold"
                onClick={notify}
            >
                Add To Cart
            </button>

            <Toaster />
        </div>
    )
};

export default ProductCart;