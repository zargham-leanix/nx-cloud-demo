import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo3Component } from './lib55-demo3.component';

describe('Lib55Demo3Component', () => {
  let component: Lib55Demo3Component;
  let fixture: ComponentFixture<Lib55Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
