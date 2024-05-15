import { Box,Flex, Heading, Text, Container} from '@chakra-ui/react'
import { useState } from 'react'
import InputField from './InputField'
import { calculateEmi, calculateInterest, totalAmount } from '../utils/calculate'
import PieChart from './graphs/PieChart'
import LineChart from './graphs/LineChart'
import { convertNum } from '../utils/convertNumber'

const Calculator = () => {

    const [details,setDetails] = useState({
        loanAmt: 100000,
        interest: 1,
        loanDuration: 1,
        courseDuration: 1,
        gracePeriod: 1,
        annualSalary: 100000,
        years: 5
    })

    const emi = calculateEmi(Number(details.loanAmt),Number(details.interest),Number(details.loanDuration),Number(details.courseDuration),Number(details.gracePeriod));
    const interest = calculateInterest(Number(details.loanAmt),Number(details.interest),Number(details.loanDuration),Number(details.courseDuration),Number(details.gracePeriod));
    const total = totalAmount(Number(details.loanAmt),Number(details.interest),Number(details.loanDuration),Number(details.courseDuration),Number(details.gracePeriod));


    return (
        <Box mt = "4rem" bg = "white" p = "2rem" w = {{base: "100%", md: "80%"}} rounded = "20px" pb= "3rem"> 
            <Heading mb = "5rem" textAlign= "center" fontSize= "2rem" fontWeight= "500">Future Earning Calculator</Heading>
            <Flex flexWrap= "wrap" gap = "2rem">
                <Flex direction= "column" w = {{base:"100%" , lg: "40%"}} gap = "2rem" >
                    <Box p = "1rem 2rem" shadow= "#E34731" rounded = "10px">
                        <InputField 
                        details = {details.loanAmt}
                        objKey = "loanAmt" 
                        setDetails = {setDetails} 
                        loan = {true} 
                        text = "₹" 
                        label = "Loan Amount" 
                        sliderDefault = {100000} 
                        sliderMin = {100000} 
                        sliderMax = {10000000} 
                        sliderStep = {100000}
                        />
                    </Box>
                    <Box p = "1rem 2rem" shadow= "#E34731" rounded = "10px">
                        <InputField 
                        details = {details.annualSalary} 
                        objKey = "annualSalary"
                        setDetails = {setDetails} 
                        loan = {true} 
                        text = "₹" 
                        label = "Annual Salary" 
                        sliderDefault = {100000} 
                        sliderMin = {100000} 
                        sliderMax = {10000000} 
                        sliderStep = {100000}
                        />
                    </Box>
                    <Box p = "1rem 2rem" shadow= "#E34731" rounded = "10px">
                        <InputField 
                        details = {details.interest}
                        objKey = "interest" 
                        setDetails = {setDetails} 
                        loan = {false} 
                        text = "%" 
                        label = "Interest(p.a.)" 
                        sliderDefault = {1} 
                        sliderMin = {1} 
                        sliderMax = {20} 
                        sliderStep = {1}
                        />
                    </Box>
                    <Box p = "1rem 2rem" shadow= "#E34731" rounded = "10px">
                        <InputField 
                        details = {details.loanDuration}
                        objKey = "loanDuration" 
                        setDetails = {setDetails} 
                        loan = {false} 
                        text = "Years" 
                        label = "Loan Duration" 
                        sliderDefault = {1} 
                        sliderMin = {1} 
                        sliderMax = {20} 
                        sliderStep = {1}
                        />
                    </Box>
                    <Box p = "1rem 2rem" shadow= "#E34731" rounded = "10px">
                        <InputField 
                        details = {details.courseDuration} 
                        objKey = "courseDuration"
                        setDetails = {setDetails} 
                        loan = {false} 
                        text = "Months" 
                        label = "Course Duration" 
                        sliderDefault = {1} 
                        sliderMin = {1} 
                        sliderMax = {48} 
                        sliderStep = {1}
                        />
                    </Box>
                    <Box p = "1rem 2rem" shadow= "#E34731" rounded = "10px">
                        <InputField 
                        details = {details.gracePeriod} 
                        objKey = "gracePeriod"
                        setDetails = {setDetails} 
                        loan = {false} 
                        text = "Months" 
                        label = "Grace Period" 
                        sliderDefault = {1} 
                        sliderMin = {1} 
                        sliderMax = {12} 
                        sliderStep = {1}
                        />
                    </Box>
                    <Box p = "1rem 2rem" shadow= "#E34731" rounded = "10px">
                        <InputField 
                        details = {details.years} 
                        objKey = "years"
                        setDetails = {setDetails} 
                        loan = {false} 
                        text = "Years" 
                        label = "Time Period" 
                        sliderDefault = {5} 
                        sliderMin = {5} 
                        sliderMax = {20} 
                        sliderStep = {1}
                        />
                    </Box>
                </Flex>
                <Flex direction = "column" alignItems= "center" justifyContent = "center" flexGrow= "1">
                    <Flex gap = "2rem" fontWeight= "600" fontSize = "1.2rem" flexWrap= "wrap">
                    <Box>
                            <Container>
                                <Text color = "slategrey">Total Amount</Text>
                                <Text>
                                    ₹ {convertNum(total)}
                                </Text>
                            </Container>
                            <Container mt= "2rem">
                                <Text color = "slategrey">Montly EMI</Text>
                                <Text>
                                    ₹ {convertNum(emi)}
                                </Text>
                            </Container>
                        </Box>
                        <Box>
                            <Container>
                                <Text color = "slategrey">Principal Amount</Text>
                                <Text>₹ {convertNum(details.loanAmt)}</Text>
                            </Container>
                            <Container mt= "2rem">
                                <Text color = "slategrey">Total Interest</Text>
                                <Text>
                                    ₹ {convertNum(interest)}
                                </Text>
                            </Container>
                        </Box>
                       
                    </Flex>
                    <Box mt = "3rem" w = {{base:"100%", md: "50%"}} ml = "auto" mr = "auto" p = "2" boxShadow="md">
                <LineChart details = {details} />
            </Box>
                    <Box mt = "3rem">
                        <PieChart details = {details}/>
                    </Box>
                </Flex>
            </Flex>
          
        </Box>
    )
}

export default Calculator
