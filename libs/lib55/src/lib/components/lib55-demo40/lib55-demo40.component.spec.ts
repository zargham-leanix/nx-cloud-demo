import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo40Component } from './lib55-demo40.component';

describe('Lib55Demo40Component', () => {
  let component: Lib55Demo40Component;
  let fixture: ComponentFixture<Lib55Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
