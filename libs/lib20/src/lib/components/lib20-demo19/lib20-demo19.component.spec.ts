import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo19Component } from './lib20-demo19.component';

describe('Lib20Demo19Component', () => {
  let component: Lib20Demo19Component;
  let fixture: ComponentFixture<Lib20Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
