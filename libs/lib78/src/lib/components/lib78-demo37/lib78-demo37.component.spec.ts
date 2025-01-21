import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo37Component } from './lib78-demo37.component';

describe('Lib78Demo37Component', () => {
  let component: Lib78Demo37Component;
  let fixture: ComponentFixture<Lib78Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
