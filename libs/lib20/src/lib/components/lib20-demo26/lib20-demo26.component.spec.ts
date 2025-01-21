import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo26Component } from './lib20-demo26.component';

describe('Lib20Demo26Component', () => {
  let component: Lib20Demo26Component;
  let fixture: ComponentFixture<Lib20Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
