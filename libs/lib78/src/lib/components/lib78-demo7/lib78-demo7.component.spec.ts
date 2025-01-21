import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo7Component } from './lib78-demo7.component';

describe('Lib78Demo7Component', () => {
  let component: Lib78Demo7Component;
  let fixture: ComponentFixture<Lib78Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
