import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo41Component } from './lib50-demo41.component';

describe('Lib50Demo41Component', () => {
  let component: Lib50Demo41Component;
  let fixture: ComponentFixture<Lib50Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
