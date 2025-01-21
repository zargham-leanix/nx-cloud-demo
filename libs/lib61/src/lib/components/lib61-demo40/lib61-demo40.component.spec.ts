import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo40Component } from './lib61-demo40.component';

describe('Lib61Demo40Component', () => {
  let component: Lib61Demo40Component;
  let fixture: ComponentFixture<Lib61Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
