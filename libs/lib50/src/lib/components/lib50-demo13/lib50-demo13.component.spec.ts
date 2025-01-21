import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo13Component } from './lib50-demo13.component';

describe('Lib50Demo13Component', () => {
  let component: Lib50Demo13Component;
  let fixture: ComponentFixture<Lib50Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
