import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo32Component } from './lib55-demo32.component';

describe('Lib55Demo32Component', () => {
  let component: Lib55Demo32Component;
  let fixture: ComponentFixture<Lib55Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
