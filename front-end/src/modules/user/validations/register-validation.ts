import {z} from "zod";
export const registerSchema = z.object({
    email: z.string().min(1,'Email is required').email('Please enter valid email'),
    password:z.string().min(8,'Min 8 characters').max(20),
    name:z.string().min(3,'Min length').max(10,'Max Length')

});
export type RegisterSchema = z.infer<typeof registerSchema>;