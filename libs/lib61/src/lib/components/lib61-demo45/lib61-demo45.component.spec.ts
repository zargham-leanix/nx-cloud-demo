import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo45Component } from './lib61-demo45.component';

describe('Lib61Demo45Component', () => {
  let component: Lib61Demo45Component;
  let fixture: ComponentFixture<Lib61Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
