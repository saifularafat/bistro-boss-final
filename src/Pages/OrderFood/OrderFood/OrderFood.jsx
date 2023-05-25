import { useState } from 'react';
import Cover from '../../../Component/Cover/Cover';
import coverImg from './../../../assets/shop/banner2.jpg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../Component/useMenu/useMenu';
import OrderCard from '../OrderCard/OrderCard';
import { useParams } from 'react-router-dom';

const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks' ]
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    
    const [menu] = useMenu();
    console.log(category);
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Order Food
                </title>
            </Helmet>
            <Cover
                img={coverImg}
                title={
                    <span className='font-Cinzel font-extrabold text-6xl text-white uppercase'>
                        OUR Food
                    </span>
                }
                description={
                    <span className='font-Cinzel font-bold text-2xl text-white uppercase'>
                        Would you link to try a dish?
                    </span>
                }>
            </Cover>

            <div className='max-w-6xl mx-auto text-center my-12'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="border-none p-2 shadow-2xl">
                        <Tab>
                            <span className='sub_btn'>
                                Salad
                            </span>
                        </Tab>
                        <Tab>
                            <span className='sub_btn'>
                                Pizza
                            </span>
                        </Tab>
                        <Tab>
                            <span className='sub_btn'>
                                Soups
                            </span>
                        </Tab>
                        <Tab>
                            <span className='sub_btn'>
                                Desserts
                            </span>
                        </Tab>
                        <Tab>
                            <span className='sub_btn'>
                                Drinks
                            </span>
                        </Tab>
                    </TabList>
                    {/* sub Category */}
                    <TabPanel>
                        <OrderCard items={salad}></OrderCard>
                    </TabPanel>
                    <TabPanel>
                        <OrderCard items={pizza}></OrderCard>
                    </TabPanel>
                    <TabPanel>
                        <OrderCard items={soup}></OrderCard>
                    </TabPanel>
                    <TabPanel>
                        <OrderCard items={dessert}></OrderCard>
                    </TabPanel>
                    <TabPanel>
                        <OrderCard items={drinks}></OrderCard>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;