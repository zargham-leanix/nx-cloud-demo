import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo46Component } from './lib26-demo46.component';

describe('Lib26Demo46Component', () => {
  let component: Lib26Demo46Component;
  let fixture: ComponentFixture<Lib26Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
