import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo41Component } from './lib26-demo41.component';

describe('Lib26Demo41Component', () => {
  let component: Lib26Demo41Component;
  let fixture: ComponentFixture<Lib26Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
