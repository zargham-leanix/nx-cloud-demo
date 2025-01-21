import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo31Component } from './lib87-demo31.component';

describe('Lib87Demo31Component', () => {
  let component: Lib87Demo31Component;
  let fixture: ComponentFixture<Lib87Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
