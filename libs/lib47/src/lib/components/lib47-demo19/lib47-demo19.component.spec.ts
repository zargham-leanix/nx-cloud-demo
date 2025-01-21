import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo19Component } from './lib47-demo19.component';

describe('Lib47Demo19Component', () => {
  let component: Lib47Demo19Component;
  let fixture: ComponentFixture<Lib47Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
