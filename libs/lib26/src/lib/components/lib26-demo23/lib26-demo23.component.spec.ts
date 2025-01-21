import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo23Component } from './lib26-demo23.component';

describe('Lib26Demo23Component', () => {
  let component: Lib26Demo23Component;
  let fixture: ComponentFixture<Lib26Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
