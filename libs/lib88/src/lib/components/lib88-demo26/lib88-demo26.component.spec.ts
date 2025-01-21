import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo26Component } from './lib88-demo26.component';

describe('Lib88Demo26Component', () => {
  let component: Lib88Demo26Component;
  let fixture: ComponentFixture<Lib88Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
