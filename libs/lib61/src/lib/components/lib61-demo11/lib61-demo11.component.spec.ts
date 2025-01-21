import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo11Component } from './lib61-demo11.component';

describe('Lib61Demo11Component', () => {
  let component: Lib61Demo11Component;
  let fixture: ComponentFixture<Lib61Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
