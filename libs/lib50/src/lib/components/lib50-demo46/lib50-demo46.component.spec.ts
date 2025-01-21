import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo46Component } from './lib50-demo46.component';

describe('Lib50Demo46Component', () => {
  let component: Lib50Demo46Component;
  let fixture: ComponentFixture<Lib50Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
