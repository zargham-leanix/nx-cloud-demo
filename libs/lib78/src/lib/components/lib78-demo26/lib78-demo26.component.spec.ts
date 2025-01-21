import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo26Component } from './lib78-demo26.component';

describe('Lib78Demo26Component', () => {
  let component: Lib78Demo26Component;
  let fixture: ComponentFixture<Lib78Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
