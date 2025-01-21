import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo11Component } from './lib52-demo11.component';

describe('Lib52Demo11Component', () => {
  let component: Lib52Demo11Component;
  let fixture: ComponentFixture<Lib52Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
