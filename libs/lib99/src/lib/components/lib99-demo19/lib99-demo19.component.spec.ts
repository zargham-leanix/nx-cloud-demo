import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo19Component } from './lib99-demo19.component';

describe('Lib99Demo19Component', () => {
  let component: Lib99Demo19Component;
  let fixture: ComponentFixture<Lib99Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
