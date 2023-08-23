import { useDisclosure } from '@mantine/hooks';
import { Modal, Tabs, Table, Select } from '@mantine/core';
import { table_body, table_head } from '../../../helper/data';
import { IconChevronDown } from '@tabler/icons-react';

const ViewProduct = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const TableHead = table_head.map((ele) => (
    <tr key={ele.id} className='grid grid-cols-3 py-4 items-center'>
      <th>{ele.name}</th>
      <th>{ele.Standard}</th>
      <th>
        <Select
          rightSection={<IconChevronDown size='1rem' />}
          rightSectionWidth={30}
          defaultValue={ele.size[0]}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          data={ele.size}
        />
      </th>
    </tr>
  ));

  const TableContent = table_body[0].sizes.map((ele) => (
    <tr key={ele.name} className='grid grid-cols-3'>
      <td className='text-center'>{ele.name}</td>
      <td className='text-center'>{ele.standard}</td>
      <td className='text-center'>{ele.size}</td>
    </tr>
  ));

  return (
    <>
      <section
        className='view-product container mx-auto px-4 py-8'
        style={{ height: '1700px' }}
      >
        <div className='grid grid-cols-12 gap-8'>
          <div className='col-span-8'>
            <div className='product-container grid grid-cols-12 gap-[0.8rem]'>
              <div>
                <img
                  src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36310649_1000.jpg'
                  alt='pro1'
                />
              </div>
              <div>
                <img
                  src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36311705_1000.jpg'
                  alt='pro1'
                />
              </div>
              <div>
                <img
                  src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36312398_1000.jpg'
                  alt='pro1'
                />
              </div>
              <div>
                <img
                  src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36311698_1000.jpg'
                  alt='pro1'
                />
              </div>
              <div>
                <img
                  src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36312425_1000.jpg'
                  alt='pro1'
                />
              </div>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='product-details-right grid gap-6'>
              {/* first */}
              <div className='flex gap-3'>
                <p className='font-bold text-sm'>Last 1 left</p>
                <p className=' text-sm'> — make it yours!</p>
              </div>
              {/* second */}
              <div className='grid gap-6'>
                <div>
                  <p className='text-[#727272]'>Conscious</p>
                  <div>
                    <a href='#' className='text-[22px] font-bold'>
                      Prada
                    </a>
                    <p>Re-Nylon overshirt jacket</p>
                  </div>
                </div>
                <div>
                  <p className='text-[22px] '>$3,050</p>
                  <p>Import duties included</p>
                </div>
              </div>

              {/* third */}
              <div className='flex justify-end'>
                <button onClick={open} className='underline'>
                  Size guide
                </button>
              </div>
              <Modal
                opened={opened}
                onClose={close}
                title='Prada Size guide'
                centered
                size='47rem'
              >
                <h3>Women</h3>

                <div className='grid grid-cols-12'>
                  <div className='col-span-3'>
                    <img
                      src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36310649_480.jpg'
                      alt='pro'
                      className='p-4'
                    />
                  </div>
                  <div className='col-span-8'>
                    <h4 className='text-[22px] font-bold'>Prada</h4>
                    <h5>Re-Nylon overshirt jacket</h5>
                  </div>
                </div>
                <div>
                  <Tabs color='dark' defaultValue='gallery'>
                    <Tabs.List>
                      <Tabs.Tab value='gallery'>
                        <h3 className='uppercase text-[17px]'>
                          Conversion chart
                        </h3>
                      </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value='gallery' pt='xs'>
                      <Table striped highlightOnHover>
                        {/* title */}
                        {TableHead}

                        {/* content */}
                        {TableContent}
                      </Table>
                    </Tabs.Panel>
                  </Tabs>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewProduct;
