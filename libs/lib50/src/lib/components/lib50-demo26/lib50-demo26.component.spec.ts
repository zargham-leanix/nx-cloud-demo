import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo26Component } from './lib50-demo26.component';

describe('Lib50Demo26Component', () => {
  let component: Lib50Demo26Component;
  let fixture: ComponentFixture<Lib50Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
