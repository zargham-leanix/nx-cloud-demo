import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo10Component } from './lib26-demo10.component';

describe('Lib26Demo10Component', () => {
  let component: Lib26Demo10Component;
  let fixture: ComponentFixture<Lib26Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
