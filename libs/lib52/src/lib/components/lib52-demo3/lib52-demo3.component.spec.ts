import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo3Component } from './lib52-demo3.component';

describe('Lib52Demo3Component', () => {
  let component: Lib52Demo3Component;
  let fixture: ComponentFixture<Lib52Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
