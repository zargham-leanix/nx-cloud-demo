import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo42Component } from './lib50-demo42.component';

describe('Lib50Demo42Component', () => {
  let component: Lib50Demo42Component;
  let fixture: ComponentFixture<Lib50Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
