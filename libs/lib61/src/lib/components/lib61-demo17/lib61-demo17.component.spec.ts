import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo17Component } from './lib61-demo17.component';

describe('Lib61Demo17Component', () => {
  let component: Lib61Demo17Component;
  let fixture: ComponentFixture<Lib61Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
