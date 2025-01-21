import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo19Component } from './lib58-demo19.component';

describe('Lib58Demo19Component', () => {
  let component: Lib58Demo19Component;
  let fixture: ComponentFixture<Lib58Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
