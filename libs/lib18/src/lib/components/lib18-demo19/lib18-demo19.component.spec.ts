import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo19Component } from './lib18-demo19.component';

describe('Lib18Demo19Component', () => {
  let component: Lib18Demo19Component;
  let fixture: ComponentFixture<Lib18Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
