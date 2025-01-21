import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo11Component } from './lib55-demo11.component';

describe('Lib55Demo11Component', () => {
  let component: Lib55Demo11Component;
  let fixture: ComponentFixture<Lib55Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
