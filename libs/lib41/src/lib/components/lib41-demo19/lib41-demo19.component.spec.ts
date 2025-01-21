import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo19Component } from './lib41-demo19.component';

describe('Lib41Demo19Component', () => {
  let component: Lib41Demo19Component;
  let fixture: ComponentFixture<Lib41Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
