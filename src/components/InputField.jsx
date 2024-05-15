import { Flex, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb,Input } from '@chakra-ui/react';

const InputField = ({details,setDetails,loan,text,label,sliderDefault,sliderMax,sliderMin,sliderStep,objKey}) => {
  return (
    <>
        <Flex justifyContent = "space-between" flexWrap= "wrap">
            <Text>{label}</Text>
            <Flex w = {{base: "80%" ,md: "40%"}} alignItems = "center" gap = "0.2rem" mr = "0.8rem">
                {loan && <p>{text}</p>}
                <Input my = {{base: "0.5rem", md: "0"}} value = {details} onChange = {(e) => setDetails(prev => ({...prev,[objKey]: e.target.value}))} type = "number" borderColor = "black"/>
                {!loan && <p>{text}</p>}
            </Flex>
        </Flex>
        <Slider 
        defaultValue={sliderDefault} 
        min={sliderMin} 
        max={sliderMax} 
        step={sliderStep} 
        onChange = {(e) => setDetails(prev => ({...prev,[objKey]: e}))}
        >
            <SliderTrack bg='red.100'>
                <SliderFilledTrack bg='tomato' />
            </SliderTrack>
            <SliderThumb boxSize={6} bg = "red.200"/>
        </Slider>
    </>
    
  )
}

export default InputField
