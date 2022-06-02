import prisma from 'libs/prisma'

export async function getAllPhones () {
  const phones = await prisma.phone.findMany()
  return phones
}

export async function getPhone (number) {
  try {
    const phone = await prisma.phone.findUnique({
      where: { number }
    })
    return phone
  } catch (error) {
    return new Error('Couldn\'t get phone')
  }
}

export async function createPhone (phone) {
  try {
    const phoneCreated = await prisma.phone.create({
      data: phone
    })

    return phoneCreated
  } catch (error) {
    return new Error('Couldn\'t create phone')
  }
}

export async function updatePhone (phone) {
  try {
    const phoneUpdated = await prisma.phone.update({
      where: {
        id: phone.id
      },
      data: phone
    })

    return phoneUpdated
  } catch (error) {
    return new Error('Couldn\'t update phone')
  }
}

export async function deletePhone (id) {
  try {
    await prisma.phone.delete({
      where: {
        id
      }
    })

    return {}
  } catch (error) {
    return new Error('Couldn\'t delete phone')
  }
}

export async function cleanUp () {
  const phones = await prisma.phone.findMany({})

  const deletePhone = async function (phone) {
    return await prisma.phone.delete({
      where: { id: phone.id }
    })
  }

  const deletePhones = async function () {
    return await Promise.all(phones.map(deletePhone))
  }

  await deletePhones()
}
