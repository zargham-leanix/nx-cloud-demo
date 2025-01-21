import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo19Component } from './lib66-demo19.component';

describe('Lib66Demo19Component', () => {
  let component: Lib66Demo19Component;
  let fixture: ComponentFixture<Lib66Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
