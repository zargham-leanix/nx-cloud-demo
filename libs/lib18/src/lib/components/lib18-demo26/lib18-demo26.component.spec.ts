import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo26Component } from './lib18-demo26.component';

describe('Lib18Demo26Component', () => {
  let component: Lib18Demo26Component;
  let fixture: ComponentFixture<Lib18Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
