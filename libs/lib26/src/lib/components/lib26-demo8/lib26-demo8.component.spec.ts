import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo8Component } from './lib26-demo8.component';

describe('Lib26Demo8Component', () => {
  let component: Lib26Demo8Component;
  let fixture: ComponentFixture<Lib26Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
