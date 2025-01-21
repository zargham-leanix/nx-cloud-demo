import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo12Component } from './lib26-demo12.component';

describe('Lib26Demo12Component', () => {
  let component: Lib26Demo12Component;
  let fixture: ComponentFixture<Lib26Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
