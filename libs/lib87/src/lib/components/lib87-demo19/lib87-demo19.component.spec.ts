import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo19Component } from './lib87-demo19.component';

describe('Lib87Demo19Component', () => {
  let component: Lib87Demo19Component;
  let fixture: ComponentFixture<Lib87Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
