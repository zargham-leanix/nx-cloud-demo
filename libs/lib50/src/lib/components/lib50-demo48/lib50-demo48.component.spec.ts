import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo48Component } from './lib50-demo48.component';

describe('Lib50Demo48Component', () => {
  let component: Lib50Demo48Component;
  let fixture: ComponentFixture<Lib50Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
