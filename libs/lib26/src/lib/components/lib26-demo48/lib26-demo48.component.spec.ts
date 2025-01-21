import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo48Component } from './lib26-demo48.component';

describe('Lib26Demo48Component', () => {
  let component: Lib26Demo48Component;
  let fixture: ComponentFixture<Lib26Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
