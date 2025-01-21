import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo43Component } from './lib78-demo43.component';

describe('Lib78Demo43Component', () => {
  let component: Lib78Demo43Component;
  let fixture: ComponentFixture<Lib78Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
