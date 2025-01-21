import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo39Component } from './lib50-demo39.component';

describe('Lib50Demo39Component', () => {
  let component: Lib50Demo39Component;
  let fixture: ComponentFixture<Lib50Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
