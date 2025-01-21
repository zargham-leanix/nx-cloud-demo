import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo31Component } from './lib20-demo31.component';

describe('Lib20Demo31Component', () => {
  let component: Lib20Demo31Component;
  let fixture: ComponentFixture<Lib20Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
