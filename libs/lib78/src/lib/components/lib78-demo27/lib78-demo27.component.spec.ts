import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo27Component } from './lib78-demo27.component';

describe('Lib78Demo27Component', () => {
  let component: Lib78Demo27Component;
  let fixture: ComponentFixture<Lib78Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
