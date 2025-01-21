import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo23Component } from './lib50-demo23.component';

describe('Lib50Demo23Component', () => {
  let component: Lib50Demo23Component;
  let fixture: ComponentFixture<Lib50Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
