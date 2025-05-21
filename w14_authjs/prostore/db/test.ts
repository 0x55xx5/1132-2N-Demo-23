import {withAccelerate} from '@prisma/extension-accelerate';
import {PrismaClient,Prisma} from '@/lib/generated/prisma';
import simpledata from './sampledata';
const prisma = new PrismaClient().$extends(withAccelerate());

const getProductsByPlainSQL = async () => {
    const prods = await prisma.$queryRaw`SELECT * FROM "Product"`;
    console.log('Products:', prods);
}

const getProductsByPlainSQL2 = async (brand:any) => {
    const prods = await prisma.$queryRaw`SELECT * FROM "Product" WHERE "brand" = ${brand}`;
    
    console.log('Products:', prods);
}
const getProductsByPlainSQL3 = async (brand:any) => {
    let query=Prisma.sql`SELECT * FROM "Product" WHERE "brand" = ${brand}`;

    const prods = await prisma.$queryRaw(query);
    
    console.log('Products:', prods);
}

const deleteAll = async () => {
    const prods= await prisma.product.deleteMany();
    console.log('Deleted products:', prods);
}
const deleteProductById = async () => { 
    const prods= await prisma.product.delete({
        where: {
            id: '6942e6b7-31a8-400e-b718-2ee77a4662fe'
        }
    });
    console.log('Deleted product:', prods);
}

const getProducts = async () => {
    const prods= await prisma.product.findMany();
    console.log('Products:', prods);
}
const getProductById = async () => {
    const prods= await prisma.product.findUnique({
        where: {
            id: 'c61fff00-af0f-4c00-94b5-70345c7de0c6'
        }
    });
    console.log('Product:', prods);
}
const CreateProduct = async () => {
    const prods= await prisma.product.createMany({
        data: simpledata.products,
    });
    console.log('Created products:', prods);

}
const CreateUsers = async () => {
    const users= await prisma.user.createMany({
        data: simpledata.users,
    });
    console.log('Created users:', users);

}

async function main() {
   // await  CreateProduct();
   // await  getProducts();
  //  await  getProductById();
  //await deleteAll();
  //await deleteProductById();
 // await getProductsByPlainSQL3('Polo');
 await CreateUsers();
}
main().then(
    async() => {
        await prisma.$disconnect(0);
    }
).catch(

    async(e) => {
        console.error('Error in main function:', e);
        await prisma.$disconnect();
        process.exit(1);
    }
);
