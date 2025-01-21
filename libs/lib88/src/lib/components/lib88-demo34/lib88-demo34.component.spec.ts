import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo34Component } from './lib88-demo34.component';

describe('Lib88Demo34Component', () => {
  let component: Lib88Demo34Component;
  let fixture: ComponentFixture<Lib88Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
