import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo29Component } from './lib88-demo29.component';

describe('Lib88Demo29Component', () => {
  let component: Lib88Demo29Component;
  let fixture: ComponentFixture<Lib88Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
