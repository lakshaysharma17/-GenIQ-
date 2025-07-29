import {z} from "zod";
export const loginSchema = z.object({
    email: z.string().min(1,'Email is required').email('Please enter valid email'),
    password:z.string().min(8,'Min 8 characters').max(20),

});
export type LoginSchema = z.infer<typeof loginSchema>;