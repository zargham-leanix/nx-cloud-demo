import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo25Component } from './lib26-demo25.component';

describe('Lib26Demo25Component', () => {
  let component: Lib26Demo25Component;
  let fixture: ComponentFixture<Lib26Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
