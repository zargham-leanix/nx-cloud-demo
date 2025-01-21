import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo31Component } from './lib18-demo31.component';

describe('Lib18Demo31Component', () => {
  let component: Lib18Demo31Component;
  let fixture: ComponentFixture<Lib18Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
