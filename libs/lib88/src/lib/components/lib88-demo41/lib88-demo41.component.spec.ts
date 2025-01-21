import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo41Component } from './lib88-demo41.component';

describe('Lib88Demo41Component', () => {
  let component: Lib88Demo41Component;
  let fixture: ComponentFixture<Lib88Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
