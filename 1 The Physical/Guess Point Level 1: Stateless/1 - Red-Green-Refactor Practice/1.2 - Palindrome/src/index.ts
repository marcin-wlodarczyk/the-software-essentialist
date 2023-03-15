export function isPalindrome(input: string): boolean {
    let text = input.replace(/\s+/g, '').toLowerCase();
    for(let i = 0, j = text.length-1; j > i; i++, j--) {
        if(text.charAt(i) !== text.charAt(j)) return false;
    }
    return true;
}