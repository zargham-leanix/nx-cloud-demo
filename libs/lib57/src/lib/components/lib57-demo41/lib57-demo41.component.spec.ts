import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo41Component } from './lib57-demo41.component';

describe('Lib57Demo41Component', () => {
  let component: Lib57Demo41Component;
  let fixture: ComponentFixture<Lib57Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
