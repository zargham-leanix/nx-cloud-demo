import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo41Component } from './lib62-demo41.component';

describe('Lib62Demo41Component', () => {
  let component: Lib62Demo41Component;
  let fixture: ComponentFixture<Lib62Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
