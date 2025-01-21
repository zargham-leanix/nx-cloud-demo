import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo17Component } from './lib55-demo17.component';

describe('Lib55Demo17Component', () => {
  let component: Lib55Demo17Component;
  let fixture: ComponentFixture<Lib55Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
