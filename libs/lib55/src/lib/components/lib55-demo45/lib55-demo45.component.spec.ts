import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo45Component } from './lib55-demo45.component';

describe('Lib55Demo45Component', () => {
  let component: Lib55Demo45Component;
  let fixture: ComponentFixture<Lib55Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
