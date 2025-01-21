import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo11Component } from './lib78-demo11.component';

describe('Lib78Demo11Component', () => {
  let component: Lib78Demo11Component;
  let fixture: ComponentFixture<Lib78Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
