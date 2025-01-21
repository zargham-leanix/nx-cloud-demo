import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo44Component } from './lib26-demo44.component';

describe('Lib26Demo44Component', () => {
  let component: Lib26Demo44Component;
  let fixture: ComponentFixture<Lib26Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
