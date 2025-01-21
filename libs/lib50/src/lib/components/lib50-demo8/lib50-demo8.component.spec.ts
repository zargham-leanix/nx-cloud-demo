import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo8Component } from './lib50-demo8.component';

describe('Lib50Demo8Component', () => {
  let component: Lib50Demo8Component;
  let fixture: ComponentFixture<Lib50Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
