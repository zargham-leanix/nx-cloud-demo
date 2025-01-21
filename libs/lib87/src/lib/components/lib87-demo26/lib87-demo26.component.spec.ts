import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo26Component } from './lib87-demo26.component';

describe('Lib87Demo26Component', () => {
  let component: Lib87Demo26Component;
  let fixture: ComponentFixture<Lib87Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
