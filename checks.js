function authentiate(i) {
    try {
        if (i == 5) {
            throw new Error("Error");
        }
        return { status: true }
    } catch (err) {
        return { status: false ,error:err.message}
    }
   
}

async function authentiateInfo(i) {
    try {
        if (i == 5) {
            throw new Error("Went")
        }

    } catch (error) {
        return { status: false ,error:error.message}
    }
    
}

async function main() {
    let access = await authentiateInfo(3);
    console.log(access)
}
main()