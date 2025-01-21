import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo26Component } from './lib26-demo26.component';

describe('Lib26Demo26Component', () => {
  let component: Lib26Demo26Component;
  let fixture: ComponentFixture<Lib26Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
