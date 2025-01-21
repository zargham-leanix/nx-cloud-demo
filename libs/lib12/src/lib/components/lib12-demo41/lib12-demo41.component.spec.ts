import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo41Component } from './lib12-demo41.component';

describe('Lib12Demo41Component', () => {
  let component: Lib12Demo41Component;
  let fixture: ComponentFixture<Lib12Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
