import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo7Component } from './lib61-demo7.component';

describe('Lib61Demo7Component', () => {
  let component: Lib61Demo7Component;
  let fixture: ComponentFixture<Lib61Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
