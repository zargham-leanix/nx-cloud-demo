import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo17Component } from './lib78-demo17.component';

describe('Lib78Demo17Component', () => {
  let component: Lib78Demo17Component;
  let fixture: ComponentFixture<Lib78Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
