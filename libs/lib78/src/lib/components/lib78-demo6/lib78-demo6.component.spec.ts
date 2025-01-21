import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo6Component } from './lib78-demo6.component';

describe('Lib78Demo6Component', () => {
  let component: Lib78Demo6Component;
  let fixture: ComponentFixture<Lib78Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
